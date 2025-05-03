
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, ChevronRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const bookingFormSchema = z.object({
  checkIn: z.date({
    required_error: "Please select a check-in date.",
  }),
  checkOut: z.date({
    required_error: "Please select a check-out date.",
  }),
  roomType: z.string({
    required_error: "Please select a room type.",
  }),
  adults: z.string().min(1, "Please select number of adults."),
  children: z.string().optional(),
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  specialRequests: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

const defaultValues: Partial<BookingFormValues> = {
  adults: "2",
  children: "0",
  specialRequests: "",
};

export function BookingForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues,
    mode: "onChange",
  });
  
  const onSubmit = (data: BookingFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Booking Form Data:", data);
      toast({
        title: "Booking Request Received",
        description: "We will contact you shortly to confirm your reservation.",
      });
      setIsSubmitting(false);
      form.reset(defaultValues);
      setStep(1);
    }, 1500);
  };
  
  const nextStep = () => {
    const fieldsToValidate = step === 1 
      ? ["checkIn", "checkOut", "roomType", "adults"] 
      : ["name", "email", "phone"];
      
    form.trigger(fieldsToValidate as any).then((isValid) => {
      if (isValid) setStep(step + 1);
    });
  };
  
  const prevStep = () => {
    setStep(step - 1);
  };
  
  return (
    <section id="booking" className="section">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Book Your Stay</h2>
        <p className="section-subtitle text-center">
          Experience the perfect blend of luxury and nature at Luxuria Mahabaleshwar Oasis.
        </p>
        
        <Card className="max-w-3xl mx-auto bg-card border border-border mt-12">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-center">Reservation Request</CardTitle>
            <CardDescription className="text-center">
              Fill in the details below to start your journey with us.
            </CardDescription>
            
            <div className="flex justify-center mt-6">
              <div className="flex items-center">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm border transition-colors",
                  step === 1 ? "bg-primary text-white border-primary" : "bg-muted text-muted-foreground border-muted"
                )}>
                  1
                </div>
                <div className={cn(
                  "w-12 h-1 transition-colors",
                  step >= 1 ? "bg-primary" : "bg-muted"
                )} />
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm border transition-colors",
                  step === 2 ? "bg-primary text-white border-primary" : "bg-muted text-muted-foreground border-muted"
                )}>
                  2
                </div>
                <div className={cn(
                  "w-12 h-1 transition-colors",
                  step >= 2 ? "bg-primary" : "bg-muted"
                )} />
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm border transition-colors",
                  step === 3 ? "bg-primary text-white border-primary" : "bg-muted text-muted-foreground border-muted"
                )}>
                  3
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {step === 1 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="checkIn"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Check-in Date</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "w-full pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? (
                                      format(field.value, "PPP")
                                    ) : (
                                      <span>Select date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) =>
                                    date < new Date(new Date().setHours(0, 0, 0, 0))
                                  }
                                  initialFocus
                                  className="p-3 pointer-events-auto"
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="checkOut"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Check-out Date</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "w-full pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? (
                                      format(field.value, "PPP")
                                    ) : (
                                      <span>Select date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) =>
                                    date <= (form.watch("checkIn") || new Date(new Date().setHours(0, 0, 0, 0)))
                                  }
                                  initialFocus
                                  className="p-3 pointer-events-auto"
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="roomType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Room Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select room type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="classic-room">Classic Room</SelectItem>
                                <SelectItem value="deluxe-valley">Deluxe Valley View</SelectItem>
                                <SelectItem value="premium-suite">Premium Suite</SelectItem>
                                <SelectItem value="superior-deluxe">Superior Deluxe Room</SelectItem>
                                <SelectItem value="executive-suite">Executive Suite</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="adults"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Adults</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Adults" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="1">1</SelectItem>
                                  <SelectItem value="2">2</SelectItem>
                                  <SelectItem value="3">3</SelectItem>
                                  <SelectItem value="4">4</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="children"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Children</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Children" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="0">0</SelectItem>
                                  <SelectItem value="1">1</SelectItem>
                                  <SelectItem value="2">2</SelectItem>
                                  <SelectItem value="3">3</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {step === 2 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="specialRequests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Special Requests</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Any special requests or preferences..." 
                              className="min-h-[100px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            Optional: Let us know if you have any specific requests.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}
                
                {step === 3 && (
                  <div className="animate-fade-in">
                    <div className="bg-muted p-6 rounded-lg mb-6">
                      <h3 className="text-lg font-serif font-medium mb-4">Booking Summary</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground mb-1">Check-in Date</p>
                          <p className="font-medium">{form.watch("checkIn") ? format(form.watch("checkIn"), "PPP") : "-"}</p>
                        </div>
                        
                        <div>
                          <p className="text-muted-foreground mb-1">Check-out Date</p>
                          <p className="font-medium">{form.watch("checkOut") ? format(form.watch("checkOut"), "PPP") : "-"}</p>
                        </div>
                        
                        <div>
                          <p className="text-muted-foreground mb-1">Room Type</p>
                          <p className="font-medium">
                            {form.watch("roomType") === "classic-room" && "Classic Room"}
                            {form.watch("roomType") === "deluxe-valley" && "Deluxe Valley View"}
                            {form.watch("roomType") === "premium-suite" && "Premium Suite"}
                            {form.watch("roomType") === "superior-deluxe" && "Superior Deluxe Room"}
                            {form.watch("roomType") === "executive-suite" && "Executive Suite"}
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-muted-foreground mb-1">Guests</p>
                          <p className="font-medium">{form.watch("adults")} Adults, {form.watch("children")} Children</p>
                        </div>
                        
                        <div className="md:col-span-2">
                          <p className="text-muted-foreground mb-1">Guest Details</p>
                          <p className="font-medium">{form.watch("name")}</p>
                          <p>{form.watch("email")}</p>
                          <p>{form.watch("phone")}</p>
                        </div>
                        
                        {form.watch("specialRequests") && (
                          <div className="md:col-span-2">
                            <p className="text-muted-foreground mb-1">Special Requests</p>
                            <p>{form.watch("specialRequests")}</p>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="text-sm text-muted-foreground">
                      <p className="mb-2">By completing this booking:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>You agree to our terms and conditions.</li>
                        <li>A team member will contact you to confirm availability and process payment.</li>
                        <li>We'll send a confirmation email with all details once your booking is confirmed.</li>
                      </ul>
                    </div>
                  </div>
                )}
                
                <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                  {step > 1 && (
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={prevStep}
                    >
                      Back
                    </Button>
                  )}
                  
                  {step < 3 ? (
                    <Button 
                      type="button" 
                      className="ml-auto"
                      onClick={nextStep}
                    >
                      Next Step <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button 
                      type="submit" 
                      className="luxury-btn ml-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "Complete Booking"
                      )}
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
