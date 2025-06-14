"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden -mt-20">
        <Image
          src="/images/about-hero.jpg"
          alt="About Clasico Barbershop"
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
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
          >
            Discover the story, values, and people behind Clasico Barbershop.
          </motion.p>
        </div>
      </section>
      <section className="container-custom py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-display mb-4 text-black">Our Mission</h2>
            <p className="text-black/80 mb-6">
              At Clasico Barbershop, we blend tradition with modern luxury to create a grooming experience like no other. Our mission is to help every client look and feel their best in a welcoming, sophisticated environment.
            </p>
            <h3 className="text-2xl font-semibold mb-2 text-black">Meet the Team</h3>
            <ul className="space-y-2">
              <li className="text-black">Ali Sabah – Founder & Master Barber</li>
              <li className="text-black">John Doe – Senior Barber</li>
              <li className="text-black">Jane Smith – Grooming Specialist</li>
            </ul>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-luxury">
            <Image
              src="/images/team.jpg"
              alt="Our Team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
} 