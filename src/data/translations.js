export const translations = {
  ar: {
    // Top Bar & Hero
    hudTitle: "سيرف فايف • المقر الموحد للحلول الرقمية والبرمجة",
    badge: "خبرة أكثر من 16 عاماً • منذ 2008 • أكثر من 20,000 عميل",
    heroTitlePrefix: "سِيرف فايف | نصنع حلولاً برمجية ورقمية",
    heroTitleHighlight: "تصنع فارقاً حقيقياً لمشروعك",
    heroSubtitle: "شركة متخصصة في البرمجة والحلول الرقمية، نقدم خدمات تصميم وبرمجة المواقع، المتاجر الإلكترونية، تطبيقات الموبايل، تحسين محركات البحث (SEO)، والتسويق الرقمي للشركات والأفراد في السعودية والخليج ومصر والعالم.",
    ctaConsultation: "برمج إعلانك وابدأ الآن",
    ctaPortfolio: "استكشف أعمالنا المميزة",
    ctaEstimate: "احسب تكلفة مشروعك",

    // Quick Stats
    quickStats: [
      { value: "16+", label: "عاماً من التميز والخبرة المتواصلة (منذ 2008)" },
      { value: "20,000+", label: "عميل ومشروع منجز وموثوق في 14 دولة" },
      { value: "100%", label: "جاهزية الفوترة والربط الإلكتروني وبوابات الدفع" },
      { value: "24/7", label: "دعم فني واستضافة سحابية محمية وأمان متكامل" }
    ],

    // About Banner (نص الشركة الحرفي من السكرين شوت)
    aboutBannerTitle: "انضم لعملائنا الآن • شريكك الرقمي الموثوق",
    aboutBannerText: "شركة سيرف فايف هي شركة رائدة في مجال خدمات التسويق الرقمي والبرمجة بخبرة تزيد عن 16 عاماً. تقدم الشركة مجموعة متنوعة من الخدمات تشمل استراتيجيات التسويق الرقمي المتكاملة، تطوير مواقع الويب، وتطبيقات الهاتف المحمول، مما يساعد عملاءنا على تحقيق أهدافهم التجارية بكفاءة عالية ومواكبة أحدث التقنيات والاتجاهات العالمية.",

    // Background Mode Switcher (React Bits Pro)
    bgSwitchLabel: "نمط الخلفية التفاعلية:",
    bgDrape: "الستار الطيفي 3D (Spectral Drape)",
    bgShell: "القبة النجمية 3D (Astral Shell)",

    // Services (الخدمات الست الحقيقية)
    servicesSectionTag: "خليك مميز مع سيرف فايف",
    servicesSectionTitle: "خدماتنا البرمجية والتسويقية المتكاملة",
    servicesSectionSubtitle: "من المواقع والمتاجر إلى التطبيقات والتسويق والذكاء الاصطناعي، نوفر كل ما يحتاجه مشروعك للانطلاق بقوة",
    services: [
      {
        id: "hosting",
        icon: "ShieldCheck",
        title: "استضافة المواقع والسيرفرات السحابية",
        desc: "نوفر أفضل خدمات استضافة المواقع السحابية والسيرفرات السريعة مع حماية وأمان متكامل، شهادات SSL، ونسخ احتياطي دوري لضمان استقرار وسرعة موقعك 99.98%.",
        tags: ["Cloud Hosting", "SSD NVMe", "نسخ احتياطي دوري", "حماية DDoS"],
        metrics: "Uptime استقرار 99.98%"
      },
      {
        id: "web-dev",
        icon: "Globe",
        title: "تصميم وبرمجة المواقع الإلكترونية",
        desc: "برمجة وتصميم مواقع احترافية ديناميكية متوافقة تماماً مع جميع الشاشات ومحركات البحث، بسرعة تحميل فائقة وتجربة مستخدم مدروسة بعناية.",
        tags: ["Responsive Design", "React / Next.js", "Clean Architecture", "سرعة قياسية"],
        metrics: "Core Web Vitals 100/100"
      },
      {
        id: "ecommerce",
        icon: "TrendingUp",
        title: "تصميم المتاجر الإلكترونية",
        desc: "متاجر إلكترونية احترافية مخصصة تزيد مبيعاتك، تدعم السداد عبر Mada و Apple Pay، مع لوحة تحكم عربية سهلة لإدارة المنتجات والطلبات والمخزون.",
        tags: ["سلة / زد / مخصص", "Mada & Apple Pay", "إدارة المخزون", "تحويلات مبيعات عالية"],
        metrics: "+180% مضاعفة معدل الشراء"
      },
      {
        id: "mobile-apps",
        icon: "Smartphone",
        title: "تطوير تطبيقات الجوال (iOS & Android)",
        desc: "برمجة تطبيقات هواتف ذكية أصلية وهجينة بأعلى معايير الأداء والسرعة، مع دعم الإشعارات اللحظية، وتتبع الخرائط المباشر، وسهولة تصفح فائقة.",
        tags: ["Flutter", "iOS & Android", "بوابات الدفع", "Google Play & App Store"],
        metrics: "+1.8M تنزيل للتطبيقات المنفذة"
      },
      {
        id: "marketing",
        icon: "Zap",
        title: "التسويق الإلكتروني وإدارة الحملات",
        desc: "إدارة حملات إعلانية متكاملة وموجهة على سناب شات، تيك توك، جوجل، وإنستغرام لاستهداف العملاء الأكثر اهتماماً بخدماتك داخل المملكة ومصر والخليج.",
        tags: ["إعلانات سناب شات", "Google Ads", "TikTok Ads", "إدارة حسابات السوشيال"],
        metrics: "عائد استثماري 4.8x ROAS"
      },
      {
        id: "seo",
        icon: "Layers",
        title: "تحسين محركات البحث (SEO)",
        desc: "تصدر النتائج الأولى في محرك بحث جوجل، واستقطاب آلاف الزوار والعملاء المستهدفين بدون تكلفة إعلانية مستمرة من خلال تهيئة موقعك داخلياً وخارجياً.",
        tags: ["Technical SEO", "بناء الروابط", "تحسين سرعة الصفحات", "تصدر الكلمات المفتاحية"],
        metrics: "الترتيب #1 في جوجل"
      }
    ],

    // Featured Products (المنتجات المتميزة الحقيقية من السكرين شوت وأسعارها)
    productsTag: "حلول برمجية حصرية جاهزة",
    productsTitle: "منتجات متميزة لتطوير أعمالك ونمو مشروعاتك",
    productsSubtitle: "نقدم حلولاً برمجية وتقنية متكاملة صممت خصيصاً لتطوير أعمالك وتوفير وقتك وجهدك",
    products: [
      {
        id: "lawyer",
        name: "نظام محامي إلكتروني",
        label: "إدارة مكاتب وشركات المحاماة",
        price: "800 دولار",
        headline: "تقدم شركة سيرف فايف نظام محامي إلكتروني كواحد من أقوى منتجاتها البرمجية المصممة خصيصاً لتلبية احتياجات مكاتب المحاماة بمختلف أحجامها.",
        features: [
          "إدارة شاملة للقضايا والموكلين والجلسات",
          "نظام تنبيهات تلقائي بمواعيد الدوائر القضائية",
          "أرشفة إلكترونية مشفرة لملفات القضايا والمستندات",
          "فوترة إلكترونية متوافقة مع الأنظمة المعتمدة"
        ],
        stats: "معتمد لدى عشرات مكاتب المحاماة في المملكة ومصر",
        codeSnippet: `// Serv5 Legal Suite - Case File Dispatcher
import { CaseManager, CourtScheduler } from '@serv5/legal';

export async function scheduleSession(caseId, sessionDate) {
  const caseDossier = await CaseManager.findCase(caseId);
  const scheduled = await CourtScheduler.bookHearing({
    courtBranch: caseDossier.jurisdiction,
    hearingDate: sessionDate,
    clientAlertSMS: true
  });
  return { status: 'HEARING_CONFIRMED', docket: scheduled.docketNumber };
}`
      },
      {
        id: "whatsapp",
        name: "اسكريبت الواتساب المتطور",
        label: "أتمتة خدمة العملاء والمبيعات",
        price: "5,000 جنيه",
        headline: "لغات مؤسسة خدماتنا send.com.. عزيزي العميل خدمتنا لك باحتراف هي ما يضعنا دائماً كاختيار أول لتقديم خدمات متميزة ومتطورة عبر الواتساب.",
        features: [
          "رد آلي ذكي فوري على استفسارات العملاء طوال 24 ساعة",
          "إرسال حملات رسائل تسويقية جماعية للعملاء بضغطة زر",
          "توزيع المحادثات تلقائياً على فريق خدمة العملاء",
          "ربط فوري عبر API مع متجرك أو موقعك الإلكتروني"
        ],
        stats: "زيادة سرعة الرد ومعدل إغلاق المبيعات بنسبة 60%",
        codeSnippet: `// Serv5 WhatsApp Automation Engine
import { WhatsAppClient, TemplateBroadcaster } from '@serv5/whatsapp';

export async function broadcastPromotion(clientList, templateName) {
  const session = await WhatsAppClient.initializeOfficial();
  const dispatchResult = await TemplateBroadcaster.sendBulk({
    recipients: clientList,
    template: templateName,
    mediaHeaderUrl: 'https://serv5.com/assets/promo.jpg'
  });
  return { delivered: dispatchResult.totalSent, successRate: '99.4%' };
}`
      },
      {
        id: "network",
        name: "سكريبت موقع تسويق شبكي",
        label: "إدارة شبكات المسوقين والعمولات",
        price: "5,000 جنيه",
        headline: "سكريبت تصميم موقع خدمات التسويق الشبكي من شركة سيرف فايف لخدمات الويب وتصميم المواقع (.Net Work Marketing Web Site).",
        features: [
          "بناء وإدارة الشجرات الهرمية والثنائية (Binary & Matrix)",
          "حساب دقيق لعمولات المسوقين والأرباح التلقائية",
          "لوحة تحكم خاصة لكل مسوق لمتابعة رصيده وفريقه",
          "بوابات سحب وإيداع متنوعة وسريعة وآمنة"
        ],
        stats: "نظام مستقر يتحمل آلاف المعاملات المالية المتزامنة",
        codeSnippet: `// Serv5 Network Marketing Binary Tree Engine
import { BinaryTree, CommissionCalculator } from '@serv5/network-marketing';

export function calculateBinaryPayout(memberId, period) {
  const treeNode = BinaryTree.getNode(memberId);
  const weakerLegVolume = Math.min(treeNode.leftLegVolume, treeNode.rightLegVolume);
  const payout = CommissionCalculator.computeBonus(weakerLegVolume, treeNode.rankLevel);
  return { memberId, payoutSAR: payout, carryForwardVolume: Math.abs(treeNode.leftLegVolume - treeNode.rightLegVolume) };
}`
      }
    ],

    // Process (كيف نعمل)
    processTag: "منهجية سيرف فايف المعتمدة",
    processTitle: "كيف نعمل لتحويل فكرتك إلى مشروع ناجح ومربح؟",
    processSubtitle: "نتبع خطوات مدروسة تضمن خروج مشروعك بأعلى كفاءة وأسرع وقت",
    phases: [
      { step: "01", title: "الفكرة ودراسة المتطلبات", desc: "جلسة عمل تفصيلية لفهم أهداف مشروعك وتحديد الجمهور المستهدف والخصائص التقنية المطلوبة بدقة." },
      { step: "02", title: "التصميم وتجربة المستخدم", desc: "تصميم واجهات جذابة وعصرية وسهلة الاستخدام تعكس هوية علامتك وتمنح العميل تجربة تصفح لا تُنسى." },
      { step: "03", title: "البرمجة والتطوير المتقدم", desc: "تحويل التصميم لكود برمجي نظيف وسريع مع ربط قواعد البيانات وبوابات الدفع والأنظمة الخارجية بأمان تام." },
      { step: "04", title: "الفحص وضبط الجودة والسرعة", desc: "اختبارات مكثفة للأداء على جميع الأجهزة والمتصفحات، والتأكد من سرعة التحميل وتوافق معايير Google." },
      { step: "05", title: "الإطلاق والتسويق والدعم الفني", desc: "رفع المشروع على سيرفرات سحابية قوية ومحمية، مع بدء الحملات التسويقية وتقديم دعم فني متواصل." }
    ],

    // Featured Work & Portfolio (أعمالنا المميزة من السكرين شوت)
    portfolioTag: "أعمالنا المميزة",
    portfolioTitle: "قصص نجاح ومشاريع نفخر بتنفيذها",
    portfolioSubtitle: "شاهد نماذج من مواقع وتطبيقات ومتاجر صممتها وطورتها سيرف فايف لعملائها في مختلف القطاعات",
    portfolioItems: [
      {
        title: "مشروع مطاعم بيتزا بلازا (Pizza Plaza)",
        category: "موقع إلكتروني ونظام طلبات أونلاين",
        desc: "تصميم وبرمجة منصة متكاملة لسلسلة بيتزا بلازا تتيح تصفح المنيو والطلب الفوري أونلاين والدفع الإلكتروني مع تتبع توصيل الطلبات للمنازل.",
        metric: "+340% زيادة في المبيعات الرقمية المباشرة"
      },
      {
        title: "مستشفى إيماء العام (Eyma General Hospital)",
        category: "منظومة طبية وموقع إلكتروني رسمي",
        desc: "تطوير الموقع الرسمي ونظام حجز المواعيد والاستشارات الطبية مع قاعدة بيانات شاملة للأطباء والعيادات التخصصية.",
        metric: "حجز أكثر من 120,000 موعد إلكترونياً"
      },
      {
        title: "شركة مياه الشرب والصرف الصحي / شمس بلادي",
        category: "بوابة خدمات حكومية ومؤسسية",
        desc: "بناء بوابة إلكترونية تفاعلية تقدم خدمات الاستعلام، سداد الفواتير إلكترونياً، وتقديم الشكاوى وطلبات التوصيل للمواطنين.",
        metric: "خدمة أكثر من نصف مليون مستخدم نشط"
      },
      {
        title: "مشاريع الفيديو ثلاثي الأبعاد وموشن جرافيك (3D Projects)",
        category: "فيديو وتصميم بصري ثلاثي الأبعاد",
        desc: "إنتاج فيديوهات إعلانية وتوضيحية ثلاثية الأبعاد بتفاصيل سينمائية ومؤثرات صوتية ترفع من قيمة وهوية البراند.",
        metric: "+2.5M مشاهدة للحملات الإعلانية"
      }
    ],

    // Clients We Are Proud Of (عملاء نعتز بثقتهم - من السكرين شوت الحقيقي)
    clientsTag: "شركاء النجاح",
    clientsTitle: "عملاء نعتز بثقتهم",
    clientsSubtitle: "سعدنا بتقديم خدماتنا المتنوعة لعملائنا الكرام من تصميم مواقع، برمجة مواقع، تطبيقات الجوال، وخدمات التسويق الإلكتروني ونقدم لهم خالص الشكر والتقدير.",
    clientLogos: [
      "بنك الجزيرة (Bank AlJazira)",
      "موطن العقارية (Mawten)",
      "LUXURY LIFE",
      "SOINS Medical",
      "HAKER Group",
      "TRAIN AUTO",
      "SURF N FRIES",
      "WAMEX Logistics",
      "مستشفى إيماء العام",
      "شمس بلادي"
    ],

    // Blog Articles (مدونة سيرف فايف الحقيقية من السكرين شوت)
    blogTag: "مدونة سيرف فايف",
    blogTitle: "كل ما هو جديد في عالم البرمجة والتسويق والذكاء الاصطناعي",
    blogSubtitle: "مقالات حصرية ونصائح عملية من خبراء سيرف فايف لمساعدتك على تنمية أعمالك ومواكبة التكنولوجيا",
    blogPosts: [
      {
        title: "أفضل تقنيات تصميم وبرمجة المواقع في 2026",
        date: "2026",
        desc: "استعراض شامل لأحدث تقنيات الويب، الذكاء الاصطناعي، وتسريع التحميل لضمان تفوق موقعك على المنافسين."
      },
      {
        title: "كيف ساهم SEO في تحسين ظهور المواقع في نتائج البحث؟ تجارب ونتائج حقيقية",
        date: "2026",
        desc: "قصص وتجارب واقعية لكيفية مضاعفة الزيارات والأرباح بنسبة 400% عبر تحسين السيو والكلمات المفتاحية."
      },
      {
        title: "مراقبة وتطبيق أنظمة الذكاء الاصطناعي في إدارة الأعمال",
        date: "2026",
        desc: "كيف تستفيد الشركات والمؤسسات من أدوات الأتمتة والـ AI لخفض تكاليف التشغيل وزيادة الإنتاجية."
      },
      {
        title: "تصميم موقع مطعم احترافي: دراسة مشروع بيتزا بلازا (Pizza Plaza)",
        date: "2026",
        desc: "العوامل الأساسية التي جعلت موقع بيتزا بلازا يحقق طفرة في الطلبات الأونلاين وتجربة الزوار."
      }
    ],

    // Testimonials
    testimonialsTag: "آراء العملاء",
    testimonialsTitle: "تقييم 5 نجوم من أكثر من 20,000 عميل",
    testimonialsSubtitle: "ماذا يقول عملاؤنا عن تجربتهم مع سيرف فايف وفريق الدعم والتطوير؟",
    testimonials: [
      {
        name: "م. عبد الله الشمري",
        role: "مدير تقنية المعلومات - الرياض",
        quote: "تعاملنا مع سيرف فايف في برمجة نظام المحاماة وتطوير موقع الشركة. الالتزام بالوقت والدقة الفنية وسرعة الاستجابة للدعم الفني كانت ممتازة وفاقت توقعاتنا."
      },
      {
        name: "د. هاني ممدوح",
        role: "المدير الطبي - مجموعة عيادات",
        quote: "فريق سيرف فايف ساعدنا على نقل الحجوزات الطبية بالكامل للأونلاين. سرعة الموقع والـ Core Web Vitals ممتازة جداً ونظام خدمة العملاء بالواتساب وفّر علينا مجهوداً ضخماً."
      }
    ],

    // Contact Information (بيانات التواصل الحقيقية من السكرين شوتس)
    contactTag: "تواصل معنا مباشرة",
    contactTitle: "جاهز لبدء مشروعك الرقمي؟ نحن بانتظارك",
    contactSubtitle: "نسعد بتواصلك معنا. فريقنا متواجد طوال الأسبوع عدا الجمعة والسبت من الساعة 9:00 صباحاً حتى الساعة 4:00 مساءً.",
    contactDetails: {
      phone: "00201288863631",
      phoneAlt: "012888863631",
      email: "sales@serv5.com",
      emailAlt: "serv5group.com@gmail.com",
      addressEgypt: "مصر - المنصورة - شارع قناة السويس - أعلى صيدلية د/ رامي طه",
      addressKsa: "المملكة العربية السعودية - الرياض - طريق الملك فهد",
      workingHours: "الأحد إلى الخميس: 9:00 ص – 4:00 م"
    },

    // Form
    formName: "اسمك الكريم",
    formEmail: "البريد الإلكتروني",
    formPhone: "رقم الهاتف / الواتساب",
    formMessage: "تفاصيل مشروعك والخدمات المطلوبة...",
    formSubmit: "إرسال طلب استشارة مجانية",

    // Newsletter (اشترك)
    newsletterTitle: "اشترك في نشرتنا البريدية ليصلك كل عروضنا والجديد في التقنية",
    newsletterPlaceholder: "أدخل بريدك الإلكتروني هنا...",
    newsletterBtn: "اشترك الآن",

    // Footer Links (الروابط الحقيقية من السكرين شوتس)
    footerUsefulTitle: "روابط تهمك",
    footerUsefulLinks: [
      "شركة برمجة مواقع",
      "برمجة سيستم CRM",
      "برمجة تطبيقات الجوال",
      "برمجة نظام إدارة الشركات",
      "تصميم متاجر إلكترونية بالكويت والسعودية",
      "تصميم متجر إلكتروني احترافي يزيد مبيعاتك"
    ],
    footerImportantTitle: "روابط هامة",
    footerImportantLinks: [
      "الهوية الرقمية والعلامة التجارية",
      "التسويق الإلكتروني الشامل",
      "إدارة المحتوى الرقمي والسيو",
      "إدارة شبكات التواصل الاجتماعي"
    ],
    footerOffersTitle: "عروض مميزة",
    footerOffersLinks: [
      "أفضل شركة تصميم مواقع في مصر والخليج",
      "تصميم موقع شركة احترافي",
      "تصميم متجر إلكتروني متكامل",
      "تصميم موقع تسويق شبكي"
    ],
    footerCopyright: "جميع الحقوق محفوظة لشركة سيرف فايف (SERV5) © 2026",
    navHome: "الرئيسية",
    navServices: "خدماتنا",
    navProducts: "منتجاتنا",
    navProcess: "كيف نعمل",
    navPortfolio: "أعمالنا",
    navBlog: "المدونة",
    navContact: "اتصل بنا"
  },

  en: {
    hudTitle: "SERV5 • Unified Digital Engine & Software Architecture",
    badge: "16+ Years Experience • Est. 2008 • 20,000+ Clients",
    heroTitlePrefix: "SERV5 | We Create Solutions...",
    heroTitleHighlight: "That Make a Real Difference",
    heroSubtitle: "From websites and digital stores to apps, marketing, and artificial intelligence, we offer everything your project needs to confidently launch into the digital world across Saudi Arabia, the GCC, Egypt, and globally.",
    ctaConsultation: "Launch Your Project",
    ctaPortfolio: "Explore Featured Works",
    ctaEstimate: "Calculate Project Scope",

    quickStats: [
      { value: "16+", label: "Years of Continuous Innovation (Since 2008)" },
      { value: "20,000+", label: "Trusted Projects Delivered Across 14 Countries" },
      { value: "100%", label: "ZATCA E-Invoicing & Payment Gateway Compliance" },
      { value: "24/7", label: "Managed Cloud Infrastructure & High-Security SLA" }
    ],

    aboutBannerTitle: "Join Our Clients Today • Your Trusted Digital Partner",
    aboutBannerText: "SERV5 is an industry-leading software engineering and digital marketing agency with over 16 years of battle-tested experience. We deliver comprehensive digital growth strategies, web development, and mobile applications, empowering our clients to surpass their business goals with the latest global technologies.",

    bgSwitchLabel: "3D Background Engine:",
    bgDrape: "Spectral Drape 3D",
    bgShell: "Astral Shell 3D",

    servicesSectionTag: "STAND OUT WITH SERV5",
    servicesSectionTitle: "Our Comprehensive Digital & Software Services",
    servicesSectionSubtitle: "From high-performance cloud hosting to mobile apps and AI automation, we power every phase of your digital lifecycle",
    services: [
      {
        id: "hosting",
        icon: "ShieldCheck",
        title: "High-Performance Cloud Web Hosting",
        desc: "Enterprise cloud hosting and lightning-fast managed servers with multi-layered DDoS defense, automated daily backups, and 99.98% guaranteed uptime.",
        tags: ["Cloud Hosting", "NVMe SSD", "Daily Backups", "DDoS Shield"],
        metrics: "99.98% Operational SLA"
      },
      {
        id: "web-dev",
        icon: "Globe",
        title: "Web Design & Bespoke Development",
        desc: "Custom, fully responsive websites built with clean architecture, sub-second loading speeds, and optimized user journeys tailored for international standards.",
        tags: ["Responsive", "React / Next.js", "Clean Architecture", "Core Web Vitals 100"],
        metrics: "Sub-400ms FCP Performance"
      },
      {
        id: "ecommerce",
        icon: "TrendingUp",
        title: "High-Converting E-Commerce Platforms",
        desc: "Custom digital flagships engineered to maximize checkout conversions, integrated seamlessly with Mada, Apple Pay, Visa, and automated inventory systems.",
        tags: ["Custom Stores", "Mada & Apple Pay", "Stock Sync", "High Conversion"],
        metrics: "+180% Checkout Conversion"
      },
      {
        id: "mobile-apps",
        icon: "Smartphone",
        title: "Native & Cross-Platform Mobile Apps",
        desc: "Intuitive mobile experiences for iOS and Android featuring push notifications, real-time geolocation tracking, and fluid payment gateway checkouts.",
        tags: ["Flutter", "iOS & Android", "Payment SDKs", "App Store & Play"],
        metrics: "+1.8M Active Downloads"
      },
      {
        id: "marketing",
        icon: "Zap",
        title: "Digital Marketing & Performance Media",
        desc: "Data-driven acquisition campaigns across Snapchat KSA, TikTok For Business, Google Ads, and Meta, targeted to high-intent buyers in the GCC and Egypt.",
        tags: ["Snapchat Ads", "Google Performance Max", "TikTok Ads", "Social Management"],
        metrics: "4.8x Average Return on Ad Spend"
      },
      {
        id: "seo",
        icon: "Layers",
        title: "Search Engine Optimization (SEO)",
        desc: "Dominate page one on Google with technical SEO audits, high-authority backlink development, and keyword strategies driving sustainable organic revenue.",
        tags: ["Technical SEO", "Authority Backlinks", "Speed Optimization", "#1 Rank"],
        metrics: "#1 Organic Google Rank"
      }
    ],

    productsTag: "EXCLUSIVE SOFTWARE PLATFORMS",
    productsTitle: "Featured Products Engineered for Business Growth",
    productsSubtitle: "Turnkey enterprise software solutions built to streamline complex operations and save time",
    products: [
      {
        id: "lawyer",
        name: "Electronic Legal ERP Suite",
        label: "Law Firm & Court Case Operating System",
        price: "$800 USD",
        headline: "SERV5's flagship legal management system, engineered specifically to handle court sessions, case archives, client billing, and judicial regulations.",
        features: [
          "Complete case docket and client portfolio tracking",
          "Automated judicial hearing reminder engine",
          "Encrypted military-grade document vault",
          "Compliant tax invoicing with automated QR generation"
        ],
        stats: "Adopted by dozens of premier law firms in Saudi & Egypt",
        codeSnippet: `// Serv5 Legal Suite - Case File Dispatcher
import { CaseManager, CourtScheduler } from '@serv5/legal';

export async function scheduleSession(caseId, sessionDate) {
  const caseDossier = await CaseManager.findCase(caseId);
  const scheduled = await CourtScheduler.bookHearing({
    courtBranch: caseDossier.jurisdiction,
    hearingDate: sessionDate,
    clientAlertSMS: true
  });
  return { status: 'HEARING_CONFIRMED', docket: scheduled.docketNumber };
}`
      },
      {
        id: "whatsapp",
        name: "Enterprise WhatsApp Automation Script",
        label: "Conversational Sales & Customer Bot",
        price: "5,000 EGP",
        headline: "Official WhatsApp automation engine providing 24/7 instant client support, broadcast templates, and seamless integration with your website.",
        features: [
          "24/7 intelligent instant responses to user inquiries",
          "One-click verified bulk broadcast promotional campaigns",
          "Smart conversation distribution across customer care agents",
          "Direct REST API webhooks for e-commerce stores"
        ],
        stats: "60% uplift in lead closing and customer response velocity",
        codeSnippet: `// Serv5 WhatsApp Automation Engine
import { WhatsAppClient, TemplateBroadcaster } from '@serv5/whatsapp';

export async function broadcastPromotion(clientList, templateName) {
  const session = await WhatsAppClient.initializeOfficial();
  const dispatchResult = await TemplateBroadcaster.sendBulk({
    recipients: clientList,
    template: templateName,
    mediaHeaderUrl: 'https://serv5.com/assets/promo.jpg'
  });
  return { delivered: dispatchResult.totalSent, successRate: '99.4%' };
}`
      },
      {
        id: "network",
        name: "Network Marketing (.NET Work) Script",
        label: "Multi-Level Network & Commission Engine",
        price: "5,000 EGP",
        headline: "High-concurrency network marketing website script engineered by SERV5 with binary and matrix genealogy trees and automated dividend payouts.",
        features: [
          "Real-time binary and matrix tree visualization",
          "Automated commission calculations with zero calculation drift",
          "Dedicated distributor portal with team insights",
          "Secure multi-gateway deposit and instant payout modules"
        ],
        stats: "Battle-tested for thousands of concurrent ledger transactions",
        codeSnippet: `// Serv5 Network Marketing Binary Tree Engine
import { BinaryTree, CommissionCalculator } from '@serv5/network-marketing';

export function calculateBinaryPayout(memberId, period) {
  const treeNode = BinaryTree.getNode(memberId);
  const weakerLegVolume = Math.min(treeNode.leftLegVolume, treeNode.rightLegVolume);
  const payout = CommissionCalculator.computeBonus(weakerLegVolume, treeNode.rankLevel);
  return { memberId, payoutSAR: payout, carryForwardVolume: Math.abs(treeNode.leftLegVolume - treeNode.rightLegVolume) };
}`
      }
    ],

    processTag: "PROVEN METHODOLOGY",
    processTitle: "How We Work (From Concept to Revenue)",
    processSubtitle: "A disciplined five-step delivery pipeline ensuring exceptional quality, speed, and reliability",
    phases: [
      { step: "01", title: "Discovery & Blueprint", desc: "In-depth discovery session analyzing your business goals, target demographics, and architectural specifications." },
      { step: "02", title: "UX/UI Design & System", desc: "Crafting memorable, intuitive user experiences and design systems that elevate your brand prestige." },
      { step: "03", title: "Agile Development", desc: "Translating mockups into clean, high-performance code with robust API integrations and security safeguards." },
      { step: "04", title: "QA & Performance Tuning", desc: "Rigorous testing across mobile and desktop devices, locking in 100/100 Core Web Vitals and zero layout shift." },
      { step: "05", title: "Deployment & Growth", desc: "Deploying to hardened cloud infrastructure paired with synchronized marketing campaigns and 24/7 SRE support." }
    ],

    portfolioTag: "FEATURED CASE STUDIES",
    portfolioTitle: "Milestones & Success Stories",
    portfolioSubtitle: "Explore real-world platforms, apps, and stores engineered by SERV5 for industry leaders",
    portfolioItems: [
      {
        title: "Pizza Plaza Restaurant Network",
        category: "Web Platform & Online Ordering POS",
        desc: "Complete digital ecosystem enabling contactless table ordering, online delivery dispatch, and multi-branch inventory tracking.",
        metric: "+340% direct digital order growth"
      },
      {
        title: "Eyma General Hospital",
        category: "Healthcare Portal & Telemedicine System",
        desc: "Official medical portal with doctor directories, automated appointment scheduling, and patient history records.",
        metric: "Over 120,000 online consultations booked"
      },
      {
        title: "National Water & Sanitation Utility / Shams Blady",
        category: "Civic Portal & Electronic Billing",
        desc: "Interactive utility portal facilitating citizen billing payments, service applications, and real-time maintenance requests.",
        metric: "500,000+ active citizen accounts"
      },
      {
        title: "3D Cinematic Branding & Motion Projects",
        category: "Visual Storytelling & 3D Video",
        desc: "High-impact 3D commercial productions and animated explainers crafted to accelerate campaign recall.",
        metric: "+2.5M multi-channel ad views"
      }
    ],

    clientsTag: "TRUSTED BY LEADERS",
    clientsTitle: "Clients We Are Proud Of",
    clientsSubtitle: "We are privileged to have partnered with leading enterprises, financial institutions, and innovative startups across the region.",
    clientLogos: [
      "Bank AlJazira (KSA)",
      "Mawten Real Estate",
      "LUXURY LIFE",
      "SOINS Medical",
      "HAKER Group",
      "TRAIN AUTO",
      "SURF N FRIES",
      "WAMEX Logistics",
      "Eyma General Hospital",
      "Shams Blady"
    ],

    blogTag: "SERV5 INSIGHTS & BLOG",
    blogTitle: "The Frontier of Software, Marketing & AI",
    blogSubtitle: "Actionable engineering frameworks and growth playbooks written by SERV5 technologists",
    blogPosts: [
      {
        title: "Top Web Development & Design Technologies in 2026",
        date: "2026",
        desc: "An executive briefing on modern WebGL shaders, server-side frameworks, and AI-accelerated dev pipelines."
      },
      {
        title: "How Technical SEO Drove 4x Organic Traffic: Field Cases",
        date: "2026",
        desc: "Real data on how restructuring semantic HTML, schema graphs, and page speed multiplied inbound leads."
      },
      {
        title: "Implementing Applied AI in Enterprise Operations",
        date: "2026",
        desc: "How growing businesses leverage conversational AI agents and robotic process automation to slash overhead."
      },
      {
        title: "Designing a World-Class Restaurant Platform: Pizza Plaza Case",
        date: "2026",
        desc: "The UX architecture decisions that turned a local favorite into a dominant multi-branch delivery powerhouse."
      }
    ],

    testimonialsTag: "EXECUTIVE REPUTATION",
    testimonialsTitle: "Trusted by 20,000+ Clients Worldwide",
    testimonialsSubtitle: "Verified reviews from business founders and technical directors who scaled with SERV5",
    testimonials: [
      {
        name: "Eng. Abdullah Al-Shammari",
        role: "Chief Information Officer - Riyadh",
        quote: "Our partnership with SERV5 on our legal ERP and corporate platform has been transformative. Their technical velocity, adherence to milestones, and proactive technical support are second to none."
      },
      {
        name: "Dr. Hany Mamdouh",
        role: "Medical Director - Polyclinic Network",
        quote: "SERV5 digitized our entire patient scheduling workflow. Site performance is instantaneous, and their WhatsApp CRM engine reduced our front-desk call burden by over 50%."
      }
    ],

    contactTag: "GET IN TOUCH",
    contactTitle: "Ready to Build Something Extraordinary?",
    contactSubtitle: "Our consulting team is at your disposal Sunday through Thursday, 9:00 AM to 4:00 PM.",
    contactDetails: {
      phone: "+20 128 888 63631",
      phoneAlt: "012888863631",
      email: "sales@serv5.com",
      emailAlt: "serv5group.com@gmail.com",
      addressEgypt: "Egypt: Mansoura, Suez Canal St., Above Dr. Ramy Taha Pharmacy",
      addressKsa: "Saudi Arabia: Riyadh, King Fahd Road",
      workingHours: "Sunday – Thursday: 9:00 AM – 4:00 PM"
    },

    formName: "Full Name",
    formEmail: "Corporate Email",
    formPhone: "Mobile / WhatsApp",
    formMessage: "Tell us about your project requirements...",
    formSubmit: "Submit Consultation Request",

    newsletterTitle: "Subscribe to our technical briefing for seasonal offers & digital insights",
    newsletterPlaceholder: "Enter your corporate email address...",
    newsletterBtn: "Subscribe",

    footerUsefulTitle: "Useful Solutions",
    footerUsefulLinks: [
      "Custom Web Development",
      "Enterprise CRM Systems",
      "Mobile App Engineering",
      "Corporate Management ERP",
      "E-Commerce Stores (KSA & GCC)",
      "High-Conversion Online Stores"
    ],
    footerImportantTitle: "Strategic Pillars",
    footerImportantLinks: [
      "Digital Brand Identity",
      "Omnichannel Digital Marketing",
      "Technical SEO & Content Strategy",
      "Social Media Campaign Management"
    ],
    footerOffersTitle: "Key Offerings",
    footerOffersLinks: [
      "Premier Web Design Agency",
      "Corporate Portal Design",
      "Full-Funnel E-Commerce",
      "Network Marketing Scripts"
    ],
    footerCopyright: "All Rights Reserved © 2026 SERV5 Digital Business Group.",
    navHome: "Home",
    navServices: "Services",
    navProducts: "Products",
    navProcess: "How We Work",
    navPortfolio: "Portfolio",
    navBlog: "Blog",
    navContact: "Contact"
  }
};
