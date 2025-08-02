
import { useState, useEffect } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { useImagePreloader } from "@/hooks/useImagePreloader";

interface ImageSlideshowProps {
  images: string[];
  interval?: number;
  className?: string;
}

const ImageSlideshow = ({ images, interval = 5000, className }: ImageSlideshowProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Use optimized image preloader
  const { preloadNext, isImageLoaded } = useImagePreloader(images, {
    priority: true,
    preloadCount: 3,
    quality: 85
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => {
        const next = current === images.length - 1 ? 0 : current + 1;
        preloadNext(current);
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval, preloadNext]);

  return (
    <Carousel className={cn("w-full", className)}>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="relative">
            <div className="relative aspect-video overflow-hidden rounded-lg h-full">
              <OptimizedImage
                src={image}
                alt={`Slideshow image ${index + 1}`}
                className={cn(
                  "transition-all duration-1000",
                  index === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-105 absolute inset-0"
                )}
                priority={index === 0}
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                quality={85}
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
