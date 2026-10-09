'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  badge?: string;
  title?: string;
  highlightedText?: string;
  subtitle?: string;
  faqs: FAQItem[];
  className?: string;
  includeSchema?: boolean;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  badge = 'B2B Procurement FAQs',
  title = 'Frequently Asked',
  highlightedText = 'Questions',
  subtitle = 'Clear, direct answers regarding sourcing, quality parameters, minimum orders, and international shipping logistics.',
  faqs,
  className = '',
  includeSchema = true,
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleFAQ = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className={`py-12 sm:py-16 ${className}`} id="faq">
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="section-wrapper max-w-4xl mx-auto">
        <SectionHeading
          badge={badge}
          title={title}
          highlightedText={highlightedText}
          subtitle={subtitle}
          align="center"
        />

        <div className="space-y-4 mt-8">
          {faqs.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                className={`glass-card overflow-hidden transition-all duration-300 border ${
                  isOpen
                    ? 'border-blue-500/40 bg-white/[0.07] shadow-lg shadow-blue-500/10'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="flex items-start gap-3.5 pr-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5 text-blue-400">
                      <HelpCircle className="w-4 h-4" />
                    </span>
                    <span className="text-base sm:text-lg font-semibold text-white font-heading leading-snug">
                      {faq.question}
                    </span>
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-slate-300 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-blue-600/30 text-blue-300 border-blue-400/40' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed font-body border-t border-white/5 animate-fadeIn"
                  >
                    <p className="pl-10">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
