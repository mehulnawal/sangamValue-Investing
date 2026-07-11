import { motion, useReducedMotion } from 'motion/react';
import { Target, Eye, ShieldCheck } from 'lucide-react';

export default function MissionVision() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="mission-vision" className="py-20 md:py-28 bg-card border-y border-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent font-sans">
            Our Purpose &amp; Foundation
          </span>
          <h2 className="font-serif text-3xl md:text-4.5xl font-bold text-primary mt-2 mb-4">
            Guiding Principles of Sangam Value Investing
          </h2>
          {/* <div className="w-16 h-0.5 bg-accent mx-auto mt-4" /> */}
        </div>

        {/* Mission and Vision Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Mission Card */}
          <motion.div
            variants={itemVariants}
            className="relative bg-background border border-primary/5 rounded-xl p-8 md:p-10 shadow-[0_4px_25px_rgba(30,77,58,0.02)] hover:border-accent/35 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 bg-primary/5 text-primary rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">
                Our Mission
              </h3>
              <p className="font-sans text-charcoal/85 text-base md:text-lg leading-relaxed font-light">
                To help you achieve financial independence and create your financial legacy by helping you choose the right products for your goals.
              </p>
            </div>
            <div className="mt-8 border-t border-primary/5 pt-4 text-xs font-sans text-accent tracking-widest uppercase">
              CLIENT-FIRST ALIGNMENT
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={itemVariants}
            className="relative bg-background border border-primary/5 rounded-xl p-8 md:p-10 shadow-[0_4px_25px_rgba(30,77,58,0.02)] hover:border-accent/35 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 bg-primary/5 text-primary rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">
                Our Vision
              </h3>
              <p className="font-sans text-charcoal/85 text-base md:text-lg leading-relaxed font-light">
                To create a one-stop solution for all your financial needs, establishing a comprehensive, trust-based platform that answers every asset and legacy planning query.
              </p>
            </div>
            <div className="mt-8 border-t border-primary/5 pt-4 text-xs font-sans text-accent tracking-widest uppercase">
              OMNICHANNEL INTEGRITY
            </div>
          </motion.div>
        </motion.div>

        {/* Commitment Statement */}
        <motion.div
          className="mt-16 md:mt-24 text-center max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 text-primary/75 mb-3">
            <ShieldCheck className="w-5 h-5 text-accent" strokeWidth={1.5} />
            <span className="text-xs font-semibold uppercase tracking-wider font-sans">Our Solid Promise</span>
          </div>
          <p className="font-serif text-lg md:text-2xl text-primary font-medium leading-relaxed italic">
            "We are committed to helping our clients grow and protect their hard-earned wealth."
          </p>
        </motion.div>

      </div>
    </section>
  );
}
