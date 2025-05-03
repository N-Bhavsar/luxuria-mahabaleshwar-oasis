
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { RoomsSection } from "@/components/RoomsSection";
import { AmenitiesSection } from "@/components/AmenitiesSection";
import { AttractionsSection } from "@/components/AttractionsSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { BookingForm } from "@/components/BookingForm";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-1">
          <HeroSection />
          <AboutSection />
          <RoomsSection />
          <AmenitiesSection />
          <AttractionsSection />
          <ReviewsSection />
          <BookingForm />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
