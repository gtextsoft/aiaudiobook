import { useState, useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ValueStack } from "@/components/ValueStack";
import { PriceJustification } from "@/components/PriceJustification";
import { TransformationSection } from "@/components/TransformationSection";
import { UrgencySection } from "@/components/UrgencySection";
import { BonusSection } from "@/components/BonusSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { FAQSection } from "@/components/FAQSection";
import { StickyCTA } from "@/components/StickyCTA";

const Index = () => {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowStickyCTA(scrollPosition > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ValueStack />
      <PriceJustification />
      <TransformationSection />
      <UrgencySection />
      <BonusSection />
      <GuaranteeSection />
      <FAQSection />
      
      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 animate-fade-in-up">
            Get 5 Audiobooks + 5 Deep-Dive Videos — $294 of training — today for $10.
          </h2>
          <button 
            className="btn-cta-large animate-bounce-in"
            data-testid="cta_footer_primary"
            onClick={() => window.open('https://pay.gtextglobal.com/the-ai-profit-book-upgrade/', '_blank')}
          >
            🔓 UNLOCK MY ACCESS NOW →
          </button>
        </div>
      </section>

      <StickyCTA show={showStickyCTA} />
    </div>
  );
};

export default Index;