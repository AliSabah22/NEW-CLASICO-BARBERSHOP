'use client'

import { useEffect } from 'react'
import LuxuryButton from '@/components/ui/LuxuryButton'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

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
            {error.message || "We're sorry, but something went wrong. Please try again later."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LuxuryButton onClick={() => reset()}>
              Try Again
            </LuxuryButton>
            <LuxuryButton variant="secondary" onClick={() => window.location.reload()}>
              Refresh Page
            </LuxuryButton>
          </div>
        </div>
      </div>

      {/* Animated decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-slide-right" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-slide-left" />
      </div>
    </div>
  )
} 