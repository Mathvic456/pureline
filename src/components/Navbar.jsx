import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ onBookClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['Services', 'Portfolio', 'Testimonials', 'Contact'];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <motion.a 
          href="#"
          whileHover={{ scale: 1.05 }}
          className="text-xl font-thin tracking-wider text-gray-800"
        >
          PURELINE
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2 }}
              className="text-gray-600 hover:text-gray-900 px-3 py-2 transition"
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={onBookClick}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
          >
            Book Consultation
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-700"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ type: "spring", damping: 20 }}
        className="md:hidden overflow-hidden bg-white/95"
      >
        <div className="px-4 py-2 flex flex-col">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="py-3 border-b border-gray-100 text-gray-700 text-lg"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <button
            onClick={() => {
              onBookClick();
              setIsOpen(false);
            }}
            className="py-3 text-gray-700 text-lg font-medium"
          >
            Book Consultation
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
}