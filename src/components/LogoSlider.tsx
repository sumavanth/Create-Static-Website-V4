import { useEffect, useRef } from 'react';

interface LogoSliderProps {
  logoImage: string;
  alt?: string;
  speed?: number;
  height?: string;
}

export function LogoSlider({ logoImage, alt = "Partner Logos", speed = 50, height = "h-20" }: LogoSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollPosition = 0;
    const scrollWidth = slider.scrollWidth / 2;

    const animate = () => {
      scrollPosition += 1;
      if (scrollPosition >= scrollWidth) {
        scrollPosition = 0;
      }
      if (slider) {
        slider.scrollLeft = scrollPosition;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-white rounded-lg shadow-sm py-8">
      <div 
        ref={sliderRef}
        className="flex overflow-x-hidden"
        style={{ scrollBehavior: 'auto' }}
      >
        {/* First set of logos */}
        <div className="flex-shrink-0">
          <img src={logoImage} alt={alt} className={`${height} w-auto`} />
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex-shrink-0 ml-8">
          <img src={logoImage} alt={alt} className={`${height} w-auto`} />
        </div>
      </div>
    </div>
  );
}