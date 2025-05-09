
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
import { motion } from "framer-motion";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <motion.div 
        className="flex flex-col min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
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
      </motion.div>
    </ThemeProvider>
  );
};

export default Index;
