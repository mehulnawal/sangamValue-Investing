import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowUpRight, Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    portfolioSize: '1cr_5cr',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    let readablePortfolioValue = '';
    if (formData.portfolioSize === '25l_1cr') {
      readablePortfolioValue = '₹25 Lakhs – ₹1 Crore';
    } else if (formData.portfolioSize === '1cr_5cr') {
      readablePortfolioValue = '₹1 Crore – ₹5 Crores';
    } else if (formData.portfolioSize === '5cr_plus') {
      readablePortfolioValue = '₹5 Crores+';
    } else {
      readablePortfolioValue = formData.portfolioSize;
    }

    const financialObjective = formData.message.trim() ? formData.message.trim() : 'Not Provided';

    const messageText = `*New Portfolio Consultation Request*\n\n👤 Full Name:\n${formData.name}\n\n📞 Phone:\n${formData.phone}\n\n📧 Email:\n${formData.email}\n\n💰 Estimated Investible Surplus:\n${readablePortfolioValue}\n\n📝 Financial Objective:\n${financialObjective}`;

    const whatsappUrl = `https://wa.me/918780316413?text=${encodeURIComponent(messageText)}`;

    window.open(whatsappUrl, '_blank');

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      portfolioSize: '1cr_5cr',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <footer id="contact" className="bg-primary text-background border-t border-accent/20 relative overflow-hidden">

      {/* Decorative abstract compounding grid in footer background */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(201,162,75,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(201,162,75,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-background/10">

          {/* Left Block: Contact Form */}
          <div className="lg:col-span-7 bg-card/5 border border-background/10 rounded-xl p-6 md:p-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent font-sans">
              Private Reservation
            </span>
            <h3 className="font-serif text-2xl md:text-3.5xl font-bold text-background mt-1 mb-6">
              Request a Portfolio Consultation
            </h3>

            {isSubmitted ? (
              <div id="booking-success-message" className="bg-accent/10 border border-accent/30 rounded-lg p-6 md:p-8 flex flex-col items-center text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-accent" />
                <h4 className="font-serif text-xl font-bold text-background">Inquiry Safely Received</h4>
                <p className="font-sans text-sm text-background/80 leading-relaxed max-w-md">
                  Thank you. Your request is registered under high confidentiality. Founder Bimal Dharewa or our senior desk will contact you via telephone within one business day.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-2 text-accent hover:text-background font-sans text-xs font-bold uppercase tracking-wider border-b border-accent/30 hover:border-background pb-0.5 transition-all"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label htmlFor="form-name" className="font-sans text-xs font-semibold text-accent/80 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g., Harish Mehta"
                      className="bg-primary/20 border border-background/20 rounded px-4 py-3 text-sm text-background placeholder-background/40 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="form-phone" className="font-sans text-xs font-semibold text-accent/80 uppercase tracking-wider mb-2">
                      Contact Number
                    </label>
                    <input
                      id="form-phone"
                      type="text"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g., +91 98200 12345"
                      className="bg-primary/20 border border-background/20 rounded px-4 py-3 text-sm text-background placeholder-background/40 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label htmlFor="form-email" className="font-sans text-xs font-semibold text-accent/80 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g., harish@mehtagroup.com"
                      className="bg-primary/20 border border-background/20 rounded px-4 py-3 text-sm text-background placeholder-background/40 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="form-portfolio" className="font-sans text-xs font-semibold text-accent/80 uppercase tracking-wider mb-2">
                      Estimated Investible Surplus
                    </label>
                    <select
                      id="form-portfolio"
                      name="portfolioSize"
                      value={formData.portfolioSize}
                      onChange={handleChange}
                      className="bg-primary/20 border border-background/20 rounded px-4 py-3 text-sm text-background focus:outline-none focus:border-accent transition-colors"
                    >
                      <option value="25l_1cr" className="bg-primary text-background">₹25 Lakhs – ₹1 Crore</option>
                      <option value="1cr_5cr" className="bg-primary text-background">₹1 Crore – ₹5 Crores</option>
                      <option value="5cr_plus" className="bg-primary text-background">₹5 Crores + (HNW/Family Office)</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="form-message" className="font-sans text-xs font-semibold text-accent/80 uppercase tracking-wider mb-2">
                    Primary Financial Objective (Optional)
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your goals (e.g., legacy preservation, direct equity advisory)"
                    className="bg-primary/20 border border-background/20 rounded px-4 py-3 text-sm text-background placeholder-background/40 focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-background text-primary hover:text-primary border border-accent hover:border-background py-3.5 px-6 rounded font-sans text-xs font-bold tracking-widest uppercase shadow-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Confidential Transmission...</span>
                  ) : (
                    <>
                      <span>Secure Consultation Request</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Block: Brand info and Contact details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">

            {/* Brand Brief */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-primary">
                  <ArrowUpRight className="w-6 h-6" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-xl font-bold text-background tracking-wide leading-none">
                    Sangam
                  </span>
                  <span className="text-[10px] text-accent tracking-widest uppercase font-sans mt-1">
                    Value Investing
                  </span>
                </div>
              </div>
              <p className="font-sans text-sm text-background/80 leading-relaxed font-light max-w-sm">
                Quiet private wealth managers serving family offices and affluent individuals. Rooted in traditional value principles, crafting enduring legacies across generations.
              </p>
            </div>

            {/* Direct Contact Details */}
            <div className="space-y-6">
              <h4 className="font-sans text-xs font-semibold text-accent uppercase tracking-widest border-b border-background/10 pb-2">
                Advisory Desk Contact
              </h4>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-sans text-xs text-background/50 uppercase tracking-wider">Telephone Desk</p>
                  <div className="font-sans text-base text-background transition-colors mt-0.5 block space-y-1">
                    <a href="tel:+919374707411" className="hover:text-accent block">
                      +91 9374707411
                    </a>
                    <a href="tel:+918780316413" className="hover:text-accent block">
                      +91 87803 16413
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-sans text-xs text-background/50 uppercase tracking-wider">Secure Electronic Mail</p>
                  <a href="mailto:sangamvalueinvesting@gmail.com" className="font-sans text-base text-background hover:text-accent transition-colors mt-0.5 block break-all">
                    sangamvalueinvesting@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-sans text-xs text-background/50 uppercase tracking-wider">Advisory Headquarters</p>
                  <address className="font-sans text-sm text-background/80 not-italic leading-relaxed mt-0.5 max-w-xs font-light">
                    610 6TH FLOOR THE LENORA OPP ST THOMAS SCHOOL NEW CITYLIGHT ROAD BHARTHANA VESU SURAT-395007,GUJARAT,INDIA
                  </address>
                </div>
              </div>
            </div>

            {/* Navigation links & Socials */}
            <div className="space-y-4 pt-4 border-t border-background/10">
              <div className="flex gap-6 text-sm font-sans">
                <NavLink to="/" className="text-background/70 hover:text-accent transition-colors">Home</NavLink>
                <NavLink to="/services" className="text-background/70 hover:text-accent transition-colors">Services</NavLink>
                <a href="#hero" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-background/70 hover:text-accent transition-colors">Back to Top</a>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Base Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 font-sans text-xs text-background/50 font-light">
          <p>© {new Date().getFullYear()} Sangam Value Investing. All rights reserved.</p>
          {/* <div className="flex gap-4">
            <span className="hover:text-accent cursor-pointer transition-colors">SEBI Registered Advisor (In Process)</span>
            <span>•</span>
            <span className="hover:text-accent cursor-pointer transition-colors">Privacy Charter</span>
          </div> */}
        </div>

      </div>
    </footer>
  );
}