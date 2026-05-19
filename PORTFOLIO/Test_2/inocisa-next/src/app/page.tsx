import SplashLoader from "@/components/SplashLoader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedLogos from "@/components/TrustedLogos";
import ProjectsGallery from "@/components/ProjectsGallery";
import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SplashLoader />
      <div className="bg-glow">
        <div className="glow-1"></div>
        <div className="glow-2"></div>
      </div>
      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8">
        <Navbar />
        <main>
          <Hero />
          <TrustedLogos />
          <ProjectsGallery />
          <AboutSection />
          <ContactForm />
        </main>
      </div>
      <Footer />
    </>
  );
}
