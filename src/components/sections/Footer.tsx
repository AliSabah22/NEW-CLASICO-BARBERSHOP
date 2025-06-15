"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import LuxuryButton from '../ui/LuxuryButton';
import InstagramIcon from '../icons/InstagramIcon';
import FacebookIcon from '../icons/FacebookIcon';
import TwitterIcon from '../icons/TwitterIcon';

const socialLinks = [
  { name: 'Instagram', url: 'https://instagram.com/clasico', icon: '/icons/instagram.svg' },
  { name: 'Facebook', url: 'https://facebook.com/clasico', icon: '/icons/facebook.svg' },
  { name: 'Twitter', url: 'https://twitter.com/clasico', icon: '/icons/twitter.svg' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-24">
          {/* Left Column - Map & Contact */}
          <div>
            <h3 className="text-2xl font-display mb-8">Visit Us</h3>
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647043087964!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Right Column - Newsletter & Social */}
          <div>
            <h3 className="text-2xl font-display mb-8">Stay Connected</h3>
            <form onSubmit={handleSubscribe} className="mb-12">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-accent text-white placeholder-white/50"
                  required
                />
                <LuxuryButton type="submit">
                  Subscribe
                </LuxuryButton>
              </div>
              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-accent mt-4"
                >
                  Thank you for subscribing!
                </motion.p>
              )}
            </form>

            <div>
              <h4 className="text-lg font-display mb-6">Follow Us</h4>
              <div className="flex gap-6 mb-8">
                <a
                  href="https://instagram.com/clasico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold/80 transition-colors duration-300"
                >
                  <InstagramIcon className="w-6 h-6" />
                </a>
                <a
                  href="https://facebook.com/clasico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold/80 transition-colors duration-300"
                >
                  <FacebookIcon className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com/clasico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold/80 transition-colors duration-300"
                >
                  <TwitterIcon className="w-6 h-6" />
                </a>
              </div>
              <div className="space-y-4">
                <p className="text-white/80">
                  3480 PLATINUM DR. UNIT 105, MISSISSAUGA, ON L5M 2S4
                </p>
                <p className="text-white/80">
                  Phone: (647) 559-4641<br />
                  Email: hello@clasicobarber.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Clasico Barbershop. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm">
              <a href="/privacy" className="text-white/60 hover:text-accent transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="text-white/60 hover:text-accent transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 