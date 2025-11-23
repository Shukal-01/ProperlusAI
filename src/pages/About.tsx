import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Target, Lightbulb, Users, Award, TrendingUp, Zap, Heart, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

const About = () => {
  const values = [
    {
      icon: CheckCircle2,
      title: "98% Success Rate",
      description: "Proven track record of delivering successful projects",
    },
    {
      icon: Award,
      title: "Transparent Pricing",
      description: "No hidden costs, clear and affordable pricing models",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "24/7 support team ready to assist you",
    },
    {
      icon: Lightbulb,
      title: "AI-Enabled Solutions",
      description: "Cutting-edge AI technology powering every solution",
    },
    {
      icon: TrendingUp,
      title: "Fast Delivery",
      description: "Efficient processes ensuring timely project completion",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focused on measurable outcomes and ROI",
    },
  ]

  const coreValues = [
    {
      icon: Heart,
      title: "Client-First Approach",
      description:
        "Your success is our priority. We invest time to understand your unique needs and deliver tailored solutions.",
    },
    {
      icon: Zap,
      title: "Innovation & Excellence",
      description:
        "We stay ahead of technology trends and continuously improve our services to provide cutting-edge solutions.",
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "Transparency and honest communication form the foundation of every client relationship we build.",
    },
  ]

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-background via-background to-accent/5">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-accent/3 to-transparent" />

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-3d opacity-1 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-3d opacity-3 rounded-full blur-2xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground hero-gradient-text">
              Who We <span className="text-primary">Are</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed">
              PropelusAI is a digital transformation and AI solutions company helping businesses scale using modern
              technology. We combine innovation, expertise, and dedication to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-primary/2 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 rounded-full bg-gradient-primary text-black font-semibold text-sm">
                Our Mission
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
                Making AI-Powered Solutions Accessible
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our mission is to make AI-powered digital solutions accessible, affordable, and impactful for businesses
                of all sizes. We believe that every company deserves access to cutting-edge technology that drives
                growth and innovation.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-accent/5 p-8 border border-primary/20">
                <div className="w-full h-full rounded-2xl bg-gradient-primary flex items-center justify-center">
                  <Target className="w-32 h-32 text-black/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gradient-to-br from-primary/2 via-card/40 to-accent/2 section-accent-highlight">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground">What We Do</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                We combine marketing, IT, automation, and AI to help businesses grow faster and smarter
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "AI-Powered Marketing",
                  description:
                    "Leverage artificial intelligence to optimize campaigns, target audiences, and maximize ROI with data-driven strategies.",
                },
                {
                  title: "Digital Transformation",
                  description:
                    "Transform traditional business processes with modern web and mobile solutions powered by cutting-edge technology.",
                },
                {
                  title: "Automation & Integration",
                  description:
                    "Streamline operations with intelligent automation, CRM integration, and workflow optimization.",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="card-lift border-primary/30 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur hover:border-accent/60 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                >
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-heading font-semibold mb-3 text-accent">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-b from-accent/3 via-background to-primary/2">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground">Our Core Values</h2>
              <p className="text-muted-foreground text-lg">Principles that guide everything we do</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {coreValues.map((value, index) => {
                const Icon = value.icon
                return (
                  <div
                    key={index}
                    className="p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-card/60 via-card/40 to-card/30 card-lift hover:border-primary/40"
                  >
                    <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-black" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-primary/2 via-card/40 to-accent/2">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground">Why Choose Us?</h2>
              <p className="text-muted-foreground text-lg">
                We stand out with our commitment to excellence and innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div
                    key={index}
                    className="p-6 rounded-2xl border border-primary/20 bg-card/60 card-lift hover-glow transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold mb-2 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-b from-background via-primary/3 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 rounded-full bg-gradient-primary text-black font-semibold text-sm">
                Our Impact
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
                Growing Businesses Since 2018
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Over the past 5+ years, we've helped hundreds of businesses achieve their goals through innovative
                AI-powered solutions. Our team of experts continues to grow and evolve to serve you better.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                {[
                  { number: "500+", label: "Projects Completed" },
                  { number: "98%", label: "Client Satisfaction" },
                  { number: "50+", label: "Team Members" },
                  { number: "15+", label: "Services Offered" },
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl font-heading font-bold gradient-text mb-1">{stat.number}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/15 to-accent/10 p-8 border border-primary/20 hover:border-primary/40 transition-all">
                <div className="w-full h-full rounded-2xl bg-gradient-primary flex items-center justify-center">
                  <TrendingUp className="w-32 h-32 text-black/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Statement */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark/50 via-card/30 to-dark/50" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-accent opacity-5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text">
              Building the Future Together
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8 font-medium text-foreground/90">
              We're not just a service provider – we're your partner in digital transformation. Every project is an
              opportunity to create something exceptional, and every client relationship is built on trust,
              transparency, and shared success.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent text-dark hover:shadow-lg hover:shadow-primary/50 font-semibold transition-all duration-300"
            >
              Start Your Transformation Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
