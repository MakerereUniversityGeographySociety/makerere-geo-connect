
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, UserCheck, Users } from "lucide-react";

const MembershipCard = ({
  title,
  subtitle,
  icon: Icon,
  benefits,
  price,
  priceDetail,
  buttonText,
  buttonLink
}: {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  benefits: string[];
  price: string;
  priceDetail: string;
  buttonText: string;
  buttonLink: string;
}) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-geo-green/10 p-3 rounded-full">
            <Icon className="text-geo-green h-8 w-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-500 text-sm">{subtitle}</p>
          </div>
        </div>
        
        <div className="space-y-3 mt-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="text-geo-green h-5 w-5 flex-shrink-0" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center bg-geo-green/5 py-4 rounded-lg">
          <p className="text-sm text-gray-600">{priceDetail}</p>
          <p className="text-3xl font-bold text-geo-green-dark">{price}</p>
          <p className="text-xs text-gray-500">Annual Subscription</p>
        </div>
        
        <div className="mt-6">
          <Button 
            className="w-full bg-geo-green hover:bg-geo-green-dark"
            asChild
          >
            <a href={buttonLink} target="_blank" rel="noopener noreferrer">
              {buttonText}
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const IdentificationCard = ({
  title,
  description,
  price,
  imageSrc
}: {
  title: string;
  description: string;
  price: string;
  imageSrc: string;
}) => {
  return (
    <Card>
      <CardContent className="flex items-center gap-6 p-6">
        <div className="relative flex-shrink-0">
          <div className="h-32 w-32 overflow-hidden rounded-lg">
            <img 
              src={imageSrc} 
              alt={title}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div>
          <h4 className="font-bold">{title}</h4>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
          <p className="text-lg font-bold text-geo-green-dark mt-2">{price}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const CompletePackage = () => {
  return (
    <div className="mt-8 bg-geo-green-dark text-white p-6 rounded-lg max-w-xl mx-auto text-center">
      <h3 className="font-bold text-xl">Complete Package</h3>
      <p className="mb-2">Basic subscription + T-shirt + ID Card</p>
      <div className="text-3xl font-bold">UGX 40,000</div>
      <p className="text-sm mt-1 text-white/70">Best value for new members</p>
      <Button 
        className="mt-4 bg-white text-geo-green-dark hover:bg-gray-100"
        asChild
      >
        <a href="https://form.jotform.com/251356740625053" target="_blank" rel="noopener noreferrer">
          Get Complete Package
        </a>
      </Button>
    </div>
  );
};

const MembershipTab = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <MembershipCard
          title="New Membership"
          subtitle="For first-time members"
          icon={Users}
          benefits={[
            "Registration to society database",
            "Access to all society activities",
            "Preferential rates for society events"
          ]}
          price="UGX 15,000"
          priceDetail="Basic Membership"
          buttonText="Register Now"
          buttonLink="https://form.jotform.com/251344966214054"
        />
        
        <MembershipCard
          title="Continuing Membership"
          subtitle="For existing members"
          icon={UserCheck}
          benefits={[
            "Annual renewal of membership",
            "Continued access to society resources",
            "Member-only networking events"
          ]}
          price="UGX 3,000"
          priceDetail="Renewal Fee"
          buttonText="Renew Now"
          buttonLink="https://form.jotform.com/251344966214054"
        />
      </div>
      
      <div className="mt-12">
        <h3 className="text-xl font-bold mb-6 text-center">Membership Identification</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <IdentificationCard
            title="Society T-shirt"
            description="Official MUGS branded t-shirt"
            price="UGX 25,000"
            imageSrc="/lovable-uploads/48fc8f02-e47f-4fb1-8ffd-fd8774d44a7b.png"
          />
          
          <IdentificationCard
            title="Society ID Card"
            description="Official member identification card"
            price="UGX 15,000"
            imageSrc="/lovable-uploads/3f0a9420-6fe2-46c1-a17d-db3916896c70.png"
          />
        </div>
        
        <CompletePackage />
      </div>
    </div>
  );
};

export default MembershipTab;
