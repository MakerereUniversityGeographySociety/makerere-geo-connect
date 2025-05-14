
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const MerchandiseSection = () => {
  const { toast } = useToast();
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    item: '',
    quantity: 1,
    size: 'M',
    paymentMethod: 'mobile_money'
  });

  const merchandise = [
    {
      id: 1,
      name: "Society T-Shirt",
      price: 25000,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "100% cotton t-shirt with Geography Society logo"
    },
    {
      id: 2,
      name: "Society ID",
      price: 15000,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Official society ID card for members"
    },
    {
      id: 3,
      name: "New Membership",
      price: 15000,
      image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "New student membership subscription"
    },
    {
      id: 4,
      name: "Continuing Membership",
      price: 3000,
      image: "https://images.unsplash.com/photo-1606293459339-aa5528b43061?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Membership renewal for continuing students"
    }
  ];

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate mock invoice number
    const invoiceNumber = `INV-${Math.floor(Math.random() * 10000)}`;
    
    toast({
      title: "Order Submitted!",
      description: `Your order has been received. Invoice #${invoiceNumber} has been sent to your email.`,
    });
    
    // Reset order form
    setOrderDetails({
      name: '',
      email: '',
      phone: '',
      address: '',
      item: '',
      quantity: 1,
      size: 'M',
      paymentMethod: 'mobile_money'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrderDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setOrderDetails(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="merchandise" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Merchandise & Membership</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {merchandise.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{item.name}</span>
                  <span className="text-geo-green">UGX {item.price.toLocaleString()}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{item.description}</p>
              </CardContent>
              <CardFooter>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-geo-green hover:bg-geo-green-dark" onClick={() => setOrderDetails(prev => ({ ...prev, item: item.name }))}>
                      Order Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Order {item.name}</DialogTitle>
                      <DialogDescription>
                        Complete the form below to place your order. You'll receive an e-invoice via email.
                      </DialogDescription>
                    </DialogHeader>
                    
                    <form onSubmit={handleSubmitOrder} className="space-y-4 mt-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" name="name" value={orderDetails.name} onChange={handleChange} required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" name="email" type="email" value={orderDetails.email} onChange={handleChange} required />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" name="phone" value={orderDetails.phone} onChange={handleChange} required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="quantity">Quantity</Label>
                          <Input id="quantity" name="quantity" type="number" min="1" value={orderDetails.quantity} onChange={handleChange} required />
                        </div>
                      </div>
                      
                      {item.name === "Society T-Shirt" && (
                        <div className="space-y-2">
                          <Label htmlFor="size">Size</Label>
                          <Select 
                            value={orderDetails.size} 
                            onValueChange={(value) => handleSelectChange("size", value)}
                          >
                            <SelectTrigger id="size">
                              <SelectValue placeholder="Select size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="S">Small (S)</SelectItem>
                              <SelectItem value="M">Medium (M)</SelectItem>
                              <SelectItem value="L">Large (L)</SelectItem>
                              <SelectItem value="XL">Extra Large (XL)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                      
                      <div className="space-y-2">
                        <Label htmlFor="address">Delivery Address (if applicable)</Label>
                        <Input id="address" name="address" value={orderDetails.address} onChange={handleChange} />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="payment-method">Payment Method</Label>
                        <Select 
                          value={orderDetails.paymentMethod} 
                          onValueChange={(value) => handleSelectChange("paymentMethod", value)}
                        >
                          <SelectTrigger id="payment-method">
                            <SelectValue placeholder="Select payment method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mobile_money">Mobile Money</SelectItem>
                            <SelectItem value="bank_transfer">Bank Transfer</SelectItem>
                            <SelectItem value="cash">Cash Payment</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <DialogFooter>
                        <Button type="submit" className="w-full bg-geo-green hover:bg-geo-green-dark">
                          Place Order
                        </Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MerchandiseSection;
