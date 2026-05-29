"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown, Star, ArrowRight } from "lucide-react";

const slides = [
  {
    src: "/images/hero/hero-premium.png",
    label: "Reformas Integrales",
    sub: "Transformamos cada espacio con precisión y arte",
  },
  {
    src: "/images/hero/hero-02.png",
    label: "Obras de Calidad",
    sub: "Más de 15 años construyendo confianza",
  },
  {
    src: "/images/hero/hero-04.png",
    label: "Diseño & Ejecución",
    sub: "Del proyecto a la realidad, sin compromiso",
  },
  {
    src: "/images/hero/hero-arquitectura.png",
    label: "Tu Hogar Soñado",
    sub: "500+ clientes satisfechos en Extremadura",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const next = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(c => (c + 1) % slides.length);
      setAnimating(false);
    }, 600);
  };

  const nextRef = useRef(next);
  nextRef.current = next;

  useEffect(() => {
    intervalRef.current = setInterval(() => nextRef.current(), 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const scrollDown = () => {
    document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.src}
            alt={s.label}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover transition-transform duration-[8000ms] ease-out ${
              i === current ? "scale-110" : "scale-100"
            }`}
          />
        </div>
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-obsidian/60 to-obsidian/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />

      {/* Decorative lines */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      <div
        className="absolute top-1/2 -translate-y-1/2 left-0 h-[1px] bg-gradient-to-r from-gold/40 to-transparent"
        style={{ width: "30vw" }}
      />

      {/* Particle dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/30 animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 glass-gold px-4 py-2 rounded-full mb-8"
            style={{ animation: "reveal-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s both" }}
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} className="fill-gold text-gold" />
              ))}
            </div>
            <span className="text-xs text-gold font-medium tracking-wide">41 reseñas · 5 estrellas Google</span>
          </div>

          {/* Title */}
          <div
            key={current}
            style={{ animation: "reveal-up 0.7s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] mb-6">
              <span className="text-white block">{slides[current].label.split(" ")[0]}</span>
              <span className="shimmer-gold block">
                {slides[current].label.split(" ").slice(1).join(" ")}
              </span>
            </h1>
            <p className="text-stone-light text-lg sm:text-xl max-w-xl leading-relaxed mb-10">
              {slides[current].sub}
            </p>
          </div>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4"
            style={{ animation: "reveal-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s both" }}
          >
            <button
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative overflow-hidden bg-gradient-gold text-obsidian font-semibold px-8 py-4 rounded-full text-sm tracking-wide flex items-center gap-2 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(201,168,76,0.4)]"
            >
              <span className="relative z-10">Pedir presupuesto gratis</span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </button>
            <button
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-gold-border text-cream font-medium px-8 py-4 rounded-full text-sm tracking-wide hover:text-obsidian transition-all duration-300"
            >
              Ver nuestros trabajos
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="flex flex-wrap gap-8 mt-20 pt-10 border-t border-white/10"
          style={{ animation: "reveal-up 0.9s cubic-bezier(0.16,1,0.3,1) 0.6s both" }}
        >
          {[
            { value: "15+", label: "Años de experiencia" },
            { value: "500+", label: "Clientes satisfechos" },
            { value: "5★", label: "Valoración Google" },
          ].map(s => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="font-display text-3xl font-bold text-gradient-gold">{s.value}</span>
              <span className="text-xs text-stone tracking-wide uppercase">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 right-10 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-gold" : "w-2 bg-white/20"
            }`}
          />
        ))}
      </div>

      {/* Scroll arrow */}
      <button
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-xs text-stone tracking-widest uppercase animate-float"
      >
        <ChevronDown size={20} className="text-gold" />
      </button>
    </section>
  );
}
