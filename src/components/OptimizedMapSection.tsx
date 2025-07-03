
import React, { useEffect, useState, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const OptimizedMapSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mapError, setMapError] = useState(false);
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

  const handleMapError = () => {
    setMapError(true);
    console.warn('Map failed to load, showing fallback');
  };

  const MapFallback = () => (
    <div className="bg-gray-100 rounded-lg p-8 text-center">
      <div className="mb-4">
        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <h4 className="text-lg font-semibold text-gray-700 mb-2">Interactive Map Unavailable</h4>
      <p className="text-gray-600 mb-4">Unable to load the interactive map. You can still find us at:</p>
      <div className="text-sm text-gray-700 space-y-1">
        <p><strong>Location:</strong> Left wing Arts Building</p>
        <p><strong>College:</strong> Humanities and Social Sciences</p>
        <p><strong>Address:</strong> University Road, Makerere University</p>
        <p><strong>Area:</strong> Wandegeya, Kampala</p>
      </div>
      <a 
        href="https://maps.google.com/maps?q=Makerere+University+Geography+Department"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-4 py-2 bg-geo-green text-white rounded-lg hover:bg-geo-green-dark transition-colors"
      >
        Open in Google Maps
      </a>
    </div>
  );

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
            mapError ? (
              <MapFallback />
            ) : (
              <iframe 
                width="100%" 
                height={isMobile ? "280" : "300"}
                src="//jsfiddle.net/makugs/tr4e6vyw/26/embedded/result/dark/" 
                frameBorder="0" 
                loading="lazy" 
                allowTransparency={true} 
                allowFullScreen={true}
                onError={handleMapError}
                style={{
                  maxWidth: "800px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                }}
                title="Interactive Map - Makerere University Geography Society"
              />
            )
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
