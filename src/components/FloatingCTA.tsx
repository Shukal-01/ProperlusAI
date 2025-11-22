import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-16 right-8 z-40 floating">
      <div className="relative group">
        <Button
          asChild
          size="lg"
          className="relative rounded-full h-14 w-14 md:h-auto md:w-auto bg-gradient-primary text-black hover:shadow-glow transform transition-all duration-300 hover:scale-110 glow-pulse group-hover:shadow-3d"
        >
          <Link to="/contact" className="flex items-center space-x-2 font-semibold">
            <MessageCircle className="w-5 h-5" />
            <span className="hidden md:inline">Book Consultation</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default FloatingCTA
