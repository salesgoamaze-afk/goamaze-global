'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PunchLineProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const PunchLine: React.FC<PunchLineProps> = ({
  className = '',
  size = 'lg',
}) => {
  const sizeStyles = {
    sm: 'text-2xl sm:text-3xl',
    md: 'text-3xl sm:text-4xl lg:text-5xl',
    lg: 'text-3xl sm:text-5xl lg:text-6xl xl:text-[64px]',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`text-center select-none ${className}`}
    >
      <span
        style={{
          fontFamily: "var(--font-script, 'Dancing Script', cursive)",
          fontSize: size === 'lg' ? 'clamp(2.15rem, 4.2vw, 3.75rem)' : undefined,
          fontWeight: 600,
          letterSpacing: '0.01em',
          lineHeight: 1.15,
          display: 'inline-block',
          filter: 'drop-shadow(0 2px 22px rgba(59, 130, 246, 0.4))',
        }}
        className={sizeStyles[size]}
      >
        <span style={{ color: '#FFFFFF' }}>Go</span>
        <span
          style={{
            background: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 50%, #2563EB 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Amaze
        </span>
        <span style={{ color: '#FFFFFF' }}>, Your Gateway to </span>
        <span
          style={{
            background: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 50%, #2563EB 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Global Trading!
        </span>
      </span>
    </motion.div>
  );
};

export default PunchLine;
