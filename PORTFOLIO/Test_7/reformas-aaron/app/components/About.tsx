"use client";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { CheckCircle2 } from "lucide-react";

const values = [
  "Presupuesto detallado y sin sorpresas",
  "Cumplimiento estricto de plazos",
  "Materiales de primera calidad",
  "Limpieza y orden en cada obra",
  "Comunicación constante durante el proceso",
  "Garantía en todos nuestros trabajos",
];

export default function About() {
  return (
    <section id="nosotros" className="py-32 bg-surface relative overflow-hidden">
      {/* Background */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at right center, rgba(201,168,76,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Images collage */}
          <AnimatedSection direction="left" className="relative">
            <div className="relative h-[600px]">
              {/* Main image */}
              <div className="absolute left-0 top-0 w-[68%] h-[75%] rounded-2xl overflow-hidden">
                <Image
                  src="/images/portfolio/reformas/local-comercial-1.jpg"
                  alt="Nuestros trabajos"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-obsidian/30" />
              </div>
              {/* Secondary image */}
              <div className="absolute right-0 bottom-0 w-[55%] h-[55%] rounded-2xl overflow-hidden border-4 border-surface">
                <Image
                  src="/images/portfolio/obras/piscina.jpg"
                  alt="Piscina"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute bottom-[52%] right-[-20px] z-10 glass-gold rounded-2xl px-5 py-4 min-w-[160px]">
                <div className="text-3xl font-display font-black shimmer-gold">15+</div>
                <div className="text-xs text-stone-light mt-1">Años de<br />experiencia</div>
              </div>
              {/* Gold accent bar */}
              <div className="absolute left-[-20px] top-1/3 w-1 h-24 bg-gradient-gold rounded-full" />
            </div>
          </AnimatedSection>

          {/* Text content */}
          <div className="space-y-8">
            <AnimatedSection direction="right">
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium block mb-4">Quiénes somos</span>
              <h2 className="font-display text-5xl lg:text-6xl font-black text-white leading-tight">
                Más de 15 años<br />
                <span className="text-gradient-gold">construyendo</span><br />
                confianza
              </h2>
              <div className="w-16 h-0.5 bg-gold mt-6" />
            </AnimatedSection>

            <AnimatedSection direction="right" delay={100}>
              <p className="text-stone-light text-lg leading-relaxed">
                Obras y Reformas Aarón nació en Plasencia con una misión clara: ofrecer reformas
                de alta calidad con la cercanía y honestidad de una empresa familiar.
              </p>
              <p className="text-stone-light leading-relaxed mt-4">
                Cada proyecto que emprendemos refleja nuestro compromiso con la excelencia.
                Desde una pequeña reforma de baño hasta la construcción de una piscina, ponemos
                el mismo cuidado y profesionalidad en cada trabajo.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {values.map((v, i) => (
                  <div
                    key={v}
                    className="flex items-start gap-3"
                    style={{
                      opacity: 1,
                      animation: `reveal-up 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms both`,
                    }}
                  >
                    <CheckCircle2 size={16} className="text-gold mt-0.5 shrink-0" />
                    <span className="text-sm text-stone-light">{v}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={300}>
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                  className="group bg-gradient-gold text-obsidian font-semibold px-7 py-3.5 rounded-full text-sm flex items-center gap-2 hover:shadow-[0_8px_30px_rgba(201,168,76,0.4)] transition-all duration-300"
                >
                  Hablar con Aarón
                </button>
                <a
                  href="https://maps.app.goo.gl/HqHB8UoAzydHurzn9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-border text-cream font-medium px-7 py-3.5 rounded-full text-sm hover:text-obsidian transition-all duration-300"
                >
                  Ver ubicación
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Logos EU */}
        <AnimatedSection delay={100} className="mt-20 pt-12 border-t border-white/5">
          <div className="flex flex-wrap items-center gap-6 justify-center opacity-50">
            <span className="text-xs text-stone tracking-widest uppercase">Financiado por</span>
            <Image src="/images/logoeuropa.png" alt="Europa" width={80} height={40} className="object-contain filter grayscale" />
            <Image src="/images/logoplanrecuperacion.png" alt="Plan de Recuperación" width={120} height={40} className="object-contain filter grayscale" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
