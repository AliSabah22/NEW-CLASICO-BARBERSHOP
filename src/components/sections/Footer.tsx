"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import BookingCTA from '@/components/ui/BookingCTA';
import { scrollToSection } from '@/utils/scroll';
import { devConfig } from '@/lib/dev-config';

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Silver Experience", href: "#services" },
      { name: "Gold Experience", href: "#services" },
      { name: "Platinum Experience", href: "#services" },
      { name: "Beard Sculpting", href: "#services" },
      { name: "Hot Towel Shave", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#home" },
      { name: "Our Story", href: "#home" },
      { name: "Master Barbers", href: "#gallery" },
      { name: "Luxury Standards", href: "#testimonials" },
      { name: "Careers", href: "#booking" },
    ],
    support: [
      { name: "Contact Us", href: "#booking" },
      { name: "Booking Help", href: "#booking" },
      { name: "Loyalty Program", href: "#services" },
      { name: "Gift Cards", href: "#booking" },
      { name: "FAQ", href: "#booking" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Accessibility", href: "#" },
    ]
  };

  const socialLinks = [
    { name: "Instagram", icon: "📸", href: "#" },
    { name: "Facebook", icon: "📘", href: "#" },
    { name: "Twitter", icon: "🐦", href: "#" },
    { name: "YouTube", icon: "📺", href: "#" },
    { name: "TikTok", icon: "🎵", href: "#" },
  ];

  return (
    <footer ref={containerRef} className="bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Removed yellow blur overlays */}

      <div className="container-custom relative z-10">
        {/* Luxury CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center py-20 border-b border-white/10"
        >
          <div className="bg-black/20 backdrop-blur-xl rounded-3xl p-12 border border-white/20 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready for Your Luxury Experience?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join our elite community of discerning gentlemen who demand nothing but the best. 
              Book your appointment today and experience luxury barbering at its finest.
            </p>
            <div>
              <BookingCTA
                size="lg"
                variant="primary"
                className="px-12 py-5 text-xl font-bold shadow-2xl"
              >
                ✨ Book Your Luxury Appointment ✨
              </BookingCTA>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="mb-6">
                <OptimizedImage
                  src="/images/logo-white.png"
                  alt="Clasico Barbershop"
                  width={180}
                  height={60}
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-white/70 leading-relaxed mb-8 max-w-md">
                Clasico Barbershop represents the pinnacle of luxury grooming. Our master barbers 
                combine traditional techniques with modern precision to deliver exceptional results 
                in an atmosphere of unparalleled sophistication.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-white/80">
                  <span className="w-6 h-6 bg-gold rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>123 Luxury Avenue, Downtown District</span>
                </div>
                <div className="flex items-center text-white/80">
                  <span className="w-6 h-6 bg-gold rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </span>
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center text-white/80">
                  <span className="w-6 h-6 bg-gold rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </span>
                  <span>concierge@clasicobarbershop.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-white font-bold mb-4">Follow Our Luxury Journey</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center text-white border border-white/20"
                    >
                      <span className="text-lg">{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Services Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold text-lg mb-6">Luxury Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href.replace('#', ''));
                      }}
                      className="text-white/70 flex items-center"
                    >
                      <span className="w-2 h-2 bg-gold rounded-full mr-3" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href.replace('#', ''));
                      }}
                      className="text-white/70 flex items-center"
                    >
                      <span className="w-2 h-2 bg-gold rounded-full mr-3" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Support Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold text-lg mb-6">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href.replace('#', ''));
                      }}
                      className="text-white/70 flex items-center"
                    >
                      <span className="w-2 h-2 bg-gold rounded-full mr-3" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © {currentYear} Clasico Barbershop. All rights reserved. Luxury barbering at its finest.
            </div>
            <div className="flex space-x-6">
              {footerLinks.legal.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-white/60 text-sm"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Luxury Corner Decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-gold/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-gold/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-gold/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-gold/30" />
    </footer>
  );
} 