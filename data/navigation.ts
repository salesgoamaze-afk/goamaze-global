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
  phone: '+91 7021677207',
  phoneHref: 'tel:+917021677207',
  whatsappHref: 'https://wa.me/917021677207',
  tagline: 'Your Trusted Export Partner from India',
  description: 'Connecting international buyers with quality Indian products through reliable sourcing, quality-driven processes, and professional export coordination.',
  year: 2026,
};

export const socialLinks = [
  { id: 'linkedin', href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/60' },
  { id: 'facebook', href: 'https://www.facebook.com/people/Goamaze-Global/61594881634810/', label: 'Facebook', color: 'hover:text-[#1877F2] hover:border-[#1877F2]/60' },
  { id: 'instagram', href: 'https://instagram.com', label: 'Instagram', color: 'hover:text-[#E4405F] hover:border-[#E4405F]/60' },
  { id: 'whatsapp', href: 'https://wa.me/917021677207', label: 'WhatsApp', color: 'hover:text-[#25D366] hover:border-[#25D366]/60' },
];
