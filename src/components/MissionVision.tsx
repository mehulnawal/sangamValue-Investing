// import { motion, useReducedMotion } from 'motion/react';
// import { ShieldCheck } from 'lucide-react';

// function DartboardIcon({ className = "w-9 h-9", ...props }) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       className={className}
//       {...props}
//     >
//       <circle cx="12" cy="12" r="11" fill="currentColor" opacity="0.12" />
//       <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2.25" />
//       <circle cx="12" cy="12" r="8" fill="currentColor" opacity="0.22" />
//       <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2.25" />
//       <circle cx="12" cy="12" r="5" fill="currentColor" opacity="0.35" />
//       <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2.25" />
//       <circle cx="12" cy="12" r="2" fill="currentColor" />
//     </svg>
//   );
// }

// function EyeIcon({ className = "w-9 h-9", ...props }) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       className={className}
//       {...props}
//     >
//       <path d="M4.5 6.5L3 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
//       <path d="M8.5 4.75L7.75 2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
//       <path d="M12.5 4.25L12.25 1.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
//       <path d="M16.5 4.75L17.25 2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
//       <path d="M20 6.5L21.5 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
//       <path
//         d="M2 13C2 13 6 7 12 7C18 7 22 13 22 13C22 13 18 19 12 19C6 19 2 13 2 13Z"
//         stroke="currentColor"
//         strokeWidth="2.25"
//         strokeLinejoin="round"
//       />
//       <circle cx="12" cy="13" r="4" fill="currentColor" />
//       <path
//         d="M10.25 11.5C10.25 11.5 10.75 10.5 11.75 10.5"
//         stroke="var(--icon-highlight, #ffffff)"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// export default function MissionVision() {
//   const shouldReduceMotion = useReducedMotion();

//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: 'easeOut' },
//     },
//   };

//   return (
//     <section id="mission-vision" className="py-20 md:py-28 bg-card border-y border-primary/5">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
//           <span className="text-xs font-semibold tracking-widest uppercase text-accent font-sans">
//             Our Purpose &amp; Foundation
//           </span>
//           <h2 className="font-serif text-3xl md:text-4.5xl font-bold text-primary mt-2 mb-4">
//             Guiding Principles of Sangam Value Investing
//           </h2>
//           {/* <div className="w-16 h-0.5 bg-accent mx-auto mt-4" /> */}
//         </div>

//         {/* Mission and Vision Grid */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: '-100px' }}
//         >
//           {/* Mission Card */}
//           <motion.div
//             variants={itemVariants}
//             className="relative bg-background border border-primary/5 rounded-xl p-8 md:p-10 shadow-[0_4px_25px_rgba(30,77,58,0.02)] hover:border-accent/35 transition-all duration-300 flex flex-col justify-between"
//           >
//             <div>
//               <div className="w-16 h-16 bg-primary/20 text-primary rounded-lg flex items-center justify-center mb-6">
//                 <DartboardIcon className="w-9 h-9 text-primary" />
//               </div>
//               <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">
//                 Our Mission
//               </h3>
//               <p className="font-sans text-charcoal/85 text-base md:text-lg leading-relaxed font-light">
//                 To help you achieve financial independence and create your financial legacy by helping you choose the right products for your goals.
//               </p>
//             </div>
//             <div className="mt-8 border-t border-primary/5 pt-4 text-xs font-sans text-accent tracking-widest uppercase">
//               CLIENT-FIRST ALIGNMENT
//             </div>
//           </motion.div>

//           {/* Vision Card */}
//           <motion.div
//             variants={itemVariants}
//             className="relative bg-background border border-primary/5 rounded-xl p-8 md:p-10 shadow-[0_4px_25px_rgba(30,77,58,0.02)] hover:border-accent/35 transition-all duration-300 flex flex-col justify-between"
//           >
//             <div>
//               <div className="w-16 h-16 bg-primary/20 text-primary rounded-lg flex items-center justify-center mb-6">
//                 <EyeIcon className="w-9 h-9 text-primary" />
//               </div>
//               <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">
//                 Our Vision
//               </h3>
//               <p className="font-sans text-charcoal/85 text-base md:text-lg leading-relaxed font-light">
//                 To create a one-stop solution for all your financial needs, establishing a comprehensive, trust-based platform that answers every asset and legacy planning query.
//               </p>
//             </div>
//             <div className="mt-8 border-t border-primary/5 pt-4 text-xs font-sans text-accent tracking-widest uppercase">
//               OMNICHANNEL INTEGRITY
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Commitment Statement */}
//         <motion.div
//           className="mt-16 md:mt-24 text-center max-w-2xl mx-auto px-4"
//           initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//         >
//           <div className="inline-flex items-center gap-2 text-primary/75 mb-3">
//             <ShieldCheck className="w-5 h-5 text-accent" strokeWidth={1.5} />
//             <span className="text-xs font-semibold uppercase tracking-wider font-sans">Our Solid Promise</span>
//           </div>
//           <p className="font-serif text-lg md:text-2xl text-primary font-medium leading-relaxed italic">
//             "We are committed to helping our clients grow and protect their hard-earned wealth."
//           </p>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

import { motion, useReducedMotion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

function DartboardIcon({ className = "w-9 h-9", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="11" fill="currentColor" opacity="0.12" />
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2.25" />
      <circle cx="12" cy="12" r="8" fill="currentColor" opacity="0.22" />
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2.25" />
      <circle cx="12" cy="12" r="5" fill="currentColor" opacity="0.35" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2.25" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />

      {/* Dart 1 - top right, landed near center */}
      {/* Dart 1 - RED */}
      <line
        x1="19"
        y1="3"
        x2="13.5"
        y2="10.5"
        stroke="#DC2626"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M18 2.5L20.5 2L20 4.5L18 2.5Z"
        fill="#DC2626"
      />

      {/* Dart 2 - RED */}
      <line
        x1="4"
        y1="2"
        x2="9.5"
        y2="8.5"
        stroke="#DC2626"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M4.7 1.3L2.2 1.5L3 3.8L4.7 1.3Z"
        fill="#DC2626"
      />

      {/* Dart 3 - RED */}
      <line
        x1="21"
        y1="15"
        x2="15.5"
        y2="14"
        stroke="#DC2626"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M21.7 14.3L23.5 15.8L21.2 16.7L21.7 14.3Z"
        fill="#DC2626"
      />

      {/* <line x1="4" y1="2" x2="9.5" y2="8.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M4.7 1.3L2.2 1.5L3 3.8L4.7 1.3Z" fill="currentColor" /> */}

      {/* <line x1="21" y1="15" x2="15.5" y2="14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M21.7 14.3L23.5 15.8L21.2 16.7L21.7 14.3Z" fill="currentColor" /> */}
    </svg>
  );
}

function EyeIcon({ className = "w-9 h-9", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path d="M4.5 6.5L3 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M8.5 4.75L7.75 2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M12.5 4.25L12.25 1.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M16.5 4.75L17.25 2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M20 6.5L21.5 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path
        d="M2 13C2 13 6 7 12 7C18 7 22 13 22 13C22 13 18 19 12 19C6 19 2 13 2 13Z"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="13" r="4" fill="currentColor" />
      <path
        d="M10.25 11.5C10.25 11.5 10.75 10.5 11.75 10.5"
        stroke="var(--icon-highlight, #ffffff)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

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
              <div className="w-16 h-16 bg-primary/20 text-primary rounded-lg flex items-center justify-center mb-6">
                <DartboardIcon className="w-9 h-9 text-primary" />
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
              <div className="w-16 h-16 bg-primary/20 text-primary rounded-lg flex items-center justify-center mb-6">
                <EyeIcon className="w-9 h-9 text-primary" />
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