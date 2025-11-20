import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';

const FAQ = () => {
  const faqs = [
    {
      question: 'What industries do you support?',
      answer:
        'We work with businesses across all industries including e-commerce, healthcare, finance, education, real estate, SaaS, and more. Our AI-powered solutions are adaptable to meet the unique needs of any sector.',
    },
    {
      question: 'How long does a project take?',
      answer:
        'Project timelines vary based on complexity and scope. A standard website typically takes 2-4 weeks, while more complex solutions like custom software or mobile apps may take 8-12 weeks. We provide detailed timelines during the consultation phase.',
    },
    {
      question: 'Do you provide post-launch support?',
      answer:
        'Yes! All our services include post-launch support. Standard projects include 6 months of free maintenance and support. We also offer extended support packages and ongoing maintenance plans tailored to your needs.',
    },
    {
      question: 'What are your pricing options?',
      answer:
        'We offer flexible pricing models including fixed-price projects, hourly rates, and monthly retainers. Pricing varies based on project complexity, timeline, and requirements. Contact us for a detailed quote customized to your needs.',
    },
    {
      question: 'Can we customize service packages?',
      answer:
        'Absolutely! We understand that every business has unique needs. All our service packages are fully customizable. We can mix and match services, adjust deliverables, and create a solution that perfectly fits your requirements and budget.',
    },
    {
      question: 'What technologies do you use?',
      answer:
        'We use cutting-edge technologies including React, Next.js, Node.js, Python, TailwindCSS, AWS, Google Cloud, and various AI/ML frameworks. We select the best technology stack for each project based on your specific requirements.',
    },
    {
      question: 'Do you offer SEO services?',
      answer:
        'Yes, SEO is integrated into all our web development projects. We also offer dedicated SEO services including keyword research, on-page optimization, technical SEO, content strategy, and ongoing SEO management.',
    },
    {
      question: 'How do you ensure project quality?',
      answer:
        'We follow industry best practices including comprehensive testing, code reviews, quality assurance processes, and iterative development. Our 98% success rate reflects our commitment to delivering high-quality solutions.',
    },
    {
      question: 'Can you help with website redesign?',
      answer:
        'Yes! We specialize in website redesigns and modernization. We can update your existing website with modern design, improved performance, better SEO, and enhanced user experience while preserving your valuable content and SEO rankings.',
    },
    {
      question: 'What is your refund policy?',
      answer:
        'We offer a satisfaction guarantee. If you\'re not satisfied with our initial deliverables, we\'ll work with you to make it right. Specific refund terms are outlined in our service agreements and vary based on project scope.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Find answers to common questions about our services, processes, and policies
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 p-6 md:p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b-0">
                    <AccordionTrigger className="text-left hover:no-underline py-4 px-4 rounded-lg hover:bg-muted/50 transition-colors">
                      <span className="font-heading font-semibold text-base md:text-lg pr-4">
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center h-11 px-8 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors hover-glow"
              >
                Contact Support
              </a>
              <a
                href="mailto:support@propelusai.com"
                className="inline-flex items-center justify-center h-11 px-8 rounded-md border border-border bg-background hover:bg-muted font-medium transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
