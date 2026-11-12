import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  BookOpen,
  CheckCircle2,
  X,
  Layers,
  ChevronRight
} from 'lucide-react';

// 100% Mathematically Perfect Interlocking Jigsaw Puzzle Paths (viewBox: 0 0 380 460)
// Base rectangle: (30, 30) to (350, 430) => Width: 320, Height: 400.
// Step: Horizontal = 320px, Vertical = 400px.
const PUZZLE_PATHS = [
  // Piece 0 (Top-Left): Top flat, Right female slot, Bottom female slot, Left flat
  "M 46 30 L 334 30 A 16 16 0 0 1 350 46 L 350.0 204.0 C 352.0 212.0, 340.0 206.0, 332.0 204.0 C 324.0 206.0, 322.0 216.0, 322.0 230.0 C 322.0 244.0, 324.0 254.0, 332.0 256.0 C 340.0 254.0, 352.0 248.0, 350.0 256.0 L 350 414 A 16 16 0 0 1 334 430 L 216.0 430.0 C 208.0 432.0, 214.0 420.0, 216.0 412.0 C 214.0 404.0, 204.0 402.0, 190.0 402.0 C 176.0 402.0, 166.0 404.0, 164.0 412.0 C 166.0 420.0, 172.0 432.0, 164.0 430.0 L 46 430 A 16 16 0 0 1 30 414 L 30 46 A 16 16 0 0 1 46 30 Z",
  
  // Piece 1 (Top-Mid): Top flat, Right female slot, Bottom female slot, Left male tab (locks into Piece 0)
  "M 46 30 L 334 30 A 16 16 0 0 1 350 46 L 350.0 204.0 C 352.0 212.0, 340.0 206.0, 332.0 204.0 C 324.0 206.0, 322.0 216.0, 322.0 230.0 C 322.0 244.0, 324.0 254.0, 332.0 256.0 C 340.0 254.0, 352.0 248.0, 350.0 256.0 L 350 414 A 16 16 0 0 1 334 430 L 216.0 430.0 C 208.0 432.0, 214.0 420.0, 216.0 412.0 C 214.0 404.0, 204.0 402.0, 190.0 402.0 C 176.0 402.0, 166.0 404.0, 164.0 412.0 C 166.0 420.0, 172.0 432.0, 164.0 430.0 L 46 430 A 16 16 0 0 1 30 414 L 30.0 256.0 C 32.0 248.0, 20.0 254.0, 12.0 256.0 C 4.0 254.0, 2.0 244.0, 2.0 230.0 C 2.0 216.0, 4.0 206.0, 12.0 204.0 C 20.0 206.0, 32.0 212.0, 30.0 204.0 L 30 46 A 16 16 0 0 1 46 30 Z",
  
  // Piece 2 (Top-Right): Top flat, Right flat, Bottom female slot, Left male tab (locks into Piece 1)
  "M 46 30 L 334 30 A 16 16 0 0 1 350 46 L 350 414 A 16 16 0 0 1 334 430 L 216.0 430.0 C 208.0 432.0, 214.0 420.0, 216.0 412.0 C 214.0 404.0, 204.0 402.0, 190.0 402.0 C 176.0 402.0, 166.0 404.0, 164.0 412.0 C 166.0 420.0, 172.0 432.0, 164.0 430.0 L 46 430 A 16 16 0 0 1 30 414 L 30.0 256.0 C 32.0 248.0, 20.0 254.0, 12.0 256.0 C 4.0 254.0, 2.0 244.0, 2.0 230.0 C 2.0 216.0, 4.0 206.0, 12.0 204.0 C 20.0 206.0, 32.0 212.0, 30.0 204.0 L 30 46 A 16 16 0 0 1 46 30 Z",
  
  // Piece 3 (Bot-Left): Top male tab (locks into Piece 0), Right female slot, Bottom flat, Left flat
  "M 46 30 L 164.0 30.0 C 172.0 32.0, 166.0 20.0, 164.0 12.0 C 166.0 4.0, 176.0 2.0, 190.0 2.0 C 204.0 2.0, 214.0 4.0, 216.0 12.0 C 214.0 20.0, 208.0 32.0, 216.0 30.0 L 334 30 A 16 16 0 0 1 350 46 L 350.0 204.0 C 352.0 212.0, 340.0 206.0, 332.0 204.0 C 324.0 206.0, 322.0 216.0, 322.0 230.0 C 322.0 244.0, 324.0 254.0, 332.0 256.0 C 340.0 254.0, 352.0 248.0, 350.0 256.0 L 350 414 A 16 16 0 0 1 334 430 L 46 430 A 16 16 0 0 1 30 414 L 30 46 A 16 16 0 0 1 46 30 Z",
  
  // Piece 4 (Bot-Mid): Top male tab (locks into Piece 1), Right female slot, Bottom flat, Left male tab (locks into Piece 3)
  "M 46 30 L 164.0 30.0 C 172.0 32.0, 166.0 20.0, 164.0 12.0 C 166.0 4.0, 176.0 2.0, 190.0 2.0 C 204.0 2.0, 214.0 4.0, 216.0 12.0 C 214.0 20.0, 208.0 32.0, 216.0 30.0 L 334 30 A 16 16 0 0 1 350 46 L 350.0 204.0 C 352.0 212.0, 340.0 206.0, 332.0 204.0 C 324.0 206.0, 322.0 216.0, 322.0 230.0 C 322.0 244.0, 324.0 254.0, 332.0 256.0 C 340.0 254.0, 352.0 248.0, 350.0 256.0 L 350 414 A 16 16 0 0 1 334 430 L 46 430 A 16 16 0 0 1 30 414 L 30.0 256.0 C 32.0 248.0, 20.0 254.0, 12.0 256.0 C 4.0 254.0, 2.0 244.0, 2.0 230.0 C 2.0 216.0, 4.0 206.0, 12.0 204.0 C 20.0 206.0, 32.0 212.0, 30.0 204.0 L 30 46 A 16 16 0 0 1 46 30 Z",
  
  // Piece 5 (Bot-Right): Top male tab (locks into Piece 2), Right flat, Bottom flat, Left male tab (locks into Piece 4)
  "M 46 30 L 164.0 30.0 C 172.0 32.0, 166.0 20.0, 164.0 12.0 C 166.0 4.0, 176.0 2.0, 190.0 2.0 C 204.0 2.0, 214.0 4.0, 216.0 12.0 C 214.0 20.0, 208.0 32.0, 216.0 30.0 L 334 30 A 16 16 0 0 1 350 46 L 350 414 A 16 16 0 0 1 334 430 L 46 430 A 16 16 0 0 1 30 414 L 30.0 256.0 C 32.0 248.0, 20.0 254.0, 12.0 256.0 C 4.0 254.0, 2.0 244.0, 2.0 230.0 C 2.0 216.0, 4.0 206.0, 12.0 204.0 C 20.0 206.0, 32.0 212.0, 30.0 204.0 L 30 46 A 16 16 0 0 1 46 30 Z"
];

// Refined corporate palette fills matching SERV5 Brand Identity
const PIECE_GRADIENTS = [
  { start: '#ffffff', end: '#f4f8fe', accent: '#245aa7', rim: '#d6e6f7' }, // 0: Pure/Sky
  { start: '#f8fbff', end: '#edf4fd', accent: '#1d4ed8', rim: '#cfe0f5' }, // 1: Ice Soft Blue
  { start: '#ffffff', end: '#fff7f2', accent: '#ea580c', rim: '#fed7aa' }, // 2: Pearl Warm Orange
  { start: '#f4faff', end: '#e5f2fd', accent: '#0284c7', rim: '#bae6fd' }, // 3: Tech Cyan/Blue
  { start: '#ffffff', end: '#f8fafc', accent: '#16205d', rim: '#e2e8f0' }, // 4: Sleek Crisp Pearl
  { start: '#f6f9fe', end: '#eaf1fa', accent: '#245aa7', rim: '#d1e0f2' }  // 5: Executive Navy/Ice
];

// Mathematical Scatter Offsets for the dynamic assembly / disassembly cycle
const SCATTER_TRANSFORMS = [
  // Piece 0 (Top-Left): drifts outward to top-left
  { x: -32, y: -24, rotate: -2.8, scale: 0.98 },
  // Piece 1 (Top-Mid): drifts upward with slight tilt
  { x: 3,   y: -32, rotate: 1.8,  scale: 0.98 },
  // Piece 2 (Top-Right): drifts outward to top-right
  { x: 32,  y: -25, rotate: -2.2, scale: 0.98 },
  // Piece 3 (Bot-Left): drifts outward to bottom-left
  { x: -32, y: 25,  rotate: 2.6,  scale: 0.98 },
  // Piece 4 (Bot-Mid): drifts downward with slight tilt
  { x: -3,  y: 34,  rotate: -1.8, scale: 0.98 },
  // Piece 5 (Bot-Right): drifts outward to bottom-right
  { x: 34,  y: 28,  rotate: 2.3,  scale: 0.98 }
];

export default function Serv5NewestPosts({ onOpenConsultation, lang = 'ar' }) {
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isScattered, setIsScattered] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Dynamic continuous cycle: Assemble -> Scatter -> Re-assemble
  useEffect(() => {
    if (isHovered) {
      setIsScattered(false);
      return;
    }

    // When scattered: stay separated for longer (5.5s) so the detached pieces can be admired and read comfortably
    // When assembled: stay locked together for 4s
    const delay = isScattered ? 5500 : 4000;
    const timeout = setTimeout(() => {
      setIsScattered((prev) => !prev);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isScattered, isHovered]);

  // Exact 6 Articles directly from live SERV5.com.eg website
  const posts = [
    {
      id: 'pizza-plaza-flagship',
      category: isRtl ? 'دراسة حالة وتطبيقات' : 'Case Study & Apps',
      date: isRtl ? '07 أكتوبر 2026' : 'Oct 07, 2026',
      title: isRtl
        ? 'تصميم مواقع وتطبيقات مطاعم احترافية: دراسة حالة Serv5 في تنفيذ بيتزا بلازا'
        : 'Professional Restaurant Website Design: Serv5.eg’s Pizza Plaza Project',
      excerpt: isRtl
        ? 'تحول رقمي شامل لسلسلة بيتزا بلازا يربط تطبيقات iOS و Android بنظام إدارة الفروع والمطابخ وسائقي التوصيل لحظياً.'
        : 'Omnichannel real-time dispatch ecosystem connecting mobile ordering apps with automated kitchen displays.',
      image: '/images/posts/post-1-pizza.webp',
      badgeClass: 'badge-blue',
      fullContent: isRtl ? [
        'التحدي التقني: كانت بيتزا بلازا تواجه ضغطاً هائلاً في أوقات الذروة مع بطء في مزامنة طلبات الفروع مع طابعات المطابخ.',
        'الحل الهندسي من Serv5: بناء معمارية سحابية Microservices تفصل استقبال الطلبات عن معالجة المدفوعات وتوزيع السائقين مع مزامنة لحظية عبر WebSockets.',
        'النتيجة الملموسة: ارتفاع نسبة الطلبات المباشرة بنسبة 280% وانخفاض وقت التوصيل بمعدل 18 دقيقة لكل طلب.'
      ] : [
        'Technical Challenge: Peak-hour traffic spikes caused synchronization delays between branch registers and kitchen display units.',
        'Serv5 Solution: Cloud microservices decoupled ordering from real-time dispatch, utilizing WebSockets for zero-latency kitchen print automation.',
        'Measurable Outcome: 280% increase in direct commission-free orders and an 18-minute reduction in average delivery cycles.'
      ]
    },
    {
      id: 'web-design-company-egypt',
      category: isRtl ? 'تكنولوجيا وأنظمة' : 'Technology & Systems',
      date: isRtl ? '22 سبتمبر 2026' : 'Sep 22, 2026',
      title: isRtl
        ? 'كيف تختار شركة تصميم مواقع في مصر 2026: دليل عملي خطوة بخطوة'
        : 'How to Choose a Web Design Company in Egypt 2026: A Practical Guide',
      excerpt: isRtl
        ? 'دليلك المفصل لاختيار الشريك التقني المناسب لمشروعك، وتقييم سابقة الأعمال والبنية التحتية السحابية والدعم الفني المستمر.'
        : 'A detailed blueprint for selecting the right engineering partner, evaluating portfolio pedigree, cloud infrastructure, and SLA.',
      image: '/images/posts/post-2-choose.webp',
      badgeClass: 'badge-navy',
      fullContent: isRtl ? [
        'أهمية تقييم سابقة الأعمال الحية والتأكد من سرعة المواقع على Core Web Vitals.',
        'فحص معايير الأمان وشهادات SSL وحماية قواعد البيانات السحابية.',
        'التأكد من توفير دعم فني استباقي 24/7 واتفاقية مستوى الخدمة SLA.'
      ] : [
        'Evaluating authentic live case studies and inspecting Core Web Vitals.',
        'Auditing SSL certificates, cloud databases, and OWASP compliance.',
        'Securing guaranteed 24/7 proactive technical response SLA.'
      ]
    },
    {
      id: 'website-planning-measurement',
      category: isRtl ? 'تطوير المواقع والمنصات' : 'Web Architecture',
      date: isRtl ? '22 سبتمبر 2026' : 'Sep 22, 2026',
      title: isRtl
        ? 'شركة تصميم مواقع 2026: دليلك من التخطيط حتى قياس الأداء'
        : 'Website Design Company 2026: From Planning to Performance Measurement',
      excerpt: isRtl
        ? 'كيف تخطط لمعمارية موقعك ومسارات تحويل الزوار (CRO) وقياس Core Web Vitals ومعدلات التحويل الفعلي للمبيعات.'
        : 'How to architect your digital platform, customer conversion funnels (CRO), Core Web Vitals, and real-time revenue analytics.',
      image: '/images/posts/post-3-planning.webp',
      badgeClass: 'badge-orange',
      fullContent: isRtl ? [
        'تحديد رحلة المستخدم (User Journey) وتسهيل مسارات الشراء المباشرة.',
        'قياس معدلات الارتداد وتحسين تجربة الهاتف المحمول Mobile-First.',
        'ربط منصات التحليلات وأدوات قياس المبيعات اللحظية.'
      ] : [
        'Mapping customer funnels and frictionless checkout pathways.',
        'Minimizing bounce rate via high-performance Mobile-First responsive UX.',
        'Connecting real-time attribution and revenue telemetry.'
      ]
    },
    {
      id: 'ai-sales-pipeline',
      category: isRtl ? 'ذكاء اصطناعي وأتمتة' : 'AI & Automation',
      date: isRtl ? '06 سبتمبر 2026' : 'Sep 06, 2026',
      title: isRtl
        ? 'كيف يغير الذكاء الاصطناعي في إدارة المبيعات مسار صفقاتك'
        : 'How AI in Sales Management Transforms Your Pipeline',
      excerpt: isRtl
        ? 'استكشف كيف ترفع أتمتة الـ CRM والمساعدين الأذكياء مثل سيلزاوي من معدل إغلاق الصفقات وتوفير مئات الساعات لفريق المبيعات.'
        : 'Explore how conversational sales automation and intelligent CRM assistants like Salezawy dramatically compress deal cycles.',
      image: '/images/posts/post-4-ai-pipeline.webp',
      badgeClass: 'badge-cyan',
      fullContent: isRtl ? [
        'الرد الفوري على استفسارات العملاء على مدار 24 ساعة عبر شات بوت ذكي مدرب.',
        'تأهيل العملاء المحتملين تلقائياً وجدولة مواعيد الاجتماعات مع مندوبي المبيعات.',
        'تحليل جودة المكالمات واستخراج التوصيات التسويقية بدقة.'
      ] : [
        'Autonomous 24/7 conversational lead engagement via custom LLMs.',
        'Automated qualification and discovery meeting dispatch.',
        'Real-time call sentiment analytics and actionable closing recommendations.'
      ]
    },
    {
      id: 'ai-sales-forecasting',
      category: isRtl ? 'استراتيجيات النمو' : 'Digital Strategy',
      date: isRtl ? '17 أغسطس 2026' : 'Aug 17, 2026',
      title: isRtl
        ? 'كيفية استخدام الذكاء الاصطناعي في التنبؤ بالمبيعات واتخاذ القرارات'
        : 'How to Use AI for Sales Forecasting and Decision-Making',
      excerpt: isRtl
        ? 'تحليل البيانات الضخمة للتنبؤ باتجاهات السوق وسلوك العملاء بدقة لاتخاذ قرارات استثمارية استباقية مبنية على حقائق رقمية.'
        : 'Harness predictive intelligence and big data modeling to anticipate market demand and steer strategic corporate growth.',
      image: '/images/posts/post-5-ai-forecast.webp',
      badgeClass: 'badge-navy',
      fullContent: isRtl ? [
        'استقراء سلوك المشترين وتحليل الأنماط الموسمية للمبيعات.',
        'تقليل الهدر في المخزون وتوجيه الحملات الإعلانية للشرائح الأعلى ربحية.',
        'اتخاذ قرارات تسعير ديناميكية مستندة إلى بيانات السوق الحية.'
      ] : [
        'Pattern recognition across historical customer purchasing cycles.',
        'Inventory loss reduction and high-LTV segment targeting.',
        'Dynamic market-driven pricing models.'
      ]
    },
    {
      id: 'website-importance-guide',
      category: isRtl ? 'الأصول الرقمية' : 'Digital Assets',
      date: isRtl ? '05 أغسطس 2026' : 'Aug 05, 2026',
      title: isRtl
        ? 'أهمية إنشاء موقع إلكتروني: دليلك لبناء حضور رقمي قوي لشركتك'
        : 'The Importance of Creating a Website: A Practical Guide for Businesses',
      excerpt: isRtl
        ? 'لماذا يعد الموقع الإلكتروني هو الأصل الرقمي الأكثر قيمة وأماناً لشركتك في بناء الثقة وتحقيق مبيعات مستدامة وحماية هويتك.'
        : 'Why a custom enterprise website remains your most valuable digital asset for customer trust, authority, and sustained revenue.',
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

  return (
    <section className="serv5-journal-section" id="blog">
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
          <div className="journal-eyebrow-wrap justify-center flex-wrap gap-2">
            <span
              className="journal-eyebrow-pill"
              style={{
                background: 'linear-gradient(135deg, rgba(238, 246, 255, 0.95) 0%, rgba(255, 247, 240, 0.95) 100%)',
                border: '1px solid rgba(234, 88, 12, 0.25)',
                boxShadow: '0 2px 10px rgba(36, 90, 167, 0.08)'
              }}
            >
              <span
                className="journal-eyebrow-dot"
                style={{
                  background: 'linear-gradient(135deg, #245aa7, #ea580c)'
                }}
              />
              <span>{isRtl ? 'أحدث المقالات ودراسات الحالة' : 'SERV5 JOURNAL · LATEST INSIGHTS'}</span>
            </span>

            {/* Interactive Dynamic Assembly State Indicator */}
            <button
              type="button"
              onClick={() => setIsScattered((prev) => !prev)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold cursor-pointer transition-all duration-300"
              style={{
                background: isScattered
                  ? 'linear-gradient(135deg, rgba(234, 88, 12, 0.12) 0%, rgba(249, 115, 22, 0.15) 100%)'
                  : 'linear-gradient(135deg, rgba(36, 90, 167, 0.1) 0%, rgba(234, 88, 12, 0.1) 100%)',
                border: isScattered
                  ? '1px solid rgba(234, 88, 12, 0.4)'
                  : '1px solid rgba(36, 90, 167, 0.25)',
                color: isScattered ? '#c2410c' : '#1e40af'
              }}
              title={isRtl ? 'اضغط لتفكيك أو تجميع قطع البازل' : 'Click to scatter or interlock puzzle'}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-ping"
                style={{
                  background: isScattered ? '#ea580c' : '#2563eb'
                }}
              />
              <span>
                {isScattered
                  ? (isRtl ? 'تفكيك تفاعلي للقطع...' : 'Dynamic Separation...')
                  : (isRtl ? 'ترابط بازل متكامل' : 'Interlocked State')}
              </span>
            </button>
          </div>

          <h2 className="journal-main-title">
            {isRtl ? (
              <>
                رؤى تقنية{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #245aa7 0%, #ea580c 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block'
                  }}
                >
                  تصنع الفارق
                </span>{' '}
                لمشروعك
              </>
            ) : (
              <>
                Insights That{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #245aa7 0%, #ea580c 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block'
                  }}
                >
                  Move Business
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
            2. THE INTERLOCKING JIGSAW PUZZLE COMPOSITION (2x3 GRID)
           ========================================================= */}
        <div className="serv5-puzzle-composition" aria-label="Interlocking Articles Puzzle Grid">
          <div className="puzzle-mesh-viewport">
            <div className="puzzle-grid-matrix">
              {posts.map((post, idx) => {
                const grad = PIECE_GRADIENTS[idx % PIECE_GRADIENTS.length];
                const scatter = SCATTER_TRANSFORMS[idx] || { x: 0, y: 0, rotate: 0, scale: 1 };

                return (
                  <motion.div
                    key={post.id}
                    className={`puzzle-piece-container piece-slot-${idx}`}
                    onClick={() => setSelectedArticle(post)}
                    role="button"
                    tabIndex={0}
                    initial={{ opacity: 0, scale: 0.92, y: 32 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    animate={
                      isScattered
                        ? {
                            x: scatter.x,
                            y: scatter.y,
                            rotate: scatter.rotate,
                            scale: scatter.scale
                          }
                        : {
                            x: 0,
                            y: 0,
                            rotate: 0,
                            scale: 1
                          }
                    }
                    transition={{
                      duration: isScattered ? 1.2 : 0.85,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    whileHover={{
                      y: -14,
                      scale: 1.04,
                      rotate: 0,
                      zIndex: 50,
                      transition: { duration: 0.25, ease: 'easeOut' }
                    }}
                    whileTap={{ scale: 0.98 }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedArticle(post);
                      }
                    }}
                    title={isRtl ? `عرض دراسة: ${post.title}` : `Read Case Study: ${post.title}`}
                  >
                    {/* The Mathematical Interlocking Jigsaw SVG Outline */}
                    <svg
                      viewBox="0 0 380 460"
                      className="puzzle-piece-svg"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <defs>
                        <linearGradient id={`puzzle-fill-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={grad.start} />
                          <stop offset="100%" stopColor={grad.end} />
                        </linearGradient>
                      </defs>

                      {/* 3D Extruded Depth Underlayer Rim (like physical puzzle piece) */}
                      <path
                        d={PUZZLE_PATHS[idx]}
                        fill={grad.rim}
                        transform="translate(0, 4)"
                        opacity="0.65"
                      />

                      {/* Main Puzzle Piece Contour */}
                      <path
                        d={PUZZLE_PATHS[idx]}
                        fill={`url(#puzzle-fill-${idx})`}
                        className="puzzle-contour-path"
                      />
                    </svg>

                    {/* Puzzle Piece Content (Safe Padded Center Zone) */}
                    <div className="puzzle-piece-body" dir={isRtl ? 'rtl' : 'ltr'}>
                      {/* Visual Media Thumbnail */}
                      <div className="puzzle-media-frame">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="puzzle-media-image"
                          loading="lazy"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = idx % 2 === 0 ? '/images/website-mockup-1.jpg' : '/images/website-mockup-2.jpg';
                          }}
                        />
                        <span className={`puzzle-category-badge ${post.badgeClass}`}>
                          {post.category}
                        </span>
                      </div>

                      {/* Metadata: Date */}
                      <div className="puzzle-meta-row">
                        <Calendar size={13} className="puzzle-meta-icon" />
                        <span>{post.date}</span>
                      </div>

                      {/* Title */}
                      <h3 className="puzzle-card-title">{post.title}</h3>

                      {/* Excerpt */}
                      <p className="puzzle-card-desc">{post.excerpt}</p>

                      {/* Action Link Button */}
                      <div className="puzzle-card-footer">
                        <button
                          type="button"
                          className="puzzle-read-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedArticle(post);
                          }}
                        >
                          <span>{isRtl ? 'قراءة التحليل الكامل' : 'Read Full Analysis'}</span>
                          <ArrowIcon size={14} className="puzzle-arrow-icon" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
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
                  <span className="journal-modal-tag">{selectedArticle.category}</span>
                  <span className="journal-modal-date">
                    <Calendar size={13} />
                    <span>{selectedArticle.date}</span>
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

              {/* Modal Media Frame */}
              <div className="journal-modal-media">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="journal-modal-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/website-mockup-1.jpg';
                  }}
                />
              </div>

              {/* Modal Content */}
              <div className="journal-modal-body">
                <h2 className="journal-modal-title">{selectedArticle.title}</h2>
                <p className="journal-modal-lead">{selectedArticle.excerpt}</p>

                {/* In-depth Article Breakdown */}
                <div className="journal-modal-sections">
                  <h4 className="journal-modal-section-title">
                    <Sparkles size={16} className="text-amber-500" />
                    <span>{isRtl ? 'أبرز المحاور والنتائج التقنية' : 'Key Engineering Insights'}</span>
                  </h4>
                  <ul className="journal-modal-list">
                    {selectedArticle.fullContent.map((point, pIdx) => (
                      <li key={pIdx} className="journal-modal-point">
                        <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modal Bottom CTA */}
                <div className="journal-modal-footer">
                  <button
                    type="button"
                    onClick={() => {
                      const title = selectedArticle.title;
                      setSelectedArticle(null);
                      onOpenConsultation(isRtl ? `طلب استشارة بخصوص: ${title}` : `Inquiry regarding: ${title}`);
                    }}
                    className="journal-modal-action-btn"
                  >
                    <BookOpen size={16} />
                    <span>{isRtl ? 'طلب دراسة معمارية مماثلة' : 'Request Architecture Consultation'}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
