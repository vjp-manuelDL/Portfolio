"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const SERVICIOS_FOOTER = [
  "Reformas integrales",
  "Reforma de baños",
  "Reforma de cocinas",
  "Instalaciones eléctricas",
  "Fontanería",
  "Pavimentos y solados",
  "Albañilería y pladur",
  "Cerramientos y aluminio",
];

const RRSS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/obrasyreformas_aaron/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" />
      </svg>
    ),
    hoverColor: "hover:border-pink-400/60 hover:text-pink-400",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/p/Obras-y-Reformas-Aar%C3%B3n-61552669450167/?locale=es_LA",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    hoverColor: "hover:border-blue-400/60 hover:text-blue-400",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@obrasyreformasaron",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
      </svg>
    ),
    hoverColor: "hover:border-white/60 hover:text-white",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCmxwiAOK2K0beftTYMzQVXQ",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z" />
        <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
    hoverColor: "hover:border-red-400/60 hover:text-red-400",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/34685145536",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    ),
    hoverColor: "hover:border-green-400/60 hover:text-green-400",
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-navy-dark text-bone/80">
      {/* Franja superior */}
      <div className="h-1 w-full bg-gradient-to-r from-navy via-navy-light to-navy" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Columna 1 — Logo + descripción + RRSS */}
          <div className="lg:col-span-1">
            <div className="relative mb-5 h-12 w-44">
              <Image
                src="/images/logo.png"
                alt="Obras y Reformas Aarón"
                fill
                className="object-contain object-left brightness-0 invert"
                sizes="176px"
              />
            </div>
            <p className="text-sm leading-relaxed text-bone/65">
              Empresa de reformas y obras en Plasencia (Cáceres). Más de 15 años
              transformando hogares y negocios con calidad y garantía.
            </p>

            {/* Redes sociales */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {RRSS.map((red) => (
                <a
                  key={red.label}
                  href={red.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={red.label}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-bone/60 transition ${red.hoverColor}`}
                >
                  {red.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2 — Servicios */}
          <div>
            <h4 className="mb-5 font-display text-sm font-bold uppercase tracking-widest text-bone">
              Servicios
            </h4>
            <ul className="space-y-2.5">
              {SERVICIOS_FOOTER.map((s) => (
                <li key={s}>
                  <Link
                    href="/#servicios"
                    className="flex items-center gap-2 text-sm text-bone/60 transition hover:text-bone"
                  >
                    <span className="h-px w-4 rounded-full bg-navy-light/60" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 — Contacto */}
          <div>
            <h4 className="mb-5 font-display text-sm font-bold uppercase tracking-widest text-bone">
              Contacto
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="tel:+34685145536"
                  className="flex items-start gap-3 text-bone/60 transition hover:text-bone"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-navy-light" />
                  <div>
                    <span className="block font-semibold text-bone">685 145 536</span>
                    <span>Llamadas y WhatsApp</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@obrasreformasaaron.es"
                  className="flex items-start gap-3 text-bone/60 transition hover:text-bone"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-navy-light" />
                  <span>info@obrasreformasaaron.es</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-bone/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-navy-light" />
                <div>
                  <span className="block font-semibold text-bone">Zona de trabajo</span>
                  <span>Plasencia · Cáceres · Extremadura</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-bone/60">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-navy-light" />
                <div>
                  <span className="block font-semibold text-bone">Horario</span>
                  <span>Lun – Vie · 9:00 a 19:00 h</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Columna 4 — CTA */}
          <div>
            <h4 className="mb-5 font-display text-sm font-bold uppercase tracking-widest text-bone">
              ¿Tienes un proyecto?
            </h4>
            <p className="mb-6 text-sm leading-relaxed text-bone/60">
              Solicita tu presupuesto gratuito y sin compromiso. Te respondemos
              en menos de 24 horas.
            </p>
            <Link
              href="/#contacto"
              className="inline-block rounded-xl bg-navy-light px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-white shadow-navy transition hover:bg-white hover:text-navy-dark"
            >
              Solicitar presupuesto
            </Link>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-bone/50">
                Más de <strong className="text-bone/80">500 clientes</strong> satisfechos
                en Extremadura. Garantía de calidad en cada obra.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Franja UE — Next Generation */}
      <div className="border-t border-white/10 bg-navy-dark/60">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:gap-10">
            {/* Logos */}
            <div className="flex shrink-0 items-center gap-4">
              <div className="relative h-14 w-28">
                <Image
                  src="/images/logoeuropa.png"
                  alt="Financiado por la Unión Europea – Next Generation EU"
                  fill
                  className="object-contain"
                  sizes="112px"
                />
              </div>
              <div className="relative h-14 w-28">
                <Image
                  src="/images/logoplanrecuperacion.png"
                  alt="Plan de Recuperación, Transformación y Resiliencia"
                  fill
                  className="object-contain"
                  sizes="112px"
                />
              </div>
            </div>
            {/* Texto legal */}
            <p className="text-center text-xs leading-relaxed text-bone/45 lg:text-left">
              Financiado por la Unión Europea – Next Generation EU. Sin embargo, los puntos de
              vista y las opiniones expresadas son únicamente los del autor o autores y no
              reflejan necesariamente los de la Unión Europea o la Comisión Europea. Ni la
              Unión Europea ni la Comisión Europea pueden ser consideradas responsables de las
              mismas.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-bone/40 sm:flex-row lg:px-10">
          <p>© {year} Obras y Reformas Aarón. Todos los derechos reservados.</p>
          <div className="flex flex-wrap justify-center gap-6 sm:justify-end">
            <Link href="/aviso-legal" className="transition hover:text-bone/70">
              Aviso Legal
            </Link>
            <Link href="/aviso-legal#politica-privacidad" className="transition hover:text-bone/70">
              Política de Privacidad
            </Link>
            <Link href="/aviso-legal#politica-cookies" className="transition hover:text-bone/70">
              Política de Cookies
            </Link>
            <Link href="/#contacto" className="transition hover:text-bone/70">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
