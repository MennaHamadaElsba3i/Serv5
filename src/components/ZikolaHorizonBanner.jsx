import React from 'react';
import { useDispatch } from 'react-redux';
import { openConsultationModal } from '../store/uiSlice';
import { Palette, TrendingUp, Cpu, ArrowUpRight } from 'lucide-react';

export default function ZikolaHorizonBanner() {
  const dispatch = useDispatch();

  const cards = [
    {
      id: 'branding',
      title: 'تصميم الهوية وتجربة المستخدم',
      subtitle: 'UI/UX & Visual Identity',
      desc: 'نخلق لك هوية رقمية تعلق في الذاكرة… هوية تصنع أثراً وتزيد ثقة وولاء عملائك.',
      badge: 'إبداع بصري',
      icon: Palette,
      color: '#E88024',
      // SVG 3D Abstract Visual representation
      renderVisual: () => (
        <div className="card-visual-box amber-glow-box">
          <svg viewBox="0 0 200 160" className="card-3d-svg">
            <defs>
              <linearGradient id="amberGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#E88024" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#B45309" stopOpacity="0.7" />
              </linearGradient>
              <filter id="softGlow1" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            {/* 3D Geometric Cube / Prism */}
            <polygon points="100,20 160,50 160,110 100,80" fill="url(#amberGrad1)" filter="url(#softGlow1)" opacity="0.9" />
            <polygon points="100,20 40,50 40,110 100,80" fill="#D97706" opacity="0.8" />
            <polygon points="100,80 160,110 100,140 40,110" fill="#92400E" opacity="0.95" />
            {/* Ambient Sphere */}
            <circle cx="145" cy="115" r="24" fill="url(#amberGrad1)" opacity="0.6" filter="url(#softGlow1)" />
          </svg>
        </div>
      )
    },
    {
      id: 'marketing',
      title: 'إدارة الحملات والتسويق بالأداء',
      subtitle: 'Performance Marketing & Growth',
      desc: 'نروي قصة علامتك التجارية بلغة الأرقام، ونحقق أعلى عائد على الإنفاق الإعلاني (ROAS).',
      badge: 'نمو رقمي',
      icon: TrendingUp,
      color: '#F59E0B',
      renderVisual: () => (
        <div className="card-visual-box torus-glow-box">
          <svg viewBox="0 0 200 160" className="card-3d-svg">
            <defs>
              <linearGradient id="torusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#E88024" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
              <filter id="torusGlow">
                <feGaussianBlur stdDeviation="10" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            {/* 3D Interlocking Knot / Torus */}
            <ellipse cx="100" cy="80" rx="55" ry="32" fill="none" stroke="url(#torusGrad)" strokeWidth="22" strokeLinecap="round" filter="url(#torusGlow)" transform="rotate(-18 100 80)" />
            <ellipse cx="100" cy="80" rx="28" ry="16" fill="none" stroke="#E88024" strokeWidth="8" opacity="0.9" transform="rotate(-18 100 80)" />
          </svg>
        </div>
      )
    },
    {
      id: 'software',
      title: 'تطوير الأنظمة والتطبيقات السحابية',
      subtitle: 'Cloud ERP & Mobile Apps',
      desc: 'أنظمة سحابية وتطبيقات جوال ذكية تنقلك بخطوات مدروسة من الورقي إلى الذكي ومن الفوضى إلى التنظيم.',
      badge: 'بنية متقدمة',
      icon: Cpu,
      color: '#3B82F6',
      renderVisual: () => (
        <div className="card-visual-box blue-glow-box">
          <svg viewBox="0 0 200 160" className="card-3d-svg">
            <defs>
              <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#1E40AF" />
              </linearGradient>
              <filter id="blueGlow">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            {/* 3D Modern Sphere & Pillars */}
            <circle cx="70" cy="80" r="38" fill="url(#blueGrad)" filter="url(#blueGlow)" opacity="0.9" />
            <rect x="110" y="45" width="24" height="70" rx="12" fill="#2563EB" opacity="0.8" />
            <rect x="140" y="65" width="22" height="50" rx="11" fill="#E88024" opacity="0.85" />
          </svg>
        </div>
      )
    }
  ];

  return (
    <section className="zikola-horizon-section" id="flagship-services">
      {/* ATMOSPHERIC HORIZON GLOW BAND */}
      <div className="horizon-glow-band" aria-hidden="true">
        <div className="horizon-glow-layer primary-glow" />
        <div className="horizon-glow-layer secondary-glow" />
        <div className="horizon-light-sweep" />
      </div>

      {/* BIG WATERMARK TYPOGRAPHY */}
      <div className="horizon-watermark" aria-hidden="true">
        <span>SERV5 SERVICES</span>
      </div>

      {/* 3 FLOATING SHOWCASE CARDS */}
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="horizon-cards-grid">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="horizon-card group"
                onClick={() => dispatch(openConsultationModal(card.title))}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {/* Card Header & Badge */}
                <div className="horizon-card-header">
                  <div className="horizon-card-badge">
                    <Icon size={14} style={{ color: card.color }} />
                    <span>{card.badge}</span>
                  </div>
                  <button className="horizon-arrow-btn" aria-label="Explore service">
                    <ArrowUpRight size={16} />
                  </button>
                </div>

                {/* Card Title & Desc */}
                <div className="horizon-card-content">
                  <h3 className="horizon-card-title">{card.title}</h3>
                  <p className="horizon-card-subtitle">{card.subtitle}</p>
                  <p className="horizon-card-desc">{card.desc}</p>
                </div>

                {/* 3D Visual Object */}
                <div className="horizon-card-visual-wrapper">
                  {card.renderVisual()}
                </div>
              </div>
            );
          })}
        </div>

        {/* WHY CHOOSE US CALLOUT BANNER */}
        <div className="why-choose-banner">
          <div className="why-choose-header">
            <span className="why-choose-pill">لماذا تختار منصة SERV5؟</span>
            <p className="why-choose-lead">
              في "SERV5"، نؤمن أن كل علامة تجارية تستحق أن تعبر إلى واقعها الجديد. نُهيئ لك البنية البرمجية والاستراتيجيات التسويقية التي تضمن لك الصدارة والاستدامة، بخبرة أكثر من 16 عاماً وشراكات مع كبرى المؤسسات.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

