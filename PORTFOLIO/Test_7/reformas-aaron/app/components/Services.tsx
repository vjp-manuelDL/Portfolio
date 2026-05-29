"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    title: "Reformas Integrales",
    desc: "Renovación completa de viviendas y locales. Coordinamos todos los gremios para entregarte el espacio de tus sueños sin preocupaciones.",
    img: "/images/services/reforma-vivienda.jpg",
    tag: "Más solicitado",
  },
  {
    title: "Reforma de Baños",
    desc: "Diseño moderno, materiales de calidad y acabados impecables. Convertimos tu baño en un oasis de bienestar.",
    img: "/images/services/bano-service.jpg",
    tag: null,
  },
  {
    title: "Reforma de Cocinas",
    desc: "Cocinas funcionales y con diseño. Desde la distribución hasta los electrodomésticos, nos encargamos de todo.",
    img: "/images/services/cocina.jpg",
    tag: null,
  },
  {
    title: "Instalaciones Eléctricas",
    desc: "Proyectos eléctricos, domótica, iluminación LED y cuadros eléctricos. Seguridad y eficiencia garantizadas.",
    img: "/images/services/electricidad.jpg",
    tag: null,
  },
  {
    title: "Fontanería",
    desc: "Instalación y reparación de tuberías, sanitarios y sistemas de calefacción. Respuesta rápida en urgencias.",
    img: "/images/services/fontaneria.jpg",
    tag: null,
  },
  {
    title: "Pavimentos & Solados",
    desc: "Porcelánico, resina epoxi, hormigón pulido y madera. El suelo perfecto para cada estancia.",
    img: "/images/services/antesydespues.jpg",
    tag: null,
  },
  {
    title: "Albañilería & Pladur",
    desc: "Tabiques, techos, fachadas y reparaciones estructurales. La base sólida de cualquier reforma.",
    img: "/images/portfolio/reformas/alicatados.jpg",
    tag: null,
  },
  {
    title: "Aluminio & Cerramientos",
    desc: "Ventanas, puertas, persianas y cerramientos de aluminio. Aislamiento térmico y acústico de primera.",
    img: "/images/portfolio/reformas/aluminio.jpg",
    tag: null,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-32 relative">
      {/* Background texture */}
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle at 80% 50%, rgba(201,168,76,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-4 block">
                Lo que hacemos
              </span>
              <h2 className="font-display text-5xl lg:text-6xl font-black text-white leading-tight">
                Nuestros<br />
                <span className="text-gradient-gold">Servicios</span>
              </h2>
              <div className="w-16 h-0.5 bg-gold mt-6" />
            </div>
            <p className="text-stone-light text-lg max-w-md leading-relaxed">
              Más de 15 años ejecutando reformas en Plasencia y toda Extremadura.
              Profesionalidad, limpieza y puntualidad en cada proyecto.
            </p>
          </div>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 60} threshold={0.05}>
              <div className="group relative rounded-2xl overflow-hidden card-lift bg-surface-2 h-72 cursor-pointer">
                {/* Image */}
                <div className="absolute inset-0">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="img-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/30 to-transparent group-hover:from-obsidian/80 transition-all duration-500" />
                </div>

                {/* Tag */}
                {s.tag && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gold text-obsidian text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide">
                      {s.tag}
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h3 className="font-display text-lg font-bold text-white mb-0 group-hover:mb-2 transition-all duration-400">
                    {s.title}
                  </h3>
                  <p className="text-stone-light text-xs leading-relaxed max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                    {s.desc}
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-gold text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <span>Saber más</span>
                    <ArrowRight size={12} />
                  </div>
                </div>

                {/* Gold border on hover */}
                <div className="absolute inset-0 rounded-2xl border border-gold/0 group-hover:border-gold/20 transition-colors duration-500" />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={200} className="text-center mt-16">
          <p className="text-stone-light mb-6">
            ¿No ves lo que necesitas? Contamos con más especialidades.
          </p>
          <button
            onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-gold-border text-cream font-medium px-8 py-3.5 rounded-full text-sm hover:text-obsidian transition-all duration-300"
          >
            Consúltanos sin compromiso
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}
