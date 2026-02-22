import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="gradient-navy text-primary-foreground section-padding">
        <div className="container-main">
          <ScrollReveal>
            <h1 className="font-heading text-4xl sm:text-5xl font-black mb-4">
              Contact <span className="text-accent">HZ Details</span>
            </h1>
            <p className="font-body text-silver-light text-lg max-w-2xl">
              Book your professional auto detail in Houston, TX. Call us or fill out the form below.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Form */}
            <ScrollReveal>
              <div className="clay-card p-8">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Message Sent!</h2>
                    <p className="font-body text-muted-foreground">We'll get back to you shortly. You can also call us directly.</p>
                    <a href="tel:+18329843507" className="btn-accent mt-6 inline-flex items-center gap-2">
                      <Phone className="w-4 h-4" /> (832) 984-3507
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Book Your Detail</h2>
                    <div>
                      <label className="font-body text-sm font-medium text-foreground mb-1 block">Name *</label>
                      <input required type="text" className="w-full clay-inset px-4 py-3 bg-secondary font-body text-foreground text-sm outline-none focus:ring-2 focus:ring-accent" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="font-body text-sm font-medium text-foreground mb-1 block">Phone *</label>
                      <input required type="tel" className="w-full clay-inset px-4 py-3 bg-secondary font-body text-foreground text-sm outline-none focus:ring-2 focus:ring-accent" placeholder="(832) 000-0000" />
                    </div>
                    <div>
                      <label className="font-body text-sm font-medium text-foreground mb-1 block">Email</label>
                      <input type="email" className="w-full clay-inset px-4 py-3 bg-secondary font-body text-foreground text-sm outline-none focus:ring-2 focus:ring-accent" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="font-body text-sm font-medium text-foreground mb-1 block">Service Needed *</label>
                      <select required className="w-full clay-inset px-4 py-3 bg-secondary font-body text-foreground text-sm outline-none focus:ring-2 focus:ring-accent">
                        <option value="">Select a service</option>
                        <option>Full Detail</option>
                        <option>Interior & Exterior Detail</option>
                        <option>Ceramic Coating</option>
                        <option>Paint Correction</option>
                        <option>Waxing</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-body text-sm font-medium text-foreground mb-1 block">Message</label>
                      <textarea rows={4} className="w-full clay-inset px-4 py-3 bg-secondary font-body text-foreground text-sm outline-none focus:ring-2 focus:ring-accent resize-none" placeholder="Tell us about your vehicle and what you need..." />
                    </div>
                    <button type="submit" className="btn-accent w-full text-lg flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Info + Map */}
            <div className="space-y-6">
              <ScrollReveal delay={0.1}>
                <div className="clay-card p-8 space-y-6">
                  <h3 className="font-heading text-xl font-bold text-foreground">Get In Touch</h3>
                  <a href="tel:+18329843507" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-foreground group-hover:text-accent transition-colors">(832) 984-3507</div>
                      <div className="font-body text-xs text-muted-foreground">Click to call</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-foreground">info@hzdetails.com</div>
                      <div className="font-body text-xs text-muted-foreground">Email us anytime</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-foreground">Houston, TX</div>
                      <div className="font-body text-xs text-muted-foreground">Serving Greater Houston & surrounding areas</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="clay-card overflow-hidden">
                  <iframe
                    title="HZ Details Houston TX Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443088.06808834786!2d-95.68018650000001!3d29.8171079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
