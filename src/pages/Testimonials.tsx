import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const reviews = [
  { name: "Sarah Johnson", rating: 5, text: "Greener Houston completely transformed our backyard. The attention to detail and quality of work is unmatched. Our outdoor space is now the envy of the neighborhood!", service: "Landscape Design" },
  { name: "Michael Chen", rating: 5, text: "The hardscape work is absolutely stunning. They understood our vision perfectly and delivered beyond our expectations. Professional and reliable.", service: "Hardscape Installation" },
  { name: "Jessica Martinez", rating: 5, text: "Best decision we made for our home. The irrigation system works perfectly and our lawn has never looked better. Worth every penny!", service: "Irrigation System" },
  { name: "David Rodriguez", rating: 5, text: "Professional team, competitive pricing, and excellent customer service. They handled everything from design to installation. Highly recommend!", service: "Landscape Install" },
  { name: "Emily Watson", rating: 5, text: "Our outdoor living space is now our favorite place to be. The team was punctual, clean, and incredibly skilled. Amazing results!", service: "Design & Install" },
  { name: "James Patterson", rating: 5, text: "The sprinkler system works like a dream. We've noticed a huge improvement in our lawn health. This is a company you can trust.", service: "Sprinkler Install" },
  { name: "Lisa Anderson", rating: 5, text: "From consultation to completion, the whole experience was seamless. They answered all our questions and delivered exactly what we wanted.", service: "Landscape Design" },
  { name: "Robert Taylor", rating: 5, text: "The quality of materials and craftsmanship is evident in every detail. Our patio looks like it belongs in a magazine. Fantastic work!", service: "Hardscape" },
  { name: "Amanda Brown", rating: 5, text: "Greener Houston brought our landscape vision to life. The team was professional, efficient, and left everything spotless. Highly satisfied!", service: "Full Landscape" },
  { name: "Christopher Lee", rating: 5, text: "The drainage system they installed solved all our water issues. Combined with the beautiful landscaping, our yard is now perfect!", service: "Irrigation & Drainage" },
  { name: "Karen White", rating: 5, text: "These guys are true professionals. They respected our property and delivered exceptional results. We couldn't be happier!", service: "Landscape Install" },
  { name: "Thomas Green", rating: 5, text: "Our backyard is now a beautiful outdoor oasis. The team's expertise and attention to detail made all the difference. Thank you!", service: "Design & Install" },
];

const Testimonials = () => (
  <>
    <section className="bg-gradient-to-r from-green-700 to-green-600 text-white section-padding">
      <div className="container-main">
        <ScrollReveal>
          <h1 className="font-heading text-4xl sm:text-5xl font-black mb-4">
            What Our <span className="text-green-200">Clients Say</span>
          </h1>
          <p className="font-body text-green-100 text-lg max-w-2xl">
            Hear from Houston homeowners who trust Greener Houston with their landscape dreams.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding bg-gray-50">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="bg-white p-6 h-full flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className={`w-4 h-4 ${s < r.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                  ))}
                </div>
                <p className="font-body text-gray-700 text-sm leading-relaxed flex-1 mb-4">"{r.text}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-heading font-bold text-gray-900 text-sm">{r.name}</span>
                  <span className="font-body text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full">{r.service}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-14">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Landscape?</h2>
            <Link to="/contact" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg inline-block transition-all duration-300">
              Schedule Your Consultation
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default Testimonials;
