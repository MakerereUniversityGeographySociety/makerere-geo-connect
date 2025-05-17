
import { Button } from "@/components/ui/button";
import ImageSlideshow from "./ImageSlideshow";

const HeroSection = () => {
  // Define the slideshow images including the newly uploaded ones
  const slideshowImages = [
    "/lovable-uploads/32ac5f85-752a-48cb-8425-bf0d71b13ac9.png",
    "/lovable-uploads/24a3cb19-354a-4a4e-b006-8eab0f44005c.png",
    "/lovable-uploads/38da9cc4-af2c-4c6f-aa7a-f5c9bb8bcb06.png", 
    "/lovable-uploads/80218929-ef67-4ec9-b3d0-a45f9964b228.png",
    "/lovable-uploads/fe6c223f-ce74-4b8d-90ac-a3bb2240bd31.png",
    "/lovable-uploads/88f4ec04-a957-4e1f-9062-43303cf2b056.png",
    "/lovable-uploads/e377cce7-1c71-416e-b05d-607044750d12.png", 
    "/lovable-uploads/663d5801-4744-4e17-9daa-07bf698530e8.png",
    "/lovable-uploads/61d6f4ed-1dda-47dd-84be-c0c819de4fe2.png",
    "/lovable-uploads/d8f66fcf-3214-44bb-aac6-909c6b46f2ce.png"
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
