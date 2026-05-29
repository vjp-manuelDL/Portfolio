import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Obras y Reformas Aarón | Plasencia, Cáceres",
  description:
    "Más de 15 años transformando hogares y espacios en Plasencia y Extremadura. Reformas integrales, baños, cocinas, albañilería y mucho más. Más de 500 clientes satisfechos.",
  keywords:
    "reformas plasencia, obras plasencia, reformas caceres, reformas extremadura, reformas integrales, baños, cocinas, albañilería",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
