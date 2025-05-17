
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const JoinUs = () => {
  return (
    <>
      <Helmet>
        <title>Join Us | Makerere University Geography Society</title>
      </Helmet>
      <Header />
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Join Makerere University Geography Society</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Become part of a vibrant community dedicated to exploring and understanding our world through the lens of geography.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-12">
            <div className="grid md:grid-cols-2">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">Membership Benefits</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-geo-green">✓</div>
                    <p>Access to exclusive events, field trips, and workshops</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-geo-green">✓</div>
                    <p>Networking opportunities with professionals in the field</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-geo-green">✓</div>
                    <p>Resources to enhance your academic and professional growth</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-geo-green">✓</div>
                    <p>Opportunities to participate in research and community projects</p>
                  </li>
                </ul>

                <div className="mt-6">
                  <Button 
                    className="bg-geo-green hover:bg-geo-green-dark"
                    asChild
                  >
                    <a href="https://form.jotform.com/251344966214054" target="_blank" rel="noopener noreferrer">
                      Register Now
                    </a>
                  </Button>
                </div>
              </div>
              <div className="bg-geo-green-dark flex items-center justify-center p-8">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-4">Membership Fees</h3>
                  <div className="mb-4">
                    <p className="text-lg font-semibold">New Members</p>
                    <p className="text-3xl font-bold">UGX 15,000</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Renewal</p>
                    <p className="text-3xl font-bold">UGX 3,000</p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <p className="text-lg font-semibold">Complete Package</p>
                    <p className="text-sm text-white/70">(Includes T-shirt and ID Card)</p>
                    <p className="text-3xl font-bold">UGX 40,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default JoinUs;
