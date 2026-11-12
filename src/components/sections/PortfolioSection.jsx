import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react';
import { serv5Data } from '../../data/serv5Data';

export default function PortfolioSection({ onOpenConsultation }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Mobile Apps & POS', 'Enterprise Software', 'Cloud Systems', 'E-Commerce'];

  const filteredProjects = selectedCategory === 'All'
    ? serv5Data.portfolio
    : serv5Data.portfolio.filter((p) => p.category === selectedCategory);

  return (
    <section className="world-section portfolio-world-section" id="portfolio">
      <div className="container">
        {/* Header */}
        <div className="section-header-box text-center">
          <span className="section-eyebrow">VERIFIED TRACK RECORD</span>
          <h2 className="section-title">
            Transformative <span className="text-gradient-amber">Client Case Studies</span>
          </h2>
          <p className="section-subtitle">
            Explore authentic digital solutions deployed across the Middle East with validated performance metrics and sustained commercial impact.
          </p>
        </div>

        {/* Category Filters */}
        <div className="portfolio-filters-row">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`portfolio-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Showcase Grid */}
        <div className="portfolio-grid-container mt-4">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-card-item">
              <div className="portfolio-card-inner">
                {/* Header Tag & Metric */}
                <div className="portfolio-meta-header">
                  <div className="portfolio-category-pill">{project.category}</div>
                  <div className="portfolio-metric-badge">⚡ {project.metric}</div>
                </div>

                {/* Title & Desc */}
                <h3 className="portfolio-project-title">{project.title}</h3>
                <p className="portfolio-project-desc">{project.desc}</p>

                {/* Tech Tags */}
                <div className="portfolio-tags-row">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="portfolio-tech-tag">{tag}</span>
                  ))}
                </div>

                {/* Bottom Action */}
                <div className="portfolio-action-box">
                  <button
                    onClick={() => onOpenConsultation(`Case Study Inquiry: ${project.title}`)}
                    className="portfolio-case-link"
                  >
                    <span>Inspect Case Study</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
