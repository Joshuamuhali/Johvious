import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import plumbing1 from "@/assets/plumbing-1.jpeg";
import plumbing2 from "@/assets/plumbing-2.jpeg";
import ceiling1 from "@/assets/ceiling-board-1.jpeg";
import ceiling2 from "@/assets/ceiling-board-2.jpeg";
import roofing1 from "@/assets/roofing-1.jpeg";
import roofing2 from "@/assets/roofing-2.jpeg";

const portfolioImages = [
  { src: plumbing2, alt: "Modern bathroom plumbing installation in Chipata" },
  { src: ceiling1, alt: "Custom ceiling board design with LED lighting" },
  { src: roofing1, alt: "Roof truss construction in Eastern Province" },
  { src: plumbing1, alt: "Complete bathroom renovation with tile work" },
  { src: ceiling2, alt: "Modern recessed ceiling installation" },
  { src: roofing2, alt: "Steel roof frame construction" },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % portfolioImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + portfolioImages.length) % portfolioImages.length);
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-muted">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mt-3 mb-6">
            SEE OUR WORK —
            <br />
            <span className="text-gradient">REAL RESULTS FOR REAL CLIENTS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Check out some of our completed projects across Chipata and Eastern Province.
          </p>
        </motion.div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {/* Large Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="col-span-2 row-span-2 relative group cursor-pointer rounded-2xl overflow-hidden"
            onClick={() => openLightbox(0)}
          >
            <img
              src={portfolioImages[0].src}
              alt={portfolioImages[0].alt}
              className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-50 group-hover:scale-100">
                <span className="text-primary-foreground text-2xl">+</span>
              </div>
            </div>
          </motion.div>

          {/* Medium Images */}
          {portfolioImages.slice(1, 5).map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              className="relative group cursor-pointer rounded-2xl overflow-hidden"
              onClick={() => openLightbox(index + 1)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-50 group-hover:scale-100">
                  <span className="text-primary-foreground text-xl">+</span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Wide Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="col-span-2 relative group cursor-pointer rounded-2xl overflow-hidden"
            onClick={() => openLightbox(5)}
          >
            <img
              src={portfolioImages[5].src}
              alt={portfolioImages[5].alt}
              className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-50 group-hover:scale-100">
                <span className="text-primary-foreground text-2xl">+</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card/10 hover:bg-card/20 flex items-center justify-center text-primary-foreground transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation */}
          <button
            className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-card/10 hover:bg-card/20 flex items-center justify-center text-primary-foreground transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-card/10 hover:bg-card/20 flex items-center justify-center text-primary-foreground transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <motion.img
            key={selectedImage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            src={portfolioImages[selectedImage].src}
            alt={portfolioImages[selectedImage].alt}
            className="max-w-full max-h-[80vh] rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
};

export default Portfolio;
