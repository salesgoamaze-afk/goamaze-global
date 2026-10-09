import React from 'react';
import type { Metadata } from 'next';
import { HomeContent } from '@/components/home/HomeContent';

export const metadata: Metadata = {
  title: 'Indian Turmeric Exporter | GoAmaze Global Exporters',
  description:
    'GoAmaze Global Exporters is an India-based merchant exporter supplying high-curcumin turmeric finger and fine milled turmeric powder to global B2B buyers with reliable sourcing and export logistics.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Indian Turmeric Exporter | GoAmaze Global Exporters',
    description:
      'Direct sourcing of high-curcumin whole turmeric fingers and milled powder for international spice importers and food manufacturers.',
    url: 'https://goamazeglobal.com',
    siteName: 'GoAmaze Global Exporters',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logo-full.png',
        width: 1200,
        height: 630,
        alt: 'GoAmaze Global Exporters',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indian Turmeric Exporter | GoAmaze Global Exporters',
    description:
      'Reliable Indian merchant exporter of premium turmeric fingers and milled turmeric powder.',
    images: ['/logo-full.png'],
  },
};

export default function HomePage() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'GoAmaze Global Exporters',
    url: 'https://goamazeglobal.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://goamazeglobal.com/products?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <HomeContent />
    </>
  );
}
