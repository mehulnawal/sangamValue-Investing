import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import CompoundingLine from './CompoundingLine';
import { ArrowUpRight, Layers, Users, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onCtaClick: (e: React.MouseEvent) => void;
}

const stats = [
  { icon: Layers, value: '20+', label: 'Years of Experience' }, // TODO: confirm real figure with Bimal
  // { icon: Users, value: '[X]+', label: 'HNI Clients' },          // TODO: confirm — placeholder, do not ship as-is
  { icon: ShieldCheck, value: '2024', label: 'Trusted Since' }, // TODO: confirm founding year
];

export default function Hero({ onCtaClick }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center pt-28 md:pt-32 pb-16 overflow-hidden bg-background"
    >
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,77,58,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,77,58,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column Content */}
          <motion.div
            className="relative lg:col-span-7 flex flex-col items-start text-left z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="absolute top-1/3 -left-10 right-0 h-48 opacity-45 pointer-events-none -z-10 overflow-visible">
              <CompoundingLine variant="hero" delay={0.4} />
            </div>

            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-6 md:mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-semibold tracking-widest uppercase text-primary font-sans">
                Sangam Value Investing
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.1] tracking-tight mb-6"
            >
              Crafting Your <br />
              <span className="text-accent italic font-normal">Financial Legacy</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="font-sans text-charcoal/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mb-8 md:mb-10 font-light"
            >
              We help you achieve financial independence and build a wealth legacy that lasts. Private, personalized, and value-driven advisory for discerning individuals.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10 md:mb-12">
              <button
                onClick={onCtaClick}
                className="group flex items-center justify-center gap-2 bg-accent hover:bg-primary text-primary hover:text-background border border-accent hover:border-primary px-8 py-4 rounded-md font-sans text-sm font-semibold tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span>Book a Consultation</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <a
                href="#mission"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('introduction')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center justify-center border border-primary/20 hover:border-primary px-8 py-4 rounded-md font-sans text-sm font-medium tracking-wider uppercase text-primary hover:text-accent transition-colors duration-300"
              >
                Our Philosophy
              </a>
            </motion.div>

            {/* Stat strip — matches the bottom look in your screenshot */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6 sm:gap-10 w-full pt-6 border-t border-primary/10"
            >
              {stats.map(({ icon: Icon, value, label }, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/5 border border-primary/10 flex-shrink-0">
                    <Icon className="w-4 h-4 text-accent" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="font-serif text-xl sm:text-2xl font-bold text-primary leading-none">
                      {value}
                    </p>
                    <p className="text-[11px] sm:text-xs text-charcoal/60 uppercase tracking-wider font-sans mt-1">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column (Founder Portrait) */}
          <motion.div
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          >
            <div className="relative w-full max-w-[360px] aspect-[3/4] z-10 group">
              <div className="absolute -inset-4 border border-accent/25 rounded-md transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 -z-10" />

              <div className="w-full h-full overflow-hidden rounded-md border border-primary/10 shadow-[0_15px_40px_rgba(30,77,58,0.08)] bg-card">
                <img
                  src="/images/ownerPhoto.jpg"
                  alt="Founder Portrait of Bimal Dharewa"
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="absolute bottom-6 -left-6 bg-card border border-primary/10 shadow-lg px-6 py-4 rounded-md text-left max-w-[240px]">
                <p className="font-serif text-base font-bold text-primary">Bimal Dharewa</p>
                <p className="text-xs text-charcoal/70 tracking-widest uppercase mt-0.5 font-sans">Founder &amp; Partner</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Dynamic Image Gallery Wrapper */}
        <div className="w-full flex flex-col items-center gap-6 mt-8">

          {/* Centered Heading/Common Text above images */}
          <motion.div
            className="text-center max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-3">
              Celebrating Milestones Together
            </h2>
            <p className="font-sans text-sm sm:text-base text-charcoal/70 font-light">
              Honored to host our esteemed guest Kailash Hakim Sir at the Sangam Value Investing office inauguration. Building a legacy of trust, collaboration, and shared financial milestones from day one.
            </p>
          </motion.div>

          {/* Responsive Side-by-Side Images Section */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {/* Image 1 */}
            <div className="relative overflow-hidden rounded-md border border-primary/10 bg-card aspect-[16/10] w-full shadow-sm hover:shadow-md transition-shadow duration-300">
              <img
                src="/images/heroImg2.jpg"
                alt="Bimal Dharewa receiving a bouquet partner greeting"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.01]"
              />
            </div>

            {/* Image 2 */}
            <div className="relative overflow-hidden rounded-md border border-primary/10 bg-card aspect-[16/10] w-full shadow-sm hover:shadow-md transition-shadow duration-300">
              <img
                src="/images/heroImg2.jpeg"
                alt="Handshake agreement collaboration overview"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.01]"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section >
  );
}