import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpenCheck, ExternalLink, Wrench, FolderKanban, Map } from "lucide-react";

const externalResources = [
  {
    title: "National Geographic",
    description: "A global leader in geography, cartography and exploration.",
    url: "https://www.nationalgeographic.com/",
  },
  {
    title: "Esri",
    description: "International supplier of geographic information system software.",
    url: "https://www.esri.com/",
  },
  {
    title: "Royal Geographical Society",
    description: "The UK's learned society and professional body for geography.",
    url: "https://www.rgs.org/",
  },
  {
    title: "OpenStreetMap",
    description: "A collaborative project to create a free editable map of the world.",
    url: "https://www.openstreetmap.org/",
  },
];

const gisToolKit = [
  {
    title: "QGIS",
    description: "A free and open-source cross-platform desktop geographic information system.",
    url: "https://qgis.org/",
  },
  {
    title: "ArcGIS Online",
    description: "A cloud-based mapping and analysis solution from Esri.",
    url: "https://www.arcgis.com/index.html",
  },
  {
    title: "Google Earth Engine",
    description: "A planetary-scale platform for Earth science data & analysis.",
    url: "https://earthengine.google.com/",
  },
  {
    title: "GRASS GIS",
    description: "A free and open source GIS software suite for geospatial data management.",
    url: "https://grass.osgeo.org/",
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {externalResources.map((resource) => (
                <Card key={resource.title} className="flex flex-col text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <p className="flex-grow mb-4 text-sm text-gray-600">{resource.description}</p>
                    <Button asChild size="sm" className="w-full bg-geo-green hover:bg-geo-green-dark">
                      <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        Visit Site <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="gis-toolkit" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {gisToolKit.map((tool) => (
                <Card key={tool.title} className="flex flex-col text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {maps.map((map) => (
                <Card key={map.id} className="flex flex-col overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
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
