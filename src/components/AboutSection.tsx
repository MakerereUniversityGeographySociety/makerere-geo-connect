
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  // Mock committee members data
  const committeeMembers = [
    { name: "John Doe", position: "Chairperson", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Jane Smith", position: "Vice Chairperson", image: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: "Robert Johnson", position: "Secretary", image: "https://randomuser.me/api/portraits/men/2.jpg" },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About the Society</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-4">
                The Makerere University Geography Society aims to foster a community of geography enthusiasts, provide practical learning experiences, and connect students with industry professionals. We're committed to exploring our world through field trips, research, and community engagement.
              </p>
              <p className="text-gray-700">
                Our vision is to create well-rounded geography graduates equipped with both theoretical knowledge and practical skills to address real-world challenges in climate change, urban planning, environmental management, and social geography.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Committee Members</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {committeeMembers.map((member, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-square">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold">{member.name}</h4>
                        <p className="text-sm text-gray-600">{member.position}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          
          <div className="h-full flex items-center justify-center">
            <div className="aspect-video w-full h-auto rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Promo Video or Gallery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
