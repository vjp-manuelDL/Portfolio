"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        >
          {/* Glow ambiental */}
          <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-200/35 blur-[130px] pointer-events-none" />

          {/* Logo — 3× tamaño original (original: ~192×64 → 3x = 576×192) */}
          <motion.div
            animate={{ scale: [0.97, 1.03, 0.97], opacity: [0.88, 1, 0.88] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[340px] h-[112px] sm:w-[480px] sm:h-[160px] md:w-[580px] md:h-[192px]"
          >
            <Image
              src="/logo_noBG.png"
              alt="Inocisa"
              fill
              sizes="580px"
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Barra de progreso */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "300px" }}
            transition={{ duration: 2.2, ease: "circOut" }}
            className="h-[3px] bg-gradient-to-r from-[#60B1FF] to-[#0084ff] mt-12 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-5 text-xs tracking-[0.22em] uppercase text-slate-400 font-medium"
          >
            Infraestructuras · Ingeniería
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
