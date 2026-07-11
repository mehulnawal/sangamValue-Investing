import { motion, useReducedMotion } from 'motion/react';

const GALLERY_PHOTOS = [
  {
    src: '/images/trust1.jpg',
    alt: 'Sangam Value Investing elegant corporate reception and signage',
    caption: 'Siddharth Sedani',
  },
  {
    src: '/images/trust2.jpg',
    alt: 'Boutique wealth management office suite interior lounge',
    caption: 'Private Discussion Suite',
  },
  {
    src: '/images/trust3.jpg',
    alt: 'Elegant corporate inauguration toast at Sangam Value Investing',
    caption: 'Sanjay Sinha',
  },
];

export default function OfficeGallery() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="office-gallery" className="py-20 md:py-28 bg-card border-t border-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent font-sans">
            Our Presence
          </span>
          <h2 className="font-serif text-3xl md:text-5.5xl font-bold text-primary mt-2">
            The Trust Gallery
          </h2>
          <p className="font-sans text-charcoal/70 text-sm md:text-base leading-relaxed mt-4 font-light">
            A quiet, premium space designed to protect confidentiality and host meaningful discussions about your family's future.
          </p>
          {/* <div className="w-16 h-0.5 bg-accent mx-auto mt-4" /> */}
        </div>

        {/* 3-Image Strip Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GALLERY_PHOTOS.map((photo, index) => (
            <motion.div
              key={photo.caption}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col focus-within:ring-2 focus-within:ring-accent rounded-lg p-1"
            >
              {/* Image box */}
              <div className="relative aspect-[3/4] md:aspect-[4/5] w-full overflow-hidden rounded-lg border border-primary/5 shadow-sm bg-background">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all duration-300 z-10" />
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover object-top grayscale-[12%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Caption */}
              <div className="mt-4 flex items-center justify-between">
                <p className="font-serif text-lg font-bold text-primary group-hover:text-accent transition-colors">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}