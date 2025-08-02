
import Header from "@/components/Header";
import OptimizedHeroSection from "@/components/OptimizedHeroSection";
import SEOHead from "@/components/SEOHead";
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Makerere University Geography Society - Home",
    "description": "Join Uganda's premier geography society at Makerere University. Explore field trips, research opportunities, and conservation initiatives.",
    "url": "https://mugs.lovable.app/",
    "mainEntity": {
      "@type": "Organization",
      "name": "Makerere University Geography Society",
      "alternateName": "MUGS",
      "description": "United to Conserve Nature",
      "url": "https://mugs.lovable.app/",
      "sameAs": [
        "https://twitter.com/MUGS57584",
        "https://www.instagram.com/mugs_mak/"
      ]
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead 
        title="Makerere University Geography Society - United to Conserve Nature"
        description="Join Uganda's premier geography society at Makerere University. Explore field trips, research opportunities, and conservation initiatives with fellow geography enthusiasts."
        structuredData={structuredData}
      />
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
