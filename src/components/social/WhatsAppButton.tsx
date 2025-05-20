
import React from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const WhatsAppButton = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="mt-6 md:mt-8 text-center">
      <Button 
        className={`bg-[#25D366] hover:bg-[#128C7E] ${isMobile ? 'w-full md:w-auto' : ''}`}
        size={isMobile ? "lg" : "default"}
        asChild
      >
        <a 
          href="https://chat.whatsapp.com/KaLUt96H2H54PaIioqPcZY" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Join WhatsApp Group
        </a>
      </Button>
    </div>
  );
};

export default WhatsAppButton;
