
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const carouselImages = [
  {
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    alt: 'Luxury resort pool with mountain views',
  },
  {
    url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
    alt: 'Elegant hotel suite with panoramic views',
  },
  {
    url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
    alt: 'Resort architecture surrounded by lush greenery',
  }
];

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Image Carousel */}
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              activeSlide === index ? "opacity-100" : "opacity-0"
            )}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${image.url})` }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-background/10" />
          </div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 container mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-medium drop-shadow-md animate-fade-in">
          Luxuria Mahabaleshwar <span className="italic font-light">Oasis</span>
        </h1>
        
        <p className="mt-6 max-w-lg mx-auto text-lg sm:text-xl text-white/90 font-light animate-fade-in" style={{ animationDelay: "300ms" }}>
          Where luxury meets nature in the serene hills of Mahabaleshwar
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "600ms" }}>
          <Button className="luxury-btn text-lg px-8 py-6">Book Your Stay</Button>
          <Button variant="outline" className="luxury-btn-outline text-white border-white hover:bg-white/20 px-8 py-6">
            Explore Experiences
          </Button>
        </div>
      </div>
      
      {/* Image navigation dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all",
              activeSlide === index
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
