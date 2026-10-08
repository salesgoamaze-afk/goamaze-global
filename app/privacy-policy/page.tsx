import React from 'react';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/common/Breadcrumb';
import { companyContact } from '@/data/navigation';

export const metadata: Metadata = {
  title: 'Privacy Policy | GoAmaze Global Exporters',
  description: 'Privacy Policy and information protection terms for GoAmaze Global Exporters website visitors and commercial inquiries.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="section-wrapper pt-3 sm:pt-4 pb-14 sm:pb-20 space-y-6">
      <Breadcrumb
        items={[
          { label: 'Privacy Policy' },
        ]}
      />

      <div>
        <span className="section-label">Legal Information</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
          Privacy Policy
        </h1>
      </div>

      <div className="glass-card p-8 sm:p-10 space-y-6 text-slate-300 text-sm leading-relaxed font-body">
        <p>
          At <strong className="text-white">{companyContact.name}</strong> (a GoAmaze enterprise), we respect the privacy of our website visitors and international commercial partners. This Privacy Policy outlines the types of information we collect when you use our website and how we safeguard your data.
        </p>

        <h2 className="text-lg font-bold text-white font-heading">1. Information We Collect</h2>
        <p>
          When you submit an inquiry, request a quotation, or contact our trade desk, we collect business-related contact details you voluntarily provide, including:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-slate-400">
          <li>Full name and job title</li>
          <li>Company or organization name and registered country</li>
          <li>Corporate email address and phone/WhatsApp number</li>
          <li>Product specification requirements, target ports, and commercial volumes</li>
        </ul>

        <h2 className="text-lg font-bold text-white font-heading">2. How We Use Your Information</h2>
        <p>
          The information collected is used exclusively for legitimate B2B commercial purposes:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-slate-400">
          <li>Preparing accurate export quotations and specification sheets</li>
          <li>Coordinating sample dispatches and freight estimations</li>
          <li>Communicating regarding commercial transactions and trade inquiries</li>
          <li>Complying with applicable export-import regulatory requirements</li>
        </ul>

        <h2 className="text-lg font-bold text-white font-heading">3. Data Protection & Confidentiality</h2>
        <p>
          We do not sell, rent, or trade your business contact details to third-party marketing companies. Sourcing and product details shared with us are treated with standard commercial confidentiality.
        </p>

        <h2 className="text-lg font-bold text-white font-heading">4. Contact Us</h2>
        <p>
          If you have questions regarding this Privacy Policy or wish to update your commercial contact details, please contact us at{' '}
          <a href={`mailto:${companyContact.email}`} className="text-sky-400 hover:text-sky-300 underline font-medium">
            {companyContact.email}
          </a>.
        </p>
      </div>
    </div>
  );
}
