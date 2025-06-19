
import Header from "@/components/Header";
import OptimizedHeroSection from "@/components/OptimizedHeroSection";
import { 
  LazySection,
  LazyAboutSection,
  LazyEventsSection,
  LazyExploreHubSection,
  LazyMerchandiseSection,
  LazyPartnersSection,
  LazyResourcesSection
} from "@/components/LazyComponents";
import OptimizedMapSection from "@/components/OptimizedMapSection";
import Footer from "@/components/Footer";
import { lazy, Suspense } from "react";

// Lazy load the social section with optimized Instagram
const LazySocialSection = lazy(() => import("@/components/social/OptimizedSocialSection"));

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <OptimizedHeroSection />
        
        <LazySection fallbackHeight="600px">
          <LazyAboutSection />
        </LazySection>
        
        <LazySection fallbackHeight="800px">
          <LazyEventsSection />
        </LazySection>
        
        <LazySection fallbackHeight="600px">
          <LazyExploreHubSection />
        </LazySection>
        
        <LazySection fallbackHeight="500px">
          <LazyMerchandiseSection />
        </LazySection>
        
        <LazySection fallbackHeight="400px">
          <LazyPartnersSection />
        </LazySection>
        
        <LazySection fallbackHeight="700px">
          <LazyResourcesSection />
        </LazySection>
        
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse flex items-center justify-center"><span className="text-gray-400">Loading social content...</span></div>}>
          <LazySocialSection />
        </Suspense>
        
        <OptimizedMapSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
