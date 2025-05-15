
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, MapPin } from "lucide-react";

const EventsSection = () => {
  // Updated events data
  const events = [
    {
      id: 1,
      title: "MUGS Hand Over",
      date: "June 15, 2025",
      location: "Geography Department",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Official handover ceremony for the new MUGS leadership team.",
      formLink: "https://forms.gle/yourFormLink"
    },
    {
      id: 2,
      title: "MUGS Induction and Training",
      date: "July 10, 2025",
      location: "Arts Building, Makerere University",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Training session for new society members and leadership team.",
      formLink: "https://forms.gle/yourFormLink2"
    },
    {
      id: 3,
      title: "Freshers Orientation and Registration",
      date: "July 25, 2025",
      location: "Main Hall, Geography Department",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Orientation session for new students joining the society.",
      formLink: "https://forms.gle/yourFormLink3"
    }
  ];

  return (
    <section id="events" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
        
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 min-w-max lg:grid lg:grid-cols-3 lg:min-w-0">
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
                  <Button 
                    className="w-full bg-geo-blue hover:bg-geo-blue-dark"
                    asChild
                  >
                    <a href={event.formLink} target="_blank" rel="noopener noreferrer">
                      RSVP Now
                    </a>
                  </Button>
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
