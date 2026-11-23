import React, { useEffect, useState } from 'react';

// A tiny fake SSH session: lines type themselves out, then the session loops.
const SCRIPT = [
  { tone: 'cmd', text: 'ssh root@serv5.cloud' },
  { tone: 'ok', text: 'connected · tls 1.3 · cairo edge' },
  { tone: 'log', text: 'nginx 1.27 · 42,180 req/s' },
  { tone: 'log', text: 'uptime 365d · 0 incidents' },
  { tone: 'ok', text: 'deploy complete in 0.8s' }
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(query.matches);
    const listener = (event) => setReduced(event.matches);
    query.addEventListener?.('change', listener);
    return () => query.removeEventListener?.('change', listener);
  }, []);

  return reduced;
}

export default function HostingTerminal() {
  const reduced = usePrefersReducedMotion();
  const [done, setDone] = useState([]);
  const [partial, setPartial] = useState('');
  const [hasCaret, setHasCaret] = useState(true);

  useEffect(() => {
    if (reduced) {
      setDone(SCRIPT.map((line) => line.text));
      setPartial('');
      setHasCaret(false);
      return undefined;
    }

    let cancelled = false;
    let timer;
    let lineIndex = 0;
    let charIndex = 0;

    setDone([]);
    setPartial('');
    setHasCaret(true);

    const step = () => {
      if (cancelled) return;
      const line = SCRIPT[lineIndex];

      if (!line) {
        // Finished the session — hold it on screen, then replay.
        timer = setTimeout(() => {
          if (cancelled) return;
          setDone([]);
          setPartial('');
          lineIndex = 0;
          charIndex = 0;
          step();
        }, 4200);
        return;
      }

      charIndex += 1;
      setPartial(line.text.slice(0, charIndex));

      if (charIndex >= line.text.length) {
        timer = setTimeout(() => {
          if (cancelled) return;
          setDone((previous) => [...previous, line.text]);
          setPartial('');
          lineIndex += 1;
          charIndex = 0;
          timer = setTimeout(step, 300);
        }, 220);
        return;
      }

      timer = setTimeout(step, 24);
    };

    timer = setTimeout(step, 350);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [reduced]);

  return (
    <div className="hosting-terminal" dir="ltr" aria-hidden="true">
      <div className="hosting-terminal-bar">
        <span className="hosting-terminal-dots"><i /><i /><i /></span>
        <span className="hosting-terminal-title">serv5@cloud — tty0</span>
        <span className="hosting-terminal-badge">LIVE</span>
      </div>
      <div className="hosting-terminal-body">
        {done.map((text, index) => (
          <p className={`hosting-terminal-line hosting-terminal-line--${SCRIPT[index]?.tone || 'log'}`} key={`${text}-${index}`}>
            <span className="hosting-terminal-prompt">{index === 0 ? '$' : '›'}</span>
            {text}
          </p>
        ))}
        {partial && (
          <p className={`hosting-terminal-line hosting-terminal-line--${SCRIPT[done.length]?.tone || 'log'}`}>
            <span className="hosting-terminal-prompt">{done.length === 0 ? '$' : '›'}</span>
            {partial}
            {hasCaret && <span className="hosting-terminal-caret" />}
          </p>
        )}
      </div>
    </div>
  );
}
