"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SERVICIOS } from "@/data/portfolio";

export function ServicesGrid() {
  const { t, mounted } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setInView(true); obs.disconnect(); }
      },
      { rootMargin: "-80px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="relative z-10 scroll-mt-24 bg-page py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Encabezado */}
        <div
          className={`mb-4 text-center transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-block rounded-full bg-navy/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-navy">
            Lo que hacemos
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-prose lg:text-5xl">
            {mounted ? t("services.title") : "Nuestros Servicios"}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-subtle">
            {mounted
              ? t("services.subtitle")
              : "Reformas integrales y obras con calidad garantizada en Plasencia y alrededores."}
          </p>
        </div>

        <div className="mb-14 flex justify-center">
          <span className="h-1 w-16 rounded-full bg-navy" />
        </div>

        {/* Grid de servicios */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICIOS.map((servicio, i) => (
            <article
              key={servicio.id}
              className={`group relative h-72 overflow-hidden rounded-2xl shadow-card transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: inView ? `${i * 80}ms` : "0ms" }}
            >
              <Image
                src={servicio.imagen}
                alt={mounted ? t(servicio.tituloKey) : servicio.id}
                fill
                quality={65}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jet/90 via-jet/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="mb-2 inline-block h-0.5 w-8 rounded-full bg-white/70 transition-all duration-500 group-hover:w-14 group-hover:bg-navy-light" />
                <h3 className="font-display text-xl font-bold text-bone">
                  {mounted ? t(servicio.tituloKey) : servicio.id}
                </h3>
                <p className="mt-1.5 text-sm leading-snug text-bone/75">
                  {mounted ? t(servicio.descripcionKey) : ""}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-14 text-center transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 rounded-xl bg-navy px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-white shadow-navy transition hover:bg-navy-dark"
          >
            Solicita tu presupuesto gratis
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
