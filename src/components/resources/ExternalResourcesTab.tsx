
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, Map, ExternalLink } from "lucide-react";

const externalResources = [
  {
    title: "Academic Resources Hub",
    description: "Comprehensive repository of academic papers, books, and educational resources",
    url: "https://geo-vault-hub-connect.lovable.app/",
    icon: "book",
    buttonText: "Visit Resource"
  },
  {
    title: "Story Maps",
    description: "Interactive geographic stories created by our members",
    url: "/story-maps",
    icon: "map",
    buttonText: "View Resource"
  }
];

const ExternalResourcesTab = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
    {externalResources.map((resource) => (
      <Card
        key={resource.title}
        className="flex flex-col text-center hover:shadow-lg transition-shadow overflow-hidden max-w-[330px] mx-auto"
      >
        <CardHeader className="bg-geo-green text-white py-3 px-3">
          <div className="flex justify-center mb-2">
            {resource.icon === "book" ? (
              <Book className="h-8 w-8" />
            ) : (
              <Map className="h-8 w-8" />
            )}
          </div>
          <CardTitle className="text-base text-white">{resource.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col flex-grow p-4">
          <p className="flex-grow mb-4 text-gray-600 text-sm">{resource.description}</p>
          <Button 
            asChild 
            size="sm" 
            className="w-full bg-blue-900 hover:bg-blue-800 text-white text-sm py-2"
          >
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.buttonText} <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default ExternalResourcesTab;
