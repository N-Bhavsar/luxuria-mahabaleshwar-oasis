
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { LocationMap } from "@/components/contact/LocationMap";
import { Card, CardContent } from "@/components/ui/card";

export function ContactSection() {
  return (
    <section id="contact" className="section bg-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/2e0d9d70-9600-4f1e-ad1f-00b255b9bd6c.png')] opacity-5"></div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-md mx-auto text-center mb-16">
          <h2 className="section-title text-center">Get in Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto my-6"></div>
          <p className="section-subtitle text-center">
            Have questions or need assistance? Our team is here to help make your stay extraordinary.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
            <Card className="shadow-lg border-luxury-200 dark:border-luxury-800 overflow-hidden">
              <CardContent className="p-0">
                <ContactInfo />
                <LocationMap />
              </CardContent>
            </Card>
          </div>
          
          <Card className="shadow-lg border-luxury-200 dark:border-luxury-800 animate-fade-in p-8" style={{ animationDelay: '600ms' }}>
            <CardContent className="p-0">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
