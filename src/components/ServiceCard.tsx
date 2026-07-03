import React from 'react';
import { motion } from 'motion/react';

interface ServiceCardProps {
  key?: string | number;
  icon: React.ComponentType<any> | any;
  title: string;
  description: string;
  image: string; // Added image prop
  index?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  image,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      id={`service-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="bg-card border border-primary/5 rounded-xl flex flex-col justify-between overflow-hidden shadow-[0_4px_20px_rgba(30,77,58,0.02)] hover:shadow-[0_20px_40px_rgba(30,77,58,0.08)] hover:border-accent/30 transition-all duration-300 group focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2"
    >
      <div>
        {/* Creative Image Container */}
        <div className="relative h-48 w-full overflow-hidden bg-primary/10">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-100" />

          {/* Floating Icon Frame */}
          <div className="absolute bottom-4 left-6 w-12 h-12 bg-card rounded-lg flex items-center justify-center text-primary shadow-md group-hover:bg-primary group-hover:text-background transition-all duration-300">
            <Icon className="w-6 h-6" strokeWidth={1.5} />
          </div>
        </div>

        {/* Content Box */}
        <div className="p-6 md:p-8 pt-4">
          <h3 className="font-serif text-xl md:text-2xl font-semibold text-primary mb-3 leading-snug group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-charcoal/80 text-sm md:text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* <div className="mx-6 md:mx-8 mb-6 md:mb-8 pt-2 flex items-center text-accent text-xs font-semibold tracking-wider uppercase group-hover:translate-x-1 transition-transform duration-300">
        <span aria-hidden="true">&rarr;</span>
      </div> */}
    </motion.div>
  );
}