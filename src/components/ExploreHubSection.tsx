
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
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          <SpatialMediaHubTab />
          <EarthPulseHubTab />
        </div>
      </div>
    </section>
  );
};

export default ExploreHubSection;

