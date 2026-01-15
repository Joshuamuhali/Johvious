import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Droplets, Zap, Grid3X3, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import plumbing1 from "@/assets/plumbing-1.jpeg";
import plumbing2 from "@/assets/plumbing-2.jpeg";
import ceiling1 from "@/assets/ceiling-board-1.jpeg";
import roofing1 from "@/assets/roofing-1.jpeg";

const services = [
  {
    id: 1,
    icon: Droplets,
    title: "Plumbing & Wiring",
    subtitle: "Fast, Reliable Services",
    description: "Leaks, faulty wiring, or installations? We handle it all — safely, efficiently, and on time. Every job comes with a quality guarantee.",
    image: plumbing2,
    features: ["24-48 hour completion", "Safety compliance", "Satisfaction guaranteed"],
  },
  {
    id: 2,
    icon: Grid3X3,
    title: "Ceiling Board Installation",
    subtitle: "Stylish & Durable",
    description: "Upgrade your space with precision ceiling board installation. Modern designs, flawless finishes, and long-lasting quality.",
    image: ceiling1,
    features: ["Modern designs", "Precise installation", "Durable materials"],
  },
  {
    id: 3,
    icon: Zap,
    title: "Tile Fitting",
    subtitle: "Perfect Tiles, Every Time",
    description: "From floors to walls, we ensure every tile fits perfectly. Durable materials and professional installation for a polished look.",
    image: plumbing1,
    features: ["Floor & wall tiles", "Kitchen & bathroom", "Professional finish"],
  },
  {
    id: 4,
    icon: Wrench,
    title: "General Contracting",
    subtitle: "Comprehensive Solutions",
    description: "No project is too big or small. Renovations, extensions, or full builds — we deliver quality, efficiency, and reliability every step of the way.",
    image: roofing1,
    features: ["Renovations", "Extensions", "Full builds"],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mt-3">
            EVERYTHING YOUR HOME NEEDS —
            <br />
            <span className="text-gradient">UNDER ONE ROOF</span>
          </h2>
        </motion.div>

        {/* Service Carousel */}
        <div className="relative">
          {/* Main Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <img
                src={services[currentIndex].image}
                alt={services[currentIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                    {(() => {
                      const IconComponent = services[currentIndex].icon;
                      return <IconComponent className="w-6 h-6 text-primary-foreground" />;
                    })()}
                  </div>
                  <div>
                    <p className="text-primary-foreground/80 text-sm">
                      {services[currentIndex].subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:pl-8">
              <h3 className="text-3xl md:text-4xl font-display text-foreground mb-4">
                {services[currentIndex].title}
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                {services[currentIndex].description}
              </p>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {services[currentIndex].features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-foreground font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="hero" size="lg" onClick={scrollToContact}>
                Get a Quote for This Service
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12">
            {/* Dots */}
            <div className="flex gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground hover:shadow-orange transition-shadow"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
