import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion } from "@/components/ui/accordion";
import { Database, Wrench, GraduationCap, FolderOpen } from "lucide-react";
import ResourceSection from "@/components/resources/spatial-toolkit/ResourceSection";
import { spatialResources } from "@/components/resources/spatial-toolkit/spatialResourcesData";

const SpatialToolkit = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-bold mb-4 text-geo-green-dark">Comprehensive Spatial Tool Kit</h1>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Explore our complete collection of GIS and Remote Sensing resources for spatial analysis, 
                data visualization, and geographic research. From data sources to software tools and learning materials.
              </p>
            </div>

            <Accordion type="multiple" defaultValue={["data-sources", "software-tools"]} className="w-full space-y-4">
              <ResourceSection
                value="data-sources"
                title="Data Sources"
                icon={<Database className="h-5 w-5 text-geo-green" />}
                resources={spatialResources.dataSources}
                badgeColor="bg-geo-green/20 text-geo-green-dark"
              />

              <ResourceSection
                value="software-tools"
                title="Software Tools"
                icon={<Wrench className="h-5 w-5 text-blue-600" />}
                resources={spatialResources.softwareTools}
                badgeColor="bg-blue-100 text-blue-800"
              />

              <ResourceSection
                value="learning-resources"
                title="Learning Resources"
                icon={<GraduationCap className="h-5 w-5 text-purple-600" />}
                resources={spatialResources.learningResources}
                badgeColor="bg-purple-100 text-purple-800"
              />

              <ResourceSection
                value="projects"
                title="Projects & Applications"
                icon={<FolderOpen className="h-5 w-5 text-orange-600" />}
                resources={spatialResources.projects}
                badgeColor="bg-orange-100 text-orange-800"
              />
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SpatialToolkit;