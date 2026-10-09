import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  CheckCircle2,
  Package,
  ShieldCheck,
  Layers,
} from 'lucide-react';
import Image from 'next/image';
import { getProductBySlug } from '@/data/products';
import { Badge } from '@/components/common/Badge';
import { CTAButton } from '@/components/common/CTAButton';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ProductSpecTable } from '@/components/products/ProductSpecTable';

export const metadata: Metadata = {
  title: 'Turmeric Finger | Indian Whole Dried Turmeric Exporter',
  description:
    'Source premium whole dried Indian Turmeric Fingers from GoAmaze Global Exporters. Multiple grades (unpolished/single/double polished), bulk packaging, and customized export specifications.',
  alternates: {
    canonical: '/products/turmeric-finger',
  },
  openGraph: {
    title: 'Turmeric Finger | Indian Whole Dried Turmeric Exporter',
    description:
      'Premium whole dried Indian Turmeric Fingers. High curcumin, unpolished, single/double polished export grades for international B2B buyers.',
    url: 'https://goamazeglobal.com/products/turmeric-finger',
    siteName: 'GoAmaze Global Exporters',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/products/turmeric-finger.jpg',
        width: 1200,
        height: 800,
        alt: 'Premium Indian Turmeric Finger',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turmeric Finger | Indian Whole Dried Turmeric Exporter',
    description:
      'Premium whole dried Indian Turmeric Fingers with custom export specifications and bulk packaging.',
    images: ['/images/products/turmeric-finger.jpg'],
  },
};

export default function TurmericFingerPage() {
  const product = getProductBySlug('turmeric-finger');

  if (!product) {
    notFound();
  }

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Indian Turmeric Finger',
    image: 'https://goamazeglobal.com/images/products/turmeric-finger.jpg',
    description: product.fullDescription,
    sku: 'GAG-TF-01',
    category: 'Spices & Agricultural Commodities',
    brand: {
      '@type': 'Brand',
      name: 'GoAmaze Global Exporters',
    },
    countryOfOrigin: {
      '@type': 'Country',
      name: 'India',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      price: 'Contact for Quote',
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      url: 'https://goamazeglobal.com/products/turmeric-finger',
      seller: {
        '@type': 'Organization',
        name: 'GoAmaze Global Exporters',
      },
    },
  };

  return (
    <div className="relative overflow-hidden pt-3 sm:pt-4 pb-14 sm:pb-20 space-y-8 sm:space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="glow-blob w-[500px] h-[500px] bg-blue-600/10 -top-20 -left-20" />
      </div>

      {/* Breadcrumb Navigation */}
      <div className="section-wrapper">
        <Breadcrumb
          items={[
            { label: 'Products', href: '/products' },
            { label: 'Turmeric Finger' },
          ]}
        />
      </div>

      {/* Main Product Hero & Overview */}
      <section className="section-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Visual Banner */}
          <div className="lg:col-span-5 glass-card p-7 sm:p-10 border-blue-500/30 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="w-full h-64 sm:h-80 rounded-2xl border border-white/10 shadow-2xl overflow-hidden relative mb-5">
              <Image
                src="/images/products/turmeric-finger.jpg"
                alt="Whole Dried Turmeric Finger"
                fill
                sizes="(max-width: 640px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
              <Badge variant="blue" size="md">Origin: {product.origin}</Badge>
              <Badge variant="purple" size="md">Whole Dried Form</Badge>
            </div>

            <p className="text-xs text-slate-400 font-serif italic font-body">
              {product.botanicalName} • Indian Agricultural Origin
            </p>

            {/* Quick Action Band */}
            <div className="w-full mt-6 pt-5 border-t border-white/10 flex flex-col gap-3">
              <Link
                href={`/get-a-quote?product=${product.slug}`}
                className="btn-primary w-full text-center py-3 text-xs font-bold"
              >
                Request Quotation & Pricing
              </Link>
              <Link
                href="/contact"
                className="btn-ghost w-full text-center py-2.5 text-xs font-semibold"
              >
                Request Product Specification Sheet
              </Link>
            </div>
          </div>

          {/* Right Product Information */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="section-label mb-1">
                Bulk Merchant Export
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading mt-1">
                {product.title}
              </h1>
              <p className="text-xs sm:text-sm font-serif italic text-blue-300 mt-1 font-body">
                Botanical Name: {product.botanicalName}
              </p>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-body">
              {product.fullDescription}
            </p>

            {/* Product Key Highlights */}
            <div className="pt-4 border-t border-white/10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 font-heading">
                Key Product Characteristics
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-body">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Commercial Applications */}
            <div className="pt-4 border-t border-white/10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3 font-heading">
                Commercial & Industrial Applications
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-body">
                {product.applications.map((app, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Table */}
      <section className="section-wrapper">
        <SectionHeading
          badge="Product Specifications"
          title="Turmeric Finger Parameter Overview"
          subtitle="Physical grading, cleaning standards, and export packing specifications."
          align="left"
        />

        <ProductSpecTable specifications={product.specifications} />
      </section>

      {/* Available Grades & Finishing */}
      <section className="section-wrapper">
        <SectionHeading
          badge="Grades & Forms"
          title="Available Commercial Grades"
          subtitle="Supplied to match the exact processing needs of millers and distributors."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {product.grades.map((grade, index) => (
            <div key={index} className="glass-card p-6 space-y-3">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider font-heading">
                <Layers className="w-4 h-4" />
                <span>Grade Classification</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white font-heading">
                {grade.name}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
                {grade.description}
              </p>
              <div className="pt-3 border-t border-white/10 text-xs text-slate-400 font-body">
                <strong className="text-blue-300">Typical Applications:</strong> {grade.typicalUses}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Packaging & Quality Assurance */}
      <section className="section-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-7 space-y-4">
            <div className="flex items-center gap-3 text-blue-400">
              <Package className="w-6 h-6" />
              <h3 className="text-lg font-bold text-white font-heading">Export Packaging Options</h3>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-body">
              {product.packagingOptions.map((pkg, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{pkg}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-7 space-y-4">
            <div className="flex items-center gap-3 text-purple-400">
              <ShieldCheck className="w-6 h-6" />
              <h3 className="text-lg font-bold text-white font-heading">Quality & Sourcing Approach</h3>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-body">
              {product.qualityAssurance.map((qa, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>{qa}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Inquiry CTA Banner */}
      <section className="section-wrapper">
        <div className="glass-card p-8 sm:p-10 text-center max-w-3xl mx-auto space-y-5 border-blue-500/30">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Request Turmeric Finger Quotation
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-body">
            Specify your destination port, required volume (FCL / LCL), and grading preference to receive a prompt commercial quote.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CTAButton href={`/get-a-quote?product=${product.slug}`} variant="primary" size="lg" icon>
              Get a Quote for Turmeric Finger
            </CTAButton>
            <CTAButton href="/contact" variant="ghost" size="lg">
              Contact Sales Desk
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
