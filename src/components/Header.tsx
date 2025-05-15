
import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/m.u.g.s24/",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/MUGS57584",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BoZFboQdOToqhFBFIHG%2BGZA%3D%3D",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@MUGS-j2o",
    },
  ];

  // Updated event items to all point to the same registration form
  const eventItems = [
    { name: "Freshers' Orientation", url: "https://form.jotform.com/251345731976060" },
    { name: "General Assembly", url: "https://form.jotform.com/251345731976060" },
    { name: "Seminars and Workshops", url: "https://form.jotform.com/251345731976060" },
    { name: "Field Study Trips", url: "https://form.jotform.com/251345731976060" },
    { name: "Quizzes and Mapathons", url: "https://form.jotform.com/251345731976060" },
    { name: "Elections and Polls", url: "https://form.jotform.com/251345731976060" },
  ];

  const resourceItems = [
    { name: "Academic Resources Hub", url: "https://geo-vault-hub-connect.lovable.app/" },
    { name: "Story Maps", url: "/story-maps" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white ${scrolled ? 'shadow-md py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-sm font-medium hover:text-geo-green transition-colors">Home</a>
          <a href="#about" className="text-sm font-medium hover:text-geo-green transition-colors">Profile</a>
          
          {/* Events Dropdown - Desktop */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium hover:text-geo-green transition-colors">
              Events
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              <DropdownMenuLabel>Event Registration</DropdownMenuLabel>
              {eventItems.map((event) => (
                <DropdownMenuItem key={event.name} asChild>
                  <a 
                    href={event.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    {event.name}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <a href="#news" className="text-sm font-medium hover:text-geo-green transition-colors">News</a>
          <a href="#merchandise" className="text-sm font-medium hover:text-geo-green transition-colors">Merchandise</a>
          <a href="#partners" className="text-sm font-medium hover:text-geo-green transition-colors">Partners</a>
          
          {/* Resources Dropdown - Desktop */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium hover:text-geo-green transition-colors">
              Resources
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              {resourceItems.map((resource) => (
                <DropdownMenuItem key={resource.name} asChild>
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    {resource.name}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <a href="/join-us" className="text-sm font-medium hover:text-geo-green transition-colors">Join Us</a>
          
          {/* Connect Dropdown - Desktop */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium hover:text-geo-green transition-colors">
              Connect
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {socialLinks.map((social) => (
                <DropdownMenuItem key={social.name} asChild>
                  <a 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <social.icon size={16} />
                    <span>{social.name}</span>
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

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
            <a href="#about" className="py-2 text-geo-green-dark font-medium hover:bg-gray-50 px-2 rounded" onClick={() => setIsMenuOpen(false)}>Profile</a>
            
            {/* Events - Mobile */}
            <div className="py-2 text-geo-green-dark font-medium px-2">Events:</div>
            <div className="pl-4 flex flex-col gap-1">
              {eventItems.map((event) => (
                <a 
                  key={event.name}
                  href={event.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="py-1 text-sm text-geo-green-dark hover:bg-gray-50 px-2 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {event.name}
                </a>
              ))}
            </div>
            
            <a href="#news" className="py-2 text-geo-green-dark font-medium hover:bg-gray-50 px-2 rounded" onClick={() => setIsMenuOpen(false)}>News</a>
            <a href="#merchandise" className="py-2 text-geo-green-dark font-medium hover:bg-gray-50 px-2 rounded" onClick={() => setIsMenuOpen(false)}>Merchandise</a>
            <a href="#partners" className="py-2 text-geo-green-dark font-medium hover:bg-gray-50 px-2 rounded" onClick={() => setIsMenuOpen(false)}>Partners</a>
            
            {/* Resources - Mobile */}
            <div className="py-2 text-geo-green-dark font-medium px-2">Resources:</div>
            <div className="pl-4 flex flex-col gap-1">
              {resourceItems.map((resource) => (
                <a 
                  key={resource.name}
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="py-1 text-sm text-geo-green-dark hover:bg-gray-50 px-2 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {resource.name}
                </a>
              ))}
            </div>
            
            <a href="/join-us" className="py-2 text-geo-green-dark font-medium hover:bg-gray-50 px-2 rounded" onClick={() => setIsMenuOpen(false)}>Join Us</a>
            
            {/* Connect Section - Mobile */}
            <div className="py-2 text-geo-green-dark font-medium px-2">Connect:</div>
            <div className="flex gap-4 pl-2">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-geo-green"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
