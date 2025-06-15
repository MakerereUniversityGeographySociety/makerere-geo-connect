
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
      <div className="leading-tight">
        <span className="font-heading font-semibold text-white text-sm md:text-base block">
          Makerere University
        </span>
        <span className="font-heading font-semibold text-white text-sm md:text-base block">
          Geography Society
        </span>
      </div>
    </Link>
  );
};

export default Logo;
