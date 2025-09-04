export const ValueStack = () => {
  const audiobooks = [
    "AI for Pastors",
    "Unlock the AI Goldmine", 
    "AI Revolution",
    "AI Money Machines",
    "The AI Millionaire Blueprint"
  ];

  const videos = [
    "Build Your First AI‑Powered Business in 30 Days",
    "Top AI Tools for 2025 (and how to actually use them)",
    "Scaling with AI: Turn a side hustle into real revenue", 
    "AI Marketing Made Simple: Reduce costs, grow sales faster",
    "The Future of Work: Position yourself for high‑paying roles"
  ];

  const handleCTAClick = () => {
    window.open('https://pay.gtextglobal.com/the-ai-profit-book-upgrade/', '_blank');
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 px-4 sm:px-0">
              What You Get <span className="text-gold">(Instant Access)</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Audiobooks */}
            <div className="value-item">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">🎧</span>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">5 Bestselling Ebooks in Audio</h3>
                  <p className="text-gold font-semibold">Value: $97</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Turn spare moments into skills—listen in the car, at the gym, on your commute.
              </p>
              <ul className="space-y-3">
                {audiobooks.map((book, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-gold mr-3">✓</span>
                    <span className="font-medium">{book}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Videos */}
            <div className="value-item">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">🎥</span>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">5 Exclusive AI Deep‑Dive Videos</h3>
                  <p className="text-gold font-semibold">Value: $197 • 3+ hours</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Clear, step‑by‑step trainings with examples, templates, and workflows:
              </p>
              <ul className="space-y-3">
                {videos.map((video, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gold mr-3 mt-1">{index + 1}.</span>
                    <span className="font-medium">{video}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Value Summary */}
          <div className="text-center bg-gradient-to-r from-gold/10 to-cta/10 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12 mx-4 sm:mx-0">
            <div className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-2">
              <span className="line-through text-muted-foreground">$294</span>
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cta mb-4">
              Your Price Today: $10 (one‑time)
            </div>
            <p className="text-muted-foreground mb-6">Total Value: $294</p>
            
            <button 
              className="btn-cta-large"
              data-testid="cta_value_primary"
              onClick={handleCTAClick}
            >
              🔓 UNLOCK THE AI POWER PACK FOR $10 →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};