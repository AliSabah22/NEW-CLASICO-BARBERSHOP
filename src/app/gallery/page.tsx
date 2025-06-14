"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
];

export default function GalleryPage() {
  return (
    <>
      <Navigation />
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden -mt-20">
        <Image
          src="/images/gallery-hero.jpg"
          alt="Barbershop gallery"
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
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
          >
            Explore our space, our work, and our story in pictures.
          </motion.p>
        </div>
      </section>
      <section className="container-custom py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryImages.map((src, idx) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src={src}
                alt={`Gallery image ${idx + 1}`}
                width={600}
                height={400}
                className="object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
} 