"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "aaron_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[150] border-t border-white/10 bg-navy-dark shadow-[0_-4px_32px_rgba(0,0,0,0.3)]">
      <div className="mx-auto max-w-7xl px-6 py-5 lg:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
          <div className="flex-1">
            <p className="text-sm font-semibold text-bone">
              Este sitio web utiliza cookies
            </p>
            <p className="mt-1 text-xs leading-relaxed text-bone/60">
              Utilizamos cookies propias y de terceros para mejorar tu experiencia de navegación
              y obtener estadísticas de uso anónimas. Puedes aceptar su uso o rechazarlas.{" "}
              <Link
                href="/aviso-legal#politica-cookies"
                className="underline underline-offset-2 transition hover:text-bone/90"
              >
                Política de Cookies
              </Link>
              {" · "}
              <Link
                href="/aviso-legal#politica-privacidad"
                className="underline underline-offset-2 transition hover:text-bone/90"
              >
                Política de Privacidad
              </Link>
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <button
              onClick={decline}
              className="rounded-lg border border-white/20 px-4 py-2.5 text-sm text-bone/70 transition hover:border-white/40 hover:text-bone"
            >
              Rechazar
            </button>
            <button
              onClick={accept}
              className="rounded-lg bg-navy-light px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-navy"
            >
              Aceptar cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
