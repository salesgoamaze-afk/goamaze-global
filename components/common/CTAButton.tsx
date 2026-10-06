'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'gold' | 'secondary' | 'outline' | 'white' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  icon = false,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const sizeStyles = {
    sm: 'py-2 px-4 text-xs gap-1.5',
    md: 'py-3 px-6 text-sm gap-2',
    lg: 'py-3.5 px-8 text-base gap-2.5 font-bold',
  };

  const getButtonClass = () => {
    if (variant === 'primary') return `btn-primary ${sizeStyles[size]} ${className}`;
    if (variant === 'gold') return `btn-gold ${sizeStyles[size]} ${className}`;
    if (variant === 'outline' || variant === 'ghost') return `btn-ghost ${sizeStyles[size]} ${className}`;
    if (variant === 'white')
      return `inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#1F2933] font-bold hover:bg-slate-100 transition-all ${sizeStyles[size]} ${className}`;
    return `btn-primary ${sizeStyles[size]} ${className}`;
  };

  const content = (
    <>
      <span>{children}</span>
      {icon && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={getButtonClass()}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={getButtonClass()}
    >
      {content}
    </button>
  );
};

export default CTAButton;
