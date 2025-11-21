// import { Link } from 'react-router-dom';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import {
//   Globe,
//   Smartphone,
//   Code,
//   Layers,
//   TrendingUp,
//   Mail,
//   Share2,
//   FileText,
//   Database,
//   Zap,
//   Bot,
//   Target,
//   Monitor,
//   Cloud,
//   ShieldCheck,
//   Headphones,
//   ArrowRight,
// } from 'lucide-react';

// const Services = () => {
//   const serviceCategories = [
//     {
//       id: 'web-mobile',
//       name: 'Web & Mobile Solutions',
//       icon: Globe,
//       services: [
//         {
//           icon: Globe,
//           title: 'AI Website Development',
//           description: 'Responsive, SEO-optimized websites with AI-powered design',
//           link: '/services/ai-website-building',
//         },
//         {
//           icon: Smartphone,
//           title: 'Mobile App Development',
//           description: 'Cross-platform iOS and Android apps with AI features',
//           link: '/services/mobile-app-development',
//         },
//         {
//           icon: Code,
//           title: 'Custom Software',
//           description: 'Tailored software solutions for unique business needs',
//           link: '/services/custom-software',
//         },
//         {
//           icon: Layers,
//           title: 'SaaS Platforms',
//           description: 'Scalable cloud-based software as a service solutions',
//           link: '/services/saas-platforms',
//         },
//       ],
//     },
//     {
//       id: 'marketing',
//       name: 'AI Marketing & Advertising',
//       icon: TrendingUp,
//       services: [
//         {
//           icon: TrendingUp,
//           title: 'Performance Marketing',
//           description: 'Data-driven campaigns for maximum ROI',
//           link: '/services/performance-marketing',
//         },
//         {
//           icon: Mail,
//           title: 'AI Email Marketing',
//           description: 'Automated, personalized email campaigns',
//           link: '/services/email-marketing',
//         },
//         {
//           icon: Share2,
//           title: 'Social Media AI Optimization',
//           description: 'AI-powered social media strategy and management',
//           link: '/services/social-media',
//         },
//         {
//           icon: FileText,
//           title: 'Content Automation',
//           description: 'AI-generated content that engages and converts',
//           link: '/services/content-automation',
//         },
//       ],
//     },
//     {
//       id: 'automation',
//       name: 'CRM & Automation',
//       icon: Zap,
//       services: [
//         {
//           icon: Database,
//           title: 'CRM Setup & Integration',
//           description: 'Complete CRM implementation and customization',
//           link: '/services/crm-setup',
//         },
//         {
//           icon: Zap,
//           title: 'Workflow Automation',
//           description: 'Streamline processes with intelligent automation',
//           link: '/services/workflow-automation',
//         },
//         {
//           icon: Bot,
//           title: 'Chatbots & Virtual Assistants',
//           description: 'AI-powered customer service automation',
//           link: '/services/chatbots',
//         },
//         {
//           icon: Target,
//           title: 'Lead Scoring AI',
//           description: 'Intelligent lead qualification and prioritization',
//           link: '/services/lead-scoring',
//         },
//       ],
//     },
//     {
//       id: 'security',
//       name: 'Security & Support',
//       icon: ShieldCheck,
//       services: [
//         {
//           icon: Monitor,
//           title: 'Monitoring',
//           description: '24/7 system monitoring and performance tracking',
//           link: '/services/monitoring',
//         },
//         {
//           icon: Cloud,
//           title: 'Cloud Hosting',
//           description: 'Enterprise-grade hosting with 99.9% uptime',
//           link: '/services/cloud-hosting',
//         },
//         {
//           icon: ShieldCheck,
//           title: 'Security Audits',
//           description: 'Comprehensive security assessments and solutions',
//           link: '/services/security-audits',
//         },
//         {
//           icon: Headphones,
//           title: 'Tech Support',
//           description: 'Dedicated technical support and maintenance',
//           link: '/services/tech-support',
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen pt-20">
//       {/* Hero Section */}
//       <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
//             <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
//               Our <span className="gradient-text">AI-Powered Services</span>
//             </h1>
//             <p className="text-lg md:text-xl text-muted-foreground">
//               Explore all solutions designed for business growth across 4 key categories
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Services Categories */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <Tabs defaultValue="web-mobile" className="max-w-7xl mx-auto">
//             <TabsList className="grid grid-cols-2 lg:grid-cols-4 mb-12 h-auto">
//               {serviceCategories.map((category) => {
//                 const Icon = category.icon;
//                 return (
//                   <TabsTrigger
//                     key={category.id}
//                     value={category.id}
//                     className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
//                   >
//                     <Icon className="w-5 h-5" />
//                     <span className="text-sm font-medium">{category.name}</span>
//                   </TabsTrigger>
//                 );
//               })}
//             </TabsList>

//             {serviceCategories.map((category) => (
//               <TabsContent key={category.id} value={category.id} className="space-y-8">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {category.services.map((service, index) => {
//                     const Icon = service.icon;
//                     return (
//                       <Card
//                         key={index}
//                         className="card-lift hover-glow border-border/50 bg-card/50 backdrop-blur"
//                       >
//                         <CardHeader>
//                           <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
//                             <Icon className="w-6 h-6 text-white" />
//                           </div>
//                           <CardTitle className="text-xl">{service.title}</CardTitle>
//                           <CardDescription className="text-base">
//                             {service.description}
//                           </CardDescription>
//                         </CardHeader>
//                         <CardContent>
//                           <Button asChild variant="outline" className="w-full group">
//                             <Link to={service.link}>
//                               Learn More
//                               <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                             </Link>
//                           </Button>
//                         </CardContent>
//                       </Card>
//                     );
//                   })}
//                 </div>
//               </TabsContent>
//             ))}
//           </Tabs>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-muted/30">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
//               Ready to Transform Your Business?
//             </h2>
//             <p className="text-lg text-muted-foreground mb-8">
//               Get a free consultation to discover which services are right for you
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button asChild size="lg" className="hover-glow">
//                 <Link to="/contact">Schedule Consultation</Link>
//               </Button>
//               <Button asChild size="lg" variant="outline">
//                 <Link to="/contact">Get a Quote</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;


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
    <div className="min-h-screen pt-20">
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Our <span className="gradient-text">AI-Powered Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Comprehensive marketing and IT solutions designed to accelerate your business growth and digital
              transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="hover-glow">
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="web-mobile" className="max-w-7xl mx-auto">
            <TabsList className="grid grid-cols-2 lg:grid-cols-4 mb-12 h-auto">
              {serviceCategories.map((category) => {
                const Icon = category.icon
                return (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{category.name}</span>
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
                      <Card key={index} className="card-lift hover-glow border-border/50 bg-card/50 backdrop-blur">
                        <CardHeader>
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <CardTitle className="text-xl">{service.title}</CardTitle>
                          <CardDescription className="text-base">{service.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button asChild variant="outline" className="w-full group bg-transparent">
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

      <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">What Are You Looking For?</h2>
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
                    className="text-center card-lift border-border/50 bg-card/50 backdrop-blur hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="pt-8">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="hover-glow">
                <Link to="/contact">Schedule Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Request Custom Package Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">Transform Your Business Today</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join hundreds of successful businesses that have accelerated their growth with PropelusAI's expert
                  services. Let's discuss how we can help you achieve your goals.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Free initial consultation and strategy session</h4>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Customized solutions for your specific needs</h4>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Ongoing support and optimization</h4>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Transparent pricing with no hidden fees</h4>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                    <Link to="/contact">Get Free Quote</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/contact">Call Us Now</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                  alt="Team collaborating"
                  className="rounded-3xl w-full h-full object-cover shadow-2xl"
                />
                <div className="absolute bottom-6 right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-lg">
                  <div className="text-4xl font-bold mb-1">98%</div>
                  <div className="text-sm font-medium">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Our Proven Process</h2>
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
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full" />
                        <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                          {step.number}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get a free consultation to discover which services are right for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="hover-glow">
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
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
