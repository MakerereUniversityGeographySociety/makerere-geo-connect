import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpenCheck, ExternalLink, Wrench, FolderKanban, Map, Book } from "lucide-react";

const externalResources = [
  {
    title: "Academic Resources Hub",
    description: "Comprehensive repository of academic papers, books, and educational resources",
    url: "https://geo-vault-hub-connect.lovable.app/",
    icon: "book",
    buttonText: "Visit Resource"
  },
  {
    title: "Story Maps",
    description: "Interactive geographic stories created by our members",
    url: "/story-maps",
    icon: "map",
    buttonText: "View Resource"
  }
];

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

const maps = [
  {
    id: 1,
    title: "Mapping Nyamwamba River Catchment",
    description: "An in-depth map of the Nyamwamba River Catchment area, highlighting key geographical features and points of interest.",
    url: "https://www.google.com/maps/d/edit?mid=1T6RDIl4Jlbp4QSpA95tyV8KeM8l12gU&usp=sharing",
    thumbnail: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <FolderKanban className="h-10 w-10 mx-auto mb-4 text-geo-green" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Resource Hub</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access a curated list of external resources, GIS tools, and maps to support your learning and projects.
          </p>
        </div>
        
        <Tabs defaultValue="external-resources" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 max-w-2xl mx-auto bg-gray-100 rounded-full p-1 h-auto md:h-12">
            <TabsTrigger value="external-resources" className="data-[state=active]:bg-geo-green data-[state=active]:text-white rounded-full text-sm md:text-base">
              <BookOpenCheck className="mr-2 h-5 w-5" /> External Resources
            </TabsTrigger>
            <TabsTrigger value="gis-toolkit" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-full text-sm md:text-base">
              <Wrench className="mr-2 h-5 w-5" /> GIS Tool Kit
            </TabsTrigger>
            <TabsTrigger value="map-gallery" className="data-[state=active]:bg-geo-green data-[state=active]:text-white rounded-full text-sm md:text-base">
              <Map className="mr-2 h-5 w-5" /> Map Gallery
            </TabsTrigger>
          </TabsList>

          <TabsContent value="external-resources" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {externalResources.map((resource) => (
                <Card key={resource.title} className="flex flex-col text-center hover:shadow-lg transition-shadow overflow-hidden">
                  <CardHeader className="bg-geo-green text-white py-6">
                    <div className="flex justify-center mb-4">
                      {resource.icon === "book" ? (
                        <Book className="h-12 w-12" />
                      ) : (
                        <Map className="h-12 w-12" />
                      )}
                    </div>
                    <CardTitle className="text-xl text-white">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow p-6">
                    <p className="flex-grow mb-6 text-gray-600">{resource.description}</p>
                    <Button 
                      asChild 
                      size="lg" 
                      className="w-full bg-blue-900 hover:bg-blue-800 text-white"
                    >
                      <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        {resource.buttonText} <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="gis-toolkit" className="mt-8">
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
          </TabsContent>
          
          <TabsContent value="map-gallery" className="mt-8">
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              The Map Gallery displays the three best maps of the week from either the editorial team's Spatial Media Hub or society members' map works and projects.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {maps.map((map) => (
                <Card key={map.id} className="w-full max-w-md flex flex-col overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="aspect-video relative">
                    <img 
                      src={map.thumbnail} 
                      alt={map.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{map.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <CardDescription className="flex-grow mb-6">{map.description}</CardDescription>
                    <Button
                      onClick={() => window.open(map.url, "_blank", "noopener,noreferrer")}
                      className="w-full bg-geo-green hover:bg-geo-green-dark"
                    >
                      Explore Map <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ResourcesSection;
