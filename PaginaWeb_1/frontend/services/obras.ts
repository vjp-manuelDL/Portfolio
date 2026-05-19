import type { ProyectoObra } from "@/types";
import { apiFetch } from "./api";

export async function listProyectos(params?: {
  categoria?: string;
}): Promise<ProyectoObra[]> {
  const data = await apiFetch<{ results?: ProyectoObra[] } | ProyectoObra[]>(
    `/obras/proyectos/?page_size=100${params?.categoria ? `&categoria=${encodeURIComponent(params.categoria)}` : ""}`
  );
  return Array.isArray(data) ? data : data.results ?? [];
}

export async function subirImagenProyecto(
  proyectoId: number,
  file: File
): Promise<void> {
  const formData = new FormData();
  formData.append("imagen", file);
  await apiFetch(`/obras/proyectos/${proyectoId}/subir_imagen/`, {
    method: "POST",
    body: formData,
  });
}

export async function marcarImagenBorrar(
  proyectoId: number,
  imagenId: number,
  marcada: boolean
): Promise<void> {
  await apiFetch(
    `/obras/proyectos/${proyectoId}/imagenes/${imagenId}/marcar-borrar/`,
    {
      method: "PATCH",
      body: JSON.stringify({ marcada_borrar: marcada }),
    }
  );
}

export async function eliminarImagenProyecto(
  proyectoId: number,
  imagenId: number
): Promise<void> {
  await apiFetch(
    `/obras/proyectos/${proyectoId}/imagenes/${imagenId}/eliminar/`,
    { method: "DELETE" }
  );
}
