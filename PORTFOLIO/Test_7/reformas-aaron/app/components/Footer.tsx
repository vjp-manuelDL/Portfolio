"use client";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const services = [
  "Reformas Integrales", "Reforma de Baños", "Reforma de Cocinas",
  "Instalaciones Eléctricas", "Fontanería", "Albañilería y Pladur",
  "Cerramientos y Aluminio", "Pavimentos y Solados",
];

function IconInstagram({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function IconFacebook({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function IconYoutube({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
    </svg>
  );
}

const socials = [
  { icon: IconInstagram, href: "https://www.instagram.com/obrasyreformas_aaron/", label: "Instagram" },
  { icon: IconFacebook, href: "https://www.facebook.com/p/Obras-y-Reformas-Aar%C3%B3n-61552669450167/", label: "Facebook" },
  { icon: IconYoutube, href: "https://www.youtube.com/channel/UCmxwiAOK2K0beftTYMzQVXQ", label: "YouTube" },
  { icon: MessageCircle, href: "https://wa.me/34685145536", label: "WhatsApp" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-white/[0.04]">
      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-20 h-20">
                <Image src="/images/logo.png" alt="Aarón" fill className="object-contain" />
              </div>
              <div>
                <div className="font-display text-base font-bold text-white">Obras & Reformas</div>
                <div className="text-[11px] text-gold tracking-[0.2em] uppercase">Aarón · Plasencia</div>
              </div>
            </div>
            <p className="text-stone text-sm leading-relaxed mb-6">
              Más de 15 años transformando hogares y espacios en Plasencia y toda Extremadura.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-stone-light hover:text-gold hover:border-gold/20 transition-all duration-300"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Servicios</h4>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s}>
                  <button
                    onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-stone hover:text-gold transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-3 h-px bg-gold/40 inline-block" />
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Navegación</h4>
            <ul className="space-y-3">
              {[
                { label: "Inicio", id: "" },
                { label: "Servicios", id: "servicios" },
                { label: "Portfolio", id: "portfolio" },
                { label: "Nosotros", id: "nosotros" },
                { label: "Testimonios", id: "testimonios" },
                { label: "Contacto", id: "contacto" },
              ].map(l => (
                <li key={l.label}>
                  <button
                    onClick={() => l.id
                      ? document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" })
                      : window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="text-stone hover:text-gold transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-3 h-px bg-gold/40 inline-block" />
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Contacto</h4>
            <div className="space-y-4">
              <a href="tel:+34685145536" className="flex items-center gap-3 text-stone hover:text-gold transition-colors">
                <Phone size={14} className="text-gold shrink-0" />
                <span className="text-sm">685 145 536</span>
              </a>
              <a href="mailto:info@obrasreformasaaron.es" className="flex items-center gap-3 text-stone hover:text-gold transition-colors">
                <Mail size={14} className="text-gold shrink-0" />
                <span className="text-sm">info@obrasreformasaaron.es</span>
              </a>
              <div className="flex items-start gap-3 text-stone">
                <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
                <span className="text-sm">Plasencia, Cáceres<br />Extremadura, España</span>
              </div>
            </div>
            <a
              href="https://wa.me/34685145536"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn inline-flex items-center gap-2 text-white text-sm font-medium px-5 py-2.5 rounded-full mt-6"
            >
              <MessageCircle size={15} />
              WhatsApp directo
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone text-xs">
            © {year} Obras y Reformas Aarón · Todos los derechos reservados
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-stone hover:text-gold transition-colors text-xs">Aviso Legal</a>
            <a href="#" className="text-stone hover:text-gold transition-colors text-xs">Privacidad</a>
            <a href="#" className="text-stone hover:text-gold transition-colors text-xs">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
