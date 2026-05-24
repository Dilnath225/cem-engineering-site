'use client';

import { useEffect, useMemo, useState } from 'react';

interface OnionLinesProps {
  onComplete?: () => void;
}

export default function OnionLines({ onComplete }: OnionLinesProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Call onComplete after the animation duration (longest delay + duration is ~4s)
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  // Generate paths
  const paths = useMemo(() => {
    const numLines = 80; // Reduced from 100 to improve performance
    const generatedPaths = [];
    
    // Seeded random function to prevent hydration mismatch
    const random = (min: number, max: number, seed: number) => {
      const x = Math.sin(seed++) * 10000;
      return min + (x - Math.floor(x)) * (max - min);
    };

    for (let i = 0; i < numLines; i++) {
      // Create a nice distribution resembling half an onion/roots
      const ySpread = random(-350, 350, i);
      const xSpread = random(200, 600, i + numLines);
      
      // Shaping: further x means it can spread more in y
      const endY = 300 + ySpread * (xSpread / 600);
      const endX = xSpread;
      
      const cp1x = random(20, 200, i + numLines * 2);
      const cp1y = 300 + (ySpread * 0.1);
      
      const cp2x = endX * 0.6;
      const cp2y = endY - (ySpread * 0.2);

      const path = `M 0 300 C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`;
      
      // Random delay for CSS animation
      const delay = random(0, 1.2, i + numLines * 3);
      // Random duration
      const duration = random(1.5, 3.0, i + numLines * 4);
      
      // Random opacity
      const opacity = random(0.3, 0.9, i + numLines * 5);
      // Random stroke width
      const strokeWidth = random(0.8, 2.5, i + numLines * 6);
      // Floating animation properties
      const floatDuration = random(3.0, 7.0, i + numLines * 7);
      const floatDelay = delay + duration;
      const waveAngle = random(-3, 3, i + numLines * 8); // rotate degrees
      const waveY = random(-12, 12, i + numLines * 9); // translate Y
      
      generatedPaths.push({ path, delay, duration, opacity, strokeWidth, floatDuration, floatDelay, waveAngle, waveY });
    }
    return generatedPaths;
  }, []);

  if (!isClient) return null; // Avoid hydration errors

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <style>{`
        .onion-path {
          stroke-dasharray: 2000;
          stroke-dashoffset: 2000;
          will-change: stroke-dashoffset, transform; /* Hardware acceleration */
        }
        @keyframes draw-line {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes organic-wave {
          0%, 100% {
            transform: rotate(0deg) translateY(0px);
          }
          50% {
            transform: rotate(var(--wave-angle)) translateY(var(--wave-y));
          }
        }
      `}</style>
      <svg 
        viewBox="0 0 600 600" 
        style={{ width: '100%', height: '100%', overflow: 'visible' }} 
        preserveAspectRatio="xMinYMid meet"
      >
        <defs>
          <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
        </defs>
        
        {paths.map((p, i) => (
          <path
            key={i}
            d={p.path}
            fill="transparent"
            stroke="url(#blue-gradient)"
            strokeWidth={p.strokeWidth}
            strokeLinecap="round"
            className="onion-path"
            style={{
              '--wave-angle': `${p.waveAngle}deg`,
              '--wave-y': `${p.waveY}px`,
              animation: `draw-line ${p.duration}s forwards cubic-bezier(0.25, 0.1, 0.25, 1) ${p.delay}s, organic-wave ${p.floatDuration}s ease-in-out infinite ${p.floatDelay}s`,
              transformOrigin: '0px 300px',
              opacity: p.opacity
            } as React.CSSProperties}
          />
        ))}
      </svg>
    </div>
  );
}
