import { useState } from 'react';
import { services } from './servicesData';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-thin text-center mb-12">Our Services</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              service={service}
              onClick={() => setSelectedService(service)}
            />
          ))}
        </div>

        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </div>
    </section>
  );
}