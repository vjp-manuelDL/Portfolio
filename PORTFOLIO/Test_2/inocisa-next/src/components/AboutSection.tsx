"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Wrench, Award } from "lucide-react";

const stats = [
  { value: "+15", label: "Años de experiencia" },
  { value: "+500", label: "Proyectos completados" },
  { value: "4.9★", label: "Valoración media" },
  { value: "100%", label: "Clientes satisfechos" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Calidad Garantizada",
    desc: "Trabajamos con los mejores materiales y aplicamos controles de calidad exhaustivos en cada fase del proyecto.",
  },
  {
    icon: Clock,
    title: "Cumplimiento de Plazos",
    desc: "Nos comprometemos con los tiempos acordados desde el primer día. Tu tiempo es tan valioso como el nuestro.",
  },
  {
    icon: Wrench,
    title: "Equipo Especializado",
    desc: "Contamos con profesionales cualificados en cada disciplina: electricidad, obra civil, piscinas y más.",
  },
  {
    icon: Award,
    title: "Experiencia Contrastada",
    desc: "Más de 15 años avalan nuestra trayectoria en infraestructuras e ingeniería a nivel regional y nacional.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutSection() {
  return (
    <section id="empresa" className="py-28 relative z-10">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-brand)] bg-blue-50 px-4 py-1.5 rounded-full mb-4">
          Sobre Nosotros
        </span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-5 text-slate-900">
          La empresa que convierte<br className="hidden md:block" /> tu visión en realidad
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Inocisa nace con la misión de ofrecer soluciones integrales de infraestructura e ingeniería, combinando tecnología, experiencia y un equipo humano comprometido.
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 max-w-4xl mx-auto"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            className="glass-nav rounded-2xl p-6 text-center group hover:-translate-y-1 transition-transform duration-300"
          >
            <p className="font-heading text-4xl font-bold text-slate-900 mb-1 group-hover:text-[var(--color-brand)] transition-colors">
              {stat.value}
            </p>
            <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Values grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
      >
        {values.map((value) => {
          const Icon = value.icon;
          return (
            <motion.div
              key={value.title}
              variants={itemVariants}
              className="group flex gap-5 p-7 bg-white rounded-3xl border border-slate-100 shadow-lg shadow-slate-100/80 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300"
            >
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[var(--color-brand)] group-hover:bg-[var(--color-brand)] group-hover:text-white transition-colors duration-300">
                <Icon size={22} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
