"use client";

import { motion } from "framer-motion";
import CompareSlider from "./CompareSlider";

const projects = [
  {
    title: "Rehabilitación de Piscina",
    desc: "Renovación integral de piscina y entorno exterior con materiales de primera calidad.",
    before: "/piscina_antes.jpg",
    after: "/piscina_final.jpg"
  },
  {
    title: "Reforma de Baño",
    desc: "Modernización completa, cambio de bañera por plato de ducha y nuevos revestimientos.",
    before: "/baño_antes.jpg",
    after: "/baño_despues.jpg"
  },
  {
    title: "Instalación Eléctrica",
    desc: "Actualización de cuadro de mandos e instalación acorde a la normativa vigente.",
    before: "/electricidad_antes.jpg",
    after: "/electricidad_despues.jpg"
  }
];

export default function ProjectsGallery() {
  return (
    <section id="proyectos" className="py-24 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-4">Nuestros Trabajos</h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Descubre el antes y después de nuestras intervenciones. Desliza para comparar el resultado final.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 group"
          >
            <div className="relative">
              <CompareSlider
                beforeImage={project.before}
                afterImage={project.after}
                beforeAlt={`${project.title} Antes`}
                afterAlt={`${project.title} Después`}
              />
            </div>
            <div className="p-8">
              <h3 className="font-heading text-2xl font-bold mb-3 text-slate-900 group-hover:text-[var(--color-brand)] transition-colors">{project.title}</h3>
              <p className="text-slate-600 leading-relaxed">{project.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
