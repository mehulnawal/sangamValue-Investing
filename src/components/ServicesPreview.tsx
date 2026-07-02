import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import CompoundingLine from './CompoundingLine';

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
      className="py-20 md:py-28 bg-background relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">

          <div className="max-w-xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">
              Expertise
            </span>

            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mt-2">
              Our Core Disciplines
            </h2>

            <p className="mt-4 text-charcoal/80 leading-relaxed">
              We specialize in structured products and value-first allocations
              designed to withstand volatile market cycles.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-background px-6 py-3 rounded-md text-xs font-bold tracking-wider uppercase transition-all duration-300 group"
          >
            View All Services

            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20"
        >
          {PREVIEW_SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group bg-card rounded-3xl overflow-hidden border border-primary/5 shadow-sm hover:shadow-2xl transition-all duration-500"
            >

              {/* Image */}

              <div className="overflow-hidden">

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />

              </div>

              {/* Content */}

              <div className="p-8 md:p-10">

                <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">
                  {service.title}
                </h3>

                <p className="text-charcoal/80 leading-relaxed mb-8">
                  {service.description}
                </p>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-accent font-semibold group/link"
                >
                  Learn More

                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}

        <div className="pt-4 overflow-visible">
          <CompoundingLine variant="divider2" />
        </div>

      </div>
    </section>
  );
}