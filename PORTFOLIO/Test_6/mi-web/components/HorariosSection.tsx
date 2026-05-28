const schedule = [
  { day: "Lunes – Viernes", hours: "07:00 – 24:00", open: true },
  { day: "Sábados",         hours: "08:00 – 14:00", open: true },
  { day: "Domingos",        hours: "Cerrado",        open: false },
];

const services = [
  "Terraza exterior",
  "Menú infantil",
  "Desayunos completos",
  "Almuerzos",
  "Menú del día",
  "Para llevar",
  "Ambiente familiar",
  "14 años de experiencia",
];

export default function HorariosSection() {
  return (
    <section id="horario" className="py-24 border-t border-foreground/8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs tracking-[0.3em] uppercase text-neptuno mb-3 block">
            Horarios
          </span>
          <h2
            className="text-3xl md:text-4xl font-semibold text-foreground"
            style={{ fontFamily: "'General Sans', sans-serif" }}
          >
            Te esperamos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Horarios */}
          <div className="space-y-3">
            {schedule.map((s) => (
              <div
                key={s.day}
                className="flex items-center justify-between px-5 py-4 rounded-xl border border-foreground/8 bg-card"
              >
                <span className="text-foreground/80 text-sm font-medium">{s.day}</span>
                <span
                  className={`text-sm font-semibold ${
                    s.open
                      ? "bg-clip-text text-transparent"
                      : "text-foreground/30"
                  }`}
                  style={
                    s.open
                      ? { backgroundImage: "linear-gradient(135deg, #f59e0b, #22d3ee)" }
                      : {}
                  }
                >
                  {s.hours}
                </span>
              </div>
            ))}

            <p className="text-foreground/35 text-xs px-1 pt-2">
              Atención continua de lunes a viernes. Sábados solo desayunos y almuerzos.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <p className="text-foreground/50 text-xs uppercase tracking-widest mb-4">Servicios</p>
            <div className="flex flex-wrap gap-2">
              {services.map((s) => (
                <span
                  key={s}
                  className="liquid-glass text-xs text-foreground/70 px-3 py-1.5 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
