import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X, Phone, Globe, ChevronDown, Sun, Moon } from 'lucide-react';

export default function Navbar({ onOpenConsultation, lang = 'ar', onToggleLang, theme = 'light', onToggleTheme }) {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navbarRef = useRef(null);
  const isRtl = lang === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const navLinks = isRtl
    ? [
      { label: 'الرئيسية', href: '/' },
      {
        label: 'من نحن',
        href: '/about-us',
        dropdown: [
          { label: 'من نحن', href: '/about-us' },
          { label: 'الأسئلة الشائعة', href: '/faq' },
          { label: 'الحسابات البنكية', href: '/bank-accounts' },
          { label: 'الوظائف', href: '/careers' }
        ]
      },
      {
        label: 'خدماتنا',
        href: '/services',
        dropdown: [
          { label: 'استضافة المواقع', href: '/services/web-hosting' },
          { label: 'تصميم الويب وتطويره', href: '/services/web-design' },
          { label: 'تصميم واجهة وتجربة المستخدم', href: '/services/ui-ux' },
          { label: 'تحسين محركات البحث SEO', href: '/services/seo' },
          { label: 'برمجة تطبيقات الجوال', href: '/services/mobile-apps' },
          { label: 'تصميم متاجر إلكترونية', href: '/services/ecommerce' },
          { label: 'التسويق الرقمي والحملات', href: '/services/digital-marketing' },
          { label: 'الدعم الفني والصيانة', href: '/services/tech-support' },
          { label: 'استشارة للمشروع', href: '/project-consultation' },
          { label: 'نموذج طلب عرض سعر', href: '/request-quote' }
        ]
      },
      { label: 'أعمالنا', href: '/portfolio' },
      { label: 'المدونة', href: '/blog' },
      { label: 'منتجاتنا', href: '/our-products' },
      { label: 'اتصل بنا', href: '/contact-us' }
    ]
    : [
      { label: 'Home', href: '/' },
      {
        label: 'About',
        href: '/about-us',
        dropdown: [
          { label: 'About SERV5', href: '/about-us' },
          { label: 'FAQ', href: '/faq' },
          { label: 'Bank Accounts', href: '/bank-accounts' },
          { label: 'Careers', href: '/careers' }
        ]
      },
      {
        label: 'Services',
        href: '/services',
        dropdown: [
          { label: 'Web Hosting', href: '/services/web-hosting' },
          { label: 'Web Design & Development', href: '/services/web-design' },
          { label: 'UI/UX Design', href: '/services/ui-ux' },
          { label: 'SEO', href: '/services/seo' },
          { label: 'Mobile Apps', href: '/services/mobile-apps' },
          { label: 'E-Commerce', href: '/services/ecommerce' },
          { label: 'Digital Marketing', href: '/services/digital-marketing' },
          { label: 'Technical Support', href: '/services/tech-support' },
          { label: 'Project Consultation', href: '/project-consultation' },
          { label: 'Request a Quote', href: '/request-quote' }
        ]
      },
      { label: 'Our Work', href: '/portfolio' },
      { label: 'Blog', href: '/blog' },
      { label: 'Products', href: '/our-products' },
      { label: 'Contact', href: '/contact-us' }
    ];

  return (
    <header ref={navbarRef} className={`world-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid px-3 px-xl-5">
        <div className="navbar-inner">
          {/* Brand Logo */}
          <Link to="/" className="navbar-brand">
            <img className="navbar-brand-mark" src="/serv5-official-logo.webp" alt="SERV5" />
          </Link>

          {/* Desktop Nav Items */}
          <nav className="desktop-nav d-none d-xl-flex">
            <ul className="nav-menu">
              {navLinks.map((link, idx) => (
                <li
                  key={idx}
                  className={`nav-item${link.dropdown ? ' has-dropdown' : ''}`}
                  onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                >
                  <Link
                    to={link.href}
                    className="nav-link"
                    onClick={() => setOpenDropdown(null)}
                    aria-haspopup={link.dropdown ? 'true' : undefined}
                    aria-expanded={link.dropdown ? openDropdown === link.label : undefined}
                  >
                    {link.label}
                    {link.dropdown && <ChevronDown size={12} className="nav-dropdown-chevron" />}
                  </Link>
                  {link.dropdown && openDropdown === link.label && (
                    <div className="nav-dropdown" dir={isRtl ? 'rtl' : 'ltr'}>
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="nav-dropdown-link"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Action CTAs */}
          <div className="navbar-actions">
            {/* Theme Switcher Pill (Dark / Light Mode) */}
            {onToggleTheme && (
              <button
                type="button"
                onClick={onToggleTheme}
                className="theme-switcher-pill"
                title={
                  theme === 'dark'
                    ? (isRtl ? 'التبديل إلى الوضع النهاري (Light Mode)' : 'Switch to Light Mode')
                    : (isRtl ? 'التبديل إلى الوضع الليلي (Dark Mode)' : 'Switch to Dark Mode')
                }
                aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                <div className="theme-pill-icon-wrap">
                  {theme === 'dark' ? (
                    <Sun size={14} className="theme-sun-icon" />
                  ) : (
                    <Moon size={14} className="theme-moon-icon" />
                  )}
                </div>
                <span className="theme-label">
                  {theme === 'dark' ? (isRtl ? 'نهاري' : 'Light') : (isRtl ? 'ليلي' : 'Dark')}
                </span>
              </button>
            )}

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

            {/* Premium Formatted Phone Number Pill */}
            <a
              href="tel:+201288744744"
              className="nav-phone-link"
              title={isRtl ? 'اتصل بنا مباشرة: 01288744744' : 'Call Direct: +20 128 874 4744'}
              dir="ltr"
            >
              <span className="phone-icon-bubble">
                <Phone size={12} />
              </span>
              <span className="nav-phone-num" dir="ltr">
                +20 128 874 4744
              </span>
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
              className="mobile-toggle-btn d-xl-none"
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
            {/* Mobile Nav Top Bar for Language & Theme Switching */}
            <div className="mobile-nav-top-bar d-flex align-items-center gap-2 mb-3 pb-3 border-bottom">
              {onToggleTheme && (
                <button
                  type="button"
                  onClick={onToggleTheme}
                  className="theme-switcher-pill"
                  title={
                    theme === 'dark'
                      ? (isRtl ? 'التبديل إلى الوضع النهاري' : 'Switch to Light Mode')
                      : (isRtl ? 'التبديل إلى الوضع الليلي' : 'Switch to Dark Mode')
                  }
                >
                  <div className="theme-pill-icon-wrap">
                    {theme === 'dark' ? (
                      <Sun size={14} className="theme-sun-icon" />
                    ) : (
                      <Moon size={14} className="theme-moon-icon" />
                    )}
                  </div>
                  <span className="theme-label">
                    {theme === 'dark'
                      ? (isRtl ? 'الوضع النهاري' : 'Light Mode')
                      : (isRtl ? 'الوضع الليلي' : 'Dark Mode')}
                  </span>
                </button>
              )}
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
            </div>

            <ul className="mobile-menu-links">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  {link.dropdown ? (
                    <div className="mobile-nav-dropdown">
                      <button
                        type="button"
                        className="mobile-nav-link mobile-nav-dropdown-toggle"
                        onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                        aria-expanded={openDropdown === link.label}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          size={16}
                          className={openDropdown === link.label ? 'mobile-dropdown-chevron open' : 'mobile-dropdown-chevron'}
                        />
                      </button>
                      {openDropdown === link.label && (
                        <div className="mobile-nav-submenu">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.label}
                              to={item.href}
                              className="mobile-nav-sublink"
                              onClick={() => {
                                setOpenDropdown(null);
                                setMobileMenuOpen(false);
                              }}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className="mobile-nav-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
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
