import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { SEO } from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "Authentication & Condition",
    questions: [
      {
        q: "How do you authenticate each watch?",
        a: "Every timepiece undergoes a multi-step authentication process by our certified horologists. We inspect the case, dial, hands, movement, and serial numbers against manufacturer specifications. The movement is opened, photographed, and verified. Each watch receives a detailed condition report and certificate of authenticity."
      },
      {
        q: "What does 'excellent condition' mean?",
        a: "Excellent condition indicates minimal signs of wear. The watch may show light surface marks consistent with careful use, but no major scratches, dents, or refinishing. All functions work perfectly, and the movement performs within chronometric standards."
      },
      {
        q: "Do you sell watches with original boxes and papers?",
        a: "When available, we include original boxes, papers, and accessories. Each listing clearly states what is included. Watches without original documentation are priced accordingly and still come with our authentication certificate and warranty."
      }
    ]
  },
  {
    category: "Purchasing & Delivery",
    questions: [
      {
        q: "How does the reservation process work?",
        a: "Browse our collection and add desired timepieces to your bag. Complete checkout with your delivery information, then confirm your reservation via WhatsApp. We verify availability, arrange secure insured shipping, and provide tracking details."
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept bank wire transfers for purchases. For high-value transactions, we can arrange in-person delivery and inspection. Contact us via WhatsApp to discuss payment options for your specific reservation."
      },
      {
        q: "Do you ship internationally?",
        a: "Yes, we ship worldwide with fully insured door-to-door delivery. Shipping is complimentary on all orders. International buyers are responsible for any customs duties or import taxes in their country."
      },
      {
        q: "How long does delivery take?",
        a: "Domestic US deliveries typically arrive within 2-3 business days. International shipments take 5-7 business days depending on customs clearance. All shipments are fully tracked and insured."
      }
    ]
  },
  {
    category: "Warranty & Returns",
    questions: [
      {
        q: "What warranty do you provide?",
        a: "Every watch includes our comprehensive five-year mechanical warranty covering movement performance. This warranty ensures your timepiece functions correctly and covers any mechanical defects that arise from normal use."
      },
      {
        q: "What is your return policy?",
        a: "We offer a 30-day return period. If you're not completely satisfied, return the watch in its original condition for a full refund. The watch must be unworn and in the same condition as delivered."
      },
      {
        q: "Do you service watches after purchase?",
        a: "Yes, we can arrange professional servicing through authorized service centers. While routine servicing is not covered by our warranty, we're happy to coordinate maintenance and repairs at competitive rates."
      }
    ]
  },
  {
    category: "Selling to Maison Caldor",
    questions: [
      {
        q: "Do you purchase watches?",
        a: "Yes, we are always interested in acquiring exceptional timepieces for our collection. Contact us via WhatsApp with photos, details, and any documentation you have. We'll provide a fair quote based on current market values."
      },
      {
        q: "What brands do you accept?",
        a: "We focus on prestigious manufactures including Rolex, Patek Philippe, Audemars Piguet, Omega, Cartier, IWC, Jaeger-LeCoultre, Vacheron Constantin, and other haute horlogerie brands. Contact us about specific references."
      },
      {
        q: "How do you determine purchase prices?",
        a: "Our offers reflect current market values, condition, completeness (box/papers), and demand. We provide transparent explanations of our valuations and can often make immediate offers for desirable pieces."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <>
      <SEO 
        title="Frequently Asked Questions - Maison Caldor"
        description="Answers to common questions about authentication, purchasing, shipping, warranty, and selling luxury timepieces."
      />
      <AnnouncementBar />
      <Navigation />
      <main className="min-h-screen py-24">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 text-accent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground mb-16">
            Everything you need to know about reserving fine timepieces from Maison Caldor
          </p>

          <div className="space-y-12">
            {faqs.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h2 className="text-2xl font-serif font-light mb-6 text-accent">
                  {section.category}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {section.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`${sectionIndex}-${faqIndex}`}>
                      <AccordionTrigger className="text-left text-accent hover:text-primary">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-card border border-border rounded-lg text-center">
            <h3 className="text-2xl font-serif font-light mb-4 text-accent">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team is available to answer any specific inquiries about our collection or services.
            </p>
            <a
              href="https://wa.me/16462440064?text=I have a question about Maison Caldor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              Contact us via WhatsApp →
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}