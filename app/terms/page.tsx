import React from 'react';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/common/Breadcrumb';
import { companyContact } from '@/data/navigation';

export const metadata: Metadata = {
  title: 'Terms & Conditions | GoAmaze Global Exporters',
  description: 'Terms and Conditions governing the use of GoAmaze Global Exporters website and international commercial inquiries.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="section-wrapper pt-3 sm:pt-4 pb-14 sm:pb-20 space-y-6">
      <Breadcrumb
        items={[
          { label: 'Terms & Conditions' },
        ]}
      />

      <div>
        <span className="section-label">Legal Information</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
          Terms & Conditions
        </h1>
      </div>

      <div className="glass-card p-8 sm:p-10 space-y-6 text-slate-300 text-sm leading-relaxed font-body">
        <p>
          Welcome to the website of <strong className="text-white">{companyContact.name}</strong>. By accessing or using this website, you agree to comply with and be bound by the following Terms and Conditions.
        </p>

        <h2 className="text-lg font-bold text-white font-heading">1. Commercial Inquiries & Quotations</h2>
        <p>
          All information, product descriptions, and technical specifications provided on this website are for informational and B2B inquiry purposes only. Quotations generated or discussed are subject to final written agreement, formal Proforma Invoices, purchase order confirmation, and mutually agreed Incoterms (such as FOB, CIF, or CFR).
        </p>

        <h2 className="text-lg font-bold text-white font-heading">2. Product Specifications & Custom Orders</h2>
        <p>
          Agricultural products are subject to natural variations. Exact physical parameters, moisture limits, granulation/mesh size, and chemical attributes are defined and agreed upon on a per-contract basis in formal sales contracts.
        </p>

        <h2 className="text-lg font-bold text-white font-heading">3. Intellectual Property</h2>
        <p>
          The content, trademarks, logo, graphics, design, and structure of this website are the property of GoAmaze / GoAmaze Global Exporters and are protected by applicable intellectual property laws.
        </p>

        <h2 className="text-lg font-bold text-white font-heading">4. Limitation of Liability</h2>
        <p>
          While we endeavor to keep the website information updated and accurate, GoAmaze Global Exporters makes no warranties of any kind regarding completeness or accuracy of informational content. Formal commercial warranties are solely governed by signed trade agreements.
        </p>

        <h2 className="text-lg font-bold text-white font-heading">5. Contact Information</h2>
        <p>
          For questions regarding these Terms, contact our trade desk at{' '}
          <a href={`mailto:${companyContact.email}`} className="text-sky-400 hover:text-sky-300 underline font-medium">
            {companyContact.email}
          </a>.
        </p>
      </div>
    </div>
  );
}
