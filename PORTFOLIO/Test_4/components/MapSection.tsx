const hours = [
  { day: "Lunes", time: "7:00 – 16:00" },
  { day: "Martes", time: "7:00 – 24:00" },
  { day: "Miércoles", time: "7:00 – 24:00" },
  { day: "Jueves", time: "7:00 – 24:00" },
  { day: "Viernes", time: "7:00 – 24:00" },
  { day: "Sábado", time: "8:00 – 14:00" },
  { day: "Domingo", time: "Cerrado", closed: true },
];

export default function MapSection() {
  return (
    <section id="contacto" className="bg-[#0d2a42] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-14 bg-[#c8a96e]/50" />
            <span className="text-[#c8a96e] text-[10px] tracking-[0.35em] uppercase">
              Visítanos
            </span>
            <div className="h-px w-14 bg-[#c8a96e]/50" />
          </div>
          <h2 className="font-serif text-5xl md:text-6xl text-white">
            Dónde Estamos
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info panel */}
          <div className="space-y-10">
            <div>
              <h3 className="text-[#c8a96e] text-[10px] tracking-[0.3em] uppercase mb-3">
                Dirección
              </h3>
              <p className="text-white text-lg leading-relaxed">
                Av. de Alemania, 19
              </p>
              <p className="text-white/50 text-sm">
                Centro-Casco Antiguo, 10005 Cáceres
              </p>
            </div>

            <div>
              <h3 className="text-[#c8a96e] text-[10px] tracking-[0.3em] uppercase mb-3">
                Teléfono
              </h3>
              <a
                href="tel:614001744"
                className="text-white text-lg hover:text-[#c8a96e] transition-colors duration-300"
              >
                614 00 17 44
              </a>
            </div>

            <div>
              <h3 className="text-[#c8a96e] text-[10px] tracking-[0.3em] uppercase mb-3">
                Servicios
              </h3>
              <div className="flex gap-3 flex-wrap">
                {["Terraza", "Menú Infantil"].map((s) => (
                  <span
                    key={s}
                    className="px-4 py-1.5 border border-white/20 text-white/60 text-[11px] tracking-widest uppercase"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[#c8a96e] text-[10px] tracking-[0.3em] uppercase mb-4">
                Horario
              </h3>
              <div className="space-y-1.5">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-center py-2 border-b border-white/[0.07]"
                  >
                    <span
                      className={`text-sm ${
                        h.closed ? "text-white/25" : "text-white/65"
                      }`}
                    >
                      {h.day}
                    </span>
                    <span
                      className={`text-sm font-mono ${
                        h.closed ? "text-white/25" : "text-[#c8a96e]"
                      }`}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative h-[520px] overflow-hidden border border-white/10">
            <iframe
              src="https://maps.google.com/maps?q=Av.+de+Alemania,+19,+C%C3%A1ceres,+Espa%C3%B1a&hl=es&z=16&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "saturate(0.7) brightness(0.85)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Nuevo Neptuno"
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
