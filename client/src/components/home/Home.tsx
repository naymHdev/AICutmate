import PricingPlans from "@/pages/pricing/PricingPlans";
import DemoSection from "./DemoSection";
import FeaturesSection from "./FeaturesAndBenefits";
import HeroSection from "./HeroSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import UseCasesSection from "../sections/UseCasesSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <PricingPlans />
      <TestimonialsSection />
      <UseCasesSection />
    </>
  );
};

export default HomePage;
