'use client';

import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  direction: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

const getVariants = (direction: ScrollRevealProps['direction']): Variants => {
  const offset = 30;

  const directionMap: Record<ScrollRevealProps['direction'], { x: number; y: number }> = {
    up: { x: 0, y: offset },
    down: { x: 0, y: -offset },
    left: { x: offset, y: 0 },
    right: { x: -offset, y: 0 },
  };

  const { x, y } = directionMap[direction];

  return {
    hidden: {
      opacity: 0,
      x,
      y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };
};

export default function ScrollReveal({
  children,
  direction,
  delay = 0,
  duration = 0.6,
  className,
}: ScrollRevealProps) {
  const variants = getVariants(direction);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: '-50px', amount: 0.1 }}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
