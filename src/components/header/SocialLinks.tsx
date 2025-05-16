
import React from 'react';
import { Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export interface SocialLink {
  name: string;
  icon: React.ElementType;
  url: string;
}

export const socialLinks: SocialLink[] = [
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

interface SocialLinksProps {
  displayAsIcons?: boolean;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ displayAsIcons = false }) => {
  if (displayAsIcons) {
    return (
      <div className="flex gap-4">
        {socialLinks.map((social) => (
          <a 
            key={social.name}
            href={social.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 hover:text-geo-green"
          >
            <social.icon size={20} />
          </a>
        ))}
      </div>
    );
  }
  
  return null;
};

export default SocialLinks;
