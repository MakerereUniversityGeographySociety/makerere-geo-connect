
import { useState, useEffect } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface ImageSlideshowProps {
  images: string[];
  interval?: number;
  className?: string;
}

const ImageSlideshow = ({ images, interval = 5000, className }: ImageSlideshowProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <Carousel className={cn("w-full", className)}>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="relative">
            <div className="relative aspect-video overflow-hidden rounded-lg h-full">
              <img
                src={image}
                alt={`Slideshow image ${index + 1}`}
                className={cn(
                  "object-cover w-full h-full transition-opacity duration-1000",
                  index === activeIndex ? "opacity-100" : "opacity-0 absolute inset-0"
                )}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-4 gap-2 absolute bottom-4 left-0 right-0 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index === activeIndex ? "bg-geo-green w-4" : "bg-white"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
};

export default ImageSlideshow;
