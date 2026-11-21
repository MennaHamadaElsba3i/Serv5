import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const headquarters = {
  name: 'SERV5 Mansoura Headquarters',
  address: 'Egypt - Mansoura - Suez Canal St. - Engineers Tower (above Dr. Ramy pharmacy)',
  addressAr: 'جمهورية مصر العربية - المنصورة - شارع قناة السويس - برج المهندسين (أعلى صيدلية د. رامي)',
  googleMapsUrl: 'https://maps.google.com/maps?q=%D8%B3%D9%8A%D8%B1%D9%81+%D9%81%D8%A7%D9%8A%D9%81+%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA+%D8%A7%D9%84%D9%88%D9%8A%D8%A8&t=&z=16&ie=UTF8&iwloc=&output=embed',
  directionsUrl: 'https://maps.google.com/?q=سيرف+فايف+لخدمات+الويب+المنصورة',
  phone: '00201288863831',
  email: 'sales@serv5.com',
  whatsapp: '201288863831',
  hoursAr: 'السبت - الخميس: 9:00 ص - 6:00 م (الدعم الفني السحابي 24/7)',
  hoursEn: 'Sat - Thu: 9:00 AM - 6:00 PM (Cloud NOC: 24/7/365)'
};

const solutions = [
  { id: 'web', ar: 'موقع أو منصة ويب', en: 'Web platform', outputAr: 'واجهة · صفحات · تكامل', outputEn: 'INTERFACE · PAGES · INTEGRATION', point: [50, 9] },
  { id: 'mobile', ar: 'تطبيق جوال', en: 'Mobile application', outputAr: 'شاشات · تفاعل · خدمات', outputEn: 'SCREENS · INTERACTION · SERVICES', point: [81, 28] },
  { id: 'ecommerce', ar: 'تجارة إلكترونية', en: 'E-commerce', outputAr: 'منتجات · دفع · توصيل', outputEn: 'CATALOG · CHECKOUT · DELIVERY', point: [70, 88] },
  { id: 'erp', ar: 'نظام إداري / ERP', en: 'Administrative system / ERP', outputAr: 'عمليات · بيانات · فروع', outputEn: 'OPERATIONS · DATA · BRANCHES', point: [30, 88] },
  { id: 'custom', ar: 'برمجيات مخصصة', en: 'Custom software', outputAr: 'منطق · وحدات · ربط', outputEn: 'LOGIC · MODULES · CONNECTIONS', point: [19, 28] }
];

function TransformationMachine({ selectedSolution, setSelectedSolution, isRtl }) {
  const selected = solutions.find(({ id }) => id === selectedSolution) || solutions[0];

  return (
    <div className={`serv5-transform-stage serv5-transform-${selectedSolution}`}>
      <div className="serv5-transform-atmosphere" aria-hidden="true" />
      <svg className="serv5-transform-wiring" viewBox="0 0 1000 500" preserveAspectRatio="none" aria-hidden="true">
        <ellipse className="serv5-transform-orbit orbit-outer" cx="500" cy="250" rx="390" ry="198" />
        <ellipse className="serv5-transform-orbit orbit-inner" cx="500" cy="250" rx="238" ry="122" />
        {solutions.map((solution) => {
          const [x, y] = solution.point;
          const nodeX = x * 10;
          const nodeY = y * 5;
          return (
            <path
              key={solution.id}
              className={`serv5-transform-wire ${selectedSolution === solution.id ? 'is-live' : ''}`}
              d={`M500 250 C ${500 + (nodeX - 500) * 0.4} ${250 + (nodeY - 250) * 0.08}, ${nodeX} ${nodeY + (nodeY < 250 ? 25 : -25)}, ${nodeX} ${nodeY}`}
            />
          );
        })}
      </svg>

      <div className="serv5-transform-core" role="group" aria-label={isRtl ? 'نواة سيرف فايف' : 'SERV5 transformation core'}>
        <span className="serv5-transform-core-orbit core-orbit-one" aria-hidden="true" />
        <span className="serv5-transform-core-orbit core-orbit-two" aria-hidden="true" />
        <div className="serv5-transform-core-mark">
          <img src="/serv5-official-logo.webp" alt="SERV5" />
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={selected.id}
            className="serv5-transform-output"
            initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -5, filter: 'blur(4px)' }}
            transition={{ duration: 0.24 }}
          >
            <strong>{isRtl ? selected.ar : selected.en}</strong>
            <span>{isRtl ? selected.outputAr : selected.outputEn}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="serv5-transform-readout readout-start" aria-hidden="true">{isRtl ? 'إشارة الفكرة' : 'IDEA SIGNAL'} <i /></div>
      <div className="serv5-transform-readout readout-end" aria-hidden="true"><i /> {isRtl ? 'شكل رقمي' : 'DIGITAL FORM'}</div>

      <div className="serv5-transform-nodes" role="group" aria-label={isRtl ? 'اختيار نوع الحل الرقمي' : 'Choose a digital solution'}>
        {solutions.map((solution, index) => (
          <button
            key={solution.id}
            type="button"
            className={`serv5-transform-node node-${solution.id} ${selectedSolution === solution.id ? 'is-selected' : ''}`}
            style={{ '--node-x': `${solution.point[0]}%`, '--node-y': `${solution.point[1]}%` }}
            onClick={() => setSelectedSolution(solution.id)}
            aria-pressed={selectedSolution === solution.id}
          >
            <span className="serv5-transform-node-number">0{index + 1}</span>
            <span className="serv5-transform-node-title">{isRtl ? solution.ar : solution.en}</span>
            <span className="serv5-transform-node-dot" aria-hidden="true" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Serv5GetInTouch({ lang = 'ar' }) {
  const isRtl = lang === 'ar';
  const [selectedSolution, setSelectedSolution] = useState('web');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const selected = solutions.find(({ id }) => id === selectedSolution) || solutions[0];

  const updateForm = (key, value) => setFormData((current) => ({ ...current, [key]: value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    const summary = [
      isRtl ? 'مرحباً SERV5، أود مناقشة مشروع رقمي.' : 'Hello SERV5, I would like to discuss a digital project.',
      `${isRtl ? 'نوع الحل' : 'Solution'}: ${isRtl ? selected.ar : selected.en}`,
      `${isRtl ? 'الاسم' : 'Name'}: ${formData.name}`,
      `${isRtl ? 'الهاتف' : 'Phone'}: ${formData.phone}`,
      `${isRtl ? 'البريد الإلكتروني' : 'Email'}: ${formData.email}`,
      `${isRtl ? 'وصف المشروع' : 'Project brief'}: ${formData.message}`
    ].join('\n');

    window.open(`https://wa.me/${headquarters.whatsapp}?text=${encodeURIComponent(summary)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="serv5-revamped-section serv5-contact-section serv5-idea-machine" id="contact" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="serv5-container">
        <motion.header
          className="serv5-machine-header"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <span className="serv5-machine-eyebrow"><span />{isRtl ? 'من الفكرة إلى التنفيذ' : 'IDEA IN / DIGITAL SOLUTION OUT'}</span>
          <h2>{isRtl ? 'كل فكرة لها شكلها.' : 'Every idea has a shape.'} <span>{isRtl ? 'خلّينا نكتشفه.' : 'Let’s find it.'}</span></h2>
          <p>{isRtl ? 'اختار نوع الحل. شاهد ملامحه تتجمع حول نواة واحدة، ثم أرسل لنا إشارتك.' : 'Choose a solution. Watch its pieces gather around one core, then send us your signal.'}</p>
        </motion.header>

        <motion.div
          className="serv5-machine-universe"
          initial={{ opacity: 0, scale: 0.985 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <TransformationMachine selectedSolution={selectedSolution} setSelectedSolution={setSelectedSolution} isRtl={isRtl} />

          <form className="serv5-transmission-rail" onSubmit={handleSubmit}>
            <div className="serv5-transmission-heading">
              <span className="serv5-transmission-index">TRANSMISSION / 01</span>
              <strong>{isRtl ? 'أرسل الفكرة إلى النواة' : 'Send your idea into the system'}</strong>
              <span className="serv5-transmission-service">{isRtl ? selected.ar : selected.en}</span>
            </div>

            <div className="serv5-transmission-fields">
              <label>
                <span>{isRtl ? 'الاسم' : 'NAME'}</span>
                <input type="text" autoComplete="name" required value={formData.name} onChange={(event) => updateForm('name', event.target.value)} placeholder={isRtl ? 'اسمك' : 'Your name'} />
              </label>
              <label>
                <span>{isRtl ? 'الهاتف / واتساب' : 'PHONE / WHATSAPP'}</span>
                <input type="tel" dir="ltr" autoComplete="tel" required value={formData.phone} onChange={(event) => updateForm('phone', event.target.value)} placeholder="+20 1XX XXX XXXX" />
              </label>
              <label>
                <span>{isRtl ? 'البريد الإلكتروني' : 'EMAIL'}</span>
                <input type="email" dir="ltr" autoComplete="email" required value={formData.email} onChange={(event) => updateForm('email', event.target.value)} placeholder="you@company.com" />
              </label>
              <label className="transmission-message">
                <span>{isRtl ? 'وصف الفكرة' : 'THE IDEA'}</span>
                <textarea required rows={2} value={formData.message} onChange={(event) => updateForm('message', event.target.value)} placeholder={isRtl ? 'ما الذي تريد أن ينجزه الحل؟' : 'What do you want this solution to make possible?'} />
              </label>
              <button type="submit" className="serv5-transmission-submit">
                <span>{isRtl ? 'تابع إلى واتساب' : 'Continue to WhatsApp'}</span>
                <span className="transmission-arrow" aria-hidden="true">↗</span>
              </button>
            </div>
            <p className="serv5-transmission-note">{isRtl ? 'يفتح واتساب برسالة جاهزة لمراجعتها وإرسالها.' : 'WhatsApp opens with a prepared message for you to review and send.'}</p>
          </form>
        </motion.div>

        <div className="serv5-machine-contact-rail">
          <a href={`tel:${headquarters.phone}`}><span dir="ltr">{headquarters.phone}</span></a>
          <a href={`mailto:${headquarters.email}`}>{headquarters.email}</a>
          <a href={`https://wa.me/${headquarters.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <span className="serv5-machine-hours">{isRtl ? headquarters.hoursAr : headquarters.hoursEn}</span>
          <a className="serv5-machine-location" href={headquarters.directionsUrl} target="_blank" rel="noopener noreferrer">{isRtl ? headquarters.addressAr : headquarters.address}</a>
        </div>

        <div className="serv5-machine-map">
          <div className="serv5-machine-map-label"><strong>{isRtl ? 'المقر الرئيسي — المنصورة' : headquarters.name}</strong><a href={headquarters.directionsUrl} target="_blank" rel="noopener noreferrer">{isRtl ? 'الاتجاهات' : 'Directions'} ↗</a></div>
          <iframe src={headquarters.googleMapsUrl} title={headquarters.name} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        </div>
      </div>
    </section>
  );
}
