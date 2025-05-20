
import React, { useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

// Declare the ArcGIS custom element
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

const MapSection = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Ensure the ArcGIS script is loaded
    const script = document.createElement('script');
    script.src = "https://js.arcgis.com/embeddable-components/4.32/arcgis-embeddable-components.esm.js";
    script.type = "module";
    document.head.appendChild(script);

    return () => {
      // Cleanup if component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="map" className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8">Our Location</h2>
        <p className="text-center text-gray-600 mb-6 md:mb-10 text-sm md:text-base px-2 md:px-0">
          We are located at the Left wing Arts Building, College of Humanities and Social Sciences, 
          University Road, Makerere University, Wandegeya Kampala
        </p>
        <div className="flex justify-center">
          <arcgis-embedded-map 
            style={{
              height: isMobile ? "350px" : "500px", 
              width: "100%", 
              maxWidth: "1000px",
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
        </div>
      </div>
    </section>
  );
};

export default MapSection;
