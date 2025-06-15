import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";

const PartnersSection = () => {
  const partners = [
    {
      id: 1,
      name: "Department of Geography Geo-Informatics and Climatic Sciences",
      logo: "/lovable-uploads/60a5ccaf-cd71-46be-8411-83f4dc63fc7c.png",
      website: "https://geography.mak.ac.ug/",
      description: "The academic home of geography studies at Makerere University, providing expertise and resources for geographical research and education."
    },
    {
      id: 2,
      name: "Geo Youth Mappers Makerere University",
      logo: "/lovable-uploads/4f1d3afc-ed78-4882-9bb9-b8885ca74ec9.png",
      description: "A student-led community that creates and uses open geospatial data for humanitarian and development purposes."
    },
    {
      id: 3,
      name: "Forestry Association of Makerere University",
      logo: "/lovable-uploads/0848f4c3-c31d-489c-83e6-2888cdbddeaf.png",
      description: "Promotes sustainable forestry practices and environmental conservation through education and community outreach."
    }
    // Removed the University Geographic Society as requested
  ];

  const [selectedPartner, setSelectedPartner] = useState(null);

  return (
    <section id="partners" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Collaborations</h2>
        
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {partners.map((partner) => (
            <Dialog key={partner.id}>
              <DialogTrigger asChild>
                {
                  partner.website ? (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => setSelectedPartner(partner)}
                      style={{ width: '200px', height: '200px' }}
                    >
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </a>
                  ) : (
                    <div 
                      className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => setSelectedPartner(partner)}
                      style={{ width: '200px', height: '200px' }}
                    >
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  )
                }
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>{partner.name}</DialogTitle>
                  <DialogDescription>
                    <div className="flex justify-center py-4">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="h-32 object-contain" 
                      />
                    </div>
                    <p className="text-center">{partner.description}</p>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-geo-green text-geo-green hover:bg-geo-green hover:text-white"
            asChild
          >
            <a
              href="https://forms.zohopublic.com/mugsuniversitygeographysocigm1/form/PartnershipInquiryForm/formperma/DSJ-r9ugUuCfQk2mZej5IVxXQCuFr9SzEw9ImRqul84"
              target="_blank"
              rel="noopener noreferrer"
            >
              Collaborate
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
