import React from 'react';
import type { Metadata } from 'next';
import {
  Building2,
  CheckCircle2,
  ShieldCheck,
  Target,
  Handshake,
} from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { CTAButton } from '@/components/common/CTAButton';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export const metadata: Metadata = {
  title: 'About Us | Your Trusted Indian Export Partner',
  description:
    'Learn about GoAmaze Global Exporters, an India-based merchant exporter under the GoAmaze umbrella committed to reliable sourcing and transparent B2B trade partnerships.',
  alternates: {
    canonical: "about-us",
  },
};

export default function AboutUsPage() {
  return (
    <div className="relative overflow-hidden pt-3 sm:pt-4 pb-14 sm:pb-20 space-y-8 sm:space-y-12">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="glow-blob w-[500px] h-[500px] bg-blue-600/10 -top-20 -left-20" />
        <div className="glow-blob w-[500px] h-[500px] bg-purple-600/10 top-1/2 -right-40" />
      </div>

      {/* Breadcrumb Navigation */}
      <div className="section-wrapper">
        <Breadcrumb items={[{ label: 'About Us' }]} />
      </div>

      {/* Hero Header */}
      <section className="section-wrapper">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="section-label">
            <span>About GoAmaze Global Exporters</span>
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            Your Trusted Export Partner from <span className="gradient-text">India</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
            GoAmaze Global Exporters is an India-based merchant export business, connecting international buyers with quality products through dependable sourcing and professional export coordination.
          </p>
        </div>
      </section>

      {/* Corporate Overview */}
      <section className="section-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Bridging Indian Agro-Origins & <span className="gradient-text">Global Markets</span>
            </h2>
            <div className="space-y-4 text-slate-300 text-xs sm:text-sm leading-relaxed font-body">
              <p>
                <strong className="text-white">GoAmaze Global Exporters</strong> was established to provide overseas commercial buyers with a transparent, structured, and dependable bridge to India&apos;s rich agricultural heartlands.
              </p>
              <p>
                Our initial focus is on <strong className="text-blue-400">turmeric products</strong> — both whole dried turmeric fingers and finely milled turmeric powder. By combining direct supplier relationships in primary growing regions with rigorous quality review and clear commercial documentation, we ensure our clients receive products aligned exactly with their application standards.
              </p>
              <p>
                As part of the wider <strong className="text-white">GoAmaze</strong> enterprise, we uphold principles of commercial integrity, proactive client communication, and reliable fulfillment.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 glass-card p-7 sm:p-8 space-y-5">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <Building2 className="w-6 h-6 text-blue-400" />
              <div>
                <h3 className="text-base font-bold text-white font-heading">Enterprise Framework</h3>
                <p className="text-xs text-slate-400 font-body">GoAmaze Family of Businesses</p>
              </div>
            </div>

            <div className="space-y-3.5">
              <div className="bg-white/[0.03] p-4 rounded-xl border border-white/5">
                <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1 font-heading">
                  Our Mission
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-body">
                  To make sourcing quality agricultural commodities and spices from India simpler, more transparent, and consistently reliable for international importers.
                </p>
              </div>

              <div className="bg-white/[0.03] p-4 rounded-xl border border-white/5">
                <div className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-1 font-heading">
                  Our Sourcing Philosophy
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-body">
                  Every international buyer has unique destination regulations, granulation preferences, or active compound requirements. We believe in tailored commercial partnerships rather than generic bulk supply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Sourcing & Value Pillars */}
      <section className="section-wrapper">
        <SectionHeading
          badge="Operating Values"
          title="Principles That Define Our Trade"
          subtitle="How we manage sourcing, specifications, and fulfillment for international partners."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-7 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading">Verified Sourcing Network</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
              We work closely with verified Indian growers, aggregators, and processing mills that adhere to sound post-harvest handling and drying protocols.
            </p>
          </div>

          <div className="glass-card p-7 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 flex items-center justify-center font-bold">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading">Specification Accuracy</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
              We confirm physical parameters, mesh granularity, moisture tolerances, and packaging preferences before initiating shipment fulfillment.
            </p>
          </div>

          <div className="glass-card p-7 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-500/30 text-purple-300 flex items-center justify-center font-bold">
              <Handshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading">Long-Term Partnerships</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
              We prioritize repeatable, trust-based commercial relationships with international trading houses, food manufacturers, and wholesalers.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-wrapper">
        <div className="glass-card p-8 sm:p-10 text-center max-w-3xl mx-auto space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Discuss Your Sourcing Needs With Us
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-body">
            Our trade desk is ready to review your specifications, prepare quotation options, and arrange product sample evaluations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CTAButton href="/get-a-quote" variant="primary" size="md" icon>
              Get a Quote
            </CTAButton>
            <CTAButton href="/contact" variant="ghost" size="md">
              Contact Export Desk
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
