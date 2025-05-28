import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState } from 'react';
// import { testimonials } from './testimonialsData';
import { testimonials } from './Testimonials/testimonialsData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-thin text-center mb-12 text-gray-800"
        >
          Client Stories
        </motion.h2>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="p-8 md:p-12 rounded-xl bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200 shadow-sm"
            >
              <Quote className="text-gray-300 mb-6" size={32} />
              <p className="text-xl italic text-gray-700 mb-8">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="text-right">
                <p className="font-medium text-gray-800">{testimonials[currentIndex].author}</p>
                <p className="text-gray-500">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              <ChevronLeft className="text-gray-700" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              <ChevronRight className="text-gray-700" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}