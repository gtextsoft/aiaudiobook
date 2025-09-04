export const BonusSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gold/5 to-cta/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-gold/20 text-gold-foreground px-6 py-3 rounded-full font-semibold mb-8">
            <span className="text-2xl mr-2">🎁</span>
            BONUS INCLUDED
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8 px-4 sm:px-0">
            Plus You Get This <span className="text-gold">Free</span>
          </h2>

          <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-card)] border-2 border-gold/20 mx-4 sm:mx-0">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gold-gradient text-white px-4 py-2 rounded-lg font-bold text-sm sm:text-base">
                FREE BONUS
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="text-4xl sm:text-6xl mx-auto sm:mx-0">📄</div>
              <div className="text-center sm:text-left flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                  Quick‑Start AI Prompt Pack (PDF)
                </h3>
                <div className="text-gold font-semibold mb-4">Value: $27</div>
                <p className="text-muted-foreground mb-6">
                  Copy‑and‑paste prompts for marketing, content, research, and ops. 
                  Included <strong>free</strong> with today&apos;s upgrade.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-gold">✓</span>
                    <span>50+ Marketing Prompts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gold">✓</span>
                    <span>Content Creation Templates</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gold">✓</span>
                    <span>Research & Analysis Tools</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gold">✓</span>
                    <span>Operations Workflows</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground mb-2">
                  Total Package Value: <span className="text-gold">$321</span>
                </div>
                <div className="text-cta text-xl font-semibold">
                  Your Price Today: $10
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};