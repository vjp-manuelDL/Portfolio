import type { Metadata } from "next";
import { Fustat, Inter } from "next/font/google";
import "./globals.css";

const fustat = Fustat({
  variable: "--font-fustat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Inocisa | Infraestructuras e Ingeniería",
  description: "Gestionamos tus proyectos de infraestructura e ingeniería con eficiencia, calidad y compromiso total.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${fustat.variable} ${inter.variable} antialiased selection:bg-brand selection:text-white relative`}
      >
        {children}
      </body>
    </html>
  );
}
