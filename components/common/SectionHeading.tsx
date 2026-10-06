import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightedText?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlightedText,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-10 ${alignmentClasses[align]} ${className}`}>
      {badge && (
        <span className="section-label">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D89B16] animate-pulse" />
          <span>{badge}</span>
        </span>
      )}

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight font-heading">
        {title}{' '}
        {highlightedText && (
          <span className="gradient-text">{highlightedText}</span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-body">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
