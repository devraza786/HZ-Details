import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const reviews = [
  { name: "Marcus Johnson", rating: 5, text: "HZ Details completely transformed my car. The attention to detail is incredible and my paint now looks showroom-ready. Best investment for my vehicle!", service: "Full Detail" },
  { name: "David Chen", rating: 5, text: "The ceramic coating work is absolutely flawless. They understood exactly what I wanted and delivered beyond my expectations. Professional and trustworthy.", service: "Ceramic Coating" },
  { name: "Jennifer Martinez", rating: 5, text: "My car's interior has never looked better. The deep cleaning was thorough and they treated my vehicle with such care. Definitely worth every penny!", service: "Interior Detail" },
  { name: "Carlos Rodriguez", rating: 5, text: "Competitive pricing, exceptional quality, and amazing customer service. The team handled everything perfectly from start to finish. Highly recommend!", service: "Paint Correction" },
  { name: "Michelle Watson", rating: 5, text: "My vehicle looks brand new after HZ Details worked on it. The team was punctual, professional, and incredibly skilled. Outstanding results!", service: "Full Detail" },
  { name: "James Patterson", rating: 5, text: "The ceramic coating they applied is holding up perfectly. My car stays cleaner longer and looks incredible. This is a company you can trust.", service: "Ceramic Coating" },
  { name: "Lisa Anderson", rating: 5, text: "From booking to completion, the whole experience was seamless. They answered all my questions and delivered exactly what I expected. Very impressed!", service: "Waxing" },
  { name: "Robert Taylor", rating: 5, text: "The quality of work and attention to detail is evident everywhere. My car looks like it came straight from a magazine. Fantastic service!", service: "Exterior Protection" },
  { name: "Amanda Brown", rating: 5, text: "HZ Details brought my vehicle back to life. The team was professional, efficient, and left everything spotless. Highly satisfied!", service: "Full Detail" },
  { name: "Christopher Lee", rating: 5, text: "The paint correction service removed all those scratches and swirls. Combined with the protective coating, my car looks perfect now!", service: "Paint Correction" },
  { name: "Karen White", rating: 5, text: "These professionals really know their craft. They treated my car with respect and delivered exceptional results. Couldn't be happier!", service: "Interior Detail" },
  { name: "Thomas Green", rating: 5, text: "My car is now a beautiful showcase-ready ride. The team's expertise and attention to detail made all the difference. Thank you!", service: "Full Detail" },
];

const Testimonials = () => (
  <>
    <section className="bg-gradient-to-r from-green-700 to-green-600 text-white section-padding">
      <div className="container-main">
        <ScrollReveal>
          <h1 className="font-heading text-4xl sm:text-5xl font-black mb-4">
            What Our <span className="text-blue-200">Clients Say</span>
          </h1>
          <p className="font-body text-blue-100 text-lg max-w-2xl">
            Hear from satisfied customers who trust HZ Details with their vehicle's appearance and protection.
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
                  <span className="font-body text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{r.service}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-14">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">Ready to Detailing Your Vehicle?</h2>
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg inline-block transition-all duration-300">
              Book Your Detail Now
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default Testimonials;
