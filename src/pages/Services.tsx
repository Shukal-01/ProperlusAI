import { Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Globe,
  Smartphone,
  Code,
  Layers,
  TrendingUp,
  Mail,
  Share2,
  FileText,
  Database,
  Zap,
  Bot,
  Target,
  Monitor,
  Cloud,
  ShieldCheck,
  Headphones,
  ArrowRight,
  DollarSign,
  Clock,
  Users,
  Search,
  LightbulbIcon,
  CheckCircle,
} from "lucide-react"

const Services = () => {
  const serviceCategories = [
    {
      id: "web-mobile",
      name: "Web & Mobile Solutions",
      icon: Globe,
      services: [
        {
          icon: Globe,
          title: "AI Website Development",
          description: "Responsive, SEO-optimized websites with AI-powered design",
          link: "/services/ai-website-building",
        },
        {
          icon: Smartphone,
          title: "Mobile App Development",
          description: "Cross-platform iOS and Android apps with AI features",
          link: "/services/mobile-app-development",
        },
        {
          icon: Code,
          title: "Custom Software",
          description: "Tailored software solutions for unique business needs",
          link: "/services/custom-software",
        },
        {
          icon: Layers,
          title: "SaaS Platforms",
          description: "Scalable cloud-based software as a service solutions",
          link: "/services/saas-platforms",
        },
      ],
    },
    {
      id: "marketing",
      name: "AI Marketing & Advertising",
      icon: TrendingUp,
      services: [
        {
          icon: TrendingUp,
          title: "Performance Marketing",
          description: "Data-driven campaigns for maximum ROI",
          link: "/services/performance-marketing",
        },
        {
          icon: Mail,
          title: "AI Email Marketing",
          description: "Automated, personalized email campaigns",
          link: "/services/email-marketing",
        },
        {
          icon: Share2,
          title: "Social Media AI Optimization",
          description: "AI-powered social media strategy and management",
          link: "/services/social-media",
        },
        {
          icon: FileText,
          title: "Content Automation",
          description: "AI-generated content that engages and converts",
          link: "/services/content-automation",
        },
      ],
    },
    {
      id: "automation",
      name: "CRM & Automation",
      icon: Zap,
      services: [
        {
          icon: Database,
          title: "CRM Setup & Integration",
          description: "Complete CRM implementation and customization",
          link: "/services/crm-setup",
        },
        {
          icon: Zap,
          title: "Workflow Automation",
          description: "Streamline processes with intelligent automation",
          link: "/services/workflow-automation",
        },
        {
          icon: Bot,
          title: "Chatbots & Virtual Assistants",
          description: "AI-powered customer service automation",
          link: "/services/chatbots",
        },
        {
          icon: Target,
          title: "Lead Scoring AI",
          description: "Intelligent lead qualification and prioritization",
          link: "/services/lead-scoring",
        },
      ],
    },
    {
      id: "security",
      name: "Security & Support",
      icon: ShieldCheck,
      services: [
        {
          icon: Monitor,
          title: "Monitoring",
          description: "24/7 system monitoring and performance tracking",
          link: "/services/monitoring",
        },
        {
          icon: Cloud,
          title: "Cloud Hosting",
          description: "Enterprise-grade hosting with 99.9% uptime",
          link: "/services/cloud-hosting",
        },
        {
          icon: ShieldCheck,
          title: "Security Audits",
          description: "Comprehensive security assessments and solutions",
          link: "/services/security-audits",
        },
        {
          icon: Headphones,
          title: "Tech Support",
          description: "Dedicated technical support and maintenance",
          link: "/services/tech-support",
        },
      ],
    },
  ]

  const whyChooseFeatures = [
    {
      icon: LightbulbIcon,
      title: "Innovation",
      description: "Cutting-edge AI solutions",
    },
    {
      icon: DollarSign,
      title: "Cost Savings",
      description: "Up to 57% below industry rates",
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Rapid implementation timelines",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated ongoing assistance",
    },
  ]

  const processSteps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery & Analysis",
      description:
        "We start by understanding your business goals, challenges, and current situation through comprehensive analysis.",
    },
    {
      number: "02",
      icon: LightbulbIcon,
      title: "Strategy Development",
      description:
        "Based on our findings, we create a customized strategy that aligns with your objectives and budget.",
    },
    {
      number: "03",
      icon: Code,
      title: "Implementation",
      description: "Our expert team executes the strategy with precision, keeping you informed throughout the process.",
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Optimization & Growth",
      description:
        "We continuously monitor, analyze, and optimize performance to ensure maximum ROI and sustainable growth.",
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
              Our <span className="hero-gradient-text">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed">
              Comprehensive AI-powered solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Categories - CHANGE: Improved tabs and card styling */}
      <section className="py-20 bg-gradient-to-b from-primary/2 via-background to-accent/2">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="web-mobile" className="max-w-7xl mx-auto">
            <TabsList className="grid grid-cols-2 lg:grid-cols-4 mb-12 h-auto bg-card/50 border border-primary/20 rounded-xl p-1">
              {serviceCategories.map((category) => {
                const Icon = category.icon
                return (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-gradient-primary data-[state=active]:text-black rounded-lg transition-all"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-md font-medium">{category.name}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>

            {serviceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.services.map((service, index) => {
                    const Icon = service.icon
                    return (
                      <Card
                        key={index}
                        className="card-lift hover-glow border-primary/30 bg-card/60 backdrop-blur hover:border-primary/50 transition-all"
                      >
                        <CardHeader>
                          <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                            <Icon className="w-6 h-6 text-black" />
                          </div>
                          <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                          <CardDescription className="text-base text-muted-foreground">
                            {service.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button
                            asChild
                            variant="outline"
                            // className="w-full group bg-transparent border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all"
                            className="w-full group bg-transparent border-primary/30 text-primary transition-all hover:border-primary/30 hover:bg-transparent hover:text-primary"
                          >
                            <Link to={service.link}>
                              Learn More
                              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Features Section - CHANGE: Improved gradient and card design */}
      <section className="py-20 bg-gradient-to-br from-primary/3 via-card/40 to-accent/3">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
                What Are You <span className="hero-gradient-text">Looking For?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our AI-powered services can be customized and combined to create the perfect solution for your unique
                business needs. Save significantly compared to industry standard rates while getting premium quality and
                dedicated support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {whyChooseFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <Card
                    key={index}
                    className="text-center card-lift border-primary/20 bg-card/60 backdrop-blur hover:border-primary/50 transition-all"
                  >
                    <CardContent className="pt-8">
                      <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-8 h-8 text-black" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="hover-glow bg-gradient-primary text-black font-semibold hover:text-black"
              >
                <Link to="/contact">Schedule Free Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/40 text-primary hover:bg-primary/10 bg-transparent hover:text-primary"
              >
                <Link to="/contact">Request Custom Package Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/3">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 text-foreground">
                  Transform Your <span className="hero-gradient-text">Business Today</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join hundreds of successful businesses that have accelerated their growth with PropelusAI's expert
                  services. Let's discuss how we can help you achieve your goals.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Free initial consultation and strategy session",
                    "Customized solutions for your specific needs",
                    "Ongoing support and optimization",
                    "Transparent pricing with no hidden fees",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground">{item}</h4>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-primary text-black hover:shadow-lg hover:shadow-primary/50 font-semibold hover:text-black"
                  >
                    <Link to="/contact">Get Free Quote</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-primary/40 text-primary hover:bg-primary/10 bg-transparent hover:text-primary"
                  >
                    <Link to="/contact">Call Us Now</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                  alt="Team collaborating"
                  className="rounded-3xl w-full h-full object-cover shadow-2xl border border-primary/30 card-lift"
                />
                <div className="absolute bottom-6 right-6 bg-gradient-primary text-black rounded-2xl p-6 shadow-lg font-bold hover:shadow-lg hover:shadow-primary/40 transition-all">
                  <div className="text-4xl mb-1">98%</div>
                  <div className="text-sm font-medium">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - CHANGE: Improved gradient background and spacing */}
      <section className="py-20 bg-gradient-to-br from-primary/3 via-card/40 to-accent/3">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground">Our Proven <span className="hero-gradient-text">Process</span></h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We follow a systematic approach to ensure every project delivers exceptional results and exceeds your
                expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={index} className="relative">
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-24 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary to-transparent" />
                    )}

                    <div className="text-center">
                      <div className="inline-flex items-center justify-center mb-6 relative">
                        <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 blur-xl" />
                        <div className="relative w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center">
                          <Icon className="w-10 h-10 text-black" />
                        </div>
                        <div className="absolute -top-2 -right-3 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-md font-bold">
                          {step.number}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/2">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              Ready to Transform <span className="hero-gradient-text">Your Business?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get a free consultation to discover which services are right for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="hover-glow bg-gradient-primary text-black font-semibold hover:text-black"
              >
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/40 text-primary hover:bg-primary/10 bg-transparent hover:text-primary"
              >
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
