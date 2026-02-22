import ScrollReveal from "@/components/animations/ScrollReveal";

const Privacy = () => (
  <>
    <section className="gradient-navy text-primary-foreground section-padding">
      <div className="container-main">
        <ScrollReveal>
          <h1 className="font-heading text-4xl sm:text-5xl font-black">Privacy Policy</h1>
        </ScrollReveal>
      </div>
    </section>
    <section className="section-padding bg-background">
      <div className="container-main max-w-3xl">
        <div className="clay-card p-8 md:p-12 font-body text-muted-foreground leading-relaxed space-y-6 text-sm">
          <p><strong className="text-foreground">Last Updated:</strong> February 2026</p>
          <h2 className="font-heading text-xl font-bold text-foreground">Information We Collect</h2>
          <p>When you use our contact form, we collect your name, phone number, email address, and message content. This information is used solely to respond to your inquiry and schedule detailing services.</p>
          <h2 className="font-heading text-xl font-bold text-foreground">How We Use Your Information</h2>
          <p>Your personal information is used to communicate with you about our services, schedule appointments, send service confirmations, and improve our customer experience. We do not sell, trade, or rent your personal information to third parties.</p>
          <h2 className="font-heading text-xl font-bold text-foreground">Cookies</h2>
          <p>Our website may use cookies to enhance your browsing experience. Cookies are small files stored on your device that help us understand how you use our site. You can control cookie settings through your browser preferences.</p>
          <h2 className="font-heading text-xl font-bold text-foreground">Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information. However, no method of internet transmission is 100% secure, and we cannot guarantee absolute security.</p>
          <h2 className="font-heading text-xl font-bold text-foreground">Third-Party Services</h2>
          <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.</p>
          <h2 className="font-heading text-xl font-bold text-foreground">Contact</h2>
          <p>For questions about this privacy policy, contact HZ Details at <a href="tel:+18329843507" className="text-accent hover:underline">(832) 984-3507</a> or email info@hzdetails.com.</p>
        </div>
      </div>
    </section>
  </>
);

export default Privacy;
