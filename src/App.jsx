import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
// import ContactForm from './components/ContactForm';
import ContactForm from './components/ContactForm';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Function to handle booking from any component
  const handleBookClick = () => {
    setIsBookingOpen(true);
  };

  return (
    <div className="font-sans antialiased">
      <Navbar onBookClick={handleBookClick} />
      <Hero onBookClick={handleBookClick} />
      <Services onServiceSelect={setSelectedService} />
      <Portfolio />
      <Testimonials />
      <ContactForm />
      
      {/* Modals */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
      
      {selectedService && (
        <ServiceModal 
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
      
      <Footer />
    </div>
  );
}