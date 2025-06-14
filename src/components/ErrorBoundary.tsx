"use client";

import React, { Component, ErrorInfo, ReactNode } from 'react';
import LuxuryButton from './ui/LuxuryButton';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
          
          {/* Decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
          </div>

          <div className="relative z-10 text-center px-4">
            <div className="opacity-0 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Oops!</h1>
              <h2 className="text-2xl md:text-3xl font-display mb-8">Something went wrong</h2>
              <p className="text-lg text-gray-400 mb-12 max-w-md mx-auto">
                {this.state.error?.message || "We're sorry, but something went wrong. Please try again later."}
              </p>
              <LuxuryButton onClick={() => window.location.reload()}>
                Try Again
              </LuxuryButton>
            </div>
          </div>

          {/* Animated decorative lines */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-slide-right" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-slide-left" />
          </div>
        </div>
      );
    }

    return this.props.children;
  }
} 