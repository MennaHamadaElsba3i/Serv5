import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { Check, Sparkles, ArrowRight, Zap } from 'lucide-react';
import { fetchPricingPackages } from '../api/agencyApi';
import { setPricingCycle, openConsultationModal } from '../store/uiSlice';
import SpotlightCard from './SpotlightCard';
import MagneticButton from './MagneticButton';

export default function PricingPackages() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.ui.lang);
  const cycle = useSelector((state) => state.ui.pricingCycle);

  const { data: packages, isLoading } = useQuery({
    queryKey: ['pricingPackages', lang, cycle],
    queryFn: () => fetchPricingPackages(lang, cycle),
    staleTime: 1000 * 60 * 5
  });

  return (
    <section id="pricing" style={{ padding: '6rem 0', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            {lang === 'ar' ? 'أسعار تنافسية وخطط مرنة (مستوحاة من زيكولا وفكرتك)' : 'TRANSPARENT PRICING TIERS'}
          </span>
          <h2 className="section-title">
            {lang === 'ar'
              ? 'خطط استثمارية واضحة تناسب كل مراحل نمو مشروعك'
              : 'Flexible Investment Plans Built for Every Growth Stage'}
          </h2>
          <p className="section-desc">
            {lang === 'ar'
              ? 'لا نبيع خدمات تقليدية بل نصنع بوابات نمو رقمية مستدامة تضمن أقصى عائد على استثمارك (ROAS)'
              : 'Transparent, high-yield engineering and growth packages designed for predictable scaling.'}
          </p>

          {/* Monthly / Annual Toggle Switch */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '0.35rem 0.5rem',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              marginTop: '1.5rem'
            }}
          >
            <button
              onClick={() => dispatch(setPricingCycle('monthly'))}
              style={{
                background: cycle === 'monthly' ? '#2563EB' : 'transparent',
                color: cycle === 'monthly' ? '#FFFFFF' : '#94A3B8',
                border: 'none',
                padding: '0.45rem 1.25rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {lang === 'ar' ? 'اشتراك شهري' : 'Monthly'}
            </button>

            <button
              onClick={() => dispatch(setPricingCycle('annual'))}
              style={{
                background: cycle === 'annual' ? '#2563EB' : 'transparent',
                color: cycle === 'annual' ? '#FFFFFF' : '#94A3B8',
                border: 'none',
                padding: '0.45rem 1.25rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <span>{lang === 'ar' ? 'اشتراك سنوي' : 'Annual'}</span>
              <span
                style={{
                  background: 'rgba(16, 185, 129, 0.2)',
                  color: '#34D399',
                  fontSize: '0.68rem',
                  padding: '0.1rem 0.45rem',
                  borderRadius: '9999px',
                  fontWeight: 700
                }}
              >
                {lang === 'ar' ? 'وفر 20%' : 'Save 20%'}
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch'
          }}
        >
          {isLoading && (
            <div style={{ color: '#94A3B8', textAlign: 'center', gridColumn: '1 / -1', padding: '3rem' }}>
              جاري تحميل الباقات والبيانات عبر TanStack Query...
            </div>
          )}

          {packages &&
            packages.map((pkg) => (
              <SpotlightCard
                key={pkg.id}
                spotlightColor={pkg.popular ? 'rgba(232, 128, 36, 0.2)' : 'rgba(59, 130, 246, 0.15)'}
                className={`pricing-card ${pkg.popular ? 'popular-card' : ''}`}
                style={{
                  border: pkg.popular
                    ? '1.5px solid rgba(232, 128, 36, 0.5)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  {/* Badge */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1rem'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        background: pkg.popular ? 'rgba(232, 128, 36, 0.15)' : 'rgba(59, 130, 246, 0.12)',
                        color: pkg.popular ? '#F59E0B' : '#60A5FA',
                        fontWeight: 700,
                        border: pkg.popular ? '1px solid rgba(232, 128, 36, 0.3)' : '1px solid rgba(59, 130, 246, 0.25)'
                      }}
                    >
                      {pkg.badge}
                    </span>
                    {pkg.popular && <Sparkles size={16} color="#F59E0B" />}
                  </div>

                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.4rem' }}>
                    {pkg.name}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '1.5rem' }}>
                    {pkg.subtitle}
                  </p>

                  {/* Price */}
                  <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                    <span
                      style={{
                        fontSize: '2.6rem',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                        color: pkg.popular ? '#F59E0B' : '#FFFFFF'
                      }}
                    >
                      {pkg.priceMonthly.toLocaleString()}
                    </span>
                    <span style={{ color: 'var(--text-dim)', fontSize: '0.88rem', fontWeight: 600 }}>
                      {pkg.currency}
                    </span>
                  </div>

                  {/* Features */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', flexGrow: 1, marginBottom: '2.5rem' }}>
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.88rem', color: '#CBD5E1', lineHeight: '1.5' }}>
                        <div
                          style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            background: pkg.popular ? 'rgba(232, 128, 36, 0.2)' : 'rgba(59, 130, 246, 0.15)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: pkg.popular ? '#F59E0B' : '#60A5FA',
                            flexShrink: 0,
                            marginTop: '2px'
                          }}
                        >
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Button */}
                  <MagneticButton
                    onClick={() => dispatch(openConsultationModal(pkg.name))}
                    className={pkg.popular ? 'btn-primary' : 'btn-outline'}
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      padding: '0.85rem 1.5rem',
                      background: pkg.popular
                        ? 'linear-gradient(135deg, #E88024 0%, #D97706 100%)'
                        : 'rgba(255, 255, 255, 0.05)',
                      boxShadow: pkg.popular ? '0 4px 20px rgba(232, 128, 36, 0.35)' : 'none'
                    }}
                  >
                    <span>{lang === 'ar' ? 'ابدأ مع هذه الباقة' : 'Select Plan & Consult'}</span>
                    <ArrowRight size={15} />
                  </MagneticButton>
                </div>
              </SpotlightCard>
            ))}
        </div>
      </div>
    </section>
  );
}

