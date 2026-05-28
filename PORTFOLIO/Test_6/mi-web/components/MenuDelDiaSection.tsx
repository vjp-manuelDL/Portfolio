import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

const courses = [
  {
    label: "Primeros",
    examples: ["Ensalada mixta", "Sopa del día", "Verduras salteadas"],
    img: "/img/comida_2.jpg",
    desc: "3 opciones diferentes cada día, elaboradas con productos frescos de temporada.",
  },
  {
    label: "Segundos",
    examples: ["Carne a la plancha", "Pescado del día", "Plato combinado"],
    img: "/img/comida_7.webp",
    desc: "Proteínas de calidad con guarnición incluida. Carta rotativa cada jornada.",
  },
  {
    label: "Postre + Bebida",
    examples: ["Fruta del tiempo", "Yogur", "Café o infusión"],
    img: "/img/tapa_2.webp",
    desc: "Siempre incluido: postre casero y tu bebida favorita.",
  },
];

export default function MenuDelDiaSection() {
  return (
    <section id="menu-dia" className="py-24 border-t border-foreground/8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-4">
          <span className="text-xs tracking-[0.3em] uppercase text-neptuno mb-3 block">
            Menú del día
          </span>
          <h2
            className="text-3xl md:text-4xl font-semibold text-foreground"
            style={{ fontFamily: "'General Sans', sans-serif" }}
          >
            Menú completo
          </h2>
          <p className="text-foreground/50 mt-3 text-sm max-w-md mx-auto">
            3 primeros · 3 segundos · postre · bebida. Cambia cada día, siempre casero.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber/30 text-amber text-sm font-medium">
            <span
              className="text-2xl font-bold bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #f59e0b, #22d3ee)" }}
            >
              ~10€
            </span>
            <span className="text-foreground/50 text-xs">precio orientativo · IVA incluido</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {courses.map((c) => (
            <CardContainer key={c.label} className="cursor-default">
              <CardBody className="relative group/card bg-card border border-foreground/10 w-72 h-auto rounded-2xl p-5 hover:shadow-2xl hover:shadow-neptuno/10 hover:border-neptuno/20 transition-all">
                <CardItem translateZ="40" className="w-full mb-4">
                  <img
                    src={c.img}
                    alt={c.label}
                    className="w-full h-40 object-cover rounded-xl group-hover/card:shadow-lg"
                  />
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-lg font-semibold text-foreground mb-1"
                >
                  {c.label}
                </CardItem>
                <CardItem as="p" translateZ="40" className="text-foreground/50 text-xs leading-5 mb-3">
                  {c.desc}
                </CardItem>
                <CardItem translateZ="30" className="w-full">
                  <ul className="space-y-1">
                    {c.examples.map((ex) => (
                      <li key={ex} className="flex items-center gap-2 text-xs text-foreground/60">
                        <span
                          className="size-1.5 rounded-full shrink-0"
                          style={{ background: "linear-gradient(135deg, #f59e0b, #22d3ee)" }}
                        />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
