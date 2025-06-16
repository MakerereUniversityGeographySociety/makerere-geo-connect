
import { useState, useEffect, useCallback } from "react";
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
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0])); // Preload first image

  const preloadNextImage = useCallback((index: number) => {
    const nextIndex = (index + 1) % images.length;
    if (!loadedImages.has(nextIndex)) {
      const img = new Image();
      img.src = images[nextIndex];
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, nextIndex]));
      };
    }
  }, [images, loadedImages]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => {
        const next = current === images.length - 1 ? 0 : current + 1;
        preloadNextImage(next);
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval, preloadNextImage]);

  // Preload first few images on mount
  useEffect(() => {
    const preloadCount = Math.min(3, images.length);
    for (let i = 1; i < preloadCount; i++) {
      const img = new Image();
      img.src = images[i];
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, i]));
      };
    }
  }, [images]);

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
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "low"}
                decoding={index === 0 ? "sync" : "async"}
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
