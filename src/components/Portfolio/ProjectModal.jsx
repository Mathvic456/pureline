import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function ProjectModal({ project, isOpen, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex(prev => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-medium">{project.title}</h3>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            {/* Image Carousel */}
            <div className="relative flex-1 overflow-hidden">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
              />

              {/* Navigation Arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-md hover:bg-white"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-md hover:bg-white"
                  >
                    <ArrowRight size={20} />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 px-3 py-1 rounded-full text-sm shadow-md">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6 border-t">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h4 className="font-medium mb-2">Project Description</h4>
                  <p className="text-gray-700">{project.description}</p>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Details</h4>
                  <ul className="space-y-2">
                    <li><strong>Location:</strong> {project.location}</li>
                    <li><strong>Year:</strong> {project.year}</li>
                    <li><strong>Type:</strong> {project.type}</li>
                    <li>
                      <strong>Tags:</strong> {project.tags.join(', ')}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}