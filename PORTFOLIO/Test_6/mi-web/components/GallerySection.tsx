import Carousel from "@/components/ui/carousel";

const slides = [
  {
    title: "Huevito con café",
    button: "Ver carta →",
    href: "#carta",
    src: "/img/comida_6.webp",
  },
  {
    title: "Tostada en terraza",
    button: "Ver carta →",
    href: "#carta",
    src: "/img/tapa_3.webp",
  },
  {
    title: "Tostadas ibéricas",
    button: "Ver carta →",
    href: "#carta",
    src: "/img/comida_3.jpg",
  },
  {
    title: "Campero especial",
    button: "Ver carta →",
    href: "#carta",
    src: "/img/comida_5.webp",
  },
  {
    title: "Plato del día",
    button: "Ver carta →",
    href: "#carta",
    src: "/img/comida_4.webp",
  },
  {
    title: "Cerveza con tapas",
    button: "Ver carta →",
    href: "#carta",
    src: "/img/tapa_1.jpg",
  },
  {
    title: "Carne a la plancha",
    button: "Ver carta →",
    href: "#carta",
    src: "/img/comida_7.webp",
  },
  {
    title: "Chipirones a la plancha",
    button: "Ver carta →",
    href: "#carta",
    src: "/img/comida_2.jpg",
  },
];

export default function GallerySection() {
  return (
    <section id="galeria" className="py-24 border-t border-foreground/8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs tracking-[0.3em] uppercase text-neptuno mb-3 block">
            Galería
          </span>
          <h2
            className="text-3xl md:text-4xl font-semibold text-foreground"
            style={{ fontFamily: "'General Sans', sans-serif" }}
          >
            Lo que te espera
          </h2>
          <p className="text-foreground/50 mt-3 text-sm">
            Haz clic en los slides para navegar
          </p>
        </div>

        <div className="relative w-full pt-4 pb-20">
          <Carousel slides={slides} />
        </div>
      </div>
    </section>
  );
}
