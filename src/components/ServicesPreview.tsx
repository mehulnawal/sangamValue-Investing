import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Cpu } from 'lucide-react';
import CompoundingLine from './CompoundingLine';
import Services from '../pages/Services';

const PREVIEW_SERVICES = [
  {
    title: 'Equities',
    image: '/images/ServicePreviewEquities.jpeg',
    description:
      'Bespoke direct stock portfolios structured for long-term compound growth based on stringent intrinsic-value calculations.',
  },
  {
    title: 'Mutual Funds',
    image: '/images/ServicePreviewMututalFunds.jpeg',
    description:
      'Carefully curated selection of high-performing diversified funds aligned with your structural income and growth needs.',
  },
];

export default function ServicesPreview() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="services-preview"
      className="py-2 md:py-2 bg-background relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-3">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-0 text-center">

          {/* <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent font-sans">
              Expertise
            </span>

            <h2 className="font-serif text-3xl md:text-4.5xl font-bold text-primary mt-2 mb-4">
              Our Core Disciplines
            </h2>

            <p className="font-sans text-charcoal/80 text-sm md:text-base leading-relaxed max-w-xl mx-auto mt-4 font-light">
              We specialize in structured products and value-first allocations
              designed to withstand volatile market cycles.
            </p>

            <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
          </div> */}

          {/* <Link
            to="/services"
            className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-background px-6 py-3 rounded-md text-xs font-bold tracking-wider uppercase transition-all duration-300 group"
          >
            View All Services

            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link> */}
        </div>

        {/* Services */}
        <section className="py-12 md:py-16 !pt-0">
          <div className="">
            <div className="bg-card border border-accent/20 rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(30,77,58,0.04)] grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch group">

              {/* Spotlight Creative Image Visual - Dom element swapped to load first on mobile */}
              <div className="relative h-64 lg:h-auto lg:col-span-5 bg-primary/10 overflow-hidden order-first lg:order-last">
                <img
                  src="/images/services/algoTrading.jpeg"
                  alt="Algo Trading Strategies Analytics"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Spotlight Content - Keeps left grid tracking on desktop */}
              <div className="p-8 sm:p-12 lg:col-span-7 flex flex-col justify-center space-y-6 lg:order-first">
                <div className="flex items-center gap-2 text-accent text-xs font-semibold tracking-widest uppercase">
                  <Cpu className="w-4 h-4 text-accent" />
                  <span>Premium Quantitative Offering</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight">
                  Algo Trading Strategies
                </h2>

                <p className="font-sans text-charcoal/80 text-base leading-relaxed font-light">
                  Sophisticated quantitative overlays utilizing automated trading systems to optimize entry points and minimize risk drawdowns. Our algorithms run rule-based computational parameters designed to preserve capital while seizing volatile market inefficiencies in real time.
                </p>

                <div className="pt-2">
                  <button
                    // onClick={handleCtaClick}
                    className="inline-flex items-center gap-2 text-primary group-hover:text-accent font-sans text-xs font-bold tracking-widest uppercase transition-colors duration-300"
                  >
                    <span>Explore Other services</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        <Services />

        {/* Divider */}

        <div className="pt-4 overflow-visible">
          <CompoundingLine variant="divider2" />
        </div>

      </div>
    </section>
  );
}