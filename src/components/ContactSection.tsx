
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { LocationMap } from "@/components/contact/LocationMap";

export function ContactSection() {
  return (
    <section id="contact" className="section bg-muted">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Get in Touch</h2>
        <p className="section-subtitle text-center">
          Have questions or need assistance? Our team is here to help make your stay extraordinary.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-12">
          <div>
            <ContactInfo />
            <LocationMap />
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
