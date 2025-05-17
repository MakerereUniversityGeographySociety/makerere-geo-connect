
import { useState } from 'react';
import { Menu, X } from "lucide-react";
import Logo from './header/Logo';
import DesktopNavigation from './header/DesktopNavigation';
import MobileMenu from './header/MobileMenu';
import useScrollHandler from './header/ScrollHandler';
import { socialLinks } from './header/SocialLinks';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScrollHandler();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white ${scrolled ? 'shadow-md py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo Component */}
        <Logo />

        {/* Desktop Navigation Component */}
        <DesktopNavigation />

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-geo-green-dark"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Component */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} socialLinks={socialLinks} />
    </header>
  );
};

export default Header;
