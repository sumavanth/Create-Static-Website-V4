import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import clientLogos from 'figma:asset/cdbd5e7251a6c1965e2fe97402b19f82254691c4.png';

interface ClientLogoSectionProps {
  title?: string;
  description?: string;
}

export function ClientLogoSection({ 
  title = "Trusted by Leading Organizations",
  description = "We partner with industry-leading companies to deliver exceptional results"
}: ClientLogoSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Individual logo data extracted from the strip
  const logos = [
    { name: 'Aevitas', width: 'w-32 md:w-40 lg:w-48' },
    { name: 'Lorvin', width: 'w-32 md:w-40 lg:w-48' },
    { name: 'Srija', width: 'w-32 md:w-40 lg:w-48' },
    { name: 'Xnrel', width: 'w-32 md:w-40 lg:w-48' },
    { name: 'Fairstone', width: 'w-32 md:w-40 lg:w-48' },
    { name: 'OneStream', width: 'w-32 md:w-40 lg:w-48' },
  ];

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>

        {/* Desktop & Tablet: Grid Layout */}
        <div className="hidden md:block">
          <div className="bg-white rounded-lg p-8 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
            {/* Full logo strip for desktop - displays all logos in one row */}
            <div className="flex items-center justify-center">
              <img 
                src={clientLogos} 
                alt="Client Partner Logos" 
                className="h-20 lg:h-24 w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Mobile: Horizontal Scroll Carousel */}
        <div className="md:hidden relative">
          <div className="bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] overflow-hidden">
            {/* Left Arrow */}
            {canScrollLeft && (
              <button
                onClick={() => scroll('left')}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
            )}

            {/* Scrollable Container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-8 overflow-x-auto py-8 px-6 scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {logos.map((logo, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 snap-center"
                >
                  <div className="h-16 w-32 flex items-center justify-center">
                    {/* For mobile, we'll show the full strip but users can scroll */}
                    <img 
                      src={clientLogos} 
                      alt={`${logo.name} logo`}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            {canScrollRight && (
              <button
                onClick={() => scroll('right')}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            )}
          </div>

          {/* Scroll Indicator Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {logos.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300"
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
