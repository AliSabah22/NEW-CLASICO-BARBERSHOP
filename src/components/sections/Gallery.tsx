"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import BookingCTA from '@/components/ui/BookingCTA';

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    { src: "/images/gallery/gallery-1.jpg", alt: "Luxury barbershop interior", category: "Interior" },
    { src: "/images/gallery/gallery-2.jpg", alt: "Master barber at work", category: "Service" },
    { src: "/images/gallery/gallery-3.jpg", alt: "Premium grooming tools", category: "Tools" },
    { src: "/images/gallery/gallery-4.jpg", alt: "Luxury waiting area", category: "Interior" },
    { src: "/images/gallery/gallery-5.jpg", alt: "Beard sculpting service", category: "Service" },
    { src: "/images/gallery/gallery-6.jpg", alt: "Premium products display", category: "Products" },
  ];

  const categories = ["All", "Interior", "Service", "Tools", "Products"] as const;
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section ref={containerRef} id="gallery" className="bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden section-padding">
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
            OUR GALLERY
            <span className="w-3 h-3 bg-gold rounded-full ml-3" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
          >
            Luxury in Every
            <span className="block text-gold">Detail</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Step into our world of luxury and precision. Every corner, every tool, and every moment 
            is crafted to deliver an unparalleled barbering experience.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gold text-black shadow-2xl'
                  : 'bg-black/20 text-white/80 border border-white/20'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <span className="px-4 py-2 bg-black/90 backdrop-blur-sm text-white text-xs font-bold rounded-full shadow-lg">
                      {image.category}
                    </span>
                  </div>
                </div>
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
              Experience Our Luxury Environment
            </h3>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Book your appointment and step into a world where every detail is crafted for your comfort and satisfaction.
            </p>
            <div>
              <BookingCTA
                size="lg"
                variant="primary"
                className="px-12 py-5 text-xl font-bold shadow-2xl"
              >
                ✨ Book Your Visit ✨
              </BookingCTA>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal for selected image */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <OptimizedImage
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
} 