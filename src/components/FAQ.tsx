import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What makes Fresh beverages different from other soft drinks?",
      answer: "Fresh beverages are made with natural ingredients and real fruit extracts. We focus on authentic flavours without artificial preservatives, ensuring a healthier and more refreshing drink experience."
    },
    {
      question: "Are Fresh beverages suitable for children?",
      answer: "Yes! Our beverages are made with natural ingredients and are suitable for children. However, we recommend moderate consumption as part of a balanced diet."
    },
    {
      question: "Where can I buy Fresh beverages?",
      answer: "Fresh beverages are available at major supermarkets, convenience stores, and through our network of distributors across India. Use our store locator to find the nearest retailer."
    },
    {
      question: "Do you offer bulk orders for events or businesses?",
      answer: "Yes, we provide bulk orders for events, offices, and businesses. Contact our sales team through the distributors page or call us directly for special pricing and arrangements."
    },
    {
      question: "What is the shelf life of Fresh beverages?",
      answer: "Our beverages have a shelf life of 12 months from the manufacturing date when stored in cool, dry conditions. Always check the expiry date printed on the bottle."
    },
    {
      question: "Are your beverages environmentally friendly?",
      answer: "We're committed to sustainability. Our bottles are 100% recyclable, and we're continuously working on reducing our carbon footprint through eco-friendly manufacturing processes."
    },
    {
      question: "Do you have sugar-free or diet options?",
      answer: "Currently, we focus on natural fruit-based beverages with natural sugars. We're exploring sugar-free alternatives and will announce new product lines soon."
    },
    {
      question: "How can I become a Fresh distributor?",
      answer: "We're always looking for passionate partners! Visit our Distributors page to fill out the partnership application form, and our team will contact you with details about the opportunity."
    },
    {
      question: "What nutritional information is available for your products?",
      answer: "Complete nutritional information is available on each product page and on the product labels. You can also contact us for detailed nutritional data sheets."
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, Fresh beverages are available in India through our distributor network. We're planning international expansion and will update our website with shipping information as it becomes available."
    }
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about Fresh beverages, our products, and services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg border border-border px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;