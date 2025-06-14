
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Eye, Satellite, CloudRain, Trees, Wind, Leaf, Sun } from "lucide-react";

const ExploreHubSection = () => {
  const earthPulseTools = [
    {
      name: "Solar System Scope",
      description: "Explore our solar system in 3D interactive view",
      icon: Sun,
      embed: '<iframe src="https://www.solarsystemscope.com/iframe" width="500" height="400" style="min-width:500px; min-height: 400px; border: 2px solid #0f5c6e;"></iframe>',
      type: 'embed'
    },
    {
      name: "NASA Eyes",
      description: "Real-time Earth observation from NASA satellites",
      icon: Eye,
      url: "https://eyes.nasa.gov/apps/earth",
      type: 'link'
    },
    {
      name: "NASA World View",
      description: "Interactive exploration of satellite imagery",
      icon: Satellite,
      url: "https://worldview.earthdata.nasa.gov/",
      type: 'link'
    },
    {
      name: "Open Weather Map",
      description: "Global weather data and forecasting",
      icon: CloudRain,
      url: "https://openweathermap.org/",
      type: 'link'
    },
    {
      name: "Global Forest Watch",
      description: "Monitor forests and land use changes worldwide",
      icon: Trees,
      url: "https://www.globalforestwatch.org/",
      type: 'link'
    },
    {
      name: "Global Wind Map",
      description: "Real-time global wind patterns visualization",
      icon: Wind,
      url: "https://earth.nullschool.net/",
      type: 'link'
    },
    {
      name: "Carbon Footprint",
      description: "Calculate and track environmental impact",
      icon: Leaf,
      url: "https://www.carbonfootprint.com/",
      type: 'link'
    }
  ];

  const solarSystemTool = earthPulseTools.find(tool => tool.type === 'embed');
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
          {/* Spatial Media Hub */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="flex flex-col-reverse lg:flex-row items-center lg:items-stretch p-6 gap-8">
              {/* Textual info */}
              <div className="flex-1 flex flex-col justify-center">
                <div>
                  <div className="mx-auto mb-4 flex items-center justify-center bg-geo-green/10 rounded-full w-[64px] h-[64px] overflow-hidden">
                    <img
                      src="/lovable-uploads/b5660d25-3fe7-4b5e-b152-1c68f1dc0681.png"
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
              {/* Illustration */}
              <div className="flex-1 flex items-center justify-center mb-6 lg:mb-0">
                <img
                  src="/lovable-uploads/ac585d2b-726f-423d-9684-231fb14c6f8c.png"
                  alt="Spatial Media Illustration"
                  className="object-contain rounded-lg shadow-md w-full max-w-[340px] lg:max-w-[340px] aspect-[1/1] border border-gray-200"
                  loading="lazy"
                />
              </div>
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
          
          {/* Solar System Scope Embed */}
          {solarSystemTool && (
            <Card className="mb-8 bg-white shadow-lg">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <solarSystemTool.icon className="h-6 w-6 text-orange-500" />
                  <CardTitle className="text-xl">{solarSystemTool.name}</CardTitle>
                </div>
                <CardDescription>{solarSystemTool.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <div 
                  className="w-full max-w-2xl"
                  dangerouslySetInnerHTML={{ __html: solarSystemTool.embed }}
                />
              </CardContent>
            </Card>
          )}

          {/* Other Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {linkTools.map((tool) => (
              <Card key={tool.name} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-3 p-2 bg-blue-500/10 rounded-full w-fit">
                    <tool.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{tool.name}</CardTitle>
                  <CardDescription className="text-sm">{tool.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0 text-center">
                  <Button 
                    variant="outline" 
                    className="border-blue-500 text-blue-600 hover:bg-blue-50"
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

