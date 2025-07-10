
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Globe, Map, Search } from "lucide-react";
import { Link } from "react-router-dom";

const SpatialToolKitTab = () => {
  const essentialTools = [
    {
      title: "Google Maps",
      description: "Web-based mapping service with satellite imagery, street maps, and real-time traffic information. Perfect for basic location services and visualization.",
      url: "https://maps.google.com",
      icon: <Globe className="h-8 w-8 text-blue-600" />
    },
    {
      title: "ArcGIS Online",
      description: "Cloud-based GIS platform for creating, sharing, and analyzing maps and spatial data. Industry-standard tool for professional GIS work.",
      url: "https://www.arcgis.com",
      icon: <Map className="h-8 w-8 text-green-600" />
    },
    {
      title: "Overpass turbo",
      description: "Web-based query tool for OpenStreetMap data. Powerful for extracting specific geographic data and performing spatial queries.",
      url: "https://overpass-turbo.eu",
      icon: <Search className="h-8 w-8 text-orange-600" />
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold mb-3 text-geo-green-dark">Essential Spatial Tools</h3>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Get started with these three essential tools for spatial analysis and mapping. 
          Perfect for beginners and professionals alike.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {essentialTools.map((tool, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="text-center">
              <div className="mx-auto mb-2">
                {tool.icon}
              </div>
              <CardTitle className="text-lg">{tool.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="mb-4 text-sm">
                {tool.description}
              </CardDescription>
              <Button asChild className="w-full">
                <a href={tool.url} target="_blank" rel="noopener noreferrer">
                  Open Tool <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Card className="border-2 border-geo-green/20 bg-geo-green/5">
          <CardContent className="p-6">
            <h4 className="text-xl font-semibold mb-2 text-geo-green-dark">Need More Tools?</h4>
            <p className="text-gray-600 mb-4">
              Explore our comprehensive collection of 50+ GIS tools, data sources, learning resources, and project examples.
            </p>
            <Button asChild size="lg" className="bg-geo-green hover:bg-geo-green/90">
              <Link to="/spatial-toolkit">
                Explore More Tools <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SpatialToolKitTab;
