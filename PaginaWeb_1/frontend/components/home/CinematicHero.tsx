"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Ruler } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { HERO_SLIDES } from "@/data/portfolio";

export function CinematicHero() {
  const { t, mounted } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(
      () => setActiveIndex((i) => (i + 1) % HERO_SLIDES.length),
      5500,
    );
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      {/* Slides — CSS opacity crossfade, no AnimatePresence (avoids SSR hydration mismatch) */}
      <div ref={parallaxRef} className="absolute inset-0 will-change-transform">
        {HERO_SLIDES.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ${
              i === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt="Obra premium Obras y Reformas Aarón"
              fill
              priority={i === 0}
              quality={75}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-jet via-jet/70 to-jet/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,242,255,0.12),transparent_55%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-40 lg:px-10 lg:pb-32">
        {/* CSS animation — no motion.div, no hydration risk */}
        <div className="animate-[fade-up_0.9s_ease_0.2s_forwards] opacity-0">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-neon/40 bg-card/60 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.2em] text-cyan-neon backdrop-blur">
            <Ruler className="h-3.5 w-3.5" />
            {mounted ? t("hero.badge") : "Plasencia"}
          </span>

          <h1 className="max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-bone sm:text-5xl lg:text-7xl">
            {mounted ? t("hero.title") : "Obras y Reformas de Precisión"}
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-bone/75 lg:text-xl">
            {mounted
              ? t("hero.subtitle")
              : "Transformamos espacios con precisión arquitectónica."}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#contacto"
              className="group inline-flex items-center gap-2 rounded-lg border border-cyan-neon bg-cyan-neon/10 px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-cyan-neon transition hover:bg-cyan-neon hover:text-jet hover:shadow-neon-cyan"
            >
              {mounted ? t("hero.cta") : "Solicitar presupuesto"}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-card/50 px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-bone backdrop-blur transition hover:border-cyan-neon/50"
            >
              {mounted ? t("hero.portfolio") : "Ver portfolio"}
            </Link>
          </div>
        </div>

        {/* Slide nav — deterministic count, matches server exactly */}
        <div className="mt-16 flex gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => setActiveIndex(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-10 bg-cyan-neon shadow-[0_0_12px_#00F2FF]"
                  : "w-4 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
