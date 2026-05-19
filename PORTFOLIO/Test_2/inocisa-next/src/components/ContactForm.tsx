"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const MAX_CHARS = 5000;

const fieldClass =
  "bg-white/60 border border-[rgba(0,132,255,0.35)] focus:border-[rgba(0,132,255,0.85)] focus:ring-2 focus:ring-[rgba(0,132,255,0.15)] rounded-xl px-4 py-3 outline-none transition-all w-full text-slate-800 placeholder:text-slate-400";

const labelClass = "text-sm font-semibold text-slate-700 mb-1.5 block";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [message, setMessage] = useState("");

  const charCount = message.length;
  const isOverLimit = charCount > MAX_CHARS;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isOverLimit) return;
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1500);
  };

  if (status === "success") {
    return (
      <section id="contacto" className="py-24 relative z-10 w-full max-w-4xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-nav rounded-3xl p-12 text-center flex flex-col items-center gap-6"
        >
          <CheckCircle2 size={64} className="text-[#0084ff]" />
          <h2 className="font-heading text-3xl font-bold text-slate-900">¡Mensaje enviado!</h2>
          <p className="text-slate-500 text-lg max-w-md">
            Nos pondremos en contacto contigo a la mayor brevedad posible. Gracias por confiar en Inocisa.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-2 px-6 py-2.5 rounded-xl border border-[rgba(0,132,255,0.4)] text-[#0084ff] font-medium hover:bg-blue-50 transition-all"
          >
            Enviar otro mensaje
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-24 relative z-10 w-full max-w-4xl mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-nav rounded-3xl p-8 md:p-12"
      >
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#0084ff] bg-blue-50 px-4 py-1.5 rounded-full mb-4">
            Contacto
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3 text-slate-900">
            ¿Hablamos sobre tu proyecto?
          </h2>
          <p className="text-slate-500 text-lg">
            Rellena el formulario y te contactamos lo antes posible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Nombre + Teléfono */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className={labelClass}>Nombre <span className="text-red-400">*</span></label>
              <input required id="name" type="text" className={fieldClass} placeholder="Tu nombre completo" />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>Teléfono <span className="text-red-400">*</span></label>
              <input required id="phone" type="tel" className={fieldClass} placeholder="Ej. 669 56 92 48" />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className={labelClass}>Correo Electrónico <span className="text-red-400">*</span></label>
            <input required id="email" type="email" className={fieldClass} placeholder="tucorreo@ejemplo.com" />
          </div>

          {/* Asunto */}
          <div>
            <label htmlFor="subject" className={labelClass}>Asunto <span className="text-red-400">*</span></label>
            <input
              required
              id="subject"
              type="text"
              className={fieldClass}
              placeholder="Ej. Presupuesto reforma baño, instalación eléctrica..."
            />
          </div>

          {/* Mensaje con contador */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="message" className={labelClass + " mb-0"}>
                Mensaje <span className="text-red-400">*</span>
              </label>
              <span
                className={`text-xs font-medium transition-colors ${
                  isOverLimit ? "text-red-500" : charCount > MAX_CHARS * 0.85 ? "text-amber-500" : "text-slate-400"
                }`}
              >
                {charCount.toLocaleString("es-ES")} / {MAX_CHARS.toLocaleString("es-ES")} caracteres
              </span>
            </div>
            <textarea
              required
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${fieldClass} resize-none ${isOverLimit ? "border-red-400 focus:border-red-500 focus:ring-red-100" : ""}`}
              placeholder="Cuéntanos tu proyecto con el máximo detalle posible..."
            />
            {isOverLimit && (
              <p className="text-xs text-red-500 mt-1">
                Has superado el límite de {MAX_CHARS.toLocaleString("es-ES")} caracteres.
              </p>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={status !== "idle" || isOverLimit}
            className="btn-primary flex items-center justify-center gap-3 bg-[rgba(0,132,255,0.85)] text-white w-full py-4 rounded-xl font-semibold text-lg mt-2 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                </svg>
                Enviando...
              </span>
            ) : (
              <>
                <Send size={20} />
                Enviar Mensaje
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
