import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const FAQ = () => {
  const faqs = [
    {
      question: "What industries do you support?",
      answer:
        "We work with businesses across all industries including e-commerce, healthcare, finance, education, real estate, SaaS, and more. Our AI-powered solutions are adaptable to meet the unique needs of any sector.",
    },
    {
      question: "How long does a project take?",
      answer:
        "Project timelines vary based on complexity and scope. A standard website typically takes 2-4 weeks, while more complex solutions like custom software or mobile apps may take 8-12 weeks. We provide detailed timelines during the consultation phase.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes! All our services include post-launch support. Standard projects include 6 months of free maintenance and support. We also offer extended support packages and ongoing maintenance plans tailored to your needs.",
    },
    {
      question: "What are your pricing options?",
      answer:
        "We offer flexible pricing models including fixed-price projects, hourly rates, and monthly retainers. Pricing varies based on project complexity, timeline, and requirements. Contact us for a detailed quote customized to your needs.",
    },
    {
      question: "Can we customize service packages?",
      answer:
        "We understand that every business has unique needs. All our service packages are fully customizable. We can mix and match services, adjust deliverables, and create a solution that perfectly fits your requirements and budget.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We use cutting-edge technologies including React, Next.js, Node.js, Python, TailwindCSS, AWS, Google Cloud, and various AI/ML frameworks. We select the best technology stack for each project based on your specific requirements.",
    },
    {
      question: "Do you offer SEO services?",
      answer:
        "Yes, SEO is integrated into all our web development projects. We also offer dedicated SEO services including keyword research, on-page optimization, technical SEO, content strategy, and ongoing SEO management.",
    },
    {
      question: "How do you ensure project quality?",
      answer:
        "We follow industry best practices including comprehensive testing, code reviews, quality assurance processes, and iterative development. Our 98% success rate reflects our commitment to delivering high-quality solutions.",
    },
    {
      question: "Can you help with website redesign?",
      answer:
        "Yes! We specialize in website redesigns and modernization. We can update your existing website with modern design, improved performance, better SEO, and enhanced user experience while preserving your valuable content and SEO rankings.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "We offer a satisfaction guarantee. If you're not satisfied with our initial deliverables, we'll work with you to make it right. Specific refund terms are outlined in our service agreements and vary based on project scope.",
    },
  ]

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-background via-card/20 to-accent/5">
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-accent/3 to-transparent" /> */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-accent/1 md:from-primary/8 md:via-accent/3 to-transparent" />

        {/* Animated background elements */}
        {/* <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-3d opacity-1 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-3d opacity-3 rounded-full blur-2xl pointer-events-none"></div> */}
<div className="absolute top-20 left-10 w-64 h-64 bg-gradient-3d opacity-20 md:opacity-50 rounded-full blur-3xl animate-pulse pointer-events-none"></div>

<div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-3d opacity-10 md:opacity-40 rounded-full blur-2xl pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground hero-gradient-text">
              Frequently Asked <span className="hero-gradient-text">Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground/90">
              Find answers to common questions about our services, processes, and policies
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section - CHANGE: Improved card styling with better spacing */}
      <section className="py-20 bg-gradient-to-b from-primary/2 via-background to-accent/2">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/40 bg-gradient-to-br from-card/80 to-card/60 p-6 md:p-8 hover:border-primary/60 transition-all">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b-0">
                    <AccordionTrigger className="text-left hover:no-underline py-4 px-4 rounded-lg hover:bg-primary/10 transition-colors group">
                      <span className="font-heading font-semibold text-base md:text-lg pr-4 text-foreground group-hover:text-primary transition-colors">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pt-2 pb-4 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-to-br from-primary/2 via-card/40 to-accent/2">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">Still Have <span className="hero-gradient-text">Questions?</span></h2>
            <p className="text-muted-foreground text-lg mb-8">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary text-black font-semibold hover-glow hover:text-black"
              >
                <Link to="/contact">Contact Support</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/40 text-primary hover:bg-primary/10 bg-transparent hover:text-primary"
              >
                <a href="mailto:support@propelusai.com">Email Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ
