
import React, { useEffect, useState, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'arcgis-embedded-map': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'item-id'?: string;
        'theme'?: string;
        'bookmarks-enabled'?: boolean;
        'heading-enabled'?: boolean;
        'legend-enabled'?: boolean;
        'information-enabled'?: boolean;
        'share-enabled'?: boolean;
        'portal-url'?: string;
      };
    }
  }
}

const OptimizedMapSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
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

  // Load ArcGIS script only when visible
  useEffect(() => {
    if (isVisible && !scriptLoaded) {
      const script = document.createElement('script');
      script.src = "https://js.arcgis.com/embeddable-components/4.32/arcgis-embeddable-components.esm.js";
      script.type = "module";
      script.onload = () => setScriptLoaded(true);
      document.head.appendChild(script);
    }
  }, [isVisible, scriptLoaded]);

  return (
    <section id="map" className="py-10 md:py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8">Our Location</h2>
        <p className="text-center text-gray-600 mb-6 md:mb-10 text-sm md:text-base px-2 md:px-0">
          We are located at the Left wing Arts Building, College of Humanities and Social Sciences, 
          University Road, Makerere University, Wandegeya Kampala
        </p>
        <div className="flex justify-center">
          {isVisible && scriptLoaded ? (
            <arcgis-embedded-map 
              style={{
                height: isMobile ? "280px" : "400px", 
                width: "100%", 
                maxWidth: "800px",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
              }} 
              item-id="b419e8b3d5264d49a95aac442e476c9c" 
              theme="dark" 
              bookmarks-enabled 
              heading-enabled 
              legend-enabled={!isMobile} 
              information-enabled 
              share-enabled={!isMobile}
              portal-url="https://africageoportal.maps.arcgis.com"
            ></arcgis-embedded-map>
          ) : (
            <div 
              className="bg-gray-100 animate-pulse rounded-lg flex items-center justify-center"
              style={{
                height: isMobile ? "280px" : "400px", 
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
