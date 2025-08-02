import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "./skeleton";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: "blur" | "skeleton" | "none";
  sizes?: string;
  quality?: number;
}

const OptimizedImage = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  placeholder = "skeleton",
  sizes,
  quality = 75,
  ...props
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

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
        rootMargin: "50px",
        threshold: 0.1,
      }
    );

    if (placeholderRef.current) {
      observer.observe(placeholderRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  // Generate WebP and fallback URLs
  const getOptimizedSrc = (originalSrc: string) => {
    // For external URLs, return as-is
    if (originalSrc.startsWith('http')) return originalSrc;
    
    // For local images, try to generate WebP version
    const extension = originalSrc.split('.').pop()?.toLowerCase();
    if (['jpg', 'jpeg', 'png'].includes(extension || '')) {
      const webpSrc = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      return webpSrc;
    }
    
    return originalSrc;
  };

  // Generate responsive image sizes
  const generateSrcSet = (baseSrc: string) => {
    if (baseSrc.startsWith('http')) return undefined;
    
    const widths = [320, 640, 768, 1024, 1280, 1536];
    return widths
      .map(w => `${baseSrc}?w=${w}&q=${quality} ${w}w`)
      .join(', ');
  };

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(false);
  };

  const optimizedSrc = getOptimizedSrc(src);
  const srcSet = generateSrcSet(src);

  return (
    <div className={cn("relative overflow-hidden", className)} ref={placeholderRef}>
      {/* Placeholder */}
      {(!isLoaded && !hasError && placeholder !== "none") && (
        <div className="absolute inset-0 z-10">
          {placeholder === "skeleton" ? (
            <Skeleton className="w-full h-full" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />
          )}
        </div>
      )}

      {/* Actual Image */}
      {(isInView || priority) && (
        <picture>
          {/* WebP source for modern browsers */}
          <source
            type="image/webp"
            srcSet={srcSet}
            sizes={sizes}
          />
          
          <img
            ref={imgRef}
            src={hasError ? "/placeholder.svg" : optimizedSrc}
            alt={alt}
            className={cn(
              "transition-all duration-700 ease-out",
              isLoaded 
                ? "opacity-100 scale-100 blur-0" 
                : "opacity-0 scale-105 blur-sm",
              "w-full h-full object-cover"
            )}
            width={width}
            height={height}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "low"}
            decoding={priority ? "sync" : "async"}
            srcSet={srcSet}
            sizes={sizes}
            onLoad={handleLoad}
            onError={handleError}
            {...props}
          />
        </picture>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-gray-400 text-sm text-center p-4">
            <svg
              className="mx-auto h-8 w-8 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Image failed to load
          </div>
        </div>
      )}
    </div>
  );
};

export { OptimizedImage };