import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white section-padding">
        <div className="container-main">
          <ScrollReveal>
            <h1 className="font-heading text-4xl sm:text-5xl font-black mb-4">
              Contact <span className="text-green-200">Greener Houston</span>
            </h1>
            <p className="font-body text-green-100 text-lg max-w-2xl">
              Get in touch with our landscape design team. Call us or fill out the form below to schedule a free consultation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Form */}
            <ScrollReveal>
              <div className="bg-white rounded-xl shadow-lg p-8">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-600 to-green-500 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
                    <p className="font-body text-gray-600">We'll get back to you shortly. You can also call us directly.</p>
                    <a href="tel:+18328017545" className="bg-green-600 text-white hover:bg-green-700 mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all">
                      <Phone className="w-4 h-4" /> (832) 801-7545
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">Free Consultation Request</h2>
                    <div>
                      <label className="font-body text-sm font-medium text-gray-900 mb-2 block">Name *</label>
                      <input required type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg font-body text-gray-900 text-sm outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="font-body text-sm font-medium text-gray-900 mb-2 block">Phone *</label>
                      <input required type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg font-body text-gray-900 text-sm outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="(832) 000-0000" />
                    </div>
                    <div>
                      <label className="font-body text-sm font-medium text-gray-900 mb-2 block">Email</label>
                      <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg font-body text-gray-900 text-sm outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="font-body text-sm font-medium text-gray-900 mb-2 block">Service Interested In *</label>
                      <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg font-body text-gray-900 text-sm outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent">
                        <option value="">Select a service</option>
                        <option>Landscape Design & Installation</option>
                        <option>Hardscape Installation</option>
                        <option>Irrigation & Drainage</option>
                        <option>Sprinkler Installation & Repair</option>
                        <option>Turf Installation</option>
                        <option>Maintenance</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-body text-sm font-medium text-gray-900 mb-2 block">Project Details</label>
                      <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg font-body text-gray-900 text-sm outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none" placeholder="Tell us about your project and vision..." />
                    </div>
                    <button type="submit" className="bg-green-600 hover:bg-green-700 text-white w-full py-3 rounded-lg font-heading font-semibold flex items-center justify-center gap-2 transition-all duration-300">
                      <Send className="w-5 h-5" /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Info + Map */}
            <div className="space-y-6">
              <ScrollReveal delay={0.1}>
                <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
                  <h3 className="font-heading text-xl font-bold text-gray-900">Get In Touch</h3>
                  <a href="tel:+18328017545" className="flex items-center gap-4 group hover:bg-green-50 p-4 rounded-lg transition-all">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-600 to-green-500 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-gray-900 group-hover:text-green-700 transition-colors">(832) 801-7545</div>
                      <div className="font-body text-xs text-gray-600">Click to call</div>
                    </div>
                  </a>
                  <a href="mailto:ray.greengrass@gmail.com" className="flex items-center gap-4 group hover:bg-green-50 p-4 rounded-lg transition-all">
                    <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-gray-900 group-hover:text-green-700 transition-colors">ray.greengrass@gmail.com</div>
                      <div className="font-body text-xs text-gray-600">Email us anytime</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 bg-green-50 p-4 rounded-lg">
                    <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-gray-900">1637 Oak Tree Dr</div>
                      <div className="font-body text-xs text-gray-600">Houston, TX 77080</div>
                      <div className="font-body text-xs text-gray-600">Serving Greater Houston & surrounding areas</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <iframe
                    title="Greener Houston Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.4766999999997!2d-95.5447!3d29.9537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c0a4b9c9c9c9%3A0x1234567890!2s1637%20Oak%20Tree%20Dr%2C%20Houston%2C%20TX%2077080!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={true}
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
