import React from 'react';
import { ArrowRight, ArrowLeft, Phone, Mail, MapPin, Sparkles, ShieldCheck, Globe, CheckCircle2 } from 'lucide-react';
import Serv5Logo from '../Serv5Logo';

export default function Serv5Footer({ onOpenConsultation, lang = 'ar' }) {
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const usefulLinks = [
    { title: isRtl ? 'استضافة المواقع السحابية' : 'Cloud Web Hosting', href: '#services' },
    { title: isRtl ? 'تصميم وبرمجة المواقع المخصصة' : 'Web Design & Architecture', href: '#services' },
    { title: isRtl ? 'تطوير تطبيقات الجوال (iOS & Android)' : 'Mobile App Development', href: '#services' },
    { title: isRtl ? 'تصميم المتاجر الإلكترونية المتكاملة' : 'E-Commerce Platforms', href: '#services' }
  ];

  const quickLinks = [
    { title: isRtl ? 'اتصل بنا مباشرة' : 'Contact Us', href: '#contact' },
    { title: isRtl ? 'طلب عرض سعر فني' : 'Request Technical Quote', action: () => onOpenConsultation('طلب عرض سعر من الفوتر') },
    { title: isRtl ? 'الأسئلة الشائعة والمساعدة' : 'FAQ & Support Hub', href: '#faq' },
    { title: isRtl ? 'استشارة مشروع مجانية' : 'Project Consultation', action: () => onOpenConsultation('استشارة مشروع مجانية من الفوتر') }
  ];

  const offersLinks = [
    { title: isRtl ? 'سيلزاوي (مساعد المبيعات بالذكاء الاصطناعي)' : 'Salezawy AI Sales Assistant', href: '#products' },
    { title: isRtl ? 'سابقة الأعمال والمنصات الحية' : 'Portfolio & Case Studies', href: '#portfolio' },
    { title: isRtl ? 'سيرفرات NVMe السحابية فائقة السرعة' : 'NVMe Dedicated Cloud Servers', href: '#services' }
  ];

  return (
    <footer className="serv5-footer-section" id="serv5-footer">
      <div className="serv5-footer-container">
        {/* 4-Column Main Sitemap & Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-slate-200">
          {/* Col 1: Brand & Pedigree (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="mb-5">
                <Serv5Logo size={42} light={false} />
              </div>
              <p className="text-slate-600 text-base leading-relaxed mb-7 max-w-sm">
                {isRtl
                  ? 'شركة سيرف فايف (SERV5) للحلول الرقمية وتطوير البرمجيات منذ عام 2008. أكثر من 16 عاماً من الخبرة و 20,000 مشروع ناجح عبر الشرق الأوسط.'
                  : 'SERV5 Enterprise Software & Cloud Architectures since 2008. Over 16 years of engineering excellence and 20,000+ delivered platforms across the Middle East.'}
              </p>
            </div>

            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-50 to-orange-50 border border-blue-200/80 text-slate-800 text-sm font-semibold shadow-sm">
                <ShieldCheck size={18} className="text-blue-600 flex-shrink-0" />
                <span>{isRtl ? 'شركة معتمدة رسمياً ومحمية بالكامل' : 'ISO & Enterprise Certified Partner'}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Useful Links (3 cols) */}
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

          {/* Col 3: Quick Links (2 cols) */}
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

          {/* Col 4: Official Contact (3 cols) */}
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

        {/* Bottom Bar: Live SLA & Copyright */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 font-mono">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-slate-700">All Cloud Systems Operational</span>
            <span className="text-slate-400 font-medium">(99.98% SLA)</span>
          </div>

          <p className="text-center sm:text-end text-slate-500">
            © {new Date().getFullYear()} SERV5 Information Technology. {isRtl ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
