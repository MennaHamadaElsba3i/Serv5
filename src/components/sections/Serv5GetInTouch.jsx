import React, { useEffect, useState } from 'react';
import HeroAmbientBackground from '../ui/HeroAmbientBackground';

const headquarters = {
  name: 'SERV5 Mansoura Headquarters',
  address: 'Egypt - Mansoura - Suez Canal St. - Engineers Tower (above Dr. Ramy pharmacy)',
  addressAr: 'جمهورية مصر العربية - المنصورة - شارع قناة السويس - برج المهندسين (أعلى صيدلية د. رامي)',
  googleMapsUrl: 'https://maps.google.com/maps?q=%D8%B3%D9%8A%D8%B1%D9%81+%D9%81%D8%A7%D9%8A%D9%81+%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA+%D8%A7%D9%84%D9%88%D9%8A%D8%A8&t=&z=16&ie=UTF8&iwloc=&output=embed',
  directionsUrl: 'https://maps.google.com/?q=سيرف+فايف+لخدمات+الويب+المنصورة',
  phone: '00201288863831',
  email: 'sales@serv5.com',
  whatsapp: '201288863831',
  hoursAr: 'السبت - الخميس: 9:00 ص - 6:00 م',
  hoursEn: 'Sat - Thu: 9:00 AM - 6:00 PM'
};

const examples = {
  ar: ['متجر إلكتروني يبيع أونلاين', 'تطبيق لعملائي', 'موقع جديد لشركتي', 'نظام إداري لفروعي'],
  en: ['An online store that sells', 'An app for my customers', 'A new website for my company', 'A system for my branches']
};

const copy = {
  ar: {
    eyebrow: 'الخطوة الأخيرة',
    title: 'فكرتك في سطر واحد.',
    titleAccent: 'والباقي علينا.',
    intro: 'مش محتاج بريف ولا عرض تقديمي. اكتب السطر، ابعت، ونتكلم.',
    chatName: 'فريق SERV5',
    chatSub: 'بنرد خلال 24 ساعة عمل',
    online: 'متاحين الآن',
    greeting: 'إيه الفكرة اللي في دماغك؟ سطر واحد يكفي 👇',
    ideaLabel: 'الفكرة',
    ideaPlaceholder: 'مثال: ',
    nameLabel: 'اسمك',
    namePlaceholder: 'اسمك',
    phoneLabel: 'رقمك / واتساب',
    meterEmpty: 'فاضل 3 خانات وخلاص',
    meterOne: 'فاضل خانتين',
    meterTwo: 'فاضلة خانة واحدة',
    meterReady: 'تمام، الرسالة جاهزة',
    send: 'ابعت الفكرة',
    note: 'هيفتح واتساب برسالة جاهزة تراجعها قبل الإرسال.',
    previewLabel: 'هتتبعت كده على واتساب',
    sent: 'فتحنا واتساب برسالتك ✅',
    sentFallback: 'لو مقفول، افتح الرابط ده',
    sideTitle: 'أو كلّمنا مباشرة',
    call: 'اتصال',
    whatsapp: 'واتساب',
    email: 'إيميل',
    hours: 'مواعيد العمل',
    location: 'المقر الرئيسي — المنصورة',
    directions: 'الاتجاهات'
  },
  en: {
    eyebrow: 'ONE LAST STEP',
    title: 'Your idea in one line.',
    titleAccent: 'We handle the rest.',
    intro: 'No brief, no deck. Write the line, send it, and we talk.',
    chatName: 'SERV5 team',
    chatSub: 'We reply within 24 business hours',
    online: 'Online now',
    greeting: 'What is the idea in your head? One line is enough 👇',
    ideaLabel: 'The idea',
    ideaPlaceholder: 'e.g. ',
    nameLabel: 'Your name',
    namePlaceholder: 'Your name',
    phoneLabel: 'Phone / WhatsApp',
    meterEmpty: '3 boxes left, that’s it',
    meterOne: '2 boxes left',
    meterTwo: '1 box left',
    meterReady: 'All set, your message is ready',
    send: 'Send the idea',
    note: 'WhatsApp opens with a prepared message you review first.',
    previewLabel: 'This is what gets sent on WhatsApp',
    sent: 'WhatsApp opened with your message ✅',
    sentFallback: 'If it did not open, use this link',
    sideTitle: 'Or talk to us directly',
    call: 'Call',
    whatsapp: 'WhatsApp',
    email: 'Email',
    hours: 'Working hours',
    location: 'Headquarters — Mansoura',
    directions: 'Directions'
  }
};

export default function Serv5GetInTouch({ lang = 'ar', sectionRef }) {
  const isRtl = lang === 'ar';
  const t = copy[isRtl ? 'ar' : 'en'];
  const list = examples[isRtl ? 'ar' : 'en'];

  const [form, setForm] = useState({ idea: '', name: '', phone: '' });
  const [exampleIndex, setExampleIndex] = useState(0);
  const [sentLink, setSentLink] = useState('');

  useEffect(() => {
    if (form.idea.trim()) return undefined;
    const timer = window.setInterval(() => {
      setExampleIndex((index) => (index + 1) % list.length);
    }, 2800);
    return () => window.clearInterval(timer);
  }, [form.idea, list.length]);

  const updateField = (key, value) => setForm((current) => ({ ...current, [key]: value }));

  const checks = [Boolean(form.idea.trim()), Boolean(form.name.trim()), Boolean(form.phone.trim())];
  const filled = checks.filter(Boolean).length;
  const ready = filled === checks.length;

  const buildMessage = () => [
    isRtl ? 'مرحبًا SERV5 👋' : 'Hello SERV5 👋',
    isRtl ? `أنا ${form.name.trim()}.` : `I am ${form.name.trim()}.`,
    isRtl ? `فكرتي: ${form.idea.trim()}` : `My idea: ${form.idea.trim()}`,
    isRtl ? `رقمي: ${form.phone.trim()}` : `My number: ${form.phone.trim()}`
  ].join('\n');

  const whatsappLink = `https://wa.me/${headquarters.whatsapp}?text=${encodeURIComponent(buildMessage())}`;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!ready) return;
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
    setSentLink(whatsappLink);
  };

  const meterText = ready
    ? t.meterReady
    : filled === 0
      ? t.meterEmpty
      : filled === 1
        ? t.meterOne
        : t.meterTwo;

  return (
    <section ref={sectionRef} className="serv5-revamped-section serv5-hello-section" id="contact" dir={isRtl ? 'rtl' : 'ltr'}>
      <HeroAmbientBackground variant="contact" />
      <div className="serv5-container">
        <header className="serv5-hello-header">
          <span className="serv5-hello-eyebrow">{t.eyebrow}</span>
          <h2 className="serv5-hello-title">
            {t.title} <span>{t.titleAccent}</span>
          </h2>
          <p>{t.intro}</p>
        </header>

        <div className="serv5-hello-grid">
          {/* ONE CARD · THREE BOXES · ONE BUTTON */}
          <div className="serv5-hello-chat">
            <div className="serv5-hello-chat-top">
              <span className="serv5-hello-avatar">
                <img src="/serv5-official-logo.webp" alt="SERV5" />
              </span>
              <span className="serv5-hello-chat-id">
                <strong>{t.chatName}</strong>
                <small>{t.chatSub}</small>
              </span>
              <span className="serv5-hello-live"><i aria-hidden="true" />{t.online}</span>
            </div>

            <form className="serv5-hello-body" onSubmit={handleSubmit}>
              <p className="serv5-hello-greeting">{t.greeting}</p>

              <label className={`serv5-hello-field serv5-hello-field-idea ${checks[0] ? 'is-ready' : ''}`}>
                <span className="serv5-hello-field-label">
                  <i className="serv5-hello-tick" aria-hidden="true" />
                  {t.ideaLabel}
                </span>
                <textarea
                  rows={2}
                  required
                  value={form.idea}
                  onChange={(event) => updateField('idea', event.target.value)}
                  placeholder={`${t.ideaPlaceholder}${list[exampleIndex]}`}
                />
              </label>

              <div className="serv5-hello-row">
                <label className={`serv5-hello-field ${checks[1] ? 'is-ready' : ''}`}>
                  <span className="serv5-hello-field-label">
                    <i className="serv5-hello-tick" aria-hidden="true" />
                    {t.nameLabel}
                  </span>
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(event) => updateField('name', event.target.value)}
                    placeholder={t.namePlaceholder}
                  />
                </label>

                <label className={`serv5-hello-field ${checks[2] ? 'is-ready' : ''}`}>
                  <span className="serv5-hello-field-label">
                    <i className="serv5-hello-tick" aria-hidden="true" />
                    {t.phoneLabel}
                  </span>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(event) => updateField('phone', event.target.value)}
                    placeholder="+20 1XX XXX XXXX"
                  />
                </label>
              </div>

              {form.idea.trim() && (
                <div className="serv5-hello-preview">
                  <small>{t.previewLabel}</small>
                  <span>{form.idea.trim()}</span>
                </div>
              )}

              <div className="serv5-hello-meter">
                <span className="serv5-hello-meter-track" aria-hidden="true">
                  <span style={{ width: `${(filled / checks.length) * 100}%` }} />
                </span>
                <span className="serv5-hello-meter-text" aria-live="polite">{meterText}</span>
              </div>

              <button type="submit" className="serv5-hello-send" disabled={!ready}>
                <span>{t.send}</span>
                <i aria-hidden="true">↗</i>
              </button>

              <p className="serv5-hello-note">{t.note}</p>

              {sentLink && (
                <div className="serv5-hello-sent" role="status">
                  <strong>{t.sent}</strong>
                  <a href={sentLink} target="_blank" rel="noopener noreferrer">{t.sentFallback}</a>
                </div>
              )}
            </form>
          </div>

          {/* DIRECT LINES + MAP */}
          <aside className="serv5-hello-side">
            <div className="serv5-hello-side-card">
              <strong className="serv5-hello-side-title">{t.sideTitle}</strong>

              <a className="serv5-hello-side-link" href={`tel:${headquarters.phone}`}>
                <span className="serv5-hello-side-tag">{t.call}</span>
                <span dir="ltr">{headquarters.phone}</span>
              </a>
              <a className="serv5-hello-side-link" href={`https://wa.me/${headquarters.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <span className="serv5-hello-side-tag">{t.whatsapp}</span>
                <span dir="ltr">+20 128 886 3831</span>
              </a>
              <a className="serv5-hello-side-link" href={`mailto:${headquarters.email}`}>
                <span className="serv5-hello-side-tag">{t.email}</span>
                <span dir="ltr">{headquarters.email}</span>
              </a>

              <p className="serv5-hello-side-hours">
                <span>{t.hours}</span>
                {isRtl ? headquarters.hoursAr : headquarters.hoursEn}
              </p>
            </div>

            <div className="serv5-hello-map">
              <div className="serv5-hello-map-head">
                <strong>{t.location}</strong>
                <a href={headquarters.directionsUrl} target="_blank" rel="noopener noreferrer">{t.directions} ↗</a>
              </div>
              <iframe
                src={headquarters.googleMapsUrl}
                title={headquarters.name}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
