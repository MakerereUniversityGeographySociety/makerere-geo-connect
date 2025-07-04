
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect } from "react";

const HeroSection = () => {
  // Use the uploaded image instead of the stock photo
  const heroImage = "/lovable-uploads/ab88620e-3c2f-4622-8a52-e4d1eb42af3f.png";
  const isMobile = useIsMobile();

  // Preload the hero image for better LCP
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = heroImage;
    document.head.appendChild(link);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, [heroImage]);

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center pt-16">
      {/* Full-screen background image with optimized loading */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Geography Society field trip" 
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center py-10 md:py-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg">
          Explore. Connect. Discover Geography.
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#events">
            <Button className="bg-geo-green hover:bg-geo-green-dark text-white font-semibold px-6 py-2 md:px-8 md:py-6 text-sm md:text-base">
              View Events
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
