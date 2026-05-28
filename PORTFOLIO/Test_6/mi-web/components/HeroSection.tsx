"use client";
import Navbar from "./Navbar";
import LogoMarquee from "./LogoMarquee";
import { MagneticButton } from "@/components/ui/magnetic-button";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <img
          src="/img/bar.jpg"
          alt="Bar Nuevo Neptuno"
          className="w-full h-full object-cover"
        />
        {/* Overlay: dark vignette */}
        <div className="absolute inset-0 bg-background/72" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      <section className="relative z-10 min-h-screen flex flex-col overflow-visible">
        <Navbar />
        <div className="h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />

        {/* Main content */}
        <div className="flex-1 flex items-center justify-center relative px-4 py-12">
          {/* Blurred glow behind text */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[460px] opacity-60 blur-[100px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse, hsl(190 100% 44% / 0.15) 0%, hsl(38 90% 53% / 0.08) 60%, transparent 100%)" }}
            aria-hidden
          />

          <div className="relative z-10 text-center max-w-4xl">
            <p className="text-xs tracking-[0.3em] uppercase text-foreground/40 mb-5">
              Cáceres · Av. de Alemania, 19
            </p>

            <h1
              className="leading-[0.95] tracking-[-0.02em] font-semibold"
              style={{ fontFamily: "'General Sans', sans-serif" }}
            >
              <span className="block text-foreground/80 text-3xl sm:text-4xl md:text-5xl font-light tracking-widest uppercase mb-1">
                Cafetería
              </span>
              <span
                className="block bg-clip-text text-transparent text-[clamp(4rem,12vw,10rem)]"
                style={{
                  backgroundImage:
                    "linear-gradient(130deg, #f59e0b 0%, #22d3ee 55%, #0ea5e9 100%)",
                }}
              >
                Nuevo Neptuno
              </span>
            </h1>

            <p className="text-hero-sub text-base md:text-lg leading-7 max-w-md mx-auto mt-5 opacity-75">
              Desayunos y almuerzos tradicionales extremeños en el corazón de Cáceres
            </p>
            <p className="text-foreground/35 text-sm italic mt-2">
              "Si lo puedes soñar, lo puedes desayunar"
            </p>

            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <MagneticButton>
                <a
                  href="#carta"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow duration-200"
                >
                  Ver la Carta →
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="tel:614001744"
                  className="inline-flex items-center gap-2 rounded-lg border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground/80 hover:bg-foreground/8 transition-colors duration-150"
                >
                  📞 614 00 17 44
                </a>
              </MagneticButton>
            </div>
          </div>
        </div>

        <LogoMarquee />
      </section>
    </div>
  );
}
