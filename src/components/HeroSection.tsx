
import { Button } from "@/components/ui/button";
import ImageSlideshow from "./ImageSlideshow";

const HeroSection = () => {
  // Define the slideshow images
  const slideshowImages = [
    "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "/lovable-uploads/48fc8f02-e47f-4fb1-8ffd-fd8774d44a7b.png",
    "/lovable-uploads/3f0a9420-6fe2-46c1-a17d-db3916896c70.png",
    "/lovable-uploads/4261bc4e-5c81-40b6-977a-93341c1782ca.png",
    "/lovable-uploads/66b5082b-1f74-42cf-a7f7-010e80c6ad97.png"
  ];

  return (
    <section id="home" className="relative h-screen flex items-center justify-center pt-16">
      {/* Full-screen slideshow in the background */}
      <div className="absolute inset-0 z-0">
        <ImageSlideshow 
          images={slideshowImages} 
          className="h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
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
