
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ExternalLink, ChevronDown } from "lucide-react";

const storyMaps = [
  {
    title: "Field Study Trip to Mabamba Wetland",
    description: "An interactive map detailing our field study trip to the Mabamba Wetland, a key Ramsar site, highlighting biodiversity and conservation efforts.",
    url: "https://arcg.is/159W1W"
  },
  {
    title: "Weekly Story Map",
    description: "Our featured story map of the week. This edition explores cases of Human Wildlife Conflict, Disease Outbreak and humanitarian crises within Eastern Africa",
    url: "https://arcg.is/aT15m0"
  },
  {
    title: "Environmental Conservation Initiative",
    description: "Mapping conservation efforts across Uganda's national parks and protected areas, showcasing biodiversity hotspots and conservation strategies.",
    url: "#"
  },
  {
    title: "Climate Change Impact Assessment",
    description: "Interactive visualization of climate change effects on East African ecosystems, agriculture, and water resources over the past decade.",
    url: "#"
  },
  {
    title: "Urban Development Patterns",
    description: "Analyzing urban sprawl and development patterns in major East African cities using satellite imagery and GIS data.",
    url: "#"
  }
];

const StoryMapsDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          size="sm" 
          className="w-full bg-blue-900 hover:bg-blue-800 text-white text-sm py-2"
        >
          View Resource <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 bg-white border shadow-lg z-50 p-0">
        <div className="p-3 border-b">
          <p className="text-xs text-gray-600 leading-relaxed">
            Explore interactive story maps created by Makerere University Geography Society members to visualize geographical data and present compelling narratives about our environment, Conservation, Education and Sustainability
          </p>
        </div>
        <ScrollArea className="max-h-80 overflow-y-auto">
          <div className="p-2 space-y-1">
            {storyMaps.map((storyMap, index) => (
              <DropdownMenuItem key={index} className="p-0 focus:bg-gray-50 rounded-md">
                <div className="w-full p-3 space-y-2">
                  <h4 className="font-medium text-sm text-gray-900">{storyMap.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{storyMap.description}</p>
                  <Button
                    size="sm"
                    className="w-full bg-geo-green hover:bg-geo-green-dark text-white text-xs py-1.5"
                    onClick={() => window.open(storyMap.url, "_blank", "noopener,noreferrer")}
                  >
                    View Story <ExternalLink className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </DropdownMenuItem>
            ))}
          </div>
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default StoryMapsDropdown;
