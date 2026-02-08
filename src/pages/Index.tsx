import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import MaterialPreview from "@/components/MaterialPreview";
import SalarySection from "@/components/SalarySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import PurchaseNotifications from "@/components/PurchaseNotifications";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <PurchaseNotifications />
      <HeroSection />
      <FeaturesSection />
      <MaterialPreview />
      <SalarySection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
    </main>
  );
};

export default Index;
