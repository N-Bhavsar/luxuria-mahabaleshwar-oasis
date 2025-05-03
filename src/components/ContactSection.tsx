
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { sendContactEmails } from "@/utils/emailService";

const formSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(5, "Please enter a subject."),
  message: z.string().min(10, "Please enter a detailed message."),
});

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      // Send emails using our new email service
      const result = await sendContactEmails(values);
      
      if (result.success) {
        toast({
          title: "Message Received",
          description: "Thank you for reaching out. We've sent a confirmation to your email and our team will get back to you shortly!",
        });
        form.reset();
      } else {
        toast({
          title: "Something went wrong",
          description: result.error || "Failed to send your message. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }
  
  return (
    <section id="contact" className="section bg-muted">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Get in Touch</h2>
        <p className="section-subtitle text-center">
          Have questions or need assistance? Our team is here to help make your stay extraordinary.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-12">
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
            
            <div>
              <h3 className="text-2xl font-serif font-medium mb-6">Our Location</h3>
              <div className="aspect-video w-full bg-card rounded-lg overflow-hidden shadow-sm border border-border">
                {/* Google Maps iframe would go here in production */}
                <div className="w-full h-full bg-accent flex items-center justify-center">
                  <p className="text-center text-muted-foreground">
                    Google Maps embed would appear here<br />
                    <span className="text-sm">(API key required for production)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-zoom-in">
            <h3 className="text-2xl font-serif font-medium mb-6">Send Us a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="How can we help you?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please provide details about your inquiry..." 
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="luxury-btn w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
