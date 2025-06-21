"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import BookingCTA from '@/components/ui/BookingCTA';

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const services = [
    {
      name: "Silver Experience",
      description: "Classic precision haircut with hot towel treatment and styling consultation.",
      price: "$45",
      duration: "45 min",
      luxury: "Standard",
      features: ["Precision Haircut", "Hot Towel Treatment", "Styling Consultation", "Premium Products"],
      image: "/images/packages/silver.png"
    },
    {
      name: "Gold Experience",
      description: "Premium haircut with beard trim, hot towel shave, and luxury grooming products.",
      price: "$75",
      duration: "75 min",
      luxury: "Premium",
      features: ["Precision Haircut", "Beard Trim & Shape", "Hot Towel Shave", "Luxury Products", "Style Consultation"],
      image: "/images/packages/gold.png"
    },
    {
      name: "Platinum Experience",
      description: "Ultimate luxury experience with full grooming, massage, and premium treatment.",
      price: "$120",
      duration: "120 min",
      luxury: "Luxury",
      features: ["Precision Haircut", "Beard Sculpting", "Hot Towel Shave", "Scalp Massage", "Premium Products", "Style Masterclass"],
      image: "/images/packages/platinum.png"
    }
  ];

  const additionalServices = [
    { name: "Beard Sculpting", price: "$35", duration: "30 min" },
    { name: "Hot Towel Shave", price: "$40", duration: "45 min" },
    { name: "Scalp Treatment", price: "$25", duration: "20 min" },
    { name: "Hair Coloring", price: "$60", duration: "90 min" },
    { name: "Style Consultation", price: "$20", duration: "15 min" },
    { name: "Product Application", price: "$15", duration: "10 min" },
  ];

  return (
    <section ref={containerRef} id="services" className="bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden section-padding">
      {/* Removed yellow blur overlays */}

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-3 bg-black/20 rounded-full text-gold text-sm font-semibold mb-8 border border-white/20"
          >
            <span className="w-3 h-3 bg-gold rounded-full mr-3" />
            LUXURY SERVICES
            <span className="w-3 h-3 bg-gold rounded-full ml-3" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
          >
            Premium Grooming
            <span className="block text-gold">Experiences</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the art of traditional barbering elevated to luxury standards. 
            Each service is crafted to deliver exceptional results in an atmosphere of sophistication.
          </motion.p>
        </motion.div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 transition-all duration-500 h-full">
                {/* Luxury Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gold text-black px-8 py-3 rounded-full text-sm font-bold shadow-2xl border border-gold/30">
                    {service.luxury}
                  </span>
                </div>

                {/* Service Icon */}
                <div className="w-24 h-24 bg-black/20 rounded-3xl flex items-center justify-center mb-8 mx-auto border border-white/20">
                  <OptimizedImage
                    src={service.image}
                    alt={service.name}
                    width={60}
                    height={60}
                    className="w-12 h-12"
                  />
                </div>

                {/* Service Details */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-white/70 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="flex justify-center items-center space-x-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gold">{service.price}</div>
                      <div className="text-white/60 text-sm">Price</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gold">{service.duration}</div>
                      <div className="text-white/60 text-sm">Duration</div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * featureIndex }}
                      viewport={{ once: true }}
                      className="flex items-center text-white/80"
                    >
                      <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="text-center">
                  <BookingCTA
                    size="lg"
                    variant="primary"
                    className="w-full"
                  >
                    Book {service.name}
                  </BookingCTA>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-display font-bold text-white mb-8">
            Additional <span className="text-gold">Services</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {additionalServices.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-bold text-white">{service.name}</h4>
                <span className="text-2xl font-bold text-gold">{service.price}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60">{service.duration}</span>
                <BookingCTA size="sm" variant="outline">
                  Book Now
                </BookingCTA>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-black/20 backdrop-blur-xl rounded-3xl p-12 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Experience Luxury Grooming?
            </h3>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Book your appointment today and discover why discerning gentlemen choose Clasico Barbershop.
            </p>
            <div>
              <BookingCTA
                size="lg"
                variant="primary"
                className="px-12 py-5 text-xl font-bold shadow-2xl"
              >
                ✨ Book Your Appointment ✨
              </BookingCTA>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 