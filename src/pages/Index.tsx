import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { AboutSection } from "@/components/AboutSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <IndustriesSection />
        <AboutSection />
        <SolutionsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
