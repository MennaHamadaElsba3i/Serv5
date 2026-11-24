import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Serv5GetInTouch from '../sections/Serv5GetInTouch';
import Serv5AppUniverse from './Serv5AppUniverse';
import {
  ArrowUpRight,
  Check,
  Code2,
  Gauge,
  MonitorSmartphone,
  MousePointerClick,
  Palette,
  PenTool,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Activity,
  Users,
  ShoppingBag,
  CreditCard,
  Truck,
  PackageCheck,
  Smartphone,
  Layers,
  FileText,
  Link2,
  PanelTop,
  LockKeyhole,
  RefreshCw
} from 'lucide-react';

const copy = {
  ar: {
    hero: {
      eyebrow: 'خدمات سيرف فايف',
      titleTop: 'تصميم مواقع ويب احترافية',
      titleAccent: 'تعكس قوة علامتك التجارية',
      text: 'في سيرف فايف بنبني مواقع سريعة وواضحة، من أول فكرة التصميم لحد الإطلاق. نهتم بالشكل والتفاصيل اللي تخلي الزائر يفهمك ويثق فيك ويكمل للطلب.',
      primary: 'ابدأ مشروعك',
      secondary: 'اعرف أكتر',
      chipOne: 'تصميم يعبّر عن هويتك',
      chipTwo: 'سرعة وتجاوب على كل شاشة'
    },
    standards: {
      eyebrow: 'معاييرنا',
      title: 'معايير تصميم الويب الممتازة لدينا',
      text: 'كل موقع نصممه بيخضع لمعايير واضحة في الشكل والوظيفة، عشان النتيجة تكون موقع شغال بيكسب ثقة ونتائج.',
      items: [
        {
          icon: 'Palette',
          title: 'تصميم يبدأ من هوية علامتك',
          text: 'بنفهم نشاطك وجمهورك قبل أول بكسل، عشان الموقع يعبّر عن شخصية البراند بدقة وبدون قوالب متكررة.'
        },
        {
          icon: 'Gauge',
          title: 'بناء سريع ومهيّأ لمحركات البحث',
          text: 'كود نظيف وصور مضغوطة وسرعة تحميل عالية، مع تهيئة كاملة تساعد موقعك يظهر في نتائج البحث.'
        },
        {
          icon: 'MousePointerClick',
          title: 'تجربة مستخدم مدروسة وخطوات أقل',
          text: 'كل صفحة مبنية على رحلة العميل، من أول زيارة لحد إرسال الطلب، من غير لبس ولا خطوات زيادة.'
        },
        {
          icon: 'MonitorSmartphone',
          title: 'تجاوب كامل مع كل الشاشات',
          text: 'بنختبر الموقع على أكثر من مقاس، من الموبايل للتابلت للشاشات الكبيرة، وكل مرة بنفس الجودة.'
        },
        {
          icon: 'Sparkles',
          title: 'حركة مدروسة تخدم التجربة',
          text: 'أنيميشن وانتقالات ناعمة تخلي التصفح ممتع وسهل، من غير ما تشتت الزائر عن اللي بيدور عليه.'
        },
        {
          icon: 'ShieldCheck',
          title: 'حماية وصيانة بعد الإطلاق',
          text: 'تحديثات ونسخ احتياطي ومتابعة مستمرة بعد التسليم، عشان موقعك يفضل مستقر وآمن.'
        }
      ]
    },
    work: {
      eyebrow: 'أعمالنا',
      title: 'روائع أعمالنا الرقمية',
      text: 'بعض أعمالنا في سيرف فايف، مشاريع مختلفة في المجال والهدف، لكن كلها بتجمع بين التصميم الواضح والتجربة السلسة.',
      more: 'شاهد المزيد من أعمالنا',
      items: [
        { image: '/images/web-design-reference-1.png', title: 'موقع شركة الأدلاء', tag: 'مؤسسي' },
        { image: '/images/web-design-reference-2.png', title: 'موقع بيت الأعمال', tag: 'بوابة أعمال' },
        { image: '/images/web-design-reference-1.png', title: 'موقع شركة الأدلاء', tag: 'مؤسسي' },
        { image: '/images/web-design-reference-2.png', title: 'موقع بيت الأعمال', tag: 'بوابة أعمال' },
        { image: '/images/web-design-reference-1.png', title: 'موقع شركة الأدلاء', tag: 'مؤسسي' },
        { image: '/images/web-design-reference-2.png', title: 'موقع بيت الأعمال', tag: 'بوابة أعمال' }
      ]
    },
    ux: {
      eyebrow: 'تجربة المستخدم',
      title: 'تجربة المستخدم هي أساس نجاح أي موقع',
      text: 'الزائر بياخد قرار في ثواني: يكمل معاك أو يقفل الصفحة. عشان كده بنبني التجربة على وضوح الهدف وسهولة الوصول، مش على شكل حلو بس.',
      points: [
        'تصميم متوافق مع هدف الموقع وجمهوره',
        'بنية معلومات سهلة وواضحة من أول نظرة',
        'سرعة عالية لتقليل الخروج من الصفحة',
        'مسار واضح بيوصل الزائر للتواصل أو الشراء'
      ],
      panelTitle: 'مسار الزائر',
      panelNote: 'من أول نظرة لحد الطلب',
      stages: [
        { label: 'وضوح', value: 92, text: 'يفهم هو وصل فين' },
        { label: 'سهولة', value: 86, text: 'يلاقي اللي بيدور عليه' },
        { label: 'ثقة', value: 78, text: 'يطمن ويكمل للطلب' }
      ]
    },
    process: {
      eyebrow: 'طريقة عملنا',
      title: 'لدينا خطة عمل واضحة من البداية إلى النهاية',
      text: 'بنمشي على مراحل محددة، وانت عارف في كل مرحلة إحنا فين والجاي إيه.',
      steps: [
        {
          icon: 'Search',
          title: 'نفهم فكرتك ونحللها',
          text: 'بنسمع منك، وندرس نشاطك وجمهورك ومنافسينك، ونحدد هدف الموقع وإيه اللي هيتحسب نجاح.'
        },
        {
          icon: 'PenTool',
          title: 'نصمم ونرسم الهيكل',
          text: 'بنبني هيكل الصفحات وتجربة الاستخدام، وبنعرض تصميم مبدئي توافق عليه قبل التنفيذ.'
        },
        {
          icon: 'Code2',
          title: 'نبرمج ونطور',
          text: 'تنفيذ سريع بكود نظيف ولوحة تحكم سهلة، مع تهيئة كاملة للسيو والأجهزة المختلفة.'
        },
        {
          icon: 'Rocket',
          title: 'نختبر ونطلق ونطوّر',
          text: 'اختبار على كل المتصفحات والأجهزة، تحسين السرعة، وبعدها إطلاق ومتابعة مستمرة.'
        }
      ]
    },
    why: {
      eyebrow: 'ليه سيرف فايف',
      title: 'لماذا تصميم موقعك الإلكتروني معنا؟',
      text: 'بنشتغل معاك من الفكرة لحد النمو، ومش بنسيبك بعد التسليم.',
      points: [
        { title: 'هوية بصرية متكاملة', text: 'ألوان وخطوط وعناصر متناسقة مع براندك في كل صفحة.' },
        { title: 'شفافية في السعر والوقت', text: 'نطاق عمل واضح وجدول زمني تعرفه من أول يوم.' },
        { title: 'دعم فني مستمر', text: 'فريق متاح بعد الإطلاق للصيانة والتحديثات.' },
        { title: 'خبرة تزيد عن 10 سنوات', text: 'مشاريع في مجالات مختلفة وفرق تصميم وتطوير مخصصة.' }
      ],
      cta: 'اطلب تصميم موقعك'
    },
    form: {
      eyebrow: 'خطوة واحدة',
      title: 'عايز تصميم موقع إلكتروني مميز؟',
      text: 'ابعت بياناتك وفريقنا هيتواصل معاك، ونوضح لك خطوات الشغل والتكلفة والمدة بشكل مباشر.',
      panelTitle: 'بيانات العميل',
      name: 'الاسم بالكامل',
      namePlaceholder: 'اكتب اسمك هنا',
      phone: 'رقم الهاتف',
      phonePlaceholder: '01xxxxxxxxx',
      email: 'البريد الإلكتروني',
      emailPlaceholder: 'example@domain.com',
      service: 'نوع الخدمة',
      message: 'تفاصيل المشروع',
      messagePlaceholder: 'اكتب فكرتك في سطر أو اتنين…',
      services: ['تصميم موقع جديد', 'إعادة تصميم موقع حالي', 'متجر إلكتروني', 'موقع شركة أو مؤسسة', 'متجر متعدد اللغات'],
      submit: 'اطلب الخدمة',
      note: 'بالضغط على اطلب الخدمة هتفتح محادثة واتساب ببياناتك جاهزة للإرسال.',
      sentTitle: 'بياناتك جاهزة للإرسال',
      sentText: 'افتتحنا لك محادثة واتساب ببياناتك. لو المتصفح منعها، اضغط على الرابط ده.',
      sentLink: 'افتح محادثة واتساب',
      direct: 'أو تواصل معنا مباشرة'
    }
  },
  en: {
    hero: {
      eyebrow: 'SERV5 SERVICES',
      titleTop: 'Web design that',
      titleAccent: 'reflects your brand strength',
      text: 'At SERV5 we build fast, clear websites from first concept to launch. We care about the look and the details that help visitors understand you, trust you and take action.',
      primary: 'Start your project',
      secondary: 'Learn more',
      chipOne: 'Design built around your identity',
      chipTwo: 'Fast and responsive on every screen'
    },
    standards: {
      eyebrow: 'OUR STANDARDS',
      title: 'The standards behind every website we design',
      text: 'Every website we ship follows clear rules for both form and function, so the result is a site that earns trust and results.',
      items: [
        {
          icon: 'Palette',
          title: 'Design that starts with your brand',
          text: 'We understand your business and audience before the first pixel, so the site reflects your brand instead of a recycled template.'
        },
        {
          icon: 'Gauge',
          title: 'Fast builds, search-ready',
          text: 'Clean code, compressed images and quick load times, with the technical groundwork search engines need.'
        },
        {
          icon: 'MousePointerClick',
          title: 'Researched UX, fewer steps',
          text: 'Every page follows the visitor journey from first visit to submitted request, with nothing in the way.'
        },
        {
          icon: 'MonitorSmartphone',
          title: 'Fully responsive on every screen',
          text: 'We test across sizes, from phones and tablets to large displays, keeping the same quality everywhere.'
        },
        {
          icon: 'Sparkles',
          title: 'Motion with a purpose',
          text: 'Smooth transitions make browsing enjoyable without distracting visitors from what they came for.'
        },
        {
          icon: 'ShieldCheck',
          title: 'Security and care after launch',
          text: 'Updates, backups and ongoing monitoring after handover, so your site stays stable and secure.'
        }
      ]
    },
    work: {
      eyebrow: 'OUR WORK',
      title: 'Digital work we are proud of',
      text: 'A selection of SERV5 projects across different industries and goals, all built on clear design and a smooth experience.',
      more: 'See more of our work',
      items: [
        { image: '/images/web-design-reference-1.png', title: 'Adilla Company website', tag: 'Corporate' },
        { image: '/images/web-design-reference-2.png', title: 'House of Business website', tag: 'Business portal' },
        { image: '/images/web-design-reference-1.png', title: 'Adilla Company website', tag: 'Corporate' },
        { image: '/images/web-design-reference-2.png', title: 'House of Business website', tag: 'Business portal' },
        { image: '/images/web-design-reference-1.png', title: 'Adilla Company website', tag: 'Corporate' },
        { image: '/images/web-design-reference-2.png', title: 'House of Business website', tag: 'Business portal' }
      ]
    },
    ux: {
      eyebrow: 'USER EXPERIENCE',
      title: 'User experience is what makes a website work',
      text: 'Visitors decide in seconds whether to stay or leave. That is why we build around clarity and easy access, not just a good-looking layout.',
      points: [
        'Design aligned with the site goal and its audience',
        'A clear information structure at first glance',
        'High speed to reduce drop-off',
        'A clear path to contact or purchase'
      ],
      panelTitle: 'The visitor path',
      panelNote: 'From first glance to request',
      stages: [
        { label: 'Clarity', value: 92, text: 'Knows where they are' },
        { label: 'Ease', value: 86, text: 'Finds what they need' },
        { label: 'Trust', value: 78, text: 'Feels safe to continue' }
      ]
    },
    process: {
      eyebrow: 'HOW WE WORK',
      title: 'A clear plan from start to launch',
      text: 'We follow defined stages, and you always know where the project stands and what comes next.',
      steps: [
        {
          icon: 'Search',
          title: 'Understand and analyse',
          text: 'We listen, study your business, audience and competitors, then define the goal and how success is measured.'
        },
        {
          icon: 'PenTool',
          title: 'Design and structure',
          text: 'We map the pages and the experience, then present a concept you approve before development.'
        },
        {
          icon: 'Code2',
          title: 'Build and develop',
          text: 'Clean, fast implementation with an easy dashboard, plus full SEO and device readiness.'
        },
        {
          icon: 'Rocket',
          title: 'Test, launch, improve',
          text: 'Testing across browsers and devices, speed tuning, then launch with ongoing follow-up.'
        }
      ]
    },
    why: {
      eyebrow: 'WHY SERV5',
      title: 'Why build your website with us?',
      text: 'We work with you from idea to growth, and we stay after handover.',
      points: [
        { title: 'A complete visual identity', text: 'Colours, type and elements that match your brand on every page.' },
        { title: 'Clear pricing and timing', text: 'A defined scope and a schedule you know from day one.' },
        { title: 'Ongoing technical support', text: 'A team available after launch for maintenance and updates.' },
        { title: 'Over 10 years of experience', text: 'Projects across industries with dedicated design and build teams.' }
      ],
      cta: 'Request your website'
    },
    form: {
      eyebrow: 'ONE STEP',
      title: 'Ready for a website that stands out?',
      text: 'Send your details and our team will get in touch with the steps, cost and timeline.',
      panelTitle: 'Your details',
      name: 'Full name',
      namePlaceholder: 'Your name',
      phone: 'Phone number',
      phonePlaceholder: '01xxxxxxxxx',
      email: 'Email',
      emailPlaceholder: 'example@domain.com',
      service: 'Service',
      message: 'Project details',
      messagePlaceholder: 'Tell us about your idea in a line or two…',
      services: ['New website design', 'Redesign of an existing site', 'Online store', 'Company or corporate site', 'Multilingual store'],
      submit: 'Request the service',
      note: 'Submitting opens WhatsApp with your details ready to send.',
      sentTitle: 'Your details are ready',
      sentText: 'We opened a WhatsApp chat with your details. If the browser blocked it, use the link below.',
      sentLink: 'Open WhatsApp chat',
      direct: 'Or reach us directly'
    }
  }
};

const uiUxCopy = {
  ar: {
    hero: {
      eyebrow: 'خدمات سيرف فايف',
      titleTop: 'تصميم واجهات وتجربة مستخدم',
      titleAccent: '(UI/UX) بإبداع وتميز',
      text: 'نقدم لك تصاميم مبتكرة وجذابة تضمن تفاعل عملائك وبقاءهم لفترة أطول. نحول أفكارك المعقدة إلى واجهات رقمية سلسة ومذهلة وسهلة الاستخدام.',
      primary: 'ابدأ مشروعك',
      secondary: 'اعرف المزيد',
      chipOne: 'تجربة تتمحور حول المستخدم',
      chipTwo: 'واجهات سهلة على كل شاشة'
    },
    standards: {
      eyebrow: 'معاييرنا',
      title: 'معايير تصميم تجربة المستخدم المتميزة لدينا',
      text: 'كل تفصيلة في تصميمنا مبنية على أسس علمية وفنية لضمان أفضل تجربة رقمية.',
      items: [
        { icon: 'Users', title: 'تصميم يركز على المستخدم', text: 'ندرس سلوك المستخدمين لضمان رحلة تصفح بديهية ومريحة.' },
        { icon: 'MonitorSmartphone', title: 'توافق كامل مع الشاشات', text: 'واجهات تعمل بمرونة تامة على الهواتف والأجهزة اللوحية والحواسيب.' },
        { icon: 'Gauge', title: 'سرعة أداء فائقة', text: 'عناصر واجهة خفيفة تساهم في تسريع التحميل وتحسين التفاعل.' },
        { icon: 'ShieldCheck', title: 'سهولة الوصول', text: 'نراعي معايير الوصول ليتمكن الجميع من تصفح الموقع بسهولة.' },
        { icon: 'Palette', title: 'هوية بصرية مميزة', text: 'ألوان وخطوط واتجاه بصري يعكس شخصية علامتك التجارية.' },
        { icon: 'Check', title: 'تناسق العناصر', text: 'نحافظ على نمط موحد في الصفحات ليبقى الاستخدام واضحاً.' },
        { icon: 'Activity', title: 'تحسين معدلات التحويل', text: 'نوزع الأزرار والدعوات لاتخاذ إجراء في أماكنها المناسبة.' },
        { icon: 'Search', title: 'هيكلة معلومات واضحة', text: 'ننظم المحتوى بشكل منطقي ليسهل العثور على المطلوب.' }
      ]
    },
    work: {
      eyebrow: 'أعمالنا',
      title: 'روائع أعمالنا البصرية',
      text: 'بعض أعمالنا في سيرف فايف، تجارب رقمية مصممة لتكون واضحة وممتعة وسهلة الاستخدام.',
      more: 'شاهد المزيد من أعمالنا'
    },
    ux: {
      eyebrow: 'تصميم يبدأ من المستخدم',
      title: 'تجربة الهاتف المحمول أولاً دائماً',
      text: 'أغلب المستخدمين يتصفحون من الهاتف، لذلك نصمم التجربة للشاشات الصغيرة أولاً ثم نوسعها لباقي الأجهزة.',
      points: [
        'تصميم مرن يتكيف مع حجم الشاشة',
        'أزرار وقوائم محسنة للمس',
        'أداء سريع ومثالي لشبكات الجوال',
        'محتوى واضح وسهل التصفح'
      ],
      panelTitle: 'تجربة متكاملة',
      panelNote: 'من أول تفاعل حتى إتمام المهمة',
      stages: [
        { label: 'سهولة الاستخدام', value: 96, text: 'خطوات واضحة ومباشرة' },
        { label: 'التوافق', value: 92, text: 'تجربة ثابتة على كل شاشة' },
        { label: 'التحويل', value: 88, text: 'مسار واضح نحو الإجراء' }
      ]
    },
    process: {
      eyebrow: 'كيف نصمم',
      title: 'رحلة تصميم واضحة من البحث إلى الإطلاق',
      text: 'نختبر الفكرة ونبنيها خطوة بخطوة، لتعرف ما الذي يحدث في كل مرحلة.',
      steps: [
        { icon: 'Search', title: 'البحث والتحليل', text: 'نفهم أهداف المشروع وسلوك المستخدمين واحتياجاتهم.' },
        { icon: 'PenTool', title: 'تخطيط الهيكل', text: 'نرسم خريطة الصفحات وتدفق الاستخدام قبل التصميم.' },
        { icon: 'Palette', title: 'تصميم الواجهة', text: 'نصمم الشاشات ونبني نظاماً بصرياً متناسقاً.' },
        { icon: 'MousePointerClick', title: 'النموذج التفاعلي', text: 'نختبر النموذج ونجمع الملاحظات قبل بدء التطوير.' },
        { icon: 'Rocket', title: 'التسليم والتنفيذ', text: 'نسلم الملفات والمواصفات جاهزة لفريق التطوير.' }
      ]
    },
    why: {
      eyebrow: 'لماذا سيرف فايف',
      title: 'نصمم تجربة يحب عملاؤك استخدامها',
      text: 'نجمع بين فهم المستخدم والهوية البصرية واحتياجات العمل لنصنع تجربة مفيدة وواضحة.',
      points: [
        { title: 'قرارات مبنية على البحث', text: 'نصمم بناءً على احتياجات المستخدمين وأهداف المشروع.' },
        { title: 'اتساق بصري ووظيفي', text: 'نظام واضح يحافظ على جودة التجربة في كل شاشة.' },
        { title: 'نماذج قابلة للاختبار', text: 'نراجع التفاعل مبكراً قبل الانتقال إلى التطوير.' },
        { title: 'تركيز على النتائج', text: 'مسارات أسهل تساعد المستخدم على الوصول لهدفه.' }
      ],
      cta: 'ابدأ تصميم تجربتك'
    }
  },
  en: {
    hero: {
      eyebrow: 'SERV5 SERVICES',
      titleTop: 'UI/UX design',
      titleAccent: 'made clear, useful and memorable',
      text: 'We turn complex ideas into engaging digital experiences that help customers stay longer, find what they need and move forward with confidence.',
      primary: 'Start your project',
      secondary: 'Learn more',
      chipOne: 'Designed around real users',
      chipTwo: 'Clear on every screen'
    },
    standards: {
      eyebrow: 'OUR STANDARDS',
      title: 'The principles behind a better user experience',
      text: 'Every detail is shaped by practical research and design principles to make digital journeys clearer.',
      items: [
        { icon: 'Users', title: 'User-centred design', text: 'We study user needs to make each journey intuitive and comfortable.' },
        { icon: 'MonitorSmartphone', title: 'Responsive across screens', text: 'Interfaces adapt to phones, tablets and desktop devices.' },
        { icon: 'Gauge', title: 'Fast performance', text: 'Lightweight interfaces help pages load quickly and feel responsive.' },
        { icon: 'ShieldCheck', title: 'Accessible by design', text: 'We follow accessibility practices so more people can use your site.' },
        { icon: 'Palette', title: 'Distinct visual identity', text: 'Colour, type and visual direction reflect your brand.' },
        { icon: 'Check', title: 'Consistent components', text: 'A shared visual system keeps every screen clear and familiar.' },
        { icon: 'Activity', title: 'Conversion optimisation', text: 'Calls to action are placed where users need them.' },
        { icon: 'Search', title: 'Clear information structure', text: 'Content is organised so people can find what they need.' }
      ]
    },
    work: {
      eyebrow: 'OUR WORK',
      title: 'A selection of our digital experiences',
      text: 'A selection of SERV5 projects designed to feel clear, useful and engaging.',
      more: 'See more of our work'
    },
    ux: {
      eyebrow: 'DESIGNED AROUND PEOPLE',
      title: 'Mobile-first, every time',
      text: 'Most visitors arrive on a phone, so we design for small screens first and then extend the experience to larger devices.',
      points: [
        'Layouts adapt to every screen size',
        'Controls are comfortable to tap',
        'Fast performance on mobile networks',
        'Content stays clear and easy to scan'
      ],
      panelTitle: 'A connected experience',
      panelNote: 'From the first interaction to completion',
      stages: [
        { label: 'Usability', value: 96, text: 'Clear, direct steps' },
        { label: 'Consistency', value: 92, text: 'A reliable experience on each screen' },
        { label: 'Conversion', value: 88, text: 'A clear path to action' }
      ]
    },
    process: {
      eyebrow: 'OUR DESIGN PROCESS',
      title: 'A clear path from research to handoff',
      text: 'We validate the idea and shape it step by step, so you know what happens at every stage.',
      steps: [
        { icon: 'Search', title: 'Research and analysis', text: 'We learn the project goals, user behaviour and audience needs.' },
        { icon: 'PenTool', title: 'Structure and wireframes', text: 'We map screens and user flows before visual design begins.' },
        { icon: 'Palette', title: 'Interface design', text: 'We design the screens and build a consistent visual system.' },
        { icon: 'MousePointerClick', title: 'Interactive prototype', text: 'We test the prototype and gather feedback before development.' },
        { icon: 'Rocket', title: 'Delivery and handoff', text: 'We provide the files and specifications ready for development.' }
      ]
    },
    why: {
      eyebrow: 'WHY SERV5',
      title: 'We design experiences people want to use',
      text: 'We bring user needs, visual identity and business goals together in one clear experience.',
      points: [
        { title: 'Research-led decisions', text: 'Design choices follow real user needs and project goals.' },
        { title: 'Visual and functional consistency', text: 'A clear system keeps quality steady across screens.' },
        { title: 'Prototypes you can test', text: 'We review interactions early, before development starts.' },
        { title: 'Focused on outcomes', text: 'Simple paths help users reach the action they came for.' }
      ],
      cta: 'Start your UX project'
    }
  }
};

const ecommerceCopy = {
  ar: {
    hero: {
      eyebrow: '',
      titleTop: 'تصميم وبرمجة متاجر إلكترونية',
      titleAccent: 'تحقق مبيعات أكبر',
      text: 'أنشئ متجرك الإلكتروني باحترافية مع حلول متكاملة تجمع بين التصميم العصري، والأداء السريع، وتجربة المستخدم المميزة. في Serv5 نساعدك على إطلاق متجر إلكتروني يحقق تجربة تسوق سلسة ويزيد من معدلات التحويل والمبيعات.',
      primary: 'ابدأ مشروعك',
      secondary: 'اعرف المزيد',
      chipOne: '',
      chipTwo: ''
    },
    standards: {
      eyebrow: '',
      title: 'أبرز ميزات المتجر الإلكتروني لدينا',
      text: 'كل ما تحتاجه لعرض منتجاتك، إدارة مخزونك، بيع السلع والتسويق لمتجرك بنجاح.',
      items: [
        { icon: 'PackageCheck', title: 'إدارة متكاملة للمنتجات', text: 'أضف عددًا غير محدود من المنتجات، مع إمكانية تنظيمها في تصنيفات، وإدارة الأسعار، والخصومات، والمخزون بسهولة من لوحة التحكم.' },
        { icon: 'CreditCard', title: 'بوابات دفع إلكترونية متعددة', text: 'دعم الربط مع أشهر بوابات الدفع المحلية والعالمية لتوفير تجربة دفع آمنة وسريعة تناسب جميع العملاء.' },
        { icon: 'Truck', title: 'تكامل مع شركات الشحن', text: 'ربط المتجر مع شركات الشحن لتتبع الطلبات، وحساب تكاليف الشحن تلقائيًا، وتحسين تجربة التوصيل.' },
        { icon: 'Layers', title: 'إدارة الطلبات والمخزون', text: 'متابعة الطلبات لحظة بلحظة، وإدارة المخزون، واستقبال التنبيهات عند انخفاض الكميات لضمان استمرارية البيع.' },
        { icon: 'Activity', title: 'تقارير وإحصائيات دقيقة', text: 'لوحة تحكم تعرض تقارير المبيعات، والطلبات، وأداء المنتجات، وسلوك العملاء لمساعدتك في اتخاذ قرارات مبنية على البيانات.' },
        { icon: 'Users', title: 'دعم تعدد التجار والبائعين', text: 'السماح للتجار بالاشتراك وعرض منتجاتهم وإدارة طلباتهم بشكل مستقل بالكامل.' },
        { icon: 'Smartphone', title: 'متجر متوافق مع جميع الأجهزة', text: 'يعمل المتجر بكفاءة على الهواتف الذكية والأجهزة اللوحية وأجهزة الكمبيوتر، لتقديم تجربة تسوق سلسة لجميع العملاء.' },
        { icon: 'Palette', title: 'تصميم احترافي يعكس هوية علامتك', text: 'واجهات عصرية ومتجاوبة تعكس هوية نشاطك التجاري وتوفر تجربة تسوق مريحة على جميع الأجهزة.' }
      ]
    },
    work: {
      eyebrow: '',
      title: '',
      text: '',
      more: ''
    },
    ux: {
      eyebrow: '',
      title: 'تجربة شراء سهلة تزيد من معدلات المبيعات',
      text: 'نجاح أي متجر إلكتروني يعتمد على سهولة رحلة العميل. لذلك نحرص على تصميم تجربة شراء بسيطة وسريعة تقلل خطوات الدفع، وتزيد من ثقة العملاء، وتشجعهم على إتمام الطلبات.',
      points: [
        'خطوات شراء بسيطة وسريعة.',
        'سرعة تحميل عالية على جميع الأجهزة.',
        'تجربة متوافقة مع الهواتف الذكية.',
        'صفحات منتجات مصممة لتحفيز قرار الشراء.'
      ],
      panelTitle: '',
      panelNote: '',
      stages: []
    },
    process: {
      eyebrow: 'كيف نعمل؟',
      title: 'لدينا خطة عمل واضحة من البداية إلى النهاية',
      text: '',
      callout: 'نحن نصنع متاجر مخصصة ومبنية هندسياً لتعظيم المبيعات وتحقيق أعلى عائد استثماري.',
      steps: [
        { icon: 'Search', title: 'المرحلة الأولى: دراسة النشاط والمتطلبات', text: 'نحلل طبيعة نشاطك، ونحدد الفئات المستهدفة، ونضع تصورًا واضحًا لهيكل المتجر والمنتجات.' },
        { icon: 'Palette', title: 'المرحلة الثانية: تصميم واجهات المتجر', text: 'نصمم واجهات احترافية تركز على تجربة المستخدم وتعكس هوية علامتك التجارية.' },
        { icon: 'Code2', title: 'المرحلة الثالثة: البرمجة والتكامل', text: 'نطور المتجر مع ربط بوابات الدفع، وشركات الشحن، وأنظمة إدارة الطلبات والمخزون.' },
        { icon: 'Rocket', title: 'المرحلة الرابعة: الاختبار والإطلاق', text: 'نجري اختبارات شاملة للأداء والأمان قبل إطلاق المتجر، مع تقديم الدعم الفني بعد التشغيل.' }
      ]
    },
    why: {
      eyebrow: '',
      title: 'لماذا تختار سيرف فايف لبناء متجرك؟',
      text: '',
      points: [
        { title: 'تصميم مخصص لهوية علامتك', text: 'كل متجر يتم تصميمه بما يتناسب مع طبيعة نشاطك ويعكس هوية علامتك التجارية بشكل احترافي.' },
        { title: 'حلول قابلة للتطوير', text: 'نبني متجرك بطريقة تسمح بإضافة منتجات ومزايا جديدة بسهولة مع نمو أعمالك.' },
        { title: 'أدوات تسويقية متكاملة مدمجة', text: 'ربط مباشر بأكواد التتبع الإعلانية (سناب، فيسبوك) وتحسين سيو تلقائي.' },
        { title: 'دعم فني مستمر', text: 'نقدم خدمات الصيانة، والتحديثات، والدعم الفني لضمان استمرار عمل متجرك بكفاءة.' }
      ],
      cta: ''
    }
  },
  en: {
    hero: {
      eyebrow: '',
      titleTop: 'Designing and programming e-commerce stores',
      titleAccent: 'to achieve higher sales',
      text: 'Create your online store professionally with integrated solutions that combine modern design, fast performance, and a superior user experience. At Serv5, we help you launch an online store that delivers a seamless shopping experience and increases conversion rates and sales.',
      primary: 'Start Project',
      secondary: 'Know more',
      chipOne: '',
      chipTwo: ''
    },
    standards: {
      eyebrow: '',
      title: 'Key features of our online store',
      text: 'Everything you need to showcase your products, manage your inventory, sell goods and market your store successfully.',
      items: [
        { icon: 'PackageCheck', title: 'Integrated product management', text: 'Add an unlimited number of products, with the ability to organize them into categories, and easily manage prices, discounts, and inventory from the control panel.' },
        { icon: 'CreditCard', title: 'Multiple electronic payment gateways', text: 'Supports integration with the most popular local and global payment gateways to provide a secure and fast payment experience suitable for all customers.' },
        { icon: 'Truck', title: 'Integration with shipping companies', text: 'Linking the store with shipping companies to track orders, automatically calculate shipping costs, and improve the delivery experience.' },
        { icon: 'Layers', title: 'Order and inventory management', text: 'Tracking orders moment by moment, managing inventory, and receiving alerts when quantities decrease to ensure continued sales.' },
        { icon: 'Activity', title: 'Accurate reports and statistics', text: 'A dashboard that displays reports on sales, orders, product performance, and customer behavior to help you make data-driven decisions.' },
        { icon: 'Users', title: 'Supporting multiple traders and vendors', text: 'Allowing merchants to sign up, display their products, and manage their orders completely independently.' },
        { icon: 'Smartphone', title: 'A store compatible with all devices', text: 'The store works efficiently on smartphones, tablets and computers, to provide a seamless shopping experience for all customers.' },
        { icon: 'Palette', title: 'A professional design that reflects your brand identity', text: 'Modern and responsive interfaces reflect your business identity and provide a convenient shopping experience on all devices.' }
      ]
    },
    work: {
      eyebrow: '',
      title: '',
      text: '',
      more: ''
    },
    ux: {
      eyebrow: '',
      title: 'An easy buying experience increases sales rates.',
      text: 'The success of any online store depends on the ease of the customer journey. Therefore, we strive to design a simple and fast shopping experience that minimizes checkout steps, increases customer trust, and encourages them to complete orders.',
      points: [
        'Simple and quick purchasing steps.',
        'High download speed on all devices.',
        'An experience compatible with smartphones.',
        'Product pages designed to stimulate the purchase decision.'
      ],
      panelTitle: '',
      panelNote: '',
      stages: []
    },
    process: {
      eyebrow: 'HOW WE WORK?',
      title: 'We have a clear business plan from start to finish',
      text: '',
      callout: 'WE CREATE CUSTOM-BUILT, ENGINEERED STORES TO MAXIMIZE SALES AND ACHIEVE THE HIGHEST RETURN ON INVESTMENT.',
      steps: [
        { icon: 'Search', title: 'Step 1: Activity and Requirements Study', text: 'We analyze the nature of your business, identify your target groups, and develop a clear vision for the store structure and products.' },
        { icon: 'Palette', title: 'Step 2: Storefront design', text: 'We design professional interfaces that focus on user experience and reflect your brand identity.' },
        { icon: 'Code2', title: 'Step 3: Programming and Integration', text: 'We develop the store with the integration of payment gateways, shipping companies, and order and inventory management systems.' },
        { icon: 'Rocket', title: 'Step 4: Testing and launching', text: 'We conduct thorough performance and security tests before launching the store, and provide technical support after launch.' }
      ]
    },
    why: {
      eyebrow: '',
      title: 'Why choose Serv5 to build your store?',
      text: '',
      points: [
        { title: 'Custom design for your brand identity', text: 'Each store is designed to suit the nature of your business and professionally reflect your brand identity.' },
        { title: 'Scalable solutions', text: 'We build your store in a way that allows you to easily add new products and features as your business grows.' },
        { title: 'Integrated marketing tools', text: 'Direct linking to advertising tracking codes (Snapchat, Facebook) and automatic SEO optimization.' },
        { title: 'Ongoing technical support', text: 'We provide maintenance, updates, and technical support services to ensure your store continues to operate efficiently.' }
      ],
      cta: ''
    }
  }
};

const seoCopy = {
  ar: {
    hero: {
      eyebrow: '',
      titleTop: 'خدمات تحسين محركات البحث',
      titleAccent: 'التي تحول الزيارات إلى عملاء',
      text: 'في Serv5 لا ننظر إلى SEO كوسيلة لتحسين ترتيب موقعك فقط، بل كاستراتيجية متكاملة تساعدك على الوصول إلى العملاء المناسبين في الوقت المناسب. نعمل على تحسين ظهور موقعك في نتائج البحث، وزيادة الزيارات العضوية، وتحويلها إلى فرص حقيقية لنمو أعمالك.',
      primary: 'ابدأ مشروعك',
      secondary: 'اعرف المزيد',
      chipOne: '',
      chipTwo: ''
    },
    standards: {
      eyebrow: '',
      preamble: 'نعتمد على خطة عمل متكاملة تشمل جميع عناصر تحسين محركات البحث، بدايةً من التحليل وحتى المتابعة المستمرة، لضمان تحقيق نتائج طويلة المدى.',
      title: 'منظومة SEO متكاملة لتحقيق نمو مستدام',
      text: '',
      items: [
        { icon: 'Search', title: 'تحليل الموقع والمنافسين', text: 'نحلل أداء موقعك، ونحدد المشكلات التقنية، ونقارن موقعك بالمنافسين لاكتشاف فرص النمو.' },
        { icon: 'Sparkles', title: 'استراتيجية الكلمات المفتاحية', text: 'نختار الكلمات التي يبحث عنها عملاؤك بالفعل، مع التركيز على فرص المنافسة وتحقيق أعلى قيمة تجارية.' },
        { icon: 'PanelTop', title: 'تحسين السيو الداخلي', text: 'تحسين بنية الصفحات، والعناوين، والوصف التعريفي، والروابط الداخلية، والمحتوى بما يتوافق مع معايير Google.' },
        { icon: 'Gauge', title: 'السيو التقني', text: 'تحسين سرعة الموقع، وتجربة المستخدم، والأرشفة، والبيانات المنظمة لضمان أفضل أداء في نتائج البحث.' },
        { icon: 'FileText', title: 'تطوير المحتوى', text: 'إنشاء وتحسين محتوى عالي الجودة يجيب عن استفسارات العملاء ويغطي جميع مراحل رحلة الشراء.' },
        { icon: 'Link2', title: 'بناء الروابط الخلفية', text: 'تعزيز سلطة الموقع من خلال استراتيجية Link Building تعتمد على روابط عالية الجودة وذات صلة.' }
      ]
    },
    work: { eyebrow: '', title: '', text: '', more: '' },
    ux: {
      eyebrow: '',
      title: 'البيانات هي أساس كل قرار نتخذه',
      text: 'كل خطوة نقوم بها تستند إلى تحليل دقيق للبيانات. نتابع أداء الموقع والكلمات المفتاحية وسلوك المستخدمين باستمرار لضمان تطوير الاستراتيجية وتحقيق أفضل النتائج.',
      points: [
        'متابعة أداء الكلمات المفتاحية.',
        'تحليل المنافسين بشكل مستمر.',
        'قياس سلوك المستخدم داخل الموقع.',
        'تحسين الأداء وفق تحديثات Google.'
      ],
      panelTitle: '',
      panelNote: '',
      stages: []
    },
    process: {
      eyebrow: 'كيف نعمل؟',
      title: 'لدينا خطة عمل واضحة من البداية إلى النهاية',
      text: '',
      callout: 'نحن نركز على تحقيق نتائج حقيقية وملموسة وزيادة المبيعات وليس مجرد أرقام مشاهدات وهمية.',
      steps: [
        { icon: 'Search', title: 'المرحلة الأولى: تحليل الموقع', text: 'نبدأ بفهم نشاطك التجاري، وتحليل الموقع والمنافسين، وتحديد فرص النمو.' },
        { icon: 'PenTool', title: 'المرحلة الثانية: إعداد الاستراتيجية', text: 'نضع خطة SEO متكاملة تتضمن التحسينات التقنية، وخطة المحتوى، والكلمات المفتاحية.' },
        { icon: 'Code2', title: 'المرحلة الثالثة: التنفيذ', text: 'تنفيذ أعمال التحسين الداخلي، والسيو التقني، وتحسين المحتوى، وبناء الروابط.' },
        { icon: 'Activity', title: 'المرحلة الرابعة: المتابعة والتطوير', text: 'قياس النتائج، وإعداد التقارير، وتحسين الاستراتيجية بشكل مستمر.' }
      ]
    },
    why: {
      eyebrow: '',
      title: 'لماذا تختار Serv5؟',
      text: '',
      points: [
        { title: 'استراتيجيات مخصصة لكل مشروع.', text: '' },
        { title: 'خبرة في تحسين مواقع الشركات والمتاجر الإلكترونية.', text: '' },
        { title: 'تقارير أداء واضحة وشفافة.', text: 'تقارير واضحة أسبوعية وشهرية توضح أين يتم إنفاق ميزانيتك والنتائج المحققة.' },
        { title: 'تحسين مستمر وفق أحدث معايير Google.', text: 'خبرة واسعة في إعلانات جوجل، منصات ميتا، تيك توك، وسناب شات.' }
      ],
      cta: ''
    }
  },
  en: {
    hero: {
      eyebrow: '',
      titleTop: 'SEO services that turn',
      titleAccent: 'visits into customers',
      text: 'At Serv5, we see SEO as more than a way to improve your rankings. It is a complete strategy that helps you reach the right customers at the right time. We improve your visibility in search results, grow organic traffic and turn it into real opportunities for your business.',
      primary: 'Start your project',
      secondary: 'Learn more',
      chipOne: '',
      chipTwo: ''
    },
    standards: {
      eyebrow: '',
      preamble: 'We use a complete plan covering every part of search engine optimization, from analysis through ongoing monitoring, to support long-term results.',
      title: 'A complete SEO system for sustainable growth',
      text: '',
      items: [
        { icon: 'Search', title: 'Website and competitor analysis', text: 'We review your site performance, identify technical issues and compare competitors to find growth opportunities.' },
        { icon: 'Sparkles', title: 'Keyword strategy', text: 'We select the terms your customers are already searching for, focusing on achievable competition and commercial value.' },
        { icon: 'PanelTop', title: 'On-page SEO', text: 'We improve page structure, titles, meta descriptions, internal links and content to align with Google guidelines.' },
        { icon: 'Gauge', title: 'Technical SEO', text: 'We improve site speed, user experience, indexing and structured data for stronger search performance.' },
        { icon: 'FileText', title: 'Content development', text: 'We create and improve high-quality content that answers customer questions throughout the buying journey.' },
        { icon: 'Link2', title: 'Backlink building', text: 'We strengthen site authority through a link-building strategy based on relevant, high-quality links.' }
      ]
    },
    work: { eyebrow: '', title: '', text: '', more: '' },
    ux: {
      eyebrow: '',
      title: 'Data is the foundation of every decision we make',
      text: 'Every step we take is based on careful data analysis. We continually track site performance, keywords and user behaviour to refine the strategy and achieve the best results.',
      points: [
        'Track keyword performance.',
        'Continuously analyze competitors.',
        'Measure user behaviour on your website.',
        'Improve performance in line with Google updates.'
      ],
      panelTitle: '',
      panelNote: '',
      stages: []
    },
    process: {
      eyebrow: 'HOW WE WORK',
      title: 'A clear plan from start to finish',
      text: '',
      callout: 'We focus on real, measurable results and increased sales, not just vanity traffic numbers.',
      steps: [
        { icon: 'Search', title: 'Stage 1: Website analysis', text: 'We learn about your business, analyze your website and competitors, and identify growth opportunities.' },
        { icon: 'PenTool', title: 'Stage 2: Strategy development', text: 'We prepare a complete SEO plan covering technical improvements, content and keywords.' },
        { icon: 'Code2', title: 'Stage 3: Implementation', text: 'We carry out on-page improvements, technical SEO, content optimization and link building.' },
        { icon: 'Activity', title: 'Stage 4: Monitoring and development', text: 'We measure results, prepare reports and continually improve the strategy.' }
      ]
    },
    why: {
      eyebrow: '',
      title: 'Why choose Serv5?',
      text: '',
      points: [
        { title: 'Strategies tailored to every project.', text: '' },
        { title: 'Experience optimizing company and e-commerce websites.', text: '' },
        { title: 'Clear and transparent performance reports.', text: 'Weekly and monthly reports show where your budget is spent and the results achieved.' },
        { title: 'Continuous optimization using the latest Google standards.', text: 'Extensive experience with Google Ads, Meta, TikTok and Snapchat.' }
      ],
      cta: ''
    }
  }
};

const mobileAppProjects = [
  {
    id: 'yalla-my-cash',
    screens: ['yalla-1', 'yalla-2', 'yalla-3', 'yalla-4'],
    image: 'https://api.serv5.com.eg/storage/portfolio/em7kkDf1QVVU1n6gAEjC8EdW3uE6bd48hNcesroL.webp',
    url: 'https://apps.apple.com/us/app/yalla-my-cash/id1631066821?l=ar',
    title: { ar: 'يالا ماي كاش', en: 'Yalla My Cash' },
    description: {
      ar: 'تطبيق مالي يوفر خدمة طلب وتوصيل النقود الكاش مباشرة إلى باب المنزل بسرعة وسهولة، لتوفير الوقت والجهد وتغني عن الحاجة لزيارة أجهزة الصراف الآلي (ATM).',
      en: 'A financial application that offers direct cash delivery right to your doorstep, providing a convenient and time-saving alternative to visiting ATMs for everyday expenses or emergencies.'
    }
  },
  {
    id: 'ward-boutique',
    screens: ['ward-1', 'ward-2', 'ward-3'],
    image: 'https://api.serv5.com.eg/storage/portfolio/9mX94g4FmzeKkZBjoazDujOl9tP4TYV4iaUF3k34.webp',
    url: 'https://apps.apple.com/us/app/%D9%88%D8%B1%D8%AF-%D8%A8%D9%88%D8%AA%D9%8A%D9%83/id1450749726',
    title: { ar: 'ورد بوتيك', en: 'Ward Boutique' },
    description: {
      ar: 'منصة وتطبيق يتيح للمستخدمات عرض وبيع المقتنيات، الملابس، والأكسسوارات المستعملة والجديدة مجاناً من أي مكان في الوطن العربي، مما يسهل عملية التسوق وإعادة التدوير والتخلص من الأغراض غير الضرورية.',
      en: 'A mobile platform allowing users across the Arab world to list, buy, and sell new and pre-owned clothing, accessories, and items for free, simplifying shopping and declaring unnecessary items.'
    }
  },
  {
    id: 'el-wady-el-akhdar-ios',
    screens: ['wady-1', 'wady-2', 'wady-3', 'wady-4'],
    image: 'https://api.serv5.com.eg/storage/portfolio/eeM54tusOVrETHMXPb7WR9MKiv7bvwZqgEGjfUao.webp',
    url: 'https://apps.apple.com/us/app/%D8%B4%D8%B1%D9%83%D8%A9-%D8%A7%D9%84%D9%88%D8%A7%D8%AF%D9%8A-%D9%84%D9%84%D8%A7%D8%B3%D8%AA%D9%8A%D8%B1%D8%A7%D8%AF-%D9%88%D8%A7%D9%84%D8%AA%D8%B5%D8%AF%D9%8A%D8%B1/id1608770097',
    title: { ar: 'الوادي الأخضر', en: 'El Wady El Akhdar IOS' },
    description: {
      ar: 'تطبيق إلكتروني لشركة متخصصة في استيراد وتصدير الآلات الزراعية والعدد اليدوية والكهربائية بقطع غيارها.',
      en: 'An application for a company specialized in importing and exporting agricultural machinery, hand tools, and power tools along with their spare parts.'
    }
  },
  {
    id: 'orody-ios',
    screens: ['orody-1', 'orody-2', 'orody-3', 'orody-4'],
    image: 'https://api.serv5.com.eg/storage/portfolio/PjqST86jexvBDcmfqmFsGs7lPwEfZz1u38hHMnuG.webp',
    url: 'https://apps.apple.com/us/app/%D8%B9%D8%B1%D9%88%D8%B6%D9%8A/id1597620341',
    title: { ar: 'عروضي', en: 'Orody IOS' },
    description: {
      ar: 'تطبيق مخصص لعرض وتصفح أحدث عروض وخصومات أشهر المتاجر العادية والإلكترونية في مكان واحد.',
      en: 'A dedicated mobile application to browse and explore the latest offers and discounts from top physical and online stores in one place.'
    }
  },
  {
    id: 'orody',
    screens: ['orody-android-1', 'orody-android-2', 'orody-android-3', 'orody-android-4'],
    image: 'https://api.serv5.com.eg/storage/portfolio/hstxgbjPKqPW98tZyrnLajIpEAQZ4D05H3IvTc6S.webp',
    url: 'https://play.google.com/store/apps/details?id=com.waitbuzz.orody',
    title: { ar: 'عروضي', en: 'Orody' },
    description: {
      ar: 'تطبيق مخصص لعرض وتصفح أحدث عروض وخصومات أشهر المتاجر العادية والإلكترونية في مكان واحد.',
      en: 'A dedicated mobile application to browse and explore the latest offers and discounts from top physical and online stores in one place.'
    }
  },
  {
    id: 'sallatk-admin',
    screens: ['sallatk'],
    image: 'https://api.serv5.com.eg/storage/portfolio/baTmC83IhHVD5j6TqYBqHIYhp5b9rflhotJEKCH1.webp',
    url: 'https://play.google.com/store/apps/details?id=com.sallatk.vendor.sallatk_vendor',
    title: { ar: 'سلتك', en: 'Sallatk Admin' },
    description: {
      ar: 'تطبيق إلكتروني يتيح للتاجر التحكم في متجره بسهولة وسرعة، ومتابعة الطلبات الواردة والتحكم فيها، بالإضافة إلى إضافة المنتجات والتعديل عليها بكل تفاصيلها.',
      en: 'A mobile application that enables merchants to manage their online store quickly and easily, track and process incoming orders, and seamlessly add or edit products with all details.'
    }
  },
  {
    id: 'el-wady-el-akhdar',
    screens: ['wady-android'],
    image: 'https://api.serv5.com.eg/storage/portfolio/lh0NTiCVpvz3nXxEF56E6fBbGAkMRuAHUs0uIvMK.webp',
    url: 'https://play.google.com/store/apps/details?id=com.elwady.elakhdar',
    title: { ar: 'الوادي الأخضر', en: 'El Wady El Akhdar' },
    description: {
      ar: 'تطبيق إلكتروني لشركة متخصصة في استيراد وتصدير الآلات الزراعية والعدد اليدوية والكهربائية بقطع غيارها.',
      en: 'An application for a company specialized in importing and exporting agricultural machinery, hand tools, and power tools along with their spare parts.'
    }
  },
  {
    id: 'hodhood',
    screens: ['hodhood'],
    image: 'https://api.serv5.com.eg/storage/portfolio/wm0HiYM3umDfCCqkbC63pMKP4LVvtsaEQb19dxtD.webp',
    url: 'https://play.google.com/store/apps/details?id=com.hodhood.app',
    title: { ar: 'هدهد', en: 'HodHood' },
    description: {
      ar: 'تطبيق تسوق وتوصيل طلبات موجه للمستخدمين باللغة الألمانية.',
      en: 'An e-commerce and delivery application tailored for German-speaking users.'
    }
  },
  {
    id: 'athath-app',
    screens: ['athath'],
    image: 'https://api.serv5.com.eg/storage/portfolio/8U2xFF7kDBORdo0B0kYCEH1Vt9aiTzZEALkInpTZ.webp',
    url: 'https://play.google.com/store/apps/details?id=com.wb.furniture',
    title: { ar: 'تطبيق أثاث', en: 'Athath App' },
    description: {
      ar: 'تطبيق إلكتروني متخصص في عرض وتوفير الأثاث المنزلي والديكورات الحديثة',
      en: 'An mobile application specialized in showcasing and providing modern home furniture and decor'
    }
  }
];

const mobileAppsCopy = {
  ar: {
    hero: {
      eyebrow: '',
      titleTop: 'تصميم وتطوير تطبيقات جوال ذكية',
      titleAccent: 'تدعم نمو أعمالك',
      text: 'نحوّل فكرتك إلى تطبيق جوال احترافي يجمع بين التصميم العصري، والأداء السريع، وتجربة المستخدم المميزة. سواء كنت تستهدف نظام Android أو iOS، نطور تطبيقات تساعدك على الوصول إلى عملائك، وتعزيز تواجدك الرقمي، وتحقيق أهدافك التجارية.',
      primary: 'ابدأ مشروعك',
      secondary: 'اعرف المزيد',
      chipOne: '',
      chipTwo: ''
    },
    standards: {
      eyebrow: '',
      title: 'مميزات تطبيقات الجوال التي نصممها',
      text: 'نطور تطبيقات تعتمد على أحدث التقنيات لضمان السرعة، والاستقرار، وسهولة الاستخدام، مع تجربة رقمية متكاملة تناسب احتياجات عملائك.',
      items: [
        { icon: 'MousePointerClick', title: 'تصميم عصري وتجربة مستخدم احترافية', text: 'واجهات استخدام جذابة وسهلة التنقل تمنح المستخدم تجربة سلسة تعزز التفاعل مع التطبيق.' },
        { icon: 'Gauge', title: 'أداء سريع واستجابة عالية', text: 'نعتمد على تقنيات برمجية حديثة لضمان سرعة تشغيل التطبيق واستجابته على مختلف الأجهزة.' },
        { icon: 'Smartphone', title: 'تطبيقات تعمل على Android و iOS', text: 'نطور تطبيقات متوافقة مع جميع أنظمة التشغيل لتوسيع نطاق وصولك إلى أكبر عدد من المستخدمين.' },
        { icon: 'ShieldCheck', title: 'تسجيل دخول وحماية أمنية متكاملة', text: 'دخول آمن عبر رقم الجوال ورمز التحقق OTP أو البصمة وحسابات التواصل الاجتماعي.' },
        { icon: 'LockKeyhole', title: 'حماية وأمان للبيانات', text: 'نطبق أعلى معايير الأمان لحماية بيانات المستخدمين وتأمين التطبيق ضد المخاطر الرقمية.' },
        { icon: 'Activity', title: 'التكامل مع الأنظمة المختلفة', text: 'إمكانية ربط التطبيق بأنظمة الدفع الإلكتروني، وإدارة العملاء (CRM)، ولوحات التحكم، وواجهات البرمجة (APIs).' },
        { icon: 'RefreshCw', title: 'دعم فني وتحديثات مستمرة', text: 'نقدم خدمات الصيانة والتطوير بعد الإطلاق لضمان استقرار التطبيق وإضافة المزايا الجديدة عند الحاجة.' }
      ]
    },
    work: {
      eyebrow: 'معرض التطبيقات',
      title: 'بعض من أعمالنا في تطوير تطبيقات الهاتف',
      text: 'تصفح أحدث تطبيقات الجوال التي قمنا بتطويرها لعملائنا في مختلف المجالات.',
      more: '',
      items: mobileAppProjects
    },
    ux: {
      eyebrow: '',
      title: 'نصمم تطبيقات يحب المستخدمون استخدامها',
      text: 'نجاح التطبيق لا يعتمد على الفكرة فقط، بل على سهولة استخدامه. لذلك نركز على تصميم واجهات تفاعلية، وتنقل سلس، وأداء سريع يضمن تجربة استخدام مريحة تزيد من رضا العملاء ومعدلات الاحتفاظ بالمستخدمين.',
      points: [
        'تصميم متوافق مع أحدث معايير UI/UX.',
        'سرعة في التنقل بين الشاشات.',
        'تجربة استخدام سلسة على جميع الأجهزة.',
        'واجهات عصرية تعكس هوية علامتك التجارية.'
      ],
      panelTitle: '',
      panelNote: '',
      stages: []
    },
    process: {
      eyebrow: 'كيف نعمل؟',
      title: 'لدينا خطة عمل واضحة ومدروسة من البداية وحتى النهاية',
      text: '',
      callout: 'نحن نحول الأفكار والمخططات المعقدة إلى تجارب مستخدم ممتعة وسريعة على الجوال.',
      steps: [
        { icon: 'Search', title: 'تحليل الفكرة وتحديد المتطلبات', text: 'نبدأ بفهم فكرة التطبيق، وتحليل احتياجات المشروع، وتحديد الوظائف الأساسية والجمهور المستهدف.' },
        { icon: 'PenTool', title: 'تصميم تجربة المستخدم والواجهات', text: 'نصمم رحلة استخدام واضحة وواجهات احترافية تجمع بين الجمال وسهولة الاستخدام.' },
        { icon: 'Code2', title: 'تطوير التطبيق والبرمجة', text: 'يقوم فريق التطوير ببناء التطبيق باستخدام أحدث التقنيات مع ضمان الأداء العالي والأمان.' },
        { icon: 'Rocket', title: 'الاختبار والإطلاق', text: 'نجري اختبارات شاملة للتأكد من جودة التطبيق، ثم نساعدك في نشره على متجري Google Play وApp Store مع تقديم الدعم الفني بعد الإطلاق.' }
      ]
    },
    why: {
      eyebrow: '',
      title: 'لماذا تطور تطبيقك مع فريق سيرف فايف؟',
      text: '',
      points: [
        { title: 'ضمان قبول التطبيق في المتاجر', text: 'نلتزم بالمعايير القياسية لـ Google وApple لضمان قبول التطبيق ونشره سريعاً.' },
        { title: 'أكواد برمجية نظيفة ومرتبة', text: 'كافة أجزاء التطبيق موثقة مما يتيح لك تعديله أو إضافة ميزات جديدة مستقبلاً.' },
        { title: 'صيانة ومتابعة مجانية لمدة 6 أشهر', text: 'نتابع معك أداء التطبيق ونحل أي مشاكل فنية قد تظهر لضمان ثباته بالكامل.' },
        { title: 'ربط API آمن ومحمي بالكامل', text: 'كافة الاتصالات والبيانات الصادرة والواردة بين السيرفر والتطبيق مشفرة ومؤمنة.' }
      ],
      cta: ''
    }
  },
  en: {
    hero: {
      eyebrow: '',
      titleTop: 'Smart mobile app design and development',
      titleAccent: 'that supports business growth',
      text: 'We turn your idea into a professional mobile app combining modern design, fast performance and a great user experience. Whether you target Android or iOS, we build apps that help you reach customers, strengthen your digital presence and achieve your business goals.',
      primary: 'Start your project',
      secondary: 'Learn more',
      chipOne: '',
      chipTwo: ''
    },
    standards: {
      eyebrow: '',
      title: 'Features of the mobile apps we design',
      text: 'We build apps with modern technology for speed, stability and ease of use, creating a complete digital experience for your customers.',
      items: [
        { icon: 'MousePointerClick', title: 'Modern design and professional UX', text: 'Attractive, easy-to-navigate interfaces give users a smooth experience and encourage engagement.' },
        { icon: 'Gauge', title: 'Fast performance and responsiveness', text: 'Modern development technology keeps the app fast and responsive across devices.' },
        { icon: 'Smartphone', title: 'Apps for Android and iOS', text: 'We build apps compatible with all major operating systems to reach more users.' },
        { icon: 'ShieldCheck', title: 'Secure sign-in and protection', text: 'Secure access through a phone number and OTP, biometrics or social accounts.' },
        { icon: 'LockKeyhole', title: 'Data protection and security', text: 'We apply strong security practices to protect user data and guard the app against digital threats.' },
        { icon: 'Activity', title: 'Integration with other systems', text: 'Connect the app to online payments, CRM, dashboards and APIs.' },
        { icon: 'RefreshCw', title: 'Ongoing support and updates', text: 'We maintain and improve the app after launch to keep it stable and add features when needed.' }
      ]
    },
    work: {
      eyebrow: 'APP GALLERY',
      title: 'Some of our mobile app development work',
      text: 'Explore mobile apps we have recently developed for clients across different industries.',
      more: '',
      items: mobileAppProjects
    },
    ux: {
      eyebrow: '',
      title: 'We design apps people love to use',
      text: 'An app’s success depends on more than its idea; it also depends on how easy it is to use. We focus on interactive interfaces, smooth navigation and fast performance to create a comfortable experience that improves customer satisfaction and retention.',
      points: [
        'Designed to the latest UI/UX standards.',
        'Fast navigation between screens.',
        'A smooth experience across devices.',
        'Modern interfaces that reflect your brand.'
      ],
      panelTitle: '',
      panelNote: '',
      stages: []
    },
    process: {
      eyebrow: 'HOW WE WORK',
      title: 'A clear, considered plan from start to finish',
      text: '',
      callout: 'We turn complex ideas and plans into enjoyable, fast mobile experiences.',
      steps: [
        { icon: 'Search', title: 'Analyze the idea and define requirements', text: 'We learn about the app idea, analyze project needs and identify key features and target users.' },
        { icon: 'PenTool', title: 'Design the user experience and interfaces', text: 'We design a clear user journey and polished interfaces that balance beauty with ease of use.' },
        { icon: 'Code2', title: 'Develop and program the app', text: 'Our development team builds the app with modern technology and a focus on performance and security.' },
        { icon: 'Rocket', title: 'Test and launch', text: 'We thoroughly test app quality, help publish it on Google Play and the App Store, and provide support after launch.' }
      ]
    },
    why: {
      eyebrow: '',
      title: 'Why develop your app with SERV5?',
      text: '',
      points: [
        { title: 'App store approval support', text: 'We follow Google and Apple standards to help your app get approved and published quickly.' },
        { title: 'Clean, organized code', text: 'Every part of the app is documented, making it easier to update or add features later.' },
        { title: 'Six months of free maintenance and follow-up', text: 'We monitor app performance and fix technical issues to keep it stable.' },
        { title: 'Secure API connections', text: 'All data and communication between the server and app are encrypted and protected.' }
      ],
      cta: ''
    }
  }
};

const iconMap = {
  Palette,
  Gauge,
  MousePointerClick,
  MonitorSmartphone,
  Sparkles,
  ShieldCheck,
  Search,
  PenTool,
  Code2,
  Rocket,
  Activity,
  Users,
  ShoppingBag,
  CreditCard,
  Truck,
  PackageCheck,
  Smartphone,
  Layers,
  FileText,
  Link2,
  PanelTop,
  LockKeyhole,
  RefreshCw
};

export default function Serv5WebDesignPage({ lang = 'ar', onOpenConsultation, variant = 'web-design' }) {
  const isRtl = lang === 'ar';
  const isUiUx = variant === 'ui-ux';
  const isEcommerce = variant === 'ecommerce';
  const isSeo = variant === 'seo';
  const isMobileApps = variant === 'mobile-apps';
  const isFocusedService = isEcommerce || isSeo;
  const isHideHeroChips = isFocusedService || isMobileApps;
  const isHideUxPanel = isFocusedService || isMobileApps;
  const languageKey = isRtl ? 'ar' : 'en';
  const baseCopy = copy[languageKey];
  const variantCopy = isUiUx ? uiUxCopy[languageKey] : isEcommerce ? ecommerceCopy[languageKey] : isSeo ? seoCopy[languageKey] : isMobileApps ? mobileAppsCopy[languageKey] : null;
  const t = variantCopy
    ? { ...baseCopy, ...variantCopy, work: { ...baseCopy.work, ...variantCopy.work, items: variantCopy.work.items || baseCopy.work.items } }
    : baseCopy;
  const pageRef = useRef(null);
  const processRef = useRef(null);
  const workRef = useRef(null);
  const formRef = useRef(null);
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  useEffect(() => {
    setActiveProcessStep(0);
  }, [variant]);

  useEffect(() => {
    const pageName = isEcommerce
      ? (isRtl ? 'حلول المتاجر الإلكترونية' : 'E-Commerce Solutions')
      : isSeo
        ? (isRtl ? 'تحسين محركات البحث SEO' : 'Search Engine Optimization')
        : isMobileApps
          ? (isRtl ? 'تطبيقات الجوال' : 'Mobile Apps')
          : isUiUx
            ? (isRtl ? 'تصميم واجهة وتجربة المستخدم' : 'UI/UX Design')
            : (isRtl ? 'تصميم المواقع' : 'Web Design');
    document.title = `${isRtl ? 'سيرف فايف' : 'SERV5'} | ${pageName}`;
  }, [isRtl, isUiUx, isEcommerce, isSeo, isMobileApps]);

  useEffect(() => {
    const page = pageRef.current;
    if (!page || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const items = page.querySelectorAll('[data-wd-reveal]');
    if (!('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    page.classList.add('wd-motion-ready');
    // Elements already inside the first viewport are shown right away so the page never starts blank.
    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.94 && rect.bottom > 0) item.classList.add('is-visible');
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -30px 0px' });

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = processRef.current;
    const track = section?.querySelector('.wd-process-track');
    const flow = section?.querySelector('.wd-flow');
    const progressRing = section?.querySelector('.wd-flow-progress-value');
    const page = section?.closest('.wd-page');
    if (!section || !track || !flow || !progressRing || !page) return;

    let frame = 0;
    const updateProgress = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const scrollDriven = !prefersReducedMotion && window.matchMedia(
          '(min-width: 1021px) and (min-height: 601px) and (prefers-reduced-motion: no-preference)'
        ).matches;
        section.classList.toggle('wd-process-scroll-ready', scrollDriven);
        page.classList.toggle('wd-has-scroll-driven-process', scrollDriven);

        if (prefersReducedMotion) {
          progressRing.style.strokeDashoffset = '100';
          setActiveProcessStep(0);
          return;
        }

        let progress;
        if (scrollDriven) {
          const stickyTop = Number.parseFloat(window.getComputedStyle(flow).top) || 0;
          const scrollRange = track.offsetHeight - flow.offsetHeight;
          const distance = stickyTop - track.getBoundingClientRect().top;
          progress = scrollRange > 0 ? Math.max(0, Math.min(1, distance / scrollRange)) : 0;
        } else {
          const stage = section.querySelector('.wd-flow-stage');
          const stageRect = stage.getBoundingClientRect();
          const scrollRange = window.innerHeight + stageRect.height;
          progress = scrollRange > 0
            ? Math.max(0, Math.min(1, (window.innerHeight - stageRect.top) / scrollRange))
            : 0;
        }

        progressRing.style.strokeDashoffset = String(100 * (1 - progress));
        const stepCount = Math.max(1, section.querySelectorAll('.wd-flow-card').length);
        setActiveProcessStep((current) => {
          const next = Math.min(stepCount - 1, Math.floor(progress * stepCount));
          return current === next ? current : next;
        });
      });
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
      section.classList.remove('wd-process-scroll-ready');
      page.classList.remove('wd-has-scroll-driven-process');
      progressRing.style.strokeDashoffset = '100';
    };
  }, []);

  useEffect(() => {
    const section = workRef.current;
    const track = section?.querySelector('.wd-work-track');
    const viewport = section?.querySelector('.wd-work-sticky');
    const gallery = section?.querySelector('.wd-work-grid');
    const page = section?.closest('.wd-page');
    if (!section || !track || !viewport || !gallery || !page) return;

    let frame = 0;
    let travel = 0;
    let scrollDriven = false;
    let baseTranslate = 0;
    let manualOffset = 0;
    let visibleTranslate = 0;
    let drag = null;
    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
    const applyGalleryTranslate = () => {
      visibleTranslate = clamp(baseTranslate + manualOffset, -travel, 0);
      gallery.style.transform = `translate3d(${visibleTranslate}px, 0, 0)`;
    };

    const updateGallery = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const desktopGallery = window.matchMedia(
          '(min-width: 1021px) and (min-height: 601px)'
        ).matches;
        scrollDriven = desktopGallery && !prefersReducedMotion;
        section.classList.toggle('wd-work-scroll-ready', desktopGallery);
        page.classList.toggle('wd-has-scroll-driven-work', desktopGallery);

        if (!scrollDriven) {
          track.style.height = '';
          gallery.style.transform = '';
          travel = 0;
          baseTranslate = 0;
          manualOffset = 0;
          visibleTranslate = 0;
          return;
        }

        const stickyTop = Number.parseFloat(window.getComputedStyle(viewport).top) || 0;
        const stickyHeight = viewport.offsetHeight;
        travel = Math.max(0, gallery.offsetWidth - viewport.clientWidth);
        track.style.height = `${stickyHeight + travel}px`;

        const scrollRange = track.offsetHeight - stickyHeight;
        const distance = stickyTop - track.getBoundingClientRect().top;
        const progress = scrollRange > 0 ? Math.max(0, Math.min(1, distance / scrollRange)) : 0;
        baseTranslate = -travel * progress;
        applyGalleryTranslate();
      });
    };

    const onPointerDown = (event) => {
      if (!scrollDriven || !event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0)) return;
      if (!(event.target instanceof Element) || event.target.closest('a, button, input, select, textarea')) return;

      drag = { pointerId: event.pointerId, startX: event.clientX, startTranslate: visibleTranslate };
      viewport.setPointerCapture(event.pointerId);
      section.classList.add('wd-work-dragging');
      event.preventDefault();
    };

    const onPointerMove = (event) => {
      if (!drag || event.pointerId !== drag.pointerId) return;
      const nextTranslate = clamp(drag.startTranslate + event.clientX - drag.startX, -travel, 0);
      manualOffset = nextTranslate - baseTranslate;
      applyGalleryTranslate();
      event.preventDefault();
    };

    const finishDrag = (event) => {
      if (!drag || (event && event.pointerId !== drag.pointerId)) return;
      const pointerId = drag.pointerId;
      drag = null;
      section.classList.remove('wd-work-dragging');
      if (viewport.hasPointerCapture(pointerId)) viewport.releasePointerCapture(pointerId);
    };

    const onKeyDown = (event) => {
      if (!scrollDriven) return;
      let nextTranslate;
      if (event.key === 'ArrowLeft') nextTranslate = visibleTranslate - 100;
      else if (event.key === 'ArrowRight') nextTranslate = visibleTranslate + 100;
      else if (event.key === 'Home') nextTranslate = 0;
      else if (event.key === 'End') nextTranslate = -travel;
      else return;

      event.preventDefault();
      manualOffset = clamp(nextTranslate, -travel, 0) - baseTranslate;
      applyGalleryTranslate();
    };

    updateGallery();
    window.addEventListener('scroll', updateGallery, { passive: true });
    window.addEventListener('resize', updateGallery);
    viewport.addEventListener('pointerdown', onPointerDown);
    viewport.addEventListener('pointermove', onPointerMove);
    viewport.addEventListener('pointerup', finishDrag);
    viewport.addEventListener('pointercancel', finishDrag);
    viewport.addEventListener('lostpointercapture', finishDrag);
    viewport.addEventListener('keydown', onKeyDown);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateGallery);
      window.removeEventListener('resize', updateGallery);
      viewport.removeEventListener('pointerdown', onPointerDown);
      viewport.removeEventListener('pointermove', onPointerMove);
      viewport.removeEventListener('pointerup', finishDrag);
      viewport.removeEventListener('pointercancel', finishDrag);
      viewport.removeEventListener('lostpointercapture', finishDrag);
      viewport.removeEventListener('keydown', onKeyDown);
      section.classList.remove('wd-work-scroll-ready');
      section.classList.remove('wd-work-dragging');
      page.classList.remove('wd-has-scroll-driven-work');
      track.style.height = '';
      gallery.style.transform = '';
    };
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={`wd-page${isUiUx ? ' wd-page-uiux' : ''}${isEcommerce ? ' wd-page-ecommerce' : ''}${isSeo ? ' wd-page-seo' : ''}${isMobileApps ? ' wd-page-mobile-apps' : ''}`} dir={isRtl ? 'rtl' : 'ltr'} ref={pageRef}>
      {/* ---------------- HERO ---------------- */}
      <section className="wd-hero">
        <div className="container wd-hero-grid">
          <div className="wd-hero-copy">
            {t.hero.eyebrow && <span className="wd-eyebrow wd-reveal" data-wd-reveal>
              <Sparkles size={14} />
              {t.hero.eyebrow}
            </span>}
            <h1 className="wd-reveal" data-wd-reveal style={{ '--wd-delay': '80ms' }}>
              {t.hero.titleTop}
              <span className="wd-hero-accent"> {t.hero.titleAccent}</span>
            </h1>
            <p className="wd-reveal" data-wd-reveal style={{ '--wd-delay': '160ms' }}>{t.hero.text}</p>
            <div className="wd-hero-actions wd-reveal" data-wd-reveal style={{ '--wd-delay': '240ms' }}>
              <button type="button" className="wd-btn wd-btn-primary" onClick={scrollToForm}>
                {t.hero.primary}
                <ArrowUpRight size={17} />
              </button>
              <a className="wd-btn wd-btn-ghost" href="#wd-standards">
                {t.hero.secondary}
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          <div
            className="wd-hero-visual wd-reveal"
            data-wd-reveal
            style={{ '--wd-delay': '220ms' }}
            aria-hidden="true"
          >
            <span className="wd-orbit wd-orbit-outer" />
            <span className="wd-orbit wd-orbit-inner" />
            <span className="wd-hero-glow" />
            <div className="wd-browser">
              <div className="wd-browser-bar">
                <span /><span /><span />
                {!isHideHeroChips && <em>serv5.com</em>}
              </div>
              <div className="wd-browser-shot">
                <img src="/images/website-mockup-2.jpg" alt="" loading="lazy" />
                <span className="wd-browser-scan" />
              </div>
              <div className="wd-browser-meta">
                <i /><i /><i />
              </div>
            </div>
            {!isHideHeroChips && <span className="wd-float-chip wd-float-chip-top">{t.hero.chipOne}</span>}
            {!isHideHeroChips && <span className="wd-float-chip wd-float-chip-bottom">{t.hero.chipTwo}</span>}
          </div>
        </div>
      </section>

      {/* ---------------- STANDARDS ---------------- */}
      <section className="wd-section wd-section-tint" id="wd-standards">
        <div className="container">
          <header className="wd-heading wd-reveal" data-wd-reveal>
            {t.standards.eyebrow && <span>{t.standards.eyebrow}</span>}
            {t.standards.preamble && <p>{t.standards.preamble}</p>}
            <h2>{t.standards.title}</h2>
            {t.standards.text && <p>{t.standards.text}</p>}
          </header>
          <div className="wd-standards-grid">
            {t.standards.items.map((item, index) => {
              const Icon = iconMap[item.icon] || Sparkles;
              return (
                <article
                  className="wd-standard-card wd-reveal"
                  data-wd-reveal
                  style={{ '--wd-delay': `${(index % 3) * 90}ms` }}
                  key={item.title}
                >
                  <span className="wd-standard-icon"><Icon size={21} /></span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- WORK ---------------- */}
      {isMobileApps
        ? <Serv5AppUniverse
          lang={lang}
          eyebrow={t.work.eyebrow}
          title={t.work.title}
          text={t.work.text}
          items={t.work.items}
          sectionRef={workRef}
        />
        : !isFocusedService && <section className="wd-section wd-work-section" ref={workRef}>
        <div className="container wd-work-container">
          <header className="wd-heading wd-reveal" data-wd-reveal>
            <span>{t.work.eyebrow}</span>
            <h2>{t.work.title}</h2>
            <p>{t.work.text}</p>
          </header>
        </div>
        <div className="wd-work-track">
          <div
            className="wd-work-sticky"
            role="region"
            aria-label={isMobileApps ? (isRtl ? 'معرض التطبيقات' : 'App gallery') : isRtl ? 'معرض الأعمال الرقمية' : 'Digital work gallery'}
            aria-keyshortcuts="ArrowLeft ArrowRight Home End"
            tabIndex={0}
          >
            <div className="wd-work-grid">
              {t.work.items.map((item, index) => {
                const center = (t.work.items.length - 1) / 2;
                const position = center ? (index - center) / center : 0;
                const edge = Math.abs(position);
                return (
                  <article
                    className="wd-work-card wd-reveal"
                    data-wd-reveal
                    style={{
                      '--wd-delay': `${index * 90}ms`,
                      '--wd-work-angle': `${-position * 42}deg`,
                      '--wd-work-depth': `${54 - edge * 150}px`,
                      zIndex: Math.round(10 - edge * 5)
                    }}
                    key={`${item.title}-${index}`}
                  >
                    <div className="wd-work-shot">
                      <img src={item.image} alt={item.title} loading="lazy" draggable="false" />
                    </div>
                    <div className="wd-work-meta">
                      <h3>{item.title}</h3>
                      {item.tag && <span>{item.tag}</span>}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
        {t.work.more && <div className="container wd-work-container">
          <div className="wd-work-more wd-reveal" data-wd-reveal>
            <Link to="/portfolio" className="wd-btn wd-btn-ghost">
              {t.work.more}
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>}
      </section>}

      {/* ---------------- UX ---------------- */}
      <section className="wd-section wd-ux-section">
        <div className="container wd-ux-grid">
          <div className="wd-ux-copy wd-reveal" data-wd-reveal>
            {t.ux.eyebrow && <span className="wd-eyebrow wd-eyebrow-dark">
              <MousePointerClick size={14} />
              {t.ux.eyebrow}
            </span>}
            <h2>{t.ux.title}</h2>
            <p>{t.ux.text}</p>
            <ul className="wd-ux-list">
              {t.ux.points.map((point, index) => (
                <li key={point} style={{ '--wd-delay': `${index * 80}ms` }}>
                  <Check size={15} />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {!isHideUxPanel && <div className="wd-ux-panel wd-reveal" data-wd-reveal>
            <div className="wd-ux-panel-head">
              <strong>{t.ux.panelTitle}</strong>
              <span>{t.ux.panelNote}</span>
            </div>
            {t.ux.stages.map((stage, index) => (
              <div className="wd-ux-stage" key={stage.label} style={{ '--wd-delay': `${index * 120}ms` }}>
                <div className="wd-ux-stage-top">
                  <i>{`0${index + 1}`}</i>
                  <strong>{stage.label}</strong>
                  <span>{stage.value}%</span>
                </div>
                <div className="wd-ux-bar"><b style={{ '--wd-value': `${stage.value}%` }} /></div>
                <p>{stage.text}</p>
              </div>
            ))}
          </div>}
        </div>
      </section>

      {/* ---------------- PROCESS ---------------- */}
      <section className={`wd-section wd-process-section${t.process.steps.length > 4 ? ' wd-process-five-steps' : ''}`} ref={processRef}>
        <div className="container">
          <header className="wd-heading wd-reveal" data-wd-reveal>
            <span>{t.process.eyebrow}</span>
            <h2>{t.process.title}</h2>
            {t.process.text && <p>{t.process.text}</p>}
          </header>
        </div>
        <div className="wd-process-track">
          <div className="container wd-process-track-inner">
              <div className="wd-flow">
                <div
                  className="wd-flow-stage wd-reveal"
                  data-wd-reveal
                  style={{ '--wd-delay': '120ms' }}
                  aria-hidden="true"
                >
                  <svg className={`wd-flow-progress${isRtl ? ' is-rtl' : ''}`} viewBox="0 0 100 100">
                    <circle className="wd-flow-progress-track" cx="50" cy="50" r="39.5" />
                    <circle
                      className="wd-flow-progress-value"
                      cx="50"
                      cy="50"
                      r="39.5"
                      pathLength="100"
                      strokeDasharray="100"
                      strokeDashoffset="100"
                    />
                    <circle className="wd-flow-progress-outline" cx="50" cy="50" r="42" />
                    <circle className="wd-flow-progress-outline" cx="50" cy="50" r="37" />
                  </svg>
                  {t.process.steps.map((step, index) => {
                    const angle = (-90 + (isRtl ? -1 : 1) * index * (360 / t.process.steps.length)) * (Math.PI / 180);
                    return (
                      <span
                        className={`wd-flow-num${activeProcessStep === index ? ' is-active' : ''}`}
                        key={`num-${step.title}`}
                        style={{
                          left: `${50 + 39.5 * Math.cos(angle)}%`,
                          top: `${50 + 39.5 * Math.sin(angle)}%`,
                          animationDelay: `${index * 1.2}s`
                        }}
                      >{`0${index + 1}`}</span>
                    );
                  })}
                  <img className="wd-flow-center" src="/serv5-official-logo.webp" alt="SERV5" />
              </div>
                {t.process.steps.map((step, index) => {
                  const Icon = iconMap[step.icon] || Rocket;
                  return (
                    <article
                      className={`wd-flow-card wd-flow-card-${index + 1}${index <= activeProcessStep ? ' is-shown' : ''}${activeProcessStep === index ? ' is-active' : ''}`}
                      key={step.title}
                    >
                      <div className="wd-flow-card-head">
                        <span className="wd-flow-card-num">{`0${index + 1}`}</span>
                        <span className="wd-flow-icon"><Icon size={15} /></span>
                      </div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </article>
                  );
                })}
                </div>
          </div>
          </div>
        {t.process.callout && <p className="wd-process-callout">{t.process.callout}</p>}
      </section>

      {/* ---------------- WHY ---------------- */}
      <section className="wd-section wd-section-tint">
        <div className="container wd-why-grid">
          <div className="wd-why-copy wd-reveal" data-wd-reveal>
            {t.why.eyebrow && <span className="wd-eyebrow">
              <ShieldCheck size={14} />
              {t.why.eyebrow}
            </span>}
            <h2>{t.why.title}</h2>
            {t.why.text && <p>{t.why.text}</p>}
            {t.why.cta && <button type="button" className="wd-btn wd-btn-primary" onClick={scrollToForm}>
              {t.why.cta}
              <ArrowUpRight size={17} />
            </button>}
          </div>
          <div className="wd-why-list">
            {t.why.points.map((point, index) => (
              <article
                className="wd-why-item wd-reveal"
                data-wd-reveal
                style={{ '--wd-delay': `${index * 90}ms` }}
                key={point.title}
              >
                <span><Check size={15} /></span>
                <div>
                  <h3>{point.title}</h3>
                  {point.text && <p>{point.text}</p>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Serv5GetInTouch lang={lang} sectionRef={formRef} />

    </div>
  );
}
