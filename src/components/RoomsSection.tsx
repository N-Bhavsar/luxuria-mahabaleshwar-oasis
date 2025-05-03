
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BedDouble, Wifi, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const roomCategories = [
  { id: "all", label: "All Rooms" },
  { id: "budget", label: "Budget" },
  { id: "deluxe", label: "Deluxe" },
  { id: "premium", label: "Premium" },
  { id: "family", label: "Family" },
];

interface RoomType {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  capacity: number;
  size: string;
  features: string[];
  isAvailable: boolean;
}

const roomsData: RoomType[] = [
  {
    id: "classic-room",
    name: "Classic Room",
    description: "Comfortable and cozy room with essential amenities and garden views.",
    price: "₹5,999",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
    category: "budget",
    capacity: 2,
    size: "320 sq ft",
    features: ["Garden View", "Air Conditioning", "LED TV", "Coffee Maker"],
    isAvailable: true,
  },
  {
    id: "deluxe-valley",
    name: "Deluxe Valley View",
    description: "Spacious room with breathtaking views of the valley and modern furnishings.",
    price: "₹8,999",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
    category: "deluxe",
    capacity: 2,
    size: "450 sq ft",
    features: ["Valley View", "King Size Bed", "Mini Bar", "Premium Toiletries"],
    isAvailable: true,
  },
  {
    id: "premium-suite",
    name: "Premium Suite",
    description: "Luxurious suite with separate living area and panoramic mountain views.",
    price: "₹12,999",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
    category: "premium",
    capacity: 2,
    size: "650 sq ft",
    features: ["Mountain View", "Living Room", "Jacuzzi", "Butler Service"],
    isAvailable: true,
  },
  {
    id: "family-cottage",
    name: "Family Cottage",
    description: "Standalone cottage with multiple bedrooms, perfect for family getaways.",
    price: "₹15,999",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    category: "family",
    capacity: 4,
    size: "850 sq ft",
    features: ["2 Bedrooms", "Private Garden", "Dining Area", "Kitchenette"],
    isAvailable: false,
  },
  {
    id: "superior-deluxe",
    name: "Superior Deluxe Room",
    description: "Enhanced deluxe room with additional amenities and extra space.",
    price: "₹9,999",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    category: "deluxe",
    capacity: 3,
    size: "500 sq ft",
    features: ["Pool View", "Queen Size Bed", "Working Desk", "Rain Shower"],
    isAvailable: true,
  },
  {
    id: "executive-suite",
    name: "Executive Suite",
    description: "Elegant suite with executive privileges and stunning interiors.",
    price: "₹14,999",
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843",
    category: "premium",
    capacity: 2,
    size: "700 sq ft",
    features: ["Executive Lounge Access", "Terrace", "Living Room", "Premium Amenities"],
    isAvailable: true,
  },
];

export function RoomsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredRooms =
    activeCategory === "all"
      ? roomsData
      : roomsData.filter((room) => room.category === activeCategory);

  return (
    <section id="rooms" className="section">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Experience Exceptional Comfort</h2>
        <p className="section-subtitle text-center">
          Discover our meticulously designed accommodations, each offering a perfect blend of luxury, comfort, and serenity.
        </p>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-muted">
              {roomCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className="text-sm md:text-base"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRooms.map((room, index) => (
                <div
                  key={room.id}
                  className={cn(
                    "group bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-all animate-zoom-in",
                    !room.isAvailable && "opacity-70"
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-luxury-900/80 hover:bg-luxury-900 text-white">
                        {room.category.charAt(0).toUpperCase() + room.category.slice(1)}
                      </Badge>
                    </div>
                    {!room.isAvailable && (
                      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center">
                        <Badge className="bg-destructive text-destructive-foreground text-lg px-4 py-2">
                          Currently Unavailable
                        </Badge>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-serif font-medium">{room.name}</h3>
                      <p className="text-lg font-medium text-primary">{room.price}<span className="text-sm font-normal text-muted-foreground"> / night</span></p>
                    </div>

                    <p className="text-muted-foreground mb-4">{room.description}</p>

                    <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <BedDouble className="h-4 w-4" />
                        <span>{room.size}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>Up to {room.capacity}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Wifi className="h-4 w-4" />
                        <span>Free WiFi</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {room.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="outline">
                          {feature}
                        </Badge>
                      ))}
                      {room.features.length > 3 && (
                        <Badge variant="outline">+{room.features.length - 3} more</Badge>
                      )}
                    </div>

                    <Button
                      className={cn("w-full", 
                        room.isAvailable ? "luxury-btn" : "bg-muted text-muted-foreground cursor-not-allowed"
                      )}
                      disabled={!room.isAvailable}
                    >
                      {room.isAvailable ? "Book Now" : "Not Available"}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button variant="outline" className="luxury-btn-outline">
            View All Accommodations
          </Button>
        </div>
      </div>
    </section>
  );
}
