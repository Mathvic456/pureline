import { motion } from 'framer-motion';
import { getIconComponent } from './iconUtil'; // Helper for dynamic icons

const cardVariants = {
  hidden: { y: 30, opacity: 0, rotate: -3 },
  visible: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 120 }
  },
  hover: {
    y: -10,
    rotate: [0, -2, 2, 0],
    transition: { 
      y: { stiffness: 400 },
      rotate: { duration: 0.8 }
    }
  }
};

export default function ServiceCard({ service, onClick }) {
  const IconComponent = getIconComponent(service.icon);
  
  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      onClick={onClick}
      className={`p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md cursor-pointer bg-gradient-to-br ${service.color}`}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="flex justify-center text-gray-700 mb-6"
      >
        <IconComponent size={36} />
      </motion.div>
      
      <h3 className="text-xl font-medium text-center mb-3 text-gray-800">
        {service.title}
      </h3>
      
      <p className="text-center text-gray-600">
        {service.shortDesc}
      </p>
      
      <div className="mt-4 text-center">
        <span className="inline-block px-3 py-1 text-sm bg-white/80 rounded-full">
          Learn more →
        </span>
      </div>
    </motion.div>
  );
}