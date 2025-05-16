
import React from 'react';

const Logo = () => {
  return (
    <a href="#" className="flex items-center gap-2">
      <img 
        src="/lovable-uploads/0652451b-7248-4a89-ad03-efe7199fc573.png" 
        alt="Makerere University Geography Society Logo" 
        className="h-12 w-auto"
      />
      <div className="hidden md:block">
        <p className="font-heading font-semibold text-geo-green-dark">Makerere University</p>
        <p className="font-heading font-semibold text-geo-green-dark -mt-1">Geography Society</p>
      </div>
    </a>
  );
};

export default Logo;
