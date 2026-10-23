// components/AnimatedSection.jsx
"use client";

import React from 'react';
import { useInView } from './useInView';

export function AnimatedSection({ 
  children, 
  delay = 0, 
  className = '',
  animation = 'slideUpFadeIn',
  // Above-the-fold sections: start the same animation from the server HTML instead of waiting for
  // hydration + IntersectionObserver, so the content paints (and counts for LCP) without JS
  immediate = false
}) {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const animationStyle = (immediate || inView) ? {
    animation: `${animation} 0.8s var(--ease-out) ${delay}s both`
  } : {
    opacity: 0
  };

  return (
    <div 
      ref={ref} 
      className={className}
      style={animationStyle}
    >
      {children}
    </div>
  );
}  