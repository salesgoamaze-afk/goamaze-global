'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: number;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 64,
  showSubtitle = true,
}) => {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className={`inline-flex items-center shrink-0 ${className}`}>
      <Link
        href="/"
        className="flex items-center gap-3.5 text-decoration-none focus:outline-none rounded-lg"
      >
        {/* Official GoAmaze Round Logo Icon */}
        <div
          style={{
            width: `${size}px`,
            height: `${size}px`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            position: 'relative',
            filter: 'drop-shadow(0 4px 16px rgba(99, 102, 241, 0.55))',
          }}
        >
          <Image
            src="/logo.png"
            alt="GoAmaze Global Exporters Logo"
            width={size}
            height={size}
            className="object-contain w-full h-full"
            priority
          />
        </div>

        {/* GoAmaze Wordmark */}
        <div className="flex flex-col justify-center">
          <span
            style={{
              fontFamily: 'var(--font-heading, var(--font-montserrat), sans-serif)',
              fontSize: `${Math.max(1.4, size * 0.038)}rem`,
              fontWeight: 900,
              letterSpacing: '-0.03em',
              display: 'inline-flex',
              alignItems: 'center',
              lineHeight: 1.05,
              userSelect: 'none',
            }}
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
          </span>

          {showSubtitle && (
            <span
              className="hidden sm:inline-block"
              style={{
                fontSize: `${Math.max(9, Math.round(size * 0.16))}px`,
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#93C5FD',
                lineHeight: 1.1,
                marginTop: '3px',
              }}
            >
              GLOBAL EXPORTERS
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default Logo;
