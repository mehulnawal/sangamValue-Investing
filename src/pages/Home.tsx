import React, { useEffect } from 'react';
import { useLocation as useReactRouterLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import MissionVision from '../components/MissionVision';
import MarketStats from '../components/MarketStats';
import ServicesPreview from '../components/ServicesPreview';
import Partners from '../components/Partners';
import Leadership from '../components/Leadership';
import OfficeGallery from '../components/OfficeGallery';

export default function Home() {
  const location = useReactRouterLocation();

  useEffect(() => {
    // Set dynamic page title and meta description
    document.title = 'Sangam Value Investing | Private Wealth Management Mumbai';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Sangam Value Investing is a premier wealth management and investment advisory firm led by Bimal Dharewa. We guide families toward long-term wealth preservation and compound growth.'
      );
    }

    // Scroll to contact form if triggered from another route
    if (location.state && (location.state as any).scrollToContact) {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        setTimeout(() => {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, [location]);

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home-page-container" className="overflow-hidden">
      {/* 1. Hero banner */}
      <Hero onCtaClick={handleCtaClick} />

      {/* 2. Introduction */}
      <Introduction />

      {/* 3. Mission and Vision */}
      <MissionVision />

      {/* 4. Market opportunity stats */}
      {/* <MarketStats /> */}

      {/* 5. Services selection preview */}
      <ServicesPreview />

      {/* 7. Leadership panel */}
      {/* <Leadership /> */}

      {/* 8. Office Trust gallery */}
      <OfficeGallery />

      {/* 8. Partner logos ribbon */}
      <Partners />
    </div>
  );
}
