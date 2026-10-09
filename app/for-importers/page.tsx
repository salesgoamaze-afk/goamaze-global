import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { FAQSection } from '@/components/common/FAQSection';
import { importersFAQs } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'For Importers | Sourcing Partner for Indian Turmeric',
  description:
    'Dedicated sourcing solutions for international spice importers, food manufacturers, distributors, and wholesalers looking for reliable Indian Turmeric Finger and Powder.',
  alternates: {
    canonical: '/for-importers',
  },
  openGraph: {
    title: 'Solutions for International Importers | GoAmaze Global Exporters',
    description:
      'Direct Indian sourcing, tailored specifications, flexible bulk packaging, and sample coordination for global food and spice businesses.',
    url: 'https://goamazeglobal.com/for-importers',
    siteName: 'GoAmaze Global Exporters',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Spice Importers & Blenders | GoAmaze Global Exporters',
    description:
      'Reliable Indian merchant export partner for international B2B spice buyers.',
  },
};

export default function ForImportersPage() {
  const importerBenefits = [
    {
      title: 'Direct Indian Sourcing',
      desc: 'Access origin-direct turmeric finger and powder from reputable Indian agricultural belts.',
    },
    {
      title: 'Buyer-Specific Specifications',
      desc: 'Customized mesh fineness, polishing standards, and physical parameters matched to your application.',
    },
    {
      title: 'Flexible Packaging Discussions',
      desc: 'Bulk 25kg/50kg PP, Jute, multiwall paper bags, or custom private labeling per agreement.',
    },
    {
      title: 'Sample Coordination',
      desc: 'Prompt courier dispatch of representative batch samples for lab evaluation and quality approval.',
    },
    {
      title: 'Quality Documentation',
      desc: 'Coordinated Certificate of Analysis (COA) and destination-specific compliance reports.',
    },
    {
      title: 'Export Documentation Support',
      desc: 'Accurate commercial invoices, packing lists, COO, and phytosanitary certificates.',
    },
    {
      title: 'Shipment Coordination',
      desc: 'Containerized sea-freight bookings (FCL/LCL) under standard Incoterms (FOB / CIF / CFR).',
    },
    {
      title: 'Direct & Transparent Communication',
      desc: 'Responsive export desk keeping you informed from production staging to vessel departure.',
    },
  ];

  return (
    <div className="relative overflow-hidden pt-3 sm:pt-4 pb-14 sm:pb-20 space-y-8 sm:space-y-12">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="glow-blob w-[500px] h-[500px] bg-blue-600/10 -top-20 -left-20" />
        <div className="glow-blob w-[500px] h-[500px] bg-purple-600/10 top-1/2 -right-40" />
      </div>

      {/* Breadcrumb Navigation */}
      <div className="section-wrapper">
        <Breadcrumb items={[{ label: 'For Importers' }]} />
      </div>

      {/* Hero Header */}
      <section className="section-wrapper">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="section-label">
            <span>B2B Importer Solutions</span>
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            Looking for a Reliable <span className="gradient-text">Indian Sourcing Partner?</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
            Whether you are an importer, distributor, wholesaler, food manufacturer or trading company, GoAmaze Global Exporters can help you source Indian turmeric according to your requirements.
          </p>
        </div>
      </section>

      {/* Core Importer Benefits Grid */}
      <section className="section-wrapper">
        <SectionHeading
          badge="Partner Advantages"
          title="Why Source Through"
          highlightedText="GoAmaze Global Exporters"
          subtitle="Designed from the ground up to minimize friction in international agricultural procurement."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {importerBenefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-card p-5 space-y-2 hover:-translate-y-1 transition-transform duration-200"
            >
              <div className="flex items-center gap-2 text-blue-400">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <h3 className="text-sm font-bold text-white font-heading">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed pl-7 font-body">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive RFQ / Sourcing Form Section */}
      <section className="section-wrapper max-w-4xl mx-auto">
        <SectionHeading
          badge="Start Sourcing"
          title="Send Your Requirement"
          subtitle="Submit your specifications, target volumes, and destination seaport for an expedited commercial review."
        />

        <Suspense fallback={<div className="glass-card p-8 text-center text-slate-400">Loading sourcing form...</div>}>
          <QuoteForm />
        </Suspense>
      </section>

      {/* Importers FAQ Section (AEO/GEO Optimized) */}
      <FAQSection
        badge="Importer Trade FAQs"
        title="International Buyer"
        highlightedText="Trade Questions"
        subtitle="Key answers regarding Indian port logistics, custom documentation, and lead times."
        faqs={importersFAQs}
      />
    </div>
  );
}
