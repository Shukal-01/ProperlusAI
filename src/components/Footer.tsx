import { Link } from "react-router-dom"
import { Sparkles, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-card/50 border-t border-primary/20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/30 pointer-events-none" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center glow-pulse shadow-glow group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-black" />
              </div>
              <span className="text-xl font-heading font-bold gradient-text group-hover:text-accent transition-colors">
                PropelusAI
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering businesses with AI-driven marketing, IT solutions, and digital transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Contact", "FAQ"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm hover:translate-x-1 transform link-hover"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground hover:text-muted-foreground">
              <li>AI Website Development</li>
              <li>Mobile App Development</li>
              <li>Performance Marketing</li>
              <li>CRM & Automation</li>
              <li>Cloud Hosting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm group">
                <Mail className="w-4 h-4 mt-0.5 text-primary flex-shrink-0 group-hover:text-accent transition-colors" />
                <a
                  href="mailto:support@propelusai.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  support@propelusai.com
                </a>
              </li>
              <li className="flex items-start space-x-2 text-sm group">
                <Phone className="w-4 h-4 mt-0.5 text-primary flex-shrink-0 group-hover:text-accent transition-colors" />
                <span className="text-muted-foreground">+91 XXXX-XXX-XXX</span>
              </li>
              <li className="flex items-start space-x-2 text-sm group">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0 group-hover:text-accent transition-colors" />
                <span className="text-muted-foreground">India (Remote Global Services)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">© {currentYear} PropelusAI. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-muted-foreground hover:text-primary hover:text-accent transition-all duration-300 hover:scale-125 transform hover:-translate-y-1"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
