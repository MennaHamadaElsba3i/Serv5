import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { serv5Data } from '../../data/serv5Data';

export default function BlogSection({ onOpenConsultation }) {
  const mainArticle = serv5Data.blogPosts[0];
  const sideArticles = serv5Data.blogPosts.slice(1);

  return (
    <section className="world-section blog-world-section" id="blog">
      <div className="container">
        {/* Header */}
        <div className="section-header-box text-center">
          <span className="section-eyebrow">ENGINEERING & STRATEGY INSIGHTS</span>
          <h2 className="section-title">
            Latest from Our <span className="text-gradient-bronze">Knowledge Vault</span>
          </h2>
          <p className="section-subtitle">
            Authoritative technical perspectives on cloud systems, e-invoicing architecture, and high-conversion e-commerce strategies.
          </p>
        </div>

        <div className="row g-4 mt-4">
          {/* Main Featured Article (Large Card) */}
          <div className="col-lg-7">
            <div className="featured-article-card">
              <div className="featured-article-badge">
                <BookOpen size={14} className="me-1" />
                <span>Featured Blueprint</span>
              </div>
              <div className="article-meta-row mt-3">
                <span className="article-cat-pill">{mainArticle.category}</span>
                <span className="article-meta-item">
                  <Calendar size={13} className="me-1" />
                  {mainArticle.date}
                </span>
                <span className="article-meta-item">
                  <Clock size={13} className="me-1" />
                  {mainArticle.readTime}
                </span>
              </div>

              <h3 className="featured-article-title mt-3">{mainArticle.title}</h3>
              <p className="featured-article-excerpt">{mainArticle.excerpt}</p>

              <div className="featured-article-footer mt-4">
                <button
                  onClick={() => onOpenConsultation(`Article Inquiry: ${mainArticle.title}`)}
                  className="btn-text-link"
                >
                  <span>Read Full Technical Blueprint</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Secondary Articles Stack */}
          <div className="col-lg-5">
            <div className="secondary-articles-stack">
              {sideArticles.map((post) => (
                <div key={post.id} className="secondary-article-card">
                  <div className="article-meta-row">
                    <span className="article-cat-pill">{post.category}</span>
                    <span className="article-meta-item">
                      <Clock size={12} className="me-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <h4 className="secondary-article-title mt-2">{post.title}</h4>
                  <p className="secondary-article-excerpt">{post.excerpt}</p>
                  <button
                    onClick={() => onOpenConsultation(`Article Inquiry: ${post.title}`)}
                    className="secondary-read-link"
                  >
                    <span>Read Analysis</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
