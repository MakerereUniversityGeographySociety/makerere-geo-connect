
import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

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
  index: number;
  showCaptions: boolean;
  onToggleCaption: (index: number) => void;
}

const InstagramPost = ({ permalink, index, showCaptions, onToggleCaption }: InstagramPostProps) => {
  const [isOpen, setIsOpen] = useState(showCaptions);

  useEffect(() => {
    setIsOpen(showCaptions);
  }, [showCaptions]);

  return (
    <div className="flex flex-col items-center space-y-2">
      {/* Caption Control */}
      <div className="flex items-center gap-2 w-full max-w-[540px] px-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            const newState = !isOpen;
            setIsOpen(newState);
            onToggleCaption(index);
          }}
          className="flex items-center gap-2"
        >
          {isOpen ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          {isOpen ? "Hide Caption" : "Show Caption"}
        </Button>
      </div>

      {/* Instagram Post */}
      <div className="flex justify-center">
        <blockquote 
          className="instagram-media" 
          data-instgrm-captioned={isOpen}
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
    </div>
  );
};

const InstagramPosts = () => {
  const [globalShowCaptions, setGlobalShowCaptions] = useState(false);
  const [individualCaptions, setIndividualCaptions] = useState<boolean[]>([false, false]);

  useEffect(() => {
    // Process Instagram embeds when component mounts and when caption state changes
    const timer = setTimeout(() => {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [individualCaptions]);

  const posts = [
    "https://www.instagram.com/p/DHl5rHboc8X/?utm_source=ig_embed&amp;utm_campaign=loading",
    "https://www.instagram.com/p/DGvQWN0oM9V/?utm_source=ig_embed&amp;utm_campaign=loading"
  ];

  const handleToggleCaption = (index: number) => {
    setIndividualCaptions(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleGlobalToggle = () => {
    const newState = !globalShowCaptions;
    setGlobalShowCaptions(newState);
    setIndividualCaptions(posts.map(() => newState));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold">Latest Instagram Posts</h3>
        
        {/* Global Caption Control */}
        <Button
          variant="outline"
          onClick={handleGlobalToggle}
          className="flex items-center gap-2"
        >
          {globalShowCaptions ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          {globalShowCaptions ? "Hide All Captions" : "Show All Captions"}
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {posts.map((permalink, index) => (
          <InstagramPost
            key={permalink}
            permalink={permalink}
            index={index}
            showCaptions={individualCaptions[index]}
            onToggleCaption={handleToggleCaption}
          />
        ))}
      </div>
    </div>
  );
};

export default InstagramPosts;
