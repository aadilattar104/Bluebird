import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { PricingSection } from "@/components/pricing-section"
import { AboutSection } from "@/components/about-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { BackgroundGradient } from "@/components/background-gradient"


export default function Home() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      
      <BackgroundGradient />
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
