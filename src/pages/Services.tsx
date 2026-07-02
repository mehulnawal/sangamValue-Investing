import React, { useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  TrendingUp,
  Compass,
  Briefcase,
  Coins,
  Layers,
  Activity,
  Shield,
  Heart,
  FileText,
  Lock,
  ArrowUpRight
} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import CompoundingLine from '../components/CompoundingLine';

const SERVICES_DATA = [
  {
    icon: TrendingUp,
    title: 'Equities',
    description: 'High-conviction direct stock portfolios built on rigorous fundamental metrics and stringent margin-of-safety valuations.',
  },
  {
    icon: Compass,
    title: 'Investment Advisory',
    description: 'Highly customized capital allocation strategies designed to navigate cyclical market swings with strategic patience.',
  },
  {
    icon: Briefcase,
    title: 'PMS (Portfolio Management Services)',
    description: 'Tailored, professionally managed equity and multi-asset portfolios meeting specific family objectives.',
  },
  {
    icon: Coins,
    title: 'Mutual Funds',
    description: 'Diversified institutional mutual fund selection utilizing extensive quantitative screening models.',
  },
  {
    icon: Layers,
    title: 'AIF (Alternative Investment Funds)',
    description: 'Bespoke access to private equity, venture capital, and structured high-yield debt for accredited HNWIs.',
  },
  {
    icon: Activity,
    title: 'Algo Trading Strategies',
    description: 'Sophisticated quantitative overlays utilizing automated trading systems to optimize entry points and risk drawdowns.',
  },
  {
    icon: Shield,
    title: 'Life Insurance',
    description: 'Tax-optimized wealth preservation and estate planning term wrappers ensuring smooth multi-generational legacy transfers.',
  },
  {
    icon: Heart,
    title: 'Health Insurance',
    description: 'Premium healthcare shields safeguarding family capital from medical contingencies with top-tier coverage.',
  },
  {
    icon: FileText,
    title: 'Bonds & Fixed Income',
    description: 'Sovereign-backed and AAA-rated corporate debt papers offering predictable yield matching structural liabilities.',
  },
  {
    icon: Lock,
    title: 'Corporate FDs',
    description: 'Secure corporate fixed deposits offering stable cash flow profiles audited strictly for underlying credit quality.',
  },
];

export default function Services() {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Scroll to page top on mount
    window.scrollTo(0, 0);
    
    // Set Page Head Titles and SEO Metadata
    document.title = 'Our Services | Sangam Value Investing Wealth Solutions';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Explore our boutique wealth management services, including direct Equities, Portfolio Management Services (PMS), AIF, Bonds, and custom Investment Advisory.'
      );
    }
  }, []);

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="services-page-container" className="pt-32 pb-16 bg-background overflow-hidden">
      
      {/* 1. Header Hero section */}
      <section className="relative py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent font-sans">
              Our Capabilities
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-primary mt-2 mb-6 leading-tight">
              A Complete Wealth <br />
              <span className="text-accent italic font-normal">Management Solution</span>
            </h1>
            <p className="font-sans text-charcoal/80 text-base sm:text-lg md:text-xl leading-relaxed font-light mb-8">
              No product is chosen in isolation. We coordinate across ten specialized wealth structures to build an integrated profile tailored purely to your family goals.
            </p>
          </div>

          {/* Golden compounding line beneath page header */}
          <div className="w-full h-16 pt-2 overflow-visible">
            <CompoundingLine variant="services-header" />
          </div>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service, index) => (
              <ServiceCard
                key={service.title}
                index={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. High-End In-Page CTA */}
      <section className="py-16 bg-card border-y border-primary/5 mt-16 md:mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent font-sans">
            LEGACY PRESERVATION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary max-w-2xl mx-auto leading-tight">
            Ready to Begin Crafting Your Financial Legacy?
          </h2>
          <p className="font-sans text-charcoal/80 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed font-light">
            Discuss your risk profile, capital preservation benchmarks, and multi-generational milestones in strict private confidence.
          </p>
          <div className="pt-4">
            <button
              onClick={handleCtaClick}
              className="group inline-flex items-center justify-center gap-2 bg-accent hover:bg-primary text-primary hover:text-background border border-accent hover:border-primary px-8 py-4 rounded-md font-sans text-xs font-bold tracking-widest uppercase shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <span>Book a Private Consultation</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
