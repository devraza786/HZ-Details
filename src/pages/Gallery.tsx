import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const galleryImages = [
  { caption: "Full exterior detail on a luxury sedan — Houston, TX", alt: "Full exterior auto detail Houston TX" },
  { caption: "Interior deep clean and conditioning — Greater Houston area", alt: "Interior car detailing Houston" },
  { caption: "Ceramic coating application with mirror finish — Houston", alt: "Ceramic coating Houston TX" },
  { caption: "Paint correction removing swirl marks — HZ Details Houston", alt: "Paint correction Houston" },
  { caption: "Premium wax application for deep gloss — Houston TX", alt: "Car waxing service Houston" },
  { caption: "Engine bay detailing — professional results in Houston", alt: "Engine detailing Houston TX" },
  { caption: "Before and after paint correction — Houston vehicle", alt: "Before after paint correction Houston" },
  { caption: "Leather conditioning and interior restoration — HZ Details", alt: "Leather conditioning auto detail Houston" },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section className="gradient-navy text-primary-foreground section-padding">
        <div className="container-main">
          <ScrollReveal>
            <h1 className="font-heading text-4xl sm:text-5xl font-black mb-4">
              Our Detailing Work in <span className="text-accent">Houston, TX</span>
            </h1>
            <p className="font-body text-silver-light text-lg max-w-2xl">
              Browse our portfolio of premium auto detailing results from Houston and surrounding areas.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <button
                  onClick={() => setLightbox(i)}
                  className="clay-card overflow-hidden group w-full text-left"
                >
                  <div className="aspect-[4/3] bg-secondary flex items-center justify-center text-muted-foreground font-body text-sm">
                    <span className="text-center px-4">Gallery Image {i + 1}</span>
                  </div>
                  <div className="p-4">
                    <p className="font-body text-xs text-muted-foreground">{img.caption}</p>
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
            className="fixed inset-0 z-[100] bg-foreground/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="clay-card max-w-3xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-[16/10] bg-secondary flex items-center justify-center text-muted-foreground font-body">
                Gallery Image {lightbox + 1}
              </div>
              <div className="p-4 flex items-center justify-between">
                <p className="font-body text-sm text-muted-foreground">{galleryImages[lightbox].caption}</p>
                <button onClick={() => setLightbox(null)} className="p-2 hover:text-accent transition-colors">
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
