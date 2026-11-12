import React, { useState } from 'react';
import { DollarSign, Clock, TrendingUp, Award } from 'lucide-react';

export default function RoiEstimator({ content }) {
  const [budget, setBudget] = useState(75000);
  const [selectedTrack, setSelectedTrack] = useState('saas');

  // Multiplier formulas based on track and budget
  const multipliers = {
    saas: { timeBase: 8, roasFactor: 5.2 },
    app: { timeBase: 6, roasFactor: 4.8 },
    store: { timeBase: 4, roasFactor: 6.4 },
    campaign: { timeBase: 2, roasFactor: 5.6 }
  };

  const currentMult = multipliers[selectedTrack] || multipliers.saas;

  const estimatedWeeks = Math.max(
    3,
    Math.round(currentMult.timeBase + (budget / 100000) * 3)
  );
  const estimatedRoas = (currentMult.roasFactor + (budget / 200000) * 0.8).toFixed(1);

  return (
    <div className="calc-box spotlight-card">
      <div className="calc-slider-wrapper">
        <div className="calc-slider-label">
          <span>{content.calcBudget}</span>
          <span className="calc-slider-val">{budget.toLocaleString()} SAR</span>
        </div>
        <input
          type="range"
          min="15000"
          max="350000"
          step="5000"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="calc-range"
        />
      </div>

      <div style={{ marginBottom: '1.25rem', fontSize: '0.9rem', fontWeight: 600 }}>
        {content.calcType}
      </div>

      <div className="calc-pills">
        {content.calcPlatformOptions.map((opt) => (
          <button
            key={opt.id}
            onClick={() => setSelectedTrack(opt.id)}
            className={`calc-pill-btn ${selectedTrack === opt.id ? 'active' : ''}`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="calc-results-card">
        <div>
          <div className="calc-res-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
            <Clock size={14} />
            <span>{content.calcResults.estWeeks}</span>
          </div>
          <div className="calc-res-value" style={{ color: '#60A5FA' }}>
            {estimatedWeeks} {content.calcPlatformOptions ? 'Weeks' : 'أسابيع'}
          </div>
        </div>

        <div>
          <div className="calc-res-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
            <TrendingUp size={14} />
            <span>{content.calcResults.estRoas}</span>
          </div>
          <div className="calc-res-value" style={{ color: '#34D399' }}>
            {estimatedRoas}x ROAS
          </div>
        </div>

        <div>
          <div className="calc-res-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
            <Award size={14} />
            <span>{content.calcResults.estScore}</span>
          </div>
          <div className="calc-res-value" style={{ color: '#FCD34D' }}>
            {content.calcResults.estScoreVal}
          </div>
        </div>
      </div>
    </div>
  );
}

