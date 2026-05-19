"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#contacto", label: "Contacto" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-44">
            <Image
              src="/images/logo.png"
              alt="Obras y Reformas Aarón"
              fill
              className="object-contain object-left"
              priority
              sizes="176px"
            />
          </div>
        </Link>

        {/* Nav links — desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              {scrolled ? (
                <Link
                  href={link.href}
                  className={`nav-link-light ${pathname === link.href ? "text-navy" : ""}`}
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className={`neon-link font-display text-sm font-medium uppercase tracking-wider ${pathname === link.href ? "text-cyan-neon" : ""}`}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <div className="hidden md:block">
          <Link
            href="/#contacto"
            className={`rounded-xl px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wider transition ${
              scrolled
                ? "bg-navy text-white hover:bg-navy-dark"
                : "border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20"
            }`}
          >
            Presupuesto gratis
          </Link>
        </div>

        {/* Hamburger — mobile */}
        <div ref={menuRef} className="relative md:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Abrir menú"
            className={`rounded-lg p-2 transition ${scrolled ? "text-gray-800" : "text-white"}`}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Mobile dropdown */}
          {menuOpen && (
            <div className="absolute right-0 top-12 w-56 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
              <ul className="divide-y divide-gray-100">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-5 py-3.5 font-display text-sm font-semibold uppercase tracking-wider text-gray-700 hover:bg-gray-50 hover:text-navy"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="p-3">
                  <Link
                    href="/#contacto"
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl bg-navy py-3 text-center font-display text-sm font-bold uppercase tracking-wider text-white"
                  >
                    Presupuesto gratis
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
