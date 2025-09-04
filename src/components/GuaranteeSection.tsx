export const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold mb-8">
            <span className="text-2xl mr-2">💯</span>
            RISK-FREE GUARANTEE
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8 px-4 sm:px-0">
            7‑Day <span className="text-green-600">&quot;Love It or Leave It&quot;</span> Guarantee
          </h2>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-card)] border border-green-200 mx-4 sm:mx-0">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-green-500 text-white p-4 rounded-full">
                <span className="text-3xl">🛡️</span>
              </div>
            </div>

            <div className="max-w-2xl mx-auto">
              <p className="text-lg sm:text-xl text-foreground mb-6 leading-relaxed">
                If you don&apos;t see <strong>immediate value</strong>, email us within <strong className="text-green-600">7 days</strong> and we&apos;ll refund your $10.
              </p>
              
              <div className="text-2xl font-bold text-green-600 mb-8">
                Zero Risk.
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-sm">
                <div className="text-center">
                  <div className="text-3xl mb-3">📧</div>
                  <div className="font-semibold text-foreground">Simple Process</div>
                  <div className="text-muted-foreground">Just send us an email</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">⚡</div>
                  <div className="font-semibold text-foreground">Fast Refund</div>
                  <div className="text-muted-foreground">Within 24 hours</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">❓</div>
                  <div className="font-semibold text-foreground">No Questions</div>
                  <div className="text-muted-foreground">We trust your judgment</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-lg">
              We&apos;re confident you&apos;ll love the training. But if not, we&apos;ve got you covered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};