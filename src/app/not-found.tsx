import Link from 'next/link'
import LuxuryButton from '@/components/ui/LuxuryButton'

export default function NotFound() {
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
          <h1 className="text-9xl font-display font-bold mb-4">404</h1>
          <h2 className="text-3xl font-display mb-8">Page Not Found</h2>
          <p className="text-lg text-gray-400 mb-12 max-w-md mx-auto">
            The page you're looking for seems to have vanished into thin air. 
            Let us guide you back to our luxury grooming experience.
          </p>
          <Link href="/">
            <LuxuryButton>
              Return Home
            </LuxuryButton>
          </Link>
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