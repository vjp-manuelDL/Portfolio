import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#carta", label: "Carta" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1a4a6b] border-t border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <Image
              src="/images/Logo-noBG.png"
              alt="Neptuno"
              width={100}
              height={42}
              className="object-contain mb-5"
            />
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              Si lo puedes soñar, lo puedes desayunar. El mejor desayuno en el
              corazón de Cáceres desde hace años.
            </p>
            <div className="flex gap-5 mt-6">
              <a
                href="https://www.facebook.com/neptunocaceres/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/35 hover:text-[#c8a96e] transition-colors text-[11px] tracking-[0.15em] uppercase"
              >
                Facebook
              </a>
              <a
                href="https://turismo.caceres.es/es/servicio-poi/restaurante-neptuno"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/35 hover:text-[#c8a96e] transition-colors text-[11px] tracking-[0.15em] uppercase"
              >
                Turismo Cáceres
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-[10px] tracking-[0.28em] uppercase mb-6">
              Navegación
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/45 hover:text-[#c8a96e] text-sm transition-colors duration-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-[10px] tracking-[0.28em] uppercase mb-6">
              Contacto
            </h4>
            <div className="space-y-2 text-sm text-white/45">
              <p>Av. de Alemania, 19</p>
              <p>10005 Cáceres</p>
              <a
                href="tel:614001744"
                className="block hover:text-[#c8a96e] transition-colors duration-300 mt-3"
              >
                614 00 17 44
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.07] pt-7 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/20 text-xs">
            © {year} Nuevo Neptuno · Todos los derechos reservados
          </p>
          <p className="text-white/20 text-xs">Todos los precios incluyen IVA</p>
        </div>
      </div>
    </footer>
  );
}
