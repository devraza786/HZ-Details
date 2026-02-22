import { Link, useParams } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle, ArrowLeft } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

interface ServiceData {
  title: string;
  metaTitle: string;
  metaDesc: string;
  heroDesc: string;
  sections: { heading: string; content: string }[];
  benefits: string[];
  idealFor: string[];
  relatedServices: { title: string; to: string }[];
}

const servicesData: Record<string, ServiceData> = {
  "full-detail": {
    title: "Full Detail",
    metaTitle: "Full Car Detail Houston TX | HZ Details",
    metaDesc: "Professional full car detail in Houston, TX. Complete interior & exterior restoration with premium products. Book your full detail today!",
    heroDesc: "Our most comprehensive detailing package — a complete transformation for your vehicle's interior and exterior.",
    sections: [
      { heading: "What Is a Full Detail?", content: "A full detail is the most thorough car care service available. At HZ Details in Houston, TX, our full detail service encompasses every aspect of your vehicle — from the engine bay to the trunk, from the paint to the upholstery. We use professional-grade products and proven techniques to restore your vehicle to showroom condition. This service is ideal for Houston drivers who want the ultimate clean and protection for their vehicle." },
      { heading: "Our Full Detail Process", content: "We start with a thorough exterior wash using the safe two-bucket method, followed by iron decontamination and clay bar treatment to remove embedded contaminants from your paint. Next, we perform a one-step polish to enhance gloss and remove light imperfections. The exterior is sealed with a premium sealant or wax for lasting protection. Inside, every surface is meticulously cleaned: seats are shampooed or conditioned (depending on material), carpets are extracted, all plastics and trim are cleaned and dressed, and glass is polished to crystal clarity." },
      { heading: "Why Houston Vehicles Need Full Details", content: "Houston's subtropical climate is particularly harsh on vehicles. The intense UV radiation fades paint and damages interior surfaces. High humidity promotes mold and mildew growth in upholstery. Road grime, industrial fallout, and tree sap are constant threats. A professional full detail from HZ Details addresses all of these issues, removing contaminants and applying protective treatments that shield your vehicle from Houston's environmental challenges. We recommend a full detail every 3-4 months for optimal protection." },
      { heading: "Premium Products & Equipment", content: "We invest in the best tools and products in the industry. Our detailing arsenal includes pH-neutral shampoos, ceramic-infused sealants, professional-grade extractors, and dual-action polishers. Every product is selected for its effectiveness and safety on your vehicle's surfaces. We never cut corners — because your vehicle deserves the best auto detailing Houston has to offer." },
    ],
    benefits: ["Complete interior and exterior restoration", "Paint decontamination and enhancement", "Leather conditioning and protection", "Engine bay cleaning", "Long-lasting sealant application", "Odor elimination"],
    idealFor: ["Vehicles that haven't been detailed in 6+ months", "Pre-sale preparation", "New vehicle protection", "Special occasions", "Houston daily drivers needing comprehensive care"],
    relatedServices: [
      { title: "Interior & Exterior Detail", to: "/services/interior-exterior" },
      { title: "Ceramic Coating", to: "/services/ceramic-coating" },
      { title: "Paint Correction", to: "/services/paint-correction" },
    ],
  },
  "interior-exterior": {
    title: "Interior & Exterior Detail",
    metaTitle: "Interior & Exterior Car Detail Houston | HZ Details",
    metaDesc: "Expert interior and exterior car detailing in Houston, TX. Deep clean every surface of your vehicle. Schedule your detail now!",
    heroDesc: "Comprehensive cleaning and conditioning for every surface of your vehicle — inside and out.",
    sections: [
      { heading: "Complete Interior & Exterior Care", content: "Our Interior & Exterior Detail service provides thorough cleaning and conditioning of your entire vehicle. This service is perfect for Houston drivers who want a deep clean without the full paint correction process. We focus on removing dirt, grime, and contaminants while conditioning and protecting every surface." },
      { heading: "Interior Detailing Process", content: "The interior receives meticulous attention. We vacuum all surfaces including hard-to-reach crevices, shampoo cloth seats and carpets using hot water extraction, condition leather surfaces with premium leather care products, clean and dress all plastic and vinyl trim, polish interior glass, and sanitize high-touch surfaces. Houston's heat makes interior care especially important — cracked dashboards and faded seats are common results of neglecting interior maintenance." },
      { heading: "Exterior Detailing Process", content: "The exterior process begins with a pre-rinse and foam bath to safely loosen dirt. We hand-wash every panel using the two-bucket method, clean wheel wells and tires, dress tires with UV-protective dressing, clean exterior glass and mirrors, and apply a spray sealant for protection. Door jambs, gas cap areas, and emblems all receive attention. Houston's frequent rain and road spray make regular exterior maintenance essential." },
      { heading: "Maintaining Your Detail", content: "To maximize the longevity of your detail in Houston's climate, we recommend regular maintenance washes every two weeks and a full interior/exterior detail every 2-3 months. Parking in shade when possible and using a windshield sun shade can significantly extend the life of your interior detail." },
    ],
    benefits: ["Deep interior vacuum and shampoo", "Leather conditioning", "Exterior hand wash and dry", "Tire and wheel cleaning", "Interior sanitization", "Spray sealant protection"],
    idealFor: ["Regular maintenance detailing", "Vehicles used daily in Houston traffic", "Family vehicles", "Before road trips", "Seasonal refresh"],
    relatedServices: [
      { title: "Full Detail", to: "/services/full-detail" },
      { title: "Waxing", to: "/services/waxing" },
      { title: "Ceramic Coating", to: "/services/ceramic-coating" },
    ],
  },
  "ceramic-coating": {
    title: "Ceramic Coating",
    metaTitle: "Ceramic Coating Houston TX | Professional Application | HZ Details",
    metaDesc: "Professional ceramic coating in Houston, TX. Long-lasting paint protection against UV, chemicals & scratches. Get your ceramic coating quote today!",
    heroDesc: "The ultimate paint protection — professional ceramic coating that shields your vehicle for years.",
    sections: [
      { heading: "What Is Ceramic Coating?", content: "Ceramic coating is a liquid polymer applied to your vehicle's exterior that chemically bonds with the factory paint, creating a permanent or semi-permanent layer of protection. Unlike traditional wax that sits on top of the paint and wears off quickly, ceramic coating becomes part of the paint surface. At HZ Details in Houston, TX, we apply professional-grade ceramic coatings that provide superior protection against Houston's harsh environmental conditions." },
      { heading: "The Ceramic Coating Process", content: "Proper ceramic coating application is a multi-step process that requires professional skill and a controlled environment. First, we thoroughly wash and decontaminate the paint using clay bar treatment and iron removers. Next, we perform paint correction to remove any existing swirls, scratches, or defects — ceramic coating locks in whatever condition the paint is in, so perfection before application is critical. Finally, the coating is carefully applied panel by panel, leveled, and allowed to cure. The entire process typically takes 1-2 days depending on vehicle size and condition." },
      { heading: "Benefits for Houston Drivers", content: "Houston's climate makes ceramic coating especially valuable. The intense UV radiation that fades paint? Ceramic coating provides a UV-resistant barrier. The Gulf Coast humidity and salt air that promotes corrosion? Ceramic coating creates a chemical-resistant shield. Tree sap from Houston's abundant live oaks? It wipes right off a ceramic-coated surface. Bird droppings that etch unprotected paint within hours in the Texas heat? They can't penetrate the coating. Plus, the hydrophobic properties mean water beads and sheets off, making maintenance washes faster and easier." },
      { heading: "Ceramic Coating Longevity", content: "Our professional ceramic coatings last 2-5 years depending on the product selected, environmental exposure, and maintenance. We offer multiple tiers of ceramic coating to fit different budgets and protection needs. Each coating comes with maintenance instructions and recommended care products to maximize its lifespan. Annual inspections are recommended to ensure the coating maintains its protective properties." },
    ],
    benefits: ["2-5 years of paint protection", "UV and chemical resistance", "Hydrophobic water-beading effect", "Easier maintenance washing", "Enhanced gloss and depth", "Protection from bird droppings and tree sap"],
    idealFor: ["New vehicle owners wanting long-term protection", "Luxury and exotic vehicles", "Daily drivers in Houston's harsh climate", "Vehicles parked outdoors", "Anyone wanting to reduce maintenance effort"],
    relatedServices: [
      { title: "Paint Correction", to: "/services/paint-correction" },
      { title: "Full Detail", to: "/services/full-detail" },
      { title: "Waxing", to: "/services/waxing" },
    ],
  },
  "paint-correction": {
    title: "Paint Correction",
    metaTitle: "Paint Correction Houston TX | Swirl & Scratch Removal | HZ Details",
    metaDesc: "Professional paint correction in Houston, TX. Remove swirl marks, scratches & oxidation. Restore your paint to perfection. Book today!",
    heroDesc: "Restore your vehicle's paint to better-than-new condition with professional multi-stage paint correction.",
    sections: [
      { heading: "What Is Paint Correction?", content: "Paint correction is the process of permanently removing imperfections from your vehicle's clear coat through machine polishing. Unlike products that fill or mask scratches, paint correction actually levels the clear coat to eliminate defects. At HZ Details in Houston, we use professional-grade compounds, polishes, and dual-action polishers to achieve flawless results on every vehicle." },
      { heading: "Types of Paint Defects We Remove", content: "Swirl marks are the most common paint defect — those circular micro-scratches visible in direct sunlight, typically caused by improper washing techniques. We also address buffer trails from poor previous detailing, water spot etching from Houston's hard water, light scratches from daily use, oxidation from prolonged UV exposure, and haze from environmental contamination. Our multi-stage correction process systematically addresses each type of defect." },
      { heading: "Our Paint Correction Process", content: "We offer one-stage, two-stage, and three-stage paint correction depending on the severity of defects. A one-stage correction handles light swirls and minor imperfections, removing roughly 60-70% of defects. Two-stage correction addresses moderate defects with a cutting stage followed by a refining stage, achieving 80-90% correction. Three-stage correction is our most aggressive treatment for severely damaged or neglected paint, achieving 95%+ correction. Before starting, we measure paint thickness with a digital gauge to ensure safe correction without risking clear coat failure." },
      { heading: "Protecting Your Corrected Paint", content: "After investing in paint correction, protecting the results is essential. We strongly recommend following paint correction with either a ceramic coating or premium sealant. In Houston's climate, unprotected corrected paint will begin accumulating new defects within weeks of regular driving. A ceramic coating locks in the perfection for years, while a sealant provides several months of protection. We'll help you choose the right protection level for your needs and budget." },
    ],
    benefits: ["Permanent swirl mark removal", "Scratch and oxidation elimination", "Restored paint depth and clarity", "Mirror-like finish", "Paint thickness measurement for safety", "Professional-grade compounds"],
    idealFor: ["Vehicles with visible swirl marks", "Cars with oxidized or dull paint", "Pre-ceramic coating preparation", "Used vehicle restoration", "Show car preparation"],
    relatedServices: [
      { title: "Ceramic Coating", to: "/services/ceramic-coating" },
      { title: "Full Detail", to: "/services/full-detail" },
      { title: "Waxing", to: "/services/waxing" },
    ],
  },
  waxing: {
    title: "Waxing",
    metaTitle: "Car Waxing Houston TX | Professional Wax Services | HZ Details",
    metaDesc: "Professional car waxing services in Houston, TX. Deep gloss and UV protection for your vehicle's paint. Schedule your waxing appointment today!",
    heroDesc: "Premium wax application for deep gloss, UV protection, and a brilliant shine that turns heads.",
    sections: [
      { heading: "Professional Waxing Services", content: "Waxing remains one of the most effective and affordable ways to protect and enhance your vehicle's paint. At HZ Details in Houston, TX, we apply premium carnauba and synthetic waxes that provide a deep, warm glow while shielding your paint from Houston's environmental hazards. Our waxing service includes a thorough wash and paint preparation to ensure the wax bonds properly for maximum protection and longevity." },
      { heading: "Types of Wax We Offer", content: "We offer several wax options to suit different needs and budgets. Premium carnauba wax provides the deepest, warmest glow — preferred by show car enthusiasts and luxury vehicle owners. Synthetic sealants offer longer protection (3-6 months vs 4-8 weeks for carnauba) with excellent water beading. Spray wax is a quick maintenance option applied after regular washes to extend protection between full wax applications. We'll recommend the best option based on your vehicle, usage patterns, and Houston's climate conditions." },
      { heading: "Why Waxing Matters in Houston", content: "Houston's combination of intense UV radiation, high humidity, acid rain, and industrial fallout creates a hostile environment for automotive paint. Regular waxing provides a sacrificial barrier between these elements and your clear coat. The UV inhibitors in quality waxes prevent fading and oxidation, while the hydrophobic surface reduces water spotting from Houston's frequent rainstorms. For vehicles not ready for ceramic coating, regular waxing every 4-8 weeks is the best defense against Houston's elements." },
      { heading: "Waxing vs. Ceramic Coating", content: "Many Houston clients ask about the difference between waxing and ceramic coating. Wax is more affordable upfront and provides a warm, natural glow that many enthusiasts prefer. However, it requires more frequent reapplication. Ceramic coating costs more initially but lasts years instead of weeks. For clients who enjoy regular maintenance and the ritual of waxing, traditional wax is perfect. For those wanting maximum protection with minimal maintenance, we recommend our ceramic coating service." },
    ],
    benefits: ["Deep gloss and warm shine", "UV protection against Houston sun", "Hydrophobic water repellency", "Protection from environmental contaminants", "Affordable paint protection", "Multiple wax type options"],
    idealFor: ["Regular paint maintenance", "Budget-conscious vehicle protection", "Show car preparation", "Vehicles in Houston's sunny climate", "Enthusiasts who enjoy a warm, natural glow"],
    relatedServices: [
      { title: "Full Detail", to: "/services/full-detail" },
      { title: "Paint Correction", to: "/services/paint-correction" },
      { title: "Ceramic Coating", to: "/services/ceramic-coating" },
    ],
  },
};

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = servicesData[slug || ""];

  if (!data) {
    return (
      <section className="section-padding bg-background text-center">
        <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Service Not Found</h1>
        <Link to="/services" className="btn-accent">View All Services</Link>
      </section>
    );
  }

  return (
    <>
      <section className="gradient-navy text-primary-foreground section-padding">
        <div className="container-main">
          <ScrollReveal>
            <Link to="/services" className="inline-flex items-center gap-1 text-silver-light font-body text-sm mb-4 hover:text-accent transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Services
            </Link>
            <h1 className="font-heading text-4xl sm:text-5xl font-black mb-4">
              {data.title} in <span className="text-accent">Houston, TX</span>
            </h1>
            <p className="font-body text-silver-light text-lg max-w-2xl leading-relaxed">{data.heroDesc}</p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/contact" className="btn-accent flex items-center gap-2">
                Book This Service <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:+18329843507" className="btn-primary flex items-center gap-2 border border-primary-foreground/20">
                <Phone className="w-5 h-5" /> (832) 984-3507
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-main max-w-4xl">
          {data.sections.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="mb-10">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">{s.heading}</h2>
                <p className="font-body text-muted-foreground leading-relaxed">{s.content}</p>
              </div>
            </ScrollReveal>
          ))}

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <ScrollReveal>
              <div className="clay-card p-6">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">Benefits</h3>
                <ul className="space-y-2">
                  {data.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="clay-card p-6">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">Ideal For</h3>
                <ul className="space-y-2">
                  {data.idealFor.map((item) => (
                    <li key={item} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-blue-accent mt-0.5 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="clay-card p-6">
              <h3 className="font-heading text-lg font-bold text-foreground mb-4">Related Services</h3>
              <div className="flex flex-wrap gap-3">
                {data.relatedServices.map((rs) => (
                  <Link key={rs.to} to={rs.to} className="btn-primary text-sm">
                    {rs.title}
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-accent text-accent-foreground">
        <div className="container-main text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-black mb-4">Ready to Book Your {data.title}?</h2>
            <p className="font-body text-lg mb-8 opacity-90">Contact HZ Details today for premium {data.title.toLowerCase()} services in Houston, TX.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary text-lg">Book Now</Link>
              <a href="tel:+18329843507" className="clay-button bg-accent-foreground text-accent text-lg flex items-center gap-2">
                <Phone className="w-5 h-5" /> Call (832) 984-3507
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default ServicePage;
