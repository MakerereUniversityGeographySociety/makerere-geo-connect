
import React, { useEffect, useState, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const OptimizedMapSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="map" className="py-10 md:py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8">Our Location</h2>
        <p className="text-center text-gray-600 mb-6 md:mb-10 text-sm md:text-base px-2 md:px-0">
          We are located at the Left wing Arts Building, College of Humanities and Social Sciences, 
          University Road, Makerere University, Wandegeya Kampala
        </p>
        <div className="flex justify-center">
          {isVisible ? (
            <iframe 
              width="100%" 
              height={isMobile ? "280" : "300"}
              src="//jsfiddle.net/makugs/tr4e6vyw/26/embedded/result/dark/" 
              frameBorder="0" 
              loading="lazy" 
              allowTransparency={true} 
              allowFullScreen={true}
              style={{
                maxWidth: "800px",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
              }}
              title="Interactive Map - Makerere University Geography Society"
            />
          ) : (
            <div 
              className="bg-gray-100 animate-pulse rounded-lg flex items-center justify-center"
              style={{
                height: isMobile ? "280px" : "300px", 
                width: "100%", 
                maxWidth: "800px"
              }}
            >
              <span className="text-gray-400">Loading map...</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OptimizedMapSection;
