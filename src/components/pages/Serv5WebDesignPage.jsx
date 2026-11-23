import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Check,
  Code2,
  Gauge,
  Mail,
  MonitorSmartphone,
  MousePointerClick,
  Palette,
  PenTool,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

const contact = {
  phone: '00201288863831',
  whatsapp: '201288863831',
  email: 'sales@serv5.com'
};

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
        { image: '/images/website-mockup-1.jpg', title: 'موقع شركة مقاولات', tag: 'شركات' },
        { image: '/images/posts/post-6-website.webp', title: 'منصة أعمال رقمية', tag: 'منصات' },
        { image: '/images/website-mockup-2.jpg', title: 'متجر إلكتروني', tag: 'تجارة إلكترونية' },
        { image: '/images/serv5-architectural-pavilion.jpg', title: 'موقع خدمات عقارية', tag: 'عقارات' },
        { image: '/images/serv5-coding-enterprise.jpg', title: 'موقع شركة تقنية', tag: 'تقنية' },
        { image: '/images/serv5-tech-vision.jpg', title: 'موقع خدمات احترافية', tag: 'خدمات' }
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
        { image: '/images/website-mockup-1.jpg', title: 'Contracting company site', tag: 'Business' },
        { image: '/images/posts/post-6-website.webp', title: 'Digital business platform', tag: 'Platforms' },
        { image: '/images/website-mockup-2.jpg', title: 'Online store', tag: 'E-commerce' },
        { image: '/images/serv5-architectural-pavilion.jpg', title: 'Real estate services site', tag: 'Real estate' },
        { image: '/images/serv5-coding-enterprise.jpg', title: 'Technology company site', tag: 'Technology' },
        { image: '/images/serv5-tech-vision.jpg', title: 'Professional services site', tag: 'Services' }
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
  Rocket
};

export default function Serv5WebDesignPage({ lang = 'ar', onOpenConsultation }) {
  const isRtl = lang === 'ar';
  const t = copy[isRtl ? 'ar' : 'en'];
  const pageRef = useRef(null);
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: t.form.services[0], message: '' });
  const [sentLink, setSentLink] = useState('');

  useEffect(() => {
    document.title = `${isRtl ? 'سيرف فايف' : 'SERV5'} | ${isRtl ? 'تصميم المواقع' : 'Web Design'}`;
  }, [isRtl]);

  useEffect(() => {
    setForm((prev) => ({ ...prev, service: t.form.services[0] }));
  }, [lang]);

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

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const buildMessage = () => {
    const lines = isRtl
      ? [
        'طلب تصميم موقع من صفحة تصميم المواقع',
        `الاسم: ${form.name}`,
        `الهاتف: ${form.phone}`,
        form.email ? `الإيميل: ${form.email}` : null,
        `نوع الخدمة: ${form.service}`,
        form.message ? `تفاصيل المشروع: ${form.message}` : null
      ]
      : [
        'Website design request — web design page',
        `Name: ${form.name}`,
        `Phone: ${form.phone}`,
        form.email ? `Email: ${form.email}` : null,
        `Service: ${form.service}`,
        form.message ? `Project details: ${form.message}` : null
      ];

    return lines.filter(Boolean).join('\n');
  };

  const isReady = form.name.trim().length > 1 && form.phone.trim().length > 5;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isReady) return;
    const link = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(buildMessage())}`;
    window.open(link, '_blank', 'noopener,noreferrer');
    setSentLink(link);
  };

  const updateField = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
    setSentLink('');
  };

  return (
    <div className="wd-page" dir={isRtl ? 'rtl' : 'ltr'} ref={pageRef}>
      {/* ---------------- HERO ---------------- */}
      <section className="wd-hero">
        <div className="container wd-hero-grid">
          <div className="wd-hero-copy">
            <span className="wd-eyebrow wd-reveal" data-wd-reveal>
              <Sparkles size={14} />
              {t.hero.eyebrow}
            </span>
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

          <div className="wd-hero-visual" aria-hidden="true">
            <span className="wd-orbit wd-orbit-outer" />
            <span className="wd-orbit wd-orbit-inner" />
            <span className="wd-hero-glow" />
            <div className="wd-browser">
              <div className="wd-browser-bar">
                <span /><span /><span />
                <em>serv5.com</em>
              </div>
              <div className="wd-browser-shot">
                <img src="/images/website-mockup-2.jpg" alt="" loading="lazy" />
                <span className="wd-browser-scan" />
              </div>
              <div className="wd-browser-meta">
                <i /><i /><i />
              </div>
            </div>
            <span className="wd-float-chip wd-float-chip-top">{t.hero.chipOne}</span>
            <span className="wd-float-chip wd-float-chip-bottom">{t.hero.chipTwo}</span>
          </div>
        </div>
      </section>

      {/* ---------------- STANDARDS ---------------- */}
      <section className="wd-section wd-section-tint" id="wd-standards">
        <div className="container">
          <header className="wd-heading wd-reveal" data-wd-reveal>
            <span>{t.standards.eyebrow}</span>
            <h2>{t.standards.title}</h2>
            <p>{t.standards.text}</p>
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
      <section className="wd-section">
        <div className="container">
          <header className="wd-heading wd-reveal" data-wd-reveal>
            <span>{t.work.eyebrow}</span>
            <h2>{t.work.title}</h2>
            <p>{t.work.text}</p>
          </header>
          <div className="wd-work-grid">
            {t.work.items.map((item, index) => (
              <article
                className="wd-work-card wd-reveal"
                data-wd-reveal
                style={{ '--wd-delay': `${(index % 3) * 90}ms` }}
                key={item.title}
              >
                <div className="wd-work-shot">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className="wd-work-meta">
                  <h3>{item.title}</h3>
                  <span>{item.tag}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="wd-work-more wd-reveal" data-wd-reveal>
            <Link to="/portfolio" className="wd-btn wd-btn-ghost">
              {t.work.more}
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- UX ---------------- */}
      <section className="wd-section wd-section-dark">
        <div className="container wd-ux-grid">
          <div className="wd-ux-copy wd-reveal" data-wd-reveal>
            <span className="wd-eyebrow wd-eyebrow-dark">
              <MousePointerClick size={14} />
              {t.ux.eyebrow}
            </span>
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

          <div className="wd-ux-panel wd-reveal" data-wd-reveal>
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
          </div>
        </div>
      </section>

      {/* ---------------- PROCESS ---------------- */}
      <section className="wd-section">
        <div className="container">
          <header className="wd-heading wd-reveal" data-wd-reveal>
            <span>{t.process.eyebrow}</span>
            <h2>{t.process.title}</h2>
            <p>{t.process.text}</p>
          </header>
          <div className="wd-process">
            {t.process.steps.map((step, index) => {
              const Icon = iconMap[step.icon] || Rocket;
              return (
                <article
                  className="wd-process-step wd-reveal"
                  data-wd-reveal
                  style={{ '--wd-delay': `${index * 110}ms` }}
                  key={step.title}
                >
                  <span className="wd-process-index">{`0${index + 1}`}</span>
                  <span className="wd-process-icon"><Icon size={20} /></span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- WHY ---------------- */}
      <section className="wd-section wd-section-tint">
        <div className="container wd-why-grid">
          <div className="wd-why-copy wd-reveal" data-wd-reveal>
            <span className="wd-eyebrow">
              <ShieldCheck size={14} />
              {t.why.eyebrow}
            </span>
            <h2>{t.why.title}</h2>
            <p>{t.why.text}</p>
            <button type="button" className="wd-btn wd-btn-primary" onClick={scrollToForm}>
              {t.why.cta}
              <ArrowUpRight size={17} />
            </button>
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
                  <p>{point.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- LEAD FORM ---------------- */}
      <section className="wd-section wd-contact-section" ref={formRef}>
        <div className="container">
          <header className="wd-heading wd-reveal" data-wd-reveal>
            <span>{t.form.eyebrow}</span>
            <h2>{t.form.title}</h2>
            <p>{t.form.text}</p>
          </header>

          <div className="wd-form-card wd-reveal" data-wd-reveal>
            <div className="wd-form-head">
              <strong>{t.form.panelTitle}</strong>
              <span className="wd-form-live"><i />{isRtl ? 'متاحين الآن' : 'Available now'}</span>
            </div>

            {sentLink ? (
              <div className="wd-form-sent" role="status">
                <span className="wd-form-sent-icon"><Check size={20} /></span>
                <h3>{t.form.sentTitle}</h3>
                <p>{t.form.sentText}</p>
                <a href={sentLink} target="_blank" rel="noopener noreferrer">{t.form.sentLink}</a>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="wd-form-grid">
                  <label className="wd-field">
                    <span>{t.form.name}</span>
                    <input
                      type="text"
                      value={form.name}
                      onChange={updateField('name')}
                      placeholder={t.form.namePlaceholder}
                      required
                    />
                  </label>
                  <label className="wd-field">
                    <span>{t.form.phone}</span>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={updateField('phone')}
                      placeholder={t.form.phonePlaceholder}
                      required
                    />
                  </label>
                  <label className="wd-field">
                    <span>{t.form.email}</span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={updateField('email')}
                      placeholder={t.form.emailPlaceholder}
                    />
                  </label>
                  <label className="wd-field">
                    <span>{t.form.service}</span>
                    <select value={form.service} onChange={updateField('service')}>
                      {t.form.services.map((service) => (
                        <option value={service} key={service}>{service}</option>
                      ))}
                    </select>
                  </label>
                  <label className="wd-field wd-field-wide">
                    <span>{t.form.message}</span>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={updateField('message')}
                      placeholder={t.form.messagePlaceholder}
                    />
                  </label>
                </div>
                <div className="wd-form-actions">
                  <button type="submit" className="wd-btn wd-btn-primary" disabled={!isReady}>
                    {t.form.submit}
                    <ArrowUpRight size={17} />
                  </button>
                  <p>{t.form.note}</p>
                </div>
              </form>
            )}

            <div className="wd-form-direct">
              <span>{t.form.direct}</span>
              <a href={`tel:${contact.phone}`}>{contact.phone}</a>
              <a href={`mailto:${contact.email}`}><Mail size={14} />{contact.email}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
