import React, { useState } from 'react';
import { Layers, ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { serv5Data } from '../../data/serv5Data';

export default function ProductsShowcase({ onOpenConsultation }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Enterprise', 'Mobile & Web', 'Healthcare', 'E-Commerce'];

  const filteredProducts = activeCategory === 'All'
    ? serv5Data.products
    : serv5Data.products.filter((p) => p.category === activeCategory);

  return (
    <section className="world-section products-world-section" id="products">
      <div className="container">
        {/* Header */}
        <div className="section-header-box text-center">
          <span className="section-eyebrow">READY-TO-DEPLOY ECOSYSTEM</span>
          <h2 className="section-title">
            Enterprise Software <span className="text-gradient-bronze">Product Suite</span>
          </h2>
          <p className="section-subtitle">
            Battle-tested proprietary SaaS platforms and operational frameworks engineered by SERV5 to dramatically accelerate time-to-market.
          </p>
        </div>

        {/* Category Filters */}
        <div className="product-category-filters">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`product-cat-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="row g-4 mt-2">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col-md-6 col-lg-6">
              <div className="product-showcase-card">
                <div className="product-card-top">
                  <div className="d-flex align-items-center gap-2">
                    <span className="product-badge">{product.badge}</span>
                    <span className="product-category-text">{product.category}</span>
                  </div>
                  <span className="product-highlight-metric">{product.highlightMetric}</span>
                </div>

                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc">{product.desc}</p>

                <div className="product-features-box">
                  <span className="features-label">Key Capabilities:</span>
                  <div className="product-feature-chips">
                    {product.features.map((feat, fIdx) => (
                      <span key={fIdx} className="feature-chip">
                        <Check size={12} className="text-amber me-1" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="product-action-row">
                  <button
                    onClick={() => onOpenConsultation(`Product Demo Request: ${product.name}`)}
                    className="btn-product-demo"
                  >
                    <span>Request Live Demo</span>
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
