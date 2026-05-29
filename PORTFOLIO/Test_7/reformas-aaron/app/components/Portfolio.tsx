"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const filters = ["Todos", "Reformas", "Obras", "Antes & Después"];

const projects = [
  // Reformas
  { id: 1, cat: "Reformas", title: "Carpintería y Acabados", img: "/images/portfolio/reformas/carpinteria.jpg", desc: "Trabajos de carpintería premium con acabados de lujo" },
  { id: 2, cat: "Reformas", title: "Suelo de Resina Epoxi", img: "/images/portfolio/reformas/suelo-resina.jpg", desc: "Pavimento continuo de resina epoxi en local comercial" },
  { id: 3, cat: "Reformas", title: "Local Comercial", img: "/images/portfolio/reformas/local-comercial-1.jpg", desc: "Reforma integral de espacio industrial a oficina moderna" },
  { id: 4, cat: "Reformas", title: "Pavimento Porcelánico", img: "/images/portfolio/reformas/solado.jpg", desc: "Solado imitación madera en vivienda unifamiliar" },
  { id: 5, cat: "Reformas", title: "Aluminio y Cerramientos", img: "/images/portfolio/reformas/aluminio.jpg", desc: "Cerramiento de aluminio con rotura de puente térmico" },
  { id: 6, cat: "Reformas", title: "Alicatados y Revestimientos", img: "/images/portfolio/reformas/alicatados.jpg", desc: "Revestimiento cerámico gran formato en baño de lujo" },
  // Obras
  { id: 7, cat: "Obras", title: "Escalera en Granito", img: "/images/portfolio/antes-despues/escalera.png", desc: "Escalera monumental en granito natural" },
  { id: 8, cat: "Obras", title: "Piscina Porcelánica", img: "/images/portfolio/obras/piscina.jpg", desc: "Construcción de piscina con alicatado porcelánico" },
  { id: 9, cat: "Obras", title: "Cocina Exterior", img: "/images/portfolio/obras/barbacoa.jpg", desc: "Barbacoa y cocina de obra exterior con ladrillo visto" },
  { id: 10, cat: "Obras", title: "Terraza con Césped", img: "/images/portfolio/obras/porche.jpg", desc: "Porche y terraza con césped artificial de alta densidad" },
  { id: 11, cat: "Obras", title: "Cerramientos", img: "/images/portfolio/obras/cerramiento-obra.jpg", desc: "Cerramiento de parcela con bloque de hormigón visto" },
  { id: 12, cat: "Obras", title: "Albañilería Estructural", img: "/images/portfolio/obras/albanileria.png", desc: "Obra nueva con estructura de hormigón y ladrillo" },
];

const beforeAfter = [
  { id: 100, title: "Reforma de Cocina", before: "/images/portfolio/antes-despues/cocina-antes.jpg", after: "/images/portfolio/antes-despues/cocina-despues.jpg" },
  { id: 101, title: "Renovación de Baño", before: "/images/portfolio/antes-despues/bano-antes.jpg", after: "/images/portfolio/antes-despues/bano-despues.jpg" },
  { id: 102, title: "Reforma Integral", before: "/images/portfolio/antes-despues/vivienda-antes.jpg", after: "/images/portfolio/antes-despues/vivienda-despues.jpg" },
  { id: 103, title: "Cocina con Isla", before: "/images/portfolio/antes-despues/reforma-cocina-antes.jpg", after: "/images/portfolio/antes-despues/reforma-cocina-despues.jpg" },
];

function BeforeAfter({ before, after, title }: { before: string; after: string; title: string }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 2), 98);
    setPos(pct);
  }, []);

  useEffect(() => {
    const onUp = () => { dragging.current = false; };
    const onMove = (e: MouseEvent) => { if (dragging.current) updatePos(e.clientX); };
    const onTouchMove = (e: TouchEvent) => { if (dragging.current) updatePos(e.touches[0].clientX); };
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchend", onUp);
    window.addEventListener("touchmove", onTouchMove);
    return () => {
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchend", onUp);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [updatePos]);

  return (
    <div className="rounded-2xl overflow-hidden bg-surface-2">
      <div
        ref={containerRef}
        className="before-after-container relative h-64 sm:h-80"
        onMouseDown={e => { dragging.current = true; updatePos(e.clientX); }}
        onTouchStart={e => { dragging.current = true; updatePos(e.touches[0].clientX); }}
      >
        {/* After (full) */}
        <div className="absolute inset-0">
          <Image src={after} alt="Después" fill className="object-cover" />
        </div>
        {/* Before (clipped) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <div className="relative h-full" style={{ width: `${100 / (pos / 100)}%` }}>
            <Image src={before} alt="Antes" fill className="object-cover" />
          </div>
        </div>
        {/* Handle */}
        <div className="before-after-handle" style={{ left: `${pos}%` }} />
        {/* Labels */}
        <div className="absolute top-4 left-4 z-20 pointer-events-none">
          <span className="glass text-white text-xs font-bold px-3 py-1 rounded-full">ANTES</span>
        </div>
        <div className="absolute top-4 right-4 z-20 pointer-events-none">
          <span className="glass-gold text-gold text-xs font-bold px-3 py-1 rounded-full">DESPUÉS</span>
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-display text-white font-semibold">{title}</h4>
        <p className="text-xs text-stone mt-1">Arrastra para comparar</p>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("Todos");
  const [lightbox, setLightbox] = useState<typeof projects[0] | null>(null);
  const [lbIdx, setLbIdx] = useState(0);

  const visible = active === "Todos"
    ? projects
    : active === "Antes & Después"
    ? []
    : projects.filter(p => p.cat === active);

  const openLightbox = (p: typeof projects[0]) => {
    setLightbox(p);
    setLbIdx(visible.findIndex(v => v.id === p.id));
    document.body.style.overflow = "hidden";
  };
  const closeLightbox = () => {
    setLightbox(null);
    document.body.style.overflow = "";
  };
  const prevLb = () => {
    const ni = (lbIdx - 1 + visible.length) % visible.length;
    setLbIdx(ni);
    setLightbox(visible[ni]);
  };
  const nextLb = () => {
    const ni = (lbIdx + 1) % visible.length;
    setLbIdx(ni);
    setLightbox(visible[ni]);
  };

  const actionsRef = useRef({ closeLightbox, prevLb, nextLb });
  actionsRef.current = { closeLightbox, prevLb, nextLb };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") actionsRef.current.closeLightbox();
      if (e.key === "ArrowLeft") actionsRef.current.prevLb();
      if (e.key === "ArrowRight") actionsRef.current.nextLb();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="portfolio" className="py-32 relative bg-obsidian">
      <div className="absolute inset-0"
        style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(201,168,76,0.03) 0%, transparent 50%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-4 block">Nuestros proyectos</span>
              <h2 className="font-display text-5xl lg:text-6xl font-black text-white">
                Portfolio de<br /><span className="text-gradient-gold">Trabajos</span>
              </h2>
              <div className="w-16 h-0.5 bg-gold mt-6" />
            </div>
            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    active === f
                      ? "bg-gold text-obsidian shadow-[0_4px_20px_rgba(201,168,76,0.3)]"
                      : "glass text-stone-light hover:text-white hover:border-gold/30"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Before/After */}
        {(active === "Todos" || active === "Antes & Después") && (
          <AnimatedSection className="mb-12">
            <h3 className="font-display text-2xl text-white mb-8 flex items-center gap-4">
              Transformaciones
              <div className="flex-1 h-px bg-gradient-to-r from-gold/30 to-transparent" />
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {beforeAfter.map((ba, i) => (
                <AnimatedSection key={ba.id} delay={i * 80}>
                  <BeforeAfter {...ba} />
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* Project grid */}
        {visible.length > 0 && (
          <div>
            {active === "Todos" && (
              <h3 className="font-display text-2xl text-white mb-8 flex items-center gap-4">
                Proyectos Realizados
                <div className="flex-1 h-px bg-gradient-to-r from-gold/30 to-transparent" />
              </h3>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {visible.map((p, i) => (
                <AnimatedSection key={p.id} delay={i * 60} threshold={0.05}>
                  <div
                    onClick={() => openLightbox(p)}
                    className="group relative rounded-2xl overflow-hidden cursor-pointer card-lift h-64"
                  >
                    <Image src={p.img} alt={p.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="img-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="glass text-xs text-stone-light px-2.5 py-1 rounded-full">{p.cat}</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h4 className="font-display text-white font-bold text-lg">{p.title}</h4>
                      <p className="text-stone-light text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{p.desc}</p>
                    </div>
                    <div className="absolute inset-0 rounded-2xl border border-gold/0 group-hover:border-gold/20 transition-colors duration-500" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian/95 backdrop-blur-xl"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full mx-4 rounded-2xl overflow-hidden bg-surface"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative h-[60vh]">
              <Image src={lightbox.img} alt={lightbox.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <span className="text-xs text-gold tracking-widest uppercase">{lightbox.cat}</span>
              <h3 className="font-display text-2xl text-white font-bold mt-1">{lightbox.title}</h3>
              <p className="text-stone-light mt-2">{lightbox.desc}</p>
            </div>
            <button onClick={closeLightbox} className="absolute top-4 right-4 glass p-2 rounded-full text-white hover:text-gold transition-colors">
              <X size={18} />
            </button>
            {visible.length > 1 && (
              <>
                <button onClick={prevLb} className="absolute left-4 top-1/2 -translate-y-1/2 glass p-2 rounded-full text-white hover:text-gold transition-colors">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={nextLb} className="absolute right-4 top-1/2 -translate-y-1/2 glass p-2 rounded-full text-white hover:text-gold transition-colors">
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
