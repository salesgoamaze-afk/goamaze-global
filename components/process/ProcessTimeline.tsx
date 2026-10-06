import React from 'react';
import { exportProcessSteps } from '@/data/process';
import {
  FileText,
  ClipboardCheck,
  Search,
  ShieldCheck,
  PackageCheck,
  Ship,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText className="w-5 h-5" />,
  ClipboardCheck: <ClipboardCheck className="w-5 h-5" />,
  Search: <Search className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  PackageCheck: <PackageCheck className="w-5 h-5" />,
  Ship: <Ship className="w-5 h-5" />,
};

interface ProcessTimelineProps {
  detailed?: boolean;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ detailed = false }) => {
  return (
    <div className="w-full">
      {/* Desktop Horizontal Process Grid */}
      <div className="hidden lg:grid grid-cols-6 gap-4 relative">
        {/* Connecting Track Line */}
        <div className="absolute top-10 left-8 right-8 h-0.5 bg-gradient-to-r from-blue-500 via-blue-600 to-[#D89B16] z-0 opacity-40" />

        {exportProcessSteps.map((step) => (
          <div key={step.step} className="relative z-10 flex flex-col group">
            {/* Step Number & Icon Circle */}
            <div className="w-16 h-16 rounded-2xl bg-[#0B2A4A] border-2 border-blue-500/40 group-hover:border-blue-400 shadow-glow flex flex-col items-center justify-center text-blue-400 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white transition-all duration-300 mb-5 mx-auto">
              <span className="text-[10px] font-extrabold uppercase tracking-widest leading-none mb-0.5 opacity-80">
                {step.step}
              </span>
              <div className="scale-90">{iconMap[step.iconName]}</div>
            </div>

            {/* Step Card Content */}
            <div className="glass-card p-4 flex-1 flex flex-col justify-start text-center group-hover:border-blue-500/40 transition-colors">
              <h3 className="text-sm font-bold text-white mb-2 group-hover:text-blue-300 transition-colors font-heading">
                {step.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-body">
                {step.summary}
              </p>
              {detailed && (
                <p className="mt-3 pt-3 border-t border-white/10 text-[11px] text-slate-400 text-left leading-relaxed font-body">
                  {step.details}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile & Tablet Vertical Timeline */}
      <div className="lg:hidden relative pl-6 space-y-6">
        <div className="absolute left-2.5 top-3 bottom-3 w-0.5 bg-gradient-to-b from-blue-500 via-blue-600 to-[#D89B16] opacity-50" />

        {exportProcessSteps.map((step) => (
          <div key={step.step} className="relative flex items-start gap-4 group">
            {/* Step Bullet */}
            <div className="absolute -left-6 top-1 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white flex items-center justify-center text-[10px] font-extrabold shadow-sm">
              {step.step}
            </div>

            {/* Content Container */}
            <div className="glass-card flex-1 p-5 ml-2">
              <div className="flex items-center gap-2 mb-1 text-blue-400">
                {iconMap[step.iconName]}
                <h3 className="text-base font-bold text-white font-heading">
                  {step.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
                {step.summary}
              </p>
              {detailed && (
                <p className="mt-3 pt-3 border-t border-white/10 text-xs text-slate-400 leading-relaxed font-body">
                  {step.details}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;
