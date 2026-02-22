import { Link } from "react-router-dom";
import { Car, Sparkles, Shield, Droplets, Star, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const servicesList = [
  { icon: Car, title: "Full Detail", desc: "Complete interior and exterior restoration — the ultimate car care package for Houston vehicles.", to: "/services/full-detail", price: "Starting at $250" },
  { icon: Sparkles, title: "Interior & Exterior Detail", desc: "Thorough cleaning and conditioning of every surface, inside and out.", to: "/services/interior-exterior", price: "Starting at $180" },
  { icon: Shield, title: "Ceramic Coating", desc: "Professional-grade ceramic coating for years of paint protection against Houston's harsh climate.", to: "/services/ceramic-coating", price: "Starting at $500" },
  { icon: Droplets, title: "Paint Correction", desc: "Multi-stage correction to eliminate swirl marks, scratches, and oxidation.", to: "/services/paint-correction", price: "Starting at $350" },
  { icon: Star, title: "Waxing", desc: "Premium wax application for deep gloss and UV protection.", to: "/services/waxing", price: "Starting at $100" },
];

const Services = () => (
  <>
    <section className="gradient-navy text-primary-foreground section-padding">
      <div className="container-main">
        <ScrollReveal>
          <h1 className="font-heading text-4xl sm:text-5xl font-black mb-6">
            Auto Detailing <span className="text-accent">Services</span>
          </h1>
          <p className="font-body text-silver-light text-lg max-w-2xl leading-relaxed">
            Premium auto detailing services in Houston, TX. Every service is tailored to protect and enhance your vehicle.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="grid gap-6">
          {servicesList.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.08}>
              <Link to={s.to} className="clay-card p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 group hover:translate-y-[-2px] transition-transform duration-300">
                <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center shrink-0">
                  <s.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <h2 className="font-heading text-xl font-bold text-foreground mb-1">{s.title}</h2>
                  <p className="text-muted-foreground font-body text-sm">{s.desc}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-heading font-bold text-accent">{s.price}</span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Services;
