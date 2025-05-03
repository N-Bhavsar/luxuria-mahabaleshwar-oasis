
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Rooms", href: "#rooms" },
  { name: "Amenities", href: "#amenities" },
  { name: "Attractions", href: "#attractions" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-2",
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <div className="h-14 flex items-center justify-center">
              <img 
                src="/lovable-uploads/2e0d9d70-9600-4f1e-ad1f-00b255b9bd6c.png" 
                alt="Ixora Luxury Resort Logo" 
                className="h-full w-auto object-contain"
              />
            </div>
            <span className="ml-2 text-sm font-medium hidden md:block gold-text">Luxury in Nature</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
          <Button className="luxury-btn">Book Now</Button>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 lg:hidden">
          <div className="flex flex-col h-full overflow-y-auto">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
              <a href="/" className="flex items-center">
                <div className="h-14 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/2e0d9d70-9600-4f1e-ad1f-00b255b9bd6c.png" 
                    alt="Ixora Luxury Resort Logo" 
                    className="h-full w-auto object-contain"
                  />
                </div>
                <span className="ml-2 text-sm font-medium gold-text">Luxury in Nature</span>
              </a>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <div className="flex flex-col space-y-6 px-6 py-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium hover:text-primary py-2 border-b border-border"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="luxury-btn mt-4 w-full">Book Now</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
