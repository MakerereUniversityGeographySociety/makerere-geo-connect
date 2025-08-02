
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  // Use the uploaded image instead of the stock photo
  const heroImage = "/lovable-uploads/ab88620e-3c2f-4622-8a52-e4d1eb42af3f.png";
  const isMobile = useIsMobile();

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center pt-16">
      {/* Full-screen background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Geography Society field trip" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center py-10 md:py-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Explore. Connect. Discover Geography.
        </h1>
        <p className="text-lg md:text-xl text-white mb-6 md:mb-8 max-w-2xl mx-auto drop-shadow-md">
          United to Conserve Nature
        </p>
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
