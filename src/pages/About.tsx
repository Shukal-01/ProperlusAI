// import { Card, CardContent } from '@/components/ui/card';
// import { CheckCircle2, Target, Lightbulb, Users, Award, TrendingUp } from 'lucide-react';

// const About = () => {
//   const values = [
//     {
//       icon: CheckCircle2,
//       title: '98% Success Rate',
//       description: 'Proven track record of delivering successful projects',
//     },
//     {
//       icon: Award,
//       title: 'Transparent Pricing',
//       description: 'No hidden costs, clear and affordable pricing models',
//     },
//     {
//       icon: Users,
//       title: 'Dedicated Support',
//       description: '24/7 support team ready to assist you',
//     },
//     {
//       icon: Lightbulb,
//       title: 'AI-Enabled Solutions',
//       description: 'Cutting-edge AI technology powering every solution',
//     },
//     {
//       icon: TrendingUp,
//       title: 'Fast Delivery',
//       description: 'Efficient processes ensuring timely project completion',
//     },
//     {
//       icon: Target,
//       title: 'Results-Driven',
//       description: 'Focused on measurable outcomes and ROI',
//     },
//   ];

//   return (
//     <div className="min-h-screen pt-20">
//       {/* Hero Section */}
//       <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
//             <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
//               Who We <span className="gradient-text">Are</span>
//             </h1>
//             <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
//               PropelusAI is a digital transformation and AI solutions company helping businesses
//               scale using modern technology. We combine innovation, expertise, and dedication to
//               deliver exceptional results.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
//                 Our Mission
//               </div>
//               <h2 className="text-3xl md:text-5xl font-heading font-bold">
//                 Making AI-Powered Solutions Accessible
//               </h2>
//               <p className="text-muted-foreground text-lg leading-relaxed">
//                 Our mission is to make AI-powered digital solutions accessible, affordable, and
//                 impactful for businesses of all sizes. We believe that every company deserves access
//                 to cutting-edge technology that drives growth and innovation.
//               </p>
//             </div>
//             <div className="relative">
//               <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary to-accent p-1">
//                 <div className="w-full h-full rounded-3xl bg-background flex items-center justify-center">
//                   <Target className="w-32 h-32 text-primary" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* What We Do */}
//       <section className="py-20 bg-muted/30">
//         <div className="container mx-auto px-4">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-16">
//               <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">What We Do</h2>
//               <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
//                 We combine marketing, IT, automation, and AI to help businesses grow faster and
//                 smarter
//               </p>
//             </div>

//             <div className="grid md:grid-cols-3 gap-8">
//               {[
//                 {
//                   title: 'AI-Powered Marketing',
//                   description:
//                     'Leverage artificial intelligence to optimize campaigns, target audiences, and maximize ROI with data-driven strategies.',
//                 },
//                 {
//                   title: 'Digital Transformation',
//                   description:
//                     'Transform traditional business processes with modern web and mobile solutions powered by cutting-edge technology.',
//                 },
//                 {
//                   title: 'Automation & Integration',
//                   description:
//                     'Streamline operations with intelligent automation, CRM integration, and workflow optimization.',
//                 },
//               ].map((item, index) => (
//                 <Card key={index} className="card-lift border-border/50 bg-card/50 backdrop-blur">
//                   <CardContent className="pt-6">
//                     <h3 className="text-xl font-heading font-semibold mb-3">{item.title}</h3>
//                     <p className="text-muted-foreground leading-relaxed">{item.description}</p>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-16">
//               <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Why Choose Us?</h2>
//               <p className="text-muted-foreground text-lg">
//                 We stand out with our commitment to excellence and innovation
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {values.map((value, index) => {
//                 const Icon = value.icon;
//                 return (
//                   <div
//                     key={index}
//                     className="p-6 rounded-2xl border border-border bg-card card-lift hover-glow"
//                   >
//                     <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
//                       <Icon className="w-6 h-6 text-white" />
//                     </div>
//                     <h3 className="text-lg font-heading font-semibold mb-2">{value.title}</h3>
//                     <p className="text-muted-foreground text-sm">{value.description}</p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Values Statement */}
//       <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
//               Building the Future Together
//             </h2>
//             <p className="text-lg md:text-xl leading-relaxed opacity-90">
//               We're not just a service provider – we're your partner in digital transformation.
//               Every project is an opportunity to create something exceptional, and every client
//               relationship is built on trust, transparency, and shared success.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;

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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Who We <span className="gradient-text">Are</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              PropelusAI is a digital transformation and AI solutions company helping businesses scale using modern
              technology. We combine innovation, expertise, and dedication to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                Our Mission
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold">Making AI-Powered Solutions Accessible</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our mission is to make AI-powered digital solutions accessible, affordable, and impactful for businesses
                of all sizes. We believe that every company deserves access to cutting-edge technology that drives
                growth and innovation.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary to-accent p-1">
                <div className="w-full h-full rounded-3xl bg-background flex items-center justify-center">
                  <Target className="w-32 h-32 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">What We Do</h2>
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
                <Card key={index} className="card-lift border-border/50 bg-card/50 backdrop-blur">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-heading font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Our Core Values</h2>
              <p className="text-muted-foreground text-lg">Principles that guide everything we do</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {coreValues.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="p-8 rounded-2xl border border-border bg-card/50 card-lift">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Why Choose Us?</h2>
              <p className="text-muted-foreground text-lg">
                We stand out with our commitment to excellence and innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="p-6 rounded-2xl border border-border bg-card card-lift hover-glow">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                Our Impact
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold">Growing Businesses Since 2018</h2>
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
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 border border-primary/30">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <TrendingUp className="w-32 h-32 text-white/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Statement */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Building the Future Together</h2>
            <p className="text-lg md:text-xl leading-relaxed opacity-90 mb-8">
              We're not just a service provider – we're your partner in digital transformation. Every project is an
              opportunity to create something exceptional, and every client relationship is built on trust,
              transparency, and shared success.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Start Your Transformation Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
