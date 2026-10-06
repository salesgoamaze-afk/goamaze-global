import React from 'react';
import { Globe, Navigation } from 'lucide-react';

export const WorldTradeVisual: React.FC = () => {
  return (
    <div className="glass-card relative p-6 sm:p-10 text-white overflow-hidden">
      {/* Background World Network Lines SVG */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
          <path
            d="M 50,150 Q 200,30 350,120"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <path
            d="M 80,160 Q 220,70 380,80"
            fill="none"
            stroke="#D89B16"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
          <circle cx="200" cy="110" r="6" fill="#3B82F6" />
          <circle cx="350" cy="120" r="4" fill="#D89B16" />
          <circle cx="80" cy="160" r="4" fill="#60A5FA" />
        </svg>
      </div>

      <div className="relative z-10">
        <span className="section-label mb-3">
          <Navigation className="w-3.5 h-3.5 text-[#D89B16]" />
          <span>India → International Trade Seaports</span>
        </span>

        <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 font-heading">
          Global Merchant Export Logistics
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-3xl font-body">
          We coordinate sea-freight bookings (FCL/LCL), container stuffing, phytosanitary fumigation, and complete international shipping documentation from major Indian ports directly to your destination port.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10">
          <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5">
            <span className="text-[10px] text-blue-400 uppercase font-bold block mb-1 font-heading">
              Dispatch Origin
            </span>
            <span className="text-xs sm:text-sm font-bold text-white font-body">Indian Ports</span>
          </div>
          <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5">
            <span className="text-[10px] text-blue-300 uppercase font-bold block mb-1 font-heading">
              Load Types
            </span>
            <span className="text-xs sm:text-sm font-bold text-white font-body">20ft / 40ft FCL</span>
          </div>
          <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5">
            <span className="text-[10px] text-[#F2B544] uppercase font-bold block mb-1 font-heading">
              Trade Terms
            </span>
            <span className="text-xs sm:text-sm font-bold text-white font-body">FOB, CIF, CFR</span>
          </div>
          <div className="bg-white/[0.03] p-3.5 rounded-xl border border-white/5">
            <span className="text-[10px] text-blue-300 uppercase font-bold block mb-1 font-heading">
              Documents
            </span>
            <span className="text-xs sm:text-sm font-bold text-white font-body">BL, CO, Phyto</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldTradeVisual;
