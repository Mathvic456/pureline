import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, User, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Contact form submitted:', data);
    // Add your form submission logic here
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-thin text-center mb-12">Contact Us</h2>
        
        <motion.form 
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm"
        >
          <div className="space-y-6">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                {...register("name", { required: "Name is required" })}
                placeholder="Full Name"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address"
                  }
                })}
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 text-gray-400" />
              <textarea
                {...register("message", { required: "Message is required" })}
                placeholder="Your Message"
                rows={5}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>
            
            <button
              type="submit"
              className="w-full py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}