"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

interface BeforeAfterSliderProps {
  srcAntes: string;
  srcDespues: string;
  title: string;
  antesLabel: string;
  despuesLabel: string;
}

export function BeforeAfterSlider({
  srcAntes,
  srcDespues,
  title,
  antesLabel,
  despuesLabel,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, x)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updatePosition(e.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-pagealt bg-white shadow-card">
      {/* Cabecera */}
      <div className="flex items-center justify-between border-b border-pagealt px-5 py-3">
        <h3 className="font-display font-semibold text-prose">{title}</h3>
        <span className="text-xs text-subtle">Arrastra para comparar</span>
      </div>

      {/* Slider interactivo */}
      <div
        ref={containerRef}
        className="relative aspect-[4/3] cursor-ew-resize select-none overflow-hidden"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {/* Imagen DESPUÉS (fondo completo) */}
        <Image
          src={srcDespues}
          alt={`${title} - ${despuesLabel}`}
          fill
          className="object-cover"
          quality={90}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />

        {/* Imagen ANTES (recortada a la izquierda del handle) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={srcAntes}
            alt={`${title} - ${antesLabel}`}
            fill
            className="object-cover"
            quality={90}
          sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Línea divisora + handle */}
        <div
          className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-lg"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-navy shadow-navy">
            <span className="text-white text-base select-none">⟷</span>
          </div>
        </div>

        {/* Etiquetas */}
        <span className="absolute left-3 top-3 rounded-md bg-jet/75 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-bone backdrop-blur-sm">
          {antesLabel}
        </span>
        <span className="absolute right-3 top-3 rounded-md bg-navy px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
          {despuesLabel}
        </span>
      </div>
    </div>
  );
}
