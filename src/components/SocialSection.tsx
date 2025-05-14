
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const SocialSection = () => {
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
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Instagram Feed Embed Placeholder */}
          <Card className="overflow-hidden">
            <div className="h-10 bg-[#E1306C] flex items-center px-4">
              <Instagram className="text-white mr-2" size={16} />
              <span className="text-white text-sm">Instagram Feed</span>
            </div>
            <CardContent className="p-0">
              <div className="grid grid-cols-3 gap-1">
                {Array(6).fill(0).map((_, i) => (
                  <div key={i} className="aspect-square bg-gray-200"></div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Twitter Feed Embed Placeholder */}
          <Card className="overflow-hidden">
            <div className="h-10 bg-[#1DA1F2] flex items-center px-4">
              <Twitter className="text-white mr-2" size={16} />
              <span className="text-white text-sm">Latest Tweets</span>
            </div>
            <CardContent className="p-4">
              <div className="border-l-4 border-[#1DA1F2] pl-4 py-2">
                <p className="text-sm">Join our upcoming field trip to explore the geographical features of Lake Victoria! Registration opens next week. #FieldTrip #Geography #MUGS</p>
                <p className="text-xs text-gray-500 mt-2">@MUGS57584 · 2d</p>
              </div>
            </CardContent>
          </Card>
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
