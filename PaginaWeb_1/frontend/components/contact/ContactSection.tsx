"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Clock, MessageCircle, Phone } from "lucide-react";
import toast from "react-hot-toast";
import { useLanguage } from "@/context/LanguageContext";
import { crearSolicitud } from "@/services/presupuestos";
import type { PresupuestoFormData } from "@/types";
import { ApiError } from "@/services/api";

const WHATSAPP = "34685145536";
const PHONE_DISPLAY = "685145536";
const PHONE_LINK = "tel:+34685145536";

function SendIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className ?? "size-6"}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
      />
    </svg>
  );
}

interface FormErrors {
  nombre?: string;
  telefono_prefijo?: string;
  telefono_numero?: string;
  email?: string;
  poblacion?: string;
  trabajo_realizar?: string;
  acepta_aviso_legal?: string;
}

export function ContactSection() {
  const { t, mounted } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { rootMargin: "-60px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [form, setForm] = useState<PresupuestoFormData>({
    nombre: "",
    telefono_prefijo: "+34",
    telefono_numero: "",
    email: "",
    poblacion: "",
    trabajo_realizar: "",
    acepta_aviso_legal: false,
    archivo_referencia: null,
  });

  const validate = (): boolean => {
    const next: FormErrors = {};
    const required = t("form.required");

    if (!form.nombre.trim()) next.nombre = required;
    if (!form.telefono_prefijo.trim() || !form.telefono_prefijo.startsWith("+")) {
      next.telefono_prefijo = required;
    }
    if (!/^\d{9}$/.test(form.telefono_numero)) {
      next.telefono_numero = t("form.phone.invalid");
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = required;
    }
    if (!form.poblacion.trim()) next.poblacion = required;
    if (!form.trabajo_realizar.trim()) next.trabajo_realizar = required;
    if (!form.acepta_aviso_legal) next.acepta_aviso_legal = t("form.legal.required");

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      await crearSolicitud(form);
      toast.success(t("form.success"), {
        style: { borderColor: "rgba(57, 255, 20, 0.6)" },
      });
      setForm({
        nombre: "",
        telefono_prefijo: "+34",
        telefono_numero: "",
        email: "",
        poblacion: "",
        trabajo_realizar: "",
        acepta_aviso_legal: false,
        archivo_referencia: null,
      });
      setErrors({});
    } catch (err) {
      if (err instanceof ApiError && err.data) {
        const fieldErrors: FormErrors = {};
        for (const [key, val] of Object.entries(err.data)) {
          if (Array.isArray(val)) fieldErrors[key as keyof FormErrors] = val[0] as string;
          else if (typeof val === "string")
            fieldErrors[key as keyof FormErrors] = val;
        }
        setErrors((prev) => ({ ...prev, ...fieldErrors }));
      }
      toast.error(t("form.error"));
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-pagealt bg-page/50 px-4 py-3 text-prose outline-none placeholder:text-subtle/60 transition focus:border-navy/50 focus:bg-white focus:shadow-[0_0_0_3px_rgba(27,79,140,0.08)]";

  return (
    <section
      id="contacto"
      ref={ref}
      className="relative z-10 scroll-mt-24 bg-page py-24"
    >
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-60" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Encabezado centrado */}
        <div
          className={`mb-12 text-center transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="inline-block rounded-full bg-navy/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-navy">
            Contacto
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-prose lg:text-4xl">
            {mounted ? t("contact.title") : "Solicita tu presupuesto gratis"}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-subtle">
            Cuéntanos qué necesitas y te llamamos sin compromiso.
          </p>
          <div className="mt-4 flex justify-center">
            <span className="h-1 w-16 rounded-full bg-navy" />
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          <div
            className={`lg:col-span-2 transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
            }`}
          >
            <h3 className="font-display text-xl font-bold text-prose">
              Otras formas de contacto
            </h3>

            <div className="mt-8 space-y-4">
              <a
                href={PHONE_LINK}
                className="flex items-center gap-4 rounded-xl border border-pagealt bg-white p-5 shadow-card transition hover:border-navy/30 hover:shadow-navy"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/10">
                  <Phone className="h-6 w-6 text-navy" />
                </span>
                <div>
                  <p className="text-sm text-subtle">
                    {mounted ? t("contact.call") : "Llámanos al"}
                  </p>
                  <p className="font-display text-xl font-bold text-navy">
                    {PHONE_DISPLAY}
                  </p>
                </div>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-pagealt bg-white p-5 shadow-card transition hover:border-green-500/30 hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </span>
                <div>
                  <p className="text-sm text-subtle">WhatsApp</p>
                  <p className="font-display font-semibold text-prose">
                    {mounted ? t("contact.whatsapp") : "Escríbenos un WhatsApp"}
                  </p>
                </div>
              </a>

              <div className="rounded-xl border border-pagealt bg-white/70 p-5">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy/10">
                    <Clock className="h-5 w-5 text-navy" />
                  </span>
                  <p className="font-display font-semibold text-prose">Horario de atención</p>
                </div>
                <div className="space-y-2.5">
                  {[
                    { dias: "Lunes – Viernes", horas: "9:00 – 19:00 h", abierto: true },
                    { dias: "Sábado", horas: "9:00 – 14:00 h", abierto: true },
                    { dias: "Domingo", horas: "Cerrado", abierto: false },
                  ].map(({ dias, horas, abierto }) => (
                    <div key={dias} className="flex items-center justify-between text-sm">
                      <span className="text-subtle">{dias}</span>
                      <span className={`font-medium ${abierto ? "text-prose" : "text-subtle/60"}`}>
                        {horas}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-subtle/60">
                  Fuera de horario, puedes escribirnos por WhatsApp.
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`relative lg:col-span-3 transition-all duration-700 delay-150 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
            }`}
            noValidate
          >
            <div className="rounded-2xl border border-pagealt bg-white p-8 shadow-card lg:p-10">

              <div className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="mb-2 block text-sm font-medium text-prose">
                    {mounted ? t("contact.nombre") : "Nombre"} *
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    value={form.nombre}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, nombre: e.target.value }))
                    }
                    className={inputClass}
                  />
                  {errors.nombre && (
                    <p className="mt-1 text-sm text-red-400">{errors.nombre}</p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-prose">
                    {mounted ? t("contact.telefono") : "Teléfono"} *
                  </label>
                  <div className="flex gap-3">
                    <div className="w-32 shrink-0">
                      <div className="flex items-center rounded-lg border border-pagealt bg-page/50 focus-within:border-navy/50 focus-within:bg-white">
                        <span className="pl-3 font-mono text-navy" aria-hidden>
                          +
                        </span>
                        <input
                          id="telefono_prefijo"
                          name="telefono_prefijo"
                          type="text"
                          required
                          value={form.telefono_prefijo.replace(/^\+/, "")}
                          onChange={(e) => {
                            const digits = e.target.value
                              .replace(/\D/g, "")
                              .slice(0, 4);
                            setForm((f) => ({
                              ...f,
                              telefono_prefijo: `+${digits}`,
                            }));
                          }}
                          className="min-w-0 flex-1 bg-transparent py-3 pr-2 font-mono text-prose outline-none"
                          placeholder="34"
                          aria-label="Prefijo telefónico (sin +)"
                        />
                      </div>
                      {errors.telefono_prefijo && (
                        <p className="mt-1 text-sm text-red-400">
                          {errors.telefono_prefijo}
                        </p>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <input
                        id="telefono_numero"
                        name="telefono_numero"
                        type="tel"
                        required
                        inputMode="numeric"
                        maxLength={9}
                        value={form.telefono_numero}
                        onChange={(e) => {
                          const digits = e.target.value.replace(/\D/g, "").slice(0, 9);
                          setForm((f) => ({ ...f, telefono_numero: digits }));
                        }}
                        className={inputClass}
                        placeholder="600000000"
                        aria-label="Número de teléfono (9 dígitos)"
                      />
                      {errors.telefono_numero && (
                        <p className="mt-1 text-sm text-red-400">
                          {errors.telefono_numero}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-prose">
                    {mounted ? t("contact.email") : "Dirección de correo electrónico"} *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className={inputClass}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="poblacion" className="mb-2 block text-sm font-medium text-prose">
                    {mounted ? t("contact.poblacion") : "Población"} *
                  </label>
                  <input
                    id="poblacion"
                    name="poblacion"
                    type="text"
                    required
                    value={form.poblacion}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, poblacion: e.target.value }))
                    }
                    className={inputClass}
                  />
                  {errors.poblacion && (
                    <p className="mt-1 text-sm text-red-400">{errors.poblacion}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="trabajo" className="mb-2 block text-sm font-medium text-prose">
                    {mounted ? t("contact.trabajo") : "Trabajo a realizar"} *
                  </label>
                  <textarea
                    id="trabajo"
                    name="trabajo_realizar"
                    required
                    rows={4}
                    value={form.trabajo_realizar}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, trabajo_realizar: e.target.value }))
                    }
                    className={`${inputClass} resize-y`}
                  />
                  {errors.trabajo_realizar && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.trabajo_realizar}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-prose">
                    Planos o fotos de referencia (opcional)
                  </label>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        archivo_referencia: e.target.files?.[0] ?? null,
                      }))
                    }
                    className="w-full text-sm text-subtle file:mr-4 file:rounded-lg file:border-0 file:bg-navy/10 file:px-4 file:py-2 file:text-navy file:font-medium"
                  />
                </div>

                <div className="rounded-lg border border-pagealt bg-page/50 p-4">
                  <p className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-navy">
                    {mounted ? t("contact.aviso") : "Aviso Legal"}
                  </p>
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      checked={form.acepta_aviso_legal}
                      onChange={(e) =>
                        setForm((f) => ({
                          ...f,
                          acepta_aviso_legal: e.target.checked,
                        }))
                      }
                      className="mt-1 h-4 w-4 rounded border-pagealt bg-white accent-navy"
                    />
                    <span className="text-sm text-subtle">
                      {mounted ? t("contact.legal") : "Acepto los Términos..."} *
                    </span>
                  </label>
                  {errors.acepta_aviso_legal && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.acepta_aviso_legal}
                    </p>
                  )}
                  <Link
                    href="/aviso-legal"
                    className="mt-2 inline-block text-xs text-navy hover:underline"
                  >
                    Ver Política de Privacidad y Aviso Legal
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-navy py-4 font-display text-sm font-bold uppercase tracking-wider text-white shadow-navy transition hover:bg-navy-dark disabled:opacity-50"
                >
                  {mounted ? t("contact.submit") : "Solicitar Información"}
                  <SendIcon className="size-6" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
