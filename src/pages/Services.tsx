import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
} from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      id: 'web-mobile',
      name: 'Web & Mobile Solutions',
      icon: Globe,
      services: [
        {
          icon: Globe,
          title: 'AI Website Development',
          description: 'Responsive, SEO-optimized websites with AI-powered design',
          link: '/services/ai-website-building',
        },
        {
          icon: Smartphone,
          title: 'Mobile App Development',
          description: 'Cross-platform iOS and Android apps with AI features',
          link: '/services/mobile-app-development',
        },
        {
          icon: Code,
          title: 'Custom Software',
          description: 'Tailored software solutions for unique business needs',
          link: '/services/custom-software',
        },
        {
          icon: Layers,
          title: 'SaaS Platforms',
          description: 'Scalable cloud-based software as a service solutions',
          link: '/services/saas-platforms',
        },
      ],
    },
    {
      id: 'marketing',
      name: 'AI Marketing & Advertising',
      icon: TrendingUp,
      services: [
        {
          icon: TrendingUp,
          title: 'Performance Marketing',
          description: 'Data-driven campaigns for maximum ROI',
          link: '/services/performance-marketing',
        },
        {
          icon: Mail,
          title: 'AI Email Marketing',
          description: 'Automated, personalized email campaigns',
          link: '/services/email-marketing',
        },
        {
          icon: Share2,
          title: 'Social Media AI Optimization',
          description: 'AI-powered social media strategy and management',
          link: '/services/social-media',
        },
        {
          icon: FileText,
          title: 'Content Automation',
          description: 'AI-generated content that engages and converts',
          link: '/services/content-automation',
        },
      ],
    },
    {
      id: 'automation',
      name: 'CRM & Automation',
      icon: Zap,
      services: [
        {
          icon: Database,
          title: 'CRM Setup & Integration',
          description: 'Complete CRM implementation and customization',
          link: '/services/crm-setup',
        },
        {
          icon: Zap,
          title: 'Workflow Automation',
          description: 'Streamline processes with intelligent automation',
          link: '/services/workflow-automation',
        },
        {
          icon: Bot,
          title: 'Chatbots & Virtual Assistants',
          description: 'AI-powered customer service automation',
          link: '/services/chatbots',
        },
        {
          icon: Target,
          title: 'Lead Scoring AI',
          description: 'Intelligent lead qualification and prioritization',
          link: '/services/lead-scoring',
        },
      ],
    },
    {
      id: 'security',
      name: 'Security & Support',
      icon: ShieldCheck,
      services: [
        {
          icon: Monitor,
          title: 'Monitoring',
          description: '24/7 system monitoring and performance tracking',
          link: '/services/monitoring',
        },
        {
          icon: Cloud,
          title: 'Cloud Hosting',
          description: 'Enterprise-grade hosting with 99.9% uptime',
          link: '/services/cloud-hosting',
        },
        {
          icon: ShieldCheck,
          title: 'Security Audits',
          description: 'Comprehensive security assessments and solutions',
          link: '/services/security-audits',
        },
        {
          icon: Headphones,
          title: 'Tech Support',
          description: 'Dedicated technical support and maintenance',
          link: '/services/tech-support',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Our <span className="gradient-text">AI-Powered Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Explore all solutions designed for business growth across 4 key categories
            </p>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="web-mobile" className="max-w-7xl mx-auto">
            <TabsList className="grid grid-cols-2 lg:grid-cols-4 mb-12 h-auto">
              {serviceCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{category.name}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {serviceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <Card
                        key={index}
                        className="card-lift hover-glow border-border/50 bg-card/50 backdrop-blur"
                      >
                        <CardHeader>
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <CardTitle className="text-xl">{service.title}</CardTitle>
                          <CardDescription className="text-base">
                            {service.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button asChild variant="outline" className="w-full group">
                            <Link to={service.link}>
                              Learn More
                              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
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
  );
};

export default Services;
