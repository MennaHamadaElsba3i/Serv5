import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import Serv5Logo from '../Serv5Logo';

export default function Serv5Footer({ onOpenConsultation, lang = 'ar' }) {
  const isRtl = lang === 'ar';

  const quickLinks = [
    { title: isRtl ? 'تواصل معنا' : 'Contact Us', href: '/contact-us' },
    {
      title: isRtl ? 'اطلب عرض سعر' : 'Request an Estimate',
      action: () => onOpenConsultation(isRtl ? 'طلب عرض سعر لمشروع' : 'Request a Project Estimate')
    },
    { title: isRtl ? 'أعمالنا' : 'Our Work', href: '/portfolio' }
  ];

  return (
    <footer className="serv5-footer-section" id="serv5-footer">
      <div className="serv5-footer-container">
        <div className="serv5-footer-main">
          <div className="serv5-footer-brand">
            <Serv5Logo size={42} light={false} showTagline={false} />
            <p className="serv5-footer-description">
              {isRtl
                ? 'حلول رقمية ومواقع وتطبيقات تناسب احتياجات مشروعك.'
                : 'Digital solutions, websites, and apps built for your business.'}
            </p>
          </div>

          <nav aria-label={isRtl ? 'روابط سريعة' : 'Quick links'}>
            <ul className="serv5-footer-nav-list">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  {link.action ? (
                    <button
                      type="button"
                      onClick={link.action}
                      className="serv5-footer-link text-start cursor-pointer border-none bg-transparent p-0"
                    >
                      {link.title}
                    </button>
                  ) : (
                    <Link to={link.href} className="serv5-footer-link">
                      {link.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="serv5-footer-contact-list">
            <a href="tel:00201288863831" dir="ltr" className="serv5-footer-contact-item">
              <Phone size={16} />
              <span>+20 128 888 63831</span>
            </a>
            <a href="mailto:sales@serv5.com" className="serv5-footer-contact-item">
              <Mail size={16} />
              <span>sales@serv5.com</span>
            </a>
          </div>
        </div>

        <div
          dir="ltr"
          className={`serv5-footer-legal flex text-sm text-slate-500 ${isRtl ? 'justify-end' : 'justify-start'}`}
        >
          <p dir={isRtl ? 'rtl' : 'ltr'} className={isRtl ? 'text-right' : 'text-left'}>
            © {new Date().getFullYear()} {isRtl ? 'سيرف فايف لتقنية المعلومات. جميع الحقوق محفوظة.' : 'SERV5 Information Technology. All rights reserved.'}
          </p>
        </div>
      </div>
      <div className="serv5-footer-watermark" aria-hidden="true">
        SERV5
      </div>
    </footer>
  );
}
