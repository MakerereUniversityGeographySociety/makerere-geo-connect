
import React from 'react';
import { eventItems, resourceItems, navItems } from './NavigationItems';
import { SocialLink } from './SocialLinks';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  socialLinks: SocialLink[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, socialLinks }) => {
  if (!isOpen) return null;
  
  return (
    <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
      <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
        {/* Regular nav items */}
        {navItems.map((item) => (
          <a 
            key={item.name} 
            href={item.url} 
            className="py-2 text-geo-green-dark font-medium hover:bg-gray-50 px-2 rounded" 
            onClick={onClose}
          >
            {item.name}
          </a>
        ))}
        
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
              onClick={onClose}
            >
              {event.name}
            </a>
          ))}
        </div>
        
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
              onClick={onClose}
            >
              {resource.name}
            </a>
          ))}
        </div>
        
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
              onClick={onClose}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
