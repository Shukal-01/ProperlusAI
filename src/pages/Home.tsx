import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
  Clock,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const Home = () => {
  const [counters, setCounters] = useState({ success: 0, clients: 0, projects: 0 });

  useEffect(() => {
    const animateCounter = (target: number, key: keyof typeof counters, duration: number) => {
      const increment = target / (duration / 16);
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCounters(prev => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, 16);
    };

    animateCounter(98, 'success', 2000);
    animateCounter(500, 'clients', 2000);
    animateCounter(1000, 'projects', 2000);
  }, []);

  const services = [
    {
      icon: Globe,
      title: 'Web & Mobile Solutions',
      description: 'Responsive websites and powerful mobile apps built with AI-driven technology.',
      link: '/services#web-mobile',
    },
    {
      icon: Megaphone,
      title: 'AI Marketing & Advertising',
      description: 'Data-driven campaigns that maximize ROI and accelerate growth.',
      link: '/services#marketing',
    },
    {
      icon: Workflow,
      title: 'CRM & Automation',
      description: 'Streamline operations with intelligent automation and CRM solutions.',
      link: '/services#automation',
    },
    {
      icon: Shield,
      title: 'Security & Support',
      description: '24/7 monitoring, cloud hosting, and enterprise-grade security.',
      link: '/services#security',
    },
  ];

  const features = [
    'AI design & content generation',
    'Responsive mobile layouts',
    'Advanced SEO optimization',
    'SSL + CDN + Analytics included',
    '24/7 uptime monitoring',
    'Enterprise-grade hosting',
  ];

  const processSteps = [
    { icon: Target, title: 'Discovery', description: 'Understanding your goals and challenges' },
    { icon: Zap, title: 'Strategy', description: 'Creating a tailored AI-powered solution' },
    { icon: Sparkles, title: 'Implementation', description: 'Building and deploying your solution' },
    { icon: CheckCircle2, title: 'Optimization', description: 'Continuous improvement and support' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
              Empowering Businesses with{' '}
              <span className="hero-gradient-text">AI-Driven Marketing</span> &{' '}
              <span className="hero-gradient-text">IT Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We help creators, startups, and companies accelerate growth with smart, scalable,
              AI-powered digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="hover-glow group">
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            {[
              { value: counters.success, suffix: '%', label: 'Success Rate' },
              { value: counters.clients, suffix: '+', label: 'Happy Clients' },
              { value: counters.projects, suffix: '+', label: 'Projects Delivered' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur border border-border card-lift"
              >
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Our Services Overview
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive AI-powered solutions designed to transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
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
                    <Link
                      to={service.link}
                      className="text-primary hover:text-primary/80 font-medium inline-flex items-center group"
                    >
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Service Portfolio */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              AI-Powered Service Portfolio
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Discover our comprehensive range of 16 AI-driven solutions designed to transform your
              operations at affordable rates
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Featured Service 1 */}
            <Card className="card-lift border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">
                  AI-Based Website Building & Hosting
                </CardTitle>
                <CardDescription className="text-base">
                  Transform your online presence with responsive, SEO-optimized, AI-powered websites
                  hosted on enterprise-grade servers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {features.slice(0, 6).map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="w-full hover-glow">
                  <Link to="/services/ai-website-building">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Featured Service 2 */}
            <Card className="card-lift border-2 border-accent/20">
              <CardHeader>
                <CardTitle className="text-2xl">
                  AI-Based Mobile Application Development
                </CardTitle>
                <CardDescription className="text-base">
                  Launch AI-powered mobile apps with smart recommendations, real-time analytics, and
                  cross-platform performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {[
                    'iOS + Android development',
                    'AI-driven UX optimization',
                    'Push notifications',
                    'Predictive analytics',
                    'Performance monitoring',
                    'Seamless integration',
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/services/mobile-app-development">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground text-lg">
              A proven methodology for delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary to-accent rounded-3xl p-12 md:p-16 text-white">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Transform Your Business Today
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Join hundreds of businesses already accelerating their growth with PropelusAI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
              >
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Call Us Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
