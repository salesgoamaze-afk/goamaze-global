import React from 'react';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/common/Breadcrumb';
import { companyContact } from '@/data/navigation';

export const metadata: Metadata = {
  title: 'Trade Disclaimer | GoAmaze Global Exporters',
  description: 'Trade disclaimer regarding agricultural commodity specifications, export terms, and compliance representations.',
};

export default function DisclaimerPage() {
  return (
    <div className="section-wrapper pt-3 sm:pt-4 pb-14 sm:pb-20 space-y-6">
      <Breadcrumb
        items={[
          { label: 'Trade Disclaimer' },
        ]}
      />

      <div>
        <span className="section-label">Compliance Information</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
          Trade Disclaimer
        </h1>
        <p className="text-xs text-slate-400 mt-2 font-body">
          Effective Date: January 1, 2026 • Last Updated: 2026
        </p>
      </div>

      <div className="glass-card p-8 sm:p-10 space-y-6 text-slate-300 text-sm leading-relaxed font-body">
        <h2 className="text-lg font-bold text-white font-heading">1. Agricultural Product Representation</h2>
        <p>
          Products listed on this website (such as Turmeric Finger and Turmeric Powder) represent commercial agricultural commodities sourced from Indian agricultural belts. Actual physical attributes, natural coloration, and chemical composition may vary between agricultural crops and seasonal harvests.
        </p>

        <h2 className="text-lg font-bold text-white font-heading">2. Certification & Regulatory Compliance</h2>
        <p>
          Any specific certification requirements (such as Phytosanitary certification, Certificate of Origin, Fumigation certification, or independent laboratory test reports from accredited agencies such as SGS or equivalent) are coordinated and issued specifically for individual purchase orders according to the statutory requirements of the destination country and the mutual contract agreement between buyer and seller.
        </p>

        <h2 className="text-lg font-bold text-white font-heading">3. Non-Binding Website Content</h2>
        <p>
          The content displayed on this website is intended for general informational and preliminary business-to-business (B2B) evaluation. It does not constitute a formal binding offer or price commitment until a formal contract is executed by authorized representatives of GoAmaze Global Exporters.
        </p>

        <h2 className="text-lg font-bold text-white font-heading">4. Export Desk Contact</h2>
        <p>
          For specific inquiries regarding commercial terms or regulatory parameters, please contact{' '}
          <a href={`mailto:${companyContact.email}`} className="text-sky-400 hover:text-sky-300 underline font-medium">
            {companyContact.email}
          </a>.
        </p>
      </div>
    </div>
  );
}
