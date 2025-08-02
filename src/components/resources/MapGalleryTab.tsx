
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const maps = [
  {
    id: 1,
    title: "Mapping Nyamwamba River Catchment",
    description: "An in-depth map of the Nyamwamba River Catchment area, highlighting key geographical features and points of interest.",
    url: "https://www.google.com/maps/d/edit?mid=1T6RDIl4Jlbp4QSpA95tyV8KeM8l12gU&usp=sharing",
    thumbnail: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

const MapGalleryTab = () => (
  <>
    <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
      The Map Gallery displays the three best maps of the week from either the editorial team's Spatial Media Hub or society members' map works and projects.
    </p>
    <div className="flex flex-wrap justify-center gap-8">
      {maps.map((map) => (
        <Card key={map.id} className="w-full max-w-md flex flex-col overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
          <div className="relative w-full max-h-44 overflow-hidden">
            <img 
              src={map.thumbnail} 
              alt={map.title} 
              className="w-full object-cover object-center"
              style={{ maxHeight: '11rem', minHeight: '9rem', height: '100%' }}
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
  </>
);

export default MapGalleryTab;
