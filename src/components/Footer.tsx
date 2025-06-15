import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="bg-geo-green-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <p className="text-sm">Left wing Arts Building, College of Humanities and Social Sciences, University Road, Makerere University, Wandegeya Kampala</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:mugs.universitygeographysociety@gmail.com" className="text-sm hover:underline">mugs.universitygeographysociety@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:+256782462298" className="text-sm hover:underline">+256 782 462 298</a>
              </div>
            </div>
            <div className="mt-6">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-geo-green-dark">
                Contact Us
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="#home" className="text-sm hover:underline">Home</a>
              <a href="#about" className="text-sm hover:underline">About Us</a>
              <a href="#events" className="text-sm hover:underline">Events</a>
              <a href="#news" className="text-sm hover:underline">News</a>
              <a href="#merchandise" className="text-sm hover:underline">Merchandise</a>
              <a href="#partners" className="text-sm hover:underline">Partners</a>
              <a href="#resources" className="text-sm hover:underline">Resources</a>
              <a href="#social" className="text-sm hover:underline">Connect</a>
              <a href="#map" className="text-sm hover:underline">Location</a>
            </div>
          </div>
          
          {/* University Affiliation */}
          <div>
            <h3 className="font-bold text-lg mb-4">University Affiliation</h3>
            <div className="flex items-center mb-4">
              {/* Updated University Logo */}
              <div className="bg-white p-2 rounded">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/4261bc4e-5c81-40b6-977a-93341c1782ca.png" 
                    alt="Makerere University Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="ml-3">
                <p className="font-semibold">Makerere University</p>
                <p className="text-xs">College of Agriculture and Environmental Sciences</p>
                <p className="text-xs">School of Forestry, Environment and Geographical Sciences</p>
              </div>
            </div>
            <p className="text-sm">
              The Geography Society is a student organization under the Department of Geography Geo-Informatics and Climatic Sciences at Makerere University.
            </p>
            <div className="mt-4">
              <Button asChild className="bg-white text-geo-green-dark hover:bg-gray-100">
                <a href="/join-us">Join Us Today</a>
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-white/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} Makerere University Geography Society. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="/privacy-policy" className="text-sm text-white/70 hover:text-white">Privacy Policy</a>
            <a href="/terms-of-use" className="text-sm text-white/70 hover:text-white">Terms of Use</a>
            <a href="/accessibility" className="text-sm text-white/70 hover:text-white">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
