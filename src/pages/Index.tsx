import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Shield, Droplets, Zap, Phone, ArrowRight, MapPin, Mail, Star, CheckCircle } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

// Your uploaded car detailing images
const heroImages = [
  "https://cdn.builder.io/api/v1/image/assets%2F65f7149b6e744edf9d649d7a825379d9%2F10e1f2694abb4a0dabfb8812173d4084?format=webp&width=1200&height=600",
  "https://cdn.builder.io/api/v1/image/assets%2F65f7149b6e744edf9d649d7a825379d9%2F78c01117a0cb47bfa9b2be17b8b4c7b6?format=webp&width=1200&height=600",
  "https://cdn.builder.io/api/v1/image/assets%2F65f7149b6e744edf9d649d7a825379d9%2F553aae8d055e49fda00e26417bc3c33c?format=webp&width=1200&height=600",
  "https://cdn.builder.io/api/v1/image/assets%2F65f7149b6e744edf9d649d7a825379d9%2F4ef6a85c716d4b95a528a6b07b07f338?format=webp&width=1200&height=600",
  "https://cdn.builder.io/api/v1/image/assets%2F65f7149b6e744edf9d649d7a825379d9%2F0c39432d3fdd4664b2ad2263591c10ee?format=webp&width=1200&height=600",
  "https://cdn.builder.io/api/v1/image/assets%2F65f7149b6e744edf9d649d7a825379d9%2F5a65e7400dd74ff28e811257373cf4dc?format=webp&width=1200&height=600",
  "https://cdn.builder.io/api/v1/image/assets%2F65f7149b6e744edf9d649d7a825379d9%2F94c401dbe0e64481b1f94fdf7b936033?format=webp&width=1200&height=600",
  "https://cdn.builder.io/api/v1/image/assets%2F65f7149b6e744edf9d649d7a825379d9%2F9001257ce48a49dfbb62cd63749e2025?format=webp&width=1200&height=600",
];

// Carousel images for section 5
const carouselImages = heroImages;

// Showcase images
const showcaseImages = [
  "https://cdn.builder.io/api/v1/image/assets%2F65f7149b6e744edf9d649d7a825379d9%2F10e1f2694abb4a0dabfb8812173d4084?format=webp&width=600&height=400",
  "https://cdn.builder.io/api/v1/image/assets%2F65f7149b6e744edf9d649d7a825379d9%2F553aae8d055e49fda00e26417bc3c33c?format=webp&width=600&height=400",
  "https://cdn.builder.io/api/v1/image/assets%2F65f7149b6e744edf9d649d7a825379d9%2F78c01117a0cb47bfa9b2be17b8b4c7b6?format=webp&width=600&height=400",
  "https://cdn.builder.io/api/v1/image/assets%2F65f7149b6e744edf9d649d7a825379d9%2F4ef6a85c716d4b95a528a6b07b07f338?format=webp&width=600&height=400",
];

const services = [
  {
    icon: Sparkles,
    title: "Full Detail",
    desc: "Complete interior and exterior restoration for a showroom finish.",
  },
  {
    icon: Shield,
    title: "Ceramic Coating",
    desc: "Long-lasting protection with a brilliant hydrophobic finish.",
  },
  {
    icon: Droplets,
    title: "Paint Correction",
    desc: "Remove swirls, scratches, and oxidation for flawless paint.",
  },
  {
    icon: Zap,
    title: "Interior Deep Clean",
    desc: "Leather conditioning, carpet shampooing, and interior protection.",
  },
  {
    icon: Shield,
    title: "Exterior Protection",
    desc: "Waxing, sealants, and long-term paint protection systems.",
  },
];

const testimonials = [
  {
    name: "Marcus J.",
    text: "HZ Details transformed my truck. Best detailing I've ever had in Houston. The ceramic coating still beads water months later!",
    rating: 5,
    service: "Ceramic Coating",
  },
  {
    name: "Sarah T.",
    text: "My car looked brand new after the full detail. They got stains out of my seats I thought were permanent. Highly recommend!",
    rating: 5,
    service: "Full Detail",
  },
  {
    name: "David L.",
    text: "Professional, thorough, and the results speak for themselves. My BMW has never looked this good. Worth every penny.",
    rating: 5,
    service: "Paint Correction",
  },
  {
    name: "Jennifer R.",
    text: "I've tried several detailers in Houston and HZ Details is by far the best. Attention to detail is unmatched.",
    rating: 5,
    service: "Full Detail",
  },
  {
    name: "Carlos M.",
    text: "The paint correction on my black car was incredible. Every swirl mark is gone. It looks like a mirror now!",
    rating: 5,
    service: "Paint Correction",
  },
  {
    name: "Amanda K.",
    text: "Quick, affordable, and the wax job left my car gleaming. Great communication throughout the process.",
    rating: 5,
    service: "Waxing",
  },
];

const Index = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", vehicle: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-rotate hero carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Quote request submitted! We'll contact you soon.");
      setFormData({ name: "", email: "", phone: "", vehicle: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      {/* SECTION 1: HERO WITH CAROUSEL */}
      <section className="relative w-full h-[85vh] overflow-hidden">
        {/* Background image carousel */}
        <div className="absolute inset-0">
          {heroImages.map((img, idx) => (
            <motion.img
              key={idx}
              src={img}
              alt={`HZ Details - Premium Auto Detailing ${idx + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: idx === currentHeroIndex ? 1 : 0 }}
              transition={{ duration: 1 }}
            />
          ))}
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container-main px-4 max-w-4xl text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              key={currentHeroIndex}
            >
              <h2 className="text-sm md:text-base font-semibold text-blue-300 mb-4 uppercase tracking-widest">
                Professional Auto Detailing
              </h2>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4">
                Premium Auto Detailing in Houston
              </h1>
              <h3 className="text-2xl md:text-3xl font-light mb-6">
                Creating Showroom Finishes One Vehicle at a Time
              </h3>
              <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
                Masters of Car Care – Full Detailing, Ceramic Coating, Paint Correction & Protection Services in Houston. We bring your car's beauty back with precision, premium products, and personalized care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group text-lg">
                  Book Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a href="tel:+18329843507" className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/30 flex items-center justify-center gap-2 text-lg">
                  <Phone className="w-5 h-5" /> (832) 984-3507
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentHeroIndex(idx)}
              className={`h-2 transition-all duration-300 rounded-full ${
                idx === currentHeroIndex ? "bg-blue-500 w-8" : "bg-white/40 w-2"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* SECTION 2: MASTERS OF AUTO DETAILING INTRO */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container-main max-w-4xl px-4">
          <ScrollReveal>
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900">Masters of Auto Detailing</h2>
              <h3 className="text-xl md:text-2xl text-blue-600 font-semibold">Premier Auto Detailing & Protection Services</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                With over a decade of experience in professional auto detailing, HZ Details specializes in restoring and protecting your vehicle's beauty. From ceramic coatings that last years to paint correction that reveals your car's true shine, we handle every detail with precision and care. Our team understands Houston's demanding climate—intense UV rays, humidity, and environmental contaminants that attack your vehicle's finish. We use premium products and industry-leading techniques to deliver results that exceed expectations.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 3: LARGE IMAGE CAROUSEL */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container-main px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black text-center mb-14 text-gray-900">
              Our Latest Work
            </h2>
          </ScrollReveal>
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {carouselImages.map((img, idx) => (
                <CarouselItem key={idx} className="basis-full md:basis-1/2 lg:basis-1/3">
                  <ScrollReveal>
                    <div className="overflow-hidden rounded-xl shadow-lg h-72 md:h-80">
                      <img 
                        src={img} 
                        alt={`Detailing work ${idx + 1}`} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                  </ScrollReveal>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-16 bg-blue-600 text-white border-0 hover:bg-blue-700" />
            <CarouselNext className="hidden md:flex -right-16 bg-blue-600 text-white border-0 hover:bg-blue-700" />
          </Carousel>
        </div>
      </section>

      {/* SECTION 4: EXPERIENCE THE DIFFERENCE (3 COLUMNS) */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container-main px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black text-center mb-14 text-gray-900">
              Experience the Difference
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Products & Techniques",
                desc: "We use only professional-grade products and cutting-edge detailing techniques to achieve flawless results.",
              },
              {
                title: "Owner's Satisfaction Guarantee",
                desc: "We stand behind our work with a comprehensive satisfaction guarantee. Your car's beauty is our priority.",
              },
              {
                title: "Industry-Leading Tools & Experts",
                desc: "Our team uses the latest equipment and technology combined with years of expertise in Houston auto care.",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center p-10 rounded-xl bg-gradient-to-br from-blue-50 to-transparent border border-blue-200 hover:shadow-lg transition-shadow">
                  <CheckCircle className="w-14 h-14 text-blue-600 mx-auto mb-5" />
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR SERVICES (5 CARDS) */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container-main px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
                Our Services
              </h2>
              <p className="text-xl text-gray-600">Comprehensive auto detailing solutions for every need</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group text-center">
                  <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-600 transition-colors">
                    <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: BIG CTA SECTION WITH FORM */}
      <section className="py-20 md:py-24 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container-main max-w-3xl px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Are You Ready?
              </h2>
              <h3 className="text-2xl md:text-3xl font-light mb-6">
                Your Showroom Finish Starts Here
              </h3>
              <p className="text-lg text-blue-100">
                Have a question or need a quote? Complete the form below and we'll respond quickly with a personalized plan for your vehicle.
              </p>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal>
            <form onSubmit={handleFormSubmit} className="bg-white/10 backdrop-blur-md rounded-xl p-8 md:p-10 border border-white/20 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-lg"
                />
                <Input
                  type="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-lg"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="tel"
                  placeholder="Your Phone *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-lg"
                />
                <Input
                  placeholder="Vehicle Type/Make (e.g., Black Tesla Model 3)"
                  value={formData.vehicle}
                  onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-lg"
                />
              </div>
              <Textarea
                placeholder="Tell us about your detailing needs... *"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-lg min-h-32"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 rounded-lg transition-all duration-300 text-lg"
              >
                {isSubmitting ? "Sending..." : "Get Your Free Quote"}
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 7: SERVICE AREAS WITH MAP */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container-main px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black text-center mb-6 text-gray-900">
              Service Areas
            </h2>
            <p className="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
              We proudly serve Houston, TX and all surrounding areas including the Energy Corridor, The Woodlands, Sugar Land, Katy, Cypress, Spring, and beyond.
            </p>
          </ScrollReveal>
          <div className="rounded-xl overflow-hidden shadow-2xl h-96 md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443088.06808834786!2d-95.68018650000001!3d29.8171079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HZ Details Houston Service Area"
            />
          </div>
        </div>
      </section>

      {/* SECTION 8: TRANSFORM YOUR RIDE */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container-main px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black text-center mb-6 text-gray-900">
              Transform Your Ride
            </h2>
            <p className="text-center text-lg text-gray-700 mb-14 max-w-3xl mx-auto leading-relaxed">
              From dull and scratched paint to mirror-like perfection. Our ceramic coating and paint correction services reveal the true beauty hiding beneath your vehicle's surface. See the dramatic before-and-after transformations we've created for Houston drivers.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {showcaseImages.map((img, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="rounded-lg overflow-hidden shadow-lg h-64 md:h-72 group cursor-pointer">
                  <img
                    src={img}
                    alt={`Before and after detailing ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: TESTIMONIALS */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container-main px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
                See What Our Customers Are Saying
              </h2>
              <p className="text-lg text-gray-600">Trusted by hundreds of Houston vehicle owners</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.08}>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex gap-1 mb-4">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                  </div>
                  <p className="text-gray-800 mb-6 italic text-sm leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-gray-900">— {testimonial.name}</p>
                    <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{testimonial.service}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className="py-20 md:py-24 bg-gray-900 text-white">
        <div className="container-main text-center px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Let's Give Your Car the Treatment It Deserves
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Contact HZ Details today for a free consultation. Let's discuss your vehicle's needs and create a custom detailing plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+18329843507" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                <Phone className="w-5 h-5" /> (832) 984-3507
              </a>
              <a href="mailto:info@hzdetails.com" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                <Mail className="w-5 h-5" /> Email Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Index;
