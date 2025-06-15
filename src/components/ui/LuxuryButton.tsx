'use client';

import { ButtonHTMLAttributes } from "react";

interface LuxuryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function LuxuryButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: LuxuryButtonProps) {
  const baseStyles = "relative overflow-hidden font-medium transition-all duration-300 transform hover:scale-102 active:scale-98 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2";

  const variants = {
    primary: "bg-gold text-black hover:bg-gold/90",
    secondary: "bg-white/10 text-white hover:bg-white/20",
    outline: "border-2 border-gold text-gold hover:bg-gold/10 bg-transparent"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-10 transition-opacity pointer-events-none" />
    </button>
  );
}
