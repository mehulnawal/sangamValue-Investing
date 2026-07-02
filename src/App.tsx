import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';

// Scroll to top on route change helper
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-background text-charcoal font-sans selection:bg-accent/20 selection:text-primary">

        {/* Persistent Premium Navbar */}
        <Navbar />

        {/* Main Content Hub */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />

            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Global Footer (incorporates the book-consultation contact desk) */}
        <Footer />

      </div>
    </Router>
  );
}
