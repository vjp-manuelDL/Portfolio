"use client";

import { motion } from "framer-motion";

const companies = [
  {
    name: "Ayuntamiento",
    svg: (
      <svg viewBox="0 0 140 44" fill="currentColor" className="w-28 h-10">
        <rect x="62" y="4" width="16" height="16" rx="2" />
        <rect x="4" y="22" width="132" height="4" rx="2" />
        <rect x="16" y="28" width="18" height="12" rx="1" />
        <rect x="61" y="28" width="18" height="12" rx="1" />
        <rect x="106" y="28" width="18" height="12" rx="1" />
        <text x="70" y="56" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill="currentColor" opacity="0.6" dy="-4">AYUNTAMIENTO</text>
      </svg>
    ),
  },
  {
    name: "Constructora",
    svg: (
      <svg viewBox="0 0 140 44" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-28 h-10">
        <polygon points="70,4 130,38 10,38" />
        <rect x="55" y="26" width="30" height="12" />
      </svg>
    ),
  },
  {
    name: "Energía",
    svg: (
      <svg viewBox="0 0 140 44" fill="currentColor" className="w-28 h-10">
        <path d="M78 4L52 24h20L58 40l36-22H74z" />
      </svg>
    ),
  },
  {
    name: "Ingeniería SA",
    svg: (
      <svg viewBox="0 0 140 44" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-28 h-10">
        <circle cx="70" cy="22" r="16" />
        <circle cx="70" cy="22" r="6" fill="currentColor" stroke="none" />
        <line x1="70" y1="2" x2="70" y2="10" />
        <line x1="70" y1="34" x2="70" y2="42" />
        <line x1="50" y1="22" x2="58" y2="22" />
        <line x1="82" y1="22" x2="90" y2="22" />
      </svg>
    ),
  },
  {
    name: "Grupo Técnico",
    svg: (
      <svg viewBox="0 0 140 44" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-28 h-10">
        <rect x="20" y="10" width="100" height="24" rx="4" />
        <line x1="50" y1="10" x2="50" y2="34" />
        <line x1="90" y1="10" x2="90" y2="34" />
        <circle cx="70" cy="22" r="5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function TrustedLogos() {
  return (
    <section className="relative z-10 py-16 border-t border-slate-100 mt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
          Con la confianza de grandes empresas e instituciones
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-wrap justify-center items-center gap-12 md:gap-20 text-slate-300 hover:text-slate-400 transition-colors"
      >
        {companies.map((company, i) => (
          <motion.div
            key={company.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ opacity: 1, scale: 1.1 }}
            className="opacity-30 hover:opacity-60 transition-all duration-300 cursor-default"
            title={company.name}
          >
            {company.svg}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
