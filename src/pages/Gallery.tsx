import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const galleryImages = [
  { 
    src: "https://cdn.builder.io/api/v1/image/assets%2F65f7149b6e744edf9d649d7a825379d9%2F10e1f2694abb4a0dabfb8812173d4084?format=webp&width=600&height=400", 
    caption: "Full exterior detail — professional hand polishing to a mirror finish", 
    alt: "Full exterior auto detail Houston TX" 
  },
  { 
    src: "https://cdn.builder.io/api/v1/image/assets%2F65f7149b6e744edf9d649d7a825379d9%2F78c01117a0cb47bfa9b2be17b8b4c7b6?format=webp&width=600&height=400", 
    caption: "Interior deep clean — pristine leather conditioning and detailing", 
    alt: "Interior car detailing Houston" 
  },
  { 
    src: "https://cdn.builder.io/api/v1/image/assets%2F65f7149b6e744edf9d649d7a825379d9%2F553aae8d055e49fda00e26417bc3c33c?format=webp&width=600&height=400", 
    caption: "Ceramic coating application — premium paint protection system", 
    alt: "Ceramic coating Houston TX" 
  },
  { 
    src: "https://cdn.builder.io/api/v1/image/assets%2F65f7149b6e744edf9d649d7a825379d9%2F4ef6a85c716d4b95a528a6b07b07f338?format=webp&width=600&height=400", 
    caption: "Paint correction — before & after swirl removal and restoration", 
    alt: "Paint correction Houston TX" 
  },
  { 
    src: "https://cdn.builder.io/api/v1/image/assets%2F65f7149b6e744edf9d649d7a825379d9%2F0c39432d3fdd4664b2ad2263591c10ee?format=webp&width=600&height=400", 
    caption: "Professional exterior wash — using premium products and safe techniques", 
    alt: "Car washing service Houston" 
  },
  { 
    src: "https://cdn.builder.io/api/v1/image/assets%2F65f7149b6e744edf9d649d7a825379d9%2F5a65e7400dd74ff28e811257373cf4dc?format=webp&width=600&height=400", 
    caption: "Engine bay detailing — professional cleaning and protection", 
    alt: "Engine detailing Houston TX" 
  },
  { 
    src: "https://cdn.builder.io/api/v1/image/assets%2F65f7149b6e744edf9d649d7a825379d9%2F94c401dbe0e64481b1f94fdf7b936033?format=webp&width=600&height=400", 
    caption: "Leather interior restoration — conditioning for like-new condition", 
    alt: "Leather conditioning auto detail Houston" 
  },
  { 
    src: "https://cdn.builder.io/api/v1/image/assets%2F65f7149b6e744edf9d649d7a825379d9%2F9001257ce48a49dfbb62cd63749e2025?format=webp&width=600&height=400", 
    caption: "Close-up detailing — attention to every surface and crevice", 
    alt: "Detail work Houston TX" 
  },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white section-padding">
        <div className="container-main">
          <ScrollReveal>
            <h1 className="font-heading text-4xl sm:text-5xl font-black mb-4">
              Our Detailing <span className="text-blue-300">Portfolio</span>
            </h1>
            <p className="font-body text-blue-100 text-lg max-w-2xl">
              Browse our portfolio of premium auto detailing results from Houston and surrounding areas. See the transformations we create.
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
                    <p className="font-body text-sm text-gray-700">{img.caption}</p>
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
                <p className="font-body text-sm text-gray-700">{galleryImages[lightbox].caption}</p>
                <button onClick={() => setLightbox(null)} className="p-2 hover:text-blue-600 transition-colors">
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
