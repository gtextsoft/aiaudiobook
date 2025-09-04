export const TransformationSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 sm:mb-12 px-4 sm:px-0">
            What Changes for You <span className="text-gold">(This Week)</span>
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
            <div className="value-item text-center">
              <div className="text-5xl mb-6">🧠</div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                From Knowing to Using
              </h3>
              <p className="text-muted-foreground">
                Go from <em>knowing</em> AI to <strong>using</strong> it in your day‑to‑day.
              </p>
            </div>

            <div className="value-item text-center">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Save Hours Daily
              </h3>
              <p className="text-muted-foreground">
                Save hours with ready‑to‑use prompts, workflows, and tools.
              </p>
            </div>

            <div className="value-item text-center">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Build Confidence
              </h3>
              <p className="text-muted-foreground">
                Build confidence to launch, sell, and scale with AI.
              </p>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 bg-gradient-to-r from-primary/5 to-cta/5 rounded-2xl p-6 sm:p-8 mx-4 sm:mx-0">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 text-center sm:text-left">
              Designed for Busy People
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-left">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">⏱️</span>
                <div>
                  <h4 className="font-semibold text-foreground">Bite‑size lessons</h4>
                  <p className="text-sm text-muted-foreground">You can finish on a lunch break</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">📱</span>
                <div>
                  <h4 className="font-semibold text-foreground">Audiobook + video formats</h4>
                  <p className="text-sm text-muted-foreground">So you never &quot;fall behind&quot;</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">♾️</span>
                <div>
                  <h4 className="font-semibold text-foreground">Lifetime access</h4>
                  <p className="text-sm text-muted-foreground">Revisit any time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};