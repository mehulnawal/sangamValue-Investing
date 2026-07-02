import { motion, useReducedMotion } from 'motion/react';
import { Mail, ShieldCheck, Award, ThumbsUp } from 'lucide-react';

export default function Leadership() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="leadership" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent font-sans">
            Guiding Stewardship
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mt-2">
            Leadership &amp; Expertise
          </h2>
          <p className="font-sans text-charcoal/70 text-base leading-relaxed mt-4 font-light">
            An unwavering commitment to integrity, patience, and the core tenets of value investing.
          </p>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
        </div>

        {/* Founder Card */}
        <div className="max-w-4xl mx-auto bg-card border border-primary/5 rounded-2xl overflow-hidden shadow-[0_8px_35px_rgba(30,77,58,0.02)] p-6 md:p-12 relative">
          {/* Subtle design detail: background emblem watermark */}
          <div className="absolute right-8 top-8 w-44 h-44 text-primary/[0.01] pointer-events-none select-none font-serif text-[180px] font-bold leading-none">
            S
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Image (Left on md+) */}
            <motion.div
              className="md:col-span-4 relative flex justify-center"
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full max-w-[240px] aspect-[3/4] z-10">
                {/* Frame border */}
                <div className="absolute -inset-2 border border-accent/30 rounded-lg -z-10 transform translate-x-1 translate-y-1" />
                <div className="w-full h-full overflow-hidden rounded-md border border-primary/10">
                  <img
                    src="/src/assets/images/bimal_portrait_1782979355442.jpg"
                    alt="Bimal Dharewa - Partner at Sangam Value Investing"
                    className="w-full h-full object-cover grayscale-[10%]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>

            {/* Bio Details (Right on md+) */}
            <div className="md:col-span-8 space-y-6">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent font-sans">
                  Founder &amp; Managing Partner
                </span>
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary mt-1">
                  Bimal Dharewa
                </h3>
              </div>

              <p className="font-sans text-charcoal/85 text-base leading-relaxed font-light">
                With over two decades of capital market stewardship, Bimal Dharewa has successfully steered wealth strategies for high-net-worth families. Rooted strictly in fundamental value investing principles, he believes in picking deep-value, risk-adjusted products tailored carefully to individual goals.
              </p>

              <p className="font-sans text-charcoal/85 text-base leading-relaxed font-light">
                He established Sangam Value Investing to offer families a quiet, conflict-free sanctuary for wealth conservation and compound expansion, removing high-tech jargon and replacing it with transparent, human trust.
              </p>

              {/* Founder Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-primary/5">
                <div className="flex items-center gap-2.5 text-primary">
                  <Award className="w-5 h-5 text-accent flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-xs font-semibold font-sans tracking-wide uppercase">20+ Years Capital Markets</span>
                </div>
                <div className="flex items-center gap-2.5 text-primary">
                  <ShieldCheck className="w-5 h-5 text-accent flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-xs font-semibold font-sans tracking-wide uppercase">Conflict-Free Advisory</span>
                </div>
                <div className="flex items-center gap-2.5 text-primary">
                  <ThumbsUp className="w-5 h-5 text-accent flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-xs font-semibold font-sans tracking-wide uppercase">100% Trust Alignment</span>
                </div>
              </div>

              {/* Direct email anchor */}
              <div className="pt-2">
                <a
                  href="mailto:mehulanawal29@gmail.com" // Based on metadata user email
                  className="inline-flex items-center gap-2 text-primary hover:text-accent font-sans text-xs font-bold tracking-wider uppercase group"
                >
                  <Mail className="w-4 h-4 text-accent" />
                  <span className="border-b border-primary/20 group-hover:border-accent pb-0.5 transition-colors">
                    Direct Partner Inquiry
                  </span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
