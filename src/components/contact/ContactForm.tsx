
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
import { useToast } from "@/hooks/use-toast";
import { sendContactEmails, EmailData } from "@/utils/emailService";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Info } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(5, "Please enter a subject."),
  message: z.string().min(10, "Please enter a detailed message."),
});

export type ContactFormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  
  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
    
    try {
      // Cast the form values as EmailData since we know all required fields are present
      // The form validation ensures all fields are filled, so this cast is safe
      const emailData: EmailData = {
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,
      };

      // Send emails using our email service with properly typed data
      const result = await sendContactEmails(emailData);
      
      if (result.success) {
        toast({
          title: "Message Received",
          description: "Thank you for reaching out. We've sent a confirmation to your email and our team will get back to you shortly!",
          className: "bg-luxury-100 border-luxury-300 text-luxury-900",
        });
        form.reset();
        setFormSubmitted(true);
        
        // Reset the success state after showing success feedback
        setTimeout(() => {
          setFormSubmitted(false);
        }, 3000);
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
    <div className={`animate-zoom-in transition-all duration-500 ${formSubmitted ? 'scale-[1.02]' : ''}`}>
      <h3 className="text-2xl font-serif font-medium mb-6">Send Us a Message</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-luxury-800 dark:text-luxury-200">Full Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter your name" 
                    {...field} 
                    className="input-focus-effect border-luxury-200 dark:border-luxury-800 focus:border-luxury-400" 
                  />
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
                <FormLabel className="text-luxury-800 dark:text-luxury-200">Email</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    {...field} 
                    className="input-focus-effect border-luxury-200 dark:border-luxury-800 focus:border-luxury-400" 
                  />
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
                <div className="flex items-center space-x-2">
                  <FormLabel className="text-luxury-800 dark:text-luxury-200">Subject</FormLabel>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Info size={16} className="text-luxury-500 cursor-help" />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <p className="text-sm">Select a subject related to your inquiry for faster response.</p>
                    </HoverCardContent>
                  </HoverCard>
                </div>
                <FormControl>
                  <Input 
                    placeholder="How can we help you?" 
                    {...field} 
                    className="input-focus-effect border-luxury-200 dark:border-luxury-800 focus:border-luxury-400" 
                  />
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
                <FormLabel className="text-luxury-800 dark:text-luxury-200">Message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Please provide details about your inquiry..." 
                    className="min-h-[150px] input-focus-effect border-luxury-200 dark:border-luxury-800 focus:border-luxury-400"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className={`w-full bg-gold-gradient text-luxury-950 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 font-medium
                      ${isSubmitting ? 'opacity-80 cursor-wait' : ''} 
                      ${formSubmitted ? 'bg-forest-500 text-white' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : formSubmitted ? "Message Sent!" : "Send Message"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
