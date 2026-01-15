import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Clock, BadgeDollarSign, Users } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Fast & Reliable",
    description: "Same-day response on urgent jobs. We value your time.",
  },
  {
    icon: Shield,
    title: "Guaranteed Workmanship",
    description: "Your satisfaction is our priority. Quality in every detail.",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable & Transparent",
    description: "No hidden costs or surprises. Know what you pay upfront.",
  },
  {
    icon: Users,
    title: "Local Experts",
    description: "Serving Chipata & Eastern Province with pride since 1979.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mt-3 mb-6">
            WE DON'T JUST BUILD —
            <br />
            <span className="text-gradient">WE DELIVER PEACE OF MIND</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Johvious Contraction & General Dealers is a trusted construction company
            based in Chipata, Eastern Province. We specialize in plumbing, electrical,
            ceiling board, tiling, and general contracting services.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/20"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-gradient-dark rounded-3xl p-8 md:p-12 text-center"
        >
          <p className="text-xl md:text-2xl text-primary-foreground/90 italic max-w-3xl mx-auto">
            "We don't just complete projects; we create solutions that last and improve lives.
            We treat every project like it's our own home — precision, care, and quality in every detail."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
