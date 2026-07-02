import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'motion/react';

interface StatCounterProps {
  prefix?: string;
  suffix?: string;
  target: number;
  decimals?: number;
  // Alternative for dual stats like "17% vs 65%"
  dualTarget?: {
    val1: number;
    val2: number;
    format: (v1: string, v2: string) => string;
  };
  className?: string;
}

export default function StatCounter({
  prefix = '',
  suffix = '',
  target,
  decimals = 0,
  dualTarget,
  className = '',
}: StatCounterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const shouldReduceMotion = useReducedMotion();
  
  const [displayValue, setDisplayValue] = useState<string>('');

  useEffect(() => {
    if (shouldReduceMotion) {
      if (dualTarget) {
        setDisplayValue(dualTarget.format(dualTarget.val1.toString(), dualTarget.val2.toString()));
      } else {
        setDisplayValue(`${prefix}${target.toFixed(decimals)}${suffix}`);
      }
      return;
    }

    if (!isInView) {
      // Pre-view state
      if (dualTarget) {
        setDisplayValue(dualTarget.format('0', '0'));
      } else {
        setDisplayValue(`${prefix}${(0).toFixed(decimals)}${suffix}`);
      }
      return;
    }

    // Animation variables
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    let animationFrameId: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease-out quad
      const easeProgress = progress * (2 - progress);

      if (dualTarget) {
        const v1 = Math.round(dualTarget.val1 * easeProgress);
        const v2 = Math.round(dualTarget.val2 * easeProgress);
        setDisplayValue(dualTarget.format(v1.toString(), v2.toString()));
      } else {
        const currentNum = target * easeProgress;
        setDisplayValue(`${prefix}${currentNum.toFixed(decimals)}${suffix}`);
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, target, decimals, prefix, suffix, dualTarget, shouldReduceMotion]);

  return (
    <div id="stat-counter-container" ref={containerRef} className={`font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary ${className}`}>
      {displayValue}
    </div>
  );
}
