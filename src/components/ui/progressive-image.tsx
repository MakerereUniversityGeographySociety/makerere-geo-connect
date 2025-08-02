import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ProgressiveImageProps {
  src: string;
  placeholderSrc?: string;
  alt: string;
  className?: string;
  aspectRatio?: "square" | "video" | "auto";
  sizes?: string;
  priority?: boolean;
}

const ProgressiveImage = ({
  src,
  placeholderSrc,
  alt,
  className,
  aspectRatio = "auto",
  sizes = "100vw",
  priority = false,
}: ProgressiveImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [currentSrc, setCurrentSrc] = useState(placeholderSrc || "");
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "100px", // Start loading 100px before image enters viewport
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  // Load high-quality image when in view
  useEffect(() => {
    if (!isInView) return;

    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoaded(true);
    };

    // Preload for better performance
    img.fetchPriority = priority ? "high" : "low";
  }, [isInView, src, priority]);

  const aspectRatioClass = {
    square: "aspect-square",
    video: "aspect-video",
    auto: "",
  }[aspectRatio];

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden bg-gray-100",
        aspectRatioClass,
        className
      )}
    >
      {/* Blur placeholder effect */}
      {placeholderSrc && !isLoaded && (
        <img
          src={placeholderSrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-lg opacity-60"
          aria-hidden="true"
        />
      )}

      {/* Loading shimmer effect */}
      {!placeholderSrc && !isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-200 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer"></div>
        </div>
      )}

      {/* Main image */}
      {currentSrc && (
        <img
          src={currentSrc}
          alt={alt}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out",
            isLoaded 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-105"
          )}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "low"}
          decoding="async"
          sizes={sizes}
        />
      )}

      {/* Loading indicator */}
      {!isLoaded && isInView && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-geo-green rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export { ProgressiveImage };