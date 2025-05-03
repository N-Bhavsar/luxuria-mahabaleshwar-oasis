
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

interface Attraction {
  id: string;
  name: string;
  description: string;
  distance: string;
  image: string;
  category: string;
}

const attractions: Attraction[] = [
  {
    id: "lingmala-falls",
    name: "Lingmala Falls",
    description: "Experience the breathtaking beauty of this tiered waterfall surrounded by lush greenery.",
    distance: "4.5 km",
    image: "https://images.unsplash.com/photo-1546514355-7fdc90ccbd03",
    category: "Nature",
  },
  {
    id: "venna-lake",
    name: "Venna Lake",
    description: "Enjoy boating and picnics at this picturesque lake offering panoramic mountain views.",
    distance: "3 km",
    image: "https://images.unsplash.com/photo-1500932334442-8761ee4810a7",
    category: "Recreation",
  },
  {
    id: "pratapgad-fort",
    name: "Pratapgad Fort",
    description: "Explore this historic mountain fort with significant cultural importance.",
    distance: "15 km",
    image: "https://images.unsplash.com/photo-1496889208497-9b4f9d7ad2d8",
    category: "History",
  },
  {
    id: "mapro-garden",
    name: "Mapro Garden",
    description: "Visit this famous garden and food processing plant known for strawberry products.",
    distance: "8 km",
    image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8",
    category: "Food",
  },
  {
    id: "wilson-point",
    name: "Wilson Point",
    description: "Witness breathtaking sunrise views from the highest point in Mahabaleshwar.",
    distance: "5.5 km",
    image: "https://images.unsplash.com/photo-1552083375-1447ce886485",
    category: "Nature",
  },
  {
    id: "elephants-head-point",
    name: "Elephant's Head Point",
    description: "Marvel at this unique rock formation resembling an elephant's head.",
    distance: "7 km",
    image: "https://images.unsplash.com/photo-1515256722043-0991dce0bede",
    category: "Nature",
  },
];

export function AttractionsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const newIndex = Math.max(0, Math.min(index, attractions.length - 1));
      setActiveIndex(newIndex);
      
      const cardWidth = carouselRef.current.scrollWidth / attractions.length;
      carouselRef.current.scrollTo({
        left: cardWidth * newIndex,
        behavior: "smooth",
      });
    }
  };
  
  const handleNext = () => scrollToIndex(activeIndex + 1);
  const handlePrev = () => scrollToIndex(activeIndex - 1);
  
  const handleCardClick = (index: number) => {
    scrollToIndex(index);
  };
  
  return (
    <section id="attractions" className="section">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Explore Mahabaleshwar</h2>
        <p className="section-subtitle text-center">
          Discover the natural wonders, historical landmarks, and cultural experiences around our resort.
        </p>
        
        <div className="relative mt-12">
          <div className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm shadow-md"
              onClick={handlePrev}
              disabled={activeIndex === 0}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous attraction</span>
            </Button>
          </div>
          
          <div className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm shadow-md"
              onClick={handleNext}
              disabled={activeIndex === attractions.length - 1}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next attraction</span>
            </Button>
          </div>
          
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none space-x-6 px-2 pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {attractions.map((attraction, index) => (
              <Card
                key={attraction.id}
                className={cn(
                  "min-w-[300px] sm:min-w-[350px] md:min-w-[400px] flex-shrink-0 snap-center cursor-pointer border border-border hover:border-primary/20 transition-all animate-zoom-in",
                  activeIndex === index ? "ring-2 ring-primary ring-offset-2" : ""
                )}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => handleCardClick(index)}
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <Badge className="absolute top-4 right-4 bg-luxury-800/80 hover:bg-luxury-800 text-white">
                    {attraction.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-medium">{attraction.name}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{attraction.distance}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{attraction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
          {attractions.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2.5 h-2.5 rounded-full mx-1.5 transition-all",
                activeIndex === index
                  ? "bg-primary scale-125"
                  : "bg-primary/30 hover:bg-primary/50"
              )}
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline" className="luxury-btn-outline">
            View All Attractions
          </Button>
        </div>
      </div>
    </section>
  );
}
