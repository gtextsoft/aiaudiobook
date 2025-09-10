import { useState } from "react";

const headlines = [
  "Go From \"I Get It\" to **I've Got This**—for Less Than the Cost of Lunch.",
  "Turn Understanding into **MASTERY**: 5 Audiobooks + 5 Deep‑Dive Videos for **$10**.",
  "Your Fast‑Track to AI Skills—**$294 of Training** for **$10** (page‑only offer)."
];

export const HeroSection = () => {
  const [currentHeadline] = useState(0);

  const handleCTAClick = () => {
    window.open('https://pay.gtextglobal.com/the-ai-profit-book-upgrade/', '_blank');
  };

  const handleSecondaryClick = () => {
    window.open('https://www.businesswithaiconsultant.com/', '_blank');
  };

  return (
    <section className="relative min-h-screen bg-hero-gradient flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block bg-gold-gradient text-gold-foreground px-6 py-2 rounded-full font-semibold mb-8 animate-bounce-in">
            🔥 LIMITED TIME: Page-Only Offer
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            {headlines[currentHeadline].split('**').map((part, index) => 
              index % 2 === 1 ? (
                <span key={index} className="text-gold">{part}</span>
              ) : (
                part
              )
            )}
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Upgrade your learning in one click: get <strong>all 5 ebooks in professionally narrated audio</strong> <strong>plus</strong> <strong>5 exclusive video deep‑dives</strong>. Learn faster, apply sooner, and hit your next milestone—<strong>today</strong>.
          </p>

          {/* CTAs */}
          <div className="space-y-4 animate-fade-in-up px-4 sm:px-0" style={{animationDelay: '0.4s'}}>
            <button 
              className="btn-cta-large w-full max-w-md mx-auto block text-sm sm:text-base"
              data-testid="cta_hero_primary"
              onClick={handleCTAClick}
            >
              🔓 UNLOCK THE AI POWER PACK FOR $10 →
            </button>
            
            <button 
              className="text-white/70 hover:text-white underline text-sm transition-colors"
              onClick={handleSecondaryClick}
            >
              No thanks — I&apos;ll stick with free content and learn slower.
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mt-12 sm:mt-16 text-white/60 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center space-x-2">
              <span className="text-xl sm:text-2xl">🔒</span>
              <span className="text-sm">Secure Payment</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl sm:text-2xl">⚡</span>
              <span className="text-sm">Instant Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};