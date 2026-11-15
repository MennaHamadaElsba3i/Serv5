import React, { useState } from 'react';

// Real Partner Logo SVG Components with Authentic Brand Geometry
const AlRajhiLogo = () => (
  <svg viewBox="0 0 170 38" height="34" className="partner-svg" fill="currentColor" aria-label="Al-Rajhi Bank">
    {/* Dual Diamond Mark */}
    <g transform="translate(4, 3)">
      <path d="M16 2 L28 16 L16 30 L4 16 Z" fill="#004b87" />
      <path d="M16 8 L22 16 L16 24 L10 16 Z" fill="#ffffff" />
      <path d="M16 11 L19 16 L16 21 L13 16 Z" fill="#d4af37" />
    </g>
    {/* Text Wordmark */}
    <text x="40" y="19" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="13.5" letterSpacing="0.04em">مصرف الراجحي</text>
    <text x="40" y="31" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="9.5" fill="#64748b" letterSpacing="0.08em">alrajhi bank</text>
  </svg>
);

const ZatcaLogo = () => (
  <svg viewBox="0 0 165 38" height="34" className="partner-svg" fill="currentColor" aria-label="ZATCA Tax & Customs Authority">
    {/* Geometric Crest */}
    <g transform="translate(4, 4)">
      <rect x="2" y="2" width="26" height="26" rx="6" fill="#1b4d3e" />
      <path d="M15 7 L21 15 L15 23 L9 15 Z" fill="#ffffff" />
      <circle cx="15" cy="15" r="2.5" fill="#c49a45" />
    </g>
    <text x="38" y="18" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="13">هيئة الزكاة والضريبة</text>
    <text x="38" y="30" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="9.5" fill="#1b4d3e" letterSpacing="0.1em">ZATCA CERTIFIED</text>
  </svg>
);

const NajizLogo = () => (
  <svg viewBox="0 0 155 38" height="34" className="partner-svg" fill="currentColor" aria-label="Najiz Judicial Portal">
    {/* Justice Scales & Modern Diamond */}
    <g transform="translate(4, 4)">
      <circle cx="15" cy="15" r="14" fill="#0f766e" />
      <path d="M8 18 L15 11 L22 18" stroke="#ffffff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <line x1="15" y1="11" x2="15" y2="24" stroke="#ffffff" strokeWidth="2" />
      <line x1="11" y1="24" x2="19" y2="24" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    </g>
    <text x="38" y="19" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="14">منصة ناجز</text>
    <text x="38" y="31" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="9" fill="#64748b">وزارة العدل السعودية</text>
  </svg>
);

const PizzaPlazaLogo = () => (
  <svg viewBox="0 0 160 38" height="34" className="partner-svg" fill="currentColor" aria-label="Pizza Plaza Chain">
    <g transform="translate(4, 4)">
      <path d="M4 6 C4 6, 15 2, 26 6 L15 28 Z" fill="#e11d48" />
      <circle cx="15" cy="11" r="2.5" fill="#facc15" />
      <circle cx="11" cy="17" r="2" fill="#ffffff" />
      <circle cx="18" cy="18" r="2" fill="#ffffff" />
    </g>
    <text x="38" y="18" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="13.5" letterSpacing="0.02em">PIZZA PLAZA</text>
    <text x="38" y="30" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="9.5" fill="#e11d48">بيتزا بلازا الدولية</text>
  </svg>
);

const MedPulseLogo = () => (
  <svg viewBox="0 0 160 38" height="34" className="partner-svg" fill="currentColor" aria-label="MedPulse Healthcare">
    <g transform="translate(4, 4)">
      <rect x="2" y="2" width="26" height="26" rx="8" fill="#0284c7" />
      <path d="M7 15 L11 15 L13 10 L16 21 L18 13 L20 15 L23 15" stroke="#ffffff" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <text x="38" y="19" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="13.5">MedPulse</text>
    <text x="38" y="31" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="9" fill="#64748b">مجموعة ميدبولس الطبية</text>
  </svg>
);

const LuxeStoreLogo = () => (
  <svg viewBox="0 0 160 38" height="34" className="partner-svg" fill="currentColor" aria-label="LuxeStore Arabia">
    <g transform="translate(4, 4)">
      <circle cx="15" cy="15" r="13" fill="none" stroke="#b45309" strokeWidth="2" />
      <text x="15" y="20" textAnchor="middle" fontFamily="Georgia, serif" fontSize="14" fontWeight="bold" fill="#b45309">L</text>
    </g>
    <text x="38" y="18" fontFamily="Georgia, serif" fontWeight="700" fontSize="13.5" letterSpacing="0.05em">LUXESTORE</text>
    <text x="38" y="30" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="9" fill="#b45309" letterSpacing="0.08em">ARABIA RETAIL</text>
  </svg>
);

const DeltaLogisticsLogo = () => (
  <svg viewBox="0 0 165 38" height="34" className="partner-svg" fill="currentColor" aria-label="Delta Logistics">
    <g transform="translate(4, 4)">
      <polygon points="15,4 27,25 3,25" fill="#2563eb" />
      <polygon points="15,11 22,23 8,23" fill="#ffffff" />
      <polygon points="15,15 19,22 11,22" fill="#ea580c" />
    </g>
    <text x="38" y="18" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="13">DELTA LOGISTICS</text>
    <text x="38" y="30" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="9" fill="#64748b">مجموعة دلتا للشحن</text>
  </svg>
);

const AlNourLogo = () => (
  <svg viewBox="0 0 160 38" height="34" className="partner-svg" fill="currentColor" aria-label="Al-Nour Education">
    <g transform="translate(4, 4)">
      <rect x="2" y="2" width="26" height="26" rx="7" fill="#4f46e5" />
      <path d="M8 19 C8 15, 15 15, 15 12 C15 15, 22 15, 22 19" stroke="#ffffff" strokeWidth="2" fill="none" />
      <circle cx="15" cy="9" r="2" fill="#facc15" />
    </g>
    <text x="38" y="19" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="13.5">مدارس النور</text>
    <text x="38" y="31" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="9" fill="#4f46e5">Al-Nour Education</text>
  </svg>
);

const NaizCafeLogo = () => (
  <svg viewBox="0 0 150 38" height="34" className="partner-svg" fill="currentColor" aria-label="Naiz Cafe">
    <g transform="translate(4, 4)">
      <circle cx="15" cy="15" r="13" fill="#78350f" />
      <path d="M10 12 L20 12 C20 17, 18 20, 15 20 C12 20, 10 17, 10 12 Z" fill="#ffffff" />
      <path d="M20 14 C21 14, 22 15, 22 16 C22 17, 21 18, 20 18" stroke="#ffffff" strokeWidth="1.8" fill="none" />
    </g>
    <text x="38" y="18" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="14" letterSpacing="0.08em">NAIZ CAFE</text>
    <text x="38" y="30" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="9" fill="#78350f">سلسلة كافيهات نايز</text>
  </svg>
);

const DrMoustafaLogo = () => (
  <svg viewBox="0 0 165 38" height="34" className="partner-svg" fill="currentColor" aria-label="Dr. Moustafa Specialized Clinics">
    <g transform="translate(4, 4)">
      <rect x="2" y="2" width="26" height="26" rx="6" fill="#0d9488" />
      <path d="M15 8 V22 M8 15 H22" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
    </g>
    <text x="38" y="18" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="13">عيادات د. مصطفى</text>
    <text x="38" y="30" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="9" fill="#64748b">Specialized Clinics</text>
  </svg>
);

const GomlaMarketLogo = () => (
  <svg viewBox="0 0 160 38" height="34" className="partner-svg" fill="currentColor" aria-label="Gomla Market">
    <g transform="translate(4, 4)">
      <rect x="2" y="2" width="26" height="26" rx="8" fill="#16a34a" />
      <path d="M9 13 H21 L19 22 H11 Z" fill="none" stroke="#ffffff" strokeWidth="2" />
      <circle cx="12" cy="24" r="1.5" fill="#ffffff" />
      <circle cx="18" cy="24" r="1.5" fill="#ffffff" />
    </g>
    <text x="38" y="18" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="13.5">جملة ماركت</text>
    <text x="38" y="30" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="9" fill="#16a34a">Gomla Retail Tech</text>
  </svg>
);

const BoudlGroupLogo = () => (
  <svg viewBox="0 0 165 38" height="34" className="partner-svg" fill="currentColor" aria-label="Boudl Hospitality Group">
    <g transform="translate(4, 4)">
      <rect x="2" y="2" width="26" height="26" rx="6" fill="#1e293b" />
      <path d="M7 19 L10 11 L15 15 L20 11 L23 19 Z" fill="#d97706" />
    </g>
    <text x="38" y="18" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="13.5">مجموعة بودل</text>
    <text x="38" y="30" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="9" fill="#d97706">BOUDL HOTELS & RESORTS</text>
  </svg>
);

export default function PartnersCarousel({ lang = 'ar' }) {
  const isRtl = lang === 'ar';
  const [hoveredPartner, setHoveredPartner] = useState(null);

  // Row 1: Premier Financial, Government & Enterprise Partners
  const row1Partners = [
    { id: 'alrajhi', name: 'Al-Rajhi Bank', Component: AlRajhiLogo },
    { id: 'zatca', name: 'Saudi ZATCA', Component: ZatcaLogo },
    { id: 'najiz', name: 'Najiz Portal', Component: NajizLogo },
    { id: 'pizza-plaza', name: 'Pizza Plaza Global', Component: PizzaPlazaLogo },
    { id: 'medpulse', name: 'MedPulse Healthcare', Component: MedPulseLogo },
    { id: 'luxestore', name: 'LuxeStore Arabia', Component: LuxeStoreLogo }
  ];

  // Row 2: Strategic Regional Brands & Industry Leaders
  const row2Partners = [
    { id: 'delta', name: 'Delta Logistics', Component: DeltaLogisticsLogo },
    { id: 'al-nour', name: 'Al-Nour Education', Component: AlNourLogo },
    { id: 'naiz-cafe', name: 'Naiz Cafe Group', Component: NaizCafeLogo },
    { id: 'dr-moustafa', name: 'Dr. Moustafa Clinics', Component: DrMoustafaLogo },
    { id: 'gomla', name: 'Gomla Market', Component: GomlaMarketLogo },
    { id: 'boudl', name: 'Boudl Hotels & Resorts', Component: BoudlGroupLogo }
  ];

  // Repeat for continuous seamless CSS animation loop
  const row1Loop = [...row1Partners, ...row1Partners, ...row1Partners];
  const row2Loop = [...row2Partners, ...row2Partners, ...row2Partners];

  return (
    <section className="partners-clean-section" id="partners" aria-label="SERV5 Clients and Partners">
      {/* Dual Moving Logo Marquee - Perfectly Centered Criss-Cross X Pattern */}
      <div className="partner-marquee-x-stage" dir="ltr">
        {/* Ribbon 1: Slopes Downward from Left to Right */}
        <div className="partner-marquee-row-x partner-row-x-1">
          <div className="partner-marquee-track track-scroll-left">
            {row1Loop.map((p, idx) => {
              const LogoComp = p.Component;
              return (
                <div
                  key={`r1-${idx}`}
                  className="partner-logo-item"
                  title={p.name}
                  onMouseEnter={() => setHoveredPartner(p.id)}
                  onMouseLeave={() => setHoveredPartner(null)}
                >
                  <LogoComp />
                </div>
              );
            })}
          </div>
        </div>

        {/* Ribbon 2: Slopes Upward from Left to Right (Crossing at Dead Center) */}
        <div className="partner-marquee-row-x partner-row-x-2">
          <div className="partner-marquee-track track-scroll-right">
            {row2Loop.map((p, idx) => {
              const LogoComp = p.Component;
              return (
                <div
                  key={`r2-${idx}`}
                  className="partner-logo-item"
                  title={p.name}
                  onMouseEnter={() => setHoveredPartner(p.id)}
                  onMouseLeave={() => setHoveredPartner(null)}
                >
                  <LogoComp />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
