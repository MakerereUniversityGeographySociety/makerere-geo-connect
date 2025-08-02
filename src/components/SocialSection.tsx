
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import SocialLinkCards from "./social/SocialLinks";
import InstagramPosts from "./social/InstagramPosts";
import WhatsAppButton from "./social/WhatsAppButton";

const SocialSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="social" className="py-10 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Follow & Connect</h2>
        
        <SocialLinkCards />
        
        {/* Instagram Posts Section */}
        <div className="mt-8 md:mt-12">
          <InstagramPosts />
        </div>
        
        <WhatsAppButton />
      </div>
    </section>
  );
};

export default SocialSection;
