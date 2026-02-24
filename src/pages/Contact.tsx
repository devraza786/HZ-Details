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
      <section className="bg-gradient-to-r from-blue-700 to-blue-600 text-white section-padding">
        <div className="container-main">
          <ScrollReveal>
            <h1 className="font-heading text-4xl sm:text-5xl font-black mb-4">
              Contact <span className="text-blue-200">HZ Details</span>
            </h1>
            <p className="font-body text-blue-100 text-lg max-w-2xl">
              Get in touch with our auto detailing team. Call us or fill out the form below to schedule your vehicle detail service.
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
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
                    <p className="font-body text-gray-600">We'll get back to you shortly. You can also call us directly.</p>
                    <a href="tel:+18329843507" className="bg-blue-600 text-white hover:bg-blue-700 mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all">
                      <Phone className="w-4 h-4" /> (832) 984-3507
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">Book Your Detail Service</h2>
                    <div>
                      <label className="font-body text-sm font-medium text-gray-900 mb-2 block">Name *</label>
                      <input required type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg font-body text-gray-900 text-sm outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="font-body text-sm font-medium text-gray-900 mb-2 block">Phone *</label>
                      <input required type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg font-body text-gray-900 text-sm outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="(832) 000-0000" />
                    </div>
                    <div>
                      <label className="font-body text-sm font-medium text-gray-900 mb-2 block">Email</label>
                      <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg font-body text-gray-900 text-sm outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="font-body text-sm font-medium text-gray-900 mb-2 block">Service Interested In *</label>
                      <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg font-body text-gray-900 text-sm outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                        <option value="">Select a service</option>
                        <option>Full Detail Package</option>
                        <option>Ceramic Coating</option>
                        <option>Paint Correction</option>
                        <option>Interior Deep Clean</option>
                        <option>Exterior Protection</option>
                        <option>Waxing & Polishing</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-body text-sm font-medium text-gray-900 mb-2 block">Vehicle & Details</label>
                      <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg font-body text-gray-900 text-sm outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none" placeholder="Tell us about your vehicle and what you'd like detailed..." />
                    </div>
                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded-lg font-heading font-semibold flex items-center justify-center gap-2 transition-all duration-300">
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
                  <a href="tel:+18329843507" className="flex items-center gap-4 group hover:bg-blue-50 p-4 rounded-lg transition-all">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-gray-900 group-hover:text-blue-700 transition-colors">(832) 984-3507</div>
                      <div className="font-body text-xs text-gray-600">Click to call</div>
                    </div>
                  </a>
                  <a href="mailto:info@hzdetails.com" className="flex items-center gap-4 group hover:bg-blue-50 p-4 rounded-lg transition-all">
                    <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-gray-900 group-hover:text-blue-700 transition-colors">info@hzdetails.com</div>
                      <div className="font-body text-xs text-gray-600">Email us anytime</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-lg">
                    <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-gray-900">Houston, TX</div>
                      <div className="font-body text-xs text-gray-600">Multiple Service Locations</div>
                      <div className="font-body text-xs text-gray-600">Serving Greater Houston & surrounding areas</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <iframe
                    title="HZ Details Houston Service Area"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.476699999998!2d-95.4471!3d29.8581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b9b3b8b8b8b9%3A0x1234567890!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1234567890"
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
