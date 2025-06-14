"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-black'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 relative">
          {/* Left: Barbershop Name */}
          <Link href="/" className="text-2xl font-display text-gold z-10">
            Clasico Barbershop
          </Link>

          {/* Center: Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-0">
            <Link href="/">
              <Image
                src="/Logo GD-Photoroom.png"
                alt="Clasico Barbershop Logo"
                width={90}
                height={90}
                priority
                className="object-contain h-16 w-auto"
              />
            </Link>
          </div>

          {/* Right: Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ml-auto z-10">
            <Link href="/services" className="text-gold hover:text-gold/80 transition-colors">
              Services
            </Link>
            <Link href="/gallery" className="text-gold hover:text-gold/80 transition-colors">
              Gallery
            </Link>
            <Link href="/about" className="text-gold hover:text-gold/80 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gold hover:text-gold/80 transition-colors">
              Contact
            </Link>
            <Button 
              variant="default" 
              className="bg-white text-black hover:bg-gold hover:text-white"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gold absolute right-0 z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-sm"
          >
            <div className="container-custom py-4 space-y-4">
              <Link
                href="/services"
                className="block text-gold hover:text-gold/80 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/gallery"
                className="block text-gold hover:text-gold/80 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/about"
                className="block text-gold hover:text-gold/80 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-gold hover:text-gold/80 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button 
                variant="default" 
                className="w-full bg-white text-black hover:bg-gold hover:text-white"
              >
                Book Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 