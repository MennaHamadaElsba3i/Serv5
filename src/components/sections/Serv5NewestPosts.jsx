import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Calendar,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  RotateCcw,
  Clock,
  CheckCircle2,
  X,
  ExternalLink,
  Layers,
  ArrowUpRight
} from 'lucide-react';

/* ───────────────────────────────────────────────────────────────────
   SERV5 JOURNAL / BLOG — 3-COLUMN CINEMATIC RIBBON REEL ANIMATION
   - Column 1: Slides DOWN like a tape/ribbon
   - Column 2: Slides UP in reverse
   - Column 3: Slides DOWN like a tape/ribbon
   - Then they decelerate, settle ("يسكتوا"), and form a crisp 3×3 square grid.
   - Click any card to inspect full deep-dive case study.
   ─────────────────────────────────────────────────────────────────── */

export default function Serv5NewestPosts({ onOpenConsultation, lang = 'ar' }) {
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [selectedArticle, setSelectedArticle] = useState(null);
  const [reelKey, setReelKey] = useState(0);
  const [isSettled, setIsSettled] = useState(false);

  const sectionRef = useRef(null);
  const wasInViewRef = useRef(false);

  // once: false ensures the animation triggers whenever the user enters the section (from top or bottom)
  const isInView = useInView(sectionRef, { once: false, amount: 0.08 });

  // 9 Enterprise Articles for the 3×3 Matrix
  const articles = [
    // Column 1 (Down)
    {
      id: 'pizza-plaza-ecosystem',
      colIndex: 0,
      icon: '🍕',
      accentColor: '#2563eb',
      category: isRtl ? 'تطبيقات الجوال والـ POS' : 'Mobile Apps & POS',
      readTime: isRtl ? '6 دقائق' : '6 min read',
      date: isRtl ? '28 أكتوبر 2026' : 'Oct 28, 2026',
      title: isRtl
        ? 'تحول رقمي لسلسلة مطاعم: ربط نقاط البيع بتطبيقات التوصيل والأسطول'
        : 'Enterprise Omnichannel Transformation: Linking POS with Fleet GPS',
      excerpt: isRtl
        ? 'منظومة فورية تربط تطبيقات الهواتف الذكية بنقاط البيع وطابعات المطابخ وسائقي التوصيل مع زمن استجابة 0 ثانية.'
        : 'Real-time microservices architecture synchronizing mobile customer apps with kitchen displays and driver dispatch.',
      image: '/images/posts/post-1-pizza.webp',
      badgeClass: 'badge-blue',
      fullContent: isRtl ? [
        'التحدي التقني: كانت بيتزا بلازا تواجه ضغطاً هائلاً في أوقات الذروة مع بطء في مزامنة طلبات الفروع مع طابعات المطابخ.',
        'الحل الهندسي من Serv5: بناء معمارية سحابية Microservices تفصل استقبال الطلبات عن معالجة المدفوعات وتوزيع السائقين مع مزامنة لحظية عبر WebSockets.',
        'النتيجة الملموسة: ارتفاع نسبة الطلبات المباشرة بنسبة 280% وانخفاض وقت التوصيل بمعدل 18 دقيقة لكل طلب.'
      ] : [
        'Peak-hour traffic spikes caused synchronization delays between branch registers and kitchen display units.',
        'Cloud microservices decoupled ordering from real-time dispatch, utilizing WebSockets for zero-latency kitchen print automation.',
        '280% increase in direct commission-free orders and an 18-minute reduction in average delivery cycles.'
      ]
    },
    {
      id: 'medpulse-cloud-ehr',
      colIndex: 0,
      icon: '🏥',
      accentColor: '#10b981',
      category: isRtl ? 'أنظمة سحابية وERP' : 'Cloud Architecture & ERP',
      readTime: isRtl ? '8 دقائق' : '8 min read',
      date: isRtl ? '15 أكتوبر 2026' : 'Oct 15, 2026',
      title: isRtl
        ? 'بنية السحابة المتوافقة مع HIPAA للمنظومات الصحية وربط العيادات'
        : 'HIPAA-Compliant Healthcare Cloud Connecting Regional Medical Hubs',
      excerpt: isRtl
        ? 'كيف صممنا بنية تحتية لـ 14 مركزاً طبياً مع تشفير الملفات الصحية الإلكترونية (EHR) واستقرار 99.99%.'
        : 'Engineering an enterprise healthcare cloud with encrypted electronic health records and automated insurance claims.',
      image: '/images/website-mockup-1.jpg',
      badgeClass: 'badge-navy',
      fullContent: isRtl ? [
        'تشفير كامل للبيانات الطبية الحساسة وفق معايير HIPAA وFHIR Protocol.',
        'ربط آلي بين مخازن الأدوية والصيدليات والمستودعات المركزية في أجزاء من الثانية.',
        'لوحة تحكم موحدة لإدارة مواعيد 450 ألف مراجع سنوياً دون أي انقطاع.'
      ] : [
        'Full HIPAA-compliant medical data encryption using FHIR protocols.',
        'Sub-second synchronization between pharmacies and central distribution warehouses.',
        'Unified telemetry dashboard managing 450k annual consultations with 99.99% uptime.'
      ]
    },
    {
      id: 'alrajhi-banking-bridge',
      colIndex: 0,
      icon: '💳',
      accentColor: '#1e3a8a',
      category: isRtl ? 'بنية تحتية مصرفية' : 'Banking API Infrastructure',
      readTime: isRtl ? '9 دقائق' : '9 min read',
      date: isRtl ? '02 أكتوبر 2026' : 'Oct 02, 2026',
      title: isRtl
        ? 'جسر الربط المصرفي المباشر المتوافق مع معايير مؤسسة النقد SAMA'
        : 'SAMA-Compliant Enterprise Direct Banking API Bridge',
      excerpt: isRtl
        ? 'بناء برمجيات وسيطة مصرفية مؤمنة مع HSM وتشفير AES-256 وزمن استجابة 80ms لتسوية 12 مليون دولار يومياً.'
        : 'Enterprise banking middleware bridging corporate billing with direct payment gateways under bank-grade tokenization.',
      image: '/images/website-mockup-2.jpg',
      badgeClass: 'badge-blue',
      fullContent: isRtl ? [
        'تكامل مصرفي مؤمن وفق أعلى معايير الحوكمة المالية والأمان.',
        'تسوية مالية فورية للتحويلات الجماعية ومطابقة الفواتير بدقة 100%.',
        'نظام إشعارات Webhook مشفر يضمن عدم فقدان أي معاملة مالية.'
      ] : [
        'SAMA-compliant enterprise banking security architecture.',
        'Instant automated ledger reconciliation with zero human error.',
        'Zero-packet-loss cryptographic webhooks ensuring 100% transaction integrity.'
      ]
    },

    // Column 2 (Up)
    {
      id: 'zatca-tax-gateway',
      colIndex: 1,
      icon: '🏛️',
      accentColor: '#1e40af',
      category: isRtl ? 'حلول مالية وحكومية' : 'FinTech & Gov Integration',
      readTime: isRtl ? '7 دقائق' : '7 min read',
      date: isRtl ? '22 سبتمبر 2026' : 'Sep 22, 2026',
      title: isRtl
        ? 'هندسة الفوترة الإلكترونية ZATCA المرحلة الثانية: دليل التكامل الشامل'
        : 'Architecting ZATCA Phase-2 Tax Gateway: Enterprise Integration',
      excerpt: isRtl
        ? 'توليد الأختام الرقمية وتوقيع فواتير XML وإرسالها للهيئة في أقل من 120ms مع قبول فوري بنسبة 99.98%.'
        : 'Certified cloud integration bridge for the Saudi ZATCA Fatoora Phase-2 ecosystem with real-time XML signing.',
      image: '/images/posts/post-2-choose.webp',
      badgeClass: 'badge-navy',
      fullContent: isRtl ? [
        'امتثال تام 100% لكافة متطلبات وتشفير المرحلة الثانية لمنظومة "فاتورة".',
        'توقيع الفاتورة وتوليد كود الـ QR المشفر وإرسالها في أقل من 120ms.',
        'ربط أكثر من 280 شركة كبرى عبر واجهات برمجة تطبيقات موحدة.'
      ] : [
        '100% audited Phase-2 compliance certificate for the Saudi Fatoora network.',
        'Sub-120ms signing, cryptographic hashing, and automated clearance latency.',
        'Central monitoring telemetry managing over 5.8M cleared invoices.'
      ]
    },
    {
      id: 'core-web-vitals-scale',
      colIndex: 1,
      icon: '⚡',
      accentColor: '#0891b2',
      category: isRtl ? 'الأداء وسرعة التحميل' : 'Performance & Core Web Vitals',
      readTime: isRtl ? '5 دقائق' : '5 min read',
      date: isRtl ? '18 سبتمبر 2026' : 'Sep 18, 2026',
      title: isRtl
        ? 'كيف نحقق 100/100 في Core Web Vitals على تطبيقات React والمنصات الضخمة'
        : 'Achieving 100/100 Core Web Vitals on Enterprise React Platforms',
      excerpt: isRtl
        ? 'استراتيجيات تحسين عملية: تقسيم الكود، ومعالجة الصور المتقدمة، والتخزين المؤقت عبر Edge CDN.'
        : 'Practical speed engineering covering code splitting, dynamic asset pipelines, and sub-second edge SSR caching.',
      image: '/images/posts/post-3-planning.webp',
      badgeClass: 'badge-orange',
      fullContent: isRtl ? [
        'تقليل زمن استجابة الخادم الأول (TTFB) لأقل من 150ms في مختلف دول الخليج.',
        'تحسين مقاييس LCP وFID وCLS للحصول على التقييم الأخضر الكامل في Google.',
        'انعكاس مباشر لسرعة التحميل على ارتفاع معدل التحويل (CRO) بنسبة تفوق 40%.'
      ] : [
        'Reducing Time to First Byte (TTFB) to sub-150ms across all regional GCC edge nodes.',
        'Optimizing LCP, FID, and CLS to secure a verified 100/100 Google Web Vitals badge.',
        'Proven correlation between sub-second page speed and a 40%+ conversion surge.'
      ]
    },
    {
      id: 'luxestore-headless-commerce',
      colIndex: 1,
      icon: '💎',
      accentColor: '#d97706',
      category: isRtl ? 'متاجر إلكترونية فاخرة' : 'Headless E-Commerce',
      readTime: isRtl ? '8 دقائق' : '8 min read',
      date: isRtl ? '10 سبتمبر 2026' : 'Sep 10, 2026',
      title: isRtl
        ? 'التجارة الإلكترونية Headless: تجربة تسوق بصرية فائقة السرعة للعلامات الفاخرة'
        : 'Headless E-Commerce: Sub-Second Luxury Shopping Architectures',
      excerpt: isRtl
        ? 'معمارية متجر إلكتروني حديث يتحمل 15,000 منتج مع فلترة فورية O(1) ودعم بوابات التقسيط ومدى.'
        : 'Flagship luxury destination engineered with headless commerce architecture, sub-second latency and multi-currency localized checkout.',
      image: '/images/serv5-tech-vision.jpg',
      badgeClass: 'badge-cyan',
      fullContent: isRtl ? [
        'فصل واجهة المستخدم الأمامية عن نظام إدارة المتجر لتحقيق مرونة بصرية وسرعة خارقة.',
        'فلترة بحث فورية لأكثر من 15 ألف منتج بدون أي إعادة تحميل للصفحة.',
        'تحقيق مبيعات سنوية تجاوزت 4.6 مليون دولار بنمو سنوي 185%.'
      ] : [
        'Decoupled storefront architecture delivering unparalleled UI fidelity and instant response.',
        'Sub-millisecond faceted faceted search across 15k SKUs.',
        'Delivered $4.6M+ annual GMV with a 185% boost in client checkout conversion.'
      ]
    },

    // Column 3 (Down)
    {
      id: 'nauz-coffee-loyalty',
      colIndex: 2,
      icon: '☕',
      accentColor: '#b45309',
      category: isRtl ? 'تطبيقات الجوال والولاء' : 'Mobile Loyalty Ecosystem',
      readTime: isRtl ? '6 دقائق' : '6 min read',
      date: isRtl ? '06 سبتمبر 2026' : 'Sep 06, 2026',
      title: isRtl
        ? 'تطبيقات القهوة المختصة والطلب المسبق: التحضير التلقائي عند الاقتراب'
        : 'Specialty Coffee Order-Ahead: GPS Proximity Auto-Brewing Engine',
      excerpt: isRtl
        ? 'تطبيق جوال يتيح استلام القهوة بدون انتظار مع تفعيل التحضير آلياً عبر GPS عند اقتراب العميل لـ 450 متراً.'
        : 'Specialty coffee digital ecosystem featuring drive-thru order-ahead, smart loyalty reward tiering and Apple Pay checkout.',
      image: '/images/posts/post-5-ai-forecast.webp',
      badgeClass: 'badge-orange',
      fullContent: isRtl ? [
        'خاصية الاستشعار الجغرافي GPS لتجهيز كوب القهوة فور وصول العميل لفرع الدرايف ثرو.',
        'نظام ولاء رقمي ومكافآت ممتع يزيد معدل الشراء المتكرر بنسبة 65%.',
        'دعم الدفع الفوري بنقرة واحدة عبر Apple Pay ومدى.'
      ] : [
        'Geofenced GPS proximity trigger dispatching brewing queues when customer is within 450m.',
        'Gamified digital rewards passport increasing repeat visits by over 65%.',
        'Seamless one-tap localized checkout with Apple Pay and Mada bridges.'
      ]
    },
    {
      id: 'ai-sales-pipeline',
      colIndex: 2,
      icon: '🤖',
      accentColor: '#7c3aed',
      category: isRtl ? 'ذكاء اصطناعي وأتمتة' : 'AI & Workflow Automation',
      readTime: isRtl ? '7 دقائق' : '7 min read',
      date: isRtl ? '25 أغسطس 2026' : 'Aug 25, 2026',
      title: isRtl
        ? 'الذكاء الاصطناعي في مسارات المبيعات والأتمتة: تحويل الزوار لعملاء دائمين'
        : 'AI Sales Pipelines: Turning Browsers into Long-Term Enterprise Clients',
      excerpt: isRtl
        ? 'بناء مسارات مؤتمتة تؤهل العملاء المحتملين بالذكاء الاصطناعي وتوزعهم على مسؤولي المبيعات آلياً.'
        : 'Automated AI pipelines qualifying prospects, routing leads to CRM reps, and boosting closed deals.',
      image: '/images/posts/post-4-ai-pipeline.webp',
      badgeClass: 'badge-blue',
      fullContent: isRtl ? [
        'أتمتة تأهيل العملاء عبر بوتات ذكية تفهم احتياجات العميل وتحدد الميزانية المناسبة.',
        'ربط آلي مع أنظمة الـ CRM وإشعارات فورية عبر الواتساب لفريق المبيعات.',
        'زيادة نسبة إتمام الصفقات (Win-Rate) بنسبة 45% وتخفيض وقت الرد إلى أقل من دقيقة.'
      ] : [
        'Automated AI intent recognition scoring leads before human sales handoff.',
        'Two-way WhatsApp API synchronization with enterprise CRM instances.',
        '45% win-rate uplift and sub-60-second inbound response time.'
      ]
    },
    {
      id: 'website-importance-guide',
      colIndex: 2,
      icon: '🌐',
      accentColor: '#2563eb',
      category: isRtl ? 'الأصول الرقمية للشركات' : 'Enterprise Digital Footprint',
      readTime: isRtl ? '5 دقائق' : '5 min read',
      date: isRtl ? '05 أغسطس 2026' : 'Aug 05, 2026',
      title: isRtl
        ? 'أهمية إنشاء موقع إلكتروني مؤسسي: بناء أصل رقمي دائم ومستدام لشركتك'
        : 'Building a Custom Enterprise Website: Your Core Digital Asset',
      excerpt: isRtl
        ? 'لماذا يعد الموقع الإلكتروني هو الأصل الرقمي الأكثر قيمة وأماناً لشركتك في بناء الثقة وتحقيق مبيعات مستدامة.'
        : 'Why a custom enterprise platform remains your most valuable digital asset for customer trust, authority, and sustained revenue.',
      image: '/images/posts/post-6-website.webp',
      badgeClass: 'badge-blue',
      fullContent: isRtl ? [
        'بناء المصداقية المؤسسية والتواجد في اللحظة التي يبحث فيها العميل عن خدماتك.',
        'التحكم الكامل في بيانات العملاء وتجربة المستخدم بعيداً عن تقلبات خوارزميات السوشيال ميديا.',
        'قناة مبيعات وتواصل مباشرة تعمل على مدار الساعة دون توقف.'
      ] : [
        'Establishing authoritative digital footprint when prospects search for solutions.',
        'Full 100% control over user experience, customer data, and brand narrative.',
        'An automated 24/7 revenue and conversion engine with zero platform risk.'
      ]
    }
  ];

  // Group into 3 vertical columns (3 cards each)
  const columns = [
    { id: 'col-1', direction: 'down', posts: [articles[0], articles[1], articles[2]] },
    { id: 'col-2', direction: 'up',   posts: [articles[3], articles[4], articles[5]] },
    { id: 'col-3', direction: 'down', posts: [articles[6], articles[7], articles[8]] }
  ];

  const handleReplayReel = () => {
    setIsSettled(false);
    setReelKey((prev) => prev + 1);
    setTimeout(() => {
      setIsSettled(true);
    }, 4200);
  };

  // Re-triggers automatically on refresh (if in view) and whenever user scrolls into the section from above or below
  useEffect(() => {
    let timer;
    if (isInView && !wasInViewRef.current) {
      wasInViewRef.current = true;
      setIsSettled(false);
      setReelKey((prev) => prev + 1);
      timer = setTimeout(() => {
        setIsSettled(true);
      }, 4200);
    } else if (!isInView && wasInViewRef.current) {
      wasInViewRef.current = false;
      setIsSettled(false);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isInView]);

  return (
    <section className="serv5-journal-section" id="blog" ref={sectionRef}>
      <div className="serv5-journal-container">
        {/* =========================================================
            1. SECTION HEADER (THE SERV5 JOURNAL — IDEAS THAT MOVE)
           ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="journal-header text-center"
        >
          {/* Eyebrow Pill */}
          <div className="journal-eyebrow-wrap">
            <span className="journal-eyebrow-pill">
              <Sparkles size={13} className="text-blue-600" />
              <span>{isRtl ? 'مدونة سيرف فايف | رؤى تقنية تصنع الفارق' : 'SERV5 JOURNAL | INSIGHTS THAT SHAPE SUCCESS'}</span>
            </span>
          </div>

          <h2 className="journal-main-title">
            {isRtl ? (
              <>
                مدونة سيرف فايف |{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #245aa7 0%, #ea580c 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block'
                  }}
                >
                  رؤى تقنية تصنع الفارق
                </span>{' '}
                لمشروعك
              </>
            ) : (
              <>
                SERV5 Blog |{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #245aa7 0%, #ea580c 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block'
                  }}
                >
                  Insights That Move Business
                </span>{' '}
                Forward
              </>
            )}
          </h2>

          <p className="journal-sub-desc mx-auto">
            {isRtl
              ? 'استكشف أحدث المقالات والدراسات البرمجية والحلول السحابية المبتكرة من واقع خبرتنا الميدانية في سيرف فايف.'
              : 'Explore the latest architectural insights, enterprise case studies, and modern tech trends architected by SERV5.'}
          </p>
        </motion.div>

        {/* =========================================================
            2. THE 3-COLUMN RIBBON REEL STAGE (3x3 SQUARES)
            - Column 1: Cascades DOWN smoothly like a tape (y: -650 -> 0)
            - Column 2: Rises UP in reverse (y: +650 -> 0)
            - Column 3: Cascades DOWN smoothly (y: -650 -> 0)
            - Visible 3.5s duration with cinematic deceleration & settle
           ========================================================= */}
        <div className="serv5-ribbon-stage" key={`reel-${reelKey}`}>
          <div className="serv5-ribbon-grid">
            {columns.map((col, colIdx) => {
              // Deep flowing travel distance for each ribbon
              const initialY = col.direction === 'down' ? -650 : 650;

              return (
                <motion.div
                  key={`${col.id}-${reelKey}`}
                  className={`serv5-ribbon-col ribbon-direction-${col.direction}`}
                  initial={{
                    y: initialY,
                    opacity: 0.2,
                    filter: 'blur(7px)'
                  }}
                  animate={
                    isInView
                      ? {
                          y: [
                            initialY,
                            initialY * 0.52,
                            initialY * 0.16,
                            col.direction === 'down' ? 14 : -14,
                            0
                          ],
                          opacity: [0.25, 0.75, 0.95, 1, 1],
                          filter: ['blur(7px)', 'blur(3px)', 'blur(1px)', 'blur(0px)', 'blur(0px)']
                        }
                      : {}
                  }
                  transition={{
                    duration: 3.4, // Visibly slow, elegant, and majestic flow (3.4 seconds)
                    times: [0, 0.42, 0.74, 0.91, 1],
                    ease: ['linear', 'easeOut', 'easeOut', 'easeInOut'],
                    delay: colIdx * 0.26 // Noticeable stagger across the 3 ribbons
                  }}
                >
                  {col.posts.map((post, postIdx) => (
                    <motion.div
                      key={post.id}
                      className={`serv5-square-card ${isSettled ? 'is-settled' : ''}`}
                      onClick={() => setSelectedArticle(post)}
                      role="button"
                      tabIndex={0}
                      whileHover={{
                        y: -8,
                        scale: 1.025,
                        boxShadow: '0 20px 40px -10px rgba(37, 99, 235, 0.22)',
                        borderColor: '#93c5fd',
                        transition: { duration: 0.25, ease: 'easeOut' }
                      }}
                      whileTap={{ scale: 0.98 }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedArticle(post);
                        }
                      }}
                    >
                      {/* Top Accent Gradient Bar */}
                      <div
                        className="square-card-accent-bar"
                        style={{
                          background: `linear-gradient(90deg, ${post.accentColor}, #38bdf8)`
                        }}
                      />

                      {/* Card Media Thumbnail Image */}
                      <div className="square-card-media-wrap">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="square-card-img"
                          loading="lazy"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/images/serv5-tech-vision.jpg';
                          }}
                        />
                        <span
                          className="square-card-badge-pill"
                          style={{ background: post.accentColor }}
                        >
                          {post.icon} {post.category}
                        </span>
                      </div>

                      {/* Meta Row: Date & Reading Time */}
                      <div className="square-card-meta">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} />
                          {post.date}
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1 text-emerald-600 font-bold">
                          <Clock size={11} />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="square-card-title">{post.title}</h3>

                      {/* Excerpt */}
                      <p className="square-card-desc">{post.excerpt}</p>

                      {/* Footer Action */}
                      <div className="square-card-footer">
                        <span className="square-card-action-text">
                          {isRtl ? 'قراءة التحليل الكامل' : 'Read Full Blueprint'}
                        </span>
                        <div className="square-card-arrow-btn">
                          <ArrowUpRight size={14} />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* =========================================================
          3. COMPREHENSIVE ARTICLE DETAIL MODAL WITH FRAMER MOTION
         ========================================================= */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="journal-modal-overlay"
            onClick={() => setSelectedArticle(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.94, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="journal-modal-container"
              onClick={(e) => e.stopPropagation()}
              dir={isRtl ? 'rtl' : 'ltr'}
            >
              {/* Modal Header Bar */}
              <div className="journal-modal-header">
                <div className="journal-modal-meta">
                  <span className="journal-modal-tag" style={{ background: `${selectedArticle.accentColor}15`, color: selectedArticle.accentColor }}>
                    {selectedArticle.category}
                  </span>
                  <span className="journal-modal-date">
                    <Calendar size={13} />
                    <span>{selectedArticle.date}</span>
                  </span>
                  <span className="journal-modal-date text-emerald-700 font-bold">
                    <Clock size={13} />
                    <span>{selectedArticle.readTime}</span>
                  </span>
                </div>
                <button
                  type="button"
                  className="journal-modal-close"
                  onClick={() => setSelectedArticle(null)}
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Title */}
              <h2 className="journal-modal-title flex items-center gap-2">
                <span>{selectedArticle.icon}</span>
                <span>{selectedArticle.title}</span>
              </h2>

              {/* Modal Excerpt Banner */}
              <div className="journal-modal-excerpt">
                <p>{selectedArticle.excerpt}</p>
              </div>

              {/* Modal Deep-Dive Content Points */}
              <div className="journal-modal-body">
                <h4 className="journal-body-heading">
                  {isRtl ? 'أبرز محاور المعمارية والحلول الهندسية:' : 'Key Engineering & Architecture Highlights:'}
                </h4>
                <ul className="journal-content-list">
                  {selectedArticle.fullContent.map((point, pIdx) => (
                    <li key={pIdx} className="journal-content-item">
                      <CheckCircle2 size={16} className="journal-check-icon" style={{ color: selectedArticle.accentColor }} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Actions */}
              <div className="journal-modal-actions">
                <button
                  type="button"
                  onClick={() => {
                    const subj = `استفسار حول مقال: ${selectedArticle.title}`;
                    setSelectedArticle(null);
                    onOpenConsultation?.(subj);
                  }}
                  className="journal-action-primary"
                  style={{ background: selectedArticle.accentColor }}
                >
                  <span>{isRtl ? 'طلب استشارة بخصوص هذا الحل' : 'Request Consultation on this Solution'}</span>
                  <ArrowIcon size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="journal-action-secondary"
                >
                  {isRtl ? 'إغلاق' : 'Close'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
