import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const message = `Hello Johvious Construction!%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AService: ${formData.service}%0A%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/260978816346?text=${message}`, "_blank");
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-dark text-primary-foreground">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mt-3 mb-6">
              READY TO START
              <br />
              <span className="text-gradient">YOUR PROJECT?</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10 max-w-md">
              Call, WhatsApp, or fill out the form to get your free quote today.
              Let us show you why we're Chipata's most trusted construction team.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <motion.a
                href="tel:+260978816346"
                className="flex items-center gap-4 group"
                whileHover={{ x: 10 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-primary-foreground/60 text-sm">Call us anytime</p>
                  <p className="text-xl font-semibold">+260 978 816 346</p>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/260978816346"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                whileHover={{ x: 10 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-[#25D366]/20 flex items-center justify-center group-hover:bg-[#25D366]/30 transition-colors">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <p className="text-primary-foreground/60 text-sm">WhatsApp us</p>
                  <p className="text-xl font-semibold">Chat on WhatsApp</p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-primary-foreground/60 text-sm">Find us at</p>
                  <p className="text-xl font-semibold">Chipata, Eastern Province</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card/10 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-primary-foreground/10"
          >
            <h3 className="text-2xl font-display mb-6">GET YOUR FREE QUOTE</h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold mb-2">Opening WhatsApp...</h4>
                <p className="text-primary-foreground/60">
                  Complete your message in the WhatsApp app.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-primary-foreground/80">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-primary-foreground/80">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary transition-colors"
                    placeholder="+260 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-primary-foreground/80">
                    Service Needed
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="" className="text-foreground">Select a service</option>
                    <option value="Plumbing & Wiring" className="text-foreground">Plumbing & Wiring</option>
                    <option value="Ceiling Board Installation" className="text-foreground">Ceiling Board Installation</option>
                    <option value="Tile Fitting" className="text-foreground">Tile Fitting</option>
                    <option value="General Contracting" className="text-foreground">General Contracting</option>
                    <option value="Roofing" className="text-foreground">Roofing</option>
                    <option value="Other" className="text-foreground">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-primary-foreground/80">
                    Project Details
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button type="submit" variant="hero" size="xl" className="w-full">
                  <Send className="w-5 h-5" />
                  Send via WhatsApp
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
