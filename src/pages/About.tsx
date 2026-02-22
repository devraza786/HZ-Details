import { Link } from "react-router-dom";
import { Shield, Award, Users, Clock, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const About = () => (
  <>
    {/* Hero */}
    <section className="gradient-navy text-primary-foreground section-padding">
      <div className="container-main">
        <ScrollReveal>
          <h1 className="font-heading text-4xl sm:text-5xl font-black mb-6">
            About <span className="text-accent">HZ Details</span>
          </h1>
          <p className="font-body text-silver-light text-lg max-w-2xl leading-relaxed">
            Houston's trusted auto detailing professionals. We combine passion, expertise, and premium products to deliver results that exceed expectations.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal>
            <div className="clay-card p-8 space-y-4 font-body text-muted-foreground leading-relaxed">
              <h2 className="font-heading text-2xl font-bold text-foreground">Our Story</h2>
              <p>
                HZ Details was founded with a simple mission: to provide Houston vehicle owners with detailing services that rival the best in the nation. Based in Houston, Texas, we've built our reputation on meticulous craftsmanship, honest pricing, and genuine care for every vehicle that enters our care.
              </p>
              <p>
                From daily drivers to exotic supercars, we treat every vehicle with the same level of dedication. Our team stays current with the latest detailing technologies, products, and techniques to ensure your car receives the absolute best treatment available in the Greater Houston area.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, label: "Quality Guarantee", val: "100%" },
                { icon: Award, label: "Years Experience", val: "5+" },
                { icon: Users, label: "Happy Clients", val: "500+" },
                { icon: Clock, label: "Vehicles Detailed", val: "2,000+" },
              ].map((s) => (
                <div key={s.label} className="clay-card p-6 text-center">
                  <s.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="font-heading text-2xl font-black text-foreground">{s.val}</div>
                  <div className="font-body text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="text-center">
            <Link to="/contact" className="btn-accent text-lg inline-flex items-center gap-2">
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default About;
