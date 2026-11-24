import React, { useState } from 'react';
import { ArrowUpRight, Smartphone } from 'lucide-react';

export default function Serv5AppUniverse({ lang = 'ar', eyebrow, title, text, items = [], sectionRef }) {
  const isRtl = lang === 'ar';
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = items[selectedIndex];

  if (!selected) return null;

  const screens = selected.screens?.length ? selected.screens : [];
  const screenImage = (index) => screens.length
    ? `/images/mobile-app-screens/${screens[index % screens.length]}.webp`
    : selected.image;

  return (
    <section className="wd-section app-universe-section" ref={sectionRef} dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="container">
        <header className="wd-heading app-universe-heading wd-reveal" data-wd-reveal>
          <span>{eyebrow}</span>
          <h2>{title}</h2>
          <p>{text}</p>
        </header>

        <div className="app-universe-project" key={`project-${selected.id}`} aria-live="polite">
          <div className="app-universe-project-mark"><Smartphone size={17} /> <span>{isRtl ? 'التطبيق المختار' : 'SELECTED APP'}</span></div>
          <div className="app-universe-project-copy">
            <span className="app-universe-project-count">{String(selectedIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span>
            <h3>{selected.title[lang] || selected.title.ar}</h3>
            <p>{selected.description[lang] || selected.description.ar}</p>
          </div>
          {selected.url && (
            <a className="app-universe-store-link" href={selected.url} target="_blank" rel="noreferrer">
              {isRtl ? 'عرض التطبيق' : 'View app'}
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>

        <div className="app-universe-stage" aria-label={isRtl ? `معاينة تطبيق ${selected.title.ar}` : `${selected.title.en} app preview`}>
          <svg className="app-universe-connections" viewBox="0 0 1000 520" fill="none" aria-hidden="true">
            <path d="M170 164 C300 164 330 226 435 246" />
            <path d="M255 390 C342 366 365 316 435 288" />
            <path d="M830 170 C700 172 665 224 565 246" />
            <circle cx="170" cy="164" r="3" />
            <circle cx="255" cy="390" r="3" />
            <circle cx="830" cy="170" r="3" />
            <circle cx="500" cy="267" r="4" />
          </svg>

          <div className="app-universe-floating-screen app-universe-screen-left-back" key={`${selected.id}-screen-one`} aria-hidden="true"><img src={screenImage(0)} alt="" /></div>
          <div className="app-universe-floating-screen app-universe-screen-left-front" key={`${selected.id}-screen-two`} aria-hidden="true"><img src={screenImage(1)} alt="" /></div>
          <div className="app-universe-floating-screen app-universe-screen-right" key={`${selected.id}-screen-four`} aria-hidden="true"><img src={screenImage(2)} alt="" /></div>

          <div className="app-universe-phone" key={`${selected.id}-phone`} aria-hidden="true">
            <div className="app-universe-phone-screen"><img src={screenImage(3)} alt="" /></div>
            <span className="app-universe-phone-island" />
            <span className="app-universe-phone-button app-universe-phone-button-a" />
            <span className="app-universe-phone-button app-universe-phone-button-b" />
          </div>
          <div className="app-universe-floor-glow" aria-hidden="true" />
        </div>

        <nav className="app-universe-selector" aria-label={isRtl ? 'اختيار تطبيق' : 'Choose an app'}>
          {items.map((item, index) => (
            <button
              type="button"
              className={`app-universe-selector-item${index === selectedIndex ? ' is-selected' : ''}`}
              key={item.id}
              aria-pressed={index === selectedIndex}
              onClick={() => setSelectedIndex(index)}
            >
              <span className="app-universe-selector-index">{String(index + 1).padStart(2, '0')}</span>
              <span>{item.title[lang] || item.title.ar}</span>
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
}
