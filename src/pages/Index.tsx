import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Leaf, Hammer, Droplet, Sprout, Phone, ArrowRight, MapPin, Mail, Star, CheckCircle, MessageSquare } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

// Hero carousel images (Unsplash landscape photos)
const heroImages = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
  "https://images.unsplash.com/photo-1585320806997-c33953f03a98?w=1200&h=600&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
  "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop",
  "https://images.unsplash.com/photo-1597848212624-753a6d5f4e2c?w=1200&h=600&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
  "https://images.unsplash.com/photo-1585320806997-c33953f03a98?w=1200&h=600&fit=crop",
  "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop",
];

// Showcase images
const showcaseImages = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1585320806997-c33953f03a98?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
];

const services = [
  {
    icon: Leaf,
    title: "Landscape Install & Design",
    desc: "Complete landscape transformation with custom design and professional installation.",
  },
  {
    icon: Hammer,
    title: "Hardscape Installation",
    desc: "Stone patios, pathways, retaining walls, and outdoor structures built to last.",
  },
  {
    icon: Droplet,
    title: "Irrigation & Drainage",
    desc: "Smart irrigation systems and drainage solutions for a healthy, thriving landscape.",
  },
  {
    icon: Sprout,
    title: "Sprinkler Installation & Repair",
    desc: "Professional sprinkler systems designed for Houston's unique climate.",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "Greener Houston transformed our backyard into a beautiful oasis. Professional, reliable, and attention to detail is unmatched!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    text: "The hardscape work is absolutely stunning. They understood our vision perfectly and delivered beyond expectations.",
    rating: 5,
  },
  {
    name: "Jessica Martinez",
    text: "Best decision we made for our home. The irrigation system works perfectly, and our lawn has never looked better.",
    rating: 5,
  },
  {
    name: "David Rodriguez",
    text: "Professional team, competitive pricing, and excellent customer service. Highly recommend to anyone in Houston!",
    rating: 5,
  },
];

const Index = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-rotate hero carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you! We'll contact you soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      {/* Hero Section with Carousel */}
      <section className="relative w-full h-[85vh] overflow-hidden">
        {/* Background carousel */}
        <div className="absolute inset-0">
          {heroImages.map((img, idx) => (
            <motion.img
              key={idx}
              src={img}
              alt="Landscape design"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: idx === currentHeroIndex ? 1 : 0 }}
              transition={{ duration: 1 }}
            />
          ))}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container-main px-4 max-w-3xl text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm md:text-base font-semibold text-green-400 mb-4 uppercase tracking-widest">
                Premium Landscape Services
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
                Creating Outdoor Masterpieces
              </h1>
              <p className="text-lg md:text-2xl font-light mb-8 text-gray-100">
                Masters of Landscape Design and Installation in Houston
              </p>
              <p className="text-base md:text-lg mb-10 text-gray-200 max-w-2xl mx-auto leading-relaxed">
                Premier landscape design and installation services in Houston. We bring your outdoor dreams to life with quality, sustainability, and personalized service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group">
                  Book Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a href="tel:+18328017545" className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/30 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" /> (832) 801-7545
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
                idx === currentHeroIndex ? "bg-green-500 w-8" : "bg-white/40 w-2"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-main max-w-4xl">
          <ScrollReveal>
            <p className="text-center text-lg md:text-xl text-gray-700 leading-relaxed">
              With over a decade of experience in landscape design and installation, Greener Houston specializes in creating stunning outdoor spaces that reflect your style and enhance your property value. From lush gardens and beautiful hardscapes to advanced irrigation systems, we handle every aspect of your landscape with precision and care.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-main">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gray-900">
              Our Latest Projects
            </h2>
          </ScrollReveal>
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {heroImages.slice(0, 6).map((img, idx) => (
                <CarouselItem key={idx} className="basis-full md:basis-1/2 lg:basis-1/3">
                  <ScrollReveal>
                    <div className="overflow-hidden rounded-lg shadow-lg h-64 md:h-72">
                      <img src={img} alt={`Project ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                  </ScrollReveal>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-16 bg-green-600 text-white border-0 hover:bg-green-700" />
            <CarouselNext className="hidden md:flex -right-16 bg-green-600 text-white border-0 hover:bg-green-700" />
          </Carousel>
        </div>
      </section>

      {/* Experience the Difference Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-900">
                Experience the Difference
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "High Quality Experience & Design",
                desc: "Our award-winning designers create custom outdoor spaces that exceed expectations.",
              },
              {
                title: "Owner's Guarantee",
                desc: "We stand behind our work with a comprehensive guarantee on all installations.",
              },
              {
                title: "Industry-Leading Equipment",
                desc: "We use the latest technology and premium materials for lasting results.",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center p-8 rounded-xl bg-gradient-to-br from-green-50 to-transparent border border-green-200">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-900">
                Our Services
              </h2>
              <p className="text-lg text-gray-600">Comprehensive landscape solutions for every need</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                    <service.icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container-main max-w-3xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Are You Ready?
              </h2>
              <p className="text-lg text-green-50">
                Your dream escape starts here. Let's create something beautiful together.
              </p>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal>
            <form onSubmit={handleFormSubmit} className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-lg"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-lg"
                />
              </div>
              <Input
                type="tel"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full mb-4 bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-lg"
              />
              <Textarea
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full mb-6 bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-lg min-h-32"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-green-700 hover:bg-gray-100 font-bold py-3 rounded-lg transition-all duration-300"
              >
                {isSubmitting ? "Sending..." : "Get Your Free Consultation"}
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-main">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gray-900">
              Service Areas
            </h2>
          </ScrollReveal>
          <div className="rounded-xl overflow-hidden shadow-lg h-96 md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.4766999999997!2d-95.5447!3d29.9537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c0a4b9c9c9c9%3A0x1234567890!2s1637%20Oak%20Tree%20Dr%2C%20Houston%2C%20TX%2077080!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Greener Houston Location"
            />
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-main">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black text-center mb-6 text-gray-900">
              Transform Your Outdoor Spaces
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              From concept to completion, we handle every detail with precision and expertise. Our portfolio showcases the transformations we've created for satisfied clients throughout Houston.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {showcaseImages.map((img, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="rounded-lg overflow-hidden shadow-lg h-64 md:h-80 group cursor-pointer">
                  <img
                    src={img}
                    alt={`Landscape showcase ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-900">
                What Our Clients Say
              </h2>
              <p className="text-gray-600">Trusted by homeowners across Houston</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex gap-1 mb-4">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-bold text-gray-900">— {testimonial.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Footer */}
      <section className="py-16 md:py-20 bg-gray-900 text-white">
        <div className="container-main text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black mb-8">
              Ready to Transform Your Landscape?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact Greener Houston today for a free consultation. Let's discuss your landscaping dreams and create a plan that brings them to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+18328017545" className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" /> (832) 801-7545
              </a>
              <a href="mailto:ray.greengrass@gmail.com" className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
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
