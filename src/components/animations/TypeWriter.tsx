'use client';

import { useState, useEffect } from 'react';

interface TypeWriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export default function TypeWriter({
  text,
  speed = 50,
  delay = 0,
  className,
}: TypeWriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let delayTimer: ReturnType<typeof setTimeout>;
    let charIndex = 0;
    let typeTimer: ReturnType<typeof setInterval>;
    let cursorTimer: ReturnType<typeof setTimeout>;

    delayTimer = setTimeout(() => {
      setIsTyping(true);

      typeTimer = setInterval(() => {
        charIndex++;
        if (charIndex <= text.length) {
          setDisplayedText(text.slice(0, charIndex));
        } else {
          clearInterval(typeTimer);
          setIsTyping(false);

          cursorTimer = setTimeout(() => {
            setShowCursor(false);
          }, 3000);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(delayTimer);
      clearInterval(typeTimer);
      clearTimeout(cursorTimer);
    };
  }, [text, speed, delay]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <span
          style={{
            display: 'inline-block',
            animation: 'typewriterBlink 0.7s step-end infinite',
          }}
        >
          |
        </span>
      )}
      <style>{`
        @keyframes typewriterBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
