import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Sparkles, Phone, Globe } from 'lucide-react';
import Serv5Logo from '../Serv5Logo';

export default function Navbar({ onOpenConsultation, lang = 'ar', onToggleLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isRtl = lang === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = isRtl
    ? [
        { label: 'عن الشركة', href: '#about' },
        { label: 'خدماتنا', href: '#services' },
        { label: 'منتجاتنا', href: '#products' },
        { label: 'أعمالنا', href: '#portfolio' },
        { label: 'لماذا سيرف فايف', href: '#why-serv5' },
        { label: 'المدونة', href: '#blog' },
        { label: 'تواصل معنا', href: '#contact' }
      ]
    : [
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Products', href: '#products' },
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Why SERV5', href: '#why-serv5' },
        { label: 'Blog', href: '#blog' },
        { label: 'Contact', href: '#contact' }
      ];

  return (
    <header className={`world-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
          {/* Brand Logo */}
          <a href="#hero" className="navbar-brand">
            <Serv5Logo size={38} />
          </a>

          {/* Desktop Nav Items */}
          <nav className="desktop-nav">
            <ul className="nav-menu">
              {navLinks.map((link, idx) => (
                <li key={idx} className="nav-item">
                  <a href={link.href} className="nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action CTAs */}
          <div className="navbar-actions">
            {/* Language Switcher Pill */}
            {onToggleLang && (
              <button
                type="button"
                onClick={onToggleLang}
                className="lang-switcher-pill"
                title={isRtl ? 'Switch to English' : 'التحويل إلى العربية'}
              >
                <Globe size={14} className="lang-globe-icon" />
                <span className="lang-label">{isRtl ? 'English' : 'العربية'}</span>
              </button>
            )}

            <a href="tel:+201288744744" className="nav-phone-link" title={isRtl ? 'اتصل بنا مباشرة' : 'Call Us Direct'}>
              <Phone size={14} />
              <span className="d-none d-lg-inline">+20 128 874 4744</span>
            </a>

            <button
              onClick={() => onOpenConsultation(isRtl ? 'طلب استشارة من القائمة الرئيسية' : 'Navbar Direct Launch')}
              className="btn-launch-nav"
            >
              <span>{isRtl ? 'ابدأ مشروعك' : 'Launch Project'}</span>
              <ArrowUpRight size={15} />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle-btn d-lg-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-nav-panel">
          <div className="container">
            <ul className="mobile-menu-links">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="mobile-nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mobile-nav-cta">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation('Mobile Nav Launch');
                }}
                className="btn-launch-nav w-100 justify-content-center"
              >
                <span>Launch Project</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
