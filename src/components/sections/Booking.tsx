"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import BookingCTA from '@/components/ui/BookingCTA';

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function Booking() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const features = [
    {
      icon: "👑",
      title: "VIP Treatment",
      description: "Exclusive access to our premium services and personalized attention"
    },
    {
      icon: "✨",
      title: "Luxury Products",
      description: "Premium grooming products from world-renowned brands"
    },
    {
      icon: "🎯",
      title: "Precision Craftsmanship",
      description: "Master barbers with years of experience and attention to detail"
    },
    {
      icon: "🌟",
      title: "Elite Atmosphere",
      description: "Sophisticated environment designed for the discerning gentleman"
    }
  ];

  const benefits = [
    "Complimentary consultation with our style experts",
    "Premium refreshments and luxury amenities",
    "Exclusive member benefits and loyalty rewards",
    "Priority booking and flexible scheduling",
    "Professional photography of your transformation",
    "Luxury gift packaging for products"
  ];

  return (
    <section ref={containerRef} id="booking" className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{ y, opacity }}
        >
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-r from-gold/10 to-yellow-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-gold/10 to-yellow-400/10 rounded-full blur-3xl" />
        </motion.div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gold/20 to-yellow-400/20 rounded-full text-gold text-sm font-semibold mb-8 border border-gold/30"
          >
            <span className="w-3 h-3 bg-gold rounded-full mr-3 animate-pulse" />
            LUXURY BOOKING
            <span className="w-3 h-3 bg-gold rounded-full ml-3 animate-pulse" />
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white mb-8 tracking-tight">
            Book Your
            <span className="block bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent">
              Luxury Experience
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
            Reserve your appointment with our master barbers and experience the pinnacle of luxury grooming. 
            Every moment is crafted to exceed your expectations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
              <h3 className="text-3xl font-display font-bold text-white mb-8 text-center">
                Reserve Your Appointment
              </h3>
              
              <div className="space-y-8">
                {/* Service Selection */}
                <div>
                  <label className="block text-white font-semibold mb-4">Select Your Experience</label>
                  <div className="grid gap-4">
                    {[
                      { name: "Silver Experience", price: "$50", duration: "60 min", popular: false },
                      { name: "Gold Experience", price: "$75", duration: "90 min", popular: true },
                      { name: "Platinum Experience", price: "$110", duration: "120 min", popular: false },
                    ].map((service, index) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                        className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                          service.popular 
                            ? 'border-gold bg-gradient-to-r from-gold/20 to-yellow-400/20' 
                            : 'border-white/20 bg-white/5 hover:border-gold/50'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {service.popular && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <span className="bg-gradient-to-r from-gold to-yellow-400 text-black px-4 py-1 rounded-full text-xs font-bold">
                              ⭐ MOST POPULAR ⭐
                            </span>
                          </div>
                        )}
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white font-bold text-lg">{service.name}</h4>
                            <p className="text-white/70 text-sm">{service.duration}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-gold font-black text-xl">{service.price}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Date & Time Selection */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-3">Preferred Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-gold/50 transition-colors"
                      placeholder="Select date"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-3">Preferred Time</label>
                    <select className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-gold/50 transition-colors">
                      <option value="">Select time</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-3">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-gold/50 transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-3">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-gold/50 transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-3">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-3">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-3">Special Requests</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                    placeholder="Any special requests or preferences..."
                  />
                </div>

                {/* Booking Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <BookingCTA
                    size="lg"
                    variant="primary"
                    className="w-full py-6 text-xl font-bold shadow-2xl"
                  >
                    ✨ Confirm Your Luxury Appointment ✨
                  </BookingCTA>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Features & Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            {/* Luxury Features */}
            <div className="mb-12">
              <h3 className="text-3xl font-display font-bold text-white mb-8">
                Why Choose Clasico?
              </h3>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 group"
                    whileHover={{ x: 10 }}
                  >
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-2">{feature.title}</h4>
                      <p className="text-white/70 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Exclusive Benefits */}
            <div className="bg-gradient-to-r from-gold/20 to-yellow-400/20 backdrop-blur-xl rounded-3xl p-8 border border-gold/30">
              <h4 className="text-2xl font-display font-bold text-white mb-6">
                Exclusive Member Benefits
              </h4>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-white/90"
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-gold to-yellow-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h4 className="text-xl font-bold text-white mb-4">Need Assistance?</h4>
                <p className="text-white/70 mb-4">
                  Our luxury concierge team is here to help you with any questions or special arrangements.
                </p>
                <div className="space-y-2 text-white/80">
                  <p>📞 (555) 123-4567</p>
                  <p>✉️ concierge@clasicobarbershop.com</p>
                  <p>🕒 Mon-Sat: 9AM-8PM | Sun: 10AM-6PM</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 