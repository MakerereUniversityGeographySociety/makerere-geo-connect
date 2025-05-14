
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, FileText, Video } from "lucide-react";

const ResourcesSection = () => {
  const resources = {
    documents: [
      {
        id: 1,
        title: "Introduction to GIS",
        type: "PDF",
        size: "2.4 MB",
        description: "Beginner's guide to Geographic Information Systems",
        category: "GIS"
      },
      {
        id: 2,
        title: "Field Research Methods",
        type: "PDF",
        size: "3.1 MB",
        description: "Comprehensive guide to geographical field research techniques",
        category: "Fieldwork"
      },
      {
        id: 3,
        title: "Climate Data Analysis",
        type: "XLSX",
        size: "1.8 MB",
        description: "Spreadsheet templates for analyzing climate data",
        category: "Climate"
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
    ],
    toolkits: [
      {
        id: 1,
        title: "Map Reading Toolkit",
        description: "Resources to help develop map reading skills",
        items: 5
      },
      {
        id: 2,
        title: "Climate Research Kit",
        description: "Tools and templates for climate data collection",
        items: 4
      }
    ]
  };

  return (
    <section id="resources" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Resources</h2>
        
        <Tabs defaultValue="documents" className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="toolkits">Toolkits</TabsTrigger>
          </TabsList>
          
          <TabsContent value="documents">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.documents.map((doc) => (
                <Card key={doc.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{doc.title}</CardTitle>
                      <span className="bg-gray-100 text-gray-600 text-xs py-1 px-2 rounded">{doc.type}</span>
                    </div>
                    <CardDescription>{doc.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-gray-500">{doc.size}</span>
                        <span className="ml-2 bg-geo-blue-light text-geo-blue-dark text-xs py-1 px-2 rounded-full">{doc.category}</span>
                      </div>
                      <Button size="sm" variant="outline" className="flex items-center gap-1">
                        <Download size={16} />
                        <span>Download</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resources.videos.map((video) => (
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
          </TabsContent>
          
          <TabsContent value="toolkits">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resources.toolkits.map((toolkit) => (
                <Card key={toolkit.id}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="bg-geo-earth-light p-3 rounded-full">
                        <FileText className="text-geo-earth-dark" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{toolkit.title}</CardTitle>
                        <CardDescription>{toolkit.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{toolkit.items} resources included</span>
                      <Button size="sm" className="bg-geo-earth hover:bg-geo-earth-dark">
                        Access Toolkit
                      </Button>
                    </div>
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
