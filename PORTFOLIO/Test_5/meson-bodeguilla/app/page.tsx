import Image from "next/image";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const desayunos = [
  { name: "Churros", price: "0,50 €" },
  { name: "Tostada de Aceite", price: "1,50 €" },
  { name: "Tostada de Tomate", price: "1,50 €" },
  { name: "Tostada de Jamón Ibérico y Tomate", price: "2,50 €" },
];

const bocadillos = [
  { name: "Jamón Ibérico de Bellota", price: "10,00 €" },
  { name: "Lomo Ibérico de Bellota", price: "10,00 €" },
  { name: "Chorizo Ibérico de Bellota", price: "7,00 €" },
  { name: "Salchichón Ibérico de Bellota", price: "7,00 €" },
  { name: "Queso de Oveja", price: "7,00 €" },
  { name: "Anchoas", price: "7,00 €" },
  { name: "Mejillones", price: "7,00 €" },
  { name: "Panceta", price: "7,00 €" },
  { name: "Filetes de Cerdo", price: "7,00 €" },
];

const raciones = [
  { name: "Jamón Ibérico de Bellota", price: "24,00 €" },
  { name: "Lomo Ibérico de Bellota", price: "22,00 €" },
  { name: "Chorizo Ibérico de Bellota", price: "14,00 €" },
  { name: "Salchichón Ibérico de Bellota", price: "14,00 €" },
  { name: "Queso de Oveja", price: "14,00 €" },
  { name: "Anchoas", price: "14,00 €" },
  { name: "Mejillones", price: "14,00 €" },
  { name: "Magro con Champiñón", price: "11,00 €" },
  { name: "Panceta", price: "12,00 €" },
  { name: "Salchichas", price: "12,00 €" },
  { name: "Montaditos", price: "14,00 €" },
];

const gallery = [
  { src: "/plato_5.webp", alt: "Montaditos de anchoas con tomate y aceitunas", featured: true },
  { src: "/plato_2.webp", alt: "Anchoas con cerveza" },
  { src: "/plato_3.webp", alt: "Lomo ibérico de bellota" },
  { src: "/plato_4.webp", alt: "Magro con champiñón" },
  { src: "/plato_6.webp", alt: "Bocadillo con vino tinto" },
  { src: "/plato_1.webp", alt: "Magro con champiñón y patatas" },
  { src: "/plato_7.webp", alt: "Montaditos variados" },
  { src: "/plato_8.webp", alt: "Salchichas con patatas fritas" },
  { src: "/index_background.webp", alt: "Jamón ibérico de bellota" },
];

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
function MenuList({ items }: { items: { name: string; price: string }[] }) {
  return (
    <ul className="space-y-5">
      {items.map((item) => (
        <li key={item.name} className="flex items-baseline gap-2">
          <span className="text-sm leading-snug" style={{ color: "rgba(254,243,199,0.85)" }}>
            {item.name}
          </span>
          <span className="menu-dots" />
          <span className="text-sm shrink-0 font-medium" style={{ color: "#f59e0b" }}>
            {item.price}
          </span>
        </li>
      ))}
    </ul>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span
        className="text-xs tracking-widest uppercase font-medium shrink-0"
        style={{ color: "#f59e0b" }}
      >
        {children}
      </span>
      <div className="flex-1 h-px" style={{ background: "rgba(120,53,15,0.4)" }} />
    </div>
  );
}

function SectionEyebrow({ children }: { children: string }) {
  return (
    <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "#f59e0b" }}>
      {children}
    </p>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden bg-black" style={{ height: '100vh', flexShrink: 0 }}>
        {/* Background image */}
        <Image
          src="/index_background.webp"
          alt="Jamón Ibérico de Bellota"
          fill
          className="object-cover"
          style={{ opacity: 0.62 }}
          priority
        />

        {/* Warm vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(8,5,3,0.3) 0%, rgba(8,5,3,0.2) 50%, rgba(8,5,3,0.55) 100%)",
          }}
        />

        {/* ── NAVBAR ── */}
        <nav className="absolute z-20 top-0 left-0 right-0 px-6 md:px-10 pt-6 flex items-center justify-between gap-4">
          {/* Brand pill */}
          <div className="flex items-center gap-2.5 bg-neutral-900/90 backdrop-blur-md rounded-full pl-3.5 pr-5 py-2.5">
            <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none">
              <path d="M8 2h8l-1.5 7a4.5 4.5 0 0 1-5 0L8 2Z" fill="#f59e0b" opacity="0.9" />
              <path d="M9.5 9a2.5 2.5 0 0 0 5 0" stroke="#f59e0b" strokeWidth="1" />
              <line x1="12" y1="13.5" x2="12" y2="20" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="9" y1="20" x2="15" y2="20" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="text-amber-50 text-sm font-normal tracking-tight whitespace-nowrap">
              mesón la bodeguilla
            </span>
          </div>

          {/* Nav links pill */}
          <div className="hidden md:flex items-center gap-1 bg-neutral-900/90 backdrop-blur-md rounded-full px-3 py-2">
            {(["carta", "galería", "contacto"] as const).map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="text-neutral-300 hover:text-white transition-colors text-sm px-5 py-2 rounded-full"
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA button */}
          <a
            href="tel:927054922"
            className="bg-amber-500 text-black text-sm font-medium rounded-full px-6 py-3 hover:bg-amber-400 transition-colors whitespace-nowrap"
          >
            llamar
          </a>
        </nav>

        {/* ── FOREGROUND CONTENT ── */}
        <div className="relative h-full w-full">

          {/* Staggered giant words */}
          <h1
            className="hero-title fade-up absolute font-semibold text-[14vw] md:text-[13vw] left-4 md:left-10 top-[16%]"
            style={{ color: "#fef3c7" }}
          >
            mesón
          </h1>
          <h1
            className="hero-title fade-up delay-1 absolute font-semibold text-[14vw] md:text-[13vw] right-4 md:right-10 top-[36%]"
            style={{ color: "#fef3c7" }}
          >
            la
          </h1>
          <h1
            className="hero-title fade-up delay-2 absolute font-semibold text-[8.5vw] md:text-[8vw] left-4 md:left-10 top-[59%]"
            style={{ color: "#fef3c7" }}
          >
            bodeguilla
          </h1>

          {/* Tagline */}
          <p
            className="fade-up delay-3 absolute left-5 md:left-10 top-[47%] max-w-[200px] md:max-w-[260px] text-[14px] md:text-[15px] leading-snug"
            style={{ color: "rgba(254,243,199,0.85)" }}
          >
            especialidad en plancha · ibéricos de bellota · cáceres
          </p>

          {/* Hours — top right */}
          <div className="fade-up delay-1 absolute right-5 md:right-24 top-[14%]">
            <div className="flex items-center gap-3 justify-end">
              <span
                className="hidden md:block h-px w-20 rotate-[20deg]"
                style={{ background: "rgba(245,158,11,0.5)" }}
              />
              <span className="text-3xl md:text-4xl font-medium tracking-tight" style={{ color: "#fef3c7" }}>
                todos
              </span>
            </div>
            <p className="text-xs md:text-sm mt-1 text-right" style={{ color: "rgba(254,243,199,0.65)" }}>
              los días · 10:00–23:00
            </p>
          </div>

          {/* Bottom gradient */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-56"
            style={{ background: "linear-gradient(to bottom, transparent, #080503)" }}
          />

          {/* Address — bottom left */}
          <div className="fade-up delay-3 absolute left-5 md:left-20 bottom-20 md:bottom-24">
            <div className="flex items-center gap-3">
              <span className="text-base md:text-lg font-medium" style={{ color: "#fef3c7" }}>
                rda. del carmen, 34
              </span>
              <span
                className="hidden md:block h-px w-20 rotate-[-20deg]"
                style={{ background: "rgba(245,158,11,0.5)" }}
              />
            </div>
            <p className="text-xs md:text-sm mt-1" style={{ color: "rgba(254,243,199,0.65)" }}>
              10002 cáceres · casco antiguo
            </p>
          </div>

          {/* Phone — bottom right */}
          <div className="fade-up delay-4 absolute right-5 md:right-20 bottom-16 md:bottom-20">
            <div className="flex items-center gap-3 justify-end">
              <span
                className="hidden md:block h-px w-20 rotate-[-20deg]"
                style={{ background: "rgba(245,158,11,0.5)" }}
              />
              <a
                href="tel:927054922"
                className="text-2xl md:text-3xl font-medium tracking-tight hover:text-amber-400 transition-colors"
                style={{ color: "#fef3c7" }}
              >
                927 05 49 22
              </a>
            </div>
            <p className="text-xs md:text-sm mt-1 text-right" style={{ color: "rgba(254,243,199,0.65)" }}>
              reservas y consultas
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CARTA
      ══════════════════════════════════════ */}
      <section id="carta" className="py-24 px-6 md:px-16 lg:px-28" style={{ background: "#080503" }}>
        <div className="max-w-6xl mx-auto">

          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <SectionEyebrow>nuestra carta</SectionEyebrow>
              <h2
                className="serif text-5xl md:text-6xl"
                style={{ color: "#fef3c7", letterSpacing: "-0.03em", lineHeight: 0.95 }}
              >
                sabores de<br />extremadura
              </h2>
            </div>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: "rgba(254,243,199,0.5)" }}>
              Productos ibéricos de bellota, plancha artesana y bocadillos en el
              corazón del Casco Antiguo de Cáceres.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-16">
            <div>
              <SectionLabel>desayunos</SectionLabel>
              <MenuList items={desayunos} />
            </div>
            <div>
              <SectionLabel>bocadillos</SectionLabel>
              <MenuList items={bocadillos} />
            </div>
            <div>
              <SectionLabel>raciones</SectionLabel>
              <MenuList items={raciones} />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          GALERÍA
      ══════════════════════════════════════ */}
      <section id="galería" className="py-24 px-6 md:px-16 lg:px-28" style={{ background: "#0d0805" }}>
        <div className="max-w-6xl mx-auto">

          <div className="mb-12">
            <SectionEyebrow>galería</SectionEyebrow>
            <h2
              className="serif text-5xl md:text-6xl"
              style={{ color: "#fef3c7", letterSpacing: "-0.03em", lineHeight: 0.95 }}
            >
              en la plancha
            </h2>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
            style={{ gridAutoRows: "210px" }}
          >
            {gallery.map(({ src, alt, featured }) => (
              <div
                key={src}
                className={`gallery-item${featured ? " col-span-2 row-span-2" : ""}`}
                style={{ position: 'relative' }}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover"
                  sizes={
                    featured
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 50vw, 25vw"
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACTO
      ══════════════════════════════════════ */}
      <section
        id="contacto"
        className="py-24 px-6 md:px-16 lg:px-28 border-t"
        style={{ background: "#080503", borderColor: "rgba(120,53,15,0.2)" }}
      >
        <div className="max-w-6xl mx-auto">

          <div className="mb-14">
            <SectionEyebrow>encuéntranos</SectionEyebrow>
            <h2
              className="serif text-5xl md:text-6xl"
              style={{ color: "#fef3c7", letterSpacing: "-0.03em", lineHeight: 0.95 }}
            >
              ven a vernos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">

            {/* Horario */}
            <div>
              <p className="text-xs tracking-widest uppercase font-medium mb-6" style={{ color: "#f59e0b" }}>
                horario
              </p>
              <div
                className="flex justify-between items-center text-sm border-b pb-3"
                style={{ borderColor: "rgba(120,53,15,0.18)" }}
              >
                <span style={{ color: "rgba(254,243,199,0.55)" }}>Lunes – Domingo</span>
                <span className="font-medium" style={{ color: "#fef3c7" }}>10:00 – 23:00</span>
              </div>
              <p className="text-xs mt-5 leading-relaxed" style={{ color: "rgba(254,243,199,0.35)" }}>
                Abierto todos los días del año, incluidos festivos.
              </p>
            </div>

            {/* Dirección */}
            <div>
              <p className="text-xs tracking-widest uppercase font-medium mb-6" style={{ color: "#f59e0b" }}>
                dirección
              </p>
              <address className="not-italic text-sm leading-loose" style={{ color: "rgba(254,243,199,0.85)" }}>
                Rda. del Carmen, 34<br />
                Centro – Casco Antiguo<br />
                10002 Cáceres
              </address>
              <a
                href="https://maps.google.com/?q=Ronda+del+Carmen+34+Caceres"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-5 text-xs hover:text-amber-400 transition-colors"
                style={{ color: "#f59e0b" }}
              >
                ver en Google Maps
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Teléfono */}
            <div>
              <p className="text-xs tracking-widest uppercase font-medium mb-6" style={{ color: "#f59e0b" }}>
                teléfono
              </p>
              <a
                href="tel:927054922"
                className="serif text-3xl md:text-4xl font-medium tracking-tight hover:text-amber-400 transition-colors block"
                style={{ color: "#fef3c7", letterSpacing: "-0.03em" }}
              >
                927 05 49 22
              </a>
              <p className="text-xs mt-3" style={{ color: "rgba(254,243,199,0.35)" }}>
                Llamadas y consultas
              </p>
              <a
                href="tel:927054922"
                className="inline-flex items-center gap-2 mt-8 bg-amber-500 hover:bg-amber-400 transition-colors text-black text-sm font-medium rounded-full px-6 py-3"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                llamar ahora
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
      <footer
        className="py-8 px-6 md:px-16 lg:px-28 border-t"
        style={{ background: "#050302", borderColor: "rgba(120,53,15,0.12)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-xs" style={{ color: "rgba(254,243,199,0.25)" }}>
            © 2026 Mesón La Bodeguilla · Cáceres
          </span>
          <span className="text-xs" style={{ color: "rgba(254,243,199,0.25)" }}>
            Especialidad en plancha · Ibéricos de Bellota
          </span>
        </div>
      </footer>
    </>
  );
}
