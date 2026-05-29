"use client";
import { useRef, useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Xodo Plasencia",
    rating: 5,
    time: "Hace 2 meses",
    text: "Reformamos todo el piso con ellos y superaron todas las expectativas. Tanto Yolanda como Aarón son muy profesionales y atentos. El resultado fue increíble. 100% recomendados.",
    project: "Reforma integral de piso",
  },
  {
    name: "Virginia Romero",
    rating: 5,
    time: "Hace 7 meses",
    text: "Me atendieron de maravilla a pesar de estar lejos. Entendieron perfectamente lo que quería y el resultado fue fabuloso. Todo el proceso fue muy sencillo y cómodo.",
    project: "Reforma integral de vivienda",
  },
  {
    name: "Aroa Horbe",
    rating: 5,
    time: "Hace 9 meses",
    text: "Me respondieron el mismo día con el presupuesto. Me explicaron todo el proceso claramente y empezaron en menos de mes y medio. Trabajo limpio y muy recomendable.",
    project: "Reforma de baño y cocina",
  },
  {
    name: "Álvaro González",
    rating: 5,
    time: "Hace 11 meses",
    text: "Reformamos el patio de casa y quedó espectacular. Son muy profesionales y educados. Los recomendaría sin dudarlo, superaron mis expectativas con creces.",
    project: "Reforma de patio exterior",
  },
  {
    name: "María José Gómez",
    rating: 5,
    time: "Hace 1 año",
    text: "Escucharon todas mis indicaciones y el trabajo fue impecable. Cumplieron tiempos y las calidades son exactamente las que pedí. Muy satisfecha con el resultado.",
    project: "Reforma de cocina",
  },
  {
    name: "Mª Carmen González",
    rating: 5,
    time: "Hace 1 año",
    text: "Reformaron toda la casa: fontanería, pintura, suelo, electricidad... Es un equipo de confianza total. Todo perfecto y sin ningún problema. Los recomiendo al 100%.",
    project: "Reforma integral completa",
  },
  {
    name: "Angel Colmenar",
    rating: 5,
    time: "Hace 2 meses",
    text: "Reforma de baño rápida, agradable y cumpliendo los plazos acordados. Muy buen trato y profesionalidad. Quedé muy contento con el resultado final.",
    project: "Reforma de baño",
  },
  {
    name: "Joaquín Lobato",
    rating: 4,
    time: "Hace 6 meses",
    text: "Empresa familiar y profesional. Nos asesoraron muy bien durante todo el proceso de reforma. El equipo es rápido y muy servicial. Muy buenos profesionales.",
    project: "Reforma de vivienda",
  },
  {
    name: "Concepción Moreno",
    rating: 5,
    time: "Hace 7 meses",
    text: "Profesional, de calidad y cumpliendo los plazos y presupuesto acordados. Sin ninguna queja. La comunicación fue perfecta en todo momento. Repetiría sin duda.",
    project: "Obras de construcción",
  },
];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (trackRef.current?.offsetLeft ?? 0));
    setScrollLeft(trackRef.current?.scrollLeft ?? 0);
  };
  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="testimonios" className="py-32 bg-surface-2 relative overflow-hidden">
      <div className="absolute inset-0"
        style={{ backgroundImage: "radial-gradient(ellipse at center, rgba(201,168,76,0.03) 0%, transparent 70%)" }}
      />
      <div className="divider-gold absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="mb-16 text-center">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-4 block">Lo que dicen</span>
          <h2 className="font-display text-5xl lg:text-6xl font-black text-white">
            Clientes que nos<br /><span className="text-gradient-gold">Recomiendan</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold mt-6 mx-auto" />
          {/* Google badge */}
          <div className="inline-flex items-center gap-3 glass-gold px-6 py-3 rounded-full mt-8">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-gold text-gold" />
              ))}
            </div>
            <span className="text-gold text-sm font-semibold">5.0</span>
            <span className="text-stone-light text-sm">· 41 reseñas en Google</span>
          </div>
        </AnimatedSection>

        {/* Scrollable testimonials */}
        <div className="relative">
          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing select-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", scrollSnapType: "x mandatory" }}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="testimonial-card flex-shrink-0 w-80 sm:w-96 rounded-2xl p-7 scroll-snap-align-start"
                style={{ scrollSnapAlign: "start" }}
              >
                {/* Quote icon */}
                <Quote size={24} className="text-gold/30 mb-4" />
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, si) => (
                    <Star
                      key={si}
                      size={13}
                      className={si < t.rating ? "fill-gold text-gold" : "text-stone/30"}
                    />
                  ))}
                </div>
                {/* Text */}
                <p className="text-stone-light text-sm leading-relaxed mb-6 line-clamp-4">{t.text}</p>
                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div>
                    <div className="font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-xs text-stone mt-0.5">{t.project}</div>
                  </div>
                  <span className="text-xs text-stone">{t.time}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-4 w-12 bg-gradient-to-r from-surface-2 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-surface-2 to-transparent pointer-events-none" />
        </div>
        <p className="text-center text-xs text-stone mt-6">Arrastra para ver más · Reseñas verificadas de Google</p>
      </div>
    </section>
  );
}
