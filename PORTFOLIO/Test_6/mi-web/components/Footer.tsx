export default function Footer() {
  return (
    <footer className="border-t border-foreground/8 bg-background py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
          {/* Brand */}
          <div className="max-w-xs">
            <img
              src="/logo.png"
              alt="Nuevo Neptuno"
              className="h-[72px] w-auto object-contain mb-4"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-foreground/40 text-sm leading-relaxed">
              Cafetería tradicional extremeña en el corazón de Cáceres. Desayunos,
              almuerzos y menú del día desde 2010.
            </p>
            <p className="text-foreground/25 text-xs italic mt-3">
              "Si lo puedes soñar, lo puedes desayunar"
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-2">
            {[
              ["Carta", "#carta"],
              ["Galería", "#galeria"],
              ["Menú del día", "#menu-dia"],
              ["Horario", "#horario"],
              ["Contacto", "#contacto"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-foreground/45 text-sm hover:text-foreground/75 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Contact quick */}
          <div className="space-y-2 text-sm text-foreground/45">
            <p>📍 Av. de Alemania, 19 · Cáceres</p>
            <a href="tel:614001744" className="block hover:text-foreground/70 transition-colors">
              📞 614 00 17 44
            </a>
            <p>🕖 L–V 7:00–24:00 · Sáb 8:00–14:00</p>
          </div>
        </div>

        <div className="border-t border-foreground/8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-foreground/25 text-xs">
            © {new Date().getFullYear()} Cafetería Nuevo Neptuno · Cáceres
          </p>
          <p className="text-foreground/20 text-xs">
            Todos los precios incluyen IVA
          </p>
        </div>
      </div>
    </footer>
  );
}
