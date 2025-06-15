
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe } from "lucide-react";

const ExploreHubSection = () => {
  const earthPulseTools = [
    {
      name: "Solar System Scope",
      description: "Explore our solar system in 3D interactive view",
      image: "/lovable-uploads/5276b34d-32a6-46e7-bbc5-a574b5290824.png",
      url: "https://www.solarsystemscope.com/",
      type: 'card-link'
    },
    {
      name: "NASA Eyes",
      description: "Real-time Earth observation from NASA satellites",
      icon: "/lovable-uploads/64102cef-bf9a-4fa5-bd3a-826907ad91c9.png",
      url: "https://eyes.nasa.gov/apps/earth",
      type: 'link'
    },
    {
      name: "NASA World View",
      description: "Interactive exploration of satellite imagery",
      icon: "/lovable-uploads/f39ba7e2-af3b-41aa-991d-82c5841fe10e.png",
      url: "https://worldview.earthdata.nasa.gov/",
      type: 'link'
    },
    {
      name: "Open Weather Map",
      description: "Global weather data and forecasting",
      icon: "/lovable-uploads/75971db3-49dc-48c1-a3dc-fe4997c374c2.png",
      url: "https://openweathermap.org/",
      type: 'link'
    },
    {
      name: "Global Forest Watch",
      description: "Monitor forests and land use changes worldwide",
      icon: "/lovable-uploads/693d8406-4de3-46d2-8e99-88e26438229a.png",
      url: "https://www.globalforestwatch.org/",
      type: 'link'
    },
    {
      name: "Global Wind Map",
      description: "Real-time global wind patterns visualization",
      icon: "/lovable-uploads/9387d83b-1170-4432-967e-b87e30291fb3.png",
      url: "https://earth.nullschool.net/",
      type: 'link'
    },
    {
      name: "Carbon Footprint",
      description: "Calculate and track environmental impact",
      icon: "/lovable-uploads/d6e1666f-a6d5-4f88-bc34-32067049979d.png",
      url: "https://www.carbonfootprint.com/",
      type: 'link'
    }
  ];

  const solarSystemTool = earthPulseTools.find(tool => tool.type === 'card-link');
  const linkTools = earthPulseTools.filter(tool => tool.type === 'link');

  return (
    <section id="explore-hub" className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Hub</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our innovative platforms for spatial storytelling and environmental monitoring
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Spatial Media Hub - illustration image removed */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="flex flex-col items-center lg:items-stretch p-6 gap-8">
              {/* Textual info */}
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
              {/* Illustration removed */}
            </CardContent>
          </Card>

          {/* Earth Pulse Hub */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-blue-500/10 rounded-full w-fit">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl text-blue-600">Earth Pulse Hub</CardTitle>
              <CardDescription className="text-base">
                Environmental Monitoring Platform
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700 mb-6 leading-relaxed">
                An engaging platform for monitoring and observing key geographical and environmental indicators. 
                Access real-time data, satellite imagery, and interactive tools to understand our planet's vital signs.
              </p>
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                <Badge className="bg-blue-500/10 text-blue-600 hover:bg-blue-500/20">#Environment</Badge>
                <Badge className="bg-blue-500/10 text-blue-600 hover:bg-blue-500/20">#Monitoring</Badge>
                <Badge className="bg-blue-500/10 text-blue-600 hover:bg-blue-500/20">#Satellite</Badge>
                <Badge className="bg-blue-500/10 text-blue-600 hover:bg-blue-500/20">#Climate</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Earth Pulse Tools */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Earth Pulse Tools</h3>
          
          {/* Solar System Scope Card */}
          {solarSystemTool && (
            <div className="mb-8 flex justify-center">
              <Card className="max-w-md w-full bg-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <a href={solarSystemTool.url} target="_blank" rel="noopener noreferrer">
                  <img src={solarSystemTool.image} alt={solarSystemTool.name} className="w-full h-auto object-cover" />
                </a>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{solarSystemTool.name}</CardTitle>
                  <CardDescription>{solarSystemTool.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button 
                    onClick={() => window.open(solarSystemTool.url, '_blank')}
                    className="w-full"
                  >
                    Explore Tool
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Other Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {linkTools.map((tool) => (
              <Card key={tool.name} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-3 p-2 bg-blue-500/10 rounded-full w-fit">
                    {'icon' in tool && typeof tool.icon === 'string' ? (
                      <img src={tool.icon} alt={`${tool.name} logo`} className="h-6 w-6 object-contain" />
                    ) : (
                      <Globe className="h-6 w-6 text-blue-600" />
                    )}
                  </div>
                  <CardTitle className="text-lg">{tool.name}</CardTitle>
                  <CardDescription className="text-sm">{tool.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0 text-center">
                  <Button 
                    onClick={() => window.open(tool.url, '_blank')}
                  >
                    Explore Tool
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreHubSection;
