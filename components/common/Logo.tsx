'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 46,
}) => {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className={`inline-flex items-center shrink-0 ${className}`}>
      <Link
        href="/"
        className="flex items-center text-decoration-none focus:outline-none rounded-lg group"
        aria-label="GoAmaze Global Exporters Home"
      >
        <div
          style={{
            height: `${size}px`,
            width: `${Math.round(size * 5.17)}px`,
            maxWidth: '290px',
            position: 'relative',
          }}
          className="flex items-center transition-opacity group-hover:opacity-95"
        >
          <Image
            src="/logo-full.png"
            alt="GoAmaze Global Exporters"
            fill
            sizes="(max-width: 640px) 230px, 290px"
            className="object-contain object-left"
            priority
          />
        </div>
      </Link>
    </motion.div>
  );
};

export default Logo;
