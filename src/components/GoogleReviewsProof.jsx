import React from 'react';
import { useSelector } from 'react-redux';
import { Star, ShieldCheck, TrendingUp, Users, CheckCircle, Award } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function GoogleReviewsProof() {
  const lang = useSelector((state) => state.ui.lang);

  const reviews = [
    {
      author: 'فيصل السبيعي',
      company: 'مجموعة السبيعي للتجارة والمقاولات - الرياض',
      rating: 5,
      date: 'منذ أسبوعين',
      text: 'تجربتنا مع سيرف فايف كانت نقلة نوعية لمتجرنا وتطبيقنا. زادت سرعة التحميل لدرجة 100/100 على جوجل، ومبيعاتنا الرقمية تضاعفت بنسبة 280% خلال 3 أشهر فقط. احترافية عالية ودعم فني متميز.'
    },
    {
      author: 'د. خالد المنشاوي',
      company: 'مجموعة مراكز المنشاوي الطبية - القاهرة',
      rating: 5,
      date: 'منذ شهر',
      text: 'طوروا لنا سيستم العيادات وحجز المواعيد مع ربط اسكريبت الواتساب الرسمي. وفروا علينا وقت ومجهود كبير، وأصبح حجز المواعيد آلياً بنسبة 100%. شكراً لفريق العمل المبدع.'
    },
    {
      author: 'المحامي سعد بن عبد العزيز',
      company: 'شركة الصفوة للمحاماة والاستشارات القانونية',
      rating: 5,
      date: 'منذ شهرين',
      text: 'نظام المحامي الإلكتروني المقدم من سيرف فايف ممتاز جداً ومنظم للجلسات والقضايا، ومربوط بسلاسة تامة مع متطلبات الفوترة الإلكترونية. أنصح بالتعامل معهم بشدة.'
    }
  ];

  const differentiators = [
    {
      icon: TrendingUp,
      title: 'تسويق مبني على الأداء والأرقام (ROAS)',
      desc: 'لا نهدر ميزانيتك على إعلانات عشوائية، بل نربط كل ريال يُنفق بنتيجة بيعية واضحة وقابلة للقياس.'
    },
    {
      icon: ShieldCheck,
      title: 'جاهزية قانونية وتقنية 100%',
      desc: 'توافق كامل مع متطلبات هيئة الزكاة (ZATCA)، بوابات الدفع الخليجية (Mada & Apple Pay)، وحماية خوادم مشفرة.'
    },
    {
      icon: Users,
      title: 'خبرة عريقة تفوق 16 عاماً',
      desc: 'فريق مهندسين ومسوقين نفذ أكثر من 20,000 مشروع ناجح في 14 دولة منذ عام 2008.'
    },
    {
      icon: Award,
      title: 'سرعة استجابة ودعم فني 24/7',
      desc: 'فريق دعم فني متواجد على مدار الساعة لضمان استقرار أنظمتك وحملاتك بدون أي انقطاع.'
    }
  ];

  return (
    <section id="proof" style={{ padding: '6rem 0', position: 'relative', zIndex: 10 }}>
      <div className="container">
        {/* Google Reviews Banner (Fkretk style) */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(26, 36, 60, 0.7) 0%, rgba(14, 20, 34, 0.9) 100%)',
            border: '1px solid rgba(96, 165, 250, 0.25)',
            borderRadius: '24px',
            padding: '2.5rem 3rem',
            marginBottom: '4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <span
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  color: '#4285F4',
                  fontSize: '0.9rem'
                }}
              >
                G
              </span>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF' }}>
                {lang === 'ar' ? 'تقييمات موثقة على Google Reviews' : 'Verified Google Reviews'}
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              {lang === 'ar'
                ? 'آراء وتجارب حقيقية من عملائنا في المملكة العربية السعودية ومصر والخليج'
                : 'Real feedback and business impact testimonials from verified enterprise leaders.'}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.6rem', fontWeight: 800, color: '#F59E0B', lineHeight: 1 }}>4.9</div>
              <div style={{ display: 'flex', gap: '2px', color: '#F59E0B', margin: '0.35rem 0' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#F59E0B" />
                ))}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>148+ تقييم معتمد</div>
            </div>
          </div>
        </div>

        {/* Reviews Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem', marginBottom: '5rem' }}>
          {reviews.map((rev, idx) => (
            <SpotlightCard key={idx} style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', gap: '2px', color: '#F59E0B' }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#F59E0B" />
                  ))}
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>{rev.date}</span>
              </div>
              <p style={{ color: '#E2E8F0', fontSize: '0.92rem', lineHeight: '1.7', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                "{rev.text}"
              </p>
              <div>
                <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 700 }}>{rev.author}</h4>
                <span style={{ color: '#60A5FA', fontSize: '0.8rem' }}>{rev.company}</span>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Why Choose Us (ليش تختارنا كشريك تسويق وبرمجة؟) */}
        <div className="section-header">
          <span className="section-tag">{lang === 'ar' ? 'القيمة التنافسية' : 'WHY PARTNER WITH SERV5'}</span>
          <h2 className="section-title">
            {lang === 'ar' ? 'ليش تختار سيرف فايف كشريكك الرقمي؟' : 'Why Leading Brands Choose SERV5'}
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {differentiators.map((diff, idx) => {
            const Icon = diff.icon;
            return (
              <SpotlightCard key={idx} style={{ padding: '2rem' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(59, 130, 246, 0.12)',
                    border: '1px solid rgba(96, 165, 250, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#60A5FA',
                    marginBottom: '1.25rem'
                  }}
                >
                  <Icon size={22} />
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.65rem' }}>
                  {diff.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.6' }}>
                  {diff.desc}
                </p>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

