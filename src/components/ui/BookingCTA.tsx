"use client";

import { motion } from 'framer-motion';
import { scrollToSection } from '@/utils/scroll';
import { devConfig } from '@/lib/dev-config';

interface BookingCTAProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
}

export default function BookingCTA({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  animate = !devConfig.disableHoverEffects,
}: BookingCTAProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: `bg-gold text-black focus:ring-gold ${!devConfig.disableHoverEffects ? 'hover:bg-gold/90' : ''}`,
    secondary: `bg-gray-900 text-white focus:ring-gray-900 ${!devConfig.disableHoverEffects ? 'hover:bg-gray-800' : ''}`,
    outline: `border-2 border-gold text-gold focus:ring-gold ${!devConfig.disableHoverEffects ? 'hover:bg-gold hover:text-black' : ''}`,
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-2xl',
  };

  const handleClick = () => {
    scrollToSection('booking');
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      variants={animate ? buttonVariants : undefined}
      whileHover={animate ? "hover" : undefined}
      whileTap={animate ? "tap" : undefined}
    >
      {variant === 'primary' && animate && (
        <motion.div
          className="absolute inset-0 rounded-xl bg-gold/20"
          variants={pulseVariants}
          animate="pulse"
        />
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
} 