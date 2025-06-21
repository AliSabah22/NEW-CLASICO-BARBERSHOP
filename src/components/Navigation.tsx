"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OptimizedImage from "@/components/ui/OptimizedImage";
import BookingCTA from "@/components/ui/BookingCTA";
import { scrollToSection } from "@/utils/scroll";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'services', 'gallery', 'testimonials', 'booking'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home", icon: "🏠" },
    { href: "#services", label: "Services", icon: "✂️" },
    { href: "#gallery", label: "Gallery", icon: "🖼️" },
    { href: "#testimonials", label: "Testimonials", icon: "⭐" },
    { href: "#booking", label: "Book Now", icon: "📅" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    scrollToSection(href.replace('#', ''));
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Luxury Logo */}
          <div
            className="relative z-10 cursor-pointer group"
            onClick={() => scrollToSection('home')}
          >
            <div
              className="relative"
            >
              <OptimizedImage
                src={isScrolled ? "/images/logo.png" : "/images/logo-white.png"}
                alt="Clasico Barbershop"
                width={160}
                height={60}
                className="h-14 w-auto transition-all duration-300"
                priority
              />
              {!isScrolled && (
                <div
                  className="absolute inset-0 bg-gradient-to-r from-gold/20 to-yellow-400/20 rounded-lg opacity-0"
                />
              )}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`flex items-center px-6 py-3 rounded-2xl font-medium transition-all duration-300 relative group ${
                    isScrolled
                      ? "text-gray-900"
                      : "text-white"
                  } ${
                    activeSection === link.href.replace('#', '') 
                      ? 'bg-gold/20 text-gold' 
                      : ''
                  }`}
                >
                  <span className="mr-2 text-lg">{link.icon}</span>
                  {link.label}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-gold/10 to-yellow-400/10 rounded-2xl opacity-0"
                  />
                </a>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="ml-4"
            >
              <BookingCTA 
                size="md" 
                variant="primary"
                className="px-8 py-3 font-bold shadow-xl"
              >
                ✨ Book Now ✨
              </BookingCTA>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-10 p-3 rounded-2xl transition-colors duration-300"
          >
            <div className="w-7 h-7 flex flex-col justify-center items-center">
              <motion.span
                className={`block w-7 h-0.5 transition-all duration-300 rounded-full ${
                  isScrolled ? "bg-gray-900" : "bg-white"
                }`}
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 8 : 0,
                }}
              />
              <motion.span
                className={`block w-7 h-0.5 transition-all duration-300 mt-1.5 rounded-full ${
                  isScrolled ? "bg-gray-900" : "bg-white"
                }`}
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                }}
              />
              <motion.span
                className={`block w-7 h-0.5 transition-all duration-300 mt-1.5 rounded-full ${
                  isScrolled ? "bg-gray-900" : "bg-white"
                }`}
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -8 : 0,
                }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              className="lg:hidden bg-white/95 backdrop-blur-xl rounded-3xl mt-4 overflow-hidden shadow-2xl border border-gray-200/50"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="py-8 space-y-2"
              >
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`flex items-center px-8 py-4 text-gray-900 transition-all duration-300 ${
                      activeSection === link.href.replace('#', '') 
                        ? 'bg-gold/10 text-gold' 
                        : ''
                    }`}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <span className="mr-4 text-xl">{link.icon}</span>
                    <span className="text-lg font-semibold">{link.label}</span>
                  </motion.a>
                ))}
                
                <div className="px-8 pt-6">
                  <BookingCTA 
                    size="lg" 
                    variant="primary"
                    className="w-full font-bold shadow-xl"
                  >
                    ✨ Book Your Experience ✨
                  </BookingCTA>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation; 