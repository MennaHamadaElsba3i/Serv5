import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Serv5GetInTouch from '../sections/Serv5GetInTouch';
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
  Sparkles
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
  const processRef = useRef(null);
  const workRef = useRef(null);
  const formRef = useRef(null);
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  useEffect(() => {
    document.title = `${isRtl ? 'سيرف فايف' : 'SERV5'} | ${isRtl ? 'تصميم المواقع' : 'Web Design'}`;
  }, [isRtl]);

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
        setActiveProcessStep((current) => {
          const next = Math.min(3, Math.floor(progress * 4));
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
      <section className="wd-section wd-work-section" ref={workRef}>
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
            aria-label={isRtl ? 'معرض الأعمال الرقمية' : 'Digital work gallery'}
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
                      <span>{item.tag}</span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
        <div className="container wd-work-container">
          <div className="wd-work-more wd-reveal" data-wd-reveal>
            <Link to="/portfolio" className="wd-btn wd-btn-ghost">
              {t.work.more}
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- UX ---------------- */}
      <section className="wd-section wd-ux-section">
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
      <section className="wd-section wd-process-section" ref={processRef}>
        <div className="container">
          <header className="wd-heading wd-reveal" data-wd-reveal>
            <span>{t.process.eyebrow}</span>
            <h2>{t.process.title}</h2>
            <p>{t.process.text}</p>
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
                    const angle = (-90 + (isRtl ? -1 : 1) * index * 90) * (Math.PI / 180);
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

      <Serv5GetInTouch lang={lang} sectionRef={formRef} />

    </div>
  );
}
