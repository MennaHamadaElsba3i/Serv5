import React, { useEffect, useState } from 'react';
import { SlidersHorizontal, Sparkles } from 'lucide-react';

function recommendPlan(sites, storage) {
  if (sites <= 1 && storage <= 10) return 'starter';
  if (sites <= 5 && storage <= 50) return 'professional';
  return 'enterprise';
}

export default function PlanConfigurator({ lang = 'ar', plans = [], onChange }) {
  const isRtl = lang === 'ar';
  const [sites, setSites] = useState(1);
  const [storage, setStorage] = useState(10);

  const recommendedId = recommendPlan(sites, storage);
  const recommended = plans.find((plan) => plan.id === recommendedId) || plans[0];

  useEffect(() => {
    onChange?.(recommendedId);
  }, [recommendedId, onChange]);

  return (
    <div className="hosting-configurator hosting-reveal" data-hosting-reveal>
      <div className="hosting-configurator-intro">
        <span className="hosting-configurator-eyebrow">
          <SlidersHorizontal size={13} />
          {isRtl ? 'اضبط احتياجك' : 'TUNE YOUR NEEDS'}
        </span>
        <h3>{isRtl ? 'إيه اللي محتاجه موقعك فعلًا؟' : 'What does your website actually need?'}</h3>
        <p>
          {isRtl
            ? 'حرّك المؤشرين وهنقترح الباقة المناسبة فورًا — من غير مكالمات ولا انتظار.'
            : 'Move the two sliders and the right plan picks itself — no calls, no waiting.'}
        </p>
      </div>

      <div className="hosting-configurator-form">
        <label className="hosting-config-field">
          <span className="hosting-config-label">
            {isRtl ? 'عدد المواقع' : 'Websites'}
            <output className="hosting-config-value">{sites}</output>
          </span>
          <input
            type="range"
            min="1"
            max="20"
            step="1"
            value={sites}
            onChange={(event) => setSites(Number(event.target.value))}
            aria-label={isRtl ? 'عدد المواقع' : 'Number of websites'}
          />
          <span className="hosting-config-scale"><i>1</i><i>20</i></span>
        </label>

        <label className="hosting-config-field">
          <span className="hosting-config-label">
            {isRtl ? 'مساحة التخزين' : 'Storage'}
            <output className="hosting-config-value">
              {storage >= 500 ? (isRtl ? 'غير محدود' : 'Unlimited') : `${storage} GB`}
            </output>
          </span>
          <input
            type="range"
            min="10"
            max="500"
            step="10"
            value={storage}
            onChange={(event) => setStorage(Number(event.target.value))}
            aria-label={isRtl ? 'مساحة التخزين' : 'Storage space'}
          />
          <span className="hosting-config-scale"><i>10 GB</i><i>{isRtl ? 'غير محدود' : 'Unlimited'}</i></span>
        </label>
      </div>

      <div className="hosting-configurator-result" role="status">
        <span className="hosting-config-result-label">
          <Sparkles size={13} />
          {isRtl ? 'الباقة المقترحة' : 'SUGGESTED PLAN'}
        </span>
        <strong>{recommended?.name}</strong>
        <span className="hosting-config-result-price" dir="ltr">
          {recommended?.price}
          <i>{isRtl ? 'ر.س / شهريًا' : 'SAR / mo'}</i>
        </span>
        <span className="hosting-config-result-note">
          {isRtl ? 'الباقة دي متظللة تحت 👇' : 'The matching card is highlighted below 👇'}
        </span>
      </div>
    </div>
  );
}
