
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, FileText, Video, ExternalLink, Camera, Globe, Map, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const ResourcesSection = () => {
  const resources = {
    gallery: {
      photos: [
        {
          id: 1,
          title: "Field Research Team",
          description: "Our students conducting field research at Lake Victoria",
          thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
          id: 2,
          title: "Mapping Workshop",
          description: "Students learning advanced mapping techniques",
          thumbnail: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
          id: 3,
          title: "Geography Seminar",
          description: "Annual geography symposium presentation",
          thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
      ],
      videos: [
        {
          id: 1,
          title: "Mapmaking Tutorial",
          duration: "24:15",
          description: "Step-by-step guide to creating professional maps",
          thumbnail: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
          id: 2,
          title: "Field Trip Highlights",
          duration: "15:42",
          description: "Footage from our recent expedition to Lake Victoria",
          thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
      ]
    },
    toolkits: [
      {
        id: 1,
        title: "Google Maps",
        description: "Comprehensive mapping and navigation platform for location-based research",
        url: "https://maps.google.com/",
        icon: "/lovable-uploads/85a3639a-c758-40d9-8a7c-ccdee97b587e.png",
        category: "Navigation & Mapping"
      },
      {
        id: 2,
        title: "OpenStreetMap",
        description: "Free, editable map of the world built by a community of volunteers",
        url: "https://www.openstreetmap.org/",
        icon: "/lovable-uploads/751d3105-28e4-45ea-8a33-15b346902cea.png",
        category: "Open Source Mapping"
      },
      {
        id: 3,
        title: "Africa Geoportal",
        description: "Comprehensive geographic data and mapping services for Africa",
        url: "https://www.africageoportal.com/",
        icon: "/lovable-uploads/56dddc3f-d877-48a1-9cd2-ab37ccca44ef.png",
        category: "Regional Data"
      },
      {
        id: 4,
        title: "ArcGIS Online",
        description: "Professional GIS software for creating, analyzing, and sharing maps",
        url: "https://www.arcgis.com/index.html",
        icon: "/lovable-uploads/32ab7948-ab45-4553-becd-953ac415a309.png",
        category: "Professional GIS"
      },
      {
        id: 5,
        title: "HOT Tasking Manager",
        description: "Coordinate mapping activities for humanitarian response and development",
        url: "https://tasks.hotosm.org/",
        icon: "/lovable-uploads/bcb76699-fe4c-4c58-89c0-26641c35cc99.png",
        category: "Humanitarian Mapping"
      },
      {
        id: 6,
        title: "Google Earth Engine",
        description: "Cloud-based platform for planetary-scale geospatial analysis",
        url: "https://code.earthengine.google.com/",
        icon: "/lovable-uploads/0fb902de-459a-4ba1-b12a-17556d7ae9eb.png",
        category: "Satellite Analysis"
      }
    ],
    external: [
      {
        id: 1,
        title: "Academic Resources Hub",
        description: "Comprehensive repository of academic papers, books, and educational resources",
        url: "https://geo-vault-hub-connect.lovable.app/",
        icon: "📚"
      },
      {
        id: 2,
        title: "Story Maps",
        description: "Interactive geographic stories created by our members",
        url: "/story-maps",
        icon: "🗺️"
      }
    ]
  };

  return (
    <section id="resources" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Resources</h2>
        
        <Tabs defaultValue="external" className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="external">External Resources</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="toolkits">GIS Toolkits</TabsTrigger>
          </TabsList>
          
          <TabsContent value="external">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resources.external.map((resource) => (
                <Card key={resource.id} className="overflow-hidden transition-all hover:shadow-md">
                  <CardHeader className="bg-geo-green-dark text-white">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl">{resource.title}</CardTitle>
                      <div className="text-4xl">{resource.icon}</div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <CardDescription className="text-base mb-6">{resource.description}</CardDescription>
                    {resource.url.startsWith('http') ? (
                      <Button 
                        className="w-full" 
                        onClick={() => window.open(resource.url, '_blank')}
                      >
                        Visit Resource <ExternalLink size={16} className="ml-2" />
                      </Button>
                    ) : (
                      <Button className="w-full" asChild>
                        <Link to={resource.url}>
                          View Resource <ExternalLink size={16} className="ml-2" />
                        </Link>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="gallery">
            <div className="space-y-12">
              {/* Photos Section */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Camera className="text-geo-green" />
                  Photos
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resources.gallery.photos.map((photo) => (
                    <Card key={photo.id} className="overflow-hidden">
                      <div className="aspect-video relative">
                        <img 
                          src={photo.thumbnail} 
                          alt={photo.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{photo.title}</CardTitle>
                        <CardDescription>{photo.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Videos Section */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Video className="text-geo-green" />
                  Videos
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {resources.gallery.videos.map((video) => (
                    <Card key={video.id} className="overflow-hidden">
                      <div className="aspect-video relative">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                            <Video className="text-geo-green" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs py-1 px-2 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{video.title}</CardTitle>
                        <CardDescription>{video.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="toolkits">
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2">
                  <Map className="text-geo-green" />
                  Professional GIS Toolkits
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Essential GIS tools and platforms for geographic analysis, mapping, and spatial data visualization
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.toolkits.map((toolkit) => (
                  <Card key={toolkit.id} className="overflow-hidden transition-all hover:shadow-lg hover:scale-105">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                        <img 
                          src={toolkit.icon} 
                          alt={toolkit.title} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <CardTitle className="text-lg">{toolkit.title}</CardTitle>
                      <span className="inline-block bg-geo-blue-light text-geo-blue-dark text-xs py-1 px-3 rounded-full">
                        {toolkit.category}
                      </span>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-sm mb-4">{toolkit.description}</CardDescription>
                      <Button 
                        className="w-full bg-geo-green hover:bg-geo-green-dark"
                        onClick={() => window.open(toolkit.url, '_blank')}
                      >
                        Launch Tool <ExternalLink size={16} className="ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ResourcesSection;
