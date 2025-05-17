
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
// Import MessageSquare instead of WhatsApp (which isn't available in this version of lucide-react)
import { MessageSquare } from "lucide-react";

const DesktopNavigation = () => {
  return (
    <nav className="hidden md:flex items-center gap-6">
      {/* Regular navigation items */}
      {navItems.map((item) => (
        <a 
          key={item.name} 
          href={item.url} 
          className="text-sm font-medium text-white hover:text-gray-200 transition-colors"
        >
          {item.name}
        </a>
      ))}
      
      {/* Events Dropdown - Desktop */}
      <DropdownMenu>
        <DropdownMenuTrigger className="text-sm font-medium text-white hover:text-gray-200 transition-colors">
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
        <DropdownMenuTrigger className="text-sm font-medium text-white hover:text-gray-200 transition-colors">
          Resources
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center">
          <DropdownMenuItem asChild>
            <a 
              href="#merchandise" 
              className="cursor-pointer"
            >
              Merchandise
            </a>
          </DropdownMenuItem>
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
        <DropdownMenuTrigger className="text-sm font-medium text-white hover:text-gray-200 transition-colors">
          Connect
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <a 
              href="https://chat.whatsapp.com/KaLUt96H2H54PaIioqPcZY" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageSquare size={16} />
              <span>Join WhatsApp Group</span>
            </a>
          </DropdownMenuItem>
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
