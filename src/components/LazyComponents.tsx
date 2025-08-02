
import { lazy, Suspense } from 'react';

// Lazy load non-critical components
export const LazyAboutSection = lazy(() => import('./AboutSection'));
export const LazyEventsSection = lazy(() => import('./EventsSection'));
export const LazyExploreHubSection = lazy(() => import('./ExploreHubSection'));
export const LazyMerchandiseSection = lazy(() => import('./MerchandiseSection'));
export const LazyPartnersSection = lazy(() => import('./PartnersSection'));
export const LazyResourcesSection = lazy(() => import('./ResourcesSection'));
export const LazySocialSection = lazy(() => import('./SocialSection'));
export const LazyMapSection = lazy(() => import('./MapSection'));

// Enhanced loading fallback component with better performance
const SectionSkeleton = ({ height = "400px" }: { height?: string }) => (
  <div 
    className="relative w-full overflow-hidden bg-gray-100 contain-layout"
    style={{ height }}
  >
    {/* Enhanced shimmer effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-200">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer"></div>
    </div>
    
    {/* Content placeholder */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-gray-400 text-sm">Loading content...</div>
    </div>
  </div>
);

// Wrapper component with error boundary
export const LazySection = ({ 
  children, 
  fallbackHeight = "400px" 
}: { 
  children: React.ReactNode;
  fallbackHeight?: string;
}) => (
  <Suspense fallback={<SectionSkeleton height={fallbackHeight} />}>
    {children}
  </Suspense>
);
