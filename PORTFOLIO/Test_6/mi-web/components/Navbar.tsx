"use client";

const navLinks = [
  { label: "Carta", href: "#carta" },
  { label: "Galería", href: "#galeria" },
  { label: "Menú del día", href: "#menu-dia" },
  { label: "Horario", href: "#horario" },
];

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 md:px-10 flex items-center justify-between gap-4">
      <a href="#" className="shrink-0">
        <img
          src="/logo.png"
          alt="Nuevo Neptuno"
          className="h-[72px] w-auto object-contain"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </a>

      <div className="hidden md:flex items-center gap-7">
        {navLinks.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="text-foreground/70 hover:text-foreground transition-colors duration-150 text-sm"
          >
            {l.label}
          </a>
        ))}
      </div>

      <a
        href="tel:614001744"
        className="rounded-full px-4 py-2 text-sm font-medium border border-neptuno/40 text-neptuno hover:bg-neptuno/10 transition-colors duration-150 shrink-0"
      >
        614 00 17 44
      </a>
    </nav>
  );
}
