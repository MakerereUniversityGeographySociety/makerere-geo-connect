
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-cover bg-center pt-16" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Explore. Connect. Discover Geography.
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Join the community shaping our world.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-geo-green hover:bg-geo-green-dark text-white font-semibold px-8 py-6">
            View Events
          </Button>
          <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-geo-green-dark font-semibold px-8 py-6">
            Join WhatsApp Group
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
