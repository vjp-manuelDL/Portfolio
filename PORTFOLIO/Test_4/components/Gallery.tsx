import Image from "next/image";

const images = [
  { src: "/images/comida_1.jpg", alt: "Plato especial" },
  { src: "/images/comida_2.jpg", alt: "Desayuno artesanal" },
  { src: "/images/comida_3.jpg", alt: "Tostada neptuno" },
  { src: "/images/comida_4.webp", alt: "Tostada especial" },
  { src: "/images/comida_5.webp", alt: "Ingredientes frescos" },
  { src: "/images/comida_6.webp", alt: "Plato combinado" },
  { src: "/images/tapa_1.jpg", alt: "Tapa de la casa" },
  { src: "/images/tapa_2.webp", alt: "Montadito" },
  { src: "/images/tapa_3.webp", alt: "Pintxo" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="bg-[#e4f0f7] py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-14 bg-[#c8a96e]/60" />
            <span className="text-[#c8a96e] text-[10px] tracking-[0.35em] uppercase">
              Momentos
            </span>
            <div className="h-px w-14 bg-[#c8a96e]/60" />
          </div>
          <h2 className="font-serif text-5xl md:text-6xl text-[#0a1f35]">
            Galería
          </h2>
        </div>

        {/* 3×3 grid */}
        <div className="grid grid-cols-3 gap-2 md:gap-3">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 33vw, (max-width: 1200px) 33vw, 400px"
              />
              <div className="absolute inset-0 bg-[#0a1f35]/0 group-hover:bg-[#0a1f35]/25 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
