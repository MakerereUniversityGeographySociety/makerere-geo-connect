
import React from "react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  return (
    <div className="mt-8 text-center">
      <Button 
        className="bg-[#25D366] hover:bg-[#128C7E]"
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
