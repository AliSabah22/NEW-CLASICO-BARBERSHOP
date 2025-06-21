"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface LuxuryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

export default function LuxuryButton({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  variant = 'primary',
  size = 'md',
  loading = false,
}: LuxuryButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-gold text-black hover:bg-gold/90 focus:ring-gold shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-black focus:ring-gold',
    ghost: 'text-gold hover:bg-gold/10 focus:ring-gold',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-2xl',
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  const shimmerVariants = {
    shimmer: {
      x: ['-100%', '100%'],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} relative overflow-hidden`}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          variants={shimmerVariants}
          animate="shimmer"
        />
      )}
      
      <span className="relative z-10 flex items-center">
        {loading && (
          <motion.svg
            className="w-4 h-4 mr-2"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </motion.svg>
        )}
        {children}
      </span>
    </motion.button>
  );
} 