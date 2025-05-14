
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const SubscribeSection = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Subscription Successful!",
      description: "Thank you for subscribing to our newsletter.",
    });
    
    setEmail("");
    setWhatsapp(false);
    setPhoneNumber("");
  };

  return (
    <section id="subscribe" className="py-16 bg-geo-green text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated!</h2>
          <p className="text-lg mb-8">Join our newsletter to receive the latest updates on events, field trips, and geography resources.</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white text-gray-800 border-0"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="whatsapp" 
                checked={whatsapp}
                onCheckedChange={(checked) => {
                  setWhatsapp(checked === true);
                }}
              />
              <Label htmlFor="whatsapp" className="text-white">Also add me to the WhatsApp group</Label>
            </div>
            
            {whatsapp && (
              <div>
                <Input
                  type="tel"
                  placeholder="WhatsApp number (e.g., 256701234567)"
                  className="bg-white text-gray-800 border-0"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required={whatsapp}
                />
              </div>
            )}
            
            <Button type="submit" className="w-full bg-white text-geo-green hover:bg-gray-100">
              Subscribe
            </Button>
            
            <p className="text-xs text-center mt-4">
              We'll only send cool geography stuff. No spam!
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
