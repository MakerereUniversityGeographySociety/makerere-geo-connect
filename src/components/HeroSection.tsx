
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  // Use the uploaded image instead of the stock photo
  const heroImage = "/lovable-uploads/ab88620e-3c2f-4622-8a52-e4d1eb42af3f.png";

  return (
    <section id="home" className="relative h-screen flex items-center justify-center pt-16">
      {/* Full-screen background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Geography Society field trip" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Explore. Connect. Discover Geography.
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          United to Conserve Nature
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#events">
            <Button className="bg-geo-green hover:bg-geo-green-dark text-white font-semibold px-8 py-6">
              View Events
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
