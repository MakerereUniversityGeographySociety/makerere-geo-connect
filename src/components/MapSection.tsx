
import React, { useEffect } from 'react';

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
    <section id="map" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Location</h2>
        <p className="text-center text-gray-600 mb-10">
          We are located at the Left wing Arts Building, College of Humanities and Social Sciences, 
          University Road, Makerere University, Wandegeya Kampala
        </p>
        <div className="flex justify-center">
          <arcgis-embedded-map 
            style={{height: "500px", width: "100%", maxWidth: "1000px"}} 
            item-id="b419e8b3d5264d49a95aac442e476c9c" 
            theme="dark" 
            bookmarks-enabled 
            heading-enabled 
            legend-enabled 
            information-enabled 
            share-enabled 
            portal-url="https://africageoportal.maps.arcgis.com"
          ></arcgis-embedded-map>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
