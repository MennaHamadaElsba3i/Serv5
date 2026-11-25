import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, ArrowUpRight, ChevronUp } from 'lucide-react';
import Serv5Logo from '../Serv5Logo';

export default function Serv5Footer({ onOpenConsultation, lang = 'ar' }) {
  const isRtl = lang === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    isRtl
      ? 'مرحباً سيرف فايف، أود مناقشة مشروع جديد والحصول على استشارة سريعة.'
      : 'Hello SERV5, I would like to discuss a project and get a quick consultation.'
  );

  return (
    <footer className="serv5-footer-section" id="serv5-footer" data-home-scroll-section="footer">
      <div className="serv5-footer-container">
        
        {/* =========================================================
            MINIMAL & HIGH-CONVERSION FOOTER MAIN ROW
            ========================================================= */}
        <div className="serv5-footer-minimal-main">
          
          {/* BRAND */}
          <div className="serv5-footer-brand">
            <Serv5Logo size={52} light={false} showTagline={false} />
            <p className="serv5-footer-tagline">
              {isRtl
                ? 'حلول رقمية ذكية تصنع نمواً حقيقياً لمشروعك منذ 2008.'
                : 'Smart digital solutions engineering real business growth since 2008.'}
            </p>
            <div className="serv5-footer-live-badge">
              <span className="live-dot" />
              <span>{isRtl ? 'متاحون الآن للرد الفوري' : 'Online & ready to talk'}</span>
            </div>
          </div>

          {/* QUICK LINKS & DIRECT ACTION */}
          <div className="serv5-footer-quick-actions">
            <button
              type="button"
              onClick={() => onOpenConsultation(isRtl ? 'طلب عرض سعر فوري' : 'Request Instant Quote')}
              className="serv5-footer-quote-btn"
            >
              <span>{isRtl ? 'اطلب عرض سعر فوري' : 'Request an Estimate'}</span>
              <ArrowUpRight size={16} />
            </button>

            <div className="serv5-footer-nav-row">
              <Link to="/portfolio" className="serv5-minimal-link">
                {isRtl ? 'أعمالنا' : 'Our Work'}
              </Link>
              <span className="link-separator">•</span>
              <Link to="/contact-us" className="serv5-minimal-link">
                {isRtl ? 'تواصل معنا' : 'Contact'}
              </Link>
              <span className="link-separator">•</span>
              <Link to="/about-us" className="serv5-minimal-link">
                {isRtl ? 'من نحن' : 'About'}
              </Link>
            </div>
          </div>

          {/* DIRECT CONTACT CHANNELS */}
          <div className="serv5-footer-contact-minimal">
            <a
              href={`https://wa.me/201288863831?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="serv5-contact-pill whatsapp-pill"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.35.491 1.199.534 1.286.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.087-.177.182-.076.356.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-10.416c-5.522 0-10 4.477-10 10 0 1.76.459 3.413 1.261 4.852l-1.339 4.896 5.01-1.314c1.396.762 2.99 1.196 4.686 1.196 5.523 0 10-4.477 10-10s-4.477-10-10-10z" />
              </svg>
              <span>{isRtl ? 'واتساب مباشر' : 'WhatsApp'}</span>
            </a>

            <a href="tel:00201288863831" dir="ltr" className="serv5-contact-pill">
              <Phone size={14} className="text-orange-500" />
              <span>+20 128 888 63831</span>
            </a>

            <a href="mailto:sales@serv5.com" className="serv5-contact-pill">
              <Mail size={14} className="text-blue-500" />
              <span>sales@serv5.com</span>
            </a>
          </div>

        </div>

        {/* BOTTOM LEGAL ROW */}
        <div className="serv5-footer-minimal-bottom">
          <p className="serv5-footer-copy">
            © {new Date().getFullYear()}{' '}
            <strong>{isRtl ? 'سيرف فايف لتقنية المعلومات' : 'SERV5 Information Technology'}</strong>
            . {isRtl ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="serv5-footer-top-btn"
            title={isRtl ? 'الرجوع للأعلى' : 'Back to top'}
          >
            <span>{isRtl ? 'للأعلى' : 'Top'}</span>
            <ChevronUp size={15} />
          </button>
        </div>

      </div>

      {/* GIANT ARCHITECTURAL WATERMARK (LARGER, SMOOTH & CRISP) */}
      <div className="serv5-footer-watermark" aria-hidden="true">
        SERV5
      </div>

      {/* ATMOSPHERIC MIST / FOG FROM THE BOTTOM */}
      <div className="serv5-footer-bottom-mist" aria-hidden="true" />
    </footer>
  );
}
