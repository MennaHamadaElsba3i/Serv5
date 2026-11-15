import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection({ onOpenConsultation, lang = 'ar' }) {
  const isRtl = lang === 'ar';

  return (
    <section className="world-section about-monument-section relative overflow-hidden" id="about">
      {/* Subtle Atmospheric Blue-Orange Background Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] rounded-full opacity-20 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(36, 90, 167, 0.35) 0%, rgba(234, 88, 12, 0.25) 50%, transparent 75%)'
        }}
        aria-hidden="true"
      />

      <div className="container position-relative z-10">
        <div className="about-monument-stage text-center">
          {/* Giant Monument Watermark "15+" Centered Perfectly in Background with Floating Motion */}
          <div className="about-giant-watermark-wrapper" aria-hidden="true">
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 25 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="about-giant-watermark"
            >
              <motion.span
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                style={{ display: 'inline-block' }}
              >
                15<span className="watermark-plus-orange">+</span>
              </motion.span>
            </motion.div>
          </div>

          {/* Overlapping Foreground Content */}
          <div className="about-content-stack">
            {/* Prominent Centered Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="about-ref-heading"
            >
              {isRtl ? (
                <>
                  <span className="block text-serv5-blue text-sm md:text-base font-bold tracking-wider mb-2">
                    عن الشركة
                  </span>
                  أكثر من 15 عاماً من <span className="text-gradient-ice">الابتكار الرقمي</span> وصناعة{' '}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #245aa7 0%, #ea580c 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'inline-block'
                    }}
                  >
                    حلول المستقبل
                  </span>
                </>
              ) : (
                <>
                  <span className="block text-serv5-blue text-sm md:text-base font-bold tracking-wider mb-2">
                    About Us
                  </span>
                  Over 15 Years of <span className="text-gradient-ice">Digital Innovation</span> &amp;{' '}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #245aa7 0%, #ea580c 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'inline-block'
                    }}
                  >
                    Future Solutions
                  </span>
                </>
              )}
            </motion.h2>

            {/* Refined Centered Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="about-ref-desc"
            >
              {isRtl
                ? 'على مدار أكثر من 16 عاماً من التطوير والابتكار المستمر، لم نكن مجرد مزود للخدمات التقنية، بل الشريك الاستراتيجي الذي يقود كبرى المؤسسات والهيئات الحكومية والشركات الواعدة نحو التحول الرقمي الشامل والريادة السوقية المستدامة.'
                : 'Behind every milestone is a success story. For over 16 years of continuous development and innovation, SERV5 has never been just a service provider—we have been the strategic architectural partner that empowers enterprises and government entities to lead their industries with sustainable digital impact.'}
            </motion.p>

            {/* Living Innovation Horizon Milestones (3 Epoch Cards) */}
            <div className="about-milestones-grid mt-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="about-milestone-card"
              >
                <div className="milestone-year-badge">2008</div>
                <h4 className="milestone-title">
                  {isRtl ? 'التأسيس والأنظمة المؤسسية' : 'Foundation & Architecture'}
                </h4>
                <p className="milestone-desc">
                  {isRtl
                    ? 'انطلاق مسيرة سيرف فايف في بناء أولى منظومات إدارة الشركات وقواعد البيانات الكبرى.'
                    : 'Pioneered custom software architectures and high-availability database engines.'}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="about-milestone-card active-epoch"
              >
                <div className="milestone-year-badge highlight">2016</div>
                <h4 className="milestone-title">
                  {isRtl ? 'الثورة السحابية والموبايل' : 'Cloud & Mobile Ecosystems'}
                </h4>
                <p className="milestone-desc">
                  {isRtl
                    ? 'التوسع الإقليمي عبر تطبيقات الجوال المتطورة ومنصات التجارة الإلكترونية فائقة السرعة.'
                    : 'Scaled regional footprint with real-time iOS/Android apps and omnichannel e-commerce.'}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="about-milestone-card"
              >
                <div className="milestone-year-badge">2024</div>
                <h4 className="milestone-title">
                  {isRtl ? 'الذكاء الاصطناعي و ZATCA' : 'AI, FinTech & Compliance'}
                </h4>
                <p className="milestone-desc">
                  {isRtl
                    ? 'اعتماد الفوترة الإلكترونية المرحلة الثانية وتكاملات ناجز والأنظمة المعمارية الذكية.'
                    : 'Full ZATCA Phase-2 certification, judicial integrations, and edge cloud infrastructure.'}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
