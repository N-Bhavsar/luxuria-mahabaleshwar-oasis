
import { MapPin, Phone, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function ContactInfo() {
  return (
    <div className="animate-slide-in">
      <h3 className="text-2xl font-serif font-medium mb-6">Contact Information</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="text-lg font-medium mb-1">Our Location</h4>
            <p className="text-muted-foreground">
              Panchgani-Mahabaleshwar Road,<br />
              Mahabaleshwar, Maharashtra 412806,<br />
              India
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="text-lg font-medium mb-1">Phone</h4>
            <p className="text-muted-foreground">+91 (76) 543-21098</p>
            <p className="text-muted-foreground">+91 (76) 543-21099</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="text-lg font-medium mb-1">Email</h4>
            <p className="text-muted-foreground">reservations@ixoraresort.com</p>
            <p className="text-muted-foreground">info@ixoraresort.com</p>
          </div>
        </div>
      </div>
      
      <Separator className="my-8" />
    </div>
  );
}
