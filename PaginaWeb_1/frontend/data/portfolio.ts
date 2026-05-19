import type { PortfolioItemLocal, ServicioItem } from "@/types";

export interface AntesDespuesItem {
  id: string;
  titulo: string;
  srcAntes: string;
  srcDespues: string;
}

export const HERO_SLIDES = [
  "/images/hero/hero-premium.png",
  "/images/hero/hero-02.png",
  "/images/portfolio/reformas/local-comercial-1.jpg",
];

/* ──────────────────────────────────────────────
   SERVICIOS — imágenes corregidas según brief
─────────────────────────────────────────────── */
export const SERVICIOS: ServicioItem[] = [
  {
    id: "reformas",
    tituloKey: "servicio.reformas",
    descripcionKey: "servicio.reformas.desc",
    imagen: "/images/services/reforma-vivienda.jpg",
  },
  {
    id: "banos",
    tituloKey: "servicio.banos",
    descripcionKey: "servicio.banos.desc",
    imagen: "/images/services/bano-service.jpg",
  },
  {
    id: "cocinas",
    tituloKey: "servicio.cocinas",
    descripcionKey: "servicio.cocinas.desc",
    imagen: "/images/services/cocina.jpg",
  },
  {
    id: "electricidad",
    tituloKey: "servicio.electricidad",
    descripcionKey: "servicio.electricidad.desc",
    imagen: "/images/services/electricidad.jpg",
  },
  {
    id: "fontaneria",
    tituloKey: "servicio.fontaneria",
    descripcionKey: "servicio.fontaneria.desc",
    imagen: "/images/services/fontaneria.jpg",
  },
  {
    id: "suelos",
    tituloKey: "servicio.suelos",
    descripcionKey: "servicio.suelos.desc",
    imagen: "/images/services/antesydespues.jpg",
  },
];

/* ──────────────────────────────────────────────
   GALERÍA REFORMAS — 5 tarjetas, imágenes reales
─────────────────────────────────────────────── */
export const PORTFOLIO_REFORMAS: PortfolioItemLocal[] = [
  {
    id: "carpinteria",
    titulo: "Carpintería y acabados",
    categoria: "reforma",
    imagen: "/images/portfolio/reformas/carpinteria.jpg",
    descripcion: "Puertas, armarios y acabados de madera a medida.",
  },
  {
    id: "suelo-resina",
    titulo: "Suelo resina epoxi",
    categoria: "reforma",
    imagen: "/images/portfolio/reformas/suelo-resina.jpg",
    descripcion: "Pavimento continuo de resina para cocinas y salones.",
  },
  {
    id: "local-comercial",
    titulo: "Local comercial industrial",
    categoria: "reforma",
    imagen: "/images/portfolio/reformas/local-comercial-1.jpg",
    descripcion: "Reforma integral de espacio comercial con acabado premium.",
  },
  {
    id: "solado",
    titulo: "Pavimento porcelánico madera",
    categoria: "reforma",
    imagen: "/images/portfolio/reformas/solado.jpg",
    descripcion: "Instalación en offset con precisión milimétrica.",
  },
  {
    id: "aluminio",
    titulo: "Aluminio y cerramientos",
    categoria: "reforma",
    imagen: "/images/portfolio/reformas/aluminio.jpg",
    descripcion: "Ventanas, persianas y cerramientos en aluminio.",
  },
  {
    id: "alicatados",
    titulo: "Alicatados y revestimientos",
    categoria: "reforma",
    imagen: "/images/portfolio/reformas/alicatados.jpg",
    descripcion: "Colocación de azulejo y gresite con acabado impecable.",
  },
];

/* ──────────────────────────────────────────────
   GALERÍA OBRAS — 6 tarjetas, imágenes reales
─────────────────────────────────────────────── */
export const PORTFOLIO_OBRAS: PortfolioItemLocal[] = [
  {
    id: "escalera-comunidad",
    titulo: "Escalera en granito",
    categoria: "obra",
    imagen: "/images/portfolio/obras/comunidad-de-vecinos.jpg",
    descripcion: "Revestimiento de zonas comunes con granito pulido.",
  },
  {
    id: "piscina",
    titulo: "Piscina porcelánica",
    categoria: "obra",
    imagen: "/images/portfolio/obras/piscina.jpg",
    descripcion: "Obra nueva con gres de gran formato.",
  },
  {
    id: "barbacoa",
    titulo: "Cocina exterior ladrillo",
    categoria: "obra",
    imagen: "/images/portfolio/obras/barbacoa.jpg",
    descripcion: "Construcción de barbacoa y encimera de hormigón.",
  },
  {
    id: "porche",
    titulo: "Terraza con césped artificial",
    categoria: "obra",
    imagen: "/images/portfolio/obras/porche.jpg",
    descripcion: "Porche exterior con césped artificial de alta densidad.",
  },
  {
    id: "cerramiento",
    titulo: "Ventanas y cerramientos",
    categoria: "obra",
    imagen: "/images/portfolio/obras/cerramiento-obra.jpg",
    descripcion: "PVC y aluminio con persianas integradas.",
  },
  {
    id: "albanileria",
    titulo: "Albañilería estructural",
    categoria: "obra",
    imagen: "/images/portfolio/obras/albanileria.png",
    descripcion: "Reparación y refuerzo de paramentos.",
  },
];

/* ──────────────────────────────────────────────
   COMPARADORES ANTES / DESPUÉS — imágenes reales
─────────────────────────────────────────────── */
export const ANTES_DESPUES: AntesDespuesItem[] = [
  {
    id: "cocina-reforma",
    titulo: "Reforma de cocina completa",
    srcAntes: "/images/portfolio/antes-despues/cocina-antes.jpg",
    srcDespues: "/images/portfolio/antes-despues/cocina-despues.jpg",
  },
  {
    id: "bano-renovacion",
    titulo: "Renovación de baño",
    srcAntes: "/images/portfolio/antes-despues/bano-antes.jpg",
    srcDespues: "/images/portfolio/antes-despues/bano-despues.jpg",
  },
  {
    id: "reforma-vivienda",
    titulo: "Reforma integral de vivienda",
    srcAntes: "/images/portfolio/antes-despues/vivienda-antes.jpg",
    srcDespues: "/images/portfolio/antes-despues/vivienda-despues.jpg",
  },
  {
    id: "reforma-cocina-2",
    titulo: "Cocina moderna con isla",
    srcAntes: "/images/portfolio/antes-despues/reforma-cocina-antes.jpg",
    srcDespues: "/images/portfolio/antes-despues/reforma-cocina-despues.jpg",
  },
];
