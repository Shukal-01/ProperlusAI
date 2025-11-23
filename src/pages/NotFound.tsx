"use client"

import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const NotFound = () => {
  const location = useLocation()

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-background via-card/20 to-accent/5 relative overflow-hidden">
      {/* CHANGE: Enhanced background elements for 404 page */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-3d opacity-1 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-3d opacity-3 rounded-full blur-2xl pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="text-7xl md:text-9xl font-heading font-bold gradient-text animate-pulse">404</div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">Page Not Found</h1>
            <p className="text-lg md:text-xl text-muted-foreground/90">
              Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-primary/20 bg-card/40 backdrop-blur">
            <p className="text-muted-foreground mb-6">
              Don't worry, you can navigate back to our website and continue exploring our services.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary text-black font-semibold hover-glow hover:text-black"
            >
              <Link to="/" className="inline-flex items-center gap-2">
                <ArrowLeft className="w-5 h-5" />
                Return to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
