import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/index.jpg"
        alt="Nuevo Neptuno Cáceres"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/50" />
      {/* Top-to-bottom gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/25 via-transparent to-black/70" />
      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-36 bg-gradient-to-t from-[#edf5fa] to-transparent" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Decorative tag */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-14 bg-[#c8a96e]" />
          <span className="text-[#c8a96e] text-[10px] tracking-[0.4em] uppercase font-light">
            Cáceres
          </span>
          <div className="h-px w-14 bg-[#c8a96e]" />
        </div>

        {/* Main title */}
        <h1 className="font-serif text-[clamp(4rem,15vw,9rem)] font-bold text-white leading-none tracking-wider drop-shadow-2xl mb-4">
          NEPTUNO
        </h1>

        {/* Slogan */}
        <p className="text-white/70 text-sm md:text-base tracking-[0.2em] uppercase mb-12 font-light">
          Si lo puedes soñar, lo puedes desayunar
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="#carta"
            className="px-10 py-3 border border-[#c8a96e] text-[#c8a96e] text-[11px] tracking-[0.25em] uppercase hover:bg-[#c8a96e] hover:text-black transition-all duration-300"
          >
            Ver la Carta
          </Link>
          <a
            href="tel:614001744"
            className="px-10 py-3 bg-[#c8a96e] text-black text-[11px] tracking-[0.25em] uppercase hover:bg-[#dfc087] transition-all duration-300 font-medium"
          >
            Llamar Ahora
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/40 text-[9px] tracking-[0.25em] uppercase">
            Deslizar
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
