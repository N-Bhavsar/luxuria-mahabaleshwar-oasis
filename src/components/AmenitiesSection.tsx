
import { Waves, Bath, Dumbbell, UtensilsCrossed, Wifi, BedDouble } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const amenities = [
  {
    name: "Luxury Spa",
    description: "Rejuvenate your mind and body with our holistic spa treatments.",
    icon: Bath,
  },
  {
    name: "Swimming Pool",
    description: "Take a refreshing dip in our temperature-controlled infinity pool.",
    icon: Waves,
  },
  {
    name: "Modern Fitness Center",
    description: "Stay on top of your fitness routine with our state-of-the-art gym equipment.",
    icon: Dumbbell,
  },
  {
    name: "Multi-cuisine Restaurant",
    description: "Enjoy exquisite dining with panoramic views of the valley.",
    icon: UtensilsCrossed,
  },
  {
    name: "High-speed Wi-Fi",
    description: "Stay connected with complimentary high-speed internet throughout the resort.",
    icon: Wifi,
  },
  {
    name: "Premium Bedding",
    description: "Experience the ultimate comfort with our luxury linens and pillows.",
    icon: BedDouble,
  },
];

export function AmenitiesSection() {
  return (
    <section id="amenities" className="section bg-muted">
      <div className="container mx-auto">
        <h2 className="section-title text-center gold-text">World-Class Amenities</h2>
        <p className="section-subtitle text-center">
          Indulge in our comprehensive range of amenities designed to elevate your stay and create unforgettable experiences.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <Card 
              key={amenity.name}
              className={cn(
                "bg-card hover:bg-accent/30 border-border hover:border-primary/20 transition-all duration-300 animate-zoom-in overflow-hidden group",
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <amenity.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-2">{amenity.name}</h3>
                <p className="text-muted-foreground">{amenity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Services */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-serif text-center mb-12">Additional Services</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "24/7 Room Service",
              "Concierge",
              "Valet Parking",
              "Laundry",
              "Airport Transfers",
              "Tour Arrangements",
              "Private Dining",
              "Childcare",
              "Pet Friendly Rooms",
              "Business Center",
              "Yoga Classes",
              "Hiking Tours",
            ].map((service, index) => (
              <div 
                key={service}
                className={cn(
                  "bg-card rounded-lg p-4 text-center hover:bg-accent/30 hover:shadow-sm transition-all animate-zoom-in border border-border hover:border-primary/20",
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <p className="font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
