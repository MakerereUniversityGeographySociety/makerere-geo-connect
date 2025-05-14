
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, MapPin } from "lucide-react";

const EventsSection = () => {
  // Mock events data
  const events = [
    {
      id: 1,
      title: "Field Trip to Mt. Elgon",
      date: "June 15, 2025",
      location: "Mt. Elgon National Park",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Explore geological formations and ecosystems in Mt. Elgon National Park."
    },
    {
      id: 2,
      title: "Urban Planning Seminar",
      date: "July 10, 2025",
      location: "Arts Building, Makerere University",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Learn about sustainable urban development from industry experts."
    },
    {
      id: 3,
      title: "GIS Workshop",
      date: "July 25, 2025",
      location: "Computer Lab, Geography Department",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Hands-on training with the latest GIS software and applications."
    },
    {
      id: 4,
      title: "Annual Geography Conference",
      date: "August 5-7, 2025",
      location: "Main Hall, Makerere University",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Three-day conference featuring keynote speakers and student presentations."
    }
  ];

  return (
    <section id="events" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
        
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 min-w-max lg:grid lg:grid-cols-4 lg:min-w-0">
            {events.map((event) => (
              <Card key={event.id} className="w-72 lg:w-auto">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <CalendarDays size={16} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-geo-blue hover:bg-geo-blue-dark">RSVP Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Button variant="outline" className="border-geo-blue text-geo-blue hover:bg-geo-blue hover:text-white">
            View Full Calendar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
