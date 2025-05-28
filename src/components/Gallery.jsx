import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "Oceanview Villa", type: "Residential", image: "/project1.jpg" },
  { id: 2, title: "Tech Hub Office", type: "Commercial", image: "/project2.jpg" },
  // Add 4-6 more projects...
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-thin text-center mb-12 text-gray-800"
        >
          Our Work
        </motion.h2>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 0.98 }}
              className="relative group break-inside-avoid"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full rounded-lg shadow-sm transition-all duration-300 group-hover:shadow-md"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black/20 rounded-lg flex items-end p-4"
              >
                <div>
                  <h3 className="text-white text-lg font-medium">{project.title}</h3>
                  <p className="text-gray-200 text-sm">{project.type}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}