import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Services />
        <Portfolio />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
