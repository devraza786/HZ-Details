import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";

const faqs = [
  { q: "How much does auto detailing cost in Houston?", a: "Pricing varies based on vehicle size and condition. Our waxing starts at $100, interior/exterior details from $180, full details from $250, paint correction from $350, and ceramic coatings from $500. Contact us for a personalized quote for your Houston vehicle." },
  { q: "How long does a full detail take?", a: "A full detail typically takes 4-8 hours depending on vehicle size and condition. We prioritize quality over speed to ensure every surface receives proper attention. We recommend dropping off your vehicle and picking it up later." },
  { q: "What is ceramic coating?", a: "Ceramic coating is a liquid polymer that chemically bonds with your vehicle's paint, creating a durable, hydrophobic layer of protection. It guards against UV damage, chemical stains, bird droppings, and minor scratches for 2-5 years." },
  { q: "How long does ceramic coating last?", a: "Professional ceramic coatings last 2-5 years depending on the product tier, environmental exposure, and maintenance. In Houston's harsh climate, we recommend annual inspections to maintain optimal protection." },
  { q: "Do you offer mobile detailing?", a: "Contact us to discuss mobile detailing options for the Greater Houston area. We serve Houston and all surrounding communities. Call (832) 984-3507 for availability." },
  { q: "Is paint correction worth it?", a: "Absolutely. Paint correction permanently removes swirl marks, scratches, and oxidation that diminish your vehicle's appearance and value. It's especially valuable in Houston where UV exposure accelerates paint degradation." },
  { q: "How often should I wax my car in Houston weather?", a: "In Houston's intense climate, we recommend waxing every 4-8 weeks for carnauba wax or every 3-6 months for synthetic sealants. The UV radiation and humidity in Houston break down wax protection faster than cooler climates." },
  { q: "What products do you use?", a: "We use only professional-grade products from trusted brands. Our products are pH-neutral, environmentally responsible, and specifically selected for effectiveness in Houston's climate conditions." },
  { q: "Can you remove water spots from my car?", a: "Yes! Water spot removal is included in our paint correction service. Houston's hard water frequently causes mineral deposits on vehicle surfaces. We use specialized compounds to safely remove these spots." },
  { q: "Do you detail all vehicle types?", a: "Yes — we detail sedans, SUVs, trucks, sports cars, luxury vehicles, and exotics. Every vehicle receives the same meticulous care regardless of make or model." },
  { q: "How should I maintain my car between details?", a: "Use pH-neutral car wash soap, the two-bucket method, and microfiber towels. Avoid automatic car washes. Park in shade when possible. In Houston's climate, we recommend maintenance washes every two weeks." },
  { q: "What areas around Houston do you serve?", a: "We serve the entire Greater Houston metropolitan area including Katy, Cypress, Spring, The Woodlands, Sugar Land, Pearland, Pasadena, League City, Humble, and all surrounding communities." },
  { q: "How do I book an appointment?", a: "You can book by calling (832) 984-3507 or using our online contact form. We'll discuss your vehicle's needs and schedule a convenient time for your detail." },
  { q: "What's the difference between waxing and ceramic coating?", a: "Wax provides 4-8 weeks of protection with a warm glow, while ceramic coating offers 2-5 years of protection with superior chemical and UV resistance. Ceramic coating costs more upfront but requires less frequent reapplication." },
  { q: "Do you offer gift certificates?", a: "Yes! Auto detailing makes an excellent gift for car enthusiasts in Houston. Contact us to purchase a gift certificate for any of our services." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <section className="gradient-navy text-primary-foreground section-padding">
        <div className="container-main">
          <ScrollReveal>
            <h1 className="font-heading text-4xl sm:text-5xl font-black mb-4">
              Frequently Asked <span className="text-accent">Questions</span>
            </h1>
            <p className="font-body text-silver-light text-lg max-w-2xl">
              Common questions about auto detailing services in Houston, TX.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-main max-w-3xl">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.03}>
                <div className="clay-card overflow-hidden">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <span className="font-heading font-semibold text-foreground text-sm pr-4">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-4 font-body text-muted-foreground text-sm leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-14">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Still Have Questions?</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-accent">Contact Us</Link>
                <a href="tel:+18329843507" className="btn-primary">Call (832) 984-3507</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default FAQ;
