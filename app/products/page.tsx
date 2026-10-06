import React from 'react';
import type { Metadata } from 'next';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ProductGrid } from '@/components/products/ProductGrid';
import { CTAButton } from '@/components/common/CTAButton';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Products | Indian Turmeric Finger & Turmeric Powder',
  description:
    'Explore GoAmaze Global Exporters Indian Turmeric portfolio including premium whole Turmeric Fingers and finely milled Turmeric Powder for international B2B buyers.',
};

export default function ProductsPage() {
  return (
    <div className="relative overflow-hidden pt-3 sm:pt-4 pb-14 sm:pb-20 space-y-8 sm:space-y-12">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="glow-blob w-[500px] h-[500px] bg-blue-600/10 -top-20 -left-20" />
      </div>

      {/* Breadcrumb Navigation */}
      <div className="section-wrapper">
        <Breadcrumb items={[{ label: 'Products' }]} />
      </div>

      {/* Hero Header */}
      <section className="section-wrapper">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="section-label">
            <span>B2B Export Catalog</span>
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            Indian Turmeric <span className="gradient-text">Products</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
            Supplying premium whole dried turmeric fingers and finely milled turmeric powder, sourced from prime agricultural regions in India and prepared to agreed buyer specifications.
          </p>
        </div>
      </section>

      {/* Main Products Grid */}
      <section className="section-wrapper">
        <ProductGrid products={products} />
      </section>

      {/* Custom Specification & Buyer Notice */}
      <section className="section-wrapper">
        <div className="glass-card p-8 sm:p-10 border-blue-500/30">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white font-heading">
              Need Tailored Product Specifications or Special Packaging?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
              We work with international buyers on custom requirements — including specific polishing levels (unpolished / single / double), custom mesh powder granulation, multiwall paper or bulk PP/Jute export packaging, and third-party laboratory documentation.
            </p>
            <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
              <CTAButton href="/get-a-quote" variant="primary" size="md" icon>
                Request Custom Quotation
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
