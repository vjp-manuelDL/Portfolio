"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX - 4}px`;
      dot.style.top = `${mouseY - 4}px`;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);
      ring.style.left = `${ringX - 18}px`;
      ring.style.top = `${ringY - 18}px`;
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);

    const onEnter = () => ring.classList.add("hovering");
    const onLeave = () => ring.classList.remove("hovering");

    document.addEventListener("mousemove", onMove);
    const interactives = document.querySelectorAll("a, button, [data-cursor]");
    interactives.forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener("mousemove", onMove);
      interactives.forEach(el => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden lg:block" />
      <div ref={ringRef} className="cursor-ring hidden lg:block" />
    </>
  );
}
