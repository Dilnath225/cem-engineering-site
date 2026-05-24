'use client';

import { useEffect, useRef } from 'react';
import { useMotionValue, useTransform, animate, useInView } from 'framer-motion';

interface CounterAnimationProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function CounterAnimation({
  target,
  duration = 2,
  suffix = '',
  prefix = '',
}: CounterAnimationProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, target, {
      duration,
      ease: 'easeOut',
    });

    return () => controls.stop();
  }, [isInView, motionValue, target, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${latest}${suffix}`;
      }
    });

    return () => unsubscribe();
  }, [rounded, prefix, suffix]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}
