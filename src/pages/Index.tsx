
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import ExploreHubSection from "@/components/ExploreHubSection";
import MerchandiseSection from "@/components/MerchandiseSection";
import PartnersSection from "@/components/PartnersSection";
import ResourcesSection from "@/components/ResourcesSection";
import SocialSection from "@/components/SocialSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <ExploreHubSection />
        <MerchandiseSection />
        <PartnersSection />
        <ResourcesSection />
        <SocialSection />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
