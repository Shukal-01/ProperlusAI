"use client"

import { useParams, Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, ArrowLeft, Clock, Wrench, TrendingUp, Download } from "lucide-react"

import { servicesData } from "@/data/services"

const ServiceDetail = () => {
  const { slug } = useParams()

  const service = slug ? servicesData[slug] : null

  if (!service) {
    return (
      <div className="pt-20 container mx-auto px-4">
        <h1 className="text-3xl font-bold">Service Not Found</h1>
        <Button asChild className="mt-6">
          <Link to="/services">Back to Services</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-background via-card/30 to-background">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Button asChild variant="ghost" className="group text-muted-foreground hover:text-primary">
          <Link to="/services">
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
        </Button>
      </div>

      <section className="py-12 md:py-20 bg-gradient-to-br from-primary/8 via-accent/4 to-transparent border-b border-primary/20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-10 left-5 w-64 h-64 bg-gradient-primary opacity-3 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-accent opacity-2 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground hero-gradient-text">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed">{service.overview}</p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description - Enhanced with gold borders and backgrounds */}
              <div className="p-8 rounded-2xl border border-primary/20 bg-gradient-soft card-lift">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-foreground">
                  Detailed Description
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{service.description}</p>
              </div>

              {/* Key Features - Updated with gold color scheme */}
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-foreground">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start space-x-3 p-4 rounded-lg bg-card/50 border border-primary/15 hover:border-primary/40 hover:bg-primary/8 transition-all duration-300 text-dark-safe"
                    >
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Software - Gold-themed badges */}
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-foreground">Tools & Software</h2>
                <div className="flex flex-wrap gap-3">
                  {service.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-gradient-primary text-black font-medium text-sm hover:shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-glow"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing - Gold accent styling */}
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-foreground">Pricing (USD)</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {service.pricing.map((plan, i) => (
                    <Card
                      key={i}
                      className="border-primary/30 bg-card/60 backdrop-blur card-lift hover:border-primary/60 hover:text-foreground text-dark-safe"
                    >
                      <CardContent className="py-6 text-center space-y-2">
                        <h3 className="text-lg font-bold text-foreground">{plan.title}</h3>
                        <p className="text-4xl font-extrabold gradient-text">{plan.price}</p>
                        <p className="text-sm text-muted-foreground">{plan.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Future Growth Options - Enhanced styling */}
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-foreground">
                  Future Growth Options
                </h2>
                <div className="grid gap-3">
                  {service.growth.map((option, i) => (
                    <Card
                      key={i}
                      className="border-accent/30 bg-card/50 hover:bg-accent/8 hover:border-accent/60 transition-all card-lift text-dark-safe"
                    >
                      <CardContent className="flex items-center space-x-3 py-4">
                        <TrendingUp className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground font-medium">{option}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-2 border-primary/40 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur sticky top-24">
                <CardContent className="pt-6 space-y-6">
                  {/* Timeline */}
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Timeline</h3>
                      <p className="text-sm text-muted-foreground">{service.timeline}</p>
                    </div>
                  </div>

                  {/* Support */}
                  <div className="flex items-start space-x-3">
                    <Wrench className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Support</h3>
                      <p className="text-sm text-muted-foreground">{service.support}</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-primary/20 pt-4 space-y-3">
                    <Button
                      asChild
                      className="w-full hover-glow bg-gradient-primary text-black font-semibold hover:text-black"
                    >
                      <Link to="/contact">Get Quote</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-primary/40 text-primary hover:bg-primary/10 hover:text-primary bg-transparent"
                    >
                      <Link to="/contact">Schedule Consultation</Link>
                    </Button>
                    <Button variant="ghost" className="w-full text-primary hover:text-accent hover:bg-primary/10">
                      <Download className="mr-2 w-4 h-4" />
                      Download Brochure
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/8 to-accent/4 border border-primary/20 sticky top-96">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">Why This Service?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Get enterprise-grade solutions tailored specifically for your business needs with dedicated support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-card/20 border-t border-primary/20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-primary opacity-2 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-accent opacity-2 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground hero-gradient-text">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground/90 mb-8 font-medium">
              Let's discuss how this service can transform your business and drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary text-black hover:shadow-glow font-semibold hover:text-black"
              >
                <Link to="/contact">Contact Us Today</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/40 bg-transparent text-primary hover:bg-primary/10 hover:text-primary hover:border-primary/60"
              >
                <Link to="/contact">Schedule Free Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetail
