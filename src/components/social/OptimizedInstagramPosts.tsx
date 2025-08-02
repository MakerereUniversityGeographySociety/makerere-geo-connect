
import React, { useEffect, useState, useRef, useCallback } from "react";

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
  index: number;
}

const InstagramPost = ({ permalink, index }: InstagramPostProps) => {
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
        <div className="p-8 text-center text-gray-500">
          <p>Loading Instagram post {index + 1}...</p>
        </div>
      </blockquote>
    </div>
  );
};

const OptimizedInstagramPosts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [scriptError, setScriptError] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Load Instagram script only when visible with timeout and error handling
  useEffect(() => {
    if (isVisible && !scriptLoaded && !scriptError) {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      script.defer = true;
      
      const timeoutId = setTimeout(() => {
        setScriptError(true);
        console.warn('Instagram script failed to load within timeout');
      }, 10000);

      script.onload = () => {
        clearTimeout(timeoutId);
        setScriptLoaded(true);
        if (window.instgrm && window.instgrm.Embeds) {
          try {
            window.instgrm.Embeds.process();
          } catch (error) {
            console.warn('Instagram embed processing failed:', error);
            setScriptError(true);
          }
        }
      };

      script.onerror = () => {
        clearTimeout(timeoutId);
        setScriptError(true);
        console.warn('Instagram script failed to load');
      };

      document.head.appendChild(script);
      scriptRef.current = script;

      return () => {
        clearTimeout(timeoutId);
        if (scriptRef.current && document.head.contains(scriptRef.current)) {
          document.head.removeChild(scriptRef.current);
        }
      };
    }
  }, [isVisible, scriptLoaded, scriptError]);

  const posts = [
    "https://www.instagram.com/p/DHl5rHboc8X/?utm_source=ig_embed&amp;utm_campaign=loading",
    "https://www.instagram.com/p/DGvQWN0oM9V/?utm_source=ig_embed&amp;utm_campaign=loading"
  ];

  if (scriptError) {
    return (
      <div ref={ref}>
        <h3 className="text-2xl font-bold text-center mb-6">Latest Instagram Posts</h3>
        <div className="text-center p-8 bg-gray-50 rounded-lg">
          <p className="text-gray-600 mb-4">Unable to load Instagram posts</p>
          <a 
            href="https://www.instagram.com/mugs_57584/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
          >
            View on Instagram
          </a>
        </div>
      </div>
    );
  }

  return (
    <div ref={ref}>
      <h3 className="text-2xl font-bold text-center mb-6">Latest Instagram Posts</h3>
      
      {isVisible ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <InstagramPost key={post} permalink={post} index={index} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {posts.map((_, index) => (
            <div key={index} className="bg-gray-100 animate-pulse h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Loading Instagram post {index + 1}...</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OptimizedInstagramPosts;
