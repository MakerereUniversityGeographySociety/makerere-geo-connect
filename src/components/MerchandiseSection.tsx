
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Shirt, Users, UserCheck } from "lucide-react";

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-geo-green/10 p-3 rounded-full">
                      <Users className="text-geo-green h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">New Membership</h3>
                      <p className="text-gray-500 text-sm">For first-time members</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mt-6">
                    <div className="flex items-center gap-2">
                      <Check className="text-geo-green h-5 w-5 flex-shrink-0" />
                      <span>Registration to society database</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="text-geo-green h-5 w-5 flex-shrink-0" />
                      <span>Access to all society activities</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="text-geo-green h-5 w-5 flex-shrink-0" />
                      <span>Preferential rates for society events</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center bg-geo-green/5 py-4 rounded-lg">
                    <p className="text-sm text-gray-600">Basic Membership</p>
                    <p className="text-3xl font-bold text-geo-green-dark">UGX 15,000</p>
                    <p className="text-xs text-gray-500">Annual Subscription</p>
                  </div>
                  
                  <div className="mt-6">
                    <Button className="w-full bg-geo-green hover:bg-geo-green-dark">Register Now</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-geo-green/10 p-3 rounded-full">
                      <UserCheck className="text-geo-green h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Continuing Membership</h3>
                      <p className="text-gray-500 text-sm">For existing members</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mt-6">
                    <div className="flex items-center gap-2">
                      <Check className="text-geo-green h-5 w-5 flex-shrink-0" />
                      <span>Annual renewal of membership</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="text-geo-green h-5 w-5 flex-shrink-0" />
                      <span>Continued access to society resources</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="text-geo-green h-5 w-5 flex-shrink-0" />
                      <span>Member-only networking events</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center bg-geo-green/5 py-4 rounded-lg">
                    <p className="text-sm text-gray-600">Renewal Fee</p>
                    <p className="text-3xl font-bold text-geo-green-dark">UGX 10,000</p>
                    <p className="text-xs text-gray-500">Annual Subscription</p>
                  </div>
                  
                  <div className="mt-6">
                    <Button className="w-full bg-geo-green hover:bg-geo-green-dark">Renew Now</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6 text-center">Membership Extras</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="flex items-center gap-6 p-6">
                    <div className="relative flex-shrink-0">
                      <div className="h-32 w-32 overflow-hidden rounded-lg">
                        <img 
                          src="/lovable-uploads/48fc8f02-e47f-4fb1-8ffd-fd8774d44a7b.png" 
                          alt="Society T-shirt"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="absolute top-2 right-2 bg-geo-green text-white text-xs py-1 px-2 rounded">
                        Optional
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold">Society T-shirt</h4>
                      <p className="text-sm text-gray-600 mt-1">Official MUGS branded t-shirt</p>
                      <p className="text-lg font-bold text-geo-green-dark mt-2">UGX 25,000</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="flex items-center gap-6 p-6">
                    <div className="relative flex-shrink-0">
                      <div className="h-32 w-32 overflow-hidden rounded-lg">
                        <img 
                          src="/lovable-uploads/3f0a9420-6fe2-46c1-a17d-db3916896c70.png" 
                          alt="Society ID Card"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="absolute top-2 right-2 bg-geo-green text-white text-xs py-1 px-2 rounded">
                        Optional
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold">Society ID Card</h4>
                      <p className="text-sm text-gray-600 mt-1">Official member identification card</p>
                      <p className="text-lg font-bold text-geo-green-dark mt-2">UGX 15,000</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8 bg-geo-green-dark text-white p-6 rounded-lg max-w-xl mx-auto text-center">
                <h3 className="font-bold text-xl">Complete Package</h3>
                <p className="mb-2">Basic subscription + T-shirt + ID Card</p>
                <div className="text-3xl font-bold">UGX 55,000</div>
                <p className="text-sm mt-1 text-white/70">Best value for new members</p>
                <Button className="mt-4 bg-white text-geo-green-dark hover:bg-gray-100">
                  Get Complete Package
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="merchandise" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* T-shirt Card */}
              <Card>
                <CardContent className="pt-6">
                  <div className="aspect-square mb-4 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/48fc8f02-e47f-4fb1-8ffd-fd8774d44a7b.png" 
                      alt="Society T-shirt"
                      className="object-contain max-h-full max-w-full"
                    />
                  </div>
                  <h3 className="font-bold text-lg">MUGS Society T-shirt</h3>
                  <p className="text-sm text-gray-600 mb-4">White polo with green collar and society logo</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-geo-green-dark">UGX 25,000</span>
                    <Button size="sm">Order Now</Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* ID Card Card */}
              <Card>
                <CardContent className="pt-6">
                  <div className="aspect-square mb-4 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/3f0a9420-6fe2-46c1-a17d-db3916896c70.png" 
                      alt="Society ID Card"
                      className="object-contain max-h-full max-w-full"
                    />
                  </div>
                  <h3 className="font-bold text-lg">Member ID Card</h3>
                  <p className="text-sm text-gray-600 mb-4">Official identification for members</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-geo-green-dark">UGX 15,000</span>
                    <Button size="sm">Order Now</Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Notebook Card */}
              <Card>
                <CardContent className="pt-6">
                  <div className="aspect-square mb-4 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
                    <Shirt className="h-24 w-24 text-geo-green opacity-70" />
                  </div>
                  <h3 className="font-bold text-lg">MUGS Branded Notebook</h3>
                  <p className="text-sm text-gray-600 mb-4">Field notebook with society branding</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-geo-green-dark">UGX 10,000</span>
                    <Button size="sm">Order Now</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-sm text-gray-500 mb-4">
                Contact the Merchandise Officer for bulk orders or custom items
              </p>
              <Button variant="outline" className="border-geo-green text-geo-green hover:bg-geo-green/10">
                Contact for Merchandise
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MerchandiseSection;
