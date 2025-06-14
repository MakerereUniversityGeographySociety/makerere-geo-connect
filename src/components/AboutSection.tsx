
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  // Rearranged committee members: Patron comes first
  const committeeMembers = [
    { 
      name: "Dr. Nseka Denis", 
      position: "Patron", 
      image: "/lovable-uploads/b5660d25-3fe7-4b5e-b152-1c68f1dc0681.png" 
    },
    { 
      name: "Muyinza Joel Robert", 
      position: "President", 
      image: "/lovable-uploads/72c99286-a222-413e-a5e5-e42f28592344.png" 
    },
    { 
      name: "Asiimwe Joan", 
      position: "Vice President", 
      image: "/lovable-uploads/efe5a679-8ba4-4d63-a8b5-e804e1a983b1.png" 
    },
    { 
      name: "Tollo Titus Vanon", 
      position: "Speaker", 
      image: "/lovable-uploads/fcdf8b47-5a8a-4307-97d6-abc5629dbc3a.png" 
    },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About the Society</h2>
        
        <div className="mx-auto">
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
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
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
      </div>
    </section>
  );
};

export default AboutSection;
