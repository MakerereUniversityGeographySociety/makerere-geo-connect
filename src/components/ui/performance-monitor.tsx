import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
  fcp?: number;
}

export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});

  useEffect(() => {
    // Only run in production or when performance monitoring is needed
    if (process.env.NODE_ENV !== 'production') return;

    const updateMetric = (name: string, value: number) => {
      setMetrics(prev => ({ ...prev, [name]: value }));
    };

    // Web Vitals observer
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'largest-contentful-paint':
            updateMetric('lcp', entry.startTime);
            break;
          case 'first-input':
            updateMetric('fid', (entry as any).processingStart - entry.startTime);
            break;
          case 'layout-shift':
            if (!(entry as any).hadRecentInput) {
              updateMetric('cls', (metrics.cls || 0) + (entry as any).value);
            }
            break;
        }
      }
    });

    // Observe core web vitals
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      // Fallback for browsers that don't support all entry types
    }

    // Navigation timing
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      updateMetric('ttfb', navigationEntry.responseStart - navigationEntry.requestStart);
      updateMetric('fcp', navigationEntry.domContentLoadedEventEnd - navigationEntry.fetchStart);
    }

    return () => observer.disconnect();
  }, []);

  return metrics;
};

// Performance budget checker
export const checkPerformanceBudget = (metrics: PerformanceMetrics) => {
  const budgets = {
    lcp: 2500, // ms
    fid: 100,  // ms
    cls: 0.1,  // score
    ttfb: 600, // ms
    fcp: 1800  // ms
  };

  const violations: string[] = [];

  Object.entries(budgets).forEach(([metric, budget]) => {
    const value = metrics[metric as keyof PerformanceMetrics];
    if (value && value > budget) {
      violations.push(`${metric.toUpperCase()}: ${Math.round(value)}${metric === 'cls' ? '' : 'ms'} (budget: ${budget}${metric === 'cls' ? '' : 'ms'})`);
    }
  });

  return violations;
};

// Resource loading monitor
export const useResourceMonitor = () => {
  const [resourceMetrics, setResourceMetrics] = useState({
    totalSize: 0,
    imageCount: 0,
    scriptCount: 0,
    slowResources: [] as string[]
  });

  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      let totalSize = 0;
      let imageCount = 0;
      let scriptCount = 0;
      const slowResources: string[] = [];

      for (const entry of list.getEntries()) {
        const resource = entry as PerformanceResourceTiming;
        
        // Calculate total transfer size
        totalSize += resource.transferSize || 0;
        
        // Count resource types
        if (resource.initiatorType === 'img') imageCount++;
        if (resource.initiatorType === 'script') scriptCount++;
        
        // Identify slow resources (>1s)
        const loadTime = resource.responseEnd - resource.startTime;
        if (loadTime > 1000) {
          slowResources.push(`${resource.name.split('/').pop()} (${Math.round(loadTime)}ms)`);
        }
      }

      setResourceMetrics({
        totalSize: Math.round(totalSize / 1024), // KB
        imageCount,
        scriptCount,
        slowResources
      });
    });

    try {
      observer.observe({ entryTypes: ['resource'] });
    } catch (e) {
      console.warn('Resource monitoring not supported');
    }

    return () => observer.disconnect();
  }, []);

  return resourceMetrics;
};