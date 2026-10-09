import type { Metadata } from 'next';
import { Montserrat, Poppins, Dancing_Script } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-script',
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://goamazeglobal.com'),
  title: {
    default: 'GoAmaze Global Exporters | Indian Turmeric Exporter',
    template: '%s | GoAmaze Global Exporters',
  },
  description:
    'GoAmaze Global Exporters is an India-based merchant exporter supplying premium turmeric finger and turmeric powder to international buyers with reliable sourcing and professional export support.',
  keywords: [
    'Indian Turmeric Exporter',
    'Turmeric Finger Exporter',
    'Turmeric Powder Supplier India',
    'Curcuma Longa India',
    'Spices Merchant Exporter',
    'Indian Spices B2B',
    'Bulk Turmeric Export',
    'GoAmaze Global Exporters',
    'GoAmaze Store',
  ],
  authors: [{ name: 'GoAmaze Global Exporters' }],
  creator: 'GoAmaze Global Exporters',
  publisher: 'GoAmaze Global Exporters',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/logo.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'GoAmaze Global Exporters | Indian Turmeric Exporter',
    description:
      'Connecting international buyers with quality Indian turmeric products through reliable sourcing, quality-driven processes and professional export support.',
    url: 'https://goamazeglobal.com',
    siteName: 'GoAmaze Global Exporters',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logo-full.png',
        width: 1200,
        height: 630,
        alt: 'GoAmaze Global Exporters Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoAmaze Global Exporters | Indian Turmeric Exporter',
    description:
      'Reliable Indian merchant exporter of premium turmeric fingers and milled turmeric powder.',
    images: ['/logo-full.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GoAmaze Global Exporters',
    legalName: 'GoAmaze Global Exporters',
    url: 'https://goamazeglobal.com',
    logo: 'https://goamazeglobal.com/logo.png',
    image: 'https://goamazeglobal.com/logo-full.png',
    description:
      'India-based merchant exporter supplying premium whole turmeric finger and milled turmeric powder to international commercial buyers with reliable sourcing and professional export support.',
    email: 'sales@goamazeglobal.com',
    telephone: '+91 7021677207',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'India',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Worldwide',
    },
    knowsAbout: [
      'Indian Turmeric Export',
      'Turmeric Finger Sourcing',
      'Turmeric Powder Milling & Export',
      'Spices Quality Compliance',
      'International Bulk Agro Logistics',
    ],
    sameAs: [
      'https://www.instagram.com/goamazeglobal/',
      'https://www.facebook.com/people/Goamaze-Global/61594881634810/',
      'https://wa.me/917021677207',
      'https://goamaze.store',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91 7021677207',
        contactType: 'sales',
        email: 'sales@goamazeglobal.com',
        areaServed: 'Worldwide',
        availableLanguage: ['English', 'Hindi'],
      },
    ],
    parentOrganization: {
      '@type': 'Organization',
      name: 'GoAmaze',
      url: 'https://goamaze.store',
    },
  };

  return (
    <html
      lang="en"
      className={`h-full dark ${montserrat.variable} ${poppins.variable} ${dancingScript.variable}`}
    >
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-[#0B2A4A] text-[#FFFFFF]">
        <Navbar />
        <main className="flex-grow pt-[76px] sm:pt-[80px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
