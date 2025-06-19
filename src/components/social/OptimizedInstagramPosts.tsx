
import React, { useEffect, useState, useRef } from "react";

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

const OptimizedInstagramPosts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Load Instagram script only when visible
  useEffect(() => {
    if (isVisible && !scriptLoaded) {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      script.onload = () => {
        setScriptLoaded(true);
        if (window.instgrm && window.instgrm.Embeds) {
          window.instgrm.Embeds.process();
        }
      };
      document.head.appendChild(script);
    }
  }, [isVisible, scriptLoaded]);

  const posts = [
    "https://www.instagram.com/p/DHl5rHboc8X/?utm_source=ig_embed&amp;utm_campaign=loading",
    "https://www.instagram.com/p/DGvQWN0oM9V/?utm_source=ig_embed&amp;utm_campaign=loading"
  ];

  return (
    <div ref={ref}>
      <h3 className="text-2xl font-bold text-center mb-6">Latest Instagram Posts</h3>
      
      {isVisible ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <InstagramPost permalink={posts[0]} />
          <InstagramPost permalink={posts[1]} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-gray-100 animate-pulse h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">Loading Instagram posts...</span>
          </div>
          <div className="bg-gray-100 animate-pulse h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">Loading Instagram posts...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedInstagramPosts;
