import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, ArrowUpRight, Sparkles } from 'lucide-react';
import { serv5Data } from '../../data/serv5Data';

/*  ─────────────────────────────────────────────────────────────────
    SERV5 BLOG SECTION — CINEMATIC 3-ROW CURTAIN REVEAL
    ✦ Row 1 cascades DOWN from above  (like a falling curtain panel)
    ✦ Row 2 rises   UP   from below   (counter-direction lift)
    ✦ Row 3 cascades DOWN from above  (matching row 1)
    All 3 rows settle into a crisp 3 × 3 grid.
    ───────────────────────────────────────────────────────────────── */

const ROW_VARIANTS = {
  hidden0: { y: -120, opacity: 0, filter: 'blur(8px)' },   // row 1 & 3: drop from above
  hidden1:  { y:  120, opacity: 0, filter: 'blur(8px)' },   // row 2: rise from below
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 70, damping: 16 }
  }
};

/* Individual card: stagger within row + subtle scale micro-spring */
const CARD_VARIANTS = {
  hidden:  { opacity: 0, scale: 0.88 },
  visible: (colIdx) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 18,
      delay: colIdx * 0.09
    }
  })
};

function BlogCard({ post, colIdx }) {
  return (
    <motion.article
      variants={CARD_VARIANTS}
      initial="hidden"
      animate="visible"
      custom={colIdx}
      className="blog-card-cell"
    >
      {/* Accent top bar */}
      <div
        className="blog-card-top-bar"
        style={{ background: `linear-gradient(90deg, ${post.accentColor}, #38bdf8)` }}
      />

      {/* Icon badge */}
      <div className="blog-card-icon-wrap" style={{ color: post.accentColor }}>
        <span className="blog-card-emoji">{post.icon}</span>
      </div>

      {/* Meta: category + read time */}
      <div className="blog-card-meta">
        <span className="blog-card-category" style={{ color: post.accentColor }}>
          {post.category}
        </span>
        <span className="blog-card-readtime">
          <Clock size={11} />
          {post.readTime}
        </span>
      </div>

      {/* Title */}
      <h3 className="blog-card-title">{post.title}</h3>

      {/* Excerpt */}
      <p className="blog-card-excerpt">{post.excerpt}</p>

      {/* Footer link */}
      <div className="blog-card-footer">
        <span className="blog-card-date">{post.date}</span>
        <div className="blog-card-cta">
          <span>اقرأ المقال</span>
          <ArrowUpRight size={14} />
        </div>
      </div>
    </motion.article>
  );
}

export default function BlogSection({ onOpenConsultation, lang = 'ar' }) {
  const isRtl = lang === 'ar';
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  // Split 9 posts into 3 rows of 3
  const posts = serv5Data.blogPosts;
  const rows = [
    posts.slice(0, 3),
    posts.slice(3, 6),
    posts.slice(6, 9)
  ];

  /* Row direction: 0 → down, 1 → up, 2 → down */
  const rowDirectionKey = (rowIdx) => rowIdx === 1 ? 'hidden1' : 'hidden0';

  return (
    <section
      className="blog-section-revamp"
      id="blog"
      ref={sectionRef}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Ambient background glow blobs */}
      <div className="blog-bg-blob blog-blob-left" />
      <div className="blog-bg-blob blog-blob-right" />

      <div className="container position-relative">

        {/* ── SECTION HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="blog-section-header"
        >
          <div className="blog-eyebrow-pill">
            <Sparkles size={13} className="text-blue-600" />
            <span>{isRtl ? 'مدونة سيرف فايف | رؤى تقنية تصنع الفارق' : 'SERV5 KNOWLEDGE VAULT — ENGINEERING & STRATEGY'}</span>
          </div>
          <h2 className="blog-main-heading">
            {isRtl
              ? <>رؤى تقنية <span className="blog-heading-accent">تصنع الفارق</span> لمشروعك</>
              : <>Ideas that <span className="blog-heading-accent">Shape</span> Your Project</>
            }
          </h2>
          <p className="blog-sub-heading">
            {isRtl
              ? 'مقالات تقنية معمّقة ودراسات حالة حقيقية من مشاريع المؤسسات الكبرى — مكتوبة بأقلام مهندسينا ومحللينا'
              : 'Deep-dive engineering articles and real enterprise case studies written by our senior architects and strategists.'}
          </p>
        </motion.div>

        {/* ── 3 × 3 GRID WITH CINEMATIC ROW-CURTAIN REVEAL ── */}
        <div className="blog-grid-stage">
          {rows.map((rowPosts, rowIdx) => (
            <motion.div
              key={rowIdx}
              className="blog-grid-row"
              variants={ROW_VARIANTS}
              initial={rowDirectionKey(rowIdx)}
              animate={isInView ? 'visible' : rowDirectionKey(rowIdx)}
              transition={{
                type: 'spring',
                stiffness: 65,
                damping: 15,
                delay: rowIdx * 0.18          /* cascade: row0 → row1 → row2 */
              }}
            >
              {rowPosts.map((post, colIdx) => (
                <div
                  key={post.id}
                  className="blog-grid-cell"
                  onClick={() => onOpenConsultation?.(`Article Inquiry: ${post.title}`)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') onOpenConsultation?.(`Article Inquiry: ${post.title}`); }}
                >
                  <BlogCard post={post} colIdx={colIdx} />
                </div>
              ))}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
