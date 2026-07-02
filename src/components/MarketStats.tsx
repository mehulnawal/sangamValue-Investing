import { motion, useReducedMotion } from 'motion/react';
import StatCounter from './StatCounter';
import { TrendingUp, Globe2, Wallet2 } from 'lucide-react';

export default function MarketStats() {
  const shouldReduceMotion = useReducedMotion();

  // Coordinates for our bespoke Sensex growth path (2005-2024)
  // viewBox: 0 0 800 220
  const sensexPath = 'M 0 195 C 100 185, 150 160, 200 170 C 250 175, 300 150, 350 140 C 400 135, 450 110, 500 115 C 550 120, 600 65, 650 60 C 700 55, 750 30, 800 15';

  return (
    <section id="market-stats" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Subtle grid lines background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(30,77,58,0.01)_1px,transparent_1px)] bg-[size:100%_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent font-sans">
            The Growth Canvas
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mt-2">
            The Compounding Opportunity
          </h2>
          <p className="font-sans text-charcoal/80 text-base md:text-lg leading-relaxed mt-4 font-light">
            India is standing at the precipice of an unprecedented wealth creation cycle.
            Understanding these fundamental shifts is key to securing your financial legacy.
          </p>
        </div>

        {/* 3 Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 md:mb-24">

          {/* Stat 1 */}
          <div className="bg-card border border-primary/5 rounded-xl p-8 flex flex-col justify-between shadow-sm relative group hover:border-accent/25 transition-all">
            <div>
              <div className="w-10 h-10 rounded-lg bg-primary/5 text-primary flex items-center justify-center mb-6">
                <Globe2 className="w-5 h-5 text-accent" strokeWidth={1.5} />
              </div>
              <StatCounter target={4.5} decimals={1} suffix="%" />
              <p className="font-serif text-lg font-semibold text-primary mt-4 mb-2">
                Global Equity Share
              </p>
            </div>
            <p className="font-sans text-sm text-charcoal/70 leading-relaxed mt-1">
              India's current share of the $110+ trillion global equity market. <strong className="text-primary font-medium">Enormous room to grow</strong>.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="bg-card border border-primary/5 rounded-xl p-8 flex flex-col justify-between shadow-sm relative group hover:border-accent/25 transition-all">
            <div>
              <div className="w-10 h-10 rounded-lg bg-primary/5 text-primary flex items-center justify-center mb-6">
                <TrendingUp className="w-5 h-5 text-accent" strokeWidth={1.5} />
              </div>
              <StatCounter
                target={0} // Irrelevant when dualTarget is passed
                dualTarget={{
                  val1: 17,
                  val2: 65,
                  format: (v1, v2) => `${v1}% vs ${v2}%`
                }}
              />
              <p className="font-serif text-lg font-semibold text-primary mt-4 mb-2">
                Equity Participation
              </p>
            </div>
            <p className="font-sans text-sm text-charcoal/70 leading-relaxed mt-1">
              India vs USA household equity participation. <strong className="text-primary font-medium">A generation of untapped potential</strong>.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="bg-card border border-primary/5 rounded-xl p-8 flex flex-col justify-between shadow-sm relative group hover:border-accent/25 transition-all">
            <div>
              <div className="w-10 h-10 rounded-lg bg-primary/5 text-primary flex items-center justify-center mb-6">
                <Wallet2 className="w-5 h-5 text-accent" strokeWidth={1.5} />
              </div>
              <StatCounter prefix="$" target={5} suffix="T" />
              <p className="font-serif text-lg font-semibold text-primary mt-4 mb-2">
                Market Capitalization
              </p>
            </div>
            <p className="font-sans text-sm text-charcoal/70 leading-relaxed mt-1">
              India's absolute market capitalization, ranking among the fastest-growing globally.
            </p>
          </div>

        </div>

        {/* Bespoke Sensex growth chart */}
        <div className="bg-card border border-primary/5 rounded-xl p-6 md:p-10 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
            <div>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-primary">
                Two Decades of Compounding Growth
              </h3>
              <p className="text-xs text-charcoal/70 font-sans uppercase tracking-widest mt-1">
                Bespoke BSE Sensex Index Performance (2005 - 2024)
              </p>
            </div>
            <div className="inline-flex items-center bg-primary/5 border border-primary/10 rounded-md px-3.5 py-1.5 self-start">
              <span className="text-xs font-semibold text-primary font-sans">
                As of May 2024
              </span>
            </div>
          </div>

          {/* SVG Chart Container */}
          <div className="relative w-full h-[220px]">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 800 220"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                {/* Soft green gradient fill below the curve */}
                <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.00" />
                </linearGradient>
              </defs>

              {/* Grid Horizontal Guide Lines */}
              <line x1="0" y1="50" x2="800" y2="50" stroke="rgba(30,77,58,0.05)" strokeDasharray="4 4" />
              <line x1="0" y1="110" x2="800" y2="110" stroke="rgba(30,77,58,0.05)" strokeDasharray="4 4" />
              <line x1="0" y1="170" x2="800" y2="170" stroke="rgba(30,77,58,0.05)" strokeDasharray="4 4" />

              {/* Gradient fill */}
              <motion.path
                d={`${sensexPath} L 800 220 L 0 220 Z`}
                fill="url(#chart-grad)"
                initial={shouldReduceMotion ? { opacity: 0.8 } : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />

              {/* Growth Trendline */}
              <motion.path
                d={sensexPath}
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth={2.5}
                strokeLinecap="round"
                initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.2, ease: 'easeOut', delay: 0.2 }}
              />

              {/* Hotspots / Intermittent Dots */}
              {/* 2005 dot */}
              <circle cx="0" cy="195" r="4" fill="var(--color-accent)" />
              {/* 2008 dot */}
              <circle cx="200" cy="170" r="4" fill="var(--color-accent)" />
              {/* 2020 dot */}
              <circle cx="500" cy="115" r="4" fill="var(--color-accent)" />
              {/* May 2024 dot */}
              <motion.circle
                cx="800"
                cy="15"
                r="6"
                fill="var(--color-accent)"
                initial={{ scale: 0 }}
                whileInView={{ scale: [1, 1.3, 1] }}
                viewport={{ once: true }}
                transition={{ repeat: Infinity, duration: 2, delay: 2.2 }}
              />
            </svg>

            {/* Float Labels */}
            <div className="absolute top-[175px] left-0 font-sans text-[10px] text-charcoal/50">~7k</div>
            <div className="absolute top-[150px] left-[25%] font-sans text-[10px] text-charcoal/50">~18k</div>
            <div className="absolute top-[95px] left-[62.5%] font-sans text-[10px] text-charcoal/50">~40k</div>
            <div className="absolute top-[5px] right-0 font-serif text-xs font-bold text-primary bg-card border border-primary/10 px-2 py-0.5 rounded shadow-sm">
              75,000+
            </div>
          </div>

          {/* X Axis Labels */}
          <div className="flex justify-between items-center mt-3 border-t border-primary/5 pt-4 text-[10px] md:text-xs font-sans text-charcoal/50 uppercase tracking-widest">
            <span>2005 (BSE ~7k)</span>
            <span>2010</span>
            <span>2015</span>
            <span>2020</span>
            <span>May 2024 (~75k)</span>
          </div>

        </div>

      </div>
    </section>
  );
}
