import React, { useEffect, useState } from 'react';
import {
  ArrowDown, ArrowLeft, ArrowRight, Check, Clock3, FileCheck2,
  Headset, LifeBuoy, LockKeyhole, Mail, Menu, MessageCircle,
  Phone, ShieldCheck, Sparkles, Wrench, X
} from 'lucide-react';
import '../../styles/technical-support.css';

const SUPPORT_PORTAL = 'https://sup.serv5.net/authentication/login';
const QUOTE_FORM = 'https://serv5.com.eg/ar/project-consultation';

const plans = [
  {
    id: 'free', name: 'مجانية', price: 'مجانية', period: '',
    features: [
      'الخدمة المجانية لجميع عملائنا',
      'معالجة أى مشاكل فى النسخ الإحتياطى',
      'حماية الإستضافة ومعالجة مشاكلها',
      'البحث عن أى الفيروسات و إزالتها',
      'معالجة أى مشكلة برمجية',
      'نصائح تعليمية لكيفية إستخدام الموقع'
    ]
  },
  {
    id: 'silver', name: 'الفضية', price: '349', period: '30 يوم',
    features: [
      'معالجة جميع مشاكل الموقع',
      'حماية الإستضافة ومعالجة مشاكلها',
      'البحث عن أى الفيروسات و إزالتها',
      'معالجة أى مشكلة برمجية و إضافة الأكواد البرمجية الخارجية',
      'نصائح تعليمية لكيفية إستخدام الموقع',
      'الصيانة الشاملة لجميع قواعد البيانات',
      'إصلاح أى أخطاء فى القالب نفسه',
      'إمكانية تركيب أى قوالب اخرى',
      'عمل التحديثات البرمجية اللزمة',
      'تقديم إقتراحات و نصائح خلال العمل',
      'معالجة أى مشاكل فى النسخ الإحتياطى',
      'شهادات حماية SSL'
    ]
  },
  {
    id: 'gold', name: 'الذهبية', price: '949', period: '30 يوم', featured: true,
    features: [
      'معالجة جميع مشاكل الموقع',
      'حماية الإستضافة ومعالجة مشاكلها',
      'البحث عن أى الفيروسات و إزالتها',
      'معالجة أى مشكلة برمجية و إضافة الأكواد البرمجية الخارجية',
      'نصائح تعليمية لكيفية إستخدام الموقع',
      'الصيانة الشاملة لجميع قواعد البيانات',
      'إصلاح أى أخطاء فى القالب نفسه',
      'إمكانية تركيب أى قوالب اخرى',
      'عمل التحديثات البرمجية اللزمة',
      'تقديم إقتراحات و نصائح خلال العمل',
      'معالجة أى مشاكل فى النسخ الإحتياطى',
      'شهادات حماية SSL',
      'تقديم عدد لا نهائى من خدمات الصيانة و الدعم',
      'تعريب أى إضافات مدفوعة و تركيبها',
      'إصلاح الأخطاء والمشاكل البرمجية للقوالب الخارجية',
      'دعم مميز وسريع و إصلاح أى مشاكل فى أقل وقت ممكن',
      'معالجة جميع أخطاء وعيوب التصميم'
    ]
  }
];

const benefits = [
  {
    icon: Wrench,
    title: 'توفير الدعم الكامل',
    description: 'لدينا القدرات الفنية والمميزة فى إصلاح جميع التقنيات فى وقت قياسى و الرد السريع على أى إستفسارات .'
  },
  {
    icon: ShieldCheck,
    title: 'ضمان الإستقرار لموقعك',
    description: 'نضمن لك الثبات و الإستقرار لموقعك على الإنترنت بوساطة خططنا المصممة خصيصا للدعم الفنى .'
  },
  {
    icon: Sparkles,
    title: 'تكلفة مميزة',
    description: 'نقدم أقوى عروض وباقات الدعم الفنى بأفضل الأسعار بالإضافة إلى إمتلاكنا الخبره التى تمكنا من تطوير جميع خدماتنا من الدعم الفنى .'
  },
  {
    icon: Clock3,
    title: 'العمل على مدار الساغة',
    description: 'نقدم لكم خدمة الدعم الفنى طوال اليوم و الرد خلال من 15 إلى 20 دقيقة من خدمة العملاء على جميع استفساراتك .'
  },
  {
    icon: FileCheck2,
    title: 'تقرير شهرى',
    description: 'نقدم لك تقرير شهرى مفصل لما تم تنفيذه من خلال خدمة العملاء .'
  },
  {
    icon: LockKeyhole,
    title: 'عقود رسمية',
    description: 'نوفر عقود رسمية وموثقة من الجهات الحكومية لضمان كافة حقوقك الرسمية .'
  }
];

export default function TechnicalSupportPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'الدعم الفني | سيرف فايف';
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <div className="support-page" dir="rtl" lang="ar">
      <div className="support-topline">
        <span className="support-status-dot" />
        <span>مركز الدعم الفني — نحن هنا لمساعدتك</span>
        <a href="tel:00201288863631"><Phone size={14} /> 00201288863631</a>
      </div>

      <header className="support-nav">
        <a className="support-brand" href="https://serv5.com.eg/ar" aria-label="سيرف فايف - الرئيسية">
          <span className="support-brand-mark">S<span>5</span></span>
          <span className="support-brand-name">سيرف فايف<small>SERV5 · WEB SOLUTIONS</small></span>
        </a>
        <button className="support-menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-label="فتح القائمة">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'support-nav-links is-open' : 'support-nav-links'}>
          <a href="https://serv5.com.eg/ar">الرئيسية</a>
          <a href="#benefits" onClick={() => setMenuOpen(false)}>مميزات الدعم</a>
          <a href="#plans" onClick={() => setMenuOpen(false)}>خطط الدعم الفني</a>
          <a href="https://sup.serv5.net" className="support-login-link"><Headset size={16} /> دخول العملاء</a>
        </nav>
      </header>

      <main>
        <section className="support-hero">
          <div className="support-hero-grid" aria-hidden="true" />
          <div className="support-hero-orb support-orb-one" aria-hidden="true" />
          <div className="support-hero-orb support-orb-two" aria-hidden="true" />
          <div className="support-hero-inner">
            <div className="support-kicker"><LifeBuoy size={16} /> دعم فني بخبرة 11 عاماً</div>
            <h1>الدعم الفني<br /><span>اللي يخلّي موقعك شغّال.</span></h1>
            <p>إذا كانت تواجهك مشكلة تقنية يمكنك التواصل مع خدمة العملاء لنقدم لك المساعدة والدعم المميز. لدينا خبرة 11 عاما فى حل جميع المشاكل التقنية بالإضافة إلى الرد على جميع الإستفسارات و نقدم لك النصائح والملاحظات على تلك المشاكل .</p>
            <div className="support-hero-actions">
              <a className="support-button support-button-primary" href={SUPPORT_PORTAL}>افتح تذكرة دعم <ArrowLeft size={18} /></a>
              <a className="support-button support-button-ghost" href="#plans">استعرض الخطط <ArrowDown size={17} /></a>
            </div>
            <div className="support-hero-proof">
              <span><Clock3 size={15} /> رد خلال 15–20 دقيقة</span>
              <span><ShieldCheck size={15} /> دعم فني طوال اليوم</span>
            </div>
          </div>
          <div className="support-hero-art" aria-hidden="true">
            <div className="support-art-ring ring-a" />
            <div className="support-art-ring ring-b" />
            <div className="support-art-core"><Headset size={78} strokeWidth={1.2} /></div>
            <div className="support-float-card support-float-card-top"><span className="support-mini-icon"><Check size={16} /></span><span>موقعك يعمل بكفاءة</span></div>
            <div className="support-float-card support-float-card-bottom"><span className="support-mini-pulse" /><span>فريق الدعم متاح الآن</span></div>
          </div>
        </section>

        <section className="support-benefits section-wrap" id="benefits">
          <div className="support-section-heading">
            <span className="support-eyebrow">معاك في كل خطوة</span>
            <h2>دعم يعتمد عليه،<br /><span>في كل وقت.</span></h2>
            <p>حلول فنية متكاملة تساعد على استمرار موقعك بأفضل أداء.</p>
          </div>
          <div className="support-benefit-grid">
            {benefits.map(({ icon: Icon, title, description }, index) => (
              <article className="support-benefit-card" key={title} style={{ '--card-index': index }}>
                <span className="support-benefit-icon"><Icon size={22} strokeWidth={1.7} /></span>
                <span className="support-benefit-index">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="support-plans" id="plans">
          <div className="section-wrap">
            <div className="support-section-heading support-plans-heading">
              <span className="support-eyebrow">اختار اللي يناسبك</span>
              <h2>خطط الدعم الفني<br /><span>من سيرف فايف</span></h2>
              <p>اختر خطة الدعم الفني التي تناسبك</p>
            </div>
            <div className="support-plan-grid">
              {plans.map((plan) => (
                <article className={`support-plan-card ${plan.featured ? 'is-featured' : ''}`} key={plan.id}>
                  {plan.featured && <div className="support-plan-badge"><Sparkles size={13} /> دعم متكامل</div>}
                  <div className="support-plan-top"><span className={`support-plan-symbol symbol-${plan.id}`}>{plan.id === 'free' ? <LifeBuoy size={20} /> : plan.id === 'silver' ? <ShieldCheck size={20} /> : <Sparkles size={20} />}</span><h3>{plan.name}</h3></div>
                  <div className="support-plan-price"><strong>{plan.price}</strong>{plan.id !== 'free' && <span>ريال</span>}</div>
                  {plan.period && <div className="support-plan-period">{plan.period}</div>}
                  <ul>{plan.features.map((feature) => <li key={feature}><Check size={15} /> <span>{feature}</span></li>)}</ul>
                  <a className="support-plan-cta" href={QUOTE_FORM}>استفسار عن السعر <ArrowLeft size={16} /></a>
                </article>
              ))}
            </div>
            <p className="support-plan-note">تُستكمل طلبات الخطط عبر نموذج طلب الاستشارة الحالي.</p>
          </div>
        </section>

        <section className="support-contact-band">
          <div className="support-contact-copy">
            <span className="support-eyebrow">محتاج مساعدة حالاً؟</span>
            <h2>فريق الدعم جاهز<br />يساعدك.</h2>
            <p>تواصل معنا بالطريقة الأنسب لك، أو سجّل دخولك لمتابعة طلبات الدعم.</p>
            <div className="support-contact-actions">
              <a className="support-button support-button-primary" href={SUPPORT_PORTAL}>دخول مركز الدعم <ArrowLeft size={17} /></a>
              <a className="support-button support-button-outline" href="https://wa.me/201288863631"><MessageCircle size={17} /> واتساب</a>
            </div>
          </div>
          <div className="support-contact-details">
            <a href="tel:00201288863631"><span><Phone size={18} /></span><div><small>اتصل بنا</small><strong dir="ltr">00201288863631</strong></div><ArrowLeft size={16} /></a>
            <a href="mailto:sales@serv5.com"><span><Mail size={18} /></span><div><small>البريد الإلكتروني</small><strong>sales@serv5.com</strong></div><ArrowLeft size={16} /></a>
            <div><span><LifeBuoy size={18} /></span><div><small>العنوان</small><strong>مصر - المنصورة - شارع قناة السويس - اعلى صيدلية د/ رامي طه</strong></div></div>
          </div>
        </section>
      </main>

      <footer className="support-footer">
        <a className="support-brand" href="https://serv5.com.eg/ar">
          <span className="support-brand-mark">S<span>5</span></span>
          <span className="support-brand-name">سيرف فايف<small>SERV5 · WEB SOLUTIONS</small></span>
        </a>
        <span>جميع الحقوق محفوظة لسيرف فايف © 2026</span>
        <a href={SUPPORT_PORTAL}>مركز الدعم الفني <ArrowRight size={15} /></a>
      </footer>
    </div>
  );
}
