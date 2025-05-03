
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section id="about" className="section bg-muted">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 animate-slide-in">
            <h2 className="section-title">A Legacy of Luxury & Hospitality</h2>
            <p className="text-lg">
              Nestled in the serene hills of Mahabaleshwar, Luxuria Oasis stands as a testament to refined elegance and immersive luxury. Our resort harmoniously blends contemporary design with the natural beauty of the Western Ghats, creating a sanctuary for those seeking both adventure and relaxation.
            </p>
            <p className="text-lg">
              Since our establishment, we have dedicated ourselves to providing unparalleled hospitality, ensuring each guest experiences the perfect balance of comfort, privacy, and attentive service. Our architectural vision celebrates the stunning landscape while offering modern amenities expected of a world-class destination.
            </p>
            <div className="pt-4">
              <Button className="luxury-btn">Our Story</Button>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-lg animate-zoom-in">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
              alt="Luxuria Resort Building"
              className="w-full h-full object-cover rounded-lg transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white font-medium">Established 2010 • Mahabaleshwar, Maharashtra</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border hover:border-primary/20 transition-all flex flex-col items-center text-center animate-zoom-in">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-primary text-2xl font-bold">10+</span>
            </div>
            <h3 className="text-xl font-serif font-medium mb-2">Years of Excellence</h3>
            <p className="text-muted-foreground">Delivering exceptional hospitality since 2010</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border hover:border-primary/20 transition-all flex flex-col items-center text-center animate-zoom-in" style={{ animationDelay: "100ms" }}>
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-primary text-2xl font-bold">5★</span>
            </div>
            <h3 className="text-xl font-serif font-medium mb-2">Luxury Service</h3>
            <p className="text-muted-foreground">Consistently rated 5-star experience</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border hover:border-primary/20 transition-all flex flex-col items-center text-center animate-zoom-in" style={{ animationDelay: "200ms" }}>
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-primary text-2xl font-bold">42</span>
            </div>
            <h3 className="text-xl font-serif font-medium mb-2">Premium Rooms</h3>
            <p className="text-muted-foreground">Each uniquely designed for comfort</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border hover:border-primary/20 transition-all flex flex-col items-center text-center animate-zoom-in" style={{ animationDelay: "300ms" }}>
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-primary text-2xl font-bold">850</span>
            </div>
            <h3 className="text-xl font-serif font-medium mb-2">Acres of Nature</h3>
            <p className="text-muted-foreground">Surrounded by pristine forests</p>
          </div>
        </div>
      </div>
    </section>
  );
}
