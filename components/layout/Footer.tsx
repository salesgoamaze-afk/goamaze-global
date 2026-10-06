'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Logo } from '@/components/common/Logo';
import {
  footerCompanyLinks,
  footerProductLinks,
  footerLegalLinks,
  companyContact,
} from '@/data/navigation';
import { FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Mail, Globe, ArrowRight } from 'lucide-react';

const socials = [
  { icon: <FaLinkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <FaFacebook size={18} />, href: 'https://facebook.com', label: 'Facebook' },
  { icon: <FaInstagram size={18} />, href: 'https://instagram.com', label: 'Instagram' },
  { icon: <FaWhatsapp size={18} />, href: `mailto:${companyContact.email}`, label: 'WhatsApp / Inquiry' },
];

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        background: '#0B2A4A',
        borderTop: '1px solid rgba(229, 234, 240, 0.12)',
        paddingTop: '60px',
      }}
    >


      {/* Main 4-Column Footer */}
      <div className="section-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/10">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Logo size={60} />
            <p className="text-xs font-bold text-[#F2B544] tracking-wider uppercase">
              {companyContact.tagline}
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {companyContact.description}
            </p>

            {/* Social Icons */}
            <div className="flex gap-2.5 pt-2">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  style={{
                    color: '#94A3B8',
                    padding: '8px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  className="hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-5 font-heading">
              Company
            </h4>
            <ul className="space-y-3 list-none p-0 m-0 text-sm">
              {footerCompanyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-5 font-heading">
              Products
            </h4>
            <ul className="space-y-3 list-none p-0 m-0 text-sm">
              {footerProductLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-[#F2B544] transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Desk */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-5 font-heading">
              Export Desk
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block">GoAmaze Global Exporters</span>
                  <span>Origin: India (GoAmaze Enterprise)</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`mailto:${companyContact.email}`}
                  className="text-blue-300 hover:text-blue-200 underline"
                >
                  {companyContact.email}
                </a>
              </div>

              <div className="pt-2">
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F2B544] hover:text-[#D89B16]"
                >
                  <span>Request RFQ Form</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Sub-Footer */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {companyContact.year} {companyContact.name}. All Rights Reserved. (A GoAmaze Enterprise)
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {footerLegalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-slate-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
