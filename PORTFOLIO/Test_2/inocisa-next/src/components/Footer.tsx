import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-blue-200 mt-20 relative z-10" style={{ background: "rgba(195,215,245,0.55)" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Marca + contacto */}
          <div className="col-span-1 lg:col-span-2">
            {/* Logo — 2.5× original (original era 128×40 → 2.5× = 320×100) */}
            <div className="relative w-[280px] h-[90px] mb-6">
              <Image
                src="/logo_noBG.png"
                alt="Inocisa"
                fill
                sizes="280px"
                className="object-contain object-left"
              />
            </div>
            <p className="text-slate-600 max-w-sm mb-8 leading-relaxed">
              Empresa de Infraestructuras e Ingeniería, aportando valor, calidad y
              solidez en cada proyecto desde el primer día.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+34669569248"
                className="flex items-center gap-3 text-slate-700 hover:text-[var(--color-brand)] transition-colors font-medium"
              >
                <Phone size={18} /> 669 56 92 48
              </a>
              <a
                href="mailto:info@inocisa.es"
                className="flex items-center gap-3 text-slate-700 hover:text-[var(--color-brand)] transition-colors font-medium"
              >
                <Mail size={18} /> info@inocisa.es
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-slate-900">Navegación</h4>
            <ul className="flex flex-col gap-4">
              {["#inicio|Inicio", "#proyectos|Nuestros Trabajos", "#empresa|La Empresa", "#contacto|Contacto"].map((item) => {
                const [href, label] = item.split("|");
                return (
                  <li key={label}>
                    <a href={href} className="text-slate-600 hover:text-[var(--color-brand)] transition-colors">
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-slate-900">Legal</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="/aviso-legal" className="text-slate-600 hover:text-[var(--color-brand)] transition-colors">
                  Aviso Legal
                </a>
              </li>
              <li>
                <a href="/privacidad" className="text-slate-600 hover:text-[var(--color-brand)] transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-slate-600 hover:text-[var(--color-brand)] transition-colors">
                  Política de Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Inocisa Infraestructuras e Ingeniería, S.L. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="/aviso-legal" className="hover:text-[var(--color-brand)] transition-colors">Aviso Legal</a>
            <a href="/privacidad"  className="hover:text-[var(--color-brand)] transition-colors">Privacidad</a>
            <a href="/cookies"     className="hover:text-[var(--color-brand)] transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
