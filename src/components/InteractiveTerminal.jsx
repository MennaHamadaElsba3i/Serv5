import React, { useState } from 'react';
import { CheckCircle2, Terminal as TerminalIcon, Tag } from 'lucide-react';

export default function InteractiveTerminal({ products = [] }) {
  const [activeTab, setActiveTab] = useState(products[0]?.id || 'lawyer');

  const currentProduct = products.find((p) => p.id === activeTab) || products[0];

  return (
    <div className="products-wrapper">
      <div className="products-tabs">
        {products.map((p) => (
          <button
            key={p.id}
            onClick={() => setActiveTab(p.id)}
            className={`tab-btn ${activeTab === p.id ? 'active' : ''}`}
          >
            <span>{p.name}</span>
          </button>
        ))}
      </div>

      {currentProduct && (
        <div className="product-content-grid">
          <div className="product-info-panel">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
              <span className="product-label" style={{ marginBottom: 0 }}>{currentProduct.label}</span>
              {currentProduct.price && (
                <span className="product-price-tag">
                  {currentProduct.price}
                </span>
              )}
            </div>

            <h3>{currentProduct.name}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              {currentProduct.headline}
            </p>

            <ul className="product-features">
              {currentProduct.features.map((feat, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={16} color="#34D399" style={{ flexShrink: 0 }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ padding: '0.65rem 1.1rem', background: 'rgba(59, 130, 246, 0.08)', borderRadius: '10px', border: '1px solid rgba(96, 165, 250, 0.25)', display: 'inline-block' }}>
                <span style={{ fontSize: '0.8rem', color: '#60A5FA', fontWeight: 600 }}>
                  ⚡ {currentProduct.stats}
                </span>
              </div>
              <a href="#contact" className="btn-primary" style={{ padding: '0.55rem 1.25rem', fontSize: '0.82rem' }}>
                اطلبه الآن
              </a>
            </div>
          </div>

          <div className="terminal-frame">
            <div className="terminal-topbar">
              <div className="terminal-dots">
                <div className="t-dot t-red" />
                <div className="t-dot t-yellow" />
                <div className="t-dot t-green" />
              </div>
              <div style={{ fontSize: '0.72rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <TerminalIcon size={12} />
                <span>serv5-engine://{currentProduct.id}.ts</span>
              </div>
            </div>
            <pre className="terminal-body">
              <code>{currentProduct.codeSnippet}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
