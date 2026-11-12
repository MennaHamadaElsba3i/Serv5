import React from 'react';
import { useDispatch } from 'react-redux';
import { openConsultationModal } from '../store/uiSlice';
import { Zap, ShieldCheck, BarChart3, Users, ArrowRight } from 'lucide-react';
import Serv5Logo from './Serv5Logo';

export default function LandscapeGatesSection() {
  const dispatch = useDispatch();

  const features = [
    {
      id: 'speed',
      icon: Zap,
      title: 'الريادة والتطوير المستمر',
      desc: 'أكواد برمجية نظيفة وبنية تحتية سحابية فائقة الأمان والسرعة تضمن لك أعلى معايير الاستقرار وسرعة التحميل 100/100.',
      metric: '99.98% Uptime'
    },
    {
      id: 'integration',
      icon: ShieldCheck,
      title: 'تكامل كامل مع الأنظمة وبوابات الدفع',
      desc: 'ربط سلس وشامل مع بوابات الدفع الإلكتروني (Mada, Apple Pay, Visa)، وأنظمة الـ ERP والـ CRM، والفوترة السحابية المعتمدة.',
      metric: '100% جاهزية الربط'
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: 'تحليلات ذكية وقرارات مبنية على بيانات',
      desc: 'نُضيء طريقك بأرقام دقيقة ترشدك، ولوحات تحكم تفاعلية تكشف لك سلوك العملاء وتضاعف معدل التحويل (Conversion Rate).',
      metric: '+180% تحويلات مبيعات'
    },
    {
      id: 'support',
      icon: Users,
      title: 'شراكة حقيقية ودعم استباقي 24/7',
      desc: 'فريق هندسي وتسويقي متكامل مكرس لنمو مشروعك، يعمل معك كذراع تقني استراتيجي يضمن تفوق علامتك التجارية دائماً.',
      metric: '24/7 دعم فني'
    }
  ];

  return (
    <section className="landscape-gates-section" id="why-serv5">
      {/* EPIC LANDSCAPE BACKGROUND IMAGE WITH SEAMLESS FADE */}
      <div className="landscape-bg-container" aria-hidden="true">
        <div
          className="landscape-bg-image"
          style={{ backgroundImage: `url('/serv5_landscape_bg.jpg')` }}
        />
        <div className="landscape-fade-overlay" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* CENTER WATERMARK LOGO */}
        <div className="landscape-watermark-logo">
          <Serv5Logo size={42} />
        </div>

        {/* SECTION HEADLINE */}
        <div className="landscape-header text-center">
          <h2 className="landscape-title">
            لا نبيع خدمات، بل نفتح بوابات
          </h2>
          <p className="landscape-subtitle">
            نأخذ بيدك خطوة بخطوة لبناء منظومة برمجية وتسويقية متكاملة تُطلق العنان لإمكانيات مشروعك وتحقق أهدافك التوسعية بأعلى كفاءة.
          </p>
        </div>

        {/* 4 FEATURE PANELS (GRID 2x2) */}
        <div className="landscape-features-grid">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div key={feat.id} className="landscape-feature-card group">
                <div className="feature-card-header">
                  <div className="feature-icon-wrapper">
                    <Icon size={22} className="feature-icon" />
                  </div>
                  <span className="feature-metric-pill">{feat.metric}</span>
                </div>
                <h3 className="feature-title">{feat.title}</h3>
                <p className="feature-desc">{feat.desc}</p>
                <div className="feature-glow-corner" />
              </div>
            );
          })}
        </div>

        {/* BOTTOM CTA BUTTON WITH GLOW */}
        <div className="landscape-cta-box text-center">
          <button
            onClick={() => dispatch(openConsultationModal('استشارة بوابات النمو الرقمي'))}
            className="landscape-glow-btn"
          >
            <span>احجز استشارة مجانية مع خبرائنا</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

