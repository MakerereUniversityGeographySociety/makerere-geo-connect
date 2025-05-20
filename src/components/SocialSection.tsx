
import React from "react";
import SocialLinkCards from "./social/SocialLinks";
import InstagramPosts from "./social/InstagramPosts";
import TwitterPosts from "./social/TwitterPosts";
import WhatsAppButton from "./social/WhatsAppButton";

const SocialSection = () => {
  return (
    <section id="social" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Follow & Connect</h2>
        
        <SocialLinkCards />
        
        {/* Instagram Posts Section */}
        <div className="mt-12">
          <InstagramPosts />
        </div>
        
        {/* Twitter/X Posts Section */}
        <TwitterPosts />
        
        <WhatsAppButton />
      </div>
    </section>
  );
};

export default SocialSection;
