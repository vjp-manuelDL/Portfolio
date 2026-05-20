import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inclima Plasencia | Climatizacion, instalacion y mantenimiento",
  description:
    "Especialistas en instalacion, reparacion y mantenimiento de aire acondicionado y climatizacion en Plasencia.",
  openGraph: {
    title: "Inclima Plasencia",
    description:
      "Soluciones de climatizacion para hogares, comercios y empresas en Plasencia.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
