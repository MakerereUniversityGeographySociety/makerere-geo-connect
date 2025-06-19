
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface Resource {
  title: string;
  description: string;
  url: string;
  icon: string;
  tags: string[];
}

interface ResourceCardProps {
  resource: Resource;
}

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
    "Africa": "bg-amber-100 text-amber-800",
    "Web Mapping": "bg-teal-100 text-teal-800",
    "JavaScript": "bg-yellow-100 text-yellow-800",
    "Mobile-Friendly": "bg-green-100 text-green-800",
    "Vector Maps": "bg-blue-100 text-blue-800",
    "Interactive": "bg-purple-100 text-purple-800",
    "Multi-format": "bg-gray-100 text-gray-800",
    "Spatial Database": "bg-indigo-100 text-indigo-800",
    "PostgreSQL": "bg-blue-100 text-blue-800",
    "SQL": "bg-gray-100 text-gray-800",
    "SQLite": "bg-green-100 text-green-800",
    "Lightweight": "bg-lime-100 text-lime-800",
    "NoSQL": "bg-orange-100 text-orange-800",
    "Geospatial Indexing": "bg-cyan-100 text-cyan-800",
    "Sandbox": "bg-pink-100 text-pink-800",
    "Visualization": "bg-purple-100 text-purple-800",
    "Code Editor": "bg-gray-100 text-gray-800",
    "Community": "bg-green-100 text-green-800",
    "Cloud IDE": "bg-blue-100 text-blue-800",
    "GitHub": "bg-gray-100 text-gray-800",
    "Development": "bg-indigo-100 text-indigo-800",
    "Open Course": "bg-green-100 text-green-800",
    "Spatial Analysis": "bg-geo-green/20 text-geo-green-dark",
    "Tutorials": "bg-yellow-100 text-yellow-800",
    "Programming": "bg-indigo-100 text-indigo-800",
    "Python": "bg-blue-100 text-blue-800"
  };
  return tagColors[tag] || "bg-gray-100 text-gray-800";
};

const ResourceCard = ({ resource }: ResourceCardProps) => (
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

export default ResourceCard;
