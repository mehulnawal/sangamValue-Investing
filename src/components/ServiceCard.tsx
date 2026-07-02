import React from 'react';
import { motion } from 'motion/react';

interface ServiceCardProps {
  key?: string | number;
  icon: React.ComponentType<any> | any;
  title: string;
  description: string;
  index?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      id={`service-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="bg-card border border-primary/5 rounded-lg p-6 md:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(30,77,58,0.02)] hover:shadow-[0_12px_30px_rgba(30,77,58,0.06)] hover:border-accent/30 transition-all duration-300 group focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2"
    >
      <div>
        <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-300 mb-6">
          <Icon className="w-6 h-6" strokeWidth={1.5} />
        </div>
        <h3 className="font-serif text-xl md:text-2xl font-semibold text-primary mb-3 leading-snug group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-charcoal/80 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
      
      <div className="mt-6 flex items-center text-accent text-xs font-semibold tracking-wider uppercase group-hover:translate-x-1 transition-transform duration-300">
        <span className="mr-1">Learn More</span>
        <span aria-hidden="true">&rarr;</span>
      </div>
    </motion.div>
  );
}
