interface StickyCTAProps {
  show: boolean;
}

export const StickyCTA = ({ show }: StickyCTAProps) => {
  const handleClick = () => {
    window.open('https://pay.gtextglobal.com/the-ai-profit-book-upgrade/', '_blank');
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-hero-gradient p-3 sm:p-4 shadow-lg z-50 animate-fade-in-up">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
        <div className="text-white text-center sm:text-left">
          <div className="font-bold text-sm sm:text-lg">$294 of training for just $10</div>
          <div className="text-xs sm:text-sm text-white/80">5 Audiobooks + 5 Videos • Instant Access</div>
        </div>
        <button 
          className="btn-cta text-sm sm:text-base px-4 py-2 sm:ml-4 whitespace-nowrap w-full sm:w-auto max-w-xs"
          onClick={handleClick}
        >
          Get Access Now →
        </button>
      </div>
    </div>
  );
};