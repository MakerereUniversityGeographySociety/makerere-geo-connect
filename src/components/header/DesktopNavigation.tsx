
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { eventItems, resourceItems, navItems } from './NavigationItems';
import { socialLinks } from './SocialLinks';

const DesktopNavigation = () => {
  return (
    <nav className="hidden md:flex items-center gap-6">
      {/* Regular navigation items */}
      {navItems.map((item) => (
        <a 
          key={item.name} 
          href={item.url} 
          className="text-sm font-medium hover:text-geo-green transition-colors"
        >
          {item.name}
        </a>
      ))}
      
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
  );
};

export default DesktopNavigation;
