import type { PresupuestoFormData, SolicitudPresupuesto } from "@/types";
import { apiFetch } from "./api";

export async function crearSolicitud(
  data: PresupuestoFormData
): Promise<SolicitudPresupuesto> {
  const formData = new FormData();
  formData.append("nombre", data.nombre);
  formData.append("telefono_prefijo", data.telefono_prefijo);
  formData.append("telefono_numero", data.telefono_numero);
  formData.append("email", data.email);
  formData.append("poblacion", data.poblacion);
  formData.append("trabajo_realizar", data.trabajo_realizar);
  formData.append(
    "acepta_aviso_legal",
    data.acepta_aviso_legal ? "true" : "false"
  );
  if (data.archivo_referencia) {
    formData.append("archivo_referencia", data.archivo_referencia);
  }
  return apiFetch("/presupuestos/solicitar/", {
    method: "POST",
    body: formData,
  });
}

export async function getMisSolicitudes(): Promise<SolicitudPresupuesto[]> {
  const data = await apiFetch<{ results?: SolicitudPresupuesto[] } | SolicitudPresupuesto[]>(
    "/presupuestos/mis-solicitudes/?page_size=50"
  );
  return Array.isArray(data) ? data : data.results ?? [];
}
