import React from 'react';
import type { Metadata } from 'next';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ProcessTimeline } from '@/components/process/ProcessTimeline';
import { CTAButton } from '@/components/common/CTAButton';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ShieldCheck, Ship, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Export Process | 6-Step International Trade Workflow',
  description:
    'Learn how GoAmaze Global Exporters manages international turmeric export from inquiry, requirement review, Indian sourcing, and quality checks to documentation and port dispatch.',
  alternates: {
    canonical: '/our-process',
  },
  openGraph: {
    title: 'Our 6-Step Export Process | GoAmaze Global Exporters',
    description:
      'Explore our structured international trade workflow from inquiry, Indian farm sourcing, and lab checks to export packaging and ocean dispatch.',
    url: 'https://goamazeglobal.com/our-process',
    siteName: 'GoAmaze Global Exporters',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Export Process Workflow | GoAmaze Global Exporters',
    description:
      'Seamless 6-step international supply chain for Indian Turmeric bulk export.',
  },
};

export default function OurProcessPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Import Indian Turmeric in Bulk: 6-Step Export Process',
    description:
      'A comprehensive step-by-step guide to importing whole turmeric fingers and turmeric powder from India via GoAmaze Global Exporters.',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: 'Contact for Quote',
    },
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Submit Product Inquiry',
        text: 'Submit requirement details specifying turmeric variety (Salem, Nizamabad, Rajapore), grade, volume (FCL/LCL), and destination port.',
        url: 'https://goamazeglobal.com/get-a-quote',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Requirement Review & Proforma Invoice',
        text: 'Review physical/chemical specifications, agreed Incoterms (FOB/CIF/CFR), and issue formal Proforma Invoice and commercial contract.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Origin Sourcing & Farmer Network Engagement',
        text: 'Procure high-curcumin turmeric lots directly from verified agricultural processors in Sangli, Nanded, or Erode farming regions.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Lab Testing & Sample Approval',
        text: 'Conduct HPLC testing for curcumin, moisture (<10%), heavy metal analysis, and courier pre-shipment samples for buyer sign-off.',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Fumigation, Export Packing & Customs Clearance',
        text: 'Pack in food-grade jute/PP bags, execute professional container fumigation, and obtain Phytosanitary and Spices Board certificates.',
      },
      {
        '@type': 'HowToStep',
        position: 6,
        name: 'Port Dispatch & Document Transmission',
        text: 'Dispatch container from JNPT / Nhava Sheva Port, Mumbai and transmit original Bill of Lading, Invoice, Packing List, and COA via DHL/FedEx.',
      },
    ],
  };

  return (
    <div className="relative overflow-hidden pt-3 sm:pt-4 pb-14 sm:pb-20 space-y-8 sm:space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="glow-blob w-[500px] h-[500px] bg-purple-600/10 -top-20 -left-20" />
        <div className="glow-blob w-[500px] h-[500px] bg-blue-600/10 top-1/2 -right-40" />
      </div>

      {/* Breadcrumb Navigation */}
      <div className="section-wrapper">
        <Breadcrumb items={[{ label: 'Our Process' }]} />
      </div>

      {/* Hero Header */}
      <section className="section-wrapper">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="section-label">
            <span>Seamless Trade Execution</span>
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            Our 6-Step <span className="gradient-text">Export Process</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
            A transparent, structured workflow designed to provide international buyers with complete clarity and confidence at every stage of sourcing and shipment.
          </p>
        </div>
      </section>

      {/* Main 6-Step Process Timeline */}
      <section className="section-wrapper">
        <ProcessTimeline detailed={true} />
      </section>

      {/* Commercial Terms & Logistics */}
      <section className="section-wrapper">
        <SectionHeading
          badge="Trade Execution"
          title="Commercial Terms & Logistics Coordination"
          subtitle="Standard international trade practices tailored to your supply chain preferences."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 sm:p-7 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold">
              <Ship className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading">Incoterms Flexibility</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
              We accommodate various international commercial trade terms — including FOB (Indian Origin Ports), CFR, and CIF (Destination Seaports) based on buyer freight arrangements.
            </p>
          </div>

          <div className="glass-card p-6 sm:p-7 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading">Pre-Shipment Verification</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
              Representative batch samples and specification sheets are verified before final container stuffing. Third-party testing can be arranged per buyer agreement.
            </p>
          </div>

          <div className="glass-card p-6 sm:p-7 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-500/15 border border-purple-500/30 text-purple-300 flex items-center justify-center font-bold">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading">Document Transmission</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
              Draft export documents are shared with the buyer for prior verification before final issuance, ensuring seamless customs clearance at destination.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-wrapper">
        <div className="glass-card p-8 sm:p-10 text-center max-w-3xl mx-auto space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Start Step 01: Send Us Your Inquiry
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-body">
            Fill in your required product parameters, volume, and destination port. Our trade team will respond with a tailored quotation and technical specs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CTAButton href="/get-a-quote" variant="primary" size="lg" icon>
              Get a Quote Now
            </CTAButton>
            <CTAButton href="/for-importers" variant="ghost" size="lg">
              For Importers Guide
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
