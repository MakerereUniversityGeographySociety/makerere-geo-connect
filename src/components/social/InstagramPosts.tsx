
import React, { useEffect } from "react";

// Define the window interface for Instagram embeds
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

interface InstagramPostProps {
  permalink: string;
}

const InstagramPost = ({ permalink }: InstagramPostProps) => {
  return (
    <div className="flex justify-center">
      <blockquote 
        className="instagram-media" 
        data-instgrm-captioned 
        data-instgrm-permalink={permalink}
        data-instgrm-version="14"
        style={{ 
          background: '#FFF', 
          border: 0, 
          borderRadius: '3px', 
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', 
          margin: '1px', 
          maxWidth: '540px', 
          minWidth: '326px', 
          padding: 0,
          width: '99.375%'
        }}
      >
      </blockquote>
    </div>
  );
};

const InstagramPosts = () => {
  useEffect(() => {
    // Process Instagram embeds when component mounts
    if (window.instgrm && window.instgrm.Embeds) {
      window.instgrm.Embeds.process();
    }
  }, []);

  const posts = [
    "https://www.instagram.com/p/DHl5rHboc8X/?utm_source=ig_embed&amp;utm_campaign=loading",
    "https://www.instagram.com/p/DGvQWN0oM9V/?utm_source=ig_embed&amp;utm_campaign=loading"
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold text-center mb-6">Latest Instagram Posts</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <InstagramPost permalink={posts[0]} />
        <InstagramPost permalink={posts[1]} />
      </div>
    </div>
  );
};

export default InstagramPosts;
