import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ServiceModal({ service, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className={`bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative ${service.color}`}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full bg-white shadow-md"
          >
            <X size={20} />
          </button>
          
          <div className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                {/* Dynamic icon would go here */}
              </div>
              <h3 className="text-2xl font-medium">{service.title}</h3>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg">{service.fullDesc}</p>
              
              <div>
                <h4 className="font-medium mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Our Process:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.process.map((step, i) => (
                    <span key={i} className="px-3 py-1 bg-white rounded-full text-sm shadow-sm">
                      {step}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}