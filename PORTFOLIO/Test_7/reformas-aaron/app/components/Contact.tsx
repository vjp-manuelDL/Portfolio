"use client";
import { useState } from "react";
import { Phone, Mail, Clock, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const hours = [
  { day: "Lunes – Viernes", time: "9:00 – 19:00" },
  { day: "Sábado", time: "9:00 – 14:00" },
  { day: "Domingo", time: "Cerrado" },
];

export default function Contact() {
  const [form, setForm] = useState({
    nombre: "", telefono: "", email: "", localidad: "", descripcion: "", legal: false,
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.nombre.trim()) e.nombre = "Nombre requerido";
    if (!form.telefono.match(/^[0-9]{9}$/)) e.telefono = "Teléfono inválido (9 dígitos)";
    if (!form.email.includes("@")) e.email = "Email inválido";
    if (!form.descripcion.trim()) e.descripcion = "Describe tu proyecto";
    if (!form.legal) e.legal = "Debes aceptar la política de privacidad";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSending(true);
    await new Promise(r => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
  };

  const set = (k: string, v: string | boolean) => {
    setForm(f => ({ ...f, [k]: v }));
    setErrors(e => { const n = { ...e }; delete n[k]; return n; });
  };

  if (sent) {
    return (
      <section id="contacto" className="py-32 bg-obsidian flex items-center justify-center">
        <div className="text-center px-6">
          <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6 animate-pulse-gold">
            <CheckCircle size={36} className="text-gold" />
          </div>
          <h3 className="font-display text-3xl font-bold text-white mb-3">¡Solicitud recibida!</h3>
          <p className="text-stone-light max-w-md">
            Aarón se pondrá en contacto contigo en menos de 24 horas para hablar sobre tu proyecto.
          </p>
          <button
            onClick={() => setSent(false)}
            className="mt-8 btn-gold-border text-cream px-6 py-3 rounded-full text-sm hover:text-obsidian transition-all"
          >
            Enviar otra solicitud
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-32 bg-obsidian relative overflow-hidden">
      <div className="absolute inset-0"
        style={{ backgroundImage: "radial-gradient(circle at 70% 50%, rgba(201,168,76,0.04) 0%, transparent 60%)" }}
      />
      <div className="divider-gold absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left: info */}
          <div>
            <AnimatedSection direction="left">
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-4 block">Hablemos</span>
              <h2 className="font-display text-5xl lg:text-6xl font-black text-white leading-tight">
                Tu reforma<br /><span className="text-gradient-gold">empieza aquí</span>
              </h2>
              <div className="w-16 h-0.5 bg-gold mt-6 mb-10" />
              <p className="text-stone-light text-lg leading-relaxed">
                Cuéntanos tu proyecto y te daremos un presupuesto detallado
                y sin compromiso en 24 horas.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={100} className="mt-10 space-y-6">
              <a href="tel:+34685145536" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl glass-gold flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Phone size={18} className="text-gold" />
                </div>
                <div>
                  <div className="text-xs text-stone uppercase tracking-wide mb-0.5">Teléfono</div>
                  <div className="text-white font-semibold group-hover:text-gold transition-colors">685 145 536</div>
                </div>
              </a>
              <a href="mailto:info@obrasreformasaaron.es" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl glass-gold flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Mail size={18} className="text-gold" />
                </div>
                <div>
                  <div className="text-xs text-stone uppercase tracking-wide mb-0.5">Email</div>
                  <div className="text-white font-semibold group-hover:text-gold transition-colors">info@obrasreformasaaron.es</div>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl glass-gold flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-gold" />
                </div>
                <div>
                  <div className="text-xs text-stone uppercase tracking-wide mb-0.5">Zona de servicio</div>
                  <div className="text-white font-semibold">Plasencia, Cáceres y toda Extremadura</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl glass-gold flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-gold" />
                </div>
                <div>
                  <div className="text-xs text-stone uppercase tracking-wide mb-2">Horario de atención</div>
                  <div className="space-y-1">
                    {hours.map(h => (
                      <div key={h.day} className="flex gap-4 text-sm">
                        <span className="text-stone-light w-36">{h.day}</span>
                        <span className={`font-medium ${h.time === "Cerrado" ? "text-stone" : "text-white"}`}>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* WhatsApp */}
            <AnimatedSection direction="left" delay={200} className="mt-10">
              <a
                href="https://wa.me/34685145536"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn inline-flex items-center gap-3 text-white font-semibold px-7 py-4 rounded-full"
              >
                <MessageCircle size={20} />
                Escribir por WhatsApp
              </a>
            </AnimatedSection>
          </div>

          {/* Right: form */}
          <AnimatedSection direction="right" delay={100}>
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 sm:p-10 space-y-5">
              <h3 className="font-display text-2xl text-white font-bold mb-2">Solicitar presupuesto</h3>
              <p className="text-stone text-sm">Respuesta garantizada en menos de 24h</p>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs text-stone uppercase tracking-wide mb-1.5 block">Nombre *</label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    value={form.nombre}
                    onChange={e => set("nombre", e.target.value)}
                    className={`form-input w-full px-4 py-3 rounded-xl text-sm ${errors.nombre ? "border-red-500/50" : ""}`}
                  />
                  {errors.nombre && <p className="text-red-400 text-xs mt-1">{errors.nombre}</p>}
                </div>
                <div>
                  <label className="text-xs text-stone uppercase tracking-wide mb-1.5 block">Teléfono *</label>
                  <input
                    type="tel"
                    placeholder="612 345 678"
                    value={form.telefono}
                    onChange={e => set("telefono", e.target.value)}
                    className={`form-input w-full px-4 py-3 rounded-xl text-sm ${errors.telefono ? "border-red-500/50" : ""}`}
                  />
                  {errors.telefono && <p className="text-red-400 text-xs mt-1">{errors.telefono}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs text-stone uppercase tracking-wide mb-1.5 block">Email *</label>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={e => set("email", e.target.value)}
                    className={`form-input w-full px-4 py-3 rounded-xl text-sm ${errors.email ? "border-red-500/50" : ""}`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="text-xs text-stone uppercase tracking-wide mb-1.5 block">Localidad</label>
                  <input
                    type="text"
                    placeholder="Tu localidad"
                    value={form.localidad}
                    onChange={e => set("localidad", e.target.value)}
                    className="form-input w-full px-4 py-3 rounded-xl text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-stone uppercase tracking-wide mb-1.5 block">Describe tu proyecto *</label>
                <textarea
                  placeholder="Cuéntanos qué quieres reformar, medidas aproximadas, materiales..."
                  value={form.descripcion}
                  onChange={e => set("descripcion", e.target.value)}
                  rows={5}
                  className={`form-input w-full px-4 py-3 rounded-xl text-sm resize-none ${errors.descripcion ? "border-red-500/50" : ""}`}
                />
                {errors.descripcion && <p className="text-red-400 text-xs mt-1">{errors.descripcion}</p>}
              </div>

              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.legal}
                    onChange={e => set("legal", e.target.checked)}
                    className="mt-0.5 accent-[#C9A84C]"
                  />
                  <span className="text-xs text-stone leading-relaxed">
                    Acepto la{" "}
                    <a href="#" className="text-gold hover:underline">política de privacidad</a>
                    {" "}y el tratamiento de mis datos para la gestión de mi consulta.
                  </span>
                </label>
                {errors.legal && <p className="text-red-400 text-xs mt-1">{errors.legal}</p>}
              </div>

              <button
                type="submit"
                disabled={sending}
                className="group w-full bg-gradient-gold text-obsidian font-semibold py-4 rounded-xl text-sm flex items-center justify-center gap-2 hover:shadow-[0_8px_30px_rgba(201,168,76,0.4)] transition-all duration-300 disabled:opacity-70"
              >
                {sending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-obsidian/30 border-t-obsidian rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                    Solicitar presupuesto gratis
                  </>
                )}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
