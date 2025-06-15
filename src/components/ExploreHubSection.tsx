
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SpatialMediaHubTab from "./explore-hub/SpatialMediaHubTab";
import EarthPulseHubTab from "./explore-hub/EarthPulseHubTab";

const ExploreHubSection = () => {
  return (
    <section id="explore-hub" className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Hub</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our innovative platforms for spatial storytelling and environmental monitoring
          </p>
        </div>

        <Tabs defaultValue="spatial-media" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="spatial-media" className="text-lg py-3">
              Spatial Media Hub
            </TabsTrigger>
            <TabsTrigger value="earth-pulse" className="text-lg py-3">
              Earth Pulse Hub
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="spatial-media">
            <SpatialMediaHubTab />
          </TabsContent>
          
          <TabsContent value="earth-pulse">
            <EarthPulseHubTab />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ExploreHubSection;
