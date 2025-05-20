
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

interface SocialLink {
  platform: string;
  handle: string;
  url: string;
  icon: React.ElementType;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    platform: "Instagram",
    handle: "@m.u.g.s24",
    url: "https://www.instagram.com/m.u.g.s24/",
    icon: Instagram,
    color: "bg-[#E1306C]"
  },
  {
    platform: "Twitter/X",
    handle: "@MUGS57584",
    url: "https://x.com/MUGS57584",
    icon: Twitter,
    color: "bg-[#1DA1F2]"
  },
  {
    platform: "LinkedIn",
    handle: "Makerere University Geography Society",
    url: "https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BoZFboQdOToqhFBFIHG%2BGZA%3D%3D",
    icon: Linkedin,
    color: "bg-[#0077B5]"
  },
  {
    platform: "YouTube",
    handle: "@MUGS-j2o",
    url: "https://www.youtube.com/@MUGS-j2o",
    icon: Youtube,
    color: "bg-[#FF0000]"
  }
];

const SocialLinkCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {socialLinks.map((social) => (
        <Card key={social.platform} className="overflow-hidden">
          <div className={`${social.color} h-1`}></div>
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <div className={`${social.color} text-white p-3 rounded-full`}>
              <social.icon size={24} />
            </div>
            <h3 className="mt-4 font-semibold text-lg">{social.platform}</h3>
            <p className="text-sm text-gray-600 mt-1">{social.handle}</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => window.open(social.url, '_blank')}
            >
              Follow Us
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SocialLinkCards;
