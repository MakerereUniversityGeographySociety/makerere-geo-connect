
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const StoryMaps = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-4xl font-bold mb-8 text-geo-green-dark">Geographic Story Maps</h1>
              <p className="text-lg mb-8">
                Explore interactive story maps created by Makerere University Geography Society members
                to visualize geographical data and present compelling narratives about our environment.
              </p>
              
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Eastern Uganda Land Cover Analysis</h2>
                  <div className="aspect-[16/9] w-full mb-4 border border-gray-200 rounded-lg overflow-hidden">
                    <iframe 
                      src="https://storymaps.arcgis.com/stories/7d14a5db3c9f48b297f496662d5d537f" 
                      width="100%" 
                      height="500px" 
                      frameBorder="0" 
                      allowFullScreen 
                      allow="geolocation"
                      className="w-full h-full"
                    />
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Urban Development Patterns</h2>
                  <div className="aspect-[16/9] w-full mb-4 border border-gray-200 rounded-lg overflow-hidden">
                    <iframe 
                      src="https://storymaps.arcgis.com/stories/eb909117775a4dccab597c1a17627e69" 
                      width="100%" 
                      height="500px" 
                      frameBorder="0" 
                      allowFullScreen 
                      allow="geolocation"
                      className="w-full h-full"
                    />
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

export default StoryMaps;
