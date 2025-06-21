"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';

const testimonials = [
  {
    id: 1,
    name: "Alexander Rodriguez",
    role: "CEO, Tech Innovations",
    image: "/images/testimonials/customer-1.jpg",
    rating: 5,
    text: "The Platinum Experience at Clasico Barbershop is absolutely exceptional. The attention to detail, luxury atmosphere, and master craftsmanship exceeded all my expectations. This is what premium grooming should feel like.",
    luxury: "Platinum Client",
    verified: true,
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Marcus Thompson",
    role: "Professional Athlete",
    image: "/images/testimonials/customer-2.jpg",
    rating: 5,
    text: "As someone who's always in the spotlight, I need perfection. Clasico delivers that every single time. The Gold Experience is my go-to for maintaining my signature look with unmatched precision.",
    luxury: "Gold Member",
    verified: true,
    date: "1 month ago"
  },
  {
    id: 3,
    name: "David Chen",
    role: "Investment Banker",
    image: "/images/testimonials/customer-3.jpg",
    rating: 5,
    text: "The level of professionalism and luxury here is unmatched. From the moment you walk in, you feel like royalty. The Silver Experience provides exceptional value with premium quality.",
    luxury: "Silver Member",
    verified: true,
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Film Director",
    image: "/images/testimonials/customer-4.jpg",
    rating: 5,
    text: "I've been to barbershops all over the world, but nothing compares to Clasico. The artistry, the atmosphere, the attention to detail - it's a complete luxury experience that's worth every penny.",
    luxury: "Platinum Client",
    verified: true,
    date: "1 week ago"
  },
  {
    id: 5,
    name: "Robert Martinez",
    role: "Restaurant Owner",
    image: "/images/testimonials/customer-5.jpg",
    rating: 5,
    text: "The Gold Experience transformed my grooming routine. The scalp massage alone is worth the visit. This is luxury barbering at its finest - highly recommend to anyone who values quality.",
    luxury: "Gold Member",
    verified: true,
    date: "2 months ago"
  },
  {
    id: 6,
    name: "Michael O'Connor",
    role: "Architect",
    image: "/images/testimonials/customer-6.jpg",
    rating: 5,
    text: "Clasico Barbershop understands that grooming is an art form. The precision, the luxury products, the expert consultation - everything is designed to make you look and feel your absolute best.",
    luxury: "Silver Member",
    verified: true,
    date: "1 month ago"
  }
];

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={containerRef} id="testimonials" className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{ y, opacity }}
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gold/10 to-yellow-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-gold/10 to-yellow-400/10 rounded-full blur-3xl" />
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
            ELITE TESTIMONIALS
            <span className="w-3 h-3 bg-gold rounded-full ml-3 animate-pulse" />
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white mb-8 tracking-tight">
            What Our
            <span className="block bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent">
              Elite Clients Say
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
            Discover why discerning gentlemen choose Clasico Barbershop for their luxury grooming needs. 
            Our commitment to excellence has earned us the trust of professionals and celebrities alike.
          </p>
        </motion.div>

        {/* Luxury Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {[
            { number: '1000+', label: 'Elite Clients', icon: '👑' },
            { number: '4.9★', label: 'Average Rating', icon: '⭐' },
            { number: '98%', label: 'Satisfaction Rate', icon: '💎' },
            { number: '15+', label: 'Years of Excellence', icon: '🏆' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-black text-gold mb-2">
                {stat.number}
              </div>
              <div className="text-white/70 text-sm font-medium tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Client Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                className="relative flex-shrink-0"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gold/30 shadow-2xl">
                  <OptimizedImage
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-gold to-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-black text-xs font-bold">✓</span>
                </div>
              </motion.div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  {/* Rating */}
                  <div className="flex justify-center lg:justify-start gap-1">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="text-2xl text-gold"
                      >
                        ⭐
                      </motion.span>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-2xl md:text-3xl text-white leading-relaxed font-light italic">
                    "{testimonials[activeTestimonial].text}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-center lg:justify-start gap-3">
                      <h4 className="text-xl font-bold text-white">
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <span className="px-3 py-1 bg-gradient-to-r from-gold/20 to-yellow-400/20 text-gold text-xs font-bold rounded-full border border-gold/30">
                        {testimonials[activeTestimonial].luxury}
                      </span>
                    </div>
                    <p className="text-white/70 font-medium">
                      {testimonials[activeTestimonial].role}
                    </p>
                    <p className="text-white/50 text-sm">
                      {testimonials[activeTestimonial].date}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <motion.button
              onClick={prevTestimonial}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ←
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              →
            </motion.button>
          </div>
        </motion.div>

        {/* Testimonial Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
              viewport={{ once: true }}
              className="group"
              onHoverStart={() => setHoveredCard(testimonial.id)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ y: -10, rotateY: 5 }}
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold/30">
                      <OptimizedImage
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-white/70 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-gradient-to-r from-gold/20 to-yellow-400/20 text-gold text-xs font-bold rounded-full border border-gold/30">
                    {testimonial.luxury}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-gold">⭐</span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-white/90 leading-relaxed mb-4 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Footer */}
                <div className="flex items-center justify-between text-white/50 text-sm">
                  <span>{testimonial.date}</span>
                  {testimonial.verified && (
                    <span className="flex items-center gap-1">
                      <span className="w-4 h-4 bg-gold rounded-full flex items-center justify-center">
                        <span className="text-black text-xs font-bold">✓</span>
                      </span>
                      Verified
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Luxury CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-gold/20 to-yellow-400/20 backdrop-blur-xl rounded-3xl p-12 border border-gold/30">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Join Our Elite Community
            </h3>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the luxury and precision that our elite clients rave about. 
              Book your appointment today and become part of the Clasico family.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-gold to-yellow-400 text-black hover:from-gold/90 hover:to-yellow-400/90 px-12 py-5 rounded-2xl font-bold transition-all duration-300 text-xl shadow-2xl hover:shadow-3xl"
            >
              ✨ Book Your Luxury Experience ✨
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
} 