import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  X,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Activity,
  Code2,
  TrendingUp,
  Cpu,
  ShieldCheck,
  Zap,
  MapPin,
  Heart,
  Lock
} from 'lucide-react';

/* ───────────────────────────────────────────────────────────────────
   SERV5 WORKS — INTERACTIVE ORBITAL PROJECT EXPLORER
   - The SERV5 logo anchors the center of the desktop orbit
   - Project cards move to a focus point when selected
   - Category filters and project choices remain visible and clickable
   - Existing project previews and case-study data are reused
   ─────────────────────────────────────────────────────────────────── */

/* ── 1. PIZZA PLAZA MICRO-UI: Live Fleet GPS & Order Dispatch ── */
function PizzaPlazaMockup({ isRtl }) {
  return (
    <div className="pizza-mockup-canvas">
      {/* Route SVG Map */}
      <svg className="pizza-map-bg" viewBox="0 0 280 120" fill="none">
        <path d="M10 30 H270 M10 60 H270 M10 90 H270 M60 10 V110 M140 10 V110 M220 10 V110" stroke="#cbd5e1" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
        <path
          d="M 30 85 C 80 85, 100 35, 170 35 C 210 35, 230 70, 250 70"
          stroke="#2563eb"
          strokeWidth="3.5"
          strokeLinecap="round"
          className="pizza-route-path"
        />
        <circle cx="30" cy="85" r="5" fill="#2563eb" />
        <circle cx="250" cy="70" r="14" fill="#2563eb" opacity="0.3" className="pizza-beacon-ripple" />
        <circle cx="250" cy="70" r="5" fill="#ef4444" />
      </svg>

      {/* Floating Order Alert Toast */}
      <div className="pizza-order-toast">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold pizza-scooter-pulse">
            🛵
          </div>
          <div className="text-right">
            <div className="text-[10px] font-bold text-slate-800 leading-tight">
              {isRtl ? 'طلب #4829 - جاري التوصيل' : 'Order #4829 In Transit'}
            </div>
            <div className="text-[9px] text-emerald-600 font-semibold">ETA: 12m · Live GPS</div>
          </div>
        </div>

        {/* Live Audio / Dispatch Equalizer */}
        <div className="audio-equalizer-bars">
          <div className="eq-bar" />
          <div className="eq-bar" />
          <div className="eq-bar" />
          <div className="eq-bar" />
        </div>
      </div>

      {/* Bottom Dispatch Info */}
      <div className="flex items-center justify-between text-[10px] font-mono text-slate-600 px-1">
        <span className="flex items-center gap-1 font-bold text-blue-600">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
          {isRtl ? '38 فرعاً نشطاً' : '38 Active Hubs'}
        </span>
        <span className="text-emerald-700 font-bold">1.2M+ Orders</span>
      </div>
    </div>
  );
}

/* ── 2. MEDPULSE HEALTH MICRO-UI: Live ECG Oscilloscope & Cloud Sync ── */
function MedPulseMockup({ isRtl }) {
  return (
    <div className="medpulse-mockup-canvas">
      {/* Top Telemetry Bar */}
      <div className="flex items-center justify-between px-1 text-[10px] font-mono">
        <div className="flex items-center gap-1.5">
          <Heart size={13} className="text-rose-500 medpulse-heart-icon" fill="#f43f5e" />
          <span className="font-bold text-slate-800">74 BPM</span>
        </div>
        <div className="flex items-center gap-1 text-emerald-600 font-bold">
          <Activity size={12} className="animate-pulse" />
          <span>99.99% Uptime</span>
        </div>
      </div>

      {/* Glowing ECG Waveform SVG */}
      <div className="relative py-1">
        <svg className="medpulse-ecg-svg" viewBox="0 0 280 60" fill="none">
          <path
            d="M 0 30 L 50 30 L 60 10 L 70 50 L 80 15 L 90 35 L 100 30 L 170 30 L 180 8 L 190 52 L 200 18 L 210 33 L 220 30 L 280 30"
            stroke="#10b981"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="heartbeat-svg-wave"
          />
        </svg>
      </div>

      {/* Cloud Nodes Sync Strip */}
      <div className="cloud-sync-orbit">
        <div className="sync-node-ring">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        </div>
        <div className="text-[10px] font-bold text-slate-700 bg-white/90 border border-emerald-200 px-2.5 py-0.5 rounded-full shadow-xs">
          {isRtl ? '14 مركز طبي مربوط مشفر EHR' : '14 EHR Clinics Encrypted'}
        </div>
        <div className="sync-node-ring">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        </div>
      </div>
    </div>
  );
}

/* ── 3. LUXESTORE ARABIA MICRO-UI: 3D Holographic Luxury & Speed Gauge ── */
function LuxeStoreMockup({ isRtl }) {
  return (
    <div className="luxestore-mockup-canvas">
      {/* Speed Gauge */}
      <div className="luxe-speed-gauge">
        <Zap size={11} className="text-amber-500" fill="#f59e0b" />
        <span>0.4s Headless API</span>
      </div>

      {/* 3D Floating Luxury Hologram */}
      <div className="luxe-floating-gem my-1">
        <span className="text-4xl filter drop-shadow-md">💎</span>
      </div>

      {/* Gold Shimmer Tag */}
      <div className="luxe-gold-shimmer-tag mb-1.5">
        {isRtl ? 'تشكيلة الخليج الفاخرة · Core Web Vitals 100/100' : 'Luxury Flagship · 100/100 Vitals'}
      </div>

      <div className="text-[10px] font-mono text-amber-800 font-bold">
        $4.6M+ GMV · +185% Conversion
      </div>
    </div>
  );
}

/* ── 4. ZATCA TAX GATEWAY MICRO-UI: Holographic Laser Scanner ── */
function ZatcaMockup({ isRtl }) {
  return (
    <div className="zatca-mockup-canvas">
      {/* Holographic Laser Scanner Beam */}
      <div className="zatca-scanner-line" />

      {/* Top Compliance Badge */}
      <div className="flex items-center justify-between px-1">
        <div className="zatca-verified-stamp">
          <ShieldCheck size={12} className="text-emerald-600" />
          <span>{isRtl ? 'معتمد ZATCA المرحلة الثانية' : 'ZATCA Phase 2 Cleared'}</span>
        </div>
        <span className="text-[10px] font-mono text-blue-700 font-bold">99.98% Rate</span>
      </div>

      {/* QR & Cryptographic Matrix */}
      <div className="flex items-center justify-center gap-3 my-1">
        <div className="w-12 h-12 bg-white border border-slate-300 p-1 rounded-md shadow-xs grid grid-cols-4 gap-0.5">
          {Array.from({ length: 16 }).map((_, i) => (
            <span
              key={i}
              className={`rounded-[1px] ${
                [0, 1, 3, 4, 7, 8, 10, 12, 15].includes(i) ? 'bg-slate-800' : 'bg-slate-100'
              }`}
            />
          ))}
        </div>
        <div className="text-right">
          <div className="text-[11px] font-bold text-slate-800">XML Digital Stamp</div>
          <div className="text-[9px] font-mono text-emerald-600 font-bold">&lt;DigestMethod SHA-256&gt;</div>
          <div className="text-[9px] font-mono text-blue-600 font-semibold">Latency: &lt;120ms</div>
        </div>
      </div>

      {/* Scrolling Hash Stream */}
      <div className="zatca-hash-stream">
        7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069 5.8M+ Invoices
      </div>
    </div>
  );
}

/* ── 5. NAUZ COFFEE MICRO-UI: Procedural Steam & Geofence Radar ── */
function NauzCafeMockup({ isRtl }) {
  return (
    <div className="nauz-mockup-canvas">
      {/* Radar geofence expanding ring */}
      <div className="nauz-geofence-pulse" />

      {/* Steaming Coffee Cup with Animated Steam */}
      <div className="nauz-steam-cup-wrap my-1">
        <div className="flex items-center justify-center gap-1.5 h-6">
          <span className="text-xs steam-wisp-1 opacity-70">~</span>
          <span className="text-sm steam-wisp-2 opacity-80">~</span>
          <span className="text-xs steam-wisp-3 opacity-60">~</span>
        </div>
        <span className="text-3xl filter drop-shadow-md">☕</span>
      </div>

      {/* Proximity Alert Pill */}
      <div className="bg-amber-100/90 border border-amber-300 text-amber-900 text-[10px] font-bold px-3 py-0.5 rounded-full shadow-xs flex items-center gap-1.5 mb-1">
        <MapPin size={11} className="text-amber-700 animate-bounce" />
        <span>{isRtl ? 'اقتراب العميل (450م): بدأ التحضير' : 'Proximity 450m: Auto-Brewing'}</span>
      </div>

      <div className="text-[10px] font-mono text-amber-800 font-bold">
        180K+ Users · 85% Skip-The-Line
      </div>
    </div>
  );
}

/* ── 6. AL-RAJHI BANKING BRIDGE MICRO-UI: Golden Microchip & Circuit Traces ── */
function AlRajhiMockup({ isRtl }) {
  return (
    <div className="alrajhi-mockup-canvas">
      {/* Top Security Header */}
      <div className="flex items-center justify-between px-1">
        <div className="crypto-shield-badge">
          <Lock size={11} className="text-blue-700" />
          <span>AES-256 SAMA Compliant</span>
        </div>
        <span className="text-[10px] font-mono text-emerald-600 font-bold">80ms RT</span>
      </div>

      {/* Cyber Chip & Circuit Traces */}
      <div className="flex items-center justify-center gap-4 my-1">
        <div className="alrajhi-chip-body flex items-center justify-center">
          <div className="alrajhi-chip-lines" />
          <Cpu size={18} className="text-amber-900/70" />
        </div>

        {/* Animated Electric Circuit SVG */}
        <svg width="100" height="35" viewBox="0 0 100 35" fill="none">
          <path
            d="M 0 17 H 30 L 45 5 H 70 L 85 28 H 100"
            stroke="#38bdf8"
            strokeWidth="2"
            strokeLinecap="round"
            className="electric-circuit-trace"
          />
          <circle cx="100" cy="28" r="3" fill="#10b981" />
        </svg>
      </div>

      {/* Daily Volume Ticker */}
      <div className="flex items-center justify-between text-[10px] font-mono px-1">
        <span className="text-slate-600">{isRtl ? 'التسوية الآلية اليومية:' : 'Daily Volume:'}</span>
        <span className="font-bold text-blue-700 text-[11px]">$12M+ / Day</span>
      </div>
    </div>
  );
}

/* ── Featured project and its existing interface preview ── */
function FeaturedProjectCard({ project, isRtl, onOpen }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.24, ease: 'easeOut' }}
      className="serv5-portfolio-card serv5-project-detail"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div
        className="serv5-website-preview"
        style={{ background: project.cardColor, '--preview-accent': project.accentColor }}
      >
        <div className="serv5-website-preview-nav">
          <div className="serv5-website-preview-window-controls" aria-hidden="true">
            <i /><i /><i />
          </div>
          <span className="serv5-website-preview-address" aria-hidden="true" />
          <a
            className="serv5-website-preview-open"
            href={project.url}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
            aria-label={`${isRtl ? 'معاينة الموقع' : 'Preview website'}: ${project.title}`}
          >
            <span>{isRtl ? 'معاينة' : 'Preview'}</span>
            <ExternalLink size={12} aria-hidden="true" />
          </a>
        </div>
        <div className="serv5-website-preview-art">
          <img src="/images/website-mockup-1.jpg" alt="" loading="lazy" />
        </div>
      </div>

      <div className="portfolio-card-content">
        <h3 className="portfolio-card-title">{project.title}</h3>
        <p className="portfolio-card-desc">{project.overview}</p>
        <button className="serv5-read-more" type="button" onClick={onOpen}>
          <span>{isRtl ? 'اقرأ المزيد' : 'Read more'}</span>
          <ArrowUpRight size={15} aria-hidden="true" />
        </button>
      </div>
    </motion.article>
  );
}

export default function NewestPostsSection({ onOpenConsultation, lang = 'ar' }) {
  const isRtl = lang === 'ar';
  const [modalDevice, setModalDevice] = useState('desktop');

  const renderProjectIcon = (id, accentColor) => {
    switch (id) {
      case 'pizza-plaza':
        return (
          <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" stroke={accentColor} strokeWidth="2.5">
            <circle cx="24" cy="24" r="20" stroke="#f59e0b" fill="#fffbeb" />
            <path d="M24 10 L34 36 L14 36 Z" fill="#ef4444" stroke="#b91c1c" />
            <circle cx="24" cy="22" r="2.5" fill="#fef08a" />
            <circle cx="20" cy="28" r="2" fill="#ffffff" />
            <circle cx="28" cy="29" r="2" fill="#ffffff" />
          </svg>
        );
      case 'medpulse-cloud':
        return (
          <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" stroke={accentColor} strokeWidth="2.5">
            <rect x="6" y="6" width="36" height="36" rx="10" fill="#ecfdf5" stroke="#10b981" />
            <path d="M12 24 H20 L23 16 L27 32 L30 24 H36" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'luxestore-arabia':
        return (
          <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" stroke={accentColor} strokeWidth="2.5">
            <circle cx="24" cy="24" r="18" fill="#fffbeb" stroke="#d97706" />
            <polygon points="24,14 32,22 28,34 20,34 16,22" fill="#fef3c7" stroke="#b45309" strokeWidth="2" />
          </svg>
        );
      case 'zatca-gateway':
        return (
          <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" stroke={accentColor} strokeWidth="2.5">
            <rect x="8" y="8" width="32" height="32" rx="8" fill="#eff6ff" stroke="#2563eb" />
            <path d="M24 14 V34 M14 24 H34" stroke="#1d4ed8" strokeWidth="3" strokeLinecap="round" />
            <circle cx="24" cy="24" r="5" fill="#3b82f6" />
          </svg>
        );
      case 'nauz-cafe':
        return (
          <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" stroke={accentColor} strokeWidth="2.5">
            <circle cx="24" cy="24" r="18" fill="#fff7ed" stroke="#b45309" />
            <path d="M16 20 H32 V26 C32 30 28 34 24 34 C20 34 16 30 16 26 Z" fill="#fed7aa" stroke="#78350f" strokeWidth="2" />
            <path d="M32 22 H36 C38 22 38 26 36 26 H32" stroke="#78350f" strokeWidth="2" />
          </svg>
        );
      case 'alrajhi-gateway':
        return (
          <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" stroke={accentColor} strokeWidth="2.5">
            <rect x="6" y="6" width="36" height="36" rx="10" fill="#f0f9ff" stroke="#0284c7" />
            <path d="M24 12 L34 24 L24 36 L14 24 Z" fill="#0284c7" />
            <path d="M24 17 L29 24 L24 31 L19 24 Z" fill="#ffffff" />
          </svg>
        );
      default:
        return <Sparkles size={28} className="text-blue-600" />;
    }
  };

  const projects = [
    {
      id: 'pizza-plaza',
      number: '№ 01',
      title: isRtl ? 'منصة وتطبيق بيتزا بلازا' : 'Pizza Plaza Omnichannel Platform',
      client: isRtl ? 'شركة بيتزا بلازا الدولية' : 'Pizza Plaza International',
      category: 'mobile',
      categoryLabel: isRtl ? 'تطبيقات الجوال والـ POS' : 'Mobile Apps & POS',
      year: '2024',
      cardColor: '#f4f8ff',
      accentColor: '#2563eb',
      mockupPlaceholder: '🍕',
      url: 'https://pizzaplaza.com',
      metrics: [
        { label: isRtl ? 'الطلبات المنجزة' : 'Orders Processed', val: '1.2M+' },
        { label: isRtl ? 'فروع مغطاة' : 'Active Branches', val: '38 فرعاً' },
        { label: isRtl ? 'تقييم المتجر' : 'Store Rating', val: '4.9 ★' }
      ],
      overview: isRtl
        ? 'تحول رقمي شامل لسلسلة مطاعم بيتزا بلازا يربط تطبيقات العملاء على iOS و Android بنظام إدارة الفروع والمطابخ ونقاط البيع وسائقي التوصيل لحظياً.'
        : 'Enterprise omnichannel transformation for Pizza Plaza franchise, synchronizing customer mobile apps with kitchen display and fleet GPS dispatch.',
      techStack: ['Flutter', 'Node.js Microservices', 'Firebase', 'Apple Pay / Mada', 'Redis Real-Time'],
      highlights: [
        isRtl ? 'معالجة ذروات الطلب حتى 50,000 طلب يومياً' : 'Peak load handling up to 50k daily orders',
        isRtl ? 'ربط آلي مع نقاط البيع وطابعات المطابخ' : 'Direct POS and kitchen printer integration',
        isRtl ? 'تتبع لحظي للسائقين عبر الخرائط المدمجة' : 'Real-time driver tracking with geofenced ETA'
      ]
    },
    {
      id: 'medpulse-cloud',
      number: '№ 02',
      title: isRtl ? 'شبكة مراكز وصيدليات مدبولس' : 'MedPulse Health Cloud Network',
      client: isRtl ? 'مجموعة مدبولس الطبية' : 'MedPulse Healthcare Group',
      category: 'cloud',
      categoryLabel: isRtl ? 'أنظمة سحابية وERP' : 'Cloud Architecture & ERP',
      year: '2024',
      cardColor: '#f0fdf4',
      accentColor: '#10b981',
      mockupPlaceholder: '🏥',
      url: 'https://medpulse-health.com',
      metrics: [
        { label: isRtl ? 'حجوزات واستشارات' : 'Consultations', val: '450K+' },
        { label: isRtl ? 'استقرار السيرفرات' : 'System Uptime', val: '99.99%' },
        { label: isRtl ? 'المراكز المربوطة' : 'Connected Clinics', val: '14 مركز' }
      ],
      overview: isRtl
        ? 'منظومة سحابية متكاملة لربط شبكة عيادات ومراكز صيدليات مدبولس مع الملف الطبي الإلكتروني (EHR) المشفر والربط مع منظومة الفوترة والتأمين.'
        : 'Enterprise healthcare cloud connecting 14 medical centers with end-to-end encrypted electronic health records and real-time inventory.',
      techStack: ['Next.js 14', 'PostgreSQL', 'Docker / Kubernetes', 'Tier-4 Cloud', 'FHIR Protocol'],
      highlights: [
        isRtl ? 'تشفير كامل للبيانات الطبية وفق معايير HIPAA' : 'Full HIPAA-compliant medical data encryption',
        isRtl ? 'ربط لحظي مع مخازن الأدوية ومستودعات التوزيع' : 'Live pharmaceutical inventory sync across stores',
        isRtl ? 'حجز موعد أونلاين في أقل من 30 ثانية' : 'Sub-30s instant patient booking engine'
      ]
    },
    {
      id: 'luxestore-arabia',
      number: '№ 03',
      title: isRtl ? 'متجر لوكس ستور للموضة الفاخرة' : 'LuxeStore Arabia Omnichannel Fashion',
      client: isRtl ? 'لوكس ستور العربية' : 'LuxeStore Arabia Co.',
      category: 'ecommerce',
      categoryLabel: isRtl ? 'منصة تجارة إلكترونية' : 'Luxury E-Commerce',
      year: '2024',
      cardColor: '#fffbeb',
      accentColor: '#d97706',
      mockupPlaceholder: '✨',
      url: 'https://luxestore-arabia.com',
      metrics: [
        { label: isRtl ? 'حجم المبيعات السنوي' : 'Annual GMV', val: '$4.6M+' },
        { label: isRtl ? 'زمن تحميل الصفحة' : 'Page Speed', val: '0.4s' },
        { label: isRtl ? 'معدل التحويل' : 'Conversion Rate', val: '+185%' }
      ],
      overview: isRtl
        ? 'متجر إلكتروني فاخر صُمم بأحدث تقنيات Headless E-Commerce لصالح لوكس ستور في الخليج مع تجربة تسوق بصرية فائقة السرعة ودعم بوابات الدفع المحلية.'
        : 'Flagship luxury fashion destination engineered with headless commerce architecture, sub-second latency and multi-currency localized checkout.',
      techStack: ['React / Vite', 'Shopify Plus Headless', 'TailwindCSS', 'Cloudflare Edge CDN', 'Mada API'],
      highlights: [
        isRtl ? 'زمن استجابة فائق وحصول على 100/100 في Core Web Vitals' : '100/100 Google Core Web Vitals rating',
        isRtl ? 'دعم التقسيط والدفع بالريال والدرهم والدولار' : 'Multi-currency checkout with installment bridges',
        isRtl ? 'فلترة بحث لحظية O(1) لأكثر من 15,000 منتج' : 'Sub-millisecond faceted search across 15k products'
      ]
    },
    {
      id: 'zatca-gateway',
      number: '№ 04',
      title: isRtl ? 'بوابة سيرف فايف للفوترة (ZATCA)' : 'SERV5 ZATCA Phase-2 Tax Gateway',
      client: isRtl ? 'هيئة الزكاة والضريبة والجمارك' : 'Tax & Enterprise Authority Bridge',
      category: 'enterprise',
      categoryLabel: isRtl ? 'حلول مالية وحكومية' : 'FinTech & Gov Integration',
      year: '2024',
      cardColor: '#f8fafc',
      accentColor: '#1e40af',
      mockupPlaceholder: '🏛️',
      url: 'https://serv5.com/zatca-engine',
      metrics: [
        { label: isRtl ? 'فواتير مشفرة معتمدة' : 'Compliant Invoices', val: '5.8M+' },
        { label: isRtl ? 'نسبة القبول الفوري' : 'Instant Acceptance', val: '99.98%' },
        { label: isRtl ? 'شركات مربوطة' : 'Connected Enterprises', val: '280+' }
      ],
      overview: isRtl
        ? 'بوابة ربط وامتثال سحابية معتمدة للتكامل مع منصة "فاتورة" لهيئة الزكاة والضريبة والجمارك بالمملكة العربية السعودية وتوليد الأختام الرقمية وتوقيع فواتير XML.'
        : 'Certified cloud integration bridge for the Saudi ZATCA Fatoora Phase-2 e-invoicing ecosystem with real-time XML cryptographic stamping.',
      techStack: ['Python', 'FastAPI', 'Redis', 'Cryptography SDK', 'ZATCA REST Bridge'],
      highlights: [
        isRtl ? 'امتثال تام 100% لمتطلبات المرحلة الثانية' : '100% audited Phase-2 compliance certificate',
        isRtl ? 'توقيع الفاتورة وإرسالها للهيئة في أقل من 120ms' : 'Sub-120ms signing and clearance latency',
        isRtl ? 'لوحة تحكم مركزية لمراقبة الأخطاء لحظياً' : 'Central monitoring dashboard for invoice clearance'
      ]
    },
    {
      id: 'nauz-cafe',
      number: '№ 05',
      title: isRtl ? 'تطبيق ومنظومة نايز كافيه' : 'Nauz Specialty Coffee Platform',
      client: isRtl ? 'مجموعة نايز كافيه' : 'Nauz Coffee Group',
      category: 'mobile',
      categoryLabel: isRtl ? 'تطبيقات الجوال والولاء' : 'Mobile App & Loyalty',
      year: '2024',
      cardColor: '#fbf7ee',
      accentColor: '#b45309',
      mockupPlaceholder: '☕',
      url: 'https://nauz.cafe',
      metrics: [
        { label: isRtl ? 'المستخدمين النشطين' : 'Active Users', val: '180K+' },
        { label: isRtl ? 'الطلب المسبق السريع' : 'Skip The Line Orders', val: '85%' },
        { label: isRtl ? 'نقاط الولاء المكتسبة' : 'Loyalty Points', val: '2.4M' }
      ],
      overview: isRtl
        ? 'تطبيق جوال مميز لعشاق القهوة المختصة مع نظام طلب مسبق (Order Ahead) وبرنامج ولاء ذكي يتيح استلام القهوة دون أي انتظار.'
        : 'Specialty coffee digital ecosystem featuring drive-thru order-ahead, smart loyalty reward tiering and Apple Pay checkout.',
      techStack: ['Flutter', 'Node.js', 'Apple Pay', 'Push Notification Engine'],
      highlights: [
        isRtl ? 'خاصية التجهيز عند الاقتراب عبر GPS' : 'Auto-brew trigger when customer is within 500m',
        isRtl ? 'برنامج مكافآت ونقاط ولاء تفاعلي' : 'Gamified coffee passport & reward tiers',
        isRtl ? 'تخصيص كامل لحبوب البن وطريقة التحضير' : 'Granular bean & milk customization options'
      ]
    },
    {
      id: 'alrajhi-gateway',
      number: '№ 06',
      title: isRtl ? 'بوابة الربط المصرفي الراجحي' : 'Al-Rajhi Banking Financial Bridge',
      client: isRtl ? 'شراكة مصرفية معتمدة' : 'Certified Financial Network',
      category: 'enterprise',
      categoryLabel: isRtl ? 'بنية تحتية مصرفية' : 'Banking API Infrastructure',
      year: '2024',
      cardColor: '#f1f5f9',
      accentColor: '#1e3a8a',
      mockupPlaceholder: '💳',
      url: 'https://serv5.com/banking-bridge',
      metrics: [
        { label: isRtl ? 'المعاملات المالية اليومية' : 'Daily Volume', val: '$12M+' },
        { label: isRtl ? 'زمن الاستجابة' : 'Response Time', val: '80ms' },
        { label: isRtl ? 'أمان التشفير' : 'Encryption Standard', val: 'AES-256' }
      ],
      overview: isRtl
        ? 'بنية تحتية برمجية مؤمنة للربط المباشر مع الحسابات المصرفية وبوابات الدفع لمصرف الراجحي تدعم التحويلات الآلية وإشعارات السداد اللحظية.'
        : 'Enterprise banking middleware bridging corporate billing systems with Al-Rajhi direct payment gateways with bank-grade tokenization.',
      techStack: ['Go (Golang)', 'HSM Security', 'Docker', 'Redis', 'Banking REST Bridge'],
      highlights: [
        isRtl ? 'تكامل مصرفي مؤمن وفق معايير مؤسسة النقد SAMA' : 'SAMA-compliant enterprise banking security',
        isRtl ? 'تسوية مالية لحظية بدون أي أخطاء بشرية' : 'Instant automated ledger reconciliation',
        isRtl ? 'دعم التحويلات الجماعية ومطابقة الفواتير' : 'Mass batch disbursement and invoice matching'
      ]
    }
  ];

  // Category selection and the featured project selection are separate controls.
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id ?? null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalAnimating, setIsModalAnimating] = useState(false);

  const categories = [
    { id: 'all', label: isRtl ? 'كل المشاريع' : 'All projects' },
    { id: 'mobile', label: isRtl ? 'تطبيقات الجوال وPOS' : 'Mobile & POS' },
    { id: 'ecommerce', label: isRtl ? 'التجارة الإلكترونية' : 'E-commerce' },
    { id: 'cloud', label: isRtl ? 'السحابة وERP' : 'Cloud & ERP' },
    { id: 'enterprise', label: isRtl ? 'حلول المؤسسات' : 'Enterprise' }
  ];

  const filteredProjects = projects.filter((p) => {
    return activeCategory === 'all' || p.category === activeCategory;
  });

  const selectCategory = (categoryId) => {
    setActiveCategory(categoryId);
    const firstProject = projects.find((project) => categoryId === 'all' || project.category === categoryId);
    setActiveProjectId(firstProject?.id ?? null);
  };

  const featuredProject = filteredProjects.find((project) => project.id === activeProjectId) || filteredProjects[0];
  const featuredIndex = filteredProjects.findIndex((project) => project.id === featuredProject?.id);

  const orbitalProjects = filteredProjects.map((project, index) => {
    const slot = filteredProjects.length
      ? (index - featuredIndex + filteredProjects.length) % filteredProjects.length
      : 0;
    const angle = -Math.PI / 2 + (slot * Math.PI * 2) / Math.max(filteredProjects.length, 1);

    return {
      ...project,
      orbitLeft: `${50 + Math.cos(angle) * 31}%`,
      orbitTop: `${50 + Math.sin(angle) * 39}%`,
      isSelected: project.id === featuredProject?.id
    };
  });

  // Close modal with ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        handleCloseProject();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setIsModalAnimating(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseProject = () => {
    setIsModalAnimating(false);
    setTimeout(() => {
      setSelectedProject(null);
      document.body.style.overflow = 'auto';
    }, 280);
  };

  return (
    <section className="newest-works-section relative overflow-hidden" id="portfolio">
      <div className="container">
        <div className="newest-header-wrapper serv5-portfolio-heading">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4 leading-tight">
              {isRtl ? (
                <>
                  أعمال استثنائية.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600">
                    إنجازات تدوم.
                  </span>
                </>
              ) : (
                <>
                  Featured Works.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600">
                    Lasting Impact.
                  </span>
                </>
              )}
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {isRtl
                ? 'استكشف كافة المنظومات والتطبيقات الرائدة المطورة بواسطة سيرف فايف والتي تخدم ملايين المستخدمين يومياً.'
                : 'Explore our deployed enterprise platforms, cloud architectures, and mobile ecosystems serving millions daily.'}
            </p>
          </motion.div>

        </div>

        <div className="serv5-portfolio-showcase">
          <motion.div
            className="serv5-portfolio-tabs"
            role="group"
            aria-label={isRtl ? 'تصنيفات الأعمال' : 'Work categories'}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            {categories.map((category) => {
              const count = category.id === 'all'
                ? projects.length
                : projects.filter((project) => project.category === category.id).length;

              return (
                <button
                  key={category.id}
                  type="button"
                  aria-pressed={activeCategory === category.id}
                  className={`cat-pill-btn ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => selectCategory(category.id)}
                >
                  <span>{category.label}</span>
                  <span className="serv5-portfolio-tab-count">{count}</span>
                </button>
              );
            })}
          </motion.div>

          <motion.div
            className="serv5-orbital-explorer"
            dir={isRtl ? 'rtl' : 'ltr'}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
          >
            <div
              className="serv5-orbital-stage"
              role="group"
              aria-label={isRtl ? 'مشاريع سيرف فايف حول شعار الشركة' : 'SERV5 projects orbiting the company logo'}
            >
              <div className="serv5-orbital-path serv5-orbital-path-primary" aria-hidden="true" />
              <div className="serv5-orbital-path serv5-orbital-path-secondary" aria-hidden="true" />

              <div className="serv5-orbital-core">
                <img className="serv5-orbital-logo" src="/serv5-official-logo.webp" alt="SERV5" />
              </div>

              <div className="serv5-orbital-projects">
                <AnimatePresence initial={false}>
                  {orbitalProjects.map((project) => (
                    <motion.button
                      key={project.id}
                      type="button"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`serv5-orbit-project-choice ${project.isSelected ? 'active' : ''}`}
                      style={{
                        left: project.orbitLeft,
                        top: project.orbitTop,
                        '--project-accent': project.accentColor,
                        '--project-tint': project.cardColor
                      }}
                      onClick={() => setActiveProjectId(project.id)}
                      aria-pressed={project.isSelected}
                      aria-label={`${isRtl ? 'عرض مشروع' : 'Show project'}: ${project.title}`}
                    >
                      <span className="serv5-orbit-project-copy">
                        <span className="serv5-orbit-project-title">{project.title}</span>
                        <span className="serv5-orbit-project-category">{project.categoryLabel}</span>
                      </span>
                      {project.isSelected && (
                        <span className="serv5-orbit-selected-label">
                          {isRtl ? 'المشروع المختار' : 'Selected'}
                        </span>
                      )}
                    </motion.button>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            <div className="serv5-project-featured">
              <AnimatePresence mode="wait" initial={false}>
                {featuredProject && (
                  <FeaturedProjectCard
                    key={featuredProject.id}
                    project={featuredProject}
                    isRtl={isRtl}
                    onOpen={() => handleOpenProject(featuredProject)}
                  />
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── FULL PROJECT DETAIL INSPECTOR MODAL ── */}
      {selectedProject && (
        <div
          className={`project-detail-overlay ${isModalAnimating ? 'is-visible' : 'is-hiding'}`}
          onClick={handleCloseProject}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div
            className="project-detail-canvas"
            style={{ '--modal-tint': selectedProject.cardColor, '--modal-accent': selectedProject.accentColor }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="modal-top-control-bar">
              <div className="modal-top-tags">
                <span className="modal-number-badge">{selectedProject.number}</span>
                <span className="modal-category-chip">{selectedProject.categoryLabel}</span>
                <span className="modal-year-chip">{selectedProject.year}</span>
              </div>

              <button
                type="button"
                className="btn-modal-close cursor-pointer"
                onClick={handleCloseProject}
                aria-label={isRtl ? 'إغلاق' : 'Close details'}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content Grid */}
            <div className="modal-body-layout">
              {/* Narrative Column */}
              <div className="modal-narrative-column">
                <h1 className="modal-hero-title" id="project-modal-title">
                  {selectedProject.title}
                </h1>
                <p className="modal-client-author">{selectedProject.client}</p>

                {/* Overview */}
                <div className="modal-narrative-block">
                  <h4 className="modal-sub-label">{isRtl ? 'نظرة عامة وتفاصيل المنظومة' : 'Overview & Architecture'}</h4>
                  <p className="modal-long-desc">{selectedProject.overview}</p>
                </div>

                {/* Engineering Highlights */}
                <div className="modal-narrative-block">
                  <h4 className="modal-sub-label">{isRtl ? 'أبرز الإنجازات التقنية والـ KPIs' : 'Key Engineering Deliverables'}</h4>
                  <ul className="modal-highlights-list">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="highlight-item">
                        <CheckCircle2 size={16} className="highlight-check" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Chips */}
                <div className="modal-narrative-block">
                  <h4 className="modal-sub-label">{isRtl ? 'التقنيات والبنية المستخدمة' : 'Technology Stack'}</h4>
                  <div className="modal-tech-pills">
                    {selectedProject.techStack.map((tech, i) => (
                      <span key={i} className="tech-stack-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="modal-actions-row">
                  <button
                    type="button"
                    className="btn-request-similar cursor-pointer"
                    onClick={() => {
                      handleCloseProject();
                      onOpenConsultation(
                        isRtl
                          ? `طلب دراسة مشروع مماثل لـ ${selectedProject.title}`
                          : `Consultation for build similar to ${selectedProject.title}`
                      );
                    }}
                  >
                    <span>{isRtl ? 'طلب مشروع مماثل الآن' : 'Build Similar Platform'}</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>

              {/* Visual Column */}
              <div className="modal-visual-column">
                <div className="modal-browser-mockup">
                  <div className="mockup-browser-bar flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="browser-traffic-dots">
                        <span className="dot-red" />
                        <span className="dot-yellow" />
                        <span className="dot-green" />
                      </div>
                      <div className="browser-address-field">
                        <span className="browser-secure-lock">🔒</span>
                        <span className="browser-url-text">{selectedProject.url}</span>
                      </div>
                    </div>
                    {/* Device Viewport Toggle Buttons */}
                    <div className="flex items-center gap-1 bg-slate-800/80 p-0.5 rounded-lg border border-slate-700/60">
                      <button
                        type="button"
                        onClick={() => setModalDevice('desktop')}
                        className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${modalDevice === 'desktop' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
                      >
                        💻 Desktop
                      </button>
                      <button
                        type="button"
                        onClick={() => setModalDevice('mobile')}
                        className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${modalDevice === 'mobile' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
                      >
                        📱 Mobile
                      </button>
                    </div>
                  </div>

                  <div className={`mockup-screen-preview ${modalDevice === 'mobile' ? 'preview-mobile-frame' : 'preview-desktop-frame'}`}>
                    <div className="preview-hero-art">
                      <div className="preview-icon-wrapper mb-2">
                        {renderProjectIcon(selectedProject.id, selectedProject.accentColor)}
                      </div>
                      <div className="preview-headline-box">
                        <span className="preview-mini-title">{selectedProject.title}</span>
                        <span className="preview-mini-author">Engineered by SERV5 • {selectedProject.year}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metrics Cards */}
                <div className="modal-metrics-grid">
                  {selectedProject.metrics.map((m, i) => (
                    <div key={i} className="metric-kpi-card">
                      <span className="kpi-value">{m.val}</span>
                      <span className="kpi-label">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
