import { useState, useEffect, useCallback } from 'react';

interface UseImagePreloaderOptions {
  priority?: boolean;
  preloadCount?: number;
  quality?: number;
}

export const useImagePreloader = (
  images: string[],
  options: UseImagePreloaderOptions = {}
) => {
  const {
    priority = false,
    preloadCount = 3,
    quality = 75
  } = options;

  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [loadingImages, setLoadingImages] = useState<Set<number>>(new Set());
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  // Preload image with quality optimization
  const preloadImage = useCallback((index: number): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (index >= images.length || loadedImages.has(index) || failedImages.has(index)) {
        resolve();
        return;
      }

      setLoadingImages(prev => new Set([...prev, index]));

      const img = new Image();
      
      // Set image attributes for optimization
      img.fetchPriority = priority && index === 0 ? "high" : "low";
      img.decoding = priority && index === 0 ? "sync" : "async";
      
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, index]));
        setLoadingImages(prev => {
          const newSet = new Set(prev);
          newSet.delete(index);
          return newSet;
        });
        resolve();
      };

      img.onerror = () => {
        setFailedImages(prev => new Set([...prev, index]));
        setLoadingImages(prev => {
          const newSet = new Set(prev);
          newSet.delete(index);
          return newSet;
        });
        reject(new Error(`Failed to load image at index ${index}`));
      };

      // Apply quality optimization for local images
      let optimizedSrc = images[index];
      if (!optimizedSrc.startsWith('http') && quality < 100) {
        optimizedSrc = `${optimizedSrc}?q=${quality}`;
      }

      img.src = optimizedSrc;
    });
  }, [images, loadedImages, failedImages, priority, quality]);

  // Preload next image in sequence
  const preloadNext = useCallback((currentIndex: number) => {
    const nextIndex = (currentIndex + 1) % images.length;
    if (!loadedImages.has(nextIndex) && !loadingImages.has(nextIndex)) {
      preloadImage(nextIndex).catch(() => {
        // Error already handled in preloadImage
      });
    }
  }, [images.length, loadedImages, loadingImages, preloadImage]);

  // Preload multiple images
  const preloadBatch = useCallback(async (startIndex: number, count: number) => {
    const promises: Promise<void>[] = [];
    
    for (let i = 0; i < count && i < images.length; i++) {
      const index = (startIndex + i) % images.length;
      promises.push(preloadImage(index));
    }

    try {
      await Promise.allSettled(promises);
    } catch (error) {
      console.warn('Some images failed to preload:', error);
    }
  }, [images.length, preloadImage]);

  // Initial preload
  useEffect(() => {
    if (images.length === 0) return;

    // Always preload the first image with high priority
    preloadImage(0).then(() => {
      // Then preload the specified number of additional images
      if (preloadCount > 1) {
        preloadBatch(1, preloadCount - 1);
      }
    }).catch(() => {
      // Error already handled in preloadImage
    });
  }, [images, preloadCount, preloadImage, preloadBatch]);

  // Check if image is loaded
  const isImageLoaded = useCallback((index: number) => {
    return loadedImages.has(index);
  }, [loadedImages]);

  // Check if image is loading
  const isImageLoading = useCallback((index: number) => {
    return loadingImages.has(index);
  }, [loadingImages]);

  // Check if image failed to load
  const isImageFailed = useCallback((index: number) => {
    return failedImages.has(index);
  }, [failedImages]);

  // Get loading progress
  const getLoadingProgress = useCallback(() => {
    const total = Math.min(preloadCount, images.length);
    const loaded = Array.from({ length: total }, (_, i) => i)
      .filter(i => loadedImages.has(i)).length;
    
    return {
      loaded,
      total,
      percentage: total > 0 ? (loaded / total) * 100 : 0
    };
  }, [loadedImages, preloadCount, images.length]);

  return {
    preloadNext,
    preloadBatch,
    isImageLoaded,
    isImageLoading,
    isImageFailed,
    getLoadingProgress,
    loadedImages: Array.from(loadedImages),
    loadingImages: Array.from(loadingImages),
    failedImages: Array.from(failedImages)
  };
};