import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProjectsSection from "../components/ui/ProjectsSection/ProjectsSection";
import HeroSection from "../components/ui/HeroSection/HeroSection";
import TestimonialsSection from "../components/ui/TestimonialsSection/TestimonialsSection";
import PricingSection from "../components/ui/PricingSection/PricingSection";
import ContactSection from "../components/ui/ContactSection/ContactSection";
import Footer from "../components/ui/Footer/Footer";

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  return (
    <>
      <HeroSection />

      <ProjectsSection />

      <TestimonialsSection />

      <PricingSection />

      <ContactSection />

      <Footer />
    </>
  );
};
