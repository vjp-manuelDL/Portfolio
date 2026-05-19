"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  eliminarImagenProyecto,
  listProyectos,
  marcarImagenBorrar,
  subirImagenProyecto,
} from "@/services/obras";
import type { ImagenProyecto, ProyectoObra } from "@/types";
import { ApiError } from "@/services/api";

function mediaUrl(path: string | null): string {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  if (typeof window !== "undefined" && path.startsWith("/media")) {
    return path;
  }
  const origin =
    typeof window !== "undefined" ? "" : "http://127.0.0.1:8000";
  return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
}

export function AdminProjectGallery() {
  const [proyectos, setProyectos] = useState<ProyectoObra[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const data = await listProyectos();
      setProyectos(data);
    } catch {
      toast.error("No se pudieron cargar los proyectos");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  useEffect(() => {
    if (proyectos.length === 0) return;
    setSelectedId((current) => {
      if (current !== null && proyectos.some((p) => p.id === current)) {
        return current;
      }
      return proyectos[0].id;
    });
  }, [proyectos]);

  const selected = proyectos.find((p) => p.id === selectedId) ?? null;

  const imagenesActivas: ImagenProyecto[] =
    selected?.imagenes.filter((i) => !i.marcada_borrar) ?? [];

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !selected) return;
    try {
      await subirImagenProyecto(selected.id, file);
      toast.success("Imagen añadida");
      await refresh();
    } catch (err) {
      const msg = err instanceof ApiError ? err.message : "Error al subir";
      toast.error(msg);
    }
    e.target.value = "";
  };

  const toggleMarcar = async (img: ImagenProyecto) => {
    if (!selected) return;
    try {
      await marcarImagenBorrar(selected.id, img.id, !img.marcada_borrar);
      await refresh();
    } catch {
      toast.error("Error al actualizar");
    }
  };

  const eliminarDefinitivo = async (img: ImagenProyecto) => {
    if (!selected) return;
    if (!confirm("¿Eliminar esta imagen de forma permanente?")) return;
    try {
      await eliminarImagenProyecto(selected.id, img.id);
      toast.success("Imagen eliminada");
      await refresh();
    } catch {
      toast.error("Error al eliminar");
    }
  };

  if (loading) {
    return <div className="h-64 rounded-xl skeleton-blueprint" />;
  }

  return (
    <div className="rounded-xl border border-white/10 bg-card p-6">
      <h2 className="font-display text-xl font-bold text-bone">
        Gestión de fotos (Portfolio)
      </h2>
      <p className="mt-2 text-sm text-ash">
        Máximo 4 imágenes activas por proyecto. Marque para borrar o elimine desde la
        interfaz.
      </p>

      <div className="mt-6 flex flex-wrap gap-4">
        <select
          value={selectedId ?? ""}
          onChange={(e) => setSelectedId(Number(e.target.value))}
          className="rounded-lg border border-white/10 bg-jet px-4 py-2 text-bone"
        >
          {proyectos.map((p) => (
            <option key={p.id} value={p.id}>
              {p.titulo}
            </option>
          ))}
        </select>
        <label className="cursor-pointer rounded-lg border border-cyan-neon/40 bg-cyan-neon/10 px-4 py-2 text-sm font-semibold text-cyan-neon transition hover:bg-cyan-neon/20">
          Añadir foto
          <input type="file" accept="image/*" className="hidden" onChange={handleUpload} />
        </label>
      </div>

      {selected && (
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {selected.imagenes.map((img) => (
            <li
              key={img.id}
              className={`relative overflow-hidden rounded-lg border ${
                img.marcada_borrar
                  ? "border-red-500/50 opacity-60"
                  : "border-white/10"
              }`}
            >
              <div className="relative aspect-square">
                <Image
                  src={mediaUrl(img.imagen)}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
              <div className="flex flex-wrap gap-2 p-2">
                <button
                  type="button"
                  onClick={() => toggleMarcar(img)}
                  className="flex-1 rounded border border-white/10 px-2 py-1 text-xs text-bone hover:border-cyan-neon/50"
                >
                  {img.marcada_borrar ? "Desmarcar" : "Marcar borrar"}
                </button>
                <button
                  type="button"
                  onClick={() => eliminarDefinitivo(img)}
                  className="flex-1 rounded border border-red-500/40 px-2 py-1 text-xs text-red-400 hover:bg-red-500/10"
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {selected && (
        <p className="mt-4 text-xs text-ash">
          Imágenes activas: {imagenesActivas.length} / 4
        </p>
      )}
    </div>
  );
}
