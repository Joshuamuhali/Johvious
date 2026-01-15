import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Heart, Users, Shield, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import constructionTeam from "@/assets/construction-team.jpg";
import plumbing2 from "@/assets/plumbing-2.jpeg";

const AboutPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-muted overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mt-3 mb-6">
              BUILDING TRUST,
              <br />
              <span className="text-gradient">ONE PROJECT AT A TIME</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Learn more about Johvious Contraction & General Dealers — your trusted partner
              in construction and general contracting in Chipata, Eastern Province.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-background" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <img
                  src={constructionTeam}
                  alt="Johvious Construction Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-primary rounded-2xl p-6 shadow-orange">
                <p className="text-primary-foreground font-display text-4xl">45+</p>
                <p className="text-primary-foreground/80 text-sm">Years of Experience</p>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-display text-foreground mt-3 mb-6">
                JOHVIOUS CONTRACTION & GENERAL DEALERS
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Johvious Contraction & General Dealers is a trusted and growing construction
                  and general contracting company based in Chipata, Eastern Province. We specialize
                  in a wide range of services, including plumbing, electrical wiring, ceiling board
                  installation, tile fitting, and other general contracting solutions.
                </p>
                <p>
                  Our team is committed to delivering high-quality workmanship, timely service,
                  and complete customer satisfaction. We believe that our work extends beyond just
                  completing projects—we aim to positively impact our community.
                </p>
                <p>
                  By providing reliable services and creating employment opportunities locally,
                  we contribute to the growth and development of Chipata and the wider Eastern Province.
                  Our commitment to continuous learning and adopting modern techniques ensures that
                  we stay ahead in the industry, delivering innovative and efficient solutions to our clients.
                </p>
              </div>
              <Button variant="hero" size="lg" className="mt-8" onClick={scrollToContact}>
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Purpose
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-foreground mt-3">
              MISSION & VISION
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-3xl p-8 md:p-10 border border-border hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display text-foreground mb-4">OUR MISSION</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide reliable, professional, and efficient construction and electrical
                services to businesses and households in Eastern Province, ensuring every project
                we handle meets the highest standards of quality and durability.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-3xl p-8 md:p-10 border border-border hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display text-foreground mb-4">OUR VISION</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted and respected construction and general contracting
                company in the region, recognized for our commitment to excellence, integrity,
                and innovation in every project we undertake.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              What Drives Us
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-foreground mt-3">
              OUR CORE VALUES
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Quality",
                description: "We never compromise on the quality of materials or workmanship.",
              },
              {
                icon: Heart,
                title: "Integrity",
                description: "Honest, transparent dealings with every client, every time.",
              },
              {
                icon: Users,
                title: "Community",
                description: "We invest in local talent and contribute to regional growth.",
              },
              {
                icon: TrendingUp,
                title: "Innovation",
                description: "Adopting modern techniques to deliver efficient solutions.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8"
              >
                <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display text-primary-foreground mb-6">
              READY TO BUILD WITH US?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              Whether it's a small repair or a major construction project, we're here to help.
              Get in touch today for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" onClick={scrollToContact}>
                Get Your Free Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="tel:+260978816346">
                  Call +260 978 816 346
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default AboutPage;
