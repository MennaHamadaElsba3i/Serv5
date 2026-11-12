import React from 'react';

export default function Serv5Logo({ size = 42, className = '', light = false }) {
  const isLight = light || className.includes('light') || className.includes('text-white');
  return (
    <div
      className={`serv5-logo-container ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.65rem',
        textDecoration: 'none'
      }}
    >
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          filter: isLight ? 'drop-shadow(0 4px 14px rgba(255, 255, 255, 0.2))' : 'drop-shadow(0 4px 12px rgba(36, 90, 167, 0.25))',
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <img
          src="/serv5-official-logo.webp"
          alt="SERV5 Logo"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
          onError={(e) => {
            // Fallback to transparent PNG or SVG if needed
            e.target.onerror = null;
            e.target.src = '/serv5_logo_transparent.png';
          }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
        <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em', color: isLight ? '#ffffff' : 'var(--serv5-navy, #16205d)' }}>
          serv<span style={{ color: 'var(--serv5-orange, #ea580c)' }}>5</span>
        </span>
        <span style={{ fontSize: '0.62rem', letterSpacing: '0.14em', color: isLight ? '#94a3b8' : '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>
          Digital Growth Studio
        </span>
      </div>
    </div>
  );
}

