
import { Button } from "@/components/ui/button";

const EarthPulseHubTab = () => (
  <div className="flex justify-center items-center h-full px-4 py-6">
    <div className="max-w-xl w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      {/* Green Header */}
      <div className="flex items-center gap-3 bg-geo-green rounded-t-xl px-6 py-4">
        <img
          src="/lovable-uploads/75afb1e0-8fe0-499d-87d3-a78ffdfe94bc.png"
          alt="Earth Pulse Hub Icon"
          className="w-10 h-10 rounded-full bg-white p-1 object-contain"
        />
        <h2 className="text-xl md:text-2xl font-bold text-white">Earth Pulse Hub</h2>
      </div>
      {/* Card Image */}
      <div className="w-full h-48 bg-blue-500/10 flex justify-center items-center">
        <img
          src="/lovable-uploads/f3671093-e7a1-4987-82e9-b6f891ee50bc.png"
          alt="Earth Pulse Illustration"
          className="object-contain h-40"
        />
      </div>
      {/* Description and button */}
      <div className="px-6 py-4 flex flex-col gap-4">
        <p className="text-gray-700 text-base text-center">
          An engaging platform for monitoring and observing key geographical and environmental indicators.
          Access real-time data, satellite imagery, and interactive tools to understand our planet's vital signs.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            className="bg-geo-green hover:bg-geo-green-dark text-white w-full sm:w-auto"
            asChild
          >
            <a
              href="https://www.solarsystemscope.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Tools
            </a>
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default EarthPulseHubTab;

