
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const JoinUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-8 text-geo-green-dark">Join the Geography Society</h1>
              
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Membership Guidelines</h2>
                  <p className="mb-6 text-gray-700">
                    Become a member of the Makerere University Geography Society and join our community of geography enthusiasts. 
                    As a member, you'll have access to exclusive events, field trips, resources, and networking opportunities.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3 text-geo-green-dark">Membership Fees</h3>
                  <div className="mb-6">
                    <div className="mb-4 border-b pb-4">
                      <p className="font-semibold">New Member Basic Subscription</p>
                      <p className="text-lg font-bold">UGX 15,000</p>
                      <p className="text-sm text-gray-600 mt-1">Annual membership fee for new members</p>
                    </div>
                    
                    <h4 className="font-semibold mb-2">Full Membership Perks (Optional)</h4>
                    
                    <div className="pl-4 mb-3 border-l-2 border-geo-green">
                      <p className="font-medium">Society T-shirt</p>
                      <p className="flex justify-between">
                        <span className="text-gray-600">Additional</span>
                        <span className="font-bold">UGX 25,000</span>
                      </p>
                    </div>
                    
                    <div className="pl-4 mb-3 border-l-2 border-geo-green">
                      <p className="font-medium">Society ID</p>
                      <p className="flex justify-between">
                        <span className="text-gray-600">Additional</span>
                        <span className="font-bold">UGX 15,000</span>
                      </p>
                    </div>
                    
                    <div className="mt-6 bg-gray-50 p-4 rounded-md">
                      <p className="font-semibold">Complete Package (All Inclusive)</p>
                      <p className="text-xl font-bold text-geo-green-dark">UGX 55,000</p>
                      <p className="text-sm text-gray-600">Includes basic subscription, t-shirt, and ID</p>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-geo-green-dark">How to Join</h3>
                  <ol className="list-decimal pl-5 mb-6 space-y-2 text-gray-700">
                    <li>Fill out the membership form below</li>
                    <li>Pay the membership fee via mobile money or at the society office</li>
                    <li>Receive your membership confirmation via email</li>
                    <li>Collect your membership package (if applicable) from the society office</li>
                  </ol>
                  
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-geo-green hover:bg-geo-green-dark text-white px-8 py-2">
                      Register Now
                    </Button>
                    <Button variant="outline" className="border-geo-green text-geo-green hover:bg-geo-green/10">
                      Contact Us for More Info
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JoinUs;
