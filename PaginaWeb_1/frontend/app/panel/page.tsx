"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ClipboardList } from "lucide-react";
import { AdminProjectGallery } from "@/components/admin/AdminProjectGallery";
import { useAuth } from "@/context/AuthContext";
import { getMisSolicitudes } from "@/services/presupuestos";
import type { EstadoPresupuesto, SolicitudPresupuesto } from "@/types";

const ESTADO_STEPS: EstadoPresupuesto[] = [
  "recibido",
  "en_revision",
  "visita_programada",
  "presupuesto_enviado",
  "aceptado",
];

const ESTADO_LABELS: Record<EstadoPresupuesto, string> = {
  recibido: "Recibido",
  en_revision: "En revisión",
  visita_programada: "Visita técnica",
  presupuesto_enviado: "Presupuesto enviado",
  aceptado: "Aceptado",
  rechazado: "Rechazado",
  cerrado: "Cerrado",
};

function EstadoVisual({ estado }: { estado: EstadoPresupuesto }) {
  const stepIndex = ESTADO_STEPS.indexOf(estado);
  const activeIndex = stepIndex >= 0 ? stepIndex : 0;
  const isTerminal = estado === "rechazado" || estado === "cerrado";

  return (
    <div className="mt-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-cyan-neon">
        Seguimiento
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {ESTADO_STEPS.map((step, i) => {
          const done = !isTerminal && i < activeIndex;
          const current = !isTerminal && i === activeIndex;
          return (
            <div
              key={step}
              className={`flex items-center gap-2 rounded-full border px-3 py-1 text-xs ${
                done || current
                  ? "border-cyan-neon/50 bg-cyan-neon/10 text-cyan-neon"
                  : "border-white/10 text-ash"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  done
                    ? "bg-emerald-neon"
                    : current
                      ? "bg-cyan-neon animate-pulse"
                      : "bg-ash"
                }`}
              />
              {ESTADO_LABELS[step]}
            </div>
          );
        })}
      </div>
      {isTerminal && (
        <p className="mt-2 text-sm text-ash">
          Estado: <span className="text-bone">{ESTADO_LABELS[estado]}</span>
        </p>
      )}
    </div>
  );
}

export default function PanelPage() {
  const { user, loading, mounted } = useAuth();
  const router = useRouter();
  const [solicitudes, setSolicitudes] = useState<SolicitudPresupuesto[]>([]);
  const [loadList, setLoadList] = useState(true);

  useEffect(() => {
    if (!mounted || loading) return;
    if (!user) {
      router.replace("/login");
      return;
    }
    getMisSolicitudes()
      .then(setSolicitudes)
      .catch(() => setSolicitudes([]))
      .finally(() => setLoadList(false));
  }, [user, loading, mounted, router]);

  if (!mounted || loading) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-40">
        <div className="h-48 w-full rounded-xl skeleton-blueprint" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="mx-auto max-w-7xl px-6 py-32">
      <h1 className="font-display text-3xl font-bold text-bone">
        Hola, {user.first_name || user.username}
      </h1>
      <p className="mt-2 text-ash">Seguimiento de sus solicitudes de presupuesto.</p>

      {loadList ? (
        <div className="mt-10 space-y-4">
          {[1, 2].map((i) => (
            <div key={i} className="h-40 rounded-xl skeleton-blueprint" />
          ))}
        </div>
      ) : solicitudes.length === 0 ? (
        <div className="mt-12 rounded-xl border border-dashed border-cyan-neon/30 bg-card p-12 text-center animate-[fade-up_0.5s_ease_forwards]">
          <ClipboardList className="mx-auto h-12 w-12 text-cyan-neon/50" />
          <p className="mt-4 text-ash">Aún no hay solicitudes registradas.</p>
          <Link
            href="/#contacto"
            className="mt-6 inline-block text-cyan-neon hover:underline"
          >
            Solicitar presupuesto
          </Link>
        </div>
      ) : (
        <ul className="mt-10 space-y-6">
          {solicitudes.map((s) => (
            <li
              key={s.id}
              className="rounded-xl border border-white/10 bg-card p-6 glow-hover"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-display text-lg font-semibold text-bone">
                    {s.nombre}
                  </p>
                  <p className="text-sm text-ash">{s.poblacion}</p>
                  <p className="mt-2 text-sm text-bone/80">{s.trabajo_realizar}</p>
                </div>
                <span className="rounded-full border border-cyan-neon/40 px-3 py-1 text-xs uppercase text-cyan-neon">
                  {ESTADO_LABELS[s.estado]}
                </span>
              </div>
              <EstadoVisual estado={s.estado} />
              <p className="mt-4 text-xs text-ash">
                Enviado el {new Date(s.creado_en).toLocaleString("es-ES")}
              </p>
            </li>
          ))}
        </ul>
      )}

      {user && (user.rol === "admin" || user.is_staff) && (
        <div className="mt-16 max-w-none">
          <AdminProjectGallery />
        </div>
      )}
    </div>
  );
}
