import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail } from 'lucide-react';

export default function FaqSection({ lang = 'ar' }) {
  const isRtl = lang === 'ar';
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = isRtl
    ? [
        {
          q: 'ما هي الخدمات التي تقدمها شركة SERV5؟',
          a: 'نقدم منظومة متكاملة تشمل تصميم وبرمجة المواقع والمتاجر الإلكترونية، تطوير تطبيقات الجوال (iOS & Android)، حلول الحوسبة السحابية والاستضافة الآمنة، إدارة الحملات التسويقية المتطورة (Google, TikTok, Snapchat, Meta)، وتحسين محركات البحث (SEO).'
        },
        {
          q: 'كيف تضمنون سرعة واستقرار الأنظمة وتطبيقات الجوال؟',
          a: 'نعتمد على بنية تحتية سحابية فائقة السرعة مع خوادم NVMe SSD وشهادات أمان متقدمة، مع الالتزام بأفضل ممارسات هندسة البرمجيات (Clean Code & Microservices) لتحقيق درجة Core Web Vitals 100/100 واستقرار بنسبة 99.98%.'
        },
        {
          q: 'ما هي المدة الزمنية المتوقعة لتنفيذ وإطلاق مشروعي؟',
          a: 'تتفاوت المدة بحسب حجم ونطاق المشروع؛ تبدأ المواقع والمتاجر السريعة من 7 إلى 14 يوم عمل، بينما تتطلب الأنظمة السحابية والتطبيقات المخصصة من 3 إلى 6 أسابيع مع خطة تسليم مرحلية تتيح لك معاينة التقدم أولاً بأول.'
        },
        {
          q: 'هل تقدمون عقوداً رسمية موثقة ودعماً فنياً بعد الإطلاق؟',
          a: 'نعم بكل تأكيد، يتم توقيع عقود رسمية موثقة تضمن حقوق الملكية الفكرية والشروط الجزائية ومواعيد التسليم، ونوفر فترات ضمان مجانية مع دعم فني وصيانة استباقية 24/7 لضمان استمرارية أعمالك.'
        },
        {
          q: 'كيف يحقق لي التسويق الرقمي مع SERV5 أعلى عائد على الاستثمار؟',
          a: 'نتبع استراتيجية التسويق المبني على الأداء (Performance Marketing)، حيث نقوم بدراسة المنافسين، وتحديد الجمهور الأكثر رغبة بالشراء، وتصميم إعلانات جذابة وتجربة هبوط عالية التحويل تضمن لك مضاعفة المبيعات وأعلى عائد إنفاق إعلاني (ROAS).'
        }
      ]
    : [
        {
          q: 'What services does SERV5 provide?',
          a: 'We deliver an integrated digital ecosystem covering custom websites and e-commerce platforms, native and hybrid mobile apps (iOS & Android), secure cloud hosting, performance marketing (Google, TikTok, Snapchat, Meta), and technical SEO.'
        },
        {
          q: 'How do you ensure high speed and stability for systems and mobile apps?',
          a: 'We run on high-speed NVMe SSD cloud infrastructure with advanced SSL security and follow clean software engineering practices to achieve top Core Web Vitals performance and 99.98% uptime.'
        },
        {
          q: 'What is the expected timeline to build and launch a project?',
          a: 'Timelines depend on project scope: standard websites and stores typically launch within 7 to 14 business days, while custom mobile apps and cloud platforms take 3 to 6 weeks with milestone previews.'
        },
        {
          q: 'Do you provide official contracts and post-launch technical support?',
          a: 'Yes. Every project is backed by an official contract protecting intellectual property and delivery milestones, along with warranty coverage and 24/7 proactive technical support.'
        },
        {
          q: 'How does digital marketing with SERV5 maximize return on investment?',
          a: 'We follow a data-driven Performance Marketing methodology—analyzing competitors, targeting high-intent buyers, and pairing high-converting landing pages with optimized ad campaigns to maximize ROAS.'
        }
      ];

  return (
    <section className="faq-section" id="faq" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="container">
        <div className="faq-card">
          {/* FAQ BADGE & ICON */}
          <div className="faq-badge-header">
            <div className="faq-envelope-box">
              <Mail size={26} className="faq-envelope-icon" />
            </div>
            <span className="faq-tag">FAQ</span>
            <h2 className="faq-title">{isRtl ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}</h2>
            <p className="faq-subtitle">
              {isRtl
                ? 'إجابات شفافة ومباشرة على أكثر الاستفسارات تكراراً'
                : 'Clear, direct answers to the most common inquiries'}
            </p>
          </div>

          {/* ACCORDION LIST */}
          <div className="faq-list">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <motion.div
                  key={faq.q}
                  className={`faq-item ${isOpen ? 'active' : ''}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.36,
                    delay: idx * 0.07,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <button
                    type="button"
                    className="faq-question-row"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                  >
                    <span className="faq-question-main">
                      <span className="faq-index-badge">{`0${idx + 1}`}</span>
                      <span className="faq-question-text">{faq.q}</span>
                    </span>
                    <span className="faq-toggle-btn" aria-hidden="true">
                      <ChevronDown
                        size={18}
                        className={`faq-chevron ${isOpen ? 'rotated' : ''}`}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="faq-answer"
                        className="faq-answer-motion"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="faq-answer-row">
                          <p className="faq-answer-text">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
