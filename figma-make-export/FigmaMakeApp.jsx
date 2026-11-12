import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Phone,
  Layers,
  Code2,
  Smartphone,
  Cloud,
  TrendingUp,
  Cpu,
  Star,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('ar'); // Default Arabic for Figma Make
  const [activeTab, setActiveTab] = useState('all');

  const isRtl = lang === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRtl]);

  const t = {
    ar: {
      nav: {
        about: 'من نحن',
        services: 'خدماتنا',
        products: 'منتجاتنا',
        portfolio: 'أعمالنا',
        whyUs: 'لماذا سيرف فايف',
        blog: 'المقالات',
        contact: 'تواصل معنا',
        launch: 'ابدأ مشروعك',
        phone: '+20 128 874 4744'
      },
      hero: {
        badge: 'هندسة رقمية متقدمة • خبرة موثقة',
        title1: 'هندسة الأنظمة المؤسسية،',
        title2: 'تطبيقات الجوال',
        title3: 'والنمو الرقمي المتسارع',
        desc: 'على مدار أكثر من 15 عاماً، تبتكر سيرف فايف حلولاً برمجية وبنية تحتية سحابية رائدة لأكثر من 20,000 عميل وشريك نجاح في المملكة العربية السعودية ومصر والشرق الأوسط.',
        ctaPrimary: 'ابدأ استشارتك المعمارية',
        ctaSecondary: 'استكشف مجالاتنا الهندسية'
      },
      about: {
        eyebrow: 'من نحن؟',
        title: 'أكثر من 15 عاماً من الخبرة المستمرة',
        desc: 'وراء كل إنجاز قصة نجاح حقيقية. وراء كل خطوة تكنولوجية نخطوها تكمن 15 عاماً من الابتكار والتطوير المستمر. خلال هذه الرحلة، لم نكن مجرد مزود خدمات بل الشريك الاستراتيجي الذي يمكّن الشركات من قيادة أسواقها وصناعة أثر حقيقي ومستدام.',
        badge1: 'سجل نجاح مثبت وموثق في كبرى المشاريع',
        badge1Sub: 'أنظمة معتمدة ومطابقة لهيئة الزكاة والضريبة والجمارك (ZATCA)',
        badge2: 'أعلى معايير الأمان والحماية والاعتمادية',
        badge2Sub: 'بنية تحتية سحابية فائقة السرعة NVMe مع ضمان تشغيل 99.98%',
        cta: 'استكشف سجل إنجازاتنا',
        numYears: '15',
        numUnit: 'Y',
        caption: 'عاماً من الابتكار المستمر والريادة الرقمية'
      },
      services: {
        eyebrow: 'خدماتنا الهندسية',
        title: 'منظومة حلول برمجية متكاملة لنمو أعمالك',
        items: [
          { title: 'تطوير وتصميم مواقع الويب', desc: 'مواقع فائقة السرعة ومصممة بأحدث تقنيات React وNext.js متوافقة كلياً مع محركات البحث.' },
          { title: 'برمجة وتطوير تطبيقات الجوال', desc: 'تطبيقات iOS وAndroid أصلية وسلسة تضمن أعلى معدلات التحويل وتجربة مستخدم لا مثيل لها.' },
          { title: 'متاجر إلكترونية وحلول دفع', desc: 'متاجر سحابية متكاملة تدعم مدى، أبل باي، وبوابات الدفع الإلكتروني المعتمدة بالخليج ومصر.' },
          { title: 'الاستضافة السحابية وDevOps', desc: 'سيرفرات سحابية NVMe محمية بجدران أمان متقدمة مع نسخ احتياطي وضمان تشغيل 99.98%.' },
          { title: 'التسويق الرقمي وإدارة الحملات', desc: 'حملات إعلانية مدفوعة بالبيانات تستهدف أعلى عائد على الإنفاق الإعلاني (ROAS).' },
          { title: 'أنظمة ERP وإدارة الشركات', desc: 'أنظمة محاسبية وإدارية مخصصة للشركات متوافقة مع الفاتورة الإلكترونية والمواصفات الحكومية.' }
        ]
      }
    },
    en: {
      nav: {
        about: 'About Us',
        services: 'Services',
        products: 'Products',
        portfolio: 'Portfolio',
        whyUs: 'Why SERV5',
        blog: 'Blog',
        contact: 'Contact',
        launch: 'Launch Project',
        phone: '+20 128 874 4744'
      },
      hero: {
        badge: 'ADVANCED DIGITAL ARCHITECTURE • EST. 2008',
        title1: 'Architecting Enterprise Systems,',
        title2: 'Mobile Platforms',
        title3: '& High-Velocity Growth',
        desc: 'For over 15+ years, SERV5 has designed monumental digital solutions for over 20,000 forward-thinking enterprises, government entities, and market leaders across Saudi Arabia, Egypt, and global markets.',
        ctaPrimary: 'Initiate Architecture Proposal',
        ctaSecondary: 'Explore Engineering Domains'
      },
      about: {
        eyebrow: 'WHO ARE WE?',
        title: 'Over 15 Years of Continuous Experience',
        desc: 'Behind every milestone is a success story. Behind every technological step we take lies 15 years of continuous innovation and development. Throughout this journey, we have never been just a service provider—we have been the strategic partner that empowers businesses to become leaders in their industries. Today, we bring this experience to you to create a real and lasting impact.',
        badge1: 'Proven Track Record of Success',
        badge1Sub: 'Audited enterprise deployments across Saudi Arabia & Egypt',
        badge2: 'High Security & Reliability',
        badge2Sub: 'Tier-4 NVMe infrastructure & 99.98% SLA standard',
        cta: 'Explore Enterprise Track Record',
        numYears: '15',
        numUnit: 'Y',
        caption: 'YEARS OF CONTINUOUS INNOVATION & DIGITAL EXCELLENCE'
      },
      services: {
        eyebrow: 'ENGINEERING DOMAINS',
        title: 'Integrated Solutions Engineered for Uncompromising Scale',
        items: [
          { title: 'Enterprise Web Architecture', desc: 'Ultra-fast web platforms engineered with modern headless frameworks, guaranteed Core Web Vitals.' },
          { title: 'Native & Cross-Platform Mobile', desc: 'Seamless iOS and Android apps designed for frictionless checkout and massive concurrent active users.' },
          { title: 'Cloud E-Commerce Infrastructure', desc: 'Scalable commerce storefronts with automated ZATCA Phase-2 e-invoicing and GCC payment gateways.' },
          { title: 'Tier-4 Cloud Hosting & DevOps', desc: 'Ultra-fast NVMe cloud nodes backed by multi-layer DDoS protection and 99.98% SLA standard.' },
          { title: 'Performance Growth Marketing', desc: 'Data-driven acquisition, conversion rate optimization (CRO), and high-ROAS marketing campaigns.' },
          { title: 'Custom ERP & Corporate Systems', desc: 'Tailored enterprise resource management pipelines built to eliminate operational bottlenecks.' }
        ]
      }
    }
  };

  const current = t[lang];

  return (
    <div className={`serv5-figma-root ${isRtl ? 'dir-rtl' : 'dir-ltr'}`}>
      {/* ==========================================
          1. NAVIGATION BAR
         ========================================== */}
      <header className="s5-navbar">
        <div className="s5-container nav-inner">
          {/* Logo */}
          <div className="s5-logo-wrap">
            <div className="s5-logo-icon">S5</div>
            <div className="s5-logo-text">
              <span className="logo-main">serv<span>5</span></span>
              <span className="logo-sub">{isRtl ? 'استوديو النمو الرقمي' : 'Digital Growth Studio'}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="s5-nav-menu">
            <a href="#about" className="nav-item">{current.nav.about}</a>
            <a href="#services" className="nav-item">{current.nav.services}</a>
            <a href="#products" className="nav-item">{current.nav.products}</a>
            <a href="#portfolio" className="nav-item">{current.nav.portfolio}</a>
            <a href="#why-us" className="nav-item">{current.nav.whyUs}</a>
            <a href="#blog" className="nav-item">{current.nav.blog}</a>
            <a href="#contact" className="nav-item">{current.nav.contact}</a>
          </nav>

          {/* Actions & Language Switcher */}
          <div className="s5-nav-actions">
            <button
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="btn-lang-toggle"
              title="تغيير اللغة / Change Language"
            >
              {lang === 'ar' ? 'English' : 'العربية'}
            </button>
            <a href="tel:+201288744744" className="nav-phone">
              <Phone size={14} />
              <span>{current.nav.phone}</span>
            </a>
            <button className="btn-nav-primary">
              <span>{current.nav.launch}</span>
              {isRtl ? <ArrowLeft size={15} /> : <ArrowRight size={15} />}
            </button>
          </div>
        </div>
      </header>

      {/* ==========================================
          2. HERO SECTION
         ========================================== */}
      <section className="s5-hero-section">
        <div className="s5-container">
          <div className="hero-content-col">
            <div className="s5-badge-pill">
              <span className="badge-pulse-dot" />
              <span>{current.hero.badge}</span>
            </div>

            <h1 className="hero-heading">
              {current.hero.title1}{' '}
              <span className="text-highlight-blue">{current.hero.title2}</span>{' '}
              <span className="text-highlight-orange">{current.hero.title3}</span>
            </h1>

            <p className="hero-subtext">
              {current.hero.desc}
            </p>

            <div className="hero-btn-group">
              <button className="btn-hero-primary">
                <span>{current.hero.ctaPrimary}</span>
                {isRtl ? <ArrowLeft size={17} /> : <ArrowRight size={17} />}
              </button>

              <button className="btn-hero-secondary">
                <span>{current.hero.ctaSecondary}</span>
                <ExternalLink size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          3. ABOUT US / THE 15-YEAR REVEAL
         ========================================== */}
      <section className="s5-about-section" id="about">
        <div className="s5-container">
          <div className="about-grid">
            {/* Left Column: Narrative Content */}
            <div className="about-text-col">
              <div className="about-eyebrow-row">
                <span className="about-eyebrow-dash">—</span>
                <span className="about-eyebrow-tag">{current.about.eyebrow}</span>
              </div>

              <h2 className="about-heading">
                {current.about.title}
              </h2>

              <p className="about-description">
                {current.about.desc}
              </p>

              {/* Trust Indicators */}
              <div className="about-trust-cards">
                <div className="trust-card">
                  <div className="trust-icon-box">
                    <CheckCircle2 size={18} className="text-ice" />
                  </div>
                  <div className="trust-card-info">
                    <span className="trust-title">{current.about.badge1}</span>
                    <span className="trust-subtitle">{current.about.badge1Sub}</span>
                  </div>
                </div>

                <div className="trust-card">
                  <div className="trust-icon-box">
                    <ShieldCheck size={18} className="text-ice" />
                  </div>
                  <div className="trust-card-info">
                    <span className="trust-title">{current.about.badge2}</span>
                    <span className="trust-subtitle">{current.about.badge2Sub}</span>
                  </div>
                </div>
              </div>

              <div className="about-cta-row">
                <button className="btn-about-cta">
                  <span>{current.about.cta}</span>
                  {isRtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                </button>
              </div>
            </div>

            {/* Right Column: "15Y" The Reveal Monument */}
            <div className="about-monument-col">
              <div className="monument-box">
                {/* Thin Elegant Ice-Blue Vertical Line */}
                <div className="monument-ice-line" />

                {/* 15Y Monumental Typography */}
                <div className="monument-digits">
                  <span className="digit-num">{current.about.numYears}</span>
                  <span className="digit-unit">{current.about.numUnit}</span>
                </div>

                {/* Subtitle Caption */}
                <div className="monument-caption">
                  <span className="caption-dot" />
                  <span>{current.about.caption}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          4. SERVICES SHOWCASE
         ========================================== */}
      <section className="s5-services-section" id="services">
        <div className="s5-container">
          <div className="section-head text-center">
            <span className="s5-eyebrow">{current.services.eyebrow}</span>
            <h2 className="section-title">{current.services.title}</h2>
          </div>

          <div className="services-grid">
            {current.services.items.map((svc, idx) => (
              <div key={idx} className="service-card">
                <div className="service-card-top">
                  <div className="service-icon">
                    <Code2 size={22} />
                  </div>
                  <span className="service-num">0{idx + 1}</span>
                </div>
                <h3 className="service-name">{svc.title}</h3>
                <p className="service-summary">{svc.desc}</p>
                <div className="service-hover-link">
                  <span>{isRtl ? 'عرض التفاصيل' : 'Explore Domain'}</span>
                  {isRtl ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          5. EMBEDDED CSS STYLES (Figma Make Compatible)
         ========================================== */}
      <style>{`
        :root {
          --bg-dark: #080B0D;
          --bg-card: rgba(11, 19, 41, 0.75);
          --navy-primary: #1E40AF;
          --navy-accent: #2563EB;
          --ice-blue: #60A5FA;
          --ice-light: #93C5FD;
          --text-main: #FFFFFF;
          --text-muted: #94A3B8;
          --text-dim: #64748B;
          --border-subtle: rgba(59, 130, 246, 0.22);
          --radius-md: 14px;
          --radius-lg: 24px;
          --radius-full: 9999px;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .serv5-figma-root {
          background-color: var(--bg-dark);
          color: var(--text-main);
          min-height: 100vh;
          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
          position: relative;
          overflow-x: hidden;
        }

        .dir-rtl {
          direction: rtl;
          text-align: right;
        }

        .dir-ltr {
          direction: ltr;
          text-align: left;
        }

        .s5-container {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* 1. Navbar */
        .s5-navbar {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(8, 11, 13, 0.88);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(243, 239, 234, 0.08);
          padding: 1.1rem 0;
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .s5-logo-wrap {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }

        .s5-logo-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 1.15rem;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
        }

        .s5-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .logo-main {
          font-size: 1.25rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.02em;
        }

        .logo-main span {
          color: var(--ice-blue);
        }

        .logo-sub {
          font-size: 0.62rem;
          letter-spacing: 0.12em;
          color: var(--text-muted);
        }

        .s5-nav-menu {
          display: flex;
          align-items: center;
          gap: 1.8rem;
        }

        .nav-item {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.88rem;
          font-weight: 600;
          transition: color 0.2s ease;
        }

        .nav-item:hover {
          color: #ffffff;
        }

        .s5-nav-actions {
          display: flex;
          align-items: center;
          gap: 1.1rem;
        }

        .btn-lang-toggle {
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid var(--border-subtle);
          color: var(--ice-blue);
          padding: 0.45rem 0.9rem;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
        }

        .nav-phone {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.82rem;
          font-weight: 600;
        }

        .btn-nav-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #0f2744 0%, #1e40af 100%);
          color: #ffffff;
          padding: 0.6rem 1.45rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(96, 165, 250, 0.35);
          font-size: 0.84rem;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 4px 18px rgba(30, 64, 175, 0.35);
          transition: all 0.25s ease;
        }

        .btn-nav-primary:hover {
          background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%);
          transform: translateY(-1px);
        }

        /* 2. Hero */
        .s5-hero-section {
          padding: 8rem 0 5rem;
          position: relative;
        }

        .hero-content-col {
          max-width: 820px;
        }

        .s5-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(30, 58, 138, 0.35);
          border: 1px solid rgba(96, 165, 250, 0.3);
          padding: 0.4rem 1.1rem;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--ice-blue);
          margin-bottom: 1.8rem;
        }

        .badge-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #38bdf8;
          box-shadow: 0 0 10px #38bdf8;
        }

        .hero-heading {
          font-size: clamp(2.5rem, 5vw, 4.4rem);
          font-weight: 800;
          letter-spacing: -0.025em;
          line-height: 1.2;
          color: #ffffff;
          margin-bottom: 1.8rem;
        }

        .text-highlight-blue {
          background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 30%, #60a5fa 70%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .text-highlight-orange {
          background: linear-gradient(120deg, #ea580c 0%, #ff6b35 30%, #f97316 60%, #fbbf24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtext {
          font-size: clamp(1.05rem, 1.3vw, 1.22rem);
          line-height: 1.85;
          color: var(--text-muted);
          margin-bottom: 2.6rem;
        }

        .hero-btn-group {
          display: flex;
          align-items: center;
          gap: 1.3rem;
          flex-wrap: wrap;
        }

        .btn-hero-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          background: linear-gradient(135deg, #0f2744 0%, #1e40af 50%, #2563eb 100%);
          color: #ffffff;
          font-size: 0.98rem;
          font-weight: 700;
          padding: 1rem 2.4rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(96, 165, 250, 0.35);
          box-shadow: 0 6px 28px rgba(30, 64, 175, 0.45);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-hero-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 36px rgba(37, 99, 235, 0.65);
        }

        .btn-hero-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(243, 239, 234, 0.04);
          color: #ffffff;
          font-size: 0.98rem;
          font-weight: 600;
          padding: 1rem 2.2rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(243, 239, 234, 0.12);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .btn-hero-secondary:hover {
          background: rgba(243, 239, 234, 0.08);
          border-color: rgba(96, 165, 250, 0.4);
        }

        /* 3. About Us */
        .s5-about-section {
          padding: 8rem 0;
          border-top: 1px solid rgba(243, 239, 234, 0.06);
          position: relative;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 4rem;
          align-items: center;
        }

        .about-eyebrow-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1.2rem;
        }

        .about-eyebrow-dash {
          color: #38bdf8;
          font-weight: 800;
          font-size: 1.2rem;
        }

        .about-eyebrow-tag {
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          color: var(--ice-blue);
        }

        .about-heading {
          font-size: clamp(2.3rem, 4.2vw, 3.6rem);
          font-weight: 800;
          line-height: 1.25;
          letter-spacing: -0.025em;
          color: #ffffff;
          margin-bottom: 1.6rem;
        }

        .about-description {
          font-size: clamp(1.02rem, 1.2vw, 1.15rem);
          line-height: 1.85;
          color: var(--text-muted);
          margin-bottom: 2.2rem;
        }

        .about-trust-cards {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          margin-bottom: 2.2rem;
        }

        .trust-card {
          display: flex;
          align-items: center;
          gap: 1.1rem;
          background: var(--bg-card);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--border-subtle);
          padding: 1.1rem 1.45rem;
          border-radius: var(--radius-md);
        }

        .trust-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(30, 58, 138, 0.4);
          border: 1px solid rgba(96, 165, 250, 0.3);
          border-radius: 8px;
          flex-shrink: 0;
        }

        .text-ice {
          color: #60a5fa;
        }

        .trust-card-info {
          display: flex;
          flex-direction: column;
        }

        .trust-title {
          font-size: 0.98rem;
          font-weight: 700;
          color: #ffffff;
        }

        .trust-subtitle {
          font-size: 0.82rem;
          color: #64748b;
          margin-top: 0.2rem;
        }

        .btn-about-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          background: linear-gradient(135deg, #0f2744 0%, #1e40af 100%);
          color: #ffffff;
          font-size: 0.92rem;
          font-weight: 700;
          padding: 0.9rem 2.2rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(96, 165, 250, 0.35);
          cursor: pointer;
        }

        /* 15Y Monument Box */
        .monument-box {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 2.5rem 1rem 2rem 3.5rem;
        }

        .dir-rtl .monument-box {
          padding: 2.5rem 3.5rem 2rem 1rem;
          align-items: flex-end;
        }

        .monument-ice-line {
          position: absolute;
          left: 0;
          top: 15px;
          bottom: 45px;
          width: 3px;
          background: linear-gradient(180deg, rgba(56, 189, 248, 0) 0%, #38bdf8 30%, #60a5fa 70%, rgba(96, 165, 250, 0) 100%);
          box-shadow: 0 0 12px rgba(56, 189, 248, 0.65);
          border-radius: 2px;
        }

        .dir-rtl .monument-ice-line {
          left: auto;
          right: 0;
        }

        .monument-digits {
          display: inline-flex;
          align-items: baseline;
          line-height: 0.88;
        }

        .digit-num, .digit-unit {
          font-size: clamp(7.5rem, 15vw, 14.5rem);
          font-weight: 900;
          line-height: 0.88;
          letter-spacing: -0.05em;
          background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 32%, #60a5fa 68%, #1e40af 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 15px 35px rgba(30, 64, 175, 0.35));
        }

        .monument-caption {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          margin-top: 1.4rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(243, 239, 234, 0.08);
          font-size: 0.74rem;
          letter-spacing: 0.14em;
          color: #94a3b8;
          font-weight: 600;
        }

        .caption-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #38bdf8;
          box-shadow: 0 0 8px #38bdf8;
        }

        /* 4. Services Grid */
        .s5-services-section {
          padding: 7rem 0 9rem;
          border-top: 1px solid rgba(243, 239, 234, 0.06);
        }

        .section-head {
          margin-bottom: 4rem;
        }

        .s5-eyebrow {
          font-size: 0.78rem;
          letter-spacing: 0.16em;
          font-weight: 700;
          color: var(--ice-blue);
          text-transform: uppercase;
        }

        .section-title {
          font-size: clamp(2.2rem, 3.8vw, 3.2rem);
          font-weight: 800;
          color: #ffffff;
          margin-top: 0.8rem;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.8rem;
        }

        .service-card {
          background: var(--bg-card);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 2.2rem;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-4px);
          border-color: rgba(96, 165, 250, 0.5);
          box-shadow: 0 16px 40px rgba(30, 64, 175, 0.3);
        }

        .service-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.6rem;
        }

        .service-icon {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: rgba(30, 58, 138, 0.4);
          border: 1px solid rgba(96, 165, 250, 0.3);
          color: var(--ice-blue);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .service-num {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-dim);
        }

        .service-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.8rem;
        }

        .service-summary {
          font-size: 0.92rem;
          line-height: 1.75;
          color: var(--text-muted);
          margin-bottom: 1.8rem;
          flex: 1;
        }

        .service-hover-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--ice-blue);
        }

        /* Responsive */
        @media (max-width: 991px) {
          .s5-nav-menu {
            display: none;
          }
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

