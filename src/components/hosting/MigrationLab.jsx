import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeftRight, CloudCog, RotateCcw, Server, ShieldCheck } from 'lucide-react';

const TOTAL_STEPS = 26;

function isInside(element, x, y) {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
}

export default function MigrationLab({ lang = 'ar' }) {
  const isRtl = lang === 'ar';
  const [status, setStatus] = useState('idle'); // idle | dragging | migrating | done
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [overTarget, setOverTarget] = useState(false);
  const [progress, setProgress] = useState(0);

  const targetRef = useRef(null);
  const dragOrigin = useRef(null);
  // Mirror of `status` for event handlers: pointer events can fire faster than React state flushes.
  const phase = useRef('idle');

  const setPhase = (next) => {
    phase.current = next;
    setStatus(next);
  };

  const startMigration = useCallback(() => {
    setOffset({ x: 0, y: 0 });
    setOverTarget(false);
    setProgress(4);
    phase.current = 'migrating';
    setStatus('migrating');
  }, []);

  useEffect(() => {
    if (status !== 'migrating') return undefined;

    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      const next = Math.min(100, Math.round((step / TOTAL_STEPS) * 100));
      setProgress(next);
      if (next >= 100) {
        clearInterval(interval);
        phase.current = 'done';
        setStatus('done');
      }
    }, 42);

    return () => clearInterval(interval);
  }, [status]);

  const reset = () => {
    setPhase('idle');
    setProgress(0);
    setOffset({ x: 0, y: 0 });
    setOverTarget(false);
  };

  const handlePointerDown = (event) => {
    if (phase.current === 'migrating' || phase.current === 'done') return;
    try {
      event.currentTarget.setPointerCapture?.(event.pointerId);
    } catch (error) {
      // Synthetic or already-released pointers cannot be captured; dragging still works.
    }
    dragOrigin.current = { x: event.clientX - offset.x, y: event.clientY - offset.y };
    setPhase('dragging');
  };

  const handlePointerMove = (event) => {
    if (phase.current !== 'dragging' || !dragOrigin.current) return;
    const x = event.clientX - dragOrigin.current.x;
    const y = event.clientY - dragOrigin.current.y;
    setOffset({
      x: Math.max(-260, Math.min(260, x)),
      y: Math.max(-150, Math.min(150, y))
    });
    setOverTarget(isInside(targetRef.current, event.clientX, event.clientY));
  };

  const handlePointerUp = (event) => {
    if (phase.current !== 'dragging') return;
    dragOrigin.current = null;
    if (isInside(targetRef.current, event.clientX, event.clientY)) {
      startMigration();
      return;
    }
    setPhase('idle');
    setOffset({ x: 0, y: 0 });
    setOverTarget(false);
  };

  const isDone = status === 'done';
  const isMigrating = status === 'migrating';

  return (
    <div
      className={`hosting-migration-visual migration-lab is-${status}${overTarget ? ' is-over-target' : ''}`}
      aria-label={isRtl ? 'محاكاة نقل موقع إلى سيرف فايف' : 'Website migration simulation'}
    >
      <span className="migration-lab-hint">
        {isMigrating
          ? (isRtl ? 'جاري النقل…' : 'Transferring…')
          : isDone
            ? (isRtl ? 'تم النقل بنجاح' : 'Transfer complete')
            : (isRtl ? 'اسحب الموقع للسيرفر الجديد' : 'Drag the site to the new server')}
      </span>

      <div
        className="hosting-migration-node old draggable"
        style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <Server size={24} />
        <span>{isRtl ? 'استضافتك الحالية' : 'CURRENT HOST'}</span>
      </div>

      <div className="hosting-migration-route">
        <span><ArrowLeftRight size={20} /></span>
        <i /><i /><i />
      </div>

      <div className={`hosting-migration-node new${overTarget ? ' is-target' : ''}`} ref={targetRef}>
        <CloudCog size={26} />
        <span>SERV5 CLOUD</span>
      </div>

      <div className="hosting-migration-shield"><ShieldCheck size={22} /></div>

      {progress > 0 && (
        <div className="migration-lab-progress" aria-hidden="true">
          <i style={{ width: `${progress}%` }} />
        </div>
      )}

      {isDone && (
        <div className="migration-lab-success" role="status">
          <ShieldCheck size={14} />
          {isRtl ? 'صفر توقف · بيانات سليمة' : 'Zero downtime · data intact'}
          <button type="button" className="migration-lab-reset" onClick={reset}>
            <RotateCcw size={12} />
            {isRtl ? 'أعد التجربة' : 'Retry'}
          </button>
        </div>
      )}
    </div>
  );
}
