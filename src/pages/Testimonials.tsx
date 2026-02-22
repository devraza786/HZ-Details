import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const reviews = [
  { name: "Marcus J.", rating: 5, text: "HZ Details transformed my truck. Best detailing I've ever had in Houston. The ceramic coating still beads water months later!", service: "Ceramic Coating" },
  { name: "Sarah T.", rating: 5, text: "My car looked brand new after the full detail. They got stains out of my seats I thought were permanent. Highly recommend!", service: "Full Detail" },
  { name: "David L.", rating: 5, text: "Professional, thorough, and the results speak for themselves. My BMW has never looked this good. Worth every penny.", service: "Paint Correction" },
  { name: "Jennifer R.", rating: 5, text: "I've tried several detailers in Houston and HZ Details is by far the best. Attention to detail is unmatched.", service: "Interior & Exterior" },
  { name: "Carlos M.", rating: 5, text: "The paint correction on my black car was incredible. Every swirl mark is gone. It looks like a mirror now!", service: "Paint Correction" },
  { name: "Amanda K.", rating: 5, text: "Quick, affordable, and the wax job left my car gleaming. Great communication throughout the process.", service: "Waxing" },
  { name: "Robert H.", rating: 4, text: "Excellent work on my SUV. The interior smells amazing and every surface is spotless. Will definitely be back.", service: "Full Detail" },
  { name: "Lisa W.", rating: 5, text: "The ceramic coating was worth the investment. My car stays clean so much longer now. Perfect for Houston's weather!", service: "Ceramic Coating" },
  { name: "Michael P.", rating: 5, text: "HZ Details went above and beyond. They even detailed areas I didn't expect. True professionals in Houston.", service: "Full Detail" },
  { name: "Stephanie G.", rating: 5, text: "I was skeptical about paint correction but the results blew me away. My 10-year-old car looks new again!", service: "Paint Correction" },
  { name: "James B.", rating: 4, text: "Great service, fair pricing, and outstanding results. My go-to detailer in the Houston area now.", service: "Interior & Exterior" },
  { name: "Nicole F.", rating: 5, text: "From booking to pickup, the experience was seamless. My Lexus has never been cleaner. Five stars!", service: "Full Detail" },
];

const Testimonials = () => (
  <>
    <section className="gradient-navy text-primary-foreground section-padding">
      <div className="container-main">
        <ScrollReveal>
          <h1 className="font-heading text-4xl sm:text-5xl font-black mb-4">
            What Houston <span className="text-accent">Clients Say</span>
          </h1>
          <p className="font-body text-silver-light text-lg max-w-2xl">
            Don't just take our word for it — hear from Houston vehicle owners who trust HZ Details.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="clay-card p-6 h-full flex flex-col">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className={`w-4 h-4 ${s < r.rating ? "text-accent fill-accent" : "text-silver-light"}`} />
                  ))}
                </div>
                <p className="font-body text-muted-foreground text-sm leading-relaxed flex-1 mb-4">"{r.text}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-heading font-bold text-foreground text-sm">{r.name}</span>
                  <span className="font-body text-xs text-accent">{r.service}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-14">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Ready to Experience the Difference?</h2>
            <Link to="/contact" className="btn-accent text-lg">Book Your Detail Today</Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default Testimonials;
