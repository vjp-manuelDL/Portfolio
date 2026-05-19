import { CinematicHero } from "@/components/home/CinematicHero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { ContactSection } from "@/components/contact/ContactSection";

export default function HomePage() {
  return (
    <>
      <CinematicHero />
      <ServicesGrid />
      <PortfolioSection />
      <ReviewsSection />
      <ContactSection />
    </>
  );
}
