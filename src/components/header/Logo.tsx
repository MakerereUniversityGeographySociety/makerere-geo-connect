
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img 
        src="/lovable-uploads/0652451b-7248-4a89-ad03-efe7199fc573.png" 
        alt="Makerere University Geography Society Logo" 
        className="h-12 w-auto"
      />
      <div className="hidden md:block">
        <p className="font-heading font-semibold text-white">Makerere University</p>
        <p className="font-heading font-semibold text-white -mt-1">Geography Society</p>
      </div>
    </Link>
  );
};

export default Logo;
