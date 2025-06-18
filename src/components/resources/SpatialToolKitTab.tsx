
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ExternalLink, Database, Wrench, GraduationCap, FolderOpen } from "lucide-react";

const spatialResources = {
  dataSources: [
    {
      title: "Google Earth Engine",
      description: "A planetary-scale platform for Earth science data analysis and visualization with massive satellite imagery datasets.",
      url: "https://code.earthengine.google.com/",
      icon: "/lovable-uploads/689ace33-75b4-432a-923b-dea6a1c4ca76.png",
      tags: ["Remote Sensing", "Cloud Platform", "Free"]
    },
    {
      title: "Copernicus Open Access Hub",
      description: "Free access to Sentinel satellite data from the European Space Agency's Earth observation program.",
      url: "https://scihub.copernicus.eu/",
      icon: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=64&h=64&fit=crop&crop=center",
      tags: ["Satellite Data", "Free", "European"]
    },
    {
      title: "USGS EarthExplorer",
      description: "Access to Landsat, aerial photography, and other remote sensing data from the US Geological Survey.",
      url: "https://earthexplorer.usgs.gov/",
      icon: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=64&h=64&fit=crop&crop=center",
      tags: ["Landsat", "Free", "Historical Data"]
    },
    {
      title: "OpenStreetMap",
      description: "A collaborative project to create a free editable map of the world built by volunteers worldwide.",
      url: "https://www.openstreetmap.org/",
      icon: "/lovable-uploads/4908e795-c289-4c8c-b87c-8b50fee1d119.png",
      tags: ["Vector Data", "Free", "Community"]
    },
    {
      title: "Natural Earth",
      description: "Free vector and raster map data at multiple scales for cartographers, GIS practitioners, and educators.",
      url: "https://www.naturalearthdata.com/",
      icon: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=64&h=64&fit=crop&crop=center",
      tags: ["Cartography", "Free", "Vector"]
    },
    {
      title: "AfricaGeoPortal",
      description: "A comprehensive geospatial data platform focused on African geographic information and datasets.",
      url: "https://www.africageoportal.com/",
      icon: "/lovable-uploads/2c5120dc-2f72-44f3-b604-f445ac40cf7a.png",
      tags: ["Africa", "Regional", "Free"]
    }
  ],
  softwareTools: [
    {
      title: "QGIS",
      description: "Free and open-source Geographic Information System (GIS) software for mapping and spatial analysis.",
      url: "https://qgis.org/",
      icon: "/lovable-uploads/9e47b97e-4346-490e-bf14-9b75b4869ad8.png",
      tags: ["GIS", "Open Source", "Desktop"]
    },
    {
      title: "ArcGIS Online",
      description: "Cloud-based mapping and analysis solution from Esri for creating, sharing, and managing maps.",
      url: "https://www.arcgis.com/index.html",
      icon: "/lovable-uploads/15d14770-ff56-443d-9ed2-0af8776baf83.png",
      tags: ["Cloud", "Commercial", "Web"]
    },
    {
      title: "Google Maps Platform",
      description: "The world's most popular web mapping service with detailed satellite imagery and street maps.",
      url: "https://maps.google.com/",
      icon: "/lovable-uploads/ea02dd74-2a5e-402a-919f-4efcac44580e.png",
      tags: ["Web Maps", "API", "Commercial"]
    },
    {
      title: "SNAP (Sentinel Application Platform)",
      description: "Free toolbox for processing Sentinel satellite data from the European Space Agency.",
      url: "https://step.esa.int/main/toolboxes/snap/",
      icon: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=64&h=64&fit=crop&crop=center",
      tags: ["Remote Sensing", "Free", "Desktop"]
    },
    {
      title: "Cesium",
      description: "Platform for creating 3D geospatial applications and interactive globe visualization in web browsers.",
      url: "https://cesium.com/",
      icon: "/lovable-uploads/007e42d3-7e93-4721-ade9-15953a500d39.png",
      tags: ["3D", "Web", "Visualization"]
    },
    {
      title: "R with Spatial Packages",
      description: "Statistical computing environment with powerful packages for spatial data analysis and remote sensing.",
      url: "https://cran.r-project.org/web/views/Spatial.html",
      icon: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=64&h=64&fit=crop&crop=center",
      tags: ["Programming", "Statistics", "Free"]
    }
  ],
  learningResources: [
    {
      title: "GIS Lounge",
      description: "Comprehensive resource for GIS news, tutorials, and educational content for all skill levels.",
      url: "https://www.gislounge.com/",
      icon: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=64&h=64&fit=crop&crop=center",
      tags: ["Tutorials", "News", "Free"]
    },
    {
      title: "NASA Applied Remote Sensing Training",
      description: "Free online training materials and courses on remote sensing applications from NASA.",
      url: "https://arset.gsfc.nasa.gov/",
      icon: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=64&h=64&fit=crop&crop=center",
      tags: ["Training", "NASA", "Free"]
    },
    {
      title: "Coursera GIS Courses",
      description: "University-level courses on Geographic Information Systems and spatial analysis from top institutions.",
      url: "https://www.coursera.org/courses?query=gis",
      icon: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=64&h=64&fit=crop&crop=center",
      tags: ["Courses", "University", "Certification"]
    },
    {
      title: "QGIS Training Manual",
      description: "Official comprehensive training manual for learning QGIS from basic to advanced levels.",
      url: "https://docs.qgis.org/3.28/en/docs/training_manual/",
      icon: "/lovable-uploads/9e47b97e-4346-490e-bf14-9b75b4869ad8.png",
      tags: ["QGIS", "Manual", "Free"]
    }
  ],
  projects: [
    {
      title: "HOT OpenStreetMap",
      description: "Humanitarian OpenStreetMap Team - collaborative mapping for disaster response and development projects.",
      url: "https://tasks.hotosm.org/",
      icon: "/lovable-uploads/e1714a40-a30f-493d-b88b-4b85f4e1267b.png",
      tags: ["Humanitarian", "Crowdsourcing", "Volunteer"]
    },
    {
      title: "Global Forest Watch",
      description: "Real-time forest monitoring platform using satellite data to track deforestation and forest changes.",
      url: "https://www.globalforestwatch.org/",
      icon: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=64&h=64&fit=crop&crop=center",
      tags: ["Environment", "Monitoring", "Satellite"]
    },
    {
      title: "eBird",
      description: "Real-time, online bird checklist program that uses citizen science data for bird distribution mapping.",
      url: "https://ebird.org/",
      icon: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=64&h=64&fit=crop&crop=center",
      tags: ["Citizen Science", "Biodiversity", "Mapping"]
    }
  ]
};

const getTagColor = (tag: string) => {
  const tagColors: { [key: string]: string } = {
    "Free": "bg-green-100 text-green-800",
    "Commercial": "bg-blue-100 text-blue-800",
    "Open Source": "bg-purple-100 text-purple-800",
    "Remote Sensing": "bg-orange-100 text-orange-800",
    "GIS": "bg-geo-green/20 text-geo-green-dark",
    "Cloud": "bg-sky-100 text-sky-800",
    "Desktop": "bg-gray-100 text-gray-800",
    "Web": "bg-cyan-100 text-cyan-800",
    "API": "bg-indigo-100 text-indigo-800",
    "Training": "bg-yellow-100 text-yellow-800",
    "University": "bg-red-100 text-red-800",
    "Africa": "bg-amber-100 text-amber-800"
  };
  return tagColors[tag] || "bg-gray-100 text-gray-800";
};

const ResourceCard = ({ resource }: { resource: any }) => (
  <Card className="flex flex-col text-center hover:shadow-lg transition-all duration-200 hover:scale-105 h-full">
    <CardHeader className="pb-3">
      <div className="flex justify-center mb-3">
        <img 
          src={resource.icon} 
          alt={`${resource.title} icon`} 
          className="w-12 h-12 object-contain rounded"
        />
      </div>
      <CardTitle className="text-base leading-tight">{resource.title}</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col flex-grow pt-0">
      <p className="flex-grow mb-3 text-xs text-gray-600 leading-relaxed">{resource.description}</p>
      <div className="flex flex-wrap gap-1 mb-3 justify-center">
        {resource.tags.map((tag: string) => (
          <Badge key={tag} variant="secondary" className={`text-xs px-2 py-0.5 ${getTagColor(tag)}`}>
            {tag}
          </Badge>
        ))}
      </div>
      <Button asChild size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-xs">
        <a href={resource.url} target="_blank" rel="noopener noreferrer">
          Explore Tool <ExternalLink className="ml-1 h-3 w-3" />
        </a>
      </Button>
    </CardContent>
  </Card>
);

const SpatialToolKitTab = () => (
  <div className="max-w-6xl mx-auto">
    <div className="mb-8 text-center">
      <h3 className="text-2xl font-bold mb-3 text-geo-green-dark">Spatial Tool Kit</h3>
      <p className="text-gray-600 max-w-3xl mx-auto">
        Comprehensive collection of GIS and Remote Sensing resources for spatial analysis, 
        data visualization, and geographic research. From data sources to software tools and learning materials.
      </p>
    </div>

    <Accordion type="multiple" defaultValue={["data-sources", "software-tools"]} className="w-full space-y-4">
      <AccordionItem value="data-sources" className="border rounded-lg px-4">
        <AccordionTrigger className="hover:no-underline">
          <div className="flex items-center gap-3">
            <Database className="h-5 w-5 text-geo-green" />
            <span className="text-lg font-semibold">Data Sources</span>
            <Badge variant="secondary" className="bg-geo-green/20 text-geo-green-dark">
              {spatialResources.dataSources.length} resources
            </Badge>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {spatialResources.dataSources.map((resource) => (
              <ResourceCard key={resource.title} resource={resource} />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="software-tools" className="border rounded-lg px-4">
        <AccordionTrigger className="hover:no-underline">
          <div className="flex items-center gap-3">
            <Wrench className="h-5 w-5 text-blue-600" />
            <span className="text-lg font-semibold">Software Tools</span>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              {spatialResources.softwareTools.length} tools
            </Badge>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {spatialResources.softwareTools.map((resource) => (
              <ResourceCard key={resource.title} resource={resource} />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="learning-resources" className="border rounded-lg px-4">
        <AccordionTrigger className="hover:no-underline">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-5 w-5 text-purple-600" />
            <span className="text-lg font-semibold">Learning Resources</span>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              {spatialResources.learningResources.length} resources
            </Badge>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {spatialResources.learningResources.map((resource) => (
              <ResourceCard key={resource.title} resource={resource} />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="projects" className="border rounded-lg px-4">
        <AccordionTrigger className="hover:no-underline">
          <div className="flex items-center gap-3">
            <FolderOpen className="h-5 w-5 text-orange-600" />
            <span className="text-lg font-semibold">Projects & Applications</span>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">
              {spatialResources.projects.length} projects
            </Badge>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {spatialResources.projects.map((resource) => (
              <ResourceCard key={resource.title} resource={resource} />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);

export default SpatialToolKitTab;
