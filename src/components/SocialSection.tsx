
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { useEffect } from "react";

const SocialSection = () => {
  // Load Instagram embed script when the component mounts
  useEffect(() => {
    // Check if the script is already loaded
    if (!window.instgrm) {
      // Create a script element for Instagram embed
      const script = document.createElement("script");
      script.async = true;
      script.src = "//www.instagram.com/embed.js";
      document.body.appendChild(script);
    } else {
      // If already loaded, process any new embeds
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
      }
    }
  }, []);

  const socialLinks = [
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

  return (
    <section id="social" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Follow & Connect</h2>
        
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
        
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-6">Latest Instagram Posts</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="flex justify-center">
              <blockquote 
                className="instagram-media" 
                data-instgrm-captioned 
                data-instgrm-permalink="https://www.instagram.com/p/DHl5rHboc8X/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="14"
                style={{ 
                  background: '#FFF', 
                  border: 0, 
                  borderRadius: '3px', 
                  boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', 
                  margin: '1px', 
                  maxWidth: '540px', 
                  minWidth: '326px', 
                  padding: 0,
                  width: '99.375%'
                }}
              >
              </blockquote>
            </div>
            
            <div className="flex justify-center">
              <blockquote 
                className="instagram-media" 
                data-instgrm-captioned 
                data-instgrm-permalink="https://www.instagram.com/p/DGvQWN0oM9V/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="14"
                style={{ 
                  background: '#FFF', 
                  border: 0, 
                  borderRadius: '3px', 
                  boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', 
                  margin: '1px', 
                  maxWidth: '540px', 
                  minWidth: '326px', 
                  padding: 0,
                  width: '99.375%'
                }}
              >
              </blockquote>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="flex justify-center">
              <blockquote 
                className="instagram-media" 
                data-instgrm-captioned 
                data-instgrm-permalink="https://www.instagram.com/p/DFr5y3ho9RU/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="14"
                style={{ 
                  background: '#FFF', 
                  border: 0, 
                  borderRadius: '3px', 
                  boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', 
                  margin: '1px', 
                  maxWidth: '540px', 
                  minWidth: '326px', 
                  padding: 0,
                  width: '99.375%'
                }}
              >
              </blockquote>
            </div>
            
            <div className="flex justify-center">
              <blockquote 
                className="instagram-media" 
                data-instgrm-captioned 
                data-instgrm-permalink="https://www.instagram.com/p/DDeDRRZoyPp/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="14"
                style={{ 
                  background: '#FFF', 
                  border: 0, 
                  borderRadius: '3px', 
                  boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', 
                  margin: '1px', 
                  maxWidth: '540px', 
                  minWidth: '326px', 
                  padding: 0,
                  width: '99.375%'
                }}
              >
              </blockquote>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Button className="bg-[#25D366] hover:bg-[#128C7E]">
            Join WhatsApp Group
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
