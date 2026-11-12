import React, { useRef, useState } from 'react';

export default function MagneticButton({
  children,
  onClick,
  href,
  className = '',
  pullStrength = 0.25,
  style = {}
}) {
  const btnRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    setPosition({ x: distanceX * pullStrength, y: distanceY * pullStrength });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const dynamicStyle = {
    ...style,
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    transition: position.x === 0 ? 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' : 'transform 0.1s ease-out'
  };

  if (href) {
    return (
      <a
        ref={btnRef}
        href={href}
        className={`magnetic-btn ${className}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={dynamicStyle}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      className={`magnetic-btn ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={dynamicStyle}
    >
      {children}
    </button>
  );
}

