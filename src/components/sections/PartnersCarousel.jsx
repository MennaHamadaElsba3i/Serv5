import React, { useState } from 'react';

export default function PartnersCarousel({ lang = 'ar' }) {
  const isRtl = lang === 'ar';
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem((prev) => (prev === item ? null : item));
  };

  const blueRibbonItems = isRtl
    ? [
        'شراكات حكومية ومؤسسية موثوقة',
        'بنك الراجحي',
        'هيئة الزكاة والضريبة والجمارك (ZATCA)',
        'دعم فني وتقني 24/7',
        'صيدليات مدبولس',
        'بنية سحابية فائقة الأمان',
        'أعلى معايير الحماية والأداء',
        'شركاء النجاح في مصر والسعودية'
      ]
    : [
        'Trusted Government & Enterprise Alliances',
        'Al-Rajhi Bank',
        'ZATCA Tax & Customs Authority',
        '24/7 Dedicated Support',
        'MedPulse Healthcare Group',
        'Tier-4 High Availability Cloud',
        'Top Security & Compliance Standards',
        'Strategic Partners Across Middle East'
      ];

  const navyRibbonItems = isRtl
    ? [
        'أنظمة برمجية متطورة',
        'بيتزا بلازا',
        'نايز كافيه',
        'تطبيقات الجوال عالية السرعة',
        'منصات التجارة الإلكترونية المتقدمة',
        'لوكس ستور',
        'أحدث المعايير البرمجية الحديثة',
        'أكثر من 500+ عميل ومؤسسة رائدة'
      ]
    : [
        'Modern Software Architectures',
        'Pizza Plaza',
        'Nauz Cafe',
        'High-Velocity Mobile Platforms',
        'Next-Gen E-Commerce Systems',
        'LuxeStore',
        'Cutting-Edge Tech Stack',
        'Over 500+ Satisfied Enterprise Clients'
      ];

  // Tripled for infinite smooth seamless loops
  const blueLoop = [...blueRibbonItems, ...blueRibbonItems, ...blueRibbonItems];
  const navyLoop = [...navyRibbonItems, ...navyRibbonItems, ...navyRibbonItems];

  return (
    <section className="partners-world-section" id="partners">
      {/* =========================================================
          DUAL COUNTER-SCROLLING ANGLED RIBBONS (REFERENCE IMAGE 2)
          "عكس عكاس" - Blue scrolling one way, Navy scrolling opposite!
         ========================================================= */}
      <div className="angled-ribbon-stage" aria-label="Enterprise Alliances Counter Ticker">
        {/* Top/Back Electric Blue Ribbon (Direction 1) */}
        <div className="angled-ribbon ribbon-accent-blue">
          <div className={`ribbon-marquee-track track-reverse ${activeItem ? 'is-paused' : ''}`}>
            {blueLoop.map((item, idx) => {
              const isSelected = activeItem === item;
              return (
                <span
                  key={`blue-${idx}`}
                  className={`ribbon-item ${isSelected ? 'is-active' : ''}`}
                  onClick={() => handleItemClick(item)}
                  role="button"
                  tabIndex={0}
                  title={isRtl ? `شريك نجاح: ${item}` : `Partner: ${item}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleItemClick(item);
                    }
                  }}
                >
                  <span className="ribbon-text">{item}</span>
                  <span className="ribbon-star star-white" aria-hidden="true">✦</span>
                </span>
              );
            })}
          </div>
        </div>

        {/* Bottom/Front Dark Navy Ribbon (Direction 2 - Counter direction!) */}
        <div className="angled-ribbon ribbon-main-navy">
          <div className={`ribbon-marquee-track track-forward ${activeItem ? 'is-paused' : ''}`}>
            {navyLoop.map((item, idx) => {
              const isSelected = activeItem === item;
              return (
                <span
                  key={`navy-${idx}`}
                  className={`ribbon-item ${isSelected ? 'is-active' : ''}`}
                  onClick={() => handleItemClick(item)}
                  role="button"
                  tabIndex={0}
                  title={isRtl ? `شريك نجاح: ${item}` : `Partner: ${item}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleItemClick(item);
                    }
                  }}
                >
                  <span className="ribbon-text">{item}</span>
                  <span className="ribbon-star star-orange" aria-hidden="true">✦</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
