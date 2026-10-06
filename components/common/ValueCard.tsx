import React from 'react';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  className?: string;
}

export const ValueCard: React.FC<ValueCardProps> = ({
  icon: Icon,
  title,
  description,
  href,
  className = '',
}) => {
  const content = (
    <div className={`glass-card p-6 sm:p-7 relative overflow-hidden group ${className}`}>
      {/* Decorative top accent glow */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-blue-600 to-[#D89B16] opacity-40 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 via-blue-600/15 to-blue-700/20 border border-blue-500/30 flex items-center justify-center text-blue-300 mb-5 group-hover:scale-110 group-hover:border-blue-400 group-hover:text-white transition-all duration-300 shadow-sm">
        <Icon className="w-6 h-6" />
      </div>

      <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-blue-300 transition-colors font-heading">
        {title}
      </h3>

      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
        {description}
      </p>
    </div>
  );

  if (href) {
    return <Link href={href} className="block">{content}</Link>;
  }

  return content;
};

export default ValueCard;
