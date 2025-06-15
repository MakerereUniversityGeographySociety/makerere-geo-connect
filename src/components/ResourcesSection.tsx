
// This file is now refactored to use smaller components.

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResourceHubHeader from "./resources/ResourceHubHeader";
import ExternalResourcesTab from "./resources/ExternalResourcesTab";
import GISToolKitTab from "./resources/GISToolKitTab";
import MapGalleryTab from "./resources/MapGalleryTab";
import { BookOpenCheck, Wrench, Map } from "lucide-react";

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <ResourceHubHeader />

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
            <ExternalResourcesTab />
          </TabsContent>
          <TabsContent value="gis-toolkit" className="mt-8">
            <GISToolKitTab />
          </TabsContent>
          <TabsContent value="map-gallery" className="mt-8">
            <MapGalleryTab />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ResourcesSection;
