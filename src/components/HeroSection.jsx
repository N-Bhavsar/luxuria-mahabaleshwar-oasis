
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
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselImages.length);
    }, 6000);
    
    setIsLoaded(true);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Image Carousel with Parallax Effect */}
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1500 ease-in-out will-change-transform",
              activeSlide === index ? "opacity-100" : "opacity-0"
            )}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 scale-[1.05] transform-gpu"
              style={{ 
                backgroundImage: `url(${image.url})`,
                transform: activeSlide === index ? 'scale(1.05)' : 'scale(1)'
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-background/10" />
          </div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 container mx-auto">
        <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-medium drop-shadow-lg">
            <span className="gold-text inline-block transform animate-float">IXORA</span> Luxury <span className="italic font-light">Resort</span>
          </h1>
          
          <p className="mt-6 max-w-lg mx-auto text-lg sm:text-xl text-white/90 font-light" style={{ animationDelay: "300ms", opacity: isLoaded ? 1 : 0, transition: 'all 1s ease-out 300ms' }}>
            Where luxury meets nature in the serene hills of Mahabaleshwar
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5" style={{ animationDelay: "600ms", opacity: isLoaded ? 1 : 0, transition: 'all 1s ease-out 600ms' }}>
            <Button 
              className="bg-gold-gradient text-luxury-950 hover:scale-105 hover:shadow-lg transition-all duration-500 text-lg px-8 py-6"
            >
              Book Your Stay
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent text-white border-white/80 hover:bg-white/20 hover:scale-105 transition-all duration-500 text-lg px-8 py-6"
            >
              Explore Experiences
            </Button>
          </div>
        </div>
      </div>
      
      {/* Image navigation dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              activeSlide === index
                ? "bg-primary scale-125 animate-pulse-glow"
                : "bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
