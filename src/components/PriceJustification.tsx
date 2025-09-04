export const PriceJustification = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 sm:mb-12 px-4 sm:px-0">
            Why This Is Just <span className="text-cta">$10</span> 
            <span className="block text-lg sm:text-xl md:text-2xl text-muted-foreground font-normal mt-2">
              (Price Justification)
            </span>
          </h2>

          <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-card)] mb-8 mx-4 sm:mx-0">
            <p className="text-lg sm:text-xl text-foreground mb-6 sm:mb-8 leading-relaxed">
              We price this as a <strong className="text-cta">page‑only upgrade</strong> so you get quick wins <strong>before</strong> the advanced consultant training.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="font-bold text-foreground mb-2">Lower delivery costs → lower price</h3>
                <p className="text-muted-foreground text-sm">Audiobooks + streaming keep this lean</p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-bold text-foreground mb-2">We want results, not excuses</h3>
                <p className="text-muted-foreground text-sm">Rapid wins now → better outcomes later</p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="font-bold text-foreground mb-2">Skin in the game</h3>
                <p className="text-muted-foreground text-sm">A tiny investment that makes you actually press play</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};