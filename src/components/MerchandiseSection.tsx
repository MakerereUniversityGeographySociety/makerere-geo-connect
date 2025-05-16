
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MembershipTab from "./merchandise/MembershipTab";
import MerchandiseTab from "./merchandise/MerchandiseTab";

const MerchandiseSection = () => {
  return (
    <section id="merchandise" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Merchandise & Membership</h2>
        
        <Tabs defaultValue="membership" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="membership">Membership</TabsTrigger>
            <TabsTrigger value="merchandise">Merchandise</TabsTrigger>
          </TabsList>
          
          <TabsContent value="membership" className="mt-6">
            <MembershipTab />
          </TabsContent>
          
          <TabsContent value="merchandise" className="mt-6">
            <MerchandiseTab />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MerchandiseSection;
