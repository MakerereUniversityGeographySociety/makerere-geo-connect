
import { FolderKanban } from "lucide-react";

const ResourceHubHeader = () => (
  <div className="text-center mb-12">
    <FolderKanban className="h-10 w-10 mx-auto mb-4 text-geo-green" />
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Resource Hub</h2>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
      Access a curated list of external resources, GIS tools, and maps to support your learning and projects.
    </p>
  </div>
);

export default ResourceHubHeader;
