import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-thin text-white mb-4">Pureline Design</h3>
            <p className="mb-4">Creating timeless spaces through minimalist design principles.</p>
            <p>© {new Date().getFullYear()} All rights reserved.</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-thin text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Services', 'Gallery', 'Testimonials', 'Booking'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="hover:text-white transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-thin text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              {[
                { icon: <Instagram />, label: "Instagram" },
                { icon: <Facebook />, label: "Facebook" },
                { icon: <Twitter />, label: "Twitter" }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href="#"
                  whileHover={{ y: -3 }}
                  aria-label={social.label}
                  className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}