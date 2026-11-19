import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Serv5Logo from '../Serv5Logo';

export default function Serv5Footer({ onOpenConsultation, lang = 'ar' }) {
  const isRtl = lang === 'ar';

  const usefulLinks = [
    { title: isRtl ? 'استضافة المواقع السحابية' : 'Cloud Web Hosting', href: '#services' },
    { title: isRtl ? 'تصميم وبرمجة المواقع المخصصة' : 'Web Design & Architecture', href: '#services' },
    { title: isRtl ? 'تطوير تطبيقات الجوال (iOS & Android)' : 'Mobile App Development', href: '#services' },
    { title: isRtl ? 'تصميم المتاجر الإلكترونية المتكاملة' : 'E-Commerce Platforms', href: '#services' }
  ];

  const quickLinks = [
    { title: isRtl ? 'تواصل معنا' : 'Contact Us', href: '#contact' },
    {
      title: isRtl ? 'اطلب عرض سعر' : 'Request an Estimate',
      action: () => onOpenConsultation(isRtl ? 'طلب عرض سعر لمشروع' : 'Request a Project Estimate')
    },
    { title: isRtl ? 'أعمالنا' : 'Our Work', href: '#portfolio' },
    { title: isRtl ? 'منتجاتنا' : 'Our Products', href: '#products' }
  ];

  return (
    <footer className="serv5-footer-section" id="serv5-footer">
      <div className="serv5-footer-container">
        <div className="serv5-footer-main grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-4">
            <div>
              <div className="mb-5">
                <Serv5Logo size={52} light={false} showTagline={false} />
              </div>
              <p className="text-slate-600 text-base leading-relaxed mb-7 max-w-sm">
                {isRtl
                  ? 'سيرف فايف شركة مصرية لتطوير البرمجيات والحلول الرقمية منذ 2008. نصمم وننفذ مواقع وتطبيقات وأنظمة أعمال وفق احتياجات كل مشروع.'
                  : 'SERV5 is an Egyptian software and digital solutions company, established in 2008. We build websites, apps, and business systems around each project’s needs.'}
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="serv5-footer-heading">
              {isRtl ? 'الخدمات والحلول الرقمية' : 'Digital Services'}
            </h4>
            <ul className="serv5-footer-nav-list">
              {usefulLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="serv5-footer-link">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="serv5-footer-heading">
              {isRtl ? 'روابط سريعة' : 'Quick Navigation'}
            </h4>
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
                    <a href={link.href} className="serv5-footer-link">
                      {link.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="serv5-footer-heading">
              {isRtl ? 'المقر ومعلومات التواصل' : 'Headquarters & Direct Reach'}
            </h4>
            <div className="serv5-footer-contact-list">
              <div className="serv5-footer-contact-item">
                <div className="serv5-footer-icon-pill">
                  <MapPin size={18} />
                </div>
                <span className="leading-relaxed text-slate-700 text-base">
                  {isRtl
                    ? 'المنصورة، شارع قناة السويس، برج المهندسين، مصر'
                    : 'Engineers Tower, Suez Canal St., Mansoura, Egypt'}
                </span>
              </div>

              <div className="serv5-footer-contact-item">
                <div className="serv5-footer-icon-pill">
                  <Phone size={18} />
                </div>
                <a href="tel:00201288863831" dir="ltr" className="text-blue-600 font-bold hover:text-orange-600 transition-colors text-base">
                  +20 128 888 63831
                </a>
              </div>

              <div className="serv5-footer-contact-item">
                <div className="serv5-footer-icon-pill">
                  <Mail size={18} />
                </div>
                <a href="mailto:sales@serv5.com" className="text-slate-700 hover:text-blue-600 transition-colors text-base font-semibold">
                  sales@serv5.com
                </a>
              </div>
            </div>
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
    </footer>
  );
}
