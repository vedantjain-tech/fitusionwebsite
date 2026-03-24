import Hero from "../components/Hero";
import BrandStrip from "../components/BrandStrip";
import FeaturesIntro from "../components/FeaturesIntro";
import FeaturesGrid from "../components/FeaturesGrid";
import TestimonialsGrid from "../components/TestimonialsGrid";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import FeaturesSection from "../components/FeaturesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection/>
      <BrandStrip />
      <FeaturesIntro />
      <FeaturesGrid />
      <TestimonialsGrid />
      <CTASection />
      <Footer />
    </>
  );
}
