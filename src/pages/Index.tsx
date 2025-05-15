
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import NewsSection from "@/components/NewsSection";
import MerchandiseSection from "@/components/MerchandiseSection";
import PartnersSection from "@/components/PartnersSection";
import ResourcesSection from "@/components/ResourcesSection";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <NewsSection />
        <MerchandiseSection />
        <PartnersSection />
        <ResourcesSection />
        <SocialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
