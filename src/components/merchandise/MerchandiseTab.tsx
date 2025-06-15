
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  imageSrc: string | React.ReactNode;
  formLink: string;
}

const ProductCard = ({ name, description, price, imageSrc, formLink }: ProductCardProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="aspect-square mb-4 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
          {typeof imageSrc === 'string' ? (
            <img 
              src={imageSrc} 
              alt={name}
              className="object-contain max-h-full max-w-full"
            />
          ) : (
            imageSrc
          )}
        </div>
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-geo-green-dark">{price}</span>
          <Button size="sm" asChild>
            <a href={formLink} target="_blank" rel="noopener noreferrer">
              Order Now
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const MerchandiseTab = () => {
  const products = [
    {
      name: "MUGS Society T-shirt",
      description: "White polo with green collar and society logo",
      price: "UGX 25,000",
      imageSrc: "/lovable-uploads/48fc8f02-e47f-4fb1-8ffd-fd8774d44a7b.png",
      formLink: "https://form.jotform.com/251344966214054"
    },
    {
      name: "Member ID Card",
      description: "Official identification for members",
      price: "UGX 15,000",
      imageSrc: "/lovable-uploads/3f0a9420-6fe2-46c1-a17d-db3916896c70.png",
      formLink: "https://form.jotform.com/251344966214054"
    }
  ];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <ProductCard 
            key={index}
            name={product.name}
            description={product.description}
            price={product.price}
            imageSrc={product.imageSrc}
            formLink={product.formLink}
          />
        ))}
      </div>
    </div>
  );
};

export default MerchandiseTab;

