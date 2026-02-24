import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop", caption: "Custom hardscape patio with stone installation", alt: "Hardscape patio design Houston TX" },
  { src: "https://images.unsplash.com/photo-1585320806997-c33953f03a98?w=600&h=400&fit=crop", caption: "Lush landscape design with native plants", alt: "Landscape design Houston" },
  { src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop", caption: "Professional irrigation system installation", alt: "Irrigation system Houston TX" },
  { src: "https://images.unsplash.com/photo-1597848212624-753a6d5f4e2c?w=600&h=400&fit=crop", caption: "Beautiful garden landscape transformation", alt: "Garden design Houston" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop", caption: "Outdoor living space with lighting design", alt: "Outdoor living space Houston" },
  { src: "https://images.unsplash.com/photo-1585320806997-c33953f03a98?w=600&h=400&fit=crop", caption: "Turf installation and landscape maintenance", alt: "Turf installation Houston TX" },
  { src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop", caption: "Drainage system installation", alt: "Drainage system Houston" },
  { src: "https://images.unsplash.com/photo-1597848212624-753a6d5f4e2c?w=600&h=400&fit=crop", caption: "Sprinkler system design and installation", alt: "Sprinkler system Houston TX" },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white section-padding">
        <div className="container-main">
          <ScrollReveal>
            <h1 className="font-heading text-4xl sm:text-5xl font-black mb-4">
              Our Landscape <span className="text-green-200">Projects</span>
            </h1>
            <p className="font-body text-green-100 text-lg max-w-2xl">
              Browse our portfolio of stunning landscape design and installation projects throughout Houston and surrounding areas.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <button
                  onClick={() => setLightbox(i)}
                  className="overflow-hidden group w-full text-left hover:translate-y-[-4px] transition-transform duration-300 rounded-lg shadow-lg"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <p className="font-body text-sm text-gray-600">{img.caption}</p>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-3xl w-full overflow-hidden rounded-lg shadow-2xl bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[lightbox].src}
                alt={galleryImages[lightbox].alt}
                className="w-full aspect-[16/10] object-cover"
              />
              <div className="p-4 flex items-center justify-between">
                <p className="font-body text-sm text-gray-600">{galleryImages[lightbox].caption}</p>
                <button onClick={() => setLightbox(null)} className="p-2 hover:text-green-600 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
