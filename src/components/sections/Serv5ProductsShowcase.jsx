import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
  Activity,
  ShoppingBag,
  LayoutGrid
} from 'lucide-react';

export default function Serv5ProductsShowcase({ onOpenConsultation, lang = 'ar' }) {
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  // Authentic Products dataset with actual images from project
  const allProducts = useMemo(() => [
    {
      id: 'salesawy',
      icon: Sparkles,
      image: '/images/posts/post-4-ai-pipeline.webp',
      badge: isRtl ? 'ذكاء اصطناعي' : 'AI Powered',
      badgeClass: 'badge-ai',
      accentColor: '#ea580c',
      title: isRtl ? 'سيلزاوي' : 'Salesawy AI',
      subtitle: isRtl ? 'مساعد مبيعات ذكي يعمل بالذكاء الاصطناعي' : 'Autonomous AI Sales & Conversion Bot',
      desc: isRtl
        ? 'سيلزاوي هو مساعد مبيعات ذكي يعمل بالذكاء الاصطناعي على مدار 24/7 لأتمتة الرد على العملاء، تأكيد الحجوزات، وزيادة المبيعات عبر الواتساب والموقع بدقة استثنائية.'
        : 'Salesawy is a 24/7 autonomous conversational AI sales agent engineered to qualify leads, automate WhatsApp orders, and skyrocket sales conversions.',
      features: isRtl
        ? [
            'أتمتة المحادثات والردود على الواتساب والموقع 24/7',
            'تأهيل العملاء المحتملين وتأكيد الحجوزات والطلبات آلياً',
            'ربط ذكي وفوري مع أنظمة الـ CRM وقواعد البيانات',
            'تحليل دقيق لنية الشراء وزيادة معدل التحويل +85%'
          ]
        : [
            '24/7 Automated WhatsApp and web inquiry handling',
            'Autonomous lead qualification and booking confirmation',
            'Seamless integration with enterprise CRM platforms',
            'Intent-recognition engine delivering +85% conversion lift'
          ],
      metricLabel: isRtl ? 'كفاءة الاستجابة' : 'Response SLA',
      metricValue: '0.3s • 24/7',
      ctaText: isRtl ? 'طلب النظام الآن' : 'Request Platform'
    },
    {
      id: 'serv5-erp',
      icon: ShieldCheck,
      image: '/images/serv5-coding-enterprise.jpg',
      badge: isRtl ? 'معتمد ZATCA' : 'ZATCA Certified',
      badgeClass: 'badge-erp',
      accentColor: '#245aa7',
      title: isRtl ? 'سيرف فايف كلاود ERP' : 'Serv5 Cloud ERP',
      subtitle: isRtl ? 'نظام إدارة موارد المؤسسات والفوترة' : 'Enterprise Resource & Tax Platform',
      desc: isRtl
        ? 'منظومة سحابية متكاملة للمحاسبة والمستودعات والموارد البشرية، مع ربط آلي معتمد 100% مع الفوترة الإلكترونية للمرحلة الثانية لهيئة الزكاة والضريبة والجمارك.'
        : 'Enterprise cloud ERP consolidating financial ledgers, multi-branch inventory, HR workflows, and native ZATCA Phase-2 e-invoicing compliance.',
      features: isRtl
        ? [
            'ربط آلي معتمد 100% مع الفوترة الإلكترونية ZATCA المرحلة 2',
            'إدارة سلاسل الإمداد والمستودعات متعددة الفروع بلحظية تامة',
            'دفاتر محاسبية متقدمة وإصدار ميزانيات وتقارير مالية دورية',
            'تشفير سحابي بنكي وصلاحيات مستخدمين دقيقة'
          ]
        : [
            '100% ZATCA Phase-2 cryptographic e-invoicing compliance',
            'Multi-branch supply chain and real-time inventory management',
            'Automated general ledger and instant financial reporting',
            'Bank-grade encrypted cloud architecture with role controls'
          ],
      metricLabel: isRtl ? 'الامتثال الضريبي' : 'Tax Compliance',
      metricValue: '100% ZATCA Phase 2',
      ctaText: isRtl ? 'طلب النظام الآن' : 'Request Platform'
    },
    {
      id: 'foodsuite',
      icon: Zap,
      image: '/images/posts/post-1-pizza.webp',
      badge: isRtl ? 'مطاعم وأساطيل' : 'F&B Fleet OS',
      badgeClass: 'badge-food',
      accentColor: '#f97316',
      title: isRtl ? 'فود سويت' : 'FoodSuite Delivery OS',
      subtitle: isRtl ? 'منظومة طلبات طعام وأسطول توصيل' : 'Omnichannel Restaurant & Fleet OS',
      desc: isRtl
        ? 'منظومة متكاملة لربط تطبيقات العملاء على iOS و Android بشاشات المطابخ KDS وتتبع السائقين عبر الـ GPS ونقاط البيع POS في الوقت الفعلي.'
        : 'End-to-end food ordering ecosystem synchronizing customer mobile apps, kitchen displays (KDS), driver GPS dispatch, and POS in real-time.',
      features: isRtl
        ? [
            'تطبيقات عملاء سريعة وسلسة على iOS و Android',
            'شاشات مطابخ رقمية KDS متصلة بنقاط البيع POS',
            'تتبع حي لمسار السائقين بدقة GPS وحساب وقت الوصول',
            'برامج ولاء ذكية وكوبونات خصم ترفع تكرار الشراء'
          ]
        : [
            'High-converting customer mobile apps on iOS & Android',
            'Interactive Kitchen Display Systems (KDS) linked to POS',
            'Real-time GPS driver dispatch and automated route tracking',
            'Built-in loyalty rewards and coupon campaigns'
          ],
      metricLabel: isRtl ? 'نطاق التشغيل' : 'Deployment Scope',
      metricValue: isRtl ? '38 فرعاً • مزامنة فورية' : '38 Outlets • Real-time Sync',
      ctaText: isRtl ? 'طلب النظام الآن' : 'Request Platform'
    },
    {
      id: 'medpulse',
      icon: Activity,
      image: '/images/serv5-tech-vision.jpg',
      badge: isRtl ? 'رعاية صحية' : 'Healthcare Cloud',
      badgeClass: 'badge-health',
      accentColor: '#0d9488',
      title: isRtl ? 'ميدبولس للعيادات' : 'MedPulse Clinic Cloud',
      subtitle: isRtl ? 'نظام العيادات والسجلات الطبية' : 'Digital EHR & Clinic Management',
      desc: isRtl
        ? 'نظام ذكي لإدارة العيادات والمراكز الطبية مع سجلات صحية رقمية مشفرة، جدولة مواعيد الأطباء، والربط المعتمد مع شركات التأمين الصحي.'
        : 'Smart healthcare management software for specialized clinics with encrypted electronic health records, doctor schedules, and insurance claim approvals.',
      features: isRtl
        ? [
            'سجلات طبية إلكترونية مشفرة (EHR) وتاريخ مرضي كامل',
            'جدولة مواعيد الأطباء وتنبيهات مواعيد المرضى عبر SMS',
            'إصدار الوصفات الطبية الإلكترونية وتقارير الفحوصات',
            'تكامل مباشر مع بوابات شركات التأمين والمطالبات المالية'
          ]
        : [
            'Encrypted Electronic Health Records (EHR) per patient',
            'Smart physician scheduling with automated SMS reminders',
            'Digital prescription generation and lab report attachment',
            'Direct insurance claims bridge and financial settlement'
          ],
      metricLabel: isRtl ? 'حجم السجلات' : 'EHR Scale',
      metricValue: '+450K Patient Records',
      ctaText: isRtl ? 'طلب النظام الآن' : 'Request Platform'
    },
    {
      id: 'luxestore',
      icon: ShoppingBag,
      image: '/images/website-mockup-1.jpg',
      badge: isRtl ? 'تجارة إلكترونية' : 'Headless Retail',
      badgeClass: 'badge-retail',
      accentColor: '#d97706',
      title: isRtl ? 'لوكس ستور ريتيل' : 'LuxeStore Headless',
      subtitle: isRtl ? 'متجر إلكتروني فاخر فائق السرعة' : 'Ultra-Fast Luxury Commerce Engine',
      desc: isRtl
        ? 'متجر إلكتروني فاخر صُمم بأحدث تقنيات الـ Headless لتحقيق سرعة تحميل 0.4 ثانية مع دعم كامل لبوابات الدفع والتقسيط Mada و Tabby و Tamara.'
        : 'High-end luxury e-commerce engine with 0.4s sub-second page loads, Mada and Tabby installments, multi-currency support, and live warehouse sync.',
      features: isRtl
        ? [
            'معمارية Headless فائقة السرعة بزمن تحميل 0.4 ثانية',
            'دعم كامل لبوابات الدفع Mada و Apple Pay والبطاقات',
            'تكامل مع بوابات التقسيط المرن Tabby و Tamara',
            'مزامنة فورية مع المخزون والشحن الآلي'
          ]
        : [
            'Ultra-fast headless commerce engine (0.4s page load)',
            'Native support for Mada, Apple Pay, and global gateways',
            'Seamless BNPL installment integrations (Tabby & Tamara)',
            'Real-time multi-warehouse inventory synchronization'
          ],
      metricLabel: isRtl ? 'مؤشر الأداء' : 'Core Web Vitals',
      metricValue: '100/100 • 0.4s Speed',
      ctaText: isRtl ? 'طلب النظام الآن' : 'Request Platform'
    }
  ], [isRtl]);

  const [selectedProductId, setSelectedProductId] = useState('all');
  const detailsScrollRef = useRef(null);
  const cardRefs = useRef({});

  // Selection options including "الكل" (All Products)
  const selectionOptions = useMemo(() => [
    {
      id: 'all',
      icon: LayoutGrid,
      badge: isRtl ? 'الكل' : 'All',
      badgeClass: 'badge-all',
      title: isRtl ? 'الكل (جميع المنظومات)' : 'All Software Products',
      subtitle: isRtl ? 'استعراض كافة المنظومات بالتمرير الداخلي' : 'Scroll through all enterprise platforms'
    },
    ...allProducts
  ], [allProducts, isRtl]);

  // Handle clicking a product option on the right
  const handleSelectProduct = (id) => {
    setSelectedProductId(id);

    if (!detailsScrollRef.current) return;

    if (id === 'all') {
      detailsScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetCard = cardRefs.current[id];
      const scrollBox = detailsScrollRef.current;
      if (targetCard && scrollBox) {
        const targetTop = targetCard.offsetTop - scrollBox.offsetTop;
        scrollBox.scrollTo({ top: Math.max(0, targetTop - 8), behavior: 'smooth' });
      }
    }
  };

  // Sync active selection based on internal scroll position
  useEffect(() => {
    const scrollContainer = detailsScrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      // If at top, highlight 'all'
      if (scrollContainer.scrollTop < 60) {
        setSelectedProductId('all');
        return;
      }

      // Check which product card is most visible in viewport
      let activeId = 'all';
      let minDistance = Infinity;

      allProducts.forEach((prod) => {
        const el = cardRefs.current[prod.id];
        if (el) {
          const rect = el.getBoundingClientRect();
          const containerRect = scrollContainer.getBoundingClientRect();
          const distance = Math.abs(rect.top - containerRect.top);
          if (distance < minDistance && rect.top <= containerRect.top + 200) {
            minDistance = distance;
            activeId = prod.id;
          }
        }
      });

      if (activeId) {
        setSelectedProductId(activeId);
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [allProducts]);

  return (
    <section
      className="serv5-products-section relative z-10 overflow-hidden text-slate-900"
      id="products"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Unified Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4 leading-tight">
            {isRtl ? (
              <>
                منتجات قوية.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600">
                  أعمال أذكى.
                </span>
              </>
            ) : (
              <>
                Powerful Products.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600">
                  Smarter Business.
                </span>
              </>
            )}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {isRtl
              ? 'استكشف عالمنا من التجارب والحلول الرقمية المتميزة والمصممة بدقة استثنائية، برمجيات جاهزة وقابلة للتخصيص تُسرع نمو أعمالك وتضمن أعلى كفاءة تشغيلية.'
              : 'Explore our ecosystem of distinct digital software architectures built with exceptional precision to accelerate enterprise scale and efficiency.'}
          </p>
        </div>

        {/* Two-Column Master Layout:
            - RIGHT Column: Product Selection Options with "الكل" (vertical list)
            - LEFT Column: Products Detail Cards with Internal Scroll (showing product 1, then product 2, etc.)
            - Contained Internal Scrolling strictly within the Products section only!
        */}
        <div className="products-split-stage">

          {/* RIGHT COLUMN (In RTL natural position on the right): Product Selection Options */}
          <div className="products-selector-pane">
            <div className="products-selector-header">
              <span className="products-selector-label">
                {isRtl ? 'اختر المنظومة البرمجية:' : 'Select Software Platform:'}
              </span>
              <span className="products-count-badge">
                {allProducts.length} {isRtl ? 'منظومات' : 'Platforms'}
              </span>
            </div>

            {/* Internal scrollable list containing all product choices including "الكل" */}
            <div className="products-selector-scrollbox">
              {selectionOptions.map((option) => {
                const isSelected = selectedProductId === option.id;
                const IconComponent = option.icon;

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => handleSelectProduct(option.id)}
                    className={`product-choice-row ${isSelected ? 'is-selected' : ''}`}
                    aria-selected={isSelected}
                  >
                    <div className="choice-icon-bubble">
                      <IconComponent size={19} />
                    </div>

                    <div className="choice-text-col">
                      <div className="choice-title-row">
                        <span className="choice-title">{option.title}</span>
                        <span className={`choice-mini-badge ${option.badgeClass}`}>
                          {option.badge}
                        </span>
                      </div>
                      <span className="choice-subtitle">{option.subtitle}</span>
                    </div>

                    {isSelected && (
                      <div className="choice-active-indicator">
                        <CheckCircle2 size={18} />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* LEFT COLUMN: Products Detail Stack with Internal Scroll (Shows 1st, then 2nd product, etc.) */}
          <div
            className="products-detail-pane products-detail-scroll-container"
            ref={detailsScrollRef}
          >
            <div className="products-detail-stack">
              {allProducts.map((product) => (
                <div
                  key={product.id}
                  id={`product-card-${product.id}`}
                  ref={(el) => (cardRefs.current[product.id] = el)}
                  className={`products-detail-card ${selectedProductId === product.id ? 'is-focused-product' : ''}`}
                >
                  {/* 1. Tall Portrait-Oriented Product Image */}
                  <div className="products-portrait-figure">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="products-portrait-img"
                      loading="lazy"
                    />
                    <div className="products-portrait-overlay">
                      <span className={`products-portrait-badge ${product.badgeClass}`}>
                        {product.badge}
                      </span>
                      <span className="products-portrait-metric">
                        {product.metricValue}
                      </span>
                    </div>
                  </div>

                  {/* 2. Product Description Next to Image */}
                  <div className="products-detail-body">
                    <div className="products-detail-header-block">
                      <div className="products-detail-badges-row">
                        <span className={`products-inline-badge ${product.badgeClass}`}>
                          {product.badge}
                        </span>
                        <span className="products-metric-tag">
                          {product.metricLabel}: <strong>{product.metricValue}</strong>
                        </span>
                      </div>

                      <h3 className="products-detail-heading">
                        {product.title}
                      </h3>
                      <p className="products-detail-subheading">
                        {product.subtitle}
                      </p>
                    </div>

                    <p className="products-detail-narrative">
                      {product.desc}
                    </p>

                    {/* Bullet points / Key features */}
                    <div className="products-features-list">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="products-feature-item">
                          <CheckCircle2 size={16} className="feature-check-icon" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Standalone Action CTA */}
                    <div className="products-detail-action-row">
                      <button
                        type="button"
                        onClick={() => onOpenConsultation && onOpenConsultation(product.title)}
                        className="products-action-btn"
                      >
                        <span>{product.ctaText}</span>
                        <ArrowIcon size={17} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
