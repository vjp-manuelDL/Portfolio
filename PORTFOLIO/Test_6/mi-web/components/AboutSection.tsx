import { BackgroundLines } from "@/components/ui/background-lines";

const stats = [
  { value: "+14", label: "años en Cáceres" },
  { value: "+20", label: "variedades de tostadas" },
  { value: "1€", label: "precio de entrada" },
  { value: "3€", label: "menú completo desde" },
];

export default function AboutSection() {
  return (
    <section id="nosotros">
      <BackgroundLines
        className="bg-background py-24 px-8 border-t border-foreground/8"
        svgOptions={{ duration: 12 }}
      >
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-neptuno mb-4 block">
            Sobre nosotros
          </span>
          <h2
            className="text-3xl md:text-5xl font-semibold text-foreground mb-6 leading-tight"
            style={{ fontFamily: "'General Sans', sans-serif" }}
          >
            Tradición extremeña
            <br />
            <span className="text-foreground/60 font-light">en cada bocado</span>
          </h2>
          <p className="text-foreground/60 text-base md:text-lg leading-8 max-w-2xl mx-auto mb-16">
            Más de 14 años sirviendo los mejores desayunos y almuerzos de Cáceres. Somos
            especialistas en tostadas artesanas, camperos, montaditos y el menú del día que
            cambia cada jornada. Terraza, ambiente familiar y precios que no te van a decepcionar.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="liquid-glass rounded-2xl p-6 flex flex-col items-center gap-1"
              >
                <span
                  className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, #f59e0b, #22d3ee)" }}
                >
                  {s.value}
                </span>
                <span className="text-foreground/50 text-sm text-center">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </BackgroundLines>
    </section>
  );
}
