import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nuevo Neptuno | Cáceres",
  description:
    "Si lo puedes soñar, lo puedes desayunar. Restaurante Neptuno en el corazón de Cáceres.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#edf5fa] text-[#0a1f35] antialiased">{children}</body>
    </html>
  );
}
