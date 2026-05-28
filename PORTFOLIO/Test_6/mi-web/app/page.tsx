import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import GallerySection from "@/components/GallerySection";
import MenuDelDiaSection from "@/components/MenuDelDiaSection";
import HorariosSection from "@/components/HorariosSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Cafetería Nuevo Neptuno · Cáceres",
  description:
    "Desayunos y almuerzos tradicionales extremeños en el corazón de Cáceres. Tostadas, camperos, montaditos y menú del día. Desde 2010.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <GallerySection />
      <MenuDelDiaSection />
      <HorariosSection />
      <ContactSection />
      <Footer />
    </>
  );
}
