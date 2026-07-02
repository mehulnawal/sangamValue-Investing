import { motion, useReducedMotion } from 'motion/react';

const PARTNER = {
  name: 'IIFL Securities',
  logo: '/images/IIFLLogo.png',
  description:
    'We proudly collaborate with IIFL Securities, one of India’s leading financial institutions, enabling our clients to access reliable trading infrastructure, seamless execution, and comprehensive investment solutions backed by decades of market expertise.',
};

export default function Partners() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="partners"
      className="py-20 lg:py-28 bg-card border-y border-primary/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-charcoal/50">
            Our Strategic Corporate Alliance
          </p>
        </motion.div>

        {/* Partner */}

        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="bg-background rounded-3xl border border-primary/5 shadow-sm"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center p-8 md:p-12 lg:p-16">

            {/* Left */}

            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center"
            >
              <img
                src={PARTNER.logo}
                alt={PARTNER.name}
                className="w-full max-w-[270px] object-contain"
                loading="lazy"
              />
            </motion.div>

            {/* Right */}

            <div>

              <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                Trusted Corporate Partner
              </span>

              <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold text-primary">
                {PARTNER.name}
              </h2>

              <p className="mt-6 text-charcoal/80 leading-8 text-base md:text-lg">
                {PARTNER.description}
              </p>

              <div className="mt-8 flex items-center gap-3">

                <div className="w-2.5 h-2.5 rounded-full bg-accent" />

                <span className="text-sm font-medium text-primary">
                  Delivering trusted investment infrastructure and market access.
                </span>

              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}