import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { HowItWorks } from "@/components/how-it-works";
import { MissionSection } from "@/components/mission-section";
import { Testimonials } from "@/components/testimonials";
import { PricingSection } from "@/components/pricing-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow pt-16 md:pt-20">
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <MissionSection />
        <Testimonials />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
