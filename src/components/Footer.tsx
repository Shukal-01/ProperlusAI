import { Link } from "react-router-dom"
import { Sparkles, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-primary/20 overflow-hidden bg-gradient-to-b from-background via-background to-accent/5">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-black" />
              </div>
              <span className="text-lg font-heading font-bold gradient-text group-hover:text-accent transition-colors">
                PropelusAI
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering businesses with AI-driven marketing, IT solutions, and digital transformation.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-6 text-foreground text-md uppercase tracking-wide">
              <span className="hero-gradient-text">Quick Links</span>
            </h3>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Contact", "FAQ"].map((item) => (
                <li key={item}>
                  {/* CHANGE: Enhanced hover effect with underline/bottom border on quick links */}
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm inline-flex items-center gap-1 group relative pb-1"
                  >
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-6 text-foreground text-md uppercase tracking-wide">
              <span className="hero-gradient-text">Services</span>
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "AI Website Development",
                "Mobile App Development",
                "Performance Marketing",
                "CRM & Automation",
                "Cloud Hosting",
              ].map((service, idx) => (
                <li
                  key={idx}
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer relative group pb-1"
                >
                  {service}
                  {/* CHANGE: Added bottom border effect on service links */}
                  {/* <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" /> */}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-6 text-foreground text-md uppercase tracking-wide"><span className="hero-gradient-text">Contact</span></h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <Mail className="w-4 h-4 mt-0.5 text-primary flex-shrink-0 group-hover:text-accent transition-colors" />
                <a
                  href="mailto:support@propelusai.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm relative group/email pb-1"
                >
                  support@propelusai.com
                  {/* <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover/email:w-full transition-all duration-300" /> */}
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <Phone className="w-4 h-4 mt-0.5 text-primary flex-shrink-0 group-hover:text-accent transition-colors" />
                <span className="text-muted-foreground text-sm">+91 XXXX-XXX-XXX</span>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0 group-hover:text-accent transition-colors" />
                <span className="text-muted-foreground text-sm">India (Remote Global Services)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground">© {currentYear} PropelusAI. All rights reserved.</p>
            <div className="flex items-center gap-6">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 border border-primary/20 text-muted-foreground hover:bg-gradient-primary hover:text-black hover:border-primary/60 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
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
