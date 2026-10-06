'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`py-2 px-3.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md inline-flex items-center gap-2 text-xs font-body max-w-full overflow-x-auto shadow-sm ${className}`}
    >
      <Link
        href="/"
        className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors shrink-0"
      >
        <Home className="w-3.5 h-3.5 text-blue-400" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
            {isLast || !item.href ? (
              <span className="text-white font-semibold shrink-0 truncate max-w-[200px] sm:max-w-none">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-slate-400 hover:text-blue-300 transition-colors shrink-0"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
