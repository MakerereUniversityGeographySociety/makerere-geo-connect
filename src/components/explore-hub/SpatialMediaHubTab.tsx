
import { Button } from "@/components/ui/button";

const SpatialMediaHubTab = () => (
  <div className="flex justify-center items-center h-full px-4 py-6">
    <div className="max-w-xl w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      {/* Green Header */}
      <div className="flex items-center gap-3 bg-geo-green rounded-t-xl px-6 py-4">
        <img
          src="/lovable-uploads/c65dd880-d086-45ba-a929-b2edd133c4c4.png"
          alt="Spatial Media Hub Icon"
          className="w-10 h-10 rounded-full bg-white p-1 object-contain"
        />
        <h2 className="text-xl md:text-2xl font-bold text-white">Spatial Media Hub</h2>
      </div>
      {/* Card Image */}
      <div className="w-full h-48 bg-geo-green/10 flex justify-center items-center">
        <img
          src="/lovable-uploads/c65dd880-d086-45ba-a929-b2edd133c4c4.png"
          alt="Spatial Media Hub Illustration"
          className="object-contain h-32"
        />
      </div>
      {/* Description and buttons */}
      <div className="px-6 py-4 flex flex-col gap-4">
        <p className="text-gray-700 text-base text-center">
          Empowering educators, writers, social media content creators, mappers, developers, and other talents in our society to leverage mapping, GIS tools, and geospatial technologies for compelling geographic stories and active spatial problem solving.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            className="bg-geo-green hover:bg-geo-green-dark text-white w-full sm:w-auto"
            asChild
          >
            <a 
              href="https://chat.whatsapp.com/CQ0nVX7La5HL9eCCh3E74T"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Spatial Hub
            </a>
          </Button>
          <Button
            className="bg-geo-green/80 hover:bg-geo-green-dark text-white w-full sm:w-auto"
            asChild
          >
            <a 
              href="https://www.linkedin.com/showcase/spatial-media-hub/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Platform
            </a>
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default SpatialMediaHubTab;
