import ScrollReveal from "@/components/animations/ScrollReveal";

const Terms = () => (
  <>
    <section className="gradient-navy text-primary-foreground section-padding">
      <div className="container-main">
        <ScrollReveal>
          <h1 className="font-heading text-4xl sm:text-5xl font-black">Terms & Conditions</h1>
        </ScrollReveal>
      </div>
    </section>
    <section className="section-padding bg-background">
      <div className="container-main max-w-3xl">
        <div className="clay-card p-8 md:p-12 font-body text-muted-foreground leading-relaxed space-y-6 text-sm">
          <p><strong className="text-foreground">Last Updated:</strong> February 2026</p>
          <h2 className="font-heading text-xl font-bold text-foreground">Service Agreement</h2>
          <p>By booking a service with HZ Details, you agree to these terms and conditions. All services are subject to availability and scheduling confirmation.</p>
          <h2 className="font-heading text-xl font-bold text-foreground">Pricing & Payment</h2>
          <p>Prices quoted are estimates based on standard vehicle conditions. Additional charges may apply for excessively dirty vehicles, oversized vehicles, or special requests. Final pricing is confirmed before service begins. Payment is due upon completion of service.</p>
          <h2 className="font-heading text-xl font-bold text-foreground">Cancellation Policy</h2>
          <p>We request at least 24 hours notice for cancellations. Late cancellations or no-shows may be subject to a cancellation fee. We understand emergencies happen and will work with you on a case-by-case basis.</p>
          <h2 className="font-heading text-xl font-bold text-foreground">Liability Limitations</h2>
          <p>HZ Details takes every precaution to protect your vehicle. However, we are not responsible for pre-existing damage, mechanical issues, or items left in vehicles. We recommend removing personal valuables before your appointment. Any existing damage will be documented before service begins.</p>
          <h2 className="font-heading text-xl font-bold text-foreground">Service Disclaimers</h2>
          <p>Results may vary based on vehicle condition, age, and prior maintenance. Paint correction results depend on clear coat thickness and condition. Ceramic coating longevity depends on maintenance and environmental exposure. We provide honest assessments and realistic expectations for every service.</p>
          <h2 className="font-heading text-xl font-bold text-foreground">Satisfaction Guarantee</h2>
          <p>We stand behind our work. If you're not satisfied with any aspect of our service, contact us within 48 hours and we'll make it right.</p>
          <h2 className="font-heading text-xl font-bold text-foreground">Contact</h2>
          <p>For questions about these terms, contact HZ Details at <a href="tel:+18329843507" className="text-accent hover:underline">(832) 984-3507</a>.</p>
        </div>
      </div>
    </section>
  </>
);

export default Terms;
