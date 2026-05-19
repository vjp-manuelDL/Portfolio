"use client";

import { useEffect, useState } from "react";

export function BlueprintScrollGrid() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-0 z-0 transition-opacity duration-700 blueprint-grid ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}
