"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { useRef, useEffect } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration - 0.01) {
        video.currentTime = 0;
        video.play();
      }
    };
    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <section
      id="inicio"
      className="relative flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-120px)] pt-16 md:pt-24 lg:pt-32 pb-16 gap-12 lg:gap-8"
    >
      {/* ── Left: Content ── */}
      <motion.div
        className="flex-1 w-full max-w-[680px] flex flex-col items-center lg:items-start text-center lg:text-left gap-7 z-10"
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.18 } } }}
      >
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          className="flex items-center gap-3 bg-white/55 backdrop-blur-xl px-4 py-2 rounded-full border border-white/80 shadow-sm"
        >
          <div className="flex gap-0.5 text-[#FF801E]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <span className="text-sm font-medium text-slate-600 tracking-tight">
            Valorados 4.9/5 por clientes
          </span>
        </motion.div>

        <motion.h1
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}
          className="font-heading text-[44px] sm:text-[58px] lg:text-[72px] xl:text-[78px] font-bold leading-[1.05] tracking-[-0.025em] text-slate-900"
        >
          Construimos el futuro,{" "}
          <span className="bg-gradient-to-r from-[#0084ff] to-[#60B1FF] bg-clip-text text-transparent">
            superamos expectativas
          </span>
        </motion.h1>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}
          className="text-lg leading-[1.65] text-slate-500 tracking-[-0.01em] lg:max-w-[88%]"
        >
          Gestionamos tus proyectos de infraestructura e ingeniería con eficiencia,
          calidad y compromiso total. Nos encargamos de todo de principio a fin.
        </motion.p>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}
          className="flex flex-col sm:flex-row gap-4 mt-2"
        >
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            href="#proyectos"
            className="btn-primary inline-flex items-center justify-center gap-3 bg-[rgba(0,132,255,0.85)] text-white px-7 py-3.5 rounded-2xl font-medium text-[17px] backdrop-blur-[2px] transition-all"
          >
            Ver Nuestros Trabajos
            <span className="flex items-center justify-center bg-white text-[#0084ff] w-8 h-8 rounded-full shrink-0">
              <ArrowRight size={17} strokeWidth={2.5} />
            </span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.97 }}
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 bg-white/40 border border-white/60 backdrop-blur-xl text-slate-800 px-7 py-3.5 rounded-2xl font-medium text-[17px] transition-all hover:bg-white/65"
          >
            Solicitar Presupuesto
          </motion.a>
        </motion.div>
      </motion.div>

      {/* ── Right: Video ── */}
      <motion.div
        initial={{ opacity: 0, x: 40, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
        className="flex-1 flex justify-center items-center w-full relative"
      >
        {/* Glow ambiental */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden
        >
          <div className="w-[80%] h-[80%] rounded-[40px] bg-blue-300/25 blur-[70px]" />
        </div>

        {/* Contenedor del vídeo con aspect-ratio fijo */}
        <div
          className="relative w-full max-w-[580px] rounded-[28px] overflow-hidden shadow-2xl shadow-blue-200/50"
          style={{ aspectRatio: "16 / 9", border: "1px solid rgba(255,255,255,0.7)" }}
        >
          {/* Shimmer superior */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Vídeo — posición absoluta para rellenar el contenedor */}
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/Video_Index.mp4" type="video/mp4" />
          </video>

          {/* Degradado inferior sutil */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/15 to-transparent pointer-events-none z-10" />
        </div>
      </motion.div>
    </section>
  );
}
