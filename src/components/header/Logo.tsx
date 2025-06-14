
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img 
        src="/lovable-uploads/0652451b-7248-4a89-ad03-efe7199fc573.png" 
        alt="Makerere University Geography Society Logo" 
        className="h-10 w-auto md:h-12"
      />
      <div className="block">
        <p className="font-heading font-semibold text-white text-xs sm:text-sm md:text-base leading-tight">
          Makerere University Geography Society
        </p>
        <p className="font-heading font-medium text-white/90 text-xs hidden sm:block">
          United to Conserve Nature
        </p>
      </div>
    </Link>
  );
};

export default Logo;
