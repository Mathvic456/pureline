import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, User, Mail, Home, Clock, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
// import { useForm } from "@formspree/react";
import { useState } from "react";

const serviceOptions = [
  "Residential Design",
  "Commercial Spaces",
  "Custom Furniture",
  "Space Planning",
  "Material Consultation"
];

export default function BookingModal({ isOpen, onClose }) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Booking submitted:", data);
    setIsConfirmed(true);
  };

  const handleNewBooking = () => {
    setIsConfirmed(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
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
            className="bg-white rounded-xl max-w-md w-full relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              <X size={20} />
            </button>

            {!isConfirmed ? (
              <div className="p-8">
                <h3 className="text-2xl font-thin mb-6">Schedule Consultation</h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Service Type */}
                  <div className="relative">
                    <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <select
                      {...register("serviceType", { required: "Please select a service" })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg appearance-none bg-white"
                    >
                      <option value="">Select Service Type</option>
                      {serviceOptions.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                    {errors.serviceType && (
                      <p className="text-red-500 text-sm mt-1">{errors.serviceType.message}</p>
                    )}
                  </div>

                  {/* Name */}
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      {...register("name", { required: "Name is required" })}
                      placeholder="Full Name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      placeholder="Email Address"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      {...register("phone", { 
                        required: "Phone number is required",
                        pattern: {
                          value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                          message: "Invalid phone number"
                        }
                      })}
                      placeholder="Phone Number"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Date */}
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="date"
                      {...register("date", { 
                        required: "Date is required",
                        min: {
                          value: new Date().toISOString().split('T')[0],
                          message: "Date must be in the future"
                        }
                      })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg"
                      onChange={(e) => setSelectedDate(e.target.value)}
                    />
                    {errors.date && (
                      <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
                    )}
                  </div>

                  {/* Time */}
                  {selectedDate && (
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <select
                        {...register("time", { required: "Time is required" })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg appearance-none bg-white"
                      >
                        <option value="">Select Time</option>
                        {['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'].map((time) => (
                          <option key={time} value={time}>{time} AM/PM</option>
                        ))}
                      </select>
                      {errors.time && (
                        <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
                      )}
                    </div>
                  )}

                  {/* Additional Notes */}
                  <div>
                    <textarea
                      {...register("notes")}
                      placeholder="Additional notes (optional)"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      "Confirm Booking"
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium mb-2">Booking Confirmed!</h3>
                <p className="text-gray-600 mb-6">We've sent the details to your email.</p>
                <button
                  onClick={handleNewBooking}
                  className="w-full py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}