import React from 'react';
import { ProductSpecification } from '@/types';
import { Info } from 'lucide-react';

interface ProductSpecTableProps {
  specifications: ProductSpecification[];
  className?: string;
}

export const ProductSpecTable: React.FC<ProductSpecTableProps> = ({
  specifications,
  className = '',
}) => {
  return (
    <div className={`glass-card overflow-hidden ${className}`}>
      <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex items-center justify-between">
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
            Technical Specification Matrix
          </h4>
          <p className="text-xs text-slate-400 mt-0.5 font-body">
            Standard baseline parameters; custom specifications agreed per purchase order.
          </p>
        </div>
      </div>

      <div className="divide-y divide-white/5">
        {specifications.map((spec, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-12 px-6 py-4 items-start sm:items-center gap-2 ${
              index % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'
            }`}
          >
            <div className="md:col-span-4 text-xs sm:text-sm font-semibold text-slate-200 font-body">
              {spec.label}
            </div>
            <div className="md:col-span-4 text-xs sm:text-sm text-blue-300 font-medium font-body">
              {spec.value}
            </div>
            <div className="md:col-span-4 text-[11px] sm:text-xs text-slate-400 italic font-body">
              {spec.note}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-600/10 p-4 border-t border-blue-500/20 flex items-start gap-2.5 text-xs text-blue-200 font-body">
        <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
        <span>
          <strong className="text-white font-heading">Commercial Note:</strong> Detailed laboratory test reports, Certificates of Analysis (COA), and destination-specific compliance documents are coordinated per contracted order terms.
        </span>
      </div>
    </div>
  );
};

export default ProductSpecTable;
