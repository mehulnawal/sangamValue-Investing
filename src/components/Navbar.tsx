import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);

    // Check if on Home page, if so scroll to contact
    if (location.pathname === '/') {
      const footerElement = document.getElementById('contact');
      if (footerElement) {
        footerElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home and then scroll to contact after render
      navigate('/', { state: { scrollToContact: true } });
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-background/95 backdrop-blur-md shadow-[0_4px_30px_rgba(30,77,58,0.03)] border-b border-primary/10'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">

          {/* Logo & Brand Name */}
          {/* Logo & Brand Name */}
          <NavLink
            to="/"
            className="
    flex items-center gap-4
    group
    focus-visible:ring-2
    focus-visible:ring-accent
    focus-visible:outline-none
    rounded-lg
    flex-shrink-0
  "
          >
            <img
              src="/images/logo.png"
              alt="Sangam Value Investing Logo"
              className="
      w-[70px] h-[70px]
      md:w-[82px] md:h-[82px]
      object-contain
      flex-shrink-0
      transition-transform duration-300
      group-hover:scale-105
    "
            />

            <span
              className="
      font-serif
      font-bold
      text-primary
      leading-none
      tracking-tight
      whitespace-nowrap
      text-[22px]
      md:text-[28px]
      lg:text-[32px]
      select-none
    "
            >
              SANGAM VALUE INVESTING
            </span>
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-sans text-sm font-medium tracking-wider uppercase transition-colors duration-200 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 ${isActive ? 'text-accent' : 'text-primary'
                }`
              }
            >
              Home
            </NavLink>

            {/* <NavLink
              to="/services"
              className={({ isActive }) =>
                `font-sans text-sm font-medium tracking-wider uppercase transition-colors duration-200 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 ${isActive ? 'text-accent' : 'text-primary'
                }`
              }
            >
              Services
            </NavLink> */}

            {/* <a
              href="#contact"
              onClick={handleContactClick}
              className="font-sans text-sm font-medium tracking-wider uppercase text-primary transition-colors duration-200 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1"
            >
              Contact
            </a> */}

            <button
              onClick={handleContactClick}
              className="bg-accent text-primary hover:bg-primary hover:text-background border border-accent hover:border-primary font-sans text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded-md shadow-sm transition-all duration-300 cursor-pointer"
            >
              Book consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          {/* <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-accent hover:bg-primary/5 transition-all focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div> */}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background border-b border-primary/10 transition-all duration-300 ease-in-out origin-top ${isOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-95 opacity-0 invisible h-0 overflow-hidden'
          }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-6 space-y-4 shadow-inner">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block font-sans text-sm font-semibold tracking-wider uppercase px-3 py-2 rounded-md ${isActive ? 'text-accent bg-primary/5' : 'text-primary hover:text-accent hover:bg-primary/5'
              }`
            }
          >
            Home
          </NavLink>

          {/* <NavLink
            to="/services"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block font-sans text-sm font-semibold tracking-wider uppercase px-3 py-2 rounded-md ${isActive ? 'text-accent bg-primary/5' : 'text-primary hover:text-accent hover:bg-primary/5'
              }`
            }
          >
            Services
          </NavLink> */}

          {/* <a
            href="#contact"
            onClick={handleContactClick}
            className="block font-sans text-sm font-semibold tracking-wider uppercase px-3 py-2 text-primary hover:text-accent hover:bg-primary/5 rounded-md"
          >
            Contact
          </a> */}

          <div className="pt-2 px-3">
            <button
              onClick={handleContactClick}
              className="w-full bg-accent text-primary hover:bg-primary hover:text-background border border-accent hover:border-primary font-sans text-xs font-semibold tracking-wider uppercase py-3 rounded-md shadow-sm transition-all duration-300 text-center"
            >
              Book consultation
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
