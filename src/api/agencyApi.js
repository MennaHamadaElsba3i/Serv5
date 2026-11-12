// TanStack Query Mock API for Serv5 Flagship
export const fetchAgencyLiveStats = async () => {
  // Simulate network latency
  await new Promise((r) => setTimeout(r, 200));
  return {
    activeDeployments: 20412,
    googleCoreWebVitals: 100,
    satisfactionRate: 99.4,
    uptimeSla: '99.98%',
    activeOffices: ['الرياض - طريق الملك فهد', 'القاهرة - التجمع الخامس', 'المنصورة - قناة السويس', 'دبي'],
    verifiedReviewsCount: 148,
    averageRating: 4.9
  };
};

export const fetchPricingPackages = async (lang = 'ar', cycle = 'monthly') => {
  await new Promise((r) => setTimeout(r, 150));
  const isAnnual = cycle === 'annual';
  const discountMultiplier = isAnnual ? 0.8 : 1.0;

  if (lang === 'ar') {
    return [
      {
        id: 'starter',
        name: 'باقة الانطلاق والنمو الرقمي',
        subtitle: 'مثالية للشركات الناشئة والمتاجر التي تريد بناء حضور قوي',
        priceMonthly: Math.round(2800 * discountMultiplier),
        currency: 'ريال / شهرياً',
        popular: false,
        badge: 'الأسرع نمواً',
        features: [
          'تصميم وبرمجة موقع تعريفي فائق السرعة متوافق مع الجوال',
          'تهيئة السيو الداخلي الأساسي (On-Page SEO)',
          'إدارة الحملات الإعلانية على منصتين (Snapchat & Google)',
          'استضافة سحابية فائقة السرعة مع شهادة أمان SSL مجانية',
          'ربط بوابات الدفع الإلكتروني (Mada / Apple Pay)',
          'دعم فني واستشارات تسويقية شهرية'
        ]
      },
      {
        id: 'scale',
        name: 'باقة التوسع ومضاعفة المبيعات (Performance Pro)',
        subtitle: 'للشركات والمتاجر التي تستهدف مضاعفة العائد على الإنفاق الإعلاني (ROAS)',
        priceMonthly: Math.round(5900 * discountMultiplier),
        currency: 'ريال / شهرياً',
        popular: true,
        badge: 'الأكثر طلباً (قيمة تك + زيكولا)',
        features: [
          'تطوير متجر إلكتروني احترافي أو منصة SaaS مخصصة بالكامل',
          'تحسين معدل التحويل (CRO) واختبارات تجربة الشراء من الداخل',
          'إدارة حملات Omnichannel متكاملة (Google PMax, TikTok, Meta, Snap)',
          'اسكريبت الواتساب الرسمي للأتمتة والرد الفوري 24/7',
          'تصدر الكلمات المفتاحية في جوجل وبناء روابط خلفية قوية',
          'تقارير أداء حية مبنية على البيانات مع مستشار تسويقي مخصص',
          'تكامل مع الفوترة الإلكترونية وهيئة الزكاة (ZATCA)'
        ]
      },
      {
        id: 'enterprise',
        name: 'باقة الريادة المؤسسية والتحول الرقمي (Enterprise Suite)',
        subtitle: 'منظومة حلول شاملة تجمع بين هندسة الـ ERP والتطبيقات والتسويق السيادي',
        priceMonthly: Math.round(11500 * discountMultiplier),
        currency: 'ريال / شهرياً',
        popular: false,
        badge: 'حلول سيادية شاملة',
        features: [
          'تطوير تطبيق جوال أصلي للآيفون والأندرويد (iOS & Android)',
          'نظام ERP / CRM سحابي مخصص لإدارة الفروع والعمليات والمخزون',
          'استراتيجية إعلامية وإنتاج فيديوهات وموشن جرافيك 3D سينمائي',
          'حملات تسويق مع المؤثرين وشراكات استراتيجية مدروسة',
          'سيرفرات سحابية خاصة مخصصة داخل المملكة مع حماية DDoS',
          'فريق مهندسين ومسوقين مخصص يعمل كذراع تقني وتنفيذي لشركتك',
          'اتفاقية مستوى الخدمة (SLA 99.99%) ودعم طوارئ على مدار الساعة'
        ]
      }
    ];
  }

  return [
    {
      id: 'starter',
      name: 'Digital Growth & Launch',
      subtitle: 'Engineered for startups and emerging brands establishing market presence',
      priceMonthly: Math.round(750 * discountMultiplier),
      currency: 'USD / mo',
      popular: false,
      badge: 'Fast Launch',
      features: [
        'Ultra-fast, mobile-first responsive corporate website',
        'Fundamental On-Page technical SEO architecture',
        'Targeted performance advertising (Snapchat & Google Ads)',
        'Managed cloud SSD hosting with complimentary SSL certificates',
        'Payment gateway integration (Apple Pay, Visa, Mada)',
        'Continuous monthly technical consultation and support'
      ]
    },
    {
      id: 'scale',
      name: 'Performance Scaling & CRO Pro',
      subtitle: 'For businesses demanding maximized ROAS and conversion throughput',
      priceMonthly: Math.round(1550 * discountMultiplier),
      currency: 'USD / mo',
      popular: true,
      badge: 'Most Popular Flagship',
      features: [
        'Custom headless e-commerce store or SaaS platform build',
        'Data-driven Conversion Rate Optimization (CRO) & checkout tuning',
        'Omnichannel acquisition (Google Performance Max, TikTok, Meta, Snap)',
        'Official WhatsApp Cloud API chatbot for instant sales closing',
        'Top page-one Google ranking strategy & backlink outreach',
        'Real-time analytics dashboard with dedicated growth director',
        'Full compliance with ZATCA Phase 2 electronic invoicing'
      ]
    },
    {
      id: 'enterprise',
      name: 'Sovereign Enterprise & Architecture Suite',
      subtitle: 'Complete institutional digital transformation: ERP, Mobile OS & Media',
      priceMonthly: Math.round(3100 * discountMultiplier),
      currency: 'USD / mo',
      popular: false,
      badge: 'Full Institutional Scale',
      features: [
        'Native iOS & Android mobile application development',
        'Bespoke cloud ERP/CRM backend unifying branch operations',
        'Cinematic 3D branding, commercial motion graphics, and video',
        'GCC influencer marketing partnerships and brand activations',
        'Dedicated sovereign cloud infrastructure with enterprise DDoS shield',
        'Dedicated sprint engineering squad embedded into your operations',
        'Mission-critical 99.99% uptime SLA with 24/7 dedicated SRE'
      ]
    }
  ];
};

