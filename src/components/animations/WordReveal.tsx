'use client';

import { motion } from 'framer-motion';

interface WordRevealProps {
  text?: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  children?: React.ReactNode;
}

export default function WordReveal({ text, className, wordClassName, delay = 0, children }: WordRevealProps) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(10px)',
    },
  };

  if (children) {
    // If children are provided, we assume they are already broken down into elements to stagger
    return (
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: '-50px', amount: 0.1 }}
        className={className}
        style={{ display: 'inline-block' }}
      >
        {children}
      </motion.div>
    );
  }

  if (!text) return null;

  const words = text.split(' ');

  return (
    <motion.div
      style={{ display: 'inline-flex', flexWrap: 'wrap', columnGap: '0.25em' }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: '-50px', amount: 0.1 }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className={wordClassName} style={{ display: 'inline-block' }}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
