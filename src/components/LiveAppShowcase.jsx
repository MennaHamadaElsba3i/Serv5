import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Smartphone, Laptop, CheckCircle2, ArrowUpRight, Shield, Zap } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import MagneticButton from './MagneticButton';

const apps = [
  {
    id: 'pizza',
    title: 'تطبيق ومنظومة بيتزا بلازا (Pizza Plaza)',
    category: 'FoodTech & Multi-Branch Delivery',
    downloads: '+250K تنزيل',
    orders: '34,000+ طلب شهرياً',
    color: '#E88024',
    features: ['طلب فوري ودفع آبل باي بلمسة واحدة', 'تتبع دقيق للسائق بالـ GPS المباشر', 'مزامنة مع شاشات المطبخ السحابية KDS'],
    previewText: 'Order #8921 • Delivery in 24 min • Apple Pay Confirmed'
  },
  {
    id: 'legal',
    title: 'تطبيق المحامي الذكي (Serv5 Legal Mobile)',
    category: 'GovTech & Law Operations (Najiz Ready)',
    downloads: '75+ مكتب محاماة',
    orders: '180,000+ جلسة مُدارة',
    color: '#3B82F6',
    features: ['مزامنة حية مع بوابة ناجز القضائية', 'تنبيهات فورية بمواعيد الجلسات', 'فوترة إلكترونية معتمدة مع هيئة الزكاة'],
    previewText: 'Case #2026/SA • Hearing Scheduled • Docket Synced'
  },
  {
    id: 'clinic',
    title: 'منظومة العيادات الذكية (MedPulse Mobile)',
    category: 'HealthTech & EMR Booking',
    downloads: '120K+ مريض مسجل',
    orders: '4.9/5 رضا المرضى',
    color: '#10B981',
    features: ['حجز مواعيد الأطباء أونلاين بضغطة زر', 'ملف طبي إلكتروني مشفر وفحوصات مخبرية', 'ربط فوري لشركات التأمين الصحي المعتمدة'],
    previewText: 'Appointment Confirmed • Dr. Tariq • 04:30 PM'
  },
  {
    id: 'retail',
    title: 'متجر فخامة الخليج (Luxury Lifestyle Store)',
    category: 'E-Commerce & High-Conversion Retail',
    downloads: '+180K متسوق نشط',
    orders: '3.8x متوسط سلة الشراء',
    color: '#818CF8',
    features: ['تصفح سلس بزمن تحميل أقل من ثانية', 'دفع فوري عبر Mada و Apple Pay و Tabby', 'لوحة تحكم لإدارة المنتجات والشحن والمخزون'],
    previewText: 'Cart SAR 1,450 • Mada Paid • Free Fast Shipping'
  }
];

export default function LiveAppShowcase() {
  const [activeAppId, setActiveAppId] = useState('pizza');
  const lang = useSelector((state) => state.ui.lang);

  const activeApp = apps.find((a) => a.id === activeAppId) || apps[0];

  return (
    <section id="live-apps" style={{ padding: '6rem 0', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            {lang === 'ar' ? 'تطبيقات وأنظمة حية (مستوحاة من قيمة تك)' : 'LIVE PRODUCTION PLATFORMS'}
          </span>
          <h2 className="section-title">
            {lang === 'ar'
              ? 'تطبيقات وبرمجيات طوّرناها بشغف.. وتعمل بنجاح الآن'
              : 'Production Applications Engineered with Precision'}
          </h2>
          <p className="section-desc">
            {lang === 'ar'
              ? 'نحوّل أفكار عملائنا إلى منصات رقمية متكاملة تسرّع نمو الأعمال وتضاعف المبيعات التشغيلية'
              : 'Explore verified enterprise applications serving hundreds of thousands of daily active users.'}
          </p>

          {/* App Switcher Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.65rem',
              justifyContent: 'center',
              marginTop: '1.75rem'
            }}
          >
            {apps.map((app) => (
              <button
                key={app.id}
                onClick={() => setActiveAppId(app.id)}
                style={{
                  padding: '0.6rem 1.25rem',
                  borderRadius: '9999px',
                  background: activeAppId === app.id ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                  border: activeAppId === app.id ? '1px solid #3B82F6' : '1px solid rgba(255, 255, 255, 0.08)',
                  color: activeAppId === app.id ? '#FFFFFF' : '#94A3B8',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Smartphone size={14} color={activeAppId === app.id ? '#60A5FA' : '#64748B'} />
                <span>{app.title.split('(')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Live App Display Grid */}
        <SpotlightCard
          style={{
            background: 'rgba(10, 15, 28, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              padding: '3rem',
              alignItems: 'center'
            }}
          >
            {/* Left Info */}
            <div>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: activeApp.color,
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  background: `${activeApp.color}15`,
                  border: `1px solid ${activeApp.color}35`,
                  marginBottom: '1rem'
                }}
              >
                {activeApp.category}
              </span>

              <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', lineHeight: '1.3' }}>
                {activeApp.title}
              </h3>

              <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ padding: '0.75rem 1.25rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>النشاط والتفاعل</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#34D399' }}>{activeApp.downloads}</div>
                </div>
                <div style={{ padding: '0.75rem 1.25rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>حجم العمليات</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#60A5FA' }}>{activeApp.orders}</div>
                </div>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.5rem' }}>
                {activeApp.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.92rem', color: '#E2E8F0' }}>
                    <CheckCircle2 size={16} color={activeApp.color} style={{ flexShrink: 0 }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <MagneticButton href="#contact" className="btn-primary" style={{ padding: '0.8rem 1.75rem' }}>
                <span>طلب نظام مماثل لمشروعك</span>
                <ArrowUpRight size={16} />
              </MagneticButton>
            </div>

            {/* Right Mockup Phone Frame */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  width: '290px',
                  height: '520px',
                  borderRadius: '38px',
                  border: '8px solid #1E293B',
                  background: '#030712',
                  boxShadow: `0 25px 60px -15px ${activeApp.color}35, inset 0 0 20px rgba(0,0,0,0.8)`,
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '1.25rem'
                }}
              >
                {/* Notch */}
                <div
                  style={{
                    width: '100px',
                    height: '18px',
                    background: '#1E293B',
                    borderRadius: '0 0 12px 12px',
                    margin: '0 auto 1.5rem'
                  }}
                />

                {/* Simulated Screen UI */}
                <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: `${activeApp.color}25`, border: `1px solid ${activeApp.color}` }} />
                    <span style={{ fontSize: '0.75rem', color: '#64748B', fontFamily: 'var(--font-mono)' }}>LIVE DEMO</span>
                  </div>

                  <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div style={{ fontSize: '0.75rem', color: activeApp.color, fontWeight: 700, marginBottom: '0.25rem' }}>
                      ● ACTIVE SESSION
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#FFFFFF', fontWeight: 600 }}>
                      {activeApp.previewText}
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div style={{ height: '70px', background: 'rgba(59, 130, 246, 0.06)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '0.75rem', color: '#93C5FD' }}>Apple Pay ✓</span>
                    </div>
                    <div style={{ height: '70px', background: 'rgba(16, 185, 129, 0.06)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '0.75rem', color: '#34D399' }}>ZATCA XML ✓</span>
                    </div>
                  </div>

                  <div style={{ marginTop: 'auto', padding: '0.85rem', background: activeApp.color, borderRadius: '14px', textAlign: 'center', color: '#FFFFFF', fontWeight: 700, fontSize: '0.85rem' }}>
                    تجربة فورية عبر المتصفح
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}

