"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import LuxuryButton from "@/components/ui/LuxuryButton";

const services = [
  {
    title: "Classic Haircut",
    description: "A timeless cut that combines traditional techniques with modern precision.",
    price: "$45",
    duration: "45 min",
    image: "/images/services/classic-cut.jpg"
  },
  {
    title: "Royal Shave",
    description: "Experience the art of traditional wet shaving with hot towels and premium products.",
    price: "$35",
    duration: "30 min",
    image: "/images/services/royal-shave.jpg"
  },
  {
    title: "Executive Package",
    description: "A complete grooming experience including haircut, shave, and facial treatment.",
    price: "$85",
    duration: "90 min",
    image: "/images/services/executive-package.jpg"
  }
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display mb-4 text-black">
            Our Services
          </h2>
          <p className="text-black/80 max-w-2xl mx-auto">
            Experience luxury grooming with our comprehensive range of services.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-gold hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-display text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white/70 mb-4">
                  {service.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gold font-medium">
                    {service.price}
                  </span>
                  <span className="text-white/50">
                    {service.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 