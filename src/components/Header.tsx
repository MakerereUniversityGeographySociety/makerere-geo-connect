
import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-geo-green rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <div className="hidden md:block">
            <p className="font-heading font-semibold text-geo-green-dark">Makerere University</p>
            <p className="text-xs -mt-1">Geography Society</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-sm font-medium hover:text-geo-green transition-colors">Home</a>
          <a href="#about" className="text-sm font-medium hover:text-geo-green transition-colors">Society Profile</a>
          <a href="#events" className="text-sm font-medium hover:text-geo-green transition-colors">Events</a>
          <a href="#news" className="text-sm font-medium hover:text-geo-green transition-colors">News</a>
          <a href="#merchandise" className="text-sm font-medium hover:text-geo-green transition-colors">Merchandise</a>
          <a href="#partners" className="text-sm font-medium hover:text-geo-green transition-colors">Partners</a>
          <a href="#resources" className="text-sm font-medium hover:text-geo-green transition-colors">Resources</a>
          <a href="#subscribe" className="text-sm font-medium hover:text-geo-green transition-colors">Subscribe</a>
        </nav>

        {/* Social Icons - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://www.instagram.com/m.u.g.s24/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-geo-green transition-colors">
            <Instagram size={18} />
          </a>
          <a href="https://x.com/MUGS57584" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-geo-green transition-colors">
            <Twitter size={18} />
          </a>
          <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BoZFboQdOToqhFBFIHG%2BGZA%3D%3D" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-geo-green transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="https://www.youtube.com/@MUGS-j2o" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-geo-green transition-colors">
            <Youtube size={18} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-geo-green-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#home" className="py-2 text-geo-green-dark font-medium hover:bg-gray-50 px-2 rounded" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="py-2 text-geo-green-dark font-medium hover:bg-gray-50 px-2 rounded" onClick={() => setIsMenuOpen(false)}>Society Profile</a>
            <a href="#events" className="py-2 text-geo-green-dark font-medium hover:bg-gray-50 px-2 rounded" onClick={() => setIsMenuOpen(false)}>Events</a>
            <a href="#news" className="py-2 text-geo-green-dark font-medium hover:bg-gray-50 px-2 rounded" onClick={() => setIsMenuOpen(false)}>News</a>
            <a href="#merchandise" className="py-2 text-geo-green-dark font-medium hover:bg-gray-50 px-2 rounded" onClick={() => setIsMenuOpen(false)}>Merchandise</a>
            <a href="#partners" className="py-2 text-geo-green-dark font-medium hover:bg-gray-50 px-2 rounded" onClick={() => setIsMenuOpen(false)}>Partners</a>
            <a href="#resources" className="py-2 text-geo-green-dark font-medium hover:bg-gray-50 px-2 rounded" onClick={() => setIsMenuOpen(false)}>Resources</a>
            <a href="#subscribe" className="py-2 text-geo-green-dark font-medium hover:bg-gray-50 px-2 rounded" onClick={() => setIsMenuOpen(false)}>Subscribe</a>
            
            <div className="flex gap-4 mt-2 border-t pt-4">
              <a href="https://www.instagram.com/m.u.g.s24/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-geo-green">
                <Instagram size={20} />
              </a>
              <a href="https://x.com/MUGS57584" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-geo-green">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BoZFboQdOToqhFBFIHG%2BGZA%3D%3D" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-geo-green">
                <Linkedin size={20} />
              </a>
              <a href="https://www.youtube.com/@MUGS-j2o" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-geo-green">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
