export type Idioma = "es" | "en";

export type RolUsuario = "cliente" | "admin" | "staff";

export interface Usuario {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  rol: RolUsuario;
  telefono: string;
  avatar: string | null;
  poblacion: string;
  is_staff?: boolean;
}

export interface ImagenProyecto {
  id: number;
  imagen: string;
  orden: number;
  marcada_borrar: boolean;
  subida_en: string;
}

export interface ProyectoObra {
  id: number;
  titulo: string;
  descripcion: string;
  ubicacion: string;
  coste: string | null;
  categoria: "reforma" | "obra" | "destacado";
  destacado: boolean;
  imagen_antes: string | null;
  imagen_despues: string | null;
  imagenes: ImagenProyecto[];
  imagenes_activas: ImagenProyecto[];
  creado_en: string;
  actualizado_en: string;
}

export type EstadoPresupuesto =
  | "recibido"
  | "en_revision"
  | "visita_programada"
  | "presupuesto_enviado"
  | "aceptado"
  | "rechazado"
  | "cerrado";

export interface SolicitudPresupuesto {
  id: number;
  nombre: string;
  telefono_prefijo: string;
  telefono_numero: string;
  telefono_completo: string;
  email: string;
  poblacion: string;
  trabajo_realizar: string;
  tipo_reforma: string;
  descripcion: string;
  estado: EstadoPresupuesto;
  acepta_aviso_legal: boolean;
  archivo_referencia: string | null;
  fecha_visita_tecnica: string | null;
  creado_en: string;
  actualizado_en: string;
}

export interface PresupuestoFormData {
  nombre: string;
  telefono_prefijo: string;
  telefono_numero: string;
  email: string;
  poblacion: string;
  trabajo_realizar: string;
  acepta_aviso_legal: boolean;
  archivo_referencia?: File | null;
}

export interface ServicioItem {
  id: string;
  tituloKey: string;
  descripcionKey: string;
  imagen: string;
}

export interface PortfolioItemLocal {
  id: string;
  titulo: string;
  categoria: "reforma" | "obra";
  imagen: string;
  descripcion: string;
  antesDespues?: boolean;
}
