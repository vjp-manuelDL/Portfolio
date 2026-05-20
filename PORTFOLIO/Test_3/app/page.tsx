"use client";

import { FormEvent, useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Snowflake,
  Wrench
} from "lucide-react";
import { cn } from "@/lib/utils";
import { brands } from "@/lib/brands";

const phone = "927 42 24 03";
const email = "inclima@inclimaplasencia.es";

const services = [
  {
    icon: Snowflake,
    title: "Instalacion de climatizacion",
    text: "Estudiamos la vivienda o local, calculamos potencia y dejamos el equipo instalado con una terminacion limpia.",
    image:
      "/assets/Instalaci%C3%B3n/reparador-uniforme-instalando-unidad-exterior-aire-acondicionado-980x653.jpg"
  },
  {
    icon: Wrench,
    title: "Reparacion y SAT",
    text: "Diagnostico claro, recambios adecuados y reparaciones para recuperar rendimiento sin cambiar equipos antes de tiempo.",
    image:
      "/assets/Reparaci%C3%B3n/reparadores-aire-acondicionado-uniforme-azul-estan-revisando-reparando-aire-colgado-pared.jpg"
  },
  {
    icon: ShieldCheck,
    title: "Mantenimiento preventivo",
    text: "Limpieza de filtros, revision de presiones, comprobacion electrica y puesta a punto antes de los meses de mas uso.",
    image:
      "/assets/Mantenimiento/limpieza-aire-acondicionado-hombre-guantes-revisa-filtro-hombre-joven-que-ajusta-sistema-aire-acondicionado.jpg"
  }
];

const featuredBrands = brands.slice(0, 8);

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  service: string;
  message: string;
  consent: boolean;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  service: "Instalacion",
  message: "",
  consent: false
};

function countWords(value: string) {
  return value.trim().split(/\s+/).filter(Boolean).length;
}

function ContactForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [sent, setSent] = useState(false);
  const words = countWords(form.message);

  const errors = useMemo(() => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Indica tu nombre.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Escribe un correo valido.";
    if (!form.phone.trim()) next.phone = "Incluye un telefono de contacto.";
    if (!form.subject.trim()) next.subject = "Anade un asunto.";
    if (!form.message.trim()) next.message = "Cuéntanos que necesitas.";
    if (words > 5000) next.message = "El mensaje supera el limite de 5000 palabras.";
    if (!form.consent) next.consent = "Acepta la politica de privacidad.";
    return next;
  }, [form, words]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setSent(false);
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
      consent: true
    });

    if (Object.keys(errors).length) return;

    const body = encodeURIComponent(
      `Nombre: ${form.name}\nTelefono: ${form.phone}\nServicio: ${form.service}\n\n${form.message}`
    );
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(form.subject)}&body=${body}`;
    setSent(true);
  }

  const inputClass = (field: keyof FormState) =>
    cn(
      "w-full rounded-2xl border bg-white px-4 py-3 text-sm text-[#0a1b33] outline-none transition focus:border-[#0a1b33] focus:ring-4 focus:ring-slate-200",
      touched[field] && errors[field] ? "border-red-400 bg-red-50/60" : "border-slate-200"
    );

  return (
    <form
      onSubmit={submit}
      className={cn(
        "rounded-[32px] border border-slate-200/70 bg-white p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)]",
        compact ? "space-y-3" : "space-y-4"
      )}
      noValidate
    >
      <div className="grid gap-3 md:grid-cols-2">
        <Field label="Nombre" error={touched.name ? errors.name : ""}>
          <input
            className={inputClass("name")}
            value={form.name}
            onBlur={() => setTouched((v) => ({ ...v, name: true }))}
            onChange={(event) => update("name", event.target.value)}
            placeholder="Tu nombre"
          />
        </Field>
        <Field label="Telefono" error={touched.phone ? errors.phone : ""}>
          <input
            className={inputClass("phone")}
            value={form.phone}
            onBlur={() => setTouched((v) => ({ ...v, phone: true }))}
            onChange={(event) => update("phone", event.target.value)}
            placeholder="927 42 24 03"
          />
        </Field>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <Field label="Correo" error={touched.email ? errors.email : ""}>
          <input
            type="email"
            className={inputClass("email")}
            value={form.email}
            onBlur={() => setTouched((v) => ({ ...v, email: true }))}
            onChange={(event) => update("email", event.target.value)}
            placeholder="nombre@correo.com"
          />
        </Field>
        <Field label="Servicio">
          <select
            className={inputClass("service")}
            value={form.service}
            onChange={(event) => update("service", event.target.value)}
          >
            <option>Instalacion</option>
            <option>Reparacion</option>
            <option>Mantenimiento</option>
            <option>Presupuesto</option>
          </select>
        </Field>
      </div>
      <Field label="Asunto" error={touched.subject ? errors.subject : ""}>
        <input
          className={inputClass("subject")}
          value={form.subject}
          onBlur={() => setTouched((v) => ({ ...v, subject: true }))}
          onChange={(event) => update("subject", event.target.value)}
          placeholder="Revision, instalacion, averia..."
        />
      </Field>
      <Field label="Mensaje" error={touched.message ? errors.message : ""}>
        <textarea
          className={cn(inputClass("message"), "min-h-36 resize-y")}
          value={form.message}
          onBlur={() => setTouched((v) => ({ ...v, message: true }))}
          onChange={(event) => update("message", event.target.value)}
          placeholder="Describe el equipo, la estancia, el problema o cuando te vendria bien que contactemos."
        />
        <div className={cn("mt-2 text-right text-xs", words > 5000 ? "text-red-500" : "text-slate-500")}>
          {words}/5000 palabras
        </div>
      </Field>
      <label className="flex gap-3 text-xs leading-5 text-slate-600">
        <input
          type="checkbox"
          checked={form.consent}
          onBlur={() => setTouched((v) => ({ ...v, consent: true }))}
          onChange={(event) => update("consent", event.target.checked)}
          className="mt-1 h-4 w-4 rounded border-slate-300 accent-[#0a1b33]"
        />
        <span>
          Acepto que Inclima Plasencia use estos datos para responder a mi consulta. Puedes revisar la{" "}
          <a className="font-semibold text-[#0a1b33] underline" href="/politica-de-privacidad">
            politica de privacidad
          </a>
          .
          {touched.consent && errors.consent ? <b className="block text-red-500">{errors.consent}</b> : null}
        </span>
      </label>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0a152d] px-6 py-3 text-sm font-semibold text-white"
      >
        Enviar consulta <ArrowRight className="h-4 w-4" />
      </motion.button>
      {sent ? <p className="text-center text-sm font-semibold text-emerald-600">Mensaje preparado en tu correo.</p> : null}
    </form>
  );
}

function Field({
  label,
  error,
  children
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">{label}</span>
      {children}
      {error ? <span className="mt-1.5 block text-xs font-semibold text-red-500">{error}</span> : null}
    </label>
  );
}

function Header() {
  return (
    <header className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-5 py-5">
      <a href="#" className="flex items-center gap-3">
        <img src="/assets/Index/inclima_logo.png" alt="Inclima Plasencia" className="h-11 w-auto" />
      </a>
      <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
        <a href="#servicios" className="hover:text-[#0a1b33]">Servicios</a>
        <a href="#marcas" className="hover:text-[#0a1b33]">Marcas</a>
        <a href="#contacto" className="hover:text-[#0a1b33]">Contacto</a>
      </nav>
      <div className="hidden items-center gap-3 md:flex">
        <a href={`tel:${phone.replaceAll(" ", "")}`} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#0a1b33] shadow-sm">
          {phone}
        </a>
        <a href="#contacto" className="rounded-full bg-[#0a152d] px-5 py-2.5 text-sm font-semibold text-white">
          Presupuesto
        </a>
      </div>
      <button className="rounded-full border border-slate-200 bg-white p-3 md:hidden" aria-label="Abrir menu">
        <Menu className="h-5 w-5" />
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="px-4 pb-14 md:px-8">
      <div className="relative w-full max-w-[1400px] mx-auto rounded-[48px] bg-white border border-slate-200/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] overflow-hidden h-[600px] flex flex-col">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
          <video
            src="/assets/Video_Index.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 transition-transform duration-1000"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="z-20 flex-1 px-8 md:px-16 pt-12 md:pt-16 flex flex-col items-start"
        >
          <img src="/assets/Index/inclima-negro.gif" alt="Inclima" className="mb-8 h-12 w-auto rounded bg-white/80 p-2" />
          <h1 className="font-display text-[42px] md:text-[56px] font-medium tracking-tight text-[#0a1b33] leading-[0.96] max-w-3xl">
            Climatizacion eficiente<br />para Plasencia
          </h1>
          <p className="font-sans text-[14px] md:text-[15px] text-[#64748b] mt-6 max-w-[520px] leading-7">
            Instalamos, reparamos y mantenemos equipos de aire acondicionado y bombas de calor con asesoramiento claro, marcas fiables y atencion directa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full bg-[#0a152d] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10"
            >
              Contactar ahora
            </motion.a>
            <a href={`mailto:${email}`} className="rounded-full border border-slate-200 bg-white/90 px-6 py-3 text-sm font-semibold text-[#0a1b33]">
              {email}
            </a>
          </div>
        </motion.div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="flex items-center bg-white/90 backdrop-blur-2xl px-1.5 py-1.5 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-200/40"
          >
            <span className="mr-1 flex w-9 h-9 items-center justify-center rounded-full bg-white border border-slate-100 shadow-sm text-[#0a1b33]">✦</span>
            <a href="#servicios" className="px-4 py-2 text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33]">Servicios</a>
            <a href="/marcas" className="px-4 py-2 text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33]">Marcas</a>
            <a href="#contacto" className="ml-1 flex items-center gap-1 bg-white px-5 py-2 rounded-full text-[12px] font-semibold text-[#0a1b33] border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all">
              Pedir presupuesto <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </motion.nav>
        </div>
      </div>
      <MarqueeScroller />
    </section>
  );
}

function MarqueeScroller() {
  return (
    <div className="mx-auto mt-10 max-w-[1180px] overflow-hidden marquee-mask">
      <div className="marquee-track flex w-max gap-4 pr-4">
        {[...brands, ...brands].map((brand, index) => (
          <div
            key={`${brand.name}-${index}`}
            className="group relative h-24 w-40 shrink-0 flex items-center justify-center rounded-full bg-white border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all overflow-hidden"
          >
            <div className="absolute inset-0 scale-150 bg-sky-100 opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100" />
            <img src={brand.src} alt={brand.name} className="relative z-10 max-h-10 max-w-28 object-contain transition group-hover:scale-105" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <section id="servicios" className="mx-auto max-w-[1200px] px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Servicios</p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-[#0a1b33] md:text-5xl">
              Lo importante explicado sin rodeos.
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-600">
            Inclima trabaja con hogares, oficinas y locales que necesitan confort estable, equipos bien dimensionados y un servicio tecnico que contesta cuando hace falta.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
              <img src={service.image} alt="" className="h-56 w-full object-cover" />
              <div className="p-6">
                <service.icon className="mb-5 h-7 w-7 text-[#0a1b33]" />
                <h3 className="font-display text-2xl font-medium text-[#0a1b33]">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src="/assets/Index/hombre-sujetando-control-remoto-manos-ajustando-temperatura-aire-acondicionado-montado-aire-acondicionado.jpg" alt="Control de climatizacion" className="h-72 w-full rounded-[28px] object-cover" />
            <img src="/assets/Index/tecnico-aire-acondicionado-comprobando-funcionamiento-aire-acondicionado.jpg" alt="Tecnico revisando aire acondicionado" className="mt-10 h-72 w-full rounded-[28px] object-cover" />
          </div>
          <div>
            <h2 className="font-display text-4xl font-medium tracking-tight text-[#0a1b33]">Confort, consumo y garantia en la misma conversacion.</h2>
            <div className="mt-8 space-y-5">
              {[
                "Presupuesto claro antes de empezar, con recomendacion de potencia y ubicacion.",
                "Telefono y correo accesibles con un click para no perder consultas.",
                "Financiacion y documentacion europea visibles sin entorpecer la experiencia.",
                "Politicas legales revisadas con estructura, finalidad, derechos y contacto."
              ].map((item) => (
                <div key={item} className="flex gap-3 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="marcas" className="mx-auto max-w-[1200px] px-5 py-16">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-4xl font-medium tracking-tight text-[#0a1b33]">Marcas con las que trabaja Inclima</h2>
            <p className="mt-3 max-w-2xl text-slate-600">Equipos domesticos y profesionales de fabricantes reconocidos, para instalar, reparar o mantener con criterio tecnico.</p>
          </div>
          <a href="/marcas" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0a1b33] shadow-sm ring-1 ring-slate-200">
            Consultar compatibilidad <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {featuredBrands.map((brand) => (
            <div key={brand.src} className="flex h-28 items-center justify-center rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
              <img src={brand.src} alt={brand.name} className="max-h-12 max-w-full object-contain" />
            </div>
          ))}
        </div>
      </section>
      <section id="contacto" className="mx-auto grid max-w-[1200px] gap-8 px-5 py-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[36px] bg-[#0a152d] p-8 text-white">
          <h2 className="font-display text-4xl font-medium tracking-tight">Contacta con Inclima</h2>
          <p className="mt-4 leading-7 text-slate-300">
            Cuéntales que necesitas y deja tus datos. El formulario avisa si falta algo, marca errores en rojo y prepara el correo con toda la informacion.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <a href={`tel:${phone.replaceAll(" ", "")}`} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
              <Phone className="h-5 w-5" /> {phone}
            </a>
            <a href={`mailto:${email}`} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
              <Mail className="h-5 w-5" /> {email}
            </a>
            <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
              <MapPin className="h-5 w-5" /> Plasencia, Caceres
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
              <Clock className="h-5 w-5" /> Atencion directa para presupuestos y avisos
            </div>
          </div>
          <img src="/assets/Contacto/mujer-joven-feliz-ojos-cerrados-sentado-sofa-aire-acondicionado-ajustando-temperatura-confortable-control-remoto-casa-moderna.jpg" alt="Confort en casa" className="mt-8 h-56 w-full rounded-[28px] object-cover" />
        </div>
        <ContactForm />
      </section>
      <Footer />
    </main>
  );
}

function Footer() {
  return (
    <footer className="mt-10 bg-white">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-5 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <img src="/assets/Index/inclima_logo.png" alt="Inclima Plasencia" className="h-12 w-auto" />
          <p className="mt-5 max-w-md text-sm leading-6 text-slate-600">
            Instalacion, reparacion y mantenimiento de climatizacion en Plasencia con un sitio mas visual, util y preparado para convertir consultas reales.
          </p>
          <div className="mt-5 flex gap-3">
            <img src="/assets/Index/NEGROlogo-financiacion-ue-nextgenerationue.png" alt="Next Generation EU" className="h-10 w-auto object-contain" />
            <img src="/assets/Index/NEGROlogo-plan-de-recuperacion-transformacion-y-resiliencia.png" alt="Plan de recuperacion" className="h-10 w-auto object-contain" />
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Contacto</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-700">
            <a className="block hover:text-[#0a1b33]" href={`tel:${phone.replaceAll(" ", "")}`}>{phone}</a>
            <a className="block hover:text-[#0a1b33]" href={`mailto:${email}`}>{email}</a>
            <span className="block">Plasencia, Caceres</span>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Legal</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-700">
            <a className="block hover:text-[#0a1b33]" href="/aviso-legal">Aviso legal</a>
            <a className="block hover:text-[#0a1b33]" href="/politica-de-privacidad">Politica de privacidad</a>
            <a className="block hover:text-[#0a1b33]" href="/politica-de-cookies">Politica de cookies</a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 px-5 py-5 text-center text-xs text-slate-500">
        © 2026 Inclima Plasencia. Web modernizada para una experiencia mas clara y accesible.
      </div>
    </footer>
  );
}
