"use client"

import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  Globe,
  Megaphone,
  Workflow,
  Shield,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Target,
  Lightbulb,
  Users,
  TrendingUp,
  Star,
} from "lucide-react"
import { useEffect, useState } from "react"

const Home = () => {
  const [counters, setCounters] = useState({ success: 0, clients: 0, projects: 0 })

  useEffect(() => {
    const animateCounter = (target: number, key: keyof typeof counters, duration: number) => {
      const increment = target / (duration / 16)
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setCounters((prev) => ({ ...prev, [key]: target }))
          clearInterval(timer)
        } else {
          setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }))
        }
      }, 16)
    }

    animateCounter(98, "success", 2000)
    animateCounter(500, "clients", 2000)
    animateCounter(1000, "projects", 2000)
  }, [])

  const services = [
    {
      icon: Globe,
      title: "Web & Mobile Solutions",
      description: "Responsive websites and powerful mobile apps built with AI-driven technology.",
      link: "/services#web-mobile",
    },
    {
      icon: Megaphone,
      title: "AI Marketing & Advertising",
      description: "Data-driven campaigns that maximize ROI and accelerate growth of Artificial Intelligence.",
      link: "/services#marketing",
    },
    {
      icon: Workflow,
      title: "CRM & Automation",
      description: "Streamline operations with intelligent automation and CRM solutions.",
      link: "/services#automation",
    },
    {
      icon: Shield,
      title: "Security & Support",
      description: "24/7 monitoring, cloud hosting, and enterprise-grade security.",
      link: "/services#security",
    },
  ]

  const features = [
    "AI design & content generation",
    "Responsive mobile layouts",
    "Advanced SEO optimization",
    "SSL + CDN + Analytics included",
    "24/7 uptime monitoring",
    "Enterprise-grade hosting",
  ]

  const processSteps = [
    { icon: Target, title: "Discovery", description: "Understanding your goals and challenges" },
    { icon: Zap, title: "Strategy", description: "Creating a tailored AI-powered solution" },
    { icon: Sparkles, title: "Implementation", description: "Building and deploying your solution" },
    { icon: CheckCircle2, title: "Optimization", description: "Continuous improvement and support" },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Content Creator & Coach",
      location: "New York, USA",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      text: "PropelusAI transformed my online presence completely. Their marketing strategies helped me grow my audience by 300% in just 6 months.",
      rating: 5,
    },
    {
      name: "Ahmed Al-Rashid",
      title: "Tech Entrepreneur",
      location: "Dubai, UAE",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      text: "The IT solutions provided by PropelusAI are exceptional. They helped us scale our infrastructure seamlessly as we expanded across the Middle East.",
      rating: 5,
    },
    {
      name: "Emma Thompson",
      title: "Small Business Owner",
      location: "London, UK",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      text: "Working with PropelusAI was a game-changer for our small company. Their expertise and dedication led to measurable growth in revenue.",
      rating: 5,
    },
    {
      name: "Raj Patel",
      title: "Digital Marketing Agency",
      location: "Mumbai, India",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      text: "PropelusAI's expertise in both marketing and technology is unmatched. They helped us improve our service delivery and client satisfaction.",
      rating: 5,
    },
  ]

  const whyChooseFeatures = [
    {
      icon: Lightbulb,
      title: "Proven Expertise",
      description: "Years of experience helping businesses across America, Europe, Middle East, and India.",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Personal attention and ongoing support to ensure your success.",
    },
    {
      icon: TrendingUp,
      title: "Measurable Results",
      description: "Data-driven strategies that deliver tangible business growth.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-accent/5">
      {/* CHANGE: Hero section with improved gradient background */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-3d opacity-1 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-3d opacity-3 rounded-full blur-2xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl lg:text-7xl font-heading font-bold mb-8 leading-tight text-foreground tracking-tight">
              Empowering Businesses with <span className="hero-gradient-text block mt-2">AI-Driven Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              We help creators, startups, and companies accelerate growth with smart, scalable, AI-powered digital
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
              <Button
                asChild
                size="lg"
                className="hover-glow bg-gradient-primary text-black font-semibold px-8 text-base h-12 hover:text-black"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/40 hover:bg-primary/10 bg-transparent text-primary hover:text-primary px-8 text-base h-12 hover:border-primary/60"
              >
                <Link to="/services">View Services</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
              {[
                { value: counters.success, suffix: "%", label: "Success Rate" },
                { value: counters.clients, suffix: "+", label: "Happy Clients" },
                { value: counters.projects, suffix: "+", label: "Projects Delivered" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-4 md:p-8 rounded-2xl card-3d border border-primary/20 bg-card/40 backdrop-blur-sm hover:border-primary/40 transition-all duration-300"
                >
                  <div className="text-3xl md:text-5xl font-heading font-bold gradient-text mb-2">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="text-muted-foreground text-xs md:text-sm text-balance">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - CHANGE: Added subtle gradient background */}
      <section className="py-24 md:py-32 relative bg-gradient-to-b from-background via-primary/2 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive AI-powered solutions designed to transform your business
            </p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"> */}
            <div className="grid md:grid-cols-2 gap-7 max-w-6xl mx-auto items-stretch">

            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl p-6 md:p-8 border border-primary/20 bg-card/40 backdrop-blur hover:border-primary/60 hover:bg-card/60 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-lg md:text-xl font-heading font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium text-sm group-hover:gap-3 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Services - CHANGE: Improved gradient background */}
      <section className="py-24 md:py-32 relative bg-gradient-to-b from-primary/3 via-transparent to-accent/2">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground">Featured Services</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Discover our comprehensive range of AI-driven solutions designed to transform your operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
            {/* Card 1 */}
            <div className="group relative rounded-3xl p-8 md:p-10 border-2 border-primary/30 bg-card/50 backdrop-blur hover:border-primary/60 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-foreground">
                  AI-Based Website Building & Hosting
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Transform your online presence with responsive, SEO-optimized, AI-powered websites hosted on enterprise-grade servers
                </p>

                <div className="space-y-3 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Push to bottom */}
                <div className="mt-auto">
                  <Button
                    asChild
                    className="w-full hover-glow bg-gradient-primary text-black font-semibold hover:text-black"
                  >
                    <Link to="/services/ai-website-building">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative rounded-3xl p-8 md:p-10 border-2 border-accent/30 bg-card/50 backdrop-blur hover:border-accent/60 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-foreground">
                  AI-Based Mobile Application Development
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Launch AI-powered mobile apps with smart recommendations, real-time analytics, and cross-platform performance
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "iOS + Android development",
                    "AI-driven UX optimization",
                    "Push notifications",
                    "Predictive analytics",
                    "Performance monitoring",
                    "Seamless integration",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Push to bottom */}
                <div className="mt-auto">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-accent/40 hover:bg-accent/10 bg-transparent text-primary hover:text-accent hover:border-accent/60"
                  >
                    <Link to="/services/mobile-app-development">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="py-24 md:py-32 relative bg-gradient-to-b from-background to-primary/2">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground">Our Process</h2>
            <p className="text-muted-foreground text-lg">A proven methodology for delivering exceptional results</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30" />

              {processSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={index} className="relative">
                    <div className="rounded-2xl p-8 border border-primary/20 bg-card/40 backdrop-blur text-center hover:border-primary/60 hover:bg-card/60 transition-all duration-300">
                      <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10 -mt-12 border-4 border-background">
                        <Icon className="w-8 h-8 text-black" />
                      </div>
                      <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 relative bg-gradient-to-b from-primary/3 via-transparent to-accent/3 section-accent-highlight">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg">
              Trusted by creators, entrepreneurs, and businesses worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative rounded-2xl p-8 border-2 border-accent/60 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur hover:border-accent hover:bg-gradient-to-br hover:from-card/70 hover:to-card/50 hover:shadow-lg hover:shadow-accent/40 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-accent/70 group-hover:border-accent transition-colors duration-300"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-accent font-medium text-sm group-hover:text-primary transition-colors duration-300">
                        {testimonial.title}
                      </p>
                      <p className="text-muted-foreground text-xs">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-foreground mb-4 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-accent text-accent group-hover:fill-primary group-hover:text-primary transition-colors duration-300"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 relative bg-gradient-to-b from-background to-primary/3">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 max-w-7xl mx-auto items-center">
            {/* Left content */}
            <div>
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-foreground leading-tight">
                Why Choose PropelusAI?
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                We understand the unique challenges faced by creators, coaches, solopreneurs, and growing companies. Our
                mission is to provide trustworthy, results-driven solutions that help you scale with confidence.
              </p>

              <div className="space-y-6 mb-10">
                {whyChooseFeatures.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <Button
                asChild
                size="lg"
                className="hover-glow bg-gradient-primary text-black font-semibold hover:text-black"
              >
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>

            {/* Right image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="PropelusAI Team"
                className="relative rounded-3xl object-cover w-full h-auto border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-300"
              />
              <div className="absolute bottom-6 left-6 bg-gradient-primary text-black px-6 py-4 rounded-2xl font-bold text-center shadow-lg border border-primary/40 hover:shadow-lg hover:shadow-primary/40 transition-all">
                <div className="text-2xl md:text-3xl">500+</div>
                <div className="text-xs md:text-sm">Successful Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-primary/2 via-background to-accent/3">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8" />
        <div className="absolute top-20 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 animate-pulse" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl p-12 md:p-16 border-2 border-primary/30 bg-card/40 backdrop-blur hover:border-primary/60 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                  Join hundreds of successful businesses that have already partnered with us for AI-driven growth and
                  digital transformation.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="hover-glow bg-gradient-primary text-black font-semibold px-8 hover:text-black"
                >
                  <Link to="/contact">Start Your Journey Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
