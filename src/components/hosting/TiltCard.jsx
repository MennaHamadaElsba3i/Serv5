import React from 'react';
import { useCardTilt } from './useCardTilt';

export default function TiltCard({ as: Tag = 'div', className = '', children, ...rest }) {
  const { ref, onPointerMove, onPointerLeave } = useCardTilt();

  return (
    <Tag
      ref={ref}
      className={`tilt-card ${className}`.trim()}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      {...rest}
    >
      <span className="tilt-card-glow" aria-hidden="true" />
      {children}
    </Tag>
  );
}
