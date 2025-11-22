"use client"

import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
      description: "Data-driven campaigns that maximize ROI and accelerate growth.",
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/4 via-accent/2 to-transparent" />

        {/* Animated background blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-primary opacity-4 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-accent opacity-3 rounded-full blur-3xl animated-gradient"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight text-foreground">
              Empowering Businesses with <span className="hero-gradient-text">AI-Driven Marketing</span> &{" "}
              <span className="hero-gradient-text">IT Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We help creators, startups, and companies accelerate growth with smart, scalable, AI-powered digital
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="hover-glow bg-gradient-primary text-black font-semibold">
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/40 hover:bg-primary/10 bg-transparent text-primary hover:text-primary"
              >
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            {[
              { value: counters.success, suffix: "%", label: "Success Rate" },
              { value: counters.clients, suffix: "+", label: "Happy Clients" },
              { value: counters.projects, suffix: "+", label: "Projects Delivered" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl card-3d card-lift">
                <div className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-2">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-primary/2 via-transparent to-accent/2 relative">
        <div className="absolute left-0 top-0 w-full h-96 bg-gradient-to-br from-primary/3 via-accent/2 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground">Our Services Overview</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive AI-powered solutions designed to transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="card-3d card-lift border-primary/20 bg-card/50 backdrop-blur">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 glow-pulse">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                    <CardDescription className="text-base text-muted-foreground">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      to={service.link}
                      className="text-primary hover:text-accent font-medium inline-flex items-center group transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* AI Service Portfolio */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground">
              AI-Powered Service Portfolio
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Discover our comprehensive range of AI-driven solutions designed to transform your operations at
              affordable rates
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Featured Service 1 */}
            <Card className="card-3d card-lift border-2 border-primary/30">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">AI-Based Website Building & Hosting</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Transform your online presence with responsive, SEO-optimized, AI-powered websites hosted on
                  enterprise-grade servers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {features.slice(0, 6).map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="w-full hover-glow bg-gradient-primary text-black font-semibold">
                  <Link to="/services/ai-website-building">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Featured Service 2 */}
            <Card className="card-3d card-lift border-2 border-accent/30">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">AI-Based Mobile Application Development</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Launch AI-powered mobile apps with smart recommendations, real-time analytics, and cross-platform
                  performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {[
                    "iOS + Android development",
                    "AI-driven UX optimization",
                    "Push notifications",
                    "Predictive analytics",
                    "Performance monitoring",
                    "Seamless integration",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-accent/40 hover:bg-accent/10 bg-transparent text-primary hover:text-primary"
                >
                  <Link to="/services/mobile-app-development">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gradient-to-b from-primary/3 via-transparent to-accent/3 relative">
        <div className="absolute right-0 top-1/2 w-96 h-96 bg-gradient-accent opacity-4 rounded-full blur-3xl -translate-y-1/2 pointer-events-none animated-gradient" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground">Our Process</h2>
            <p className="text-muted-foreground text-lg">A proven methodology for delivering exceptional results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="text-center card-3d p-6 rounded-lg">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 glow-pulse">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What Our Clients Say */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg">
              Trusted by creators, entrepreneurs, and businesses worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-lift border-primary/20 bg-card/50 backdrop-blur">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover mr-4 border border-primary/40"
                    />
                    <div className="text-left">
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-primary font-medium text-sm">{testimonial.title}</p>
                      <p className="text-muted-foreground text-xs">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-foreground mb-4 text-sm leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose PropelusAI */}
      <section className="py-20 bg-gradient-to-b from-primary/3 via-transparent to-accent/3">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
            {/* Left side */}
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
                Why Choose PropelusAI?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We understand the unique challenges faced by creators, coaches, solopreneurs, and growing companies. Our
                mission is to provide trustworthy, results-driven solutions that help you scale with confidence.
              </p>

              <div className="space-y-6 mb-8">
                {whyChooseFeatures.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2 text-foreground">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <Button asChild size="lg" className="hover-glow bg-gradient-primary text-black font-semibold">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>

            {/* Right side */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="PropelusAI Team"
                className="rounded-2xl object-cover w-full h-auto card-lift border border-primary/30"
              />
              <div className="absolute bottom-8 left-8 bg-gradient-primary text-black px-6 py-4 rounded-xl font-bold text-center card-lift shadow-glow">
                <div className="text-3xl">500+</div>
                <div className="text-sm">Successful Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-dark-bg">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/95 to-dark-bg opacity-90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="card-3d rounded-3xl p-12 md:p-16 shadow-3d border border-primary/20 bg-dark-bg/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 relative overflow-hidden">
              {/* Subtle animated background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
                  Transform Your Business Today
                </h2>
                <p className="text-lg md:text-xl mb-8 text-foreground/80">
                  Join hundreds of businesses already accelerating their growth with PropelusAI
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-dark hover:bg-primary/90 font-semibold transition-all duration-200"
                  >
                    <Link to="/contact">Get Free Quote</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 font-semibold bg-transparent hover:text-primary transition-all duration-200"
                  >
                    <Link to="/contact">Call Us Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
