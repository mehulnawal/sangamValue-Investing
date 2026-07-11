import { motion, useReducedMotion } from 'motion/react';
import CompoundingLine from './CompoundingLine';

export default function Introduction() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="introduction" className="py-2 md:py-28 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Core Two-Column Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 items-center mb-4 md:mb-4">

          {/* Left Column: Visual interior */}
          {/* <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-primary/5 shadow-md group">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-all duration-300 z-10" />
              <img
                src="/images/philosophicalSection.jpg"
                alt="Sangam Value Investing private wealth office lounge"
                className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-4 right-6 bg-card border border-primary/5 px-4 py-2 rounded shadow-sm">
              <span className="font-serif text-xs text-primary italic font-semibold">Private Advisory Suite</span>
            </div>
          </motion.div> */}

          {/* Right Column: Statement blocks */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold tracking-widest uppercase text-accent font-sans">
                Our Philosophical Stance
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-4.5xl font-bold text-primary mt-2 leading-tight">
                We believe in more than just short-term returns. We help you craft a complete financial legacy.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="border-l-2 border-accent pl-6 md:pl-8"
            >
              <p className="font-sans text-charcoal/85 text-base sm:text-lg leading-relaxed font-light">
                We create your complete, individualized investment profile and guide your most important financial decisions. By taking a long-term, high-conviction approach rooted in fundamental value investing, we match your core goals to safe, durable products.
              </p>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
