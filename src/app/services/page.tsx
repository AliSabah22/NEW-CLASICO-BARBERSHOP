"use client";

import { Navigation } from "@/components/layout/navigation";
import { motion } from "framer-motion";

const services = [
  {
    title: "Classic Haircut",
    description: "Traditional scissor and clipper cut with detailed attention to your style preferences.",
    duration: "45 min",
    price: "$45",
  },
  {
    title: "Beard Trim & Shape",
    description: "Professional beard grooming with hot towel treatment and detailed shaping.",
    duration: "30 min",
    price: "$35",
  },
  {
    title: "Hot Towel Shave",
    description: "Traditional straight razor shave with hot towel treatment and premium products.",
    duration: "45 min",
    price: "$50",
  },
  {
    title: "Haircut & Beard Combo",
    description: "Complete grooming package including haircut and beard trim.",
    duration: "60 min",
    price: "$70",
  },
  {
    title: "Kids Haircut",
    description: "Special attention for our younger clients with a gentle approach.",
    duration: "30 min",
    price: "$30",
  },
  {
    title: "Hair Color",
    description: "Professional hair coloring service with premium products.",
    duration: "90 min",
    price: "$85",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1 
              className="font-serif text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Services
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Experience premium grooming services tailored to your needs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-xl font-bold">{service.title}</h3>
                  <span className="text-gold font-medium">{service.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {service.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 