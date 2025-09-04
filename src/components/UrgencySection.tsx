export const UrgencySection = () => {
  const handleCTAClick = () => {
    window.open('https://pay.gtextglobal.com/the-ai-profit-book-upgrade/', '_blank');
  };

  const handleSecondaryClick = () => {
    window.location.href = '#faq';
  };

  return (
    <section className="py-20 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-cta">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-cta/10 text-cta px-6 py-3 rounded-full font-semibold mb-8">
            <span className="text-2xl mr-2">⚠️</span>
            SCARCITY & URGENCY
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8 px-4 sm:px-0">
            This <span className="text-cta">$10 price</span> is available on this page only, during this session.
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4 sm:px-0">
            If you leave, the offer closes and returns to the regular bundle price of <strong className="text-foreground">$97</strong>.
          </p>

          <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-card)] mb-8 mx-4 sm:mx-0">
            <div className="space-y-6">
              <button 
                className="btn-cta-large w-full max-w-lg mx-auto block"
                onClick={handleCTAClick}
              >
                YES — UPGRADE ME FOR $10
              </button>
              
              <div className="text-sm text-muted-foreground">
                <div className="font-semibold text-foreground mb-2">Instant access. One‑time payment. Start listening in 60 seconds.</div>
              </div>

              <div className="text-center">
                <span className="text-muted-foreground text-sm">or</span>
              </div>

              <button 
                className="text-muted-foreground hover:text-foreground underline text-sm transition-colors"
                onClick={handleSecondaryClick}
              >
                No thanks — I&apos;ll stick with free content and learn slower.
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};