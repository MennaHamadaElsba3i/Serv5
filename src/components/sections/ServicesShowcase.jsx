import React, { useEffect, useRef, useState } from 'react';
import {
  Smartphone,
  Globe,
  ShoppingBag,
  Palette,
  Server,
  TrendingUp,
  Search,
  ShieldCheck,
  ArrowUpRight,
  Eye,
  ChevronDown
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesShowcase({ onOpenConsultation, lang = 'ar' }) {
  const isRtl = lang === 'ar';
  const sectionRef = useRef(null);
  const visionImageRef = useRef(null);
  const portalScreenRef = useRef(null);
  const servicesListRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const [showAllServices, setShowAllServices] = useState(false);

  // Exact Services catalog from Reference Image 5
  const allServices = [
    {
      id: 'mobile-apps',
      en: 'Mobile Applications',
      ar: 'تطبيقات الجوال الذكية (iOS & Android)',
      tagEn: 'Native & Cross-Platform High Velocity',
      tagAr: 'تطبيقات أصلية وهجينة فائقة السرعة والأداء',
      icon: Smartphone
    },
    {
      id: 'web-design',
      en: 'Web Design & Development',
      ar: 'تصميم وتطوير المواقع والمنصات الرقمية',
      tagEn: 'Enterprise Cloud-Native Architecture',
      tagAr: 'منظومات ويب متقدمة تواكب أعلى المعايير العالمية',
      icon: Globe
    },
    {
      id: 'ecommerce',
      en: 'E-commerce Solutions',
      ar: 'حلول المتاجر والتجارة الإلكترونية المتكاملة',
      tagEn: 'Omni-Channel & ZATCA Compliant',
      tagAr: 'ربط متكامل مع بوابات الدفع والشحن والفوترة الإلكترونية',
      icon: ShoppingBag
    },
    {
      id: 'ui-ux',
      en: 'UI/UX Design',
      ar: 'تصميم واجهات وتجربة المستخدم (UI/UX)',
      tagEn: 'Human-Centered Digital Experiences',
      tagAr: 'واجهات استثنائية هندسية تضمن أعلى معدلات التحويل',
      icon: Palette
    },
    {
      id: 'web-hosting',
      en: 'Web Hosting & Cloud Servers',
      ar: 'استضافة المواقع والسيرفرات السحابية',
      tagEn: 'Tier-4 High Availability 99.98% SLA',
      tagAr: 'بنية تحتية سحابية موثوقة وفائقة السرعة للأعمال الكبرى',
      icon: Server
    },
    {
      id: 'digital-marketing',
      en: 'Digital Marketing & Growth',
      ar: 'التسويق الرقمي وإدارة الحملات الإعلانية',
      tagEn: 'Data-Driven Performance & ROI',
      tagAr: 'استراتيجيات نمو ممولة ومبنية على تحليل البيانات',
      icon: TrendingUp
    },
    {
      id: 'seo',
      en: 'SEO Search Optimization',
      ar: 'تحسين محركات البحث والظهور الرقمي (SEO)',
      tagEn: 'Top Search Engine Rankings',
      tagAr: 'تصدر نتائج محركات البحث ومضاعفة الزيارات العضوية',
      icon: Search
    },
    {
      id: 'tech-support',
      en: 'Technical Support & SLA',
      ar: 'الدعم الفني والصيانة والأمان المستمر',
      tagEn: '24/7 Dedicated Engineering Care',
      tagAr: 'فريق هندسي متخصص لحماية واستقرار الأنظمة على مدار الساعة',
      icon: ShieldCheck
    }
  ];

  const displayedServices = showAllServices ? allServices : allServices.slice(0, 5);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Simple, smooth non-pinned reveal animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      });

      // Smooth card entrance with gentle scale
      tl.fromTo(
        portalScreenRef.current,
        { opacity: 0, y: 40, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.85, ease: 'power3.out' }
      );

      // Eyebrow and heading reveal
      tl.fromTo(
        [eyebrowRef.current, headingRef.current],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out' },
        '-=0.45'
      );

      // Staggered service tech pills
      if (servicesListRef.current) {
        const rows = servicesListRef.current.children;
        tl.fromTo(
          rows,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' },
          '-=0.3'
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [showAllServices]);

  return (
    <section className="services-vision-section" id="services" ref={sectionRef}>
      {/* Light Architectural Visible Gradient Orbs (Ice-Blue + Soft Orange) */}
      <div
        className="pointer-events-none absolute -top-28 right-0 w-[650px] h-[650px] rounded-full opacity-70 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(219, 234, 254, 0.95) 0%, rgba(254, 215, 170, 0.5) 50%, transparent 75%)'
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-28 left-0 w-[650px] h-[650px] rounded-full opacity-60 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(191, 219, 254, 0.9) 0%, rgba(255, 237, 213, 0.45) 55%, transparent 75%)'
        }}
        aria-hidden="true"
      />

      {/* Center Expanding Obsidian Black Screen (Opens from the middle on scroll) */}
      <div className="services-aperture-screen" ref={portalScreenRef}>
        <div className="services-screen-inner">
          {/* Subtle Electric-Blue Space Aura */}
          <div className="services-space-aura" aria-hidden="true" />

          {/* Eyebrow Pill Badge (System Colors: Ice Blue & Electric Blue) */}
          <div className="services-badge-pill" ref={eyebrowRef}>
            <span className="badge-star">✦</span>
            <span className="badge-label">{isRtl ? 'خدماتنا الهندسية' : 'Services'}</span>
            <span className="badge-star">✦</span>
          </div>

          {/* Main Headline */}
          <h2 className="services-screen-heading" ref={headingRef}>
            {isRtl ? (
              <>
                خدمات صُممت لتلبي{' '}
                <span className="text-gradient-orange-luminous">كافة تطلعاتك</span>
              </>
            ) : (
              <>
                Services designed to meet{' '}
                <span className="text-gradient-orange-luminous">all your needs</span>
              </>
            )}
          </h2>

          {/* Unified Subtitle Description */}
          <p className="services-screen-desc">
            {isRtl
              ? 'حلول رقمية وسحابية شاملة مصممة خصيصاً لتسريع نمو أعمالك وتحقيق أهدافك المؤسسية بأعلى معايير الجودة.'
              : 'End-to-end digital and enterprise architectures engineered to accelerate business scale and performance.'}
          </p>

          {/* Services Rows List (Image 4 Design + Image 5 Content + System Colors) */}
          <div className="services-rows-list" ref={servicesListRef}>
            {displayedServices.map((service) => (
              <div
                key={service.id}
                className="service-tech-pill-row"
                onClick={() =>
                  onOpenConsultation(isRtl ? `طلب استشارة: ${service.ar}` : `Inquire: ${service.en}`)
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onOpenConsultation(isRtl ? `طلب استشارة: ${service.ar}` : `Inquire: ${service.en}`);
                  }
                }}
                title={isRtl ? `طلب دراسة مشروع: ${service.ar}` : `Request Consultation: ${service.en}`}
              >
                {/* Glowing Ice-Blue Top Hairline on hover */}
                <div className="service-neon-hairline" />

                {/* Left Concentric Bullet Ring + Title */}
                <div className="service-row-leading">
                  <div className="service-concentric-bullet">
                    <span className="bullet-glow-dot" />
                  </div>
                  <div className="service-labels">
                    <span className="service-primary-title">{isRtl ? service.ar : service.en}</span>
                    <span className="service-secondary-tag">{isRtl ? service.tagAr : service.tagEn}</span>
                  </div>
                </div>

                {/* Right Circular Electric-Blue Arrow Button (↗) */}
                <div className="service-action-circle" aria-label="Explore service">
                  <ArrowUpRight size={19} className="action-arrow-icon" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action: More Services Button */}
          <div className="services-more-cta">
            <button
              type="button"
              className="btn-expand-services"
              onClick={() => setShowAllServices((prev) => !prev)}
            >
              <span>
                {showAllServices
                  ? isRtl
                    ? 'عرض أقل ↑'
                    : 'Show Less ↑'
                  : isRtl
                  ? 'المزيد من الخدمات ←'
                  : 'More Service →'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
