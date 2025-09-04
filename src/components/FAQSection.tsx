import { useState } from "react";

const faqs = [
  {
    question: "Is $10 a subscription?",
    answer: "No. It's a one‑time payment for lifetime access."
  },
  {
    question: "How do I access everything?",
    answer: "You'll get an instant link on the next page + an access email. Stream videos and download audiobooks to any device."
  },
  {
    question: "Do I need prior AI experience?",
    answer: "No. The trainings start simple and move into practical, real‑world workflows."
  },
  {
    question: "Can I listen offline?",
    answer: "Yes—download the audio files to your phone or laptop."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleCTAClick = () => {
    window.open('https://checkout.stripe.com', '_blank');
  };

  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Everything you need to know about your AI Power Pack
            </p>
          </div>

          <div className="space-y-4 mb-12 sm:mb-16 px-4 sm:px-0">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl border border-border shadow-[var(--shadow-card)] overflow-hidden"
              >
                <button
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-accent/50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <span className={`text-2xl text-muted-foreground transition-transform ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}>
                    +
                  </span>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 animate-fade-in-up">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center bg-card rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-card)] mx-4 sm:mx-0">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
              Ready to Transform Your AI Skills?
            </h3>
            <button 
              className="btn-cta-large mb-4"
              onClick={handleCTAClick}
            >
              🔓 GET INSTANT ACCESS FOR $10 →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};