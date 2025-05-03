
import { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  avatar?: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    date: "October 2023",
    comment: "Our stay at Luxuria was absolutely incredible. The staff went above and beyond to make our anniversary special. The mountain views from our room were breathtaking, and the food was exceptional. Can't wait to return!",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    location: "Delhi",
    rating: 4,
    date: "September 2023",
    comment: "Beautiful property with excellent amenities. The spa treatments were rejuvenating and the restaurant offered delicious local cuisine. Only wish we could have stayed longer.",
    avatar: "https://i.pravatar.cc/150?img=67",
  },
  {
    id: 3,
    name: "Anjali Patel",
    location: "Bangalore",
    rating: 5,
    date: "August 2023",
    comment: "From the moment we arrived, we were treated like royalty. The rooms are spacious and luxurious with incredible attention to detail. The infinity pool overlooking the valley is simply stunning.",
    avatar: "https://i.pravatar.cc/150?img=48",
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Pune",
    rating: 4,
    date: "July 2023",
    comment: "A perfect weekend getaway. The resort's location offers the perfect balance of privacy and accessibility to local attractions. The staff was friendly and attentive throughout our stay.",
    avatar: "https://i.pravatar.cc/150?img=59",
  },
  {
    id: 5,
    name: "Meera Joshi",
    location: "Hyderabad",
    rating: 5,
    date: "June 2023",
    comment: "Luxuria exceeded all our expectations. The architecture blends perfectly with the natural surroundings. We particularly enjoyed the guided nature walks and the evening cultural performances.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollTimerRef = useRef<NodeJS.Timeout | null>(null);
  const { toast } = useToast();
  
  const [reviewInput, setReviewInput] = useState({
    name: "",
    email: "",
    rating: 5,
    comment: "",
  });

  const handleStarClick = (rating: number) => {
    setReviewInput({ ...reviewInput, rating });
  };
  
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setReviewInput({ ...reviewInput, [name]: value });
  };
  
  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!reviewInput.name || !reviewInput.email || !reviewInput.comment) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    // Submit logic would go here
    toast({
      title: "Review Submitted",
      description: "Thank you for sharing your experience with us!",
    });
    
    // Reset form
    setReviewInput({
      name: "",
      email: "",
      rating: 5,
      comment: "",
    });
  };
  
  const startAutoScroll = () => {
    if (autoScrollTimerRef.current) clearTimeout(autoScrollTimerRef.current);
    
    autoScrollTimerRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
  };
  
  useEffect(() => {
    if (isAutoScrolling) {
      startAutoScroll();
    }
    
    return () => {
      if (autoScrollTimerRef.current) clearTimeout(autoScrollTimerRef.current);
    };
  }, [currentIndex, isAutoScrolling]);
  
  const handleManualNavigation = (index: number) => {
    setCurrentIndex(index);
    setIsAutoScrolling(false);
    
    // Resume auto-scrolling after 10 seconds of inactivity
    setTimeout(() => {
      setIsAutoScrolling(true);
    }, 10000);
  };
  
  return (
    <section id="reviews" className="section bg-muted">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Guest Experiences</h2>
        <p className="section-subtitle text-center">
          Discover what our guests have to say about their stay at Luxuria Mahabaleshwar Oasis.
        </p>
        
        <div className="relative mt-12">
          <div className="mx-auto max-w-3xl">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {reviews.map((review) => (
                  <div key={review.id} className="w-full flex-shrink-0 px-4">
                    <Card className="bg-card border border-border h-full">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-4">
                          {review.avatar && (
                            <img
                              src={review.avatar}
                              alt={review.name}
                              className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                          )}
                          <div>
                            <h4 className="font-serif font-medium text-lg">{review.name}</h4>
                            <p className="text-sm text-muted-foreground">{review.location}, {review.date}</p>
                          </div>
                        </div>
                        
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, index) => (
                            <Star
                              key={index}
                              className={cn(
                                "w-5 h-5",
                                index < review.rating
                                  ? "text-amber-500 fill-amber-500"
                                  : "text-muted stroke-muted"
                              )}
                            />
                          ))}
                        </div>
                        
                        <blockquote className="italic text-lg">"{review.comment}"</blockquote>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleManualNavigation(index)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all",
                    currentIndex === index
                      ? "bg-primary scale-125"
                      : "bg-primary/30 hover:bg-primary/50"
                  )}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="luxury-btn">Share Your Experience</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-serif">Submit Your Review</DialogTitle>
                <DialogDescription>
                  We value your feedback. Please share your experience at Luxuria Mahabaleshwar Oasis.
                </DialogDescription>
              </DialogHeader>
              
              <form onSubmit={handleSubmitReview} className="space-y-6 pt-2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={reviewInput.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={reviewInput.email}
                      onChange={handleInputChange}
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Rating</Label>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleStarClick(index + 1)}
                        className="focus:outline-none"
                      >
                        <Star
                          className={cn(
                            "w-6 h-6 transition-all",
                            index < reviewInput.rating
                              ? "text-amber-500 fill-amber-500"
                              : "text-muted hover:text-amber-300"
                          )}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="comment">Your Experience</Label>
                  <Textarea
                    id="comment"
                    name="comment"
                    value={reviewInput.comment}
                    onChange={handleInputChange}
                    placeholder="Tell us about your stay..."
                    className="min-h-[120px]"
                    required
                  />
                </div>
                
                <DialogFooter>
                  <Button type="submit" className="luxury-btn">Submit Review</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
