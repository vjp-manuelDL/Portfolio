"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

type MenuItem = { name: string; desc?: string; price: string };
type Category = {
  title: string;
  subtitle: string;
  img: string;
  cta: string;
  items: MenuItem[];
};

const categories: Category[] = [
  {
    title: "Tostadas Clásicas",
    subtitle: "Desde 1,00€",
    img: "/img/tapa_3.webp",
    cta: "Ver",
    items: [
      { name: "Aceite", price: "1,00€" },
      { name: "Tomate", price: "1,00€" },
      { name: "Mantequilla y mermelada", price: "1,00€" },
      { name: "Paté", price: "1,00€" },
      { name: "Cachuela", price: "1,00€" },
      { name: "+ Añadir York", price: "+0,30€" },
    ],
  },
  {
    title: "Tostadas Especiales",
    subtitle: "Desde 1,60€",
    img: "/img/comida_6.webp",
    cta: "Ver",
    items: [
      { name: "Parrisina", desc: "tomate, jamón york, queso, orégano", price: "1,70€" },
      { name: "Extremeña", desc: "tomate con jamón ibérico", price: "2,20€" },
      { name: "Americana", desc: "tomate, cheddar y bacon gratinado", price: "2,00€" },
      { name: "Huevito", desc: "tomate, york, huevo frito y pimentón", price: "1,60€" },
      { name: "Tortillita", desc: "tomate, york y tortilla francesa", price: "1,60€" },
      { name: "Vegetal", desc: "mahonesa, lechuga, pimientos, tomate y queso", price: "2,10€" },
    ],
  },
  {
    title: "Tostadas Neptuno",
    subtitle: "Desde 1,90€",
    img: "/img/comida_3.jpg",
    cta: "Ver",
    items: [
      { name: "Revoltosa", desc: "tomate, huevos revueltos con bacon o ibérico", price: "1,90€" },
      { name: "Navarra", desc: "tomate, jamón ibérico y tortilla francesa", price: "2,50€" },
      { name: "Ibérica", desc: "tomate, jamón ibérico y queso gratinado", price: "2,60€" },
      { name: "Popeye", desc: "mantequilla, queso y espinacas salteadas en aceite de coco", price: "2,30€" },
      { name: "Merceditas", desc: "tomate, pimientos, cebolla morada, queso y picante", price: "2,40€" },
      { name: "Mediterránea", desc: "tomate, atún, queso y orégano", price: "2,00€" },
      { name: "De Rulo", desc: "tomate, tomate natural y rulo de cabra gratinado", price: "2,40€" },
      { name: "Cremosa", desc: "crema de roquefort y nueces", price: "1,90€" },
      { name: "Philadelphia", desc: "queso crema con rodajas de tomate natural", price: "1,90€" },
      { name: "Burgalesa", desc: "aceite, tomate natural y queso fresco", price: "2,30€" },
    ],
  },
  {
    title: "Camperos & Montaditos",
    subtitle: "Desde 2,00€",
    img: "/img/comida_5.webp",
    cta: "Ver",
    items: [
      { name: "Mixto", price: "2,20€" },
      { name: "Mixto con huevo", price: "2,50€" },
      { name: "Bacon, queso y huevo", price: "2,70€" },
      { name: "Montadito de tortilla", price: "2,00€" },
      { name: "Montadito de lomo", desc: "con tomate natural y queso", price: "2,50€" },
      { name: "Montadito de pollo", desc: "con lechuga, tomate y queso", price: "2,50€" },
      { name: "Campero jamón ibérico", desc: "con tomate opcional", price: "3,60€" },
      { name: "Campero queso curado", desc: "con tomate opcional", price: "3,20€" },
      { name: "Campero lomo", desc: "con tomate natural y queso", price: "3,60€" },
      { name: "Campero pollo", desc: "con lechuga, tomate y queso", price: "3,60€" },
    ],
  },
  {
    title: "Algo Más & Bollería",
    subtitle: "Desde 1,00€",
    img: "/img/tapa_1.jpg",
    cta: "Ver",
    items: [
      { name: "Pincho de tortilla", price: "1,40€" },
      { name: "Migas extremeñas", desc: "con huevo opcional +0,30€", price: "1,50€" },
      { name: "Bol de fruta variada", desc: "con zumo de naranja o yogur", price: "2,80€" },
      { name: "Bizcocho casero", price: "1,00€" },
      { name: "Napolitana de chocolate", price: "1,80€" },
      { name: "Croissant", desc: "con mantequilla y mermelada", price: "1,80€" },
      { name: "Croissant mixto", price: "2,20€" },
      { name: "Plato combinado", desc: "hasta 4 ingredientes de carta", price: "3,50€" },
    ],
  },
];

function CloseIcon() {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
}

export default function MenuSection() {
  const [active, setActive] = useState<Category | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <section id="carta" className="py-24 border-t border-foreground/8">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs tracking-[0.3em] uppercase text-neptuno mb-3 block">
            Nuestra carta
          </span>
          <h2
            className="text-3xl md:text-4xl font-semibold text-foreground"
            style={{ fontFamily: "'General Sans', sans-serif" }}
          >
            Hecha con cariño
          </h2>
          <p className="text-foreground/50 mt-3 text-sm">
            Haz clic en cada categoría para ver todos los platos y precios
          </p>
        </div>

        {/* Expanded overlay */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {active && (
            <div className="fixed inset-0 grid place-items-center z-50 px-4">
              <motion.button
                key={`close-${active.title}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="flex absolute top-4 right-4 items-center justify-center bg-foreground/10 hover:bg-foreground/20 rounded-full h-8 w-8 transition-colors"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>

              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-full max-w-lg h-full md:h-fit md:max-h-[85vh] flex flex-col bg-card border border-foreground/10 sm:rounded-2xl overflow-hidden"
              >
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <img
                    src={active.img}
                    alt={active.title}
                    className="w-full h-52 object-cover"
                  />
                </motion.div>

                <div className="p-6 overflow-auto flex-1">
                  <motion.h3
                    layoutId={`title-${active.title}-${id}`}
                    className="text-xl font-semibold text-foreground mb-1"
                  >
                    {active.title}
                  </motion.h3>
                  <p className="text-foreground/40 text-xs mb-5 uppercase tracking-wider">
                    Todos los precios incluyen IVA
                  </p>

                  <ul className="space-y-3">
                    {active.items.map((item, i) => (
                      <li key={i} className="flex justify-between gap-4 pb-3 border-b border-foreground/8 last:border-0">
                        <div>
                          <p className="text-foreground text-sm font-medium">{item.name}</p>
                          {item.desc && (
                            <p className="text-foreground/45 text-xs mt-0.5 italic">{item.desc}</p>
                          )}
                        </div>
                        <span
                          className="text-sm font-semibold shrink-0 bg-clip-text text-transparent"
                          style={{ backgroundImage: "linear-gradient(135deg, #f59e0b, #22d3ee)" }}
                        >
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Card list */}
        <ul className="space-y-3">
          {categories.map((cat) => (
            <motion.div
              layoutId={`card-${cat.title}-${id}`}
              key={`card-${cat.title}-${id}`}
              onClick={() => setActive(cat)}
              className="flex items-center justify-between gap-4 p-4 rounded-xl border border-foreground/8 hover:border-neptuno/30 hover:bg-card transition-all duration-200 cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                <motion.div layoutId={`image-${cat.title}-${id}`}>
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="h-14 w-14 rounded-lg object-cover shrink-0"
                  />
                </motion.div>
                <div>
                  <motion.h3
                    layoutId={`title-${cat.title}-${id}`}
                    className="font-semibold text-foreground text-sm md:text-base"
                  >
                    {cat.title}
                  </motion.h3>
                  <p className="text-foreground/50 text-xs mt-0.5">{cat.subtitle}</p>
                </div>
              </div>
              <span className="text-xs text-neptuno/70 group-hover:text-neptuno font-medium transition-colors shrink-0">
                Ver carta →
              </span>
            </motion.div>
          ))}
        </ul>
      </div>
    </section>
  );
}
