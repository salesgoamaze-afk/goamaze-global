import { NavItem } from '@/types';

export const primaryNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Products', href: '/products' },
  { label: 'Our Process', href: '/our-process' },
  { label: 'For Importers', href: '/for-importers' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Get a Quote', href: '/get-a-quote', isCTA: true },
];

export const footerCompanyLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Our Process', href: '/our-process' },
  { label: 'For Importers', href: '/for-importers' },
  { label: 'Contact Us', href: '/contact' },
];

export const footerProductLinks: NavItem[] = [
  { label: 'Turmeric Finger', href: '/products/turmeric-finger' },
  { label: 'Turmeric Powder', href: '/products/turmeric-powder' },
  { label: 'Get a Quote', href: '/get-a-quote' },
];

export const footerLegalLinks: NavItem[] = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Sitemap', href: '/sitemap.xml' },
];

export const companyContact = {
  name: 'GoAmaze Global Exporters',
  brandRelationship: 'A GoAmaze Enterprise',
  origin: 'India',
  email: 'sales@goamazeglobal.com',
  tagline: 'Your Trusted Export Partner from India',
  description: 'Connecting international buyers with quality Indian products through reliable sourcing, quality-driven processes, and professional export coordination.',
  year: 2026,
};
