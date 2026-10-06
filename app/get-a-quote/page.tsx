import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ShieldCheck, Clock, FileCheck } from 'lucide-react';
import { companyContact } from '@/data/navigation';

export const metadata: Metadata = {
  title: 'Get a Quote | Request Sourcing Quotation for Indian Turmeric',
  description:
    'Request a commercial B2B quotation for Indian Turmeric Finger and Turmeric Powder. Specify quantity, packaging preferences, and destination port.',
};

export default function GetAQuotePage() {
  return (
    <div className="relative overflow-hidden pt-3 sm:pt-4 pb-14 sm:pb-20 space-y-8 sm:space-y-12">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="glow-blob w-[500px] h-[500px] bg-blue-600/10 -top-20 -left-20" />
        <div className="glow-blob w-[500px] h-[500px] bg-purple-600/10 top-1/2 -right-40" />
      </div>

      {/* Breadcrumb Navigation */}
      <div className="section-wrapper">
        <Breadcrumb items={[{ label: 'Get a Quote' }]} />
      </div>

      {/* Hero Header */}
      <section className="section-wrapper">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="section-label">
            <span>Direct Commercial RFQ</span>
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            Request an <span className="gradient-text">Export Quotation</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
            Please share your product requirements, volume estimates, and destination port below. Our international export desk will review your details and respond with commercial terms.
          </p>
        </div>
      </section>

      {/* Main Form & Trust Sidebar */}
      <section className="section-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Column */}
          <div className="lg:col-span-8">
            <Suspense fallback={<div className="glass-card p-8 text-center text-slate-400">Loading quotation form...</div>}>
              <QuoteForm />
            </Suspense>
          </div>

          {/* Sidebar / What to Expect */}
          <div className="lg:col-span-4 space-y-5">
            <div className="glass-card p-6 sm:p-7 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-blue-400 border-b border-white/10 pb-3 font-heading">
                Export Desk Commitments
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-300 font-body">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-heading">Prompt Response</strong>
                    <span>We evaluate commercial inquiries promptly with comprehensive pricing options.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-heading">Specification Review</strong>
                    <span>Physical parameters and packaging aligned to your destination port standards.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-heading">Sample Coordination</strong>
                    <span>Representative batch samples can be arranged prior to formal contract signing.</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 text-xs text-slate-400 font-body">
                Prefer direct email? Send specs to{' '}
                <a
                  href={`mailto:${companyContact.email}`}
                  className="text-blue-400 underline font-semibold block mt-1"
                >
                  {companyContact.email}
                </a>
              </div>
            </div>

            {/* Packaging & Logistics Note */}
            <div className="glass-card p-6 border-blue-500/30 text-xs text-slate-300 space-y-2 font-body">
              <h4 className="font-bold text-blue-300 font-heading">Commercial Flexibility:</h4>
              <p className="leading-relaxed">
                We support both 20ft and 40ft Full Container Loads (FCL), palletized or floor loaded, under FOB (Indian ports), CIF, or CFR terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
