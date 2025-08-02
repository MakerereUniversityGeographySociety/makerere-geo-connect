
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

// Loading fallback component
const SectionSkeleton = ({ height = "400px" }: { height?: string }) => (
  <div 
    className="animate-pulse bg-gray-100 w-full flex items-center justify-center"
    style={{ height }}
  >
    <div className="text-gray-400">Loading...</div>
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
