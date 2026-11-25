import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  ArrowUpRight,
  BadgeCheck,
  Check,
  Gauge,
  HardDrive,
  Headphones,
  LockKeyhole,
  PanelTop,
  Building2,
  ListFilter,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Store,
  Users,
  Zap
} from 'lucide-react';
import AboutSection from '../components/sections/AboutSection';
import FaqSection from '../components/FaqSection';
import NewestPostsSection from '../components/sections/NewestPostsSection';
import Serv5NewestPosts from '../components/sections/Serv5NewestPosts';
import Serv5ProductsShowcase from '../components/sections/Serv5ProductsShowcase';
import Serv5GetInTouch from '../components/sections/Serv5GetInTouch';
import Serv5WebDesignPage from '../components/pages/Serv5WebDesignPage';
import Serv5BankAccountsPage from '../components/pages/Serv5BankAccountsPage';
import TiltCard from '../components/hosting/TiltCard';
import HeroAmbientBackground from '../components/ui/HeroAmbientBackground';

const servicePages = {
  'web-hosting': {
    ar: { title: 'استضافة المواقع', intro: 'استضافة سريعة وآمنة لمواقعك وأنظمتك مع استقرار وحماية مستمرة.', items: ['سرعة وأداء عاليان', 'حماية SSL وشهادات أمنية', 'نسخ احتياطي دورية', 'دعم ومراقبة مستمرة'] },
    en: { title: 'Web Hosting', intro: 'Fast, secure hosting for websites and digital platforms with reliable stability and protection.', items: ['High performance', 'SSL and security certificates', 'Scheduled backups', 'Continuous monitoring'] }
  },
  'web-design': {
    ar: { title: 'تصميم الويب', intro: 'نصمم ونطور مواقع احترافية متوافقة مع جميع الشاشات ومحركات البحث.', items: ['تصميم واجهات وتجربة مستخدم', 'مواقع متجاوبة وسريعة', 'تطوير React وواجهات حديثة', 'تحسين تجربة التحويل'] },
    en: { title: 'Web Design', intro: 'Professional, responsive websites optimized for every screen and search engine.', items: ['UI and UX design', 'Responsive development', 'Modern React interfaces', 'Conversion optimization'] }
  },
  'mobile-apps': {
    ar: { title: 'برمجة تطبيقات الجوال', intro: 'تطبيقات iOS وAndroid أصلية وهجينة بتجربة استخدام سريعة وآمنة.', items: ['تطبيقات iOS وAndroid', 'إشعارات لحظية وخرائط', 'ربط بوابات الدفع', 'نشر ومتابعة ما بعد الإطلاق'] },
    en: { title: 'Mobile App Development', intro: 'Secure, high-performance iOS and Android applications with intuitive experiences.', items: ['iOS and Android apps', 'Push notifications and maps', 'Payment gateway integration', 'Launch and post-launch support'] }
  },
  ecommerce: {
    ar: { title: 'تصميم متاجر إلكترونية', intro: 'متاجر إلكترونية متكاملة تساعدك على إدارة المنتجات والمخزون والمبيعات بسهولة.', items: ['تصميم متجر مخصص', 'بوابات دفع وشحن', 'لوحة إدارة عربية', 'ربط المخزون والفواتير'] },
    en: { title: 'E-Commerce', intro: 'Complete online stores for managing products, inventory, fulfillment and sales.', items: ['Custom store design', 'Payment and shipping integration', 'Arabic management dashboard', 'Inventory and invoice integration'] }
  },
  'ui-ux': {
    ar: { title: 'تصميم واجهة وتجربة المستخدم', intro: 'واجهات رقمية واضحة وجذابة مبنية على احتياجات المستخدم وتحسين التحويل.', items: ['أبحاث وتجارب استخدام', 'تصميم الهياكل والواجهات', 'نظام بصري متكامل', 'اختبارات قابلية الاستخدام'] },
    en: { title: 'UI/UX Design', intro: 'Clear, engaging digital interfaces based on user needs and conversion improvement.', items: ['User research', 'Wireframes and interfaces', 'Unified visual system', 'Usability testing'] }
  },
  seo: {
    ar: { title: 'تحسين محركات البحث SEO', intro: 'تحسين ظهور موقعك في نتائج البحث عبر البنية التقنية والمحتوى والكلمات المفتاحية.', items: ['فحص السيو التقني', 'تحسين الصفحات والمحتوى', 'بناء الروابط الرقمية', 'متابعة الكلمات والزيارات'] },
    en: { title: 'Search Engine Optimization', intro: 'Improve search visibility through technical structure, content and keywords.', items: ['Technical SEO audit', 'Page and content optimization', 'Digital authority building', 'Keyword and traffic reporting'] }
  },
  'digital-marketing': {
    ar: { title: 'التسويق الرقمي والحملات', intro: 'حملات إعلانية مبنية على الجمهور والأرقام لتحقيق أعلى عائد استثمار.', items: ['إعلانات Google وMeta', 'إعلانات TikTok وSnapchat', 'إدارة الحملات والتحسين', 'قياس العائد والتحويل'] },
    en: { title: 'Digital Marketing', intro: 'Data-led advertising campaigns designed to reach the right audience and improve ROI.', items: ['Google and Meta Ads', 'TikTok and Snapchat Ads', 'Campaign management', 'ROI and conversion reporting'] }
  },
  'tech-support': {
    ar: { title: 'الدعم الفني والصيانة', intro: 'دعم وصيانة مستمرة لحماية الأنظمة والمواقع والتطبيقات وإبقائها مستقرة.', items: ['دعم فني مستمر', 'متابعة الأمان والتحديثات', 'إصلاح الأعطال والبلاغات', 'خطط صيانة شهرية'] },
    en: { title: 'Technical Support', intro: 'Continuous maintenance and support to keep websites and applications secure and stable.', items: ['Continuous support', 'Security and updates', 'Issue and incident handling', 'Monthly maintenance plans'] }
  }
};

function PageHero({ isRtl, eyebrow, title, description }) {
  return (
    <section className="content-page-hero">
      <HeroAmbientBackground variant="page" />
      <div className="container content-page-hero-inner">
        <span className="content-page-eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}

function SimplePage({ isRtl, title, description, sections }) {
  return (
    <>
      <PageHero
        isRtl={isRtl}
        eyebrow={isRtl ? 'سيرف فايف' : 'SERV5'}
        title={title}
        description={description}
      />
      <section className="content-page-section">
        <div className="container content-page-grid">
          {sections.map((section) => (
            <article className="content-page-card" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function HostingFeatureArtwork({ index }) {
  const ArtworkIcon = [Zap, Gauge, LockKeyhole, HardDrive, Activity, PanelTop, Headphones][index] || Server;

  return (
    <div className={`hosting-feature-art hosting-feature-art-${index}`} aria-hidden="true">
      <div className="hosting-feature-art-orbit hosting-feature-art-orbit-a" />
      <div className="hosting-feature-art-orbit hosting-feature-art-orbit-b" />
      <div className="hosting-feature-art-grid" />
      {index === 0 && <div className="hosting-feature-speed-lines"><i /><i /><i /><i /></div>}
      {index === 1 && <div className="hosting-feature-cache-layers"><i /><i /><i /></div>}
      {index === 2 && <div className="hosting-feature-shield"><LockKeyhole size={31} /></div>}
      {index === 3 && <div className="hosting-feature-database"><i /><i /><i /></div>}
      {index === 4 && <svg className="hosting-feature-pulse" viewBox="0 0 420 150" fill="none"><path d="M10 76h88l24-2 20-42 30 88 29-58 20 14h45l18-3 20-37 27 70 21-30h78" /></svg>}
      {index === 5 && <div className="hosting-feature-console"><i /><i /><i /><span /><span /><span /></div>}
      {index === 6 && <div className="hosting-feature-support"><i /><i /><i /><Headphones size={28} /></div>}
      {index !== 2 && index !== 6 && <div className="hosting-feature-art-icon"><ArtworkIcon size={31} strokeWidth={1.6} /></div>}
      <span className="hosting-feature-art-label">SERV5 <i /> {String(index + 1).padStart(2, '0')}</span>
    </div>
  );
}

function HostingPage({ isRtl, onOpenConsultation }) {
  const pageRef = useRef(null);
  const [eggOpen, setEggOpen] = useState(false);
  const [activePlanFilter, setActivePlanFilter] = useState('all');
  const [activeBenefitIndex, setActiveBenefitIndex] = useState(0);
  const eggClicks = useRef(0);
  const eggTimer = useRef(null);

  useEffect(() => () => clearTimeout(eggTimer.current), []);

  // Easter egg: three quick taps on the server card wakes the mascot up.
  const handleEggClick = () => {
    eggClicks.current += 1;
    clearTimeout(eggTimer.current);

    if (eggClicks.current < 3) {
      eggTimer.current = setTimeout(() => { eggClicks.current = 0; }, 1100);
      return;
    }

    eggClicks.current = 0;
    setEggOpen(true);
    eggTimer.current = setTimeout(() => setEggOpen(false), 7000);
  };

  useEffect(() => {
    const page = pageRef.current;
    if (!page || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const revealItems = page.querySelectorAll('[data-hosting-reveal]');
    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    page.classList.add('hosting-motion-ready');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const benefits = isRtl
    ? [
      { icon: Zap, title: 'أداء سريع واستجابة فائقة', text: 'أقراص SSD وتقنيات تخزين حديثة لتسريع تحميل الصفحات وتحسين تجربة المستخدم.' },
      { icon: Gauge, title: 'خوادم LiteSpeed متطورة', text: 'تخزين مؤقت متكامل وذكي يساعد موقعك على التحميل بسرعة عبر مختلف المنصات.' },
      { icon: LockKeyhole, title: 'أمان متقدم', text: 'حماية متطورة وجدران نارية للحد من محاولات الاختراق والحفاظ على بيانات موقعك.' },
      { icon: HardDrive, title: 'نسخ احتياطي تلقائي', text: 'نسخ آمنة لبيانات موقعك مع إمكانية استعادتها بسهولة عند الحاجة.' },
      { icon: Activity, title: 'استقرار بنسبة تشغيل عالية', text: 'بنية استضافة قوية مصممة لاستمرارية العمل بنسبة تشغيل تصل إلى 99.9%.' },
      { icon: PanelTop, title: 'لوحة تحكم سهلة', text: 'أدر موقعك وبريدك الإلكتروني وقواعد بياناتك من لوحة تحكم احترافية.' },
      { icon: Headphones, title: 'دعم فني متخصص', text: 'فريق جاهز لمساعدتك والإجابة عن استفساراتك عند الحاجة.' }
    ]
    : [
      { icon: Zap, title: 'Fast page loads', text: 'SSD storage and modern infrastructure help your pages load quickly and give visitors a smoother experience.' },
      { icon: Gauge, title: 'Advanced LiteSpeed servers', text: 'Built-in caching helps your website load faster across a range of platforms.' },
      { icon: LockKeyhole, title: 'Advanced security', text: 'Layered security and firewalls help protect your website and its data from online threats.' },
      { icon: HardDrive, title: 'Automatic backups', text: 'Keep a secure copy of your website data and restore it easily whenever you need it.' },
      { icon: Activity, title: 'Reliable uptime', text: 'Robust hosting infrastructure designed to keep your website available, with uptime of up to 99.9%.' },
      { icon: PanelTop, title: 'Easy-to-use control panel', text: 'Manage your website, email and databases from one professional control panel.' },
      { icon: Headphones, title: 'Expert technical support', text: 'Our support team is on hand to answer questions and help resolve technical issues.' }
    ];

  const plans = isRtl
    ? [
      {
        name: 'الباقة السحابية للمبتدئين',
        audience: 'مثالية للمدونات والمواقع التعريفية الناشئة',
        price: '39',
        features: ['10 جيجابايت NVMe', 'استضافة موقع واحد', 'شهادة SSL مجانية', '10 حسابات بريد إلكتروني', 'دومين مجاني للسنة الأولى', 'لوحة تحكم cPanel قياسية']
      },
      {
        name: 'باقة الشركات الاحترافية',
        audience: 'للشركات المتوسطة والمتاجر الإلكترونية النامية',
        price: '119',
        featured: true,
        features: ['50 جيجابايت NVMe', 'استضافة حتى 5 مواقع', 'نسخ احتياطي يومي (الاحتفاظ 15 يومًا)', 'قواعد بيانات وحسابات بريد غير محدودة', 'دومين مجاني وعنوان مخصص', 'تسريع LiteSpeed الذكي', 'دعم فني ذو أولوية']
      },
      {
        name: 'باقة النخبة للمؤسسات الكبرى',
        audience: 'للتطبيقات والمنصات ذات الحركة العالية والملفات الكبيرة',
        price: '289',
        features: ['مساحة تخزين NVMe غير محدودة', 'استضافة عدد غير محدود من المواقع', 'نسخ احتياطي لقواعد البيانات كل ساعة', 'جدار حماية متقدم مخصص للخادم', 'نقل مجاني بالكامل وبشكل آمن', 'مدير حساب مخصص لمشروعك', 'دعم فني لكبار الشخصيات 24/7']
      }
    ]
    : [
      {
        name: 'Starter Cloud Hosting',
        audience: 'Ideal for blogs and early-stage business websites',
        price: '39',
        features: ['10 GB NVMe storage', 'Host one website', 'Free SSL certificate', '10 email accounts', 'Free domain for your first year', 'Standard cPanel control panel']
      },
      {
        name: 'Professional Business Hosting',
        audience: 'For growing businesses and online stores',
        price: '119',
        featured: true,
        features: ['50 GB NVMe storage', 'Host up to 5 websites', 'Daily backups with 15-day retention', 'Unlimited databases and email accounts', 'Free domain and dedicated IP address', 'Smart LiteSpeed caching', 'Priority technical support']
      },
      {
        name: 'Enterprise Hosting',
        audience: 'For high-traffic applications and platforms with large files',
        price: '289',
        features: ['Unlimited NVMe storage', 'Host unlimited websites', 'Hourly database backups', 'Advanced firewall protection for your server', 'Free, secure website migration', 'Dedicated account manager', '24/7 priority technical support']
      }
    ];

  const planCategories = [
    { id: 'starter', icon: Rocket, ar: 'للمواقع الناشئة', en: 'Starter websites', filterAr: 'مواقع ناشئة', filterEn: 'Starter websites' },
    { id: 'business', icon: Store, ar: 'للشركات والمتاجر', en: 'Businesses & stores', filterAr: 'شركات ومتاجر', filterEn: 'Businesses & stores' },
    { id: 'enterprise', icon: Building2, ar: 'للتطبيقات والمواقع عالية الحركة', en: 'High-traffic platforms', filterAr: 'منصات عالية الحركة', filterEn: 'High-traffic platforms' }
  ];
  const categorizedPlans = plans.map((plan, index) => ({ ...plan, ...planCategories[index] }));
  const planFilters = [
    { id: 'all', icon: ListFilter, ar: 'كل الباقات', en: 'All plans' },
    ...planCategories.map(({ id, icon, filterAr, filterEn }) => ({ id, icon, ar: filterAr, en: filterEn }))
  ];
  const visiblePlans = categorizedPlans.filter((plan) => activePlanFilter === 'all' || plan.id === activePlanFilter);

  const migrationSteps = isRtl
    ? [
      'نقل مجاني كامل لجميع الملفات وقواعد البيانات.',
      'نقل البريد الإلكتروني والإعدادات دون فقدان البيانات.',
      'تنفيذ النقل بواسطة فريق متخصص.',
      'متابعة كاملة حتى يعمل موقعك بكفاءة على الخادم الجديد.'
    ]
    : [
      'Full migration of your website files and databases at no extra cost.',
      'Email accounts and settings migrated without data loss.',
      'Our specialists handle the entire migration.',
      'We make sure your website is running smoothly on its new server.'
    ];

  const trustPoints = isRtl
    ? [
      { icon: Users, title: 'أكثر من 500 عميل', text: 'نفخر بثقة الشركات ورواد الأعمال الذين يعتمدون على خدماتنا في تشغيل مواقعهم.' },
      { icon: ShieldCheck, title: 'حماية متقدمة', text: 'تأمين شامل ومراقبة مستمرة وأنظمة حماية ضد الهجمات والبرمجيات الضارة.' },
      { icon: Gauge, title: 'سرعة وأداء متميز', text: 'تقنيات تخزين حديثة وخوادم قوية تمنح موقعك سرعة واستقرارًا أفضل.' },
      { icon: BadgeCheck, title: 'دعم فني احترافي', text: 'فريق متخصص يساعدك بسرعة في استفساراتك ومشكلاتك التقنية.' }
    ]
    : [
      { icon: Users, title: 'Trusted by 500+ customers', text: 'Businesses and entrepreneurs rely on SERV5 to host and run their websites.' },
      { icon: ShieldCheck, title: 'Advanced protection', text: 'Continuous monitoring and security systems help protect your website from attacks and malware.' },
      { icon: Gauge, title: 'Speed and performance', text: 'Powerful servers and modern storage help deliver faster loading and dependable performance.' },
      { icon: BadgeCheck, title: 'Expert technical support', text: 'Our specialists are available to answer questions and resolve technical issues.' }
    ];

  return (
    <div className="hosting-page" dir={isRtl ? 'rtl' : 'ltr'} ref={pageRef}>
      <section className="hosting-hero hosting-reveal" data-hosting-reveal>
        <HeroAmbientBackground variant="split" />
        <div className="container hosting-hero-grid">
          <div className="hosting-hero-copy hosting-reveal" data-hosting-reveal>
            <span className="hosting-eyebrow">
              <Sparkles size={15} />
              {isRtl ? 'استضافة سيرف فايف' : 'SERV5 HOSTING'}
            </span>
            <h1>            {isRtl ? 'قدرات استضافة تمنح موقعك أفضل أداء' : 'Hosting that gives your website the performance it deserves'}</h1>
            <p>
              {isRtl
                ? 'نقدم حلول استضافة احترافية مصممة لتحقيق أعلى مستويات السرعة والأمان والاستقرار، حتى يعمل موقعك بكفاءة دون انقطاع.'
                : 'Professional hosting solutions built for speed, security and reliability—keeping your website running smoothly around the clock.'}
            </p>
            <button type="button" className="hosting-primary-action" onClick={() => onOpenConsultation(isRtl ? 'طلب استضافة مواقع' : 'Request Web Hosting')}>
              {isRtl ? 'اختر استضافتك' : 'Request a hosting consultation'}
              <ArrowUpRight size={17} />
            </button>
          </div>
          <div className="hosting-hero-visual hosting-reveal" data-hosting-reveal aria-hidden="true">
            <div className="hosting-orbit hosting-orbit-outer" />
            <div className="hosting-orbit hosting-orbit-inner" />
            <div className="hosting-visual-glow" />
            <div className="hosting-visual-stack">
              {eggOpen && (
                <div className="hosting-egg" role="status">
                  <img src="/serv5-robot-mascot.png" alt="" />
                  <p>
                    <strong>SERV5 BOT</strong>
                    {isRtl
                      ? 'تلات ضغطات؟ الخادم ده حسّ بيك 👀 — كل حاجة تمام، بس خلي بالك من الصيانة المجدولة.'
                      : 'Three taps? This server felt that 👀 — all good, just mind the scheduled maintenance.'}
                  </p>
                </div>
              )}
              <TiltCard
                as="div"
                className="hosting-server-card"
                onClick={handleEggClick}
                title={isRtl ? 'الخادم يعمل' : 'Server online'}
              >
                <div className="hosting-server-card-top">
                  <span className="hosting-server-symbol"><Server size={19} /></span>
                  <span className="hosting-live-status"><i />{isRtl ? 'الخادم يعمل' : 'SERVER ONLINE'}</span>
                </div>
                <div className="hosting-uptime-value">99.9<span>%</span></div>
                <p>{isRtl ? 'جاهزية واستقرار مستمر' : 'uptime and reliability'}</p>
                <div className="hosting-pulse-chart"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
                <div className="hosting-server-meta">
                  <span><HardDrive size={14} />NVMe SSD</span>
                  <span><LockKeyhole size={14} />{isRtl ? 'محمي' : 'SECURE'}</span>
                </div>
              </TiltCard>
            </div>
            <span className="hosting-float-chip hosting-float-chip-top"><Zap size={15} />{isRtl ? 'سرعة فائقة' : 'HIGH SPEED'}</span>
            <span className="hosting-float-chip hosting-float-chip-bottom"><BadgeCheck size={15} />{isRtl ? 'أمان مستمر' : 'ALWAYS SECURE'}</span>
          </div>
        </div>
      </section>

      <section className="hosting-benefits-section hosting-reveal" data-hosting-reveal>
        <div className="container">
          <header className="hosting-section-heading hosting-reveal" data-hosting-reveal>
            <span>{isRtl ? 'مصممة لأداء يعتمد عليه' : 'BUILT FOR RELIABLE PERFORMANCE'}</span>
            <h2>{isRtl ? 'كل ما يحتاجه موقعك في مكان واحد' : 'Everything your website needs, all in one place'}</h2>
          </header>
          <div className="hosting-feature-gallery">
            <div className="hosting-feature-index" role="group" aria-label={isRtl ? 'مميزات الاستضافة' : 'Hosting features'}>
              {benefits.map(({ title, text }, index) => (
                <button
                  type="button"
                  id={`hosting-feature-tab-${index}`}
                  aria-pressed={activeBenefitIndex === index}
                  className={`hosting-feature-tab${activeBenefitIndex === index ? ' is-active' : ''}`}
                  key={title}
                  onClick={() => setActiveBenefitIndex(index)}
                  onKeyDown={(event) => {
                    let nextIndex = index;
                    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') nextIndex = (index + 1) % benefits.length;
                    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') nextIndex = (index - 1 + benefits.length) % benefits.length;
                    else if (event.key === 'Home') nextIndex = 0;
                    else if (event.key === 'End') nextIndex = benefits.length - 1;
                    else return;
                    event.preventDefault();
                    setActiveBenefitIndex(nextIndex);
                    requestAnimationFrame(() => document.getElementById(`hosting-feature-tab-${nextIndex}`)?.focus());
                  }}
                >
                  <span className="hosting-feature-tab-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="hosting-feature-tab-copy">
                    <strong>{title}</strong>
                    <small>{text}</small>
                  </span>
                  <ArrowUpRight size={17} className="hosting-feature-tab-arrow" />
                </button>
              ))}
            </div>
            <div className="hosting-feature-stage" id="hosting-feature-panel" role="region" aria-live="polite" aria-labelledby={`hosting-feature-tab-${activeBenefitIndex}`}>
              <div className="hosting-feature-stage-content" key={`hosting-feature-${activeBenefitIndex}`}>
                <HostingFeatureArtwork index={activeBenefitIndex} />
                <div className="hosting-feature-detail">
                  <span>{isRtl ? `الميزة ${String(activeBenefitIndex + 1).padStart(2, '0')}` : `FEATURE ${String(activeBenefitIndex + 1).padStart(2, '0')}`}</span>
                  <h3>{benefits[activeBenefitIndex].title}</h3>
                  <p>{benefits[activeBenefitIndex].text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hosting-plan-section hosting-reveal" data-hosting-reveal>
        <div className="container">
          <header className="hosting-section-heading hosting-reveal" data-hosting-reveal>
            <span>{isRtl ? 'باقات واضحة تناسب احتياجك' : 'SIMPLE PLANS, CLEAR CHOICES'}</span>
            <h2>{isRtl ? 'اختر باقة الاستضافة المثالية لأعمالك' : 'Find the right hosting plan for your business'}</h2>
          </header>
          <div className="hosting-plan-filters" role="group" aria-label={isRtl ? 'فلترة باقات الاستضافة' : 'Filter hosting plans'}>
            {planFilters.map(({ id, icon: FilterIcon, ar, en }) => (
              <button
                type="button"
                className={`hosting-plan-filter${activePlanFilter === id ? ' is-active' : ''}`}
                aria-pressed={activePlanFilter === id}
                key={id}
                onClick={() => setActivePlanFilter(id)}
              >
                <FilterIcon size={16} aria-hidden="true" />
                <span>{isRtl ? ar : en}</span>
              </button>
            ))}
          </div>
          <div className={`hosting-plan-layout${activePlanFilter !== 'all' ? ' is-filtered' : ''}`}>
            {visiblePlans.map((plan, index) => {
              const PlanIcon = plan.icon;
              return (
              <TiltCard
                as="article"
                className={`hosting-plan-card hosting-plan-card-${plan.id}${plan.featured ? ' is-featured' : ''}`}
                style={{ '--hosting-delay': activePlanFilter === 'all' ? `${index === 1 ? 0 : index === 0 ? 170 : 340}ms` : '0ms' }}
                key={plan.name}
              >
                {plan.featured && (
                  <span className="hosting-plan-badge">
                    {isRtl ? 'الأكثر شيوعًا' : 'MOST POPULAR'}
                  </span>
                )}
                <div className="hosting-plan-title-row">
                  <span className={`hosting-plan-icon hosting-plan-icon-${plan.id}`}><PlanIcon size={21} strokeWidth={1.8} /></span>
                  <h3>{plan.name}</h3>
                </div>
                <span className={`hosting-plan-purpose hosting-plan-purpose-${plan.id}`}>{isRtl ? plan.ar : plan.en}</span>
                <p className="hosting-plan-audience">{plan.audience}</p>
                <div className="hosting-plan-price" dir="ltr">
                  <strong>{plan.price}</strong>
                  <span>{isRtl ? 'ر.س / شهريًا' : 'SAR / month'}</span>
                </div>
                <button type="button" onClick={() => onOpenConsultation(isRtl ? `طلب ${plan.name}` : `Request ${plan.name}`)}>
                  {isRtl ? 'احجز الآن' : 'Choose this plan'}
                  <ArrowUpRight size={16} />
                </button>
                <div className="hosting-plan-divider" />
                <span className="hosting-plan-features-label">{isRtl ? 'مميزات الباقة' : 'PLAN FEATURES'}</span>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}><Check size={15} />{feature}</li>
                  ))}
                </ul>
              </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="hosting-migration-section hosting-reveal" data-hosting-reveal>
        <div className="container hosting-migration-grid">
          <div className="hosting-migration-copy hosting-reveal" data-hosting-reveal>
            <span className="hosting-eyebrow">{isRtl ? 'نقل آمن ومجاني' : 'FREE, SECURE WEBSITE MIGRATION'}</span>
            <h2>{isRtl ? 'انقل موقعك إلينا بكل سهولة وبدون أي توقف' : 'Move your website to SERV5—without downtime'}</h2>
            <p>
              {isRtl
                ? 'لو كان موقعك مستضافًا لدى شركة أخرى، يتولى فريقنا نقله بالكامل مع الحفاظ على البيانات والإعدادات، دون التأثير على عمل الموقع أثناء النقل.'
                : 'Already hosting your website elsewhere? Our team will migrate your files, databases and settings while keeping your site online throughout the process.'}
            </p>
            <ul className="hosting-migration-list">
              {migrationSteps.map((step, index) => (
                <li
                  className="hosting-reveal"
                  data-hosting-reveal
                  style={{ '--hosting-delay': `${index * 75}ms` }}
                  key={step}
                >
                  <Check size={16} />{step}
                </li>
              ))}
            </ul>
            <button type="button" className="hosting-primary-action" onClick={() => onOpenConsultation(isRtl ? 'طلب نقل موقع للاستضافة' : 'Request Website Migration')}>
              {isRtl ? 'ابدأ نقل موقعك' : 'Start your migration'}
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <section className="hosting-trust-section hosting-reveal" data-hosting-reveal>
        <div className="container">
          <header className="hosting-section-heading hosting-trust-heading hosting-reveal" data-hosting-reveal>
            <span>{isRtl ? 'أمان وسرعة ودعم مستمر' : 'SECURITY, SPEED AND SUPPORT'}</span>
            <h2>{isRtl ? 'لماذا يثق أكثر من 500 عميل باستضافة سيرف فايف؟' : 'Why do 500+ customers trust SERV5 hosting?'}</h2>
          </header>
          <div className="hosting-trust-grid">
            {trustPoints.map(({ icon: Icon, title, text }, index) => (
              <article
                className="hosting-trust-card hosting-reveal"
                data-hosting-reveal
                style={{ '--hosting-delay': `${index * 75}ms` }}
                key={title}
              >
                <span><Icon size={21} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContentPage({ pathname, lang = 'ar', onOpenConsultation }) {
  const isRtl = lang === 'ar';

  useEffect(() => {
    const pageTitle = pathname === '/services/web-hosting'
      ? (isRtl ? 'استضافة المواقع' : 'Web Hosting')
      : pathname === '/services/ecommerce'
        ? (isRtl ? 'حلول المتاجر الإلكترونية' : 'E-Commerce Solutions')
        : pathname === '/services/seo'
          ? (isRtl ? 'تحسين محركات البحث SEO' : 'Search Engine Optimization')
          : pathname === '/services/mobile-apps'
            ? (isRtl ? 'تطبيقات الجوال' : 'Mobile Apps')
        : pathname === '/services/digital-marketing'
          ? (isRtl ? 'التسويق الرقمي' : 'Digital Marketing')
        : pathname === '/services/ui-ux'
          ? (isRtl ? 'تصميم واجهة وتجربة المستخدم' : 'UI/UX Design')
          : pathname === '/services/web-design'
            ? (isRtl ? 'تصميم المواقع' : 'Web Design')
            : pathname;
    document.title = `${isRtl ? 'سيرف فايف' : 'SERV5'} | ${pageTitle}`;
  }, [pathname, isRtl]);

  if (pathname === '/about-us') {
    return <AboutSection lang={lang} />;
  }

  if (pathname === '/faq') {
    return (
      <>
        <PageHero
          isRtl={isRtl}
          eyebrow={isRtl ? 'مركز المساعدة' : 'Help Center'}
          title={isRtl ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          description={isRtl ? 'إجابات على الاستفسارات الأكثر شيوعاً حول خدمات سيرف فايف ومشاريعها.' : 'Answers to the most common questions about SERV5 services and projects.'}
        />
        <FaqSection lang={lang} />
      </>
    );
  }

  if (pathname === '/portfolio') {
    return (
      <>
        <PageHero isRtl={isRtl} eyebrow={isRtl ? 'معرض الأعمال' : 'Portfolio'} title={isRtl ? 'أعمالنا السابقة' : 'Our Work'} description={isRtl ? 'نماذج من المواقع والتطبيقات والمتاجر والمنظومات التي نفذتها سيرف فايف.' : 'Selected websites, applications, stores and enterprise systems delivered by SERV5.'} />
        <NewestPostsSection lang={lang} onOpenConsultation={onOpenConsultation} />
      </>
    );
  }

  if (pathname === '/blog') {
    return (
      <>
        <PageHero isRtl={isRtl} eyebrow={isRtl ? 'مدونة سيرف فايف' : 'SERV5 Journal'} title={isRtl ? 'الأفكار والرؤى التقنية' : 'Technology Insights'} description={isRtl ? 'مقالات وخبرات عملية في تطوير المواقع والتطبيقات والتجارة الرقمية والذكاء الاصطناعي.' : 'Practical insights on web development, mobile apps, digital commerce and artificial intelligence.'} />
        <Serv5NewestPosts lang={lang} onOpenConsultation={onOpenConsultation} />
      </>
    );
  }

  if (pathname === '/our-products') {
    return (
      <>
        <PageHero isRtl={isRtl} eyebrow={isRtl ? 'المنتجات الرقمية' : 'Digital Products'} title={isRtl ? 'منتجاتنا' : 'Our Products'} description={isRtl ? 'حلول برمجية جاهزة مصممة لإدارة الأعمال وتبسيط عمليات المبيعات والخدمات.' : 'Ready digital platforms designed to simplify business operations and sales workflows.'} />
        <Serv5ProductsShowcase lang={lang} onOpenConsultation={onOpenConsultation} />
      </>
    );
  }

  if (pathname === '/contact-us') {
    return <Serv5GetInTouch lang={lang} onOpenConsultation={onOpenConsultation} />;
  }

  if (pathname === '/bank-accounts') {
    return <Serv5BankAccountsPage lang={lang} onOpenConsultation={onOpenConsultation} />;
  }

  if (pathname === '/careers') {
    return (
      <SimplePage
        isRtl={isRtl}
        title={isRtl ? 'الوظائف' : 'Careers'}
        description={isRtl ? 'انضم إلى فريق يعمل على بناء حلول برمجية ومشروعات رقمية مؤثرة.' : 'Join a team building impactful digital and software solutions.'}
        sections={[
          { title: isRtl ? 'بيئة العمل' : 'Our Environment', text: isRtl ? 'نوفّر بيئة مهنية تشجع الابتكار والتعلم والعمل الجماعي والتطور المستمر.' : 'We provide a professional environment that encourages innovation, learning and growth.' },
          { title: isRtl ? 'التقديم' : 'Applications', text: isRtl ? 'للتقديم أو الاستفسار عن الفرص المتاحة، تواصل معنا عبر قسم اتصل بنا.' : 'To apply or ask about current opportunities, contact us through the contact page.' }
        ]}
      />
    );
  }

  if (pathname === '/project-consultation') {
    return (
      <SimplePage
        isRtl={isRtl}
        title={isRtl ? 'استشارة للمشروع' : 'Project Consultation'}
        description={isRtl ? 'نساعدك على تحديد نطاق المشروع والاحتياجات التقنية والخطة المناسبة للتنفيذ.' : 'We help define project scope, technical requirements and the right execution plan.'}
        sections={[
          { title: isRtl ? 'تحليل الاحتياج' : 'Requirements Analysis', text: isRtl ? 'نراجع أهدافك والجمهور والميزات المطلوبة قبل بدء التنفيذ.' : 'We review your goals, audience and required features before implementation.' },
          { title: isRtl ? 'خطة التنفيذ' : 'Execution Plan', text: isRtl ? 'نحدد مراحل المشروع والجدول الزمني والتقنيات المناسبة.' : 'We define stages, timeline and suitable technologies.' }
        ]}
      />
    );
  }

  if (pathname === '/request-quote') {
    return (
      <SimplePage
        isRtl={isRtl}
        title={isRtl ? 'طلب عرض سعر' : 'Request a Quote'}
        description={isRtl ? 'شاركنا فكرة مشروعك وسنجهز عرضاً مفصلاً يناسب نطاقه ومتطلباته.' : 'Share your project idea and receive a detailed quote based on scope and requirements.'}
        sections={[
          { title: isRtl ? 'بيانات المشروع' : 'Project Information', text: isRtl ? 'الهدف والجمهور ونوع المنصة والميزات المطلوبة.' : 'Goal, audience, platform type and required features.' },
          { title: isRtl ? 'عرض سعر مفصل' : 'Detailed Estimate', text: isRtl ? 'نوضح نطاق التنفيذ والتكلفة والجدول الزمني بوضوح.' : 'A clear estimate covering scope, cost and delivery timeline.' }
        ]}
      />
    );
  }

  if (pathname.startsWith('/services')) {
    const slug = pathname.split('/')[2];
    if (slug === 'web-hosting') {
      return <HostingPage isRtl={isRtl} onOpenConsultation={onOpenConsultation} />;
    }
    if (slug === 'web-design') {
      return <Serv5WebDesignPage lang={lang} onOpenConsultation={onOpenConsultation} />;
    }
    if (slug === 'ui-ux') {
      return <Serv5WebDesignPage lang={lang} onOpenConsultation={onOpenConsultation} variant="ui-ux" />;
    }
    if (slug === 'ecommerce') {
      return <Serv5WebDesignPage lang={lang} onOpenConsultation={onOpenConsultation} variant="ecommerce" />;
    }
    if (slug === 'seo') {
      return <Serv5WebDesignPage lang={lang} onOpenConsultation={onOpenConsultation} variant="seo" />;
    }
    if (slug === 'mobile-apps') {
      return <Serv5WebDesignPage lang={lang} onOpenConsultation={onOpenConsultation} variant="mobile-apps" />;
    }
    if (slug === 'digital-marketing') {
      return <Serv5WebDesignPage lang={lang} onOpenConsultation={onOpenConsultation} variant="digital-marketing" />;
    }
    if (slug && servicePages[slug]) {
      const content = servicePages[slug][isRtl ? 'ar' : 'en'];
      return (
        <SimplePage
          isRtl={isRtl}
          title={content.title}
          description={content.intro}
          sections={content.items.map((item) => ({ title: item, text: isRtl ? 'حلول وتفاصيل تنفيذ مخصصة ضمن مشروعك ومتطلبات أعمالك.' : 'Implementation details tailored to your project and business requirements.' }))}
        />
      );
    }
    if (!slug) {
      return (
        <>
          <PageHero isRtl={isRtl} eyebrow={isRtl ? 'خدماتنا' : 'Services'} title={isRtl ? 'الخدمات والحلول الرقمية' : 'Digital Services'} description={isRtl ? 'من المواقع والمتاجر إلى تطبيقات الجوال والاستضافة والحلول السحابية.' : 'From websites and stores to mobile apps, hosting and cloud solutions.'} />
          <section className="content-page-section">
            <div className="container content-page-grid">
              {Object.entries(servicePages).map(([serviceSlug, page]) => {
                const content = page[isRtl ? 'ar' : 'en'];
                return (
                  <article className="content-page-card" key={serviceSlug}>
                    <h2>{content.title}</h2>
                    <p>{content.intro}</p>
                    <Link className="content-page-link" to={`/services/${serviceSlug}`}>
                      {isRtl ? 'عرض التفاصيل' : 'View details'}
                    </Link>
                  </article>
                );
              })}
            </div>
          </section>
        </>
      );
    }
  }

  return (
    <SimplePage
      isRtl={isRtl}
      title={isRtl ? 'الصفحة غير موجودة' : 'Page Not Found'}
      description={isRtl ? 'يمكنك العودة إلى الصفحة الرئيسية أو اختيار أي قسم من القائمة.' : 'You can return to the home page or choose a section from the navigation.'}
      sections={[]}
    />
  );
}
