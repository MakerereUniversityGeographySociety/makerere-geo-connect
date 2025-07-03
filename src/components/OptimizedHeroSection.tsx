
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const OptimizedHeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section id="home" className="relative min-h-[100svh] flex pt-16">
      {/* Image placeholder section - 3/4 of the space */}
      <div className={`${isMobile ? 'w-full' : 'w-3/4'} relative bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center`}>
        {/* Placeholder content */}
        <div className="text-gray-600 text-center">
          <svg 
            className="mx-auto h-20 w-20 mb-4 opacity-50" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1} 
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
            />
          </svg>
          <p className="text-lg font-medium opacity-60">Geography Society</p>
          <p className="text-sm opacity-40">Image Placeholder</p>
        </div>
        
        {/* Mobile overlay for content on small screens */}
        {isMobile && (
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
            <div className="w-full bg-white p-6 text-center">
              <h1 className="text-xl font-bold text-geo-green mb-4">
                United to Conserve Nature
              </h1>
              <a href="#events">
                <Button className="bg-geo-green hover:bg-geo-green-dark text-white font-semibold px-6 py-3 text-base">
                  View Events
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>

      {/* White content pane - 1/4 of the space (desktop only) */}
      {!isMobile && (
        <div className="w-1/4 bg-white flex flex-col items-center justify-center p-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-geo-green mb-8 text-center leading-tight">
            United to Conserve Nature
          </h1>
          <a href="#events">
            <Button className="bg-geo-green hover:bg-geo-green-dark text-white font-semibold px-8 py-6 text-base">
              View Events
            </Button>
          </a>
        </div>
      )}
    </section>
  );
};

export default OptimizedHeroSection;
