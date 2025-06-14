
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const NewsSection = () => {
  const newsPosts = [
    {
      id: 1,
      title: "Students Map Local Communities",
      date: "May 10, 2025",
      excerpt: "Geography students helped map underserved communities in Kampala as part of our community outreach program.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["Fieldwork", "Community"]
    },
    {
      id: 2,
      title: "New Climate Research Partnership",
      date: "May 5, 2025",
      excerpt: "The Geography Department has established a new partnership with the National Climate Research Center.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["Research", "Climate"]
    },
    {
      id: 3,
      title: "Students Win GIS Competition",
      date: "April 28, 2025",
      excerpt: "Our student team won first place in the national GIS mapping competition with their innovative project.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["Awards", "GIS"]
    }
  ];

  return (
    <section id="news" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest News</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsPosts.map((post) => (
            <Card key={post.id} className="h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex gap-2 mb-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} className="bg-geo-green hover:bg-geo-green-dark">#{tag}</Badge>
                  ))}
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{post.excerpt}</p>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button variant="ghost" className="text-geo-green hover:text-geo-green-dark hover:bg-green-50">
                  Read More →
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2 justify-center">
          <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer">#Fieldwork</Badge>
          <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer">#Research</Badge>
          <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer">#Talks</Badge>
          <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer">#Careers</Badge>
          <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer">#Community</Badge>
          <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer">#GIS</Badge>
          <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer">#Climate</Badge>
          <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer">#Awards</Badge>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
