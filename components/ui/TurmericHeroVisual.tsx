'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const TurmericHeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* GoAmaze Signature Ambient Glow Blobs */}
      <div className="glow-blob w-72 h-72 bg-blue-500/25 -top-10 -left-10 glow-pulse" />
      <div className="glow-blob w-72 h-72 bg-[#D89B16]/15 -bottom-10 -right-10 glow-pulse" />

      {/* Main Glassmorphic Showcase Card */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.4 }}
        className="glass-card relative p-6 sm:p-7 shadow-card overflow-hidden"
      >
        {/* Top Header inside Card */}
        <div className="relative flex items-center justify-between pb-5 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D89B16] animate-ping" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-200 font-heading">
              Indian Merchant Exporters
            </span>
          </div>
          <span className="section-label mb-0 py-1 px-3 text-[10px]">
            B2B Sourcing
          </span>
        </div>

        {/* Product Comparison / Showcase Visual */}
        <div className="relative pt-5 grid grid-cols-2 gap-3.5">
          {/* Turmeric Finger Mini Showcase */}
          <Link
            href="/products/turmeric-finger"
            className="group/item relative rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-blue-400/50 p-4 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-blue-400/30 shadow-md bg-slate-900">
                <Image
                  src="/images/products/turmeric-finger.jpg"
                  alt="Turmeric Finger"
                  fill
                  sizes="44px"
                  className="object-cover group-hover/item:scale-115 transition-transform duration-300"
                />
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover/item:text-blue-400 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 block mb-0.5 font-heading">
                Whole Dried
              </span>
              <h4 className="text-sm sm:text-base font-bold text-white group-hover/item:text-blue-300 transition-colors font-heading">
                Turmeric Finger
              </h4>
              <p className="text-[11px] text-slate-400 mt-1 leading-snug font-body">
                Single/Double Polished & Unpolished
              </p>
            </div>
          </Link>

          {/* Turmeric Powder Mini Showcase */}
          <Link
            href="/products/turmeric-powder"
            className="group/item relative rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#D89B16]/50 p-4 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-[#D89B16]/40 shadow-md bg-white/10 backdrop-blur-sm p-1">
                <Image
                  src="/images/products/turmeric-powder.png"
                  alt="Turmeric Powder"
                  fill
                  sizes="44px"
                  className="object-contain p-0.5 group-hover/item:scale-115 transition-transform duration-300"
                />
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover/item:text-[#F2B544] group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#F2B544] block mb-0.5 font-heading">
                Fine Ground
              </span>
              <h4 className="text-sm sm:text-base font-bold text-white group-hover/item:text-[#F2B544] transition-colors font-heading">
                Turmeric Powder
              </h4>
              <p className="text-[11px] text-slate-400 mt-1 leading-snug font-body">
                Custom mesh granulation for food & industry
              </p>
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default TurmericHeroVisual;
