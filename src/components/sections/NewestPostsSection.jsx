import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Search,
  ChevronLeft,
  ChevronRight,
  X,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Maximize2
} from 'lucide-react';

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

  // 6 Flagship platforms engineered by SERV5
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

  // Filtering
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalAnimating, setIsModalAnimating] = useState(false);

  const filteredProjects = projects.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.overview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Continuous 3D drifting & physics state
  const [scrollProgress, setScrollProgress] = useState(2.0);
  const progressRef = useRef(2.0);
  const velocityRef = useRef(0.0035); // Base auto-drift velocity
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const isHoveredRef = useRef(false);
  const stageRef = useRef(null);

  // Animation Frame Loop for 60fps Continuous Drifting (Exact Evil Rabbit / Deimos mechanics)
  useEffect(() => {
    let animId;

    const loop = () => {
      if (!isDraggingRef.current) {
        // Auto drift: slows when hovered, smoothly cruises otherwise
        const targetVelocity = isHoveredRef.current ? 0.0006 : 0.0035;
        velocityRef.current += (targetVelocity - velocityRef.current) * 0.05;
        progressRef.current += velocityRef.current;
        setScrollProgress(progressRef.current);
      }
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Wheel listener: mouse wheel scrolling drives the stream along the 3D curve
  const handleWheel = useCallback((e) => {
    e.preventDefault();
    const delta = (e.deltaY || e.deltaX) * 0.0018;
    progressRef.current += delta;
    velocityRef.current = delta * 0.3;
    setScrollProgress(progressRef.current);
  }, []);

  // Dragging support
  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const deltaX = (e.clientX - startXRef.current) * 0.005;
    const dir = isRtl ? 1 : -1;
    progressRef.current += deltaX * dir;
    velocityRef.current = deltaX * dir * 0.2;
    startXRef.current = e.clientX;
    setScrollProgress(progressRef.current);
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  // Spot UV Coating Specular Mousemove
  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--spot-x', `${x}px`);
    card.style.setProperty('--spot-y', `${y}px`);
  };

  // Safe navigation controls
  const handlePrev = () => {
    progressRef.current -= 1;
    velocityRef.current = -0.04;
    setScrollProgress(progressRef.current);
  };

  const handleNext = () => {
    progressRef.current += 1;
    velocityRef.current = 0.04;
    setScrollProgress(progressRef.current);
  };

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

  const count = filteredProjects.length || 1;

  return (
    <section className="newest-works-section" id="portfolio">
      <div className="container">
        {/* =========================================================
            HEADER & SEARCH BAR (FEATURED WORKS COMPOSITION)
           ========================================================= */}
        <div className="newest-header-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="newest-title-group"
          >
            <motion.h2
              initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="newest-main-heading"
            >
              {isRtl ? 'أعمالنا المميزة' : 'Our Featured Works'}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="newest-sub-heading"
            >
              {isRtl
                ? 'نماذج حية لمشاريع وتطبيقات ومنصات صممت بأعلى معايير الإبداع الرقمي والأداء الفائق'
                : 'Live showcases of enterprise platforms and software architectures engineered for scale'}
            </motion.p>
          </motion.div>

          {/* Category Filter Pills */}
          <div className="newest-category-pills">
            <button
              className={`cat-pill-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              {isRtl ? 'كافة المنصات' : 'All Works'}
            </button>
            <button
              className={`cat-pill-btn ${activeCategory === 'ecommerce' ? 'active' : ''}`}
              onClick={() => setActiveCategory('ecommerce')}
            >
              {isRtl ? 'متاجر إلكترونية' : 'E-Commerce'}
            </button>
            <button
              className={`cat-pill-btn ${activeCategory === 'mobile' ? 'active' : ''}`}
              onClick={() => setActiveCategory('mobile')}
            >
              {isRtl ? 'تطبيقات الجوال' : 'Mobile Apps'}
            </button>
            <button
              className={`cat-pill-btn ${activeCategory === 'cloud' ? 'active' : ''}`}
              onClick={() => setActiveCategory('cloud')}
            >
              {isRtl ? 'منظومات سحابية' : 'Cloud Architecture'}
            </button>
            <button
              className={`cat-pill-btn ${activeCategory === 'enterprise' ? 'active' : ''}`}
              onClick={() => setActiveCategory('enterprise')}
            >
              {isRtl ? 'مؤسسات وFinTech' : 'Enterprise & FinTech'}
            </button>
          </div>
        </div>

        {/* =========================================================
            3D PERSPECTIVE SPLINE STREAM VIEWPORT (DEIMOS / ZEITGEIST REPLICA)
           ========================================================= */}
        <div
          className="zeitgeist-stream-viewport"
          ref={stageRef}
          onWheel={handleWheel}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onMouseEnter={() => { isHoveredRef.current = true; }}
          onMouseLeave={() => { isHoveredRef.current = false; isDraggingRef.current = false; }}
          aria-label="3D Projects Carousel"
        >
          {/* Depth of Field Blur Curtains (Left Bokeh Vignette) */}
          <div className="zeitgeist-blur-curtain" aria-hidden="true" />

          <div className="zeitgeist-cards-stage">
            {filteredProjects.map((project, idx) => {
              // Calculate continuous circular offset along the 3D spline trajectory
              let offset = ((idx - scrollProgress) % count);
              if (offset < -count / 2) offset += count;
              if (offset > count / 2) offset -= count;

              // Parametric 3D curve trajectory (replicates Evil Rabbit's swooping arc)
              const u = offset; // normalized distance from focal focal center (-3 to +3)
              const absU = Math.abs(u);

              // Position along 3D space:
              // X: horizontal sweep across viewport (-500px to +500px)
              // Y: vertical swoop downwards in foreground
              // Z: deep in distance on right, close in center, very close at left
              const sign = isRtl ? -1 : 1;
              const posX = u * 240 * sign;
              const posY = Math.sin(u * 0.6) * 35 - u * 15;
              const posZ = -absU * 90 + (absU < 0.8 ? (0.8 - absU) * 60 : 0);
              const rotY = -u * 17 * sign;
              const rotX = 4 + Math.sin(u * 0.5) * 4;
              const scale = Math.max(0.35, 1 - absU * 0.1);
              const opacity = Math.max(0.15, 1 - absU * 0.28);
              const blurAmount = u < -1.8 ? (Math.abs(u) - 1.8) * 6 : 0;
              const isCenter = absU < 0.5;

              return (
                <div
                  key={project.id}
                  className={`zeitgeist-card-item ${isCenter ? 'card-active-spot' : ''}`}
                  style={{
                    transform: `translate3d(${posX}px, ${posY}px, ${posZ}px) rotateY(${rotY}deg) rotateX(${rotX}deg) scale(${scale})`,
                    opacity: opacity,
                    filter: blurAmount > 0 ? `blur(${blurAmount}px)` : 'none',
                    zIndex: Math.round(100 - absU * 15),
                    '--card-tint': project.cardColor,
                    '--card-accent': project.accentColor
                  }}
                  onMouseMove={handleCardMouseMove}
                  onClick={() => handleOpenProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleOpenProject(project);
                    }
                  }}
                  title={isRtl ? `انقر لفتح دراسة ${project.title}` : `Click to inspect ${project.title}`}
                >
                  <div className="zeitgeist-card-surface">
                    {/* Spot UV Specular Gloss Layer */}
                    <div className="spot-uv-sheen" aria-hidden="true" />

                    {/* 3D Book Spine Rim Accent */}
                    <div className="card-spine-edge" style={{ background: project.accentColor }} />

                    {/* Card Top Meta */}
                    <div className="card-top-bar">
                      <span className="card-project-num">{project.number}</span>
                      <span className="card-project-year">{project.year}</span>
                    </div>

                    {/* Card Visual Graphic Mockup */}
                    <div className="card-graphic-frame">
                      <div className="card-graphic-mockup">
                        <div className="card-mockup-badge">
                          {renderProjectIcon(project.id, project.accentColor)}
                        </div>
                        <div className="card-mockup-lines">
                          <span className="line-bar bar-long" />
                          <span className="line-bar bar-short" />
                        </div>
                      </div>
                    </div>

                    {/* Card Typography & Book Editorial Meta */}
                    <div className="card-info-bottom">
                      <span className="card-category-tag">{project.categoryLabel}</span>
                      <h3 className="card-project-name">{project.title}</h3>
                      <p className="card-client-sub">{project.client}</p>

                      <div className="card-action-bar">
                        <span className="card-read-label">{isRtl ? 'عرض المنظومة' : 'Inspect'}</span>
                        <ArrowUpRight size={14} className="card-read-arrow" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* =========================================================
          MORPHING FULL PROJECT INSPECTOR MODAL (PHASE 2 EXPANSION)
         ========================================================= */}
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
                className="btn-modal-close"
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
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-live-preview"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(
                        isRtl
                          ? `جاري فتح المعاينة المباشرة لمنصة: ${selectedProject.title}`
                          : `Opening live preview for: ${selectedProject.title}`
                      );
                    }}
                  >
                    <span>{isRtl ? 'مشاهدة الموقع لايف ↗' : 'Visit Live Website ↗'}</span>
                    <ExternalLink size={16} />
                  </a>

                  <button
                    type="button"
                    className="btn-request-similar"
                    onClick={() => {
                      handleCloseProject();
                      onOpenConsultation(
                        isRtl
                          ? `طلب دراسة مشروع مماثل لـ ${selectedProject.title}`
                          : `Consultation for build similar to ${selectedProject.title}`
                      );
                    }}
                  >
                    <span>{isRtl ? 'طلب مشروع مماثل' : 'Build Similar Platform'}</span>
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
