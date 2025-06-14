"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  { title: "Classic Haircut", description: "Precision cuts tailored to your style." },
  { title: "Luxury Shave", description: "Hot towel, premium lather, and expert technique." },
  { title: "Beard Sculpting", description: "Detailed shaping and grooming for a sharp look." },
  { title: "Kids & Teens", description: "Trendy and classic cuts for all ages." },
  { title: "Signature Facial", description: "Relaxing treatment for refreshed skin." },
];

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden -mt-20">
        <Image
          src="/images/services-hero.jpg"
          alt="Barbershop services"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container-custom relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-display text-white mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
          >
            Experience luxury grooming with our full range of services.
          </motion.p>
        </div>
      </section>
      <section className="container-custom py-16">
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-gold"
            >
              <h3 className="text-2xl font-semibold mb-2 text-black">{service.title}</h3>
              <p className="text-black/80">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
} 