
import { Globe, Earth, Wind, ThermometerSnowflake, ThermometerSun, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const TOOLS = [
  {
    name: "Solar System Scope",
    icon: <Globe className="text-geo-green" />,
    url: "https://www.solarsystemscope.com/",
    description: "Explore our solar system in stunning 3D. View planets, moons, and more with interactive features.",
  },
  {
    name: "NASA Earth View",
    icon: <Earth className="text-blue-400" />,
    url: "https://worldview.earthdata.nasa.gov/",
    description: "Satellite imagery and data visualizations of Earth's surface direct from NASA.",
  },
  {
    name: "NASA Earth Live",
    icon: <ThermometerSun className="text-yellow-500" />,
    url: "https://eol.jsc.nasa.gov/esrs/hdev/",
    description: "Live stream: Watch the Earth from space in real-time, right from the International Space Station.",
  },
  {
    name: "NASA Eyes on Earth",
    icon: <Globe className="text-green-700" />,
    url: "https://eyes.nasa.gov/apps/earth",
    description: "Interactive NASA visualization of global environmental data and satellite tracking.",
  },
  {
    name: "Open Weather",
    icon: <Wind className="text-sky-500" />,
    url: "https://openweathermap.org/",
    description: "Access current weather, forecasts, and historical data for any location on Earth.",
  },
  {
    name: "Earth Null School (Global Wind Map)",
    icon: <Wind className="text-emerald-600" />,
    url: "https://earth.nullschool.net/",
    description: "Visual, animated map of global wind, weather, and ocean conditions in near real-time.",
  },
  {
    name: "Global Forest Watch",
    icon: <Earth className="text-lime-600" />,
    url: "https://www.globalforestwatch.org/",
    description: "Monitor global forests, track deforestation, fires, and forest health worldwide.",
  },
  {
    name: "Carbon Footprint",
    icon: <ThermometerSnowflake className="text-cyan-600" />,
    url: "https://www.carbonfootprint.com/calculator.aspx",
    description: "Calculate your carbon footprint and explore ways to reduce your environmental impact.",
  },
];

const EarthPulseHubTab = () => (
  <div className="flex justify-center items-center h-full px-4 py-6">
    <div className="max-w-xl w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      {/* Green Header */}
      <div className="flex items-center gap-3 bg-geo-green rounded-t-xl px-6 py-4">
        <img
          src="/lovable-uploads/75afb1e0-8fe0-499d-87d3-a78ffdfe94bc.png"
          alt="Earth Pulse Hub Icon"
          className="w-10 h-10 rounded-full bg-white p-1 object-contain"
          loading="lazy"
          decoding="async"
          width="40"
          height="40"
        />
        <h2 className="text-xl md:text-2xl font-bold text-white">Earth Pulse Hub</h2>
      </div>
      {/* Card Image */}
      <div className="w-full h-48 bg-blue-500/10 flex justify-center items-center">
        <img
          src="/lovable-uploads/f3671093-e7a1-4987-82e9-b6f891ee50bc.png"
          alt="Earth Pulse Illustration"
          className="object-contain h-40"
          loading="lazy"
          decoding="async"
          width="160"
          height="160"
        />
      </div>
      {/* Description */}
      <div className="px-6 pt-4 pb-2 flex flex-col gap-3">
        <p className="text-gray-700 text-base text-center">
          An engaging platform for monitoring and observing key geographical and environmental indicators.
          Access real-time data, satellite imagery, and interactive tools to understand our planet's vital signs.
        </p>
      </div>
      {/* Interactive Tools Dropdown */}
      <div className="px-6 pb-6">
        <div className="flex justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-geo-green hover:bg-geo-green-dark text-white flex items-center gap-2">
                Earth Pulse Tools
                <ChevronDown size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 max-h-96 overflow-y-auto bg-white border border-gray-200 shadow-lg">
              {TOOLS.map((tool) => (
                <DropdownMenuItem key={tool.name} className="p-0">
                  <div className="flex items-center gap-3 p-3 w-full">
                    <span className="flex-shrink-0">{tool.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-sm">{tool.name}</p>
                      <p className="text-xs text-gray-600 line-clamp-2">{tool.description}</p>
                    </div>
                    <Button
                      size="sm"
                      className="bg-geo-green hover:bg-geo-green-dark text-white text-xs px-2 py-1"
                      asChild
                    >
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Open
                      </a>
                    </Button>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  </div>
);

export default EarthPulseHubTab;
