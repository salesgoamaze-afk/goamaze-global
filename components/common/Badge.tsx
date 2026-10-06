import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'gold' | 'purple' | 'slate' | 'emerald' | 'cyan' | 'outline' | 'amber';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  size = 'md',
  className = '',
}) => {
  const sizeStyles = {
    sm: 'px-2.5 py-0.5 text-[11px]',
    md: 'px-3.5 py-1 text-xs',
  };

  const variantStyles = {
    blue: 'bg-blue-500/15 text-blue-300 border border-blue-500/30',
    gold: 'bg-[#D89B16]/15 text-[#F2B544] border border-[#D89B16]/35 font-bold',
    amber: 'bg-[#D89B16]/15 text-[#F2B544] border border-[#D89B16]/35 font-bold',
    purple: 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30',
    cyan: 'bg-sky-500/15 text-sky-300 border border-sky-500/30',
    slate: 'bg-white/5 text-slate-300 border border-white/10',
    emerald: 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30',
    outline: 'bg-transparent text-slate-400 border border-white/15',
  };

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
