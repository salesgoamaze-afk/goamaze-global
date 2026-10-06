'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, FileText, Sparkles } from 'lucide-react';
import { Product } from '@/types';
import { Badge } from '@/components/common/Badge';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className={`glass-card flex flex-col overflow-hidden group ${className}`}
    >
      {/* Product Image / Visual Showcase Area - Full Frame */}
      <div className="relative h-64 sm:h-72 w-full bg-slate-900 border-b border-white/10 overflow-hidden">
        {/* Full Frame Product Image */}
        {product.id === 'turmeric-finger' ? (
          <Image
            src="/images/products/turmeric-finger.jpg"
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
          />
        ) : product.id === 'turmeric-powder' ? (
          <div className="relative w-full h-full bg-gradient-to-br from-slate-900 via-[#0B2A4A]/50 to-slate-950">
            <Image
              src="/images/products/turmeric-powder.png"
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-900">
            <span className="text-6xl select-none filter drop-shadow-[0_8px_16px_rgba(99,102,241,0.4)]">
              ✨
            </span>
          </div>
        )}

        {/* Subtle Gradient Scrim Overlay for text contrast and depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A] via-[#0B2A4A]/25 to-black/30 pointer-events-none z-10" />

        {/* Badges on top */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
          <Badge variant="blue" size="sm">Origin: {product.origin}</Badge>
          {product.badge && <Badge variant="gold" size="sm">{product.badge}</Badge>}
        </div>

        {/* Feature Chip floating at bottom of image frame */}
        <div className="absolute bottom-3 left-4 z-20 bg-slate-900/90 backdrop-blur-md border border-[#D89B16]/40 px-3 py-1 rounded-full text-[11px] font-bold text-[#F2B544] shadow-md flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-[#F2B544]" />
          <span>{product.id === 'turmeric-finger' ? 'Whole Dried Roots' : 'Fine Milled Granulation'}</span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading group-hover:text-blue-300 transition-colors">
              <Link href={`/products/${product.slug}`}>{product.title}</Link>
            </h3>
          </div>

          {product.botanicalName && (
            <p className="text-xs font-serif italic text-blue-300/90 mb-3">
              Botanical: {product.botanicalName}
            </p>
          )}

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
            {product.shortDescription}
          </p>

          {/* Highlights */}
          <div className="mt-5 pt-4 border-t border-white/10 space-y-2">
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-heading">
              Export Highlights
            </div>
            {product.highlights.slice(0, 3).map((item, index) => (
              <div key={index} className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <Link
            href={`/get-a-quote?product=${product.slug}`}
            className="btn-primary flex-1 py-2 text-xs font-bold"
          >
            <span>Request Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            href={`/products/${product.slug}`}
            className="btn-ghost py-2 px-3 text-xs font-semibold"
          >
            <FileText className="w-3.5 h-3.5 text-slate-400" />
            <span>Specifications</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
