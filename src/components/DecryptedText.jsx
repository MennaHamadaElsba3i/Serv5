import React, { useState, useEffect, useRef } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=<>?';

export default function DecryptedText({
  text = '',
  speed = 40,
  maxIterations = 10,
  className = '',
  as: Component = 'span',
  revealOnView = true
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const elementRef = useRef(null);
  const hasAnimatedOnView = useRef(false);

  const runDecryption = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ' || char === '\n') return char;
            if (index < iteration / 2) return text[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      if (iteration >= text.length * 2) {
        clearInterval(interval);
        setDisplayText(text);
      }
      iteration += 1;
    }, speed);
  };

  useEffect(() => {
    if (!revealOnView) {
      runDecryption();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedOnView.current) {
            hasAnimatedOnView.current = true;
            runDecryption();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [text]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    runDecryption();
  };

  return (
    <Component
      ref={elementRef}
      className={`decrypted-text ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: 'default' }}
    >
      {displayText}
    </Component>
  );
}

