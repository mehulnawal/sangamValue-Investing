import { motion, useReducedMotion } from 'motion/react';

interface CompoundingLineProps {
  variant?: 'hero' | 'divider1' | 'divider2' | 'divider3' | 'services-header';
  className?: string;
  delay?: number;
}

export default function CompoundingLine({
  variant = 'hero',
  className = '',
  delay = 0,
}: CompoundingLineProps) {
  const shouldReduceMotion = useReducedMotion();

  // Paths defined in 1000x200 or 1200x100 space, styled proportionally
  const paths = {
    hero: {
      viewBox: '0 0 1000 200',
      d: 'M 0 180 C 300 180, 500 150, 700 90 C 850 45, 950 25, 1000 20',
      strokeWidth: 2,
    },
    divider1: {
      viewBox: '0 0 1200 80',
      d: 'M 0 65 C 300 60, 600 50, 900 35 C 1050 25, 1150 18, 1200 15',
      strokeWidth: 1.5,
    },
    divider2: {
      viewBox: '0 0 1200 80',
      d: 'M 0 50 C 300 45, 600 38, 900 25 C 1050 18, 1150 12, 1200 10',
      strokeWidth: 1.5,
    },
    divider3: {
      viewBox: '0 0 1200 80',
      d: 'M 0 35 C 300 32, 600 25, 900 15 C 1050 10, 1150 6, 1200 5',
      strokeWidth: 1.5,
    },
    'services-header': {
      viewBox: '0 0 800 60',
      d: 'M 0 45 C 200 45, 400 35, 600 20 C 700 12, 750 8, 800 5',
      strokeWidth: 1.5,
    }
  };

  const activePath = paths[variant];

  // Motion transitions
  const pathTransition = {
    duration: shouldReduceMotion ? 0 : 2.5,
    ease: 'easeOut',
    delay: delay,
  };

  return (
    <div id={`compounding-line-${variant}`} className={`w-full overflow-visible ${className}`}>
      <svg
        className="w-full h-auto overflow-visible"
        viewBox={activePath.viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d={activePath.d}
          stroke="var(--color-accent)"
          strokeWidth={activePath.strokeWidth}
          strokeLinecap="round"
          initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={pathTransition}
        />
        
        {/* Subtle decorative accent dot at the very tip of the hero curve */}
        {variant === 'hero' && !shouldReduceMotion && (
          <motion.circle
            cx="1000"
            cy="20"
            r="4"
            fill="var(--color-accent)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0.4, 0.8] }}
            transition={{
              delay: delay + 2.3, // Wait for path animation to near completion
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        )}
      </svg>
    </div>
  );
}
