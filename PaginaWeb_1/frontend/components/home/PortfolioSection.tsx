"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {
  ANTES_DESPUES,
  PORTFOLIO_OBRAS,
  PORTFOLIO_REFORMAS,
} from "@/data/portfolio";
import { BeforeAfterSlider } from "@/components/portfolio/BeforeAfterSlider";

type Tab = "reformas" | "obras";

export function PortfolioSection() {
  const { t, mounted } = useLanguage();
  const [tab, setTab] = useState<Tab>("reformas");
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setInView(true); obs.disconnect(); }
      },
      { rootMargin: "-60px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const items = tab === "reformas" ? PORTFOLIO_REFORMAS : PORTFOLIO_OBRAS;

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative z-10 scroll-mt-24 bg-pagealt/30 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Encabezado */}
        <div
          className={`mb-4 text-center transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-block rounded-full bg-navy/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-navy">
            Trabajos realizados
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-prose lg:text-5xl">
            {mounted ? t("portfolio.title") : "Nuestro Portfolio"}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-subtle">
            Resultados reales de reformas y obras en Plasencia y Extremadura.
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <span className="h-1 w-16 rounded-full bg-navy" />
        </div>

        {/* ── Comparadores Antes / Después ── */}
        <div className="mb-6">
          <h3 className="mb-6 font-display text-xl font-bold text-prose">
            Comparador antes / después
          </h3>
          <div className="grid gap-6 lg:grid-cols-2">
            {ANTES_DESPUES.map((item, i) => (
              <div
                key={item.id}
                className={`transition-all duration-700 ${
                  inView ? "opacity-100 scale-100" : "opacity-0 scale-[0.97]"
                }`}
                style={{ transitionDelay: inView ? `${i * 150}ms` : "0ms" }}
              >
                <BeforeAfterSlider
                  srcAntes={item.srcAntes}
                  srcDespues={item.srcDespues}
                  title={item.titulo}
                  antesLabel={mounted ? t("portfolio.antes") : "Antes"}
                  despuesLabel={mounted ? t("portfolio.despues") : "Después"}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Galería por categorías ── */}
        <div className="mt-16">
          <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-display text-xl font-bold text-prose">
              Galería de proyectos
            </h3>
            <div className="flex gap-2 rounded-xl border border-pagealt bg-white p-1 shadow-card">
              {(["reformas", "obras"] as Tab[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setTab(key)}
                  className={`rounded-lg px-5 py-2 font-display text-sm font-semibold uppercase tracking-wider transition ${
                    tab === key
                      ? "bg-navy text-white shadow-sm"
                      : "text-subtle hover:text-prose"
                  }`}
                >
                  {mounted
                    ? t(
                        key === "reformas"
                          ? "portfolio.tab.reformas"
                          : "portfolio.tab.obras"
                      )
                    : key}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <figure
                key={item.id}
                className={`overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-700 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: inView ? `${50 + i * 70}ms` : "0ms" }}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.imagen}
                    alt={item.titulo}
                    fill
                    quality={65}
                    className="object-cover transition duration-500 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <figcaption className="flex h-[84px] flex-col justify-center px-5 py-0">
                  <h3 className="line-clamp-1 font-display text-base font-bold text-prose">
                    {item.titulo}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm leading-snug text-subtle">
                    {item.descripcion}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`mt-14 text-center transition-all duration-700 delay-500 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-navy px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-navy transition hover:bg-navy hover:text-white"
          >
            Pide tu presupuesto sin compromiso
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
