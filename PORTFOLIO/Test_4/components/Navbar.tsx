"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#carta", label: "Carta" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0d2a42]/90 backdrop-blur-md py-3 shadow-lg shadow-[#0d2a42]/30"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="#inicio" className="relative z-10 shrink-0">
          <Image
            src="/images/Logo-noBG.png"
            alt="Neptuno"
            width={110}
            height={46}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[11px] tracking-[0.22em] uppercase text-white/75 hover:text-[#c8a96e] transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Phone CTA */}
        <a
          href="tel:614001744"
          className="hidden md:flex items-center gap-2 border border-[#c8a96e]/40 px-4 py-2 text-[11px] tracking-[0.15em] text-[#c8a96e] hover:bg-[#c8a96e] hover:text-black transition-all duration-300"
        >
          614 00 17 44
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden relative z-10 flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span
            className={`block h-px w-6 bg-white transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-white transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-[#0d2a42]/97 backdrop-blur-md ${
          menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col py-4 px-6 gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-3 text-[11px] tracking-[0.22em] uppercase text-white/70 hover:text-[#c8a96e] transition-colors border-b border-white/10"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-3">
            <a
              href="tel:614001744"
              className="block text-[11px] text-[#c8a96e] tracking-wide"
            >
              📞 614 00 17 44
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
