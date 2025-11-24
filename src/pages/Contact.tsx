"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, Zap } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const Contact = () => {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  const services = [
    "AI Website Development",
    "Mobile App Development",
    "Performance Marketing",
    "Email Marketing",
    "CRM Setup",
    "Workflow Automation",
    "Cloud Hosting",
    "Other",
  ]

  const contactBenefits = [
    {
      icon: Zap,
      title: "Quick Response",
      description: "Get replies within 24 hours",
    },
    {
      icon: MessageSquare,
      title: "Expert Team",
      description: "Talk to qualified specialists",
    },
    {
      icon: Clock,
      title: "Flexible Support",
      description: "24/7 availability for urgent matters",
    },
  ]

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-background via-card/20 to-accent/5">
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-accent/1 md:from-primary/8 md:via-accent/3 to-transparent" />

        {/* Animated background elements */}
        {/* <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-3d opacity-1 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-3d opacity-3 rounded-full blur-2xl pointer-events-none"></div> */}
<div className="absolute top-20 left-10 w-64 h-64 bg-gradient-3d opacity-20 md:opacity-50 rounded-full blur-3xl animate-pulse pointer-events-none"></div>

<div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-3d opacity-10 md:opacity-40 rounded-full blur-2xl pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground hero-gradient-text">
              Get in <span className="hero-gradient-text">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground/90">
              Ready to transform your business? Let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* CHANGE: Contact benefits section with better spacing */}
      <section className="py-20 bg-gradient-to-br from-primary/3 via-card/40 to-accent/3">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {contactBenefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="text-center p-8 rounded-2xl bg-card/60 border border-primary/20 card-lift hover:border-primary/40"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-primary/2 via-background to-accent/2">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-2 border-primary/40 bg-gradient-to-br from-card/80 to-card/60 hover:border-primary/60 transition-all">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground"><span className="hero-gradient-text">Send Us a Message</span></CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        className="h-11 bg-card/50 border-primary/20 text-foreground focus:border-primary/40"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="h-11 bg-card/50 border-primary/20 text-foreground focus:border-primary/40"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 XXXX-XXX-XXX"
                        className="h-11 bg-card/50 border-primary/20 text-foreground focus:border-primary/40"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-foreground">
                        Service Required *
                      </Label>
                      <Select name="service" required>
                        <SelectTrigger className="h-11 bg-card/50 border-primary/20">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service.toLowerCase()}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project..."
                        required
                        rows={5}
                        className="bg-card/50 border-primary/20 text-foreground focus:border-primary/40"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-11 hover-glow bg-gradient-primary text-black font-semibold hover:text-black"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">Contact <span className="hero-gradient-text">Information</span></h2>
                <p className="text-muted-foreground mb-8">
                  We're here to help! Reach out through any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="card-lift border-primary/20 bg-card/60 hover:border-primary/40 transition-all">
                  <CardContent className="flex items-start space-x-4 pt-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                      <a
                        href="mailto:support@propelusai.com"
                        className="text-primary hover:text-accent transition-colors"
                      >
                        support@propelusai.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-lift border-primary/20 bg-card/60 hover:border-primary/40 transition-all">
                  <CardContent className="flex items-start space-x-4 pt-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                      <p className="text-muted-foreground">+91 XXXX-XXX-XXX</p>
                      <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9AM-6PM IST</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-lift border-primary/20 bg-card/60 hover:border-primary/40 transition-all">
                  <CardContent className="flex items-start space-x-4 pt-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        India
                        <br />
                        Remote Global Services
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-br from-primary/8 to-accent/4 rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all">
                <h3 className="text-xl font-heading font-semibold mb-2 text-foreground"><span className="hero-gradient-text">Response Time</span></h3>
                <p className="text-muted-foreground">
                  We typically respond to all inquiries within 24 hours during business days. For urgent matters, please
                  call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-primary/2 via-card/40 to-accent/2 section-accent-highlight">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground">Frequently <span className="hero-gradient-text">Asked</span></h2>
              <p className="text-muted-foreground text-lg">Common questions about our services</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  q: "How long does a typical project take?",
                  a: "Project timelines vary depending on complexity. We provide detailed estimates during the discovery phase, ranging from 2-8 weeks on average.",
                },
                {
                  q: "What industries do you serve?",
                  a: "We work with startups, agencies, e-commerce businesses, SaaS companies, and enterprises across various sectors.",
                },
                {
                  q: "Do you offer support after delivery?",
                  a: "Yes! We provide ongoing support, maintenance, and optimization to ensure your solutions perform optimally.",
                },
                {
                  q: "Can I schedule a consultation?",
                  a: "We offer free initial consultations. Use the contact form above or call us to book your slot.",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="card-lift border-primary/20 bg-card/60 hover:border-accent/40 transition-all"
                >
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-heading font-semibold mb-3 text-primary"><span className="hero-gradient-text">{item.q}</span></h3>
                    <p className="text-muted-foreground leading-relaxed">{item.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
