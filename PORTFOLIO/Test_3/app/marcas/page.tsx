import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { brands } from "@/lib/brands";

const phone = "927 42 24 03";

export const metadata = {
  title: "Marcas compatibles | Inclima Plasencia",
  description:
    "Listado de marcas de climatizacion con las que trabaja Inclima Plasencia para instalacion, reparacion y mantenimiento."
};

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-[#f9fafb]">
      <header className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-5 py-5">
        <a href="/" className="flex items-center gap-3">
          <img src="/assets/Index/inclima_logo.png" alt="Inclima Plasencia" className="h-11 w-auto" />
        </a>
        <div className="flex items-center gap-3">
          <a
            href={`tel:${phone.replaceAll(" ", "")}`}
            className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#0a1b33] shadow-sm sm:flex"
          >
            <Phone className="h-4 w-4" />
            {phone}
          </a>
          <a href="/" className="inline-flex items-center gap-2 rounded-full bg-[#0a152d] px-5 py-2.5 text-sm font-semibold text-white">
            <ArrowLeft className="h-4 w-4" />
            Inicio
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-[1200px] px-5 pb-20 pt-8">
        <div className="rounded-[42px] border border-slate-200/70 bg-white p-8 shadow-[0_30px_90px_rgba(15,23,42,0.06)] md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Compatibilidad</p>
              <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-none tracking-tight text-[#0a1b33] md:text-6xl">
                Todas las marcas con las que trabaja Inclima.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                Instalacion, reparacion y mantenimiento de equipos de climatizacion de fabricantes habituales en vivienda,
                comercios y oficinas. Si no ves tu modelo exacto, pueden revisarlo por telefono o correo.
              </p>
            </div>
            <a
              href="/#contacto"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#0a152d] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10"
            >
              Consultar equipo <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {brands.map((brand) => (
              <article
                key={brand.src}
                className="group flex h-32 items-center justify-center rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  loading="lazy"
                  decoding="async"
                  className="max-h-14 max-w-full object-contain transition duration-300 group-hover:scale-105"
                />
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
