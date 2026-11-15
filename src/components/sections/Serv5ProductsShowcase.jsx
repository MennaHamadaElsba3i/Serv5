import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Filter,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export default function Serv5ProductsShowcase({ onOpenConsultation, lang = 'ar' }) {
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  // Categories list
  const categories = useMemo(() => [
    { id: 'all', ar: 'الكل (جميع المنتجات)', en: 'All Products' },
    { id: 'ai', ar: 'مساعد مبيعات بالذكاء الاصطناعي (سيلزاوي)', en: 'AI Sales Assistant (Salesawy)' },
    { id: 'erp', ar: 'أنظمة تخطيط الموارد والفوترة (ERP)', en: 'Enterprise ERP & ZATCA' },
    { id: 'delivery', ar: 'تطبيقات التوصيل والمطاعم (فود سويت)', en: 'F&B & Delivery Fleet' },
    { id: 'health', ar: 'الرعاية الصحية والعيادات (ميدبولس)', en: 'Healthcare & Clinics' },
    { id: 'ecommerce', ar: 'التجارة الإلكترونية والريتيل (لوكس ستور)', en: 'Headless E-Commerce' }
  ], []);

  // Products dataset
  const allProducts = useMemo(() => [
    {
      id: 'salesawy',
      categoryId: 'ai',
      badge: isRtl ? 'ذكاء اصطناعي' : 'AI Powered',
      badgeBg: 'bg-orange-50 text-orange-700 border-orange-200',
      title: isRtl ? 'سيلزاوي' : 'Salesawy AI',
      subtitle: isRtl ? 'مساعد مبيعات ذكي يعمل بالذكاء الاصطناعي' : 'Autonomous AI Sales & Conversion Bot',
      desc: isRtl
        ? 'سيلزاوي هو مساعد مبيعات ذكي يعمل بالذكاء الاصطناعي على مدار 24/7 لأتمتة الرد على العملاء، تأكيد الحجوزات، وزيادة المبيعات عبر الواتساب والموقع بدقة استثنائية.'
        : 'Salesawy is a 24/7 autonomous conversational AI sales agent engineered to qualify leads, automate WhatsApp orders, and skyrocket sales conversions.',
      bannerType: 'salesawy',
      ctaText: isRtl ? 'عرض المشروع' : 'Explore Platform'
    },
    {
      id: 'serv5-erp',
      categoryId: 'erp',
      badge: isRtl ? 'معتمد ZATCA' : 'ZATCA Certified',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
      title: isRtl ? 'سيرف فايف كلاود ERP' : 'Serv5 Cloud ERP',
      subtitle: isRtl ? 'نظام إدارة موارد المؤسسات والفوترة' : 'Enterprise Resource & Tax Platform',
      desc: isRtl
        ? 'منظومة سحابية متكاملة للمحاسبة والمستودعات والموارد البشرية، مع ربط آلي معتمد 100% مع الفوترة الإلكترونية للمرحلة الثانية لهيئة الزكاة والضريبة.'
        : 'Enterprise cloud ERP consolidating financial ledgers, multi-branch inventory, HR workflows, and native ZATCA Phase-2 e-invoicing compliance.',
      bannerType: 'erp',
      ctaText: isRtl ? 'عرض المشروع' : 'Explore Platform'
    },
    {
      id: 'foodsuite',
      categoryId: 'delivery',
      badge: isRtl ? 'مطاعم وأساطيل' : 'F&B Fleet OS',
      badgeBg: 'bg-orange-50 text-orange-700 border-orange-200',
      title: isRtl ? 'فود سويت' : 'FoodSuite Delivery OS',
      subtitle: isRtl ? 'منظومة طلبات طعام وأسطول توصيل' : 'Omnichannel Restaurant & Fleet OS',
      desc: isRtl
        ? 'منظومة متكاملة لربط تطبيقات العملاء على iOS و Android بشاشات المطابخ KDS وتتبع السائقين عبر الـ GPS ونقاط البيع POS في الوقت الفعلي.'
        : 'End-to-end food ordering ecosystem synchronizing customer mobile apps, kitchen displays (KDS), driver GPS dispatch, and POS in real-time.',
      bannerType: 'food',
      ctaText: isRtl ? 'عرض المشروع' : 'Explore Platform'
    },
    {
      id: 'medpulse',
      categoryId: 'health',
      badge: isRtl ? 'رعاية صحية' : 'Healthcare Cloud',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      title: isRtl ? 'ميدبولس للعيادات' : 'MedPulse Clinic Cloud',
      subtitle: isRtl ? 'نظام العيادات والسجلات الطبية' : 'Digital EHR & Clinic Management',
      desc: isRtl
        ? 'نظام ذكي لإدارة العيادات والمراكز الطبية مع سجلات صحية رقمية مشفرة، جدولة مواعيد الأطباء، والربط المعتمد مع شركات التأمين الصحي.'
        : 'Smart healthcare management software for specialized clinics with encrypted electronic health records, doctor schedules, and insurance claim approvals.',
      bannerType: 'health',
      ctaText: isRtl ? 'عرض المشروع' : 'Explore Platform'
    },
    {
      id: 'luxestore',
      categoryId: 'ecommerce',
      badge: isRtl ? 'تجارة إلكترونية' : 'Headless Retail',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
      title: isRtl ? 'لوكس ستور ريتيل' : 'LuxeStore Headless',
      subtitle: isRtl ? 'متجر إلكتروني فاخر فائق السرعة' : 'Ultra-Fast Luxury Commerce Engine',
      desc: isRtl
        ? 'متجر إلكتروني فاخر صُمم بأحدث تقنيات الـ Headless لتحقيق سرعة تحميل 0.4 ثانية مع دعم كامل لبوابات الدفع والتقسيط Mada و Tabby و Tamara.'
        : 'High-end luxury e-commerce engine with 0.4s sub-second page loads, Mada and Tabby installments, multi-currency support, and live warehouse sync.',
      bannerType: 'retail',
      ctaText: isRtl ? 'عرض المشروع' : 'Explore Platform'
    }
  ], [isRtl]);

  const [activeCategory, setActiveCategory] = useState('all');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Active category object
  const currentCategoryObj = useMemo(() => {
    return categories.find((c) => c.id === activeCategory) || categories[0];
  }, [categories, activeCategory]);

  // Filtered products list (when 'all', it returns all 5 products!)
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return allProducts;
    return allProducts.filter((p) => p.categoryId === activeCategory);
  }, [allProducts, activeCategory]);

  // Render landscape wide banner for each product
  const renderProductBanner = (type) => {
    switch (type) {
      case 'salesawy':
        return (
          <div className="relative w-full aspect-[16/9] rounded-2xl bg-gradient-to-br from-blue-50/90 via-indigo-50/80 to-orange-50/70 p-4 overflow-hidden border border-blue-200/80 flex items-center justify-between shadow-xs">
            <div className="relative z-10 max-w-[62%]">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-700 text-[10px] font-extrabold border border-orange-200 mb-2 shadow-xs">
                <Sparkles size={11} className="text-orange-500" />
                <span>{isRtl ? 'ذكاء اصطناعي' : 'AI Agent'}</span>
              </span>
              <h4 className="text-slate-900 text-xs sm:text-sm font-black leading-snug mb-1">
                {isRtl ? 'مساعد المبيعات الذكي الأول' : 'Next-Gen Sales Agent'}
              </h4>
              <p className="text-slate-600 text-[10px] line-clamp-2">
                {isRtl ? 'زيادة مبيعاتك وأتمتة الردود 24/7' : 'Automate 80% customer inquiries instantly'}
              </p>
              <div className="mt-2.5 inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>{isRtl ? 'متصل ومتاح 24/7' : 'Online 24/7'}</span>
              </div>
            </div>
            <div className="relative z-10 w-28 h-28 flex-shrink-0 flex items-center justify-center">
              <img
                src="/serv5-robot-mascot.png"
                alt="Salesawy AI Mascot"
                className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(37,99,235,0.25)]"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-blue-300/30 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-orange-300/25 blur-2xl pointer-events-none" />
          </div>
        );
      case 'erp':
        return (
          <div className="relative w-full aspect-[16/9] rounded-2xl bg-gradient-to-br from-slate-50 via-blue-50/70 to-slate-100 p-4 overflow-hidden border border-blue-200/80 flex flex-col justify-between shadow-xs">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs font-black shadow-xs">
                  S5
                </div>
                <div>
                  <span className="text-xs font-black text-slate-900 block">SERV5 CLOUD ERP</span>
                  <span className="text-[10px] text-emerald-600 font-mono font-bold">ZATCA Fatoora Phase-2</span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold border border-emerald-200">
                VERIFIED ✅
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 my-2 text-center">
              <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-[9px] text-slate-500 font-bold block">Invoices Cleared</span>
                <strong className="text-xs text-emerald-600 font-mono font-bold">100%</strong>
              </div>
              <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-[9px] text-slate-500 font-bold block">Multi-Branch</span>
                <strong className="text-xs text-blue-600 font-mono font-bold">Unlimited</strong>
              </div>
              <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-[9px] text-slate-500 font-bold block">Ledger Sync</span>
                <strong className="text-xs text-amber-600 font-mono font-bold">0.1s</strong>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
              <span>Cryptographic UUID &amp; QR</span>
              <span className="text-blue-600 font-black">Tax Compliant</span>
            </div>
          </div>
        );
      case 'food':
        return (
          <div className="relative w-full aspect-[16/9] rounded-2xl bg-gradient-to-br from-orange-50/90 via-amber-50/70 to-slate-50 p-4 overflow-hidden border border-orange-200/80 flex flex-col justify-between shadow-xs">
            <div className="flex items-center justify-between pb-2 border-b border-orange-200/60">
              <div className="flex items-center gap-1.5">
                <span className="text-lg">🍕</span>
                <span className="text-xs font-black text-slate-900">PIZZA PLAZA FLEET</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 text-[10px] font-extrabold border border-orange-200">
                KDS LIVE
              </span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-orange-100 shadow-xs my-2">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <strong className="text-slate-800 font-bold">Order #8492 Dispatching</strong>
                <span className="text-emerald-600 font-mono font-bold">ETA 12 mins</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-orange-500 h-full w-[70%] rounded-full animate-pulse" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-700 text-center font-bold">
              <span className="bg-white py-1.5 px-2 rounded-lg border border-slate-200 shadow-xs">38 Franchise Branches</span>
              <span className="bg-white py-1.5 px-2 rounded-lg border border-slate-200 shadow-xs text-emerald-600">Sub-second POS Sync</span>
            </div>
          </div>
        );
      case 'health':
        return (
          <div className="relative w-full aspect-[16/9] rounded-2xl bg-gradient-to-br from-teal-50/90 via-emerald-50/70 to-slate-50 p-4 overflow-hidden border border-teal-200/80 flex flex-col justify-between shadow-xs">
            <div className="flex items-center justify-between pb-2 border-b border-teal-200/60">
              <div className="flex items-center gap-1.5">
                <span className="text-lg">🏥</span>
                <span className="text-xs font-black text-slate-900">MEDPULSE CLINIC EHR</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 text-[10px] font-extrabold border border-teal-200">
                HIPAA READY
              </span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-teal-100 shadow-xs my-2">
              <span className="text-xs font-black text-slate-800 block mb-1">Patient #4092: Dr. Moustafa Clinic</span>
              <span className="text-[10px] text-slate-500">Digital Prescription Generated • Insurance Approved</span>
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
              <span className="text-teal-700 font-black">+450K Medical Files</span>
              <span>Encrypted Cloud</span>
            </div>
          </div>
        );
      case 'retail':
        return (
          <div className="relative w-full aspect-[16/9] rounded-2xl bg-gradient-to-br from-amber-50/90 via-yellow-50/60 to-slate-50 p-4 overflow-hidden border border-amber-200/80 flex flex-col justify-between shadow-xs">
            <div className="flex items-center justify-between pb-2 border-b border-amber-200/60">
              <div className="flex items-center gap-1.5">
                <span className="text-lg">✨</span>
                <span className="text-xs font-black text-slate-900">LUXESTORE ARABIA</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-extrabold border border-amber-200">
                0.4s SPEED
              </span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-amber-100 shadow-xs my-2 flex items-center justify-between">
              <div>
                <span className="text-xs font-black text-slate-800 block">Royal Edition Chronograph</span>
                <span className="text-[10px] text-amber-600 font-mono font-bold">SAR 3,250.00</span>
              </div>
              <span className="px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-extrabold">
                Mada &amp; Pay
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-[10px] text-center text-slate-600 font-bold">
              <span className="bg-white p-1 rounded-lg border border-slate-200">Tabby Pay</span>
              <span className="bg-white p-1 rounded-lg border border-slate-200">Tamara Split</span>
              <span className="bg-white p-1 rounded-lg border border-slate-200 text-emerald-600">100/100 CWV</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      className="relative z-10 py-20 lg:py-28 overflow-hidden text-slate-900"
      id="products"
      dir={isRtl ? 'rtl' : 'ltr'}
    >

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Title + Description */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          {/* Main Title */}
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

          {/* Description */}
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {isRtl
              ? 'استكشف عالمنا من التجارب والحلول الرقمية المتميزة والمصممة بدقة استثنائية، برمجيات جاهزة وقابلة للتخصيص تُسرع نمو أعمالك وتضمن أعلى كفاءة تشغيلية.'
              : 'Explore our ecosystem of distinct digital software architectures built with exceptional precision to accelerate enterprise scale and efficiency.'}
          </p>
        </div>

        {/* Centered Category Filter Dropdown with generous margin before cards */}
        <div className="relative max-w-md mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Filter size={13} className="text-orange-500" />
              <span>{isRtl ? 'تصفية المنتجات حسب المجال:' : 'Filter products by domain:'}</span>
            </label>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
              {filteredProducts.length} {isRtl ? 'منتجات' : 'Products'}
            </span>
          </div>

          {/* Dropdown Toggle Button */}
          <button
            type="button"
            onClick={() => setDropdownOpen((prev) => !prev)}
            className={`w-full px-5 py-3.5 rounded-2xl bg-white border-2 text-slate-900 font-extrabold text-sm sm:text-base flex items-center justify-between shadow-sm transition-all duration-200 ${
              dropdownOpen
                ? 'border-blue-600 ring-4 ring-blue-100 shadow-md'
                : 'border-slate-200 hover:border-blue-400'
            }`}
            aria-haspopup="listbox"
            aria-expanded={dropdownOpen}
          >
            <div className="flex items-center gap-2.5 truncate">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-xs flex-shrink-0" />
              <span className="truncate">{isRtl ? currentCategoryObj.ar : currentCategoryObj.en}</span>
            </div>
            <ChevronDown
              size={19}
              className={`text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                dropdownOpen ? 'rotate-180 text-blue-600' : ''
              }`}
            />
          </button>

          {/* Dropdown Menu Options */}
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.98 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                className="absolute top-full mt-2 w-full bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 overflow-hidden py-2"
              >
                {categories.map((cat) => {
                  const isSelected = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        setActiveCategory(cat.id);
                        setDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-right flex items-center justify-between text-xs sm:text-sm font-bold transition-colors ${
                        isSelected
                          ? 'bg-blue-50 text-blue-700 font-extrabold'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
                      }`}
                    >
                      <span className="truncate">{isRtl ? cat.ar : cat.en}</span>
                      {isSelected && <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0" />}
                    </button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Product Cards Grid: When 'All' is selected, shows all cards side by side! */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -20 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_12px_32px_rgba(36,90,167,0.06)] hover:shadow-[0_20px_48px_rgba(36,90,167,0.14)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden p-5 sm:p-6"
              >
                {/* 1. Wide Image Banner at top */}
                <div className="mb-5 rounded-2xl overflow-hidden">
                  {renderProductBanner(product.bannerType)}
                </div>

                {/* 2. Text Content Wrapper with comfortable horizontal padding */}
                <div className="px-3 sm:px-4 flex flex-col flex-grow">
                  <div className="mb-3">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h3 className="text-xl font-black text-slate-900 tracking-tight">
                        {product.title}
                      </h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${product.badgeBg}`}>
                        {product.badge}
                      </span>
                    </div>
                    <span className="text-xs text-orange-600 font-extrabold block">
                      {product.subtitle}
                    </span>
                  </div>

                  {/* 3. Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {product.desc}
                  </p>
                </div>

                {/* 4. Standalone Button at the bottom of the card with breathing margins */}
                <div className="mt-auto pt-3 px-3 sm:px-4 pb-2">
                  <button
                    type="button"
                    onClick={() => onOpenConsultation && onOpenConsultation(product.title)}
                    className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-sm flex items-center justify-center gap-2 shadow-md shadow-orange-500/25 transition-all duration-200 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>{product.ctaText}</span>
                    <ArrowIcon size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
