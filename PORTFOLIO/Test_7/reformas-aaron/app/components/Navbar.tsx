"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[#0A0A0B]/95 backdrop-blur-xl border-b border-white/[0.04] shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-20 h-20">
              <Image src="/images/logo.png" alt="Aarón" fill className="object-contain" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-base font-bold text-white tracking-wide">Obras & Reformas</div>
              <div className="text-[11px] text-gold tracking-[0.2em] uppercase font-medium">Aarón · Plasencia</div>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8">
            {links.map(l => (
              <li key={l.href}>
                <button
                  onClick={() => handleLink(l.href)}
                  className="text-stone-light text-sm tracking-wide hover:text-gold transition-colors duration-300 relative group"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+34685145536" className="flex items-center gap-2 text-sm text-stone-light hover:text-gold transition-colors">
              <Phone size={14} className="text-gold" />
              685 145 536
            </a>
            <button
              onClick={() => handleLink("#contacto")}
              className="btn-gold-border text-sm font-medium px-5 py-2.5 rounded-full text-cream hover:text-obsidian transition-all duration-300"
            >
              Presupuesto gratis
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2"
            aria-label="Menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-obsidian/95 backdrop-blur-xl" onClick={() => setOpen(false)} />
        <div
          className={`absolute right-0 top-0 bottom-0 w-72 bg-surface border-l border-white/5 flex flex-col justify-center px-10 transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="space-y-8">
            {links.map((l, i) => (
              <li key={l.href} style={{ transitionDelay: `${i * 60}ms` }}>
                <button
                  onClick={() => handleLink(l.href)}
                  className="font-display text-2xl text-cream hover:text-gradient-gold transition-colors block"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-12 pt-8 border-t border-white/5">
            <a href="tel:+34685145536" className="flex items-center gap-3 text-stone-light">
              <Phone size={16} className="text-gold" />
              685 145 536
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
