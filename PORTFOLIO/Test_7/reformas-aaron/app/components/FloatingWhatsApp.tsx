"use client";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/34685145536?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20un%20presupuesto"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 whatsapp-btn w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
      style={{ boxShadow: "0 4px 20px rgba(37,211,102,0.4), 0 0 0 0 rgba(37,211,102,0.4)" }}
    >
      <MessageCircle size={26} className="text-white" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold rounded-full animate-pulse-gold" />
    </a>
  );
}
