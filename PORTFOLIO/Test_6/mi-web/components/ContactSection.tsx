"use client";
import { MagneticButton } from "@/components/ui/magnetic-button";

export default function ContactSection() {
  return (
    <section id="contacto" className="py-24 border-t border-foreground/8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs tracking-[0.3em] uppercase text-neptuno mb-3 block">
            Contacto
          </span>
          <h2
            className="text-3xl md:text-4xl font-semibold text-foreground"
            style={{ fontFamily: "'General Sans', sans-serif" }}
          >
            ¿Nos visitas?
          </h2>
          <p className="text-foreground/50 mt-3 text-sm">
            Estamos en el centro del Casco Antiguo de Cáceres. Ven a desayunar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Info */}
          <div className="space-y-6">
            <div className="liquid-glass rounded-2xl p-6 space-y-5">
              <div className="flex gap-4 items-start">
                <span className="text-2xl mt-0.5">📍</span>
                <div>
                  <p className="text-foreground/50 text-xs uppercase tracking-wider mb-1">
                    Dirección
                  </p>
                  <p className="text-foreground text-sm font-medium leading-relaxed">
                    Av. de Alemania, 19
                    <br />
                    Centro-Casco Antiguo
                    <br />
                    10005 Cáceres, España
                  </p>
                </div>
              </div>

              <div className="h-px bg-foreground/8" />

              <div className="flex gap-4 items-start">
                <span className="text-2xl mt-0.5">📞</span>
                <div>
                  <p className="text-foreground/50 text-xs uppercase tracking-wider mb-1">
                    Teléfono
                  </p>
                  <a
                    href="tel:614001744"
                    className="text-foreground text-sm font-medium hover:text-neptuno transition-colors"
                  >
                    614 00 17 44
                  </a>
                </div>
              </div>

              <div className="h-px bg-foreground/8" />

              <div className="flex gap-4 items-start">
                <span className="text-2xl mt-0.5">🕖</span>
                <div>
                  <p className="text-foreground/50 text-xs uppercase tracking-wider mb-1">
                    Horario
                  </p>
                  <p className="text-foreground text-sm font-medium leading-relaxed">
                    L–V: 7:00 – 24:00
                    <br />
                    Sáb: 8:00 – 14:00
                    <br />
                    Dom: Cerrado
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <MagneticButton>
                <a
                  href="tel:614001744"
                  className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-gradient-to-r from-amber-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow"
                >
                  📞 Llamar ahora
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="https://maps.google.com/?q=Av+de+Alemania+19+Caceres"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full rounded-lg border border-foreground/20 px-5 py-3 text-sm font-medium text-foreground/80 hover:bg-foreground/8 transition-colors"
                >
                  📍 Cómo llegar
                </a>
              </MagneticButton>
            </div>
          </div>

          {/* Map embed placeholder */}
          <div className="rounded-2xl overflow-hidden border border-foreground/8 aspect-video md:aspect-auto md:h-72 bg-card flex items-center justify-center">
            <iframe
              title="Ubicación Nuevo Neptuno"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3069.0!2d-6.3725!3d39.4752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd15e16b6d0af9c7%3A0x8b0b0b0b0b0b0b0b!2sAv.+de+Alemania%2C+19%2C+10005+C%C3%A1ceres!5e0!3m2!1ses!2ses!4v1"
              className="w-full h-full grayscale opacity-70"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
