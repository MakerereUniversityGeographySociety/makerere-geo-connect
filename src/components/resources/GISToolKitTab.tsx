
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const gisToolKit = [
  {
    title: "Google Maps",
    description: "The world's most popular web mapping service with detailed satellite imagery and street maps.",
    url: "https://maps.google.com/",
    icon: "/lovable-uploads/ea02dd74-2a5e-402a-919f-4efcac44580e.png"
  },
  {
    title: "OpenStreetMap",
    description: "A collaborative project to create a free editable map of the world built by volunteers.",
    url: "https://www.openstreetmap.org/",
    icon: "/lovable-uploads/4908e795-c289-4c8c-b87c-8b50fee1d119.png"
  },
  {
    title: "AfricaGeoPortal",
    description: "A comprehensive geospatial data platform focused on African geographic information.",
    url: "https://www.africageoportal.com/",
    icon: "/lovable-uploads/2c5120dc-2f72-44f3-b604-f445ac40cf7a.png"
  },
  {
    title: "ArcGIS Online",
    description: "A cloud-based mapping and analysis solution from Esri for creating and sharing maps.",
    url: "https://www.arcgis.com/index.html",
    icon: "/lovable-uploads/15d14770-ff56-443d-9ed2-0af8776baf83.png"
  },
  {
    title: "HOT OpenStreetMap",
    description: "Humanitarian OpenStreetMap Team - mapping for disaster response and development.",
    url: "https://tasks.hotosm.org/",
    icon: "/lovable-uploads/e1714a40-a30f-493d-b88b-4b85f4e1267b.png"
  },
  {
    title: "Google Earth Engine",
    description: "A planetary-scale platform for Earth science data analysis and visualization.",
    url: "https://code.earthengine.google.com/",
    icon: "/lovable-uploads/689ace33-75b4-432a-923b-dea6a1c4ca76.png"
  },
  {
    title: "QGIS",
    description: "Open-source Geographic Information System (GIS) for mapping and spatial analysis.",
    url: "https://qgis.org/",
    icon: "/lovable-uploads/9e47b97e-4346-490e-bf14-9b75b4869ad8.png"
  },
  {
    title: "Cesium",
    description: "Platform for creating 3D geospatial applications and interactive globe visualization.",
    url: "https://cesium.com/",
    icon: "/lovable-uploads/007e42d3-7e93-4721-ade9-15953a500d39.png"
  }
];

const GISToolKitTab = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {gisToolKit.map((tool) => (
      <Card key={tool.title} className="flex flex-col text-center hover:shadow-lg transition-shadow">
        <CardHeader className="pb-4">
          <div className="flex justify-center mb-4">
            <img 
              src={tool.icon} 
              alt={`${tool.title} icon`} 
              className="w-16 h-16 object-contain"
            />
          </div>
          <CardTitle className="text-lg">{tool.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col flex-grow">
          <p className="flex-grow mb-4 text-sm text-gray-600">{tool.description}</p>
          <Button asChild size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
            <a href={tool.url} target="_blank" rel="noopener noreferrer">
              Explore Tool <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default GISToolKitTab;
