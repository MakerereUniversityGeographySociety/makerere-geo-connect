
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Map } from "lucide-react";

const maps = [
  {
    id: 1,
    title: "Mapping Nyamwamba River Catchment",
    description: "An in-depth map of the Nyamwamba River Catchment area, highlighting key geographical features and points of interest.",
    url: "https://www.google.com/maps/d/edit?mid=1T6RDIl4Jlbp4QSpA95tyV8KeM8l12gU&usp=sharing",
    thumbnail: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 2,
    title: "Kampala Urban Development",
    description: "Visualizing the urban sprawl and development patterns in Kampala over the last two decades.",
    url: "https://arcg.is/aT15m0",
    thumbnail: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 3,
    title: "Mabamba Wetland Biodiversity",
    description: "An interactive guide to the rich biodiversity of the Mabamba Wetland, a crucial Ramsar site.",
    url: "https://arcg.is/159W1W",
    thumbnail: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
   {
    id: 4,
    title: "Rwenzori Mountains National Park",
    description: "A detailed map showcasing the trails, peaks, and unique flora and fauna of the Rwenzori Mountains.",
    url: "https://www.google.com/maps/d/viewer?mid=1_h-a2J9f3D5eK_pG3nF6wX9R9cQ&hl=en_US",
    thumbnail: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

const ResourcesSection = () => {
  return (
    <section id="map-gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Map className="h-10 w-10 mx-auto mb-4 text-geo-green" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Map Gallery</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore compelling maps and models built by our students and members. Each map tells a unique geographic story.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default ResourcesSection;
