
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const OptimizedHeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section id="home" className="relative min-h-[100svh] flex pt-16">
      {/* Image section - 3/4 of the space */}
      <div className={`${isMobile ? 'w-full' : 'w-3/4'} relative overflow-hidden`}>
        <img 
          src="/lovable-uploads/00d21485-09cf-4306-be7b-512ce32f0026.png"
          alt="Geography Society field trip"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        
        {/* Mobile overlay for content on small screens */}
        {isMobile && (
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
            <div className="w-full bg-lime-100 p-6 text-center">
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

      {/* Light olive green content pane - 1/4 of the space (desktop only) */}
      {!isMobile && (
        <div className="w-1/4 bg-lime-100 flex flex-col items-center justify-center p-8">
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
