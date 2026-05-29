"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 15, suffix: "+", label: "Años de experiencia", desc: "Desde 2009 en Plasencia" },
  { value: 500, suffix: "+", label: "Clientes satisfechos", desc: "En toda Extremadura" },
  { value: 41, suffix: "", label: "Reseñas Google", desc: "Valoración media 5 estrellas" },
  { value: 100, suffix: "%", label: "Garantía de calidad", desc: "En cada proyecto" },
];

function Counter({ target, suffix, running }: { target: number; suffix: string; running: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (!running) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    ref.current = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(ref.current);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(ref.current);
  }, [running, target]);

  return (
    <span className="counter-value font-display text-5xl lg:text-6xl font-black shimmer-gold">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setRunning(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-surface-2 to-obsidian" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(201,168,76,0.03) 0%, transparent 50%, rgba(201,168,76,0.03) 100%)",
        }}
      />
      <div className="divider-gold absolute top-0 left-0 right-0" />
      <div className="divider-gold absolute bottom-0 left-0 right-0" />

      {/* Decorative circle */}
      <div
        className="absolute right-[-10vw] top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full border border-gold/5 animate-rotate-slow"
        style={{ borderWidth: "1px" }}
      />
      <div
        className="absolute right-[-6vw] top-1/2 -translate-y-1/2 w-[30vw] h-[30vw] rounded-full border border-gold/5"
        style={{ borderWidth: "1px", animationDuration: "15s" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="text-center lg:text-left"
              style={{
                opacity: running ? 1 : 0,
                transform: running ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 100}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 100}ms`,
              }}
            >
              <Counter target={s.value} suffix={s.suffix} running={running} />
              <div className="mt-3 mb-1 text-sm font-semibold text-white">{s.label}</div>
              <div className="text-xs text-stone">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
