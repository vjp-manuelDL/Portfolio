"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Phase = "show" | "fade" | "done";

export function LogoLoader() {
  const [phase, setPhase] = useState<Phase>("show");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("fade"), 900);
    const t2 = setTimeout(() => setPhase("done"), 1500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white transition-opacity duration-700 ${
        phase === "fade" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* Logo */}
      <div className="relative h-24 w-80 animate-[fade-up_0.5s_ease_forwards]">
        <Image
          src="/images/logo.png"
          alt="Obras y Reformas Aarón"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Barra de progreso */}
      <div className="mt-10 h-0.5 w-56 overflow-hidden rounded-full bg-pagealt/30">
        <div className="h-full w-full origin-left animate-[progress_1.5s_ease-out_forwards] rounded-full bg-navy" />
      </div>

      {/* Subtexto */}
      <p className="mt-5 font-display text-xs font-semibold uppercase tracking-[0.25em] text-subtle">
        Plasencia · Cáceres
      </p>
    </div>
  );
}
