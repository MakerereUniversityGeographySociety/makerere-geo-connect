
import { Button } from "@/components/ui/button";
import ImageSlideshow from "./ImageSlideshow";

const HeroSection = () => {
  // Replace uploaded images with stock photos that are nature/geography related
  const slideshowImages = [
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200",
    "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200",
    "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1200",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1200"
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
