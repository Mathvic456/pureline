import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.jpg';

export default function Hero({ onBookClick }) {
  // Animation variants
  const logoContainerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      rotate: [0, -3, 3, 0],
      transition: { duration: 0.8 }
    }
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1 + 0.3,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 pt-16 relative overflow-hidden"
    >
      {/* Floating Logo - Top Left */}
      <motion.div
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={logoContainerVariants}
        className="absolute top-8 left-8 md:top-12 md:left-12 z-10"
      >
        <div className="p-1 bg-gradient-to-br from-gray-200 to-white rounded-full shadow-lg">
          <div className="p-2 bg-white rounded-full">
            <img 
              src={logo} 
              alt="Pureline Design Logo"
              className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border border-gray-100"
            />
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 text-center flex flex-col items-center relative z-20">
        {/* Centered Logo */}
        <motion.div
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={logoContainerVariants}
          className="mb-6 md:mb-10"
        >
          <div className="p-2 bg-gradient-to-br from-gray-200 to-white rounded-full shadow-xl">
            <div className="p-3 bg-white rounded-full">
              <img 
                src={logo}
                alt="Pureline Design"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-gray-100"
              />
            </div>
          </div>
        </motion.div>

        <motion.h1 
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-5xl md:text-7xl font-thin tracking-tight text-gray-800 mb-4"
        >
          Pureline Design
        </motion.h1>
        
        <motion.p 
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto"
        >
          Where <span className="italic font-medium bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-400">less is more</span> meets timeless elegance.
        </motion.p>

        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ 
              y: -4,
              scale: 1.03,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-full shadow-md hover:shadow-lg transition-all"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Portfolio
          </motion.button>
          
          <motion.button
            whileHover={{ 
              y: -4,
              scale: 1.03,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="px-8 py-3 border border-gray-300 bg-white rounded-full flex items-center justify-center gap-2 hover:bg-gray-50 transition-all"
            onClick={onBookClick}
          >
            Book Consultation <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{ 
            y: [0, -8, 0],
            transition: { 
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <div className="p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
            <ChevronDown className="text-gray-500" size={20} />
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.5 }}
          className="text-xs text-gray-500 mt-2 tracking-wider"
        >
          SCROLL TO EXPLORE
        </motion.p>
      </motion.div>

      {/* Subtle Floating Elements */}
      <motion.div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50
            }}
            animate={{ 
              opacity: [0, 0.05, 0],
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              rotate: [0, 360],
              transition: {
                duration: 15 + i * 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }
            }}
            className="absolute border border-gray-200 rounded-full"
            style={{
              width: `${50 + i * 30}px`,
              height: `${50 + i * 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}