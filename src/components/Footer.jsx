
import { ThemeToggle } from "./ThemeToggle";

const navigation = {
  main: [
    { name: "About", href: "#about" },
    { name: "Rooms", href: "#rooms" },
    { name: "Amenities", href: "#amenities" },
    { name: "Attractions", href: "#attractions" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ],
  secondary: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Cancellation Policy", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Careers", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-accent">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/2e0d9d70-9600-4f1e-ad1f-00b255b9bd6c.png" 
                alt="Ixora Logo" 
                className="h-12 w-auto"
              />
            </a>
            <p className="mt-4 text-muted-foreground max-w-xs">
              Where luxury meets nature in the serene hills of Mahabaleshwar. Experience unparalleled comfort and hospitality.
            </p>
            <div className="mt-6">
              <div className="flex items-center">
                <ThemeToggle />
                <span className="ml-3 text-muted-foreground">Toggle theme</span>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-lg font-serif font-medium">Navigation</h3>
            <ul className="mt-4 space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-lg font-serif font-medium">Legal</h3>
            <ul className="mt-4 space-y-2">
              {navigation.secondary.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="text-lg font-serif font-medium">Subscribe</h3>
            <p className="mt-4 text-muted-foreground">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <form className="mt-4 flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full sm:w-auto rounded-md border border-input bg-background"
                required
              />
              <button
                type="submit"
                className="mt-2 sm:mt-0 sm:ml-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-6">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} IXORA Luxury Resort. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
