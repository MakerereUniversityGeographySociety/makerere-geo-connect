
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SpatialMediaHubTab = () => {
  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
      <CardContent className="flex flex-col items-center lg:items-stretch p-6 gap-8">
        <div className="flex-1 flex flex-col justify-center">
          <div>
            <div className="mx-auto mb-4 flex items-center justify-center bg-geo-green/10 rounded-full w-[64px] h-[64px] overflow-hidden">
              <img
                src="/lovable-uploads/c65dd880-d086-45ba-a929-b2edd133c4c4.png"
                alt="Spatial Media Hub Icon"
                className="object-contain w-12 h-12"
              />
            </div>
            <CardTitle className="text-2xl text-geo-green text-center lg:text-left">Spatial Media Hub</CardTitle>
            <CardDescription className="text-base text-center lg:text-left">
              Our Society&apos;s Editorial Platform
            </CardDescription>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed mt-6 text-center lg:text-left">
            Empowering educators, writers, social media content creators, mappers, developers, and other talents 
            in our society to leverage mapping, GIS tools, and geospatial technologies for compelling geographic 
            stories and active spatial problem solving.
          </p>
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
            <Badge className="bg-geo-green/10 text-geo-green hover:bg-geo-green/20">#Storytelling</Badge>
            <Badge className="bg-geo-green/10 text-geo-green hover:bg-geo-green/20">#GIS</Badge>
            <Badge className="bg-geo-green/10 text-geo-green hover:bg-geo-green/20">#Mapping</Badge>
            <Badge className="bg-geo-green/10 text-geo-green hover:bg-geo-green/20">#Content</Badge>
          </div>
          <div className="flex justify-center lg:justify-start">
            <Button 
              className="bg-geo-green hover:bg-geo-green-dark text-white px-8 py-3"
              asChild
            >
              <a 
                href="https://chat.whatsapp.com/CQ0nVX7La5HL9eCCh3E74T"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Spatial Hub
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpatialMediaHubTab;
