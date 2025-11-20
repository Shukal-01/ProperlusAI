import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, ArrowLeft, Clock, Wrench, TrendingUp, Download } from 'lucide-react';

const ServiceDetail = () => {
  const { slug } = useParams();

  // This is a template - you'd populate this based on the slug
  const serviceData = {
    title: 'AI-Based Website Building & Hosting',
    overview:
      'Transform your online presence with responsive, SEO-optimized, AI-powered websites hosted on enterprise-grade servers.',
    description:
      'Our AI-Based Website Building & Hosting service combines cutting-edge artificial intelligence with proven web development best practices. We create stunning, high-performance websites that not only look beautiful but also drive conversions and rank well in search engines. Every website is custom-designed to match your brand identity and business objectives.',
    features: [
      'AI-powered design and content generation',
      'Fully responsive mobile-first layouts',
      'Advanced SEO optimization',
      'SSL certificates and CDN integration',
      'Real-time analytics and monitoring',
      'Enterprise-grade hosting included',
      'Custom domain setup',
      '24/7 uptime monitoring',
      'Automated backups',
      'Performance optimization',
    ],
    tools: [
      'React / Next.js',
      'TailwindCSS',
      'Vercel / AWS',
      'Google Analytics',
      'SEMrush',
      'AI Content Tools',
    ],
    timeline: '2-4 weeks for standard projects',
    support: '6 months of free maintenance and support included',
    growth: [
      'E-commerce integration',
      'Advanced analytics dashboards',
      'Multi-language support',
      'Custom integrations',
      'Progressive Web App (PWA) conversion',
    ],
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Button asChild variant="ghost" className="group">
          <Link to="/services">
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              {serviceData.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">{serviceData.overview}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Detailed Description
                </h2>
                <p className="text-muted-foreground leading-relaxed">{serviceData.description}</p>
              </div>

              {/* Key Features */}
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {serviceData.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Software */}
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
                  Tools & Software
                </h2>
                <div className="flex flex-wrap gap-3">
                  {serviceData.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Future Growth Options */}
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
                  Future Growth Options
                </h2>
                <div className="grid gap-3">
                  {serviceData.growth.map((option, index) => (
                    <Card key={index} className="border-border/50">
                      <CardContent className="flex items-center space-x-3 py-4">
                        <TrendingUp className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>{option}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <Card className="border-2 border-primary/20 sticky top-24">
                <CardContent className="pt-6 space-y-6">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Timeline</h3>
                      <p className="text-sm text-muted-foreground">{serviceData.timeline}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Wrench className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Support</h3>
                      <p className="text-sm text-muted-foreground">{serviceData.support}</p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t">
                    <Button asChild className="w-full hover-glow">
                      <Link to="/contact">Get Quote</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/contact">Schedule Consultation</Link>
                    </Button>
                    <Button variant="ghost" className="w-full">
                      <Download className="mr-2 w-4 h-4" />
                      Download Brochure
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Let's discuss how this service can transform your business
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
