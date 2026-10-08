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
  socialLinks,
} from '@/data/navigation';
import { FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Mail, Globe, ArrowRight, Phone } from 'lucide-react';

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

            {/* Social Icons - Bigger & Brighter */}
            <div className="flex items-center gap-3 pt-3">
              {socialLinks.map((s) => {
                const IconComponent =
                  s.id === 'linkedin'
                    ? FaLinkedin
                    : s.id === 'facebook'
                    ? FaFacebook
                    : s.id === 'instagram'
                    ? FaInstagram
                    : FaWhatsapp;

                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    whileHover={{ y: -4, scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 hover:border-white/60 text-white shadow-md hover:shadow-glow flex items-center justify-center transition-all duration-200 ${s.color}`}
                  >
                    <IconComponent size={22} className="shrink-0" />
                  </motion.a>
                );
              })}
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
                  <span>Origin: India</span>
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

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={companyContact.phoneHref}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {companyContact.phone}
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
