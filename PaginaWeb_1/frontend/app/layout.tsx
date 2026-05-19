import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Providers } from "@/components/shared/Providers";
import { BlueprintScrollGrid } from "@/components/shared/BlueprintScrollGrid";
import { LogoLoader } from "@/components/shared/LogoLoader";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { CookieBanner } from "@/components/shared/CookieBanner";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Obras y Reformas Aarón | Plasencia",
  description:
    "Reformas integrales y obras de alta gama en Plasencia. Diseño, precisión y acabados premium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          <LogoLoader />
          <BlueprintScrollGrid />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CookieBanner />
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "#ffffff",
                color: "#1A1A2E",
                border: "1px solid #E8E4DC",
                boxShadow: "0 4px 24px rgba(27,79,140,0.12)",
                borderRadius: "12px",
                fontSize: "14px",
              },
              success: {
                style: { borderColor: "rgba(27,79,140,0.4)" },
                iconTheme: { primary: "#1B4F8C", secondary: "#fff" },
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
