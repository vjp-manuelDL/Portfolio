const services = [
  { icon: "☕", label: "Desayunos" },
  { icon: "🌿", label: "Terraza" },
  { icon: "🥪", label: "Para llevar" },
  { icon: "🍽️", label: "Menú del día" },
  { icon: "👨‍👩‍👧", label: "Familiar" },
  { icon: "🧒", label: "Menú infantil" },
  { icon: "🕖", label: "L–V 7:00–24:00" },
  { icon: "⭐", label: "+14 años" },
];

const all = [...services, ...services];

export default function LogoMarquee() {
  return (
    <div className="pb-10">
      <div className="max-w-5xl mx-auto px-8 flex items-center gap-12">
        <p className="text-foreground/40 text-sm leading-snug shrink-0 whitespace-nowrap">
          En Cáceres
          <br />
          desde 2010
        </p>

        <div className="overflow-hidden flex-1">
          <div
            className="flex gap-10"
            style={{ animation: "marquee 28s linear infinite", width: "max-content" }}
          >
            {all.map((s, i) => (
              <div key={i} className="flex items-center gap-2.5 shrink-0">
                <span
                  className="liquid-glass size-7 rounded-lg flex items-center justify-center text-sm"
                  aria-hidden
                >
                  {s.icon}
                </span>
                <span className="text-sm font-medium text-foreground/80">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
