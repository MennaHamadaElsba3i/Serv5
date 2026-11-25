import { useEffect, useRef } from 'react';

// Pointer-driven 3D tilt + spotlight for cards.
// Writes CSS custom properties directly so the card never re-renders while moving.
export function useCardTilt({ max = 7 } = {}) {
  const ref = useRef(null);
  const frame = useRef(0);
  const enabled = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const precise = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    enabled.current = precise && !reduce;
  }, []);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const handlePointerMove = (event) => {
    const element = ref.current;
    if (!element || !enabled.current) return;

    const { clientX, clientY } = event;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const rect = element.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const px = (clientX - rect.left) / rect.width;
      const py = (clientY - rect.top) / rect.height;

      element.style.setProperty('--tilt-x', `${((0.5 - py) * max).toFixed(2)}deg`);
      element.style.setProperty('--tilt-y', `${((px - 0.5) * max * 1.4).toFixed(2)}deg`);
      element.style.setProperty('--glow-x', `${(px * 100).toFixed(1)}%`);
      element.style.setProperty('--glow-y', `${(py * 100).toFixed(1)}%`);
      element.classList.add('is-tilting');
    });
  };

  const handlePointerLeave = () => {
    const element = ref.current;
    if (!element) return;
    cancelAnimationFrame(frame.current);
    element.classList.remove('is-tilting');
    element.style.removeProperty('--tilt-x');
    element.style.removeProperty('--tilt-y');
  };

  return { ref, onPointerMove: handlePointerMove, onPointerLeave: handlePointerLeave };
}
