import React from 'react';
import type { Metadata } from 'next';
import {
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Package,
  SearchCheck,
  ClipboardList,
  Info,
} from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { CTAButton } from '@/components/common/CTAButton';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export const metadata: Metadata = {
  title: 'Quality & Compliance | Quality You Can Source With Confidence',
  description:
    'Discover our quality assurance framework for Indian Turmeric export — structured supplier selection, buyer specification matching, laboratory testing coordination, and export documentation.',
};

export default function QualityCompliancePage() {
  return (
    <div className="relative overflow-hidden pt-3 sm:pt-4 pb-14 sm:pb-20 space-y-8 sm:space-y-12">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="glow-blob w-[500px] h-[500px] bg-blue-600/10 -top-20 -left-20" />
        <div className="glow-blob w-[500px] h-[500px] bg-purple-600/10 top-1/2 -right-40" />
      </div>

      {/* Breadcrumb Navigation */}
      <div className="section-wrapper">
        <Breadcrumb items={[{ label: 'Quality & Compliance' }]} />
      </div>

      {/* Hero Header */}
      <section className="section-wrapper">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="section-label">
            <span>Quality Assurance & Standards</span>
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            Quality You Can Source With <span className="gradient-text">Confidence</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
            GoAmaze Global Exporters focuses on consistent sourcing, buyer-agreed product specifications, structured quality checks and appropriate export documentation.
          </p>
        </div>
      </section>

      {/* 5 Core Pillars */}
      <section className="section-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <div className="glass-card p-7 space-y-3.5">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading">1. Product Quality</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
              Products are sourced and prepared strictly according to agreed buyer specifications. Every batch is evaluated against the physical parameters, moisture limits, and form specified in your purchase agreement.
            </p>
            <ul className="space-y-2 pt-2 border-t border-white/10 text-xs text-slate-300 font-body">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Uniform physical grading & sorting</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Controlled moisture to protect shelf life</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="glass-card p-7 space-y-3.5">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 flex items-center justify-center font-bold">
              <SearchCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading">2. Supplier Selection</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
              We work with verified suppliers, agricultural aggregators, and milling units capable of meeting defined product parameters, consistent volumes, and hygienic handling practices.
            </p>
            <ul className="space-y-2 pt-2 border-t border-white/10 text-xs text-slate-300 font-body">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-300 shrink-0" />
                <span>Rigorous vetting of supplier capabilities</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-300 shrink-0" />
                <span>Regional origin traceability</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="glass-card p-7 space-y-3.5">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-500/30 text-purple-300 flex items-center justify-center font-bold">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading">3. Testing & Documentation</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
              Where required, product testing and documentation can be coordinated according to destination-country standards and buyer requirements prior to container stuffing.
            </p>
            <ul className="space-y-2 pt-2 border-t border-white/10 text-xs text-slate-300 font-body">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Coordinated Certificate of Analysis (COA)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Destination regulatory alignment</span>
              </li>
            </ul>
          </div>

          {/* Pillar 4 */}
          <div className="glass-card p-7 space-y-3.5">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 flex items-center justify-center font-bold">
              <Package className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading">4. Export Packaging</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
              Packaging can be customized based on product type, transit duration, handling equipment, and buyer branding requirements to guarantee protection across oceanic voyages.
            </p>
            <ul className="space-y-2 pt-2 border-t border-white/10 text-xs text-slate-300 font-body">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                <span>Multiwall paper, PP bags, or jute with inner liners</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                <span>Containerized moisture control & desiccants</span>
              </li>
            </ul>
          </div>

          {/* Pillar 5 */}
          <div className="glass-card p-7 space-y-3.5 md:col-span-2 lg:col-span-2">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-500/30 text-blue-300 flex items-center justify-center font-bold">
              <ClipboardList className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading">5. Export Documentation & Shipment Coordination</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
              We manage and coordinate all standard export shipping documentation required for smooth customs clearance at the buyer&apos;s destination port, including Commercial Invoices, Packing Lists, Certificates of Origin, Bills of Lading, and Phytosanitary certificates where applicable.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-white/10 text-xs text-slate-300 font-body">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Commercial Invoice & Packing List</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Phytosanitary & Fumigation Certification</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Certificate of Origin (COO)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Ocean Bill of Lading (B/L)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Note */}
      <section className="section-wrapper">
        <div className="glass-card p-6 border-blue-500/30 flex items-start gap-4 text-xs sm:text-sm text-slate-300 font-body">
          <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold text-white font-heading">Transparent Quality Guarantee:</p>
            <p className="leading-relaxed">
              We pride ourselves on transparent communication. Product parameters and test certificates are prepared and agreed in writing prior to shipment. Where buyers require third-party pre-shipment inspection (such as SGS, Bureau Veritas, or equivalent), we facilitate full coordination.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-wrapper">
        <div className="glass-card p-8 sm:p-10 text-center max-w-3xl mx-auto space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Have Specific Destination Quality Standards?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-body">
            Send us your technical product specification sheet or destination requirements for an immediate feasibility and quotation review.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CTAButton href="/get-a-quote" variant="primary" size="md" icon>
              Get a Quote
            </CTAButton>
            <CTAButton href="/contact" variant="ghost" size="md">
              Contact Quality Desk
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
