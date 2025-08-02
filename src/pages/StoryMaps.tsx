
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const storyMapsList = [
  {
    title: "Field Study Trip to Mabamba Wetland",
    url: "https://arcg.is/159W1W",
    description: "An interactive map detailing our field study trip to the Mabamba Wetland, a key Ramsar site, highlighting biodiversity and conservation efforts."
  },
  {
    title: "Weekly Story Map",
    url: "https://arcg.is/aT15m0",
    description: "Our featured story map of the week. This edition explores urban development patterns in Kampala and their environmental impact."
  }
];

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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {storyMapsList.map((storyMap) => (
                  <Card key={storyMap.title} className="flex flex-col">
                    <CardHeader>
                      <CardTitle>{storyMap.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                      <CardDescription className="flex-grow mb-4">{storyMap.description}</CardDescription>
                      <Button
                        onClick={() => window.open(storyMap.url, "_blank", "noopener,noreferrer")}
                        className="w-full bg-blue-900 hover:bg-blue-800"
                      >
                        Open Story Map <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
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
