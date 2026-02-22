import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Sparkles, Droplets, Car, Star, Phone, ArrowRight, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  { icon: Car, title: "Full Detail", desc: "Complete interior and exterior restoration for a showroom finish.", to: "/services/full-detail" },
  { icon: Sparkles, title: "Interior & Exterior", desc: "Thorough cleaning and conditioning inside and out.", to: "/services/interior-exterior" },
  { icon: Shield, title: "Ceramic Coating", desc: "Long-lasting protection with a brilliant hydrophobic finish.", to: "/services/ceramic-coating" },
  { icon: Droplets, title: "Paint Correction", desc: "Remove swirls, scratches, and oxidation for flawless paint.", to: "/services/paint-correction" },
  { icon: Star, title: "Waxing", desc: "Deep gloss and UV protection to keep your paint vibrant.", to: "/services/waxing" },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Premium auto detailing in Houston TX" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/70 to-transparent" />
        </div>
        <div className="relative z-10 container-main px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight mb-6">
              Professional Auto Detailing in{" "}
              <span className="text-accent">Houston, Texas</span>
            </h1>
            <p className="text-silver-light text-lg sm:text-xl font-body mb-8 leading-relaxed">
              HZ Details delivers premium car detailing, ceramic coating, and paint correction services across Houston and surrounding areas. Your vehicle deserves the best.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-accent text-lg flex items-center gap-2">
                Book Now <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:+18329843507" className="btn-primary text-lg flex items-center gap-2 border border-primary-foreground/20">
                <Phone className="w-5 h-5" /> (832) 984-3507
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services overview */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="font-heading text-3xl sm:text-4xl font-black text-foreground mb-4">
                Our <span className="text-gradient">Detailing Services</span>
              </h2>
              <p className="text-muted-foreground font-body max-w-2xl mx-auto">
                From full details to ceramic coatings, we provide Houston's finest auto care with meticulous attention to every surface.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.1}>
                <Link to={s.to} className="clay-card p-6 block group hover:translate-y-[-4px] transition-transform duration-300">
                  <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-4">
                    <s.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground font-body text-sm mb-3">{s.desc}</p>
                  <span className="text-accent font-heading font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section-padding gradient-navy text-primary-foreground">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="font-heading text-3xl sm:text-4xl font-black mb-4">
                Why Houston Trusts <span className="text-accent">HZ Details</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Premium Products", desc: "We use only top-tier professional-grade products for lasting results." },
              { title: "Houston Climate Experts", desc: "We understand how Texas heat, humidity, and UV rays affect your vehicle." },
              { title: "Attention to Detail", desc: "Every inch is meticulously cleaned, corrected, and protected." },
              { title: "Convenient Scheduling", desc: "Flexible appointments that fit your busy Houston lifestyle." },
              { title: "Satisfaction Guaranteed", desc: "We stand behind every detail with our quality guarantee." },
              { title: "Experienced Professionals", desc: "Years of experience detailing luxury and everyday vehicles." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="glass-panel rounded-2xl p-6">
                  <CheckCircle className="w-6 h-6 text-accent mb-3" />
                  <h3 className="font-heading text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-silver-light font-body text-sm">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SEO long-form content */}
      <section className="section-padding bg-background">
        <div className="container-main max-w-4xl">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-black text-foreground mb-8 text-center">
              Houston's Premier Auto Detailing Experience
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="clay-card p-8 md:p-12 font-body text-muted-foreground leading-relaxed space-y-6 text-sm md:text-base">
              <p>
                In the heart of Houston, Texas, HZ Details stands as the premier destination for professional auto detailing services. Our team of skilled detailers combines cutting-edge techniques with premium products to deliver results that exceed expectations. Whether you drive a luxury sedan, a rugged truck, or a family SUV, we treat every vehicle with the same meticulous care and attention to detail.
              </p>
              <h3 className="font-heading text-xl font-bold text-foreground">Protecting Your Vehicle in Houston's Harsh Climate</h3>
              <p>
                Houston's subtropical climate presents unique challenges for vehicle owners. The intense Texas sun delivers relentless UV radiation that fades paint, cracks dashboards, and deteriorates rubber seals. Combine that with high humidity, salt-laden Gulf air, and frequent rain, and your vehicle faces a constant assault on its exterior and interior surfaces. At HZ Details, we understand these challenges intimately. Our ceramic coating services provide a durable shield against UV damage, while our interior detailing treatments condition leather and protect plastics from heat-related cracking.
              </p>
              <h3 className="font-heading text-xl font-bold text-foreground">Comprehensive Detailing Services</h3>
              <p>
                Our full detail service is the most comprehensive offering in the Greater Houston area. We begin with a thorough exterior wash using the two-bucket method to prevent micro-scratches, followed by clay bar decontamination to remove embedded contaminants. Our paint correction process eliminates swirl marks, light scratches, and oxidation, restoring your paint to better-than-new condition. We finish with your choice of wax, sealant, or ceramic coating for long-lasting protection.
              </p>
              <p>
                Interior detailing is equally thorough. We vacuum every crevice, shampoo carpets and upholstery, condition leather surfaces, clean and protect all trim, and detail the engine bay upon request. The result is a vehicle that looks, smells, and feels brand new.
              </p>
              <h3 className="font-heading text-xl font-bold text-foreground">Ceramic Coating: The Ultimate Paint Protection</h3>
              <p>
                Ceramic coating has revolutionized vehicle protection, and HZ Details is at the forefront of this technology in Houston. Our professional-grade ceramic coatings create a permanent bond with your vehicle's paint, providing up to five years of protection against UV rays, chemical stains, bird droppings, tree sap, and minor scratches. The hydrophobic properties mean water beads and rolls off effortlessly, making maintenance washes quicker and easier. For Houston drivers dealing with everything from highway tar to parking lot tree sap, ceramic coating is an investment that pays for itself many times over.
              </p>
              <h3 className="font-heading text-xl font-bold text-foreground">Paint Correction: Restoring Your Vehicle's True Shine</h3>
              <p>
                Over time, your vehicle's paint accumulates imperfections — swirl marks from improper washing, light scratches from daily use, and oxidation from sun exposure. Our multi-stage paint correction process systematically removes these defects, revealing the deep, rich color hiding beneath. Using professional-grade compounds and polishers, we work through progressively finer abrasives to achieve a mirror-like finish. Many Houston clients are amazed to discover their vehicle's paint can look better than when they first bought it.
              </p>
              <h3 className="font-heading text-xl font-bold text-foreground">Serving Houston and Surrounding Communities</h3>
              <p>
                HZ Details proudly serves the entire Greater Houston metropolitan area. From the bustling Energy Corridor to the tree-lined streets of The Woodlands, from Sugar Land's master-planned communities to Pearland's growing neighborhoods, we bring premium detailing services to your doorstep. Our centrally located service area ensures that no matter where you are in the Houston region, exceptional auto care is just a phone call away. We serve Katy, Cypress, Spring, Humble, Pasadena, League City, and all surrounding communities.
              </p>
              <p>
                Ready to experience the HZ Details difference? Contact us today at <a href="tel:+18329843507" className="text-accent font-semibold hover:underline">(832) 984-3507</a> to schedule your appointment. Your vehicle deserves nothing less than the best auto detailing Houston has to offer.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-accent text-accent-foreground">
        <div className="container-main text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-black mb-4">
              Ready for a Showroom Shine?
            </h2>
            <p className="font-body text-lg mb-8 opacity-90 max-w-xl mx-auto">
              Book your professional detail today and experience the HZ Details difference. Houston's trusted choice for premium auto care.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary text-lg">
                Book Your Detail
              </Link>
              <a href="tel:+18329843507" className="clay-button bg-accent-foreground text-accent text-lg flex items-center gap-2">
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Index;
