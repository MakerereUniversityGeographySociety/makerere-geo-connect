
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import ResourceCard from "./ResourceCard";

interface Resource {
  title: string;
  description: string;
  url: string;
  icon: string;
  tags: string[];
}

interface ResourceSectionProps {
  value: string;
  title: string;
  icon: React.ReactNode;
  resources: Resource[];
  badgeColor: string;
}

const ResourceSection = ({ value, title, icon, resources, badgeColor }: ResourceSectionProps) => (
  <AccordionItem value={value} className="border rounded-lg px-4">
    <AccordionTrigger className="hover:no-underline">
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-lg font-semibold">{title}</span>
        <Badge variant="secondary" className={badgeColor}>
          {resources.length} {resources.length === 1 ? 'resource' : 'resources'}
        </Badge>
      </div>
    </AccordionTrigger>
    <AccordionContent className="pt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((resource) => (
          <ResourceCard key={resource.title} resource={resource} />
        ))}
      </div>
    </AccordionContent>
  </AccordionItem>
);

export default ResourceSection;
