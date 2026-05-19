"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { label: "Inicio",    href: "#inicio" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Empresa",   href: "#empresa" },
  { label: "Contacto",  href: "#contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="sticky top-[30px] z-50 w-full flex justify-center"
      >
        <div
          className="flex items-center gap-6 md:gap-8 px-5 md:px-7 py-3 rounded-2xl w-fit max-w-[95vw] transition-all duration-300"
          style={{
            background: "rgba(255,255,255,0.30)",
            backdropFilter: "blur(50px)",
            WebkitBackdropFilter: "blur(50px)",
            border: "1px solid rgba(0,0,0,0.10)",
            boxShadow: scrolled
              ? "inset 0px 4px 4px rgba(255,255,255,0.25), 0 16px 40px -8px rgba(0,0,0,0.10)"
              : "inset 0px 4px 4px rgba(255,255,255,0.25), 0 10px 30px -10px rgba(0,0,0,0.05)",
          }}
        >
          {/* Logo — 2.5× original */}
          <a href="#" className="flex items-center shrink-0">
            <div className="relative w-[180px] h-[58px] md:w-[240px] md:h-[78px]">
              <Image
                src="/logo_noBG.png"
                alt="Inocisa"
                fill
                sizes="(max-width: 768px) 180px, 240px"
                className="object-contain"
                priority
              />
            </div>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-[15px] font-medium text-slate-900 hover:text-[#319AFF] transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-[#319AFF] rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA desktop */}
          <a
            href="#contacto"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-[15px] text-slate-900 transition-all hover:-translate-y-[1px] shrink-0"
            style={{
              background: "rgba(255,255,255,0.4)",
              border: "1px solid rgba(255,255,255,0.5)",
              backdropFilter: "blur(10px)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.7)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.4)")}
          >
            Presupuesto <ArrowRight size={15} strokeWidth={2} />
          </a>

          {/* Hamburguesa móvil */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl text-slate-800 transition-all shrink-0"
            style={{ background: "rgba(255,255,255,0.45)", border: "1px solid rgba(255,255,255,0.55)" }}
            aria-label="Menú"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Menú móvil */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="md:hidden fixed top-[110px] left-4 right-4 z-50 rounded-2xl p-6 flex flex-col gap-4"
            style={{
              background: "rgba(255,255,255,0.82)",
              backdropFilter: "blur(50px)",
              WebkitBackdropFilter: "blur(50px)",
              border: "1px solid rgba(0,0,0,0.08)",
              boxShadow: "inset 0px 4px 4px rgba(255,255,255,0.4), 0 20px 50px -10px rgba(0,0,0,0.12)",
            }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[17px] font-medium text-slate-900 hover:text-[#319AFF] transition-colors py-1.5 border-b border-black/5 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="mt-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-semibold"
              style={{ background: "rgba(0,132,255,0.85)", boxShadow: "inset 0px 4px 4px rgba(255,255,255,0.25)" }}
            >
              Solicitar Presupuesto <ArrowRight size={16} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
