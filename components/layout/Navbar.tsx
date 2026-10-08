'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Logo } from '@/components/common/Logo';
import { primaryNavItems, companyContact, socialLinks } from '@/data/navigation';
import { ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300"
        style={{
          height: scrolled ? '72px' : '82px',
          background: scrolled
            ? 'rgba(11, 42, 74, 0.96)'
            : 'rgba(11, 42, 74, 0.88)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(229, 234, 240, 0.12)',
          boxShadow: scrolled ? '0 8px 30px rgba(11, 42, 74, 0.6)' : 'none',
        }}
      >
        <div className="section-wrapper h-full flex flex-row items-center justify-between flex-nowrap gap-3">
          {/* 1. Left: Brand Logo */}
          <div className="flex items-center shrink-0">
            <Logo size={scrolled ? 46 : 52} />
          </div>

          {/* 2. Center: Single-Row Bold Navigation Tabs */}
          <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-2 flex-nowrap">
            {primaryNavItems.map((item) => {
              if (item.isCTA) return null;
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 xl:px-4 py-2 rounded-full text-xs xl:text-sm font-bold tracking-tight transition-all duration-200 whitespace-nowrap font-heading ${
                    isActive
                      ? 'text-white bg-blue-600/20 border border-blue-500/40 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* 3. Right: Social Icons + Single-Row CTA Button */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Social Icons in Header */}
            <div className="flex items-center gap-1.5 pr-2 border-r border-white/10">
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
                    whileHover={{ y: -2, scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/50 text-white shadow-sm flex items-center justify-center transition-all duration-200 ${s.color}`}
                  >
                    <IconComponent size={16} className="shrink-0" />
                  </motion.a>
                );
              })}
            </div>

            <Link
              href="/get-a-quote"
              className="btn-primary py-2 px-5 text-xs xl:text-sm font-bold shadow-md"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile / Tablet Toggle */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <Link
              href="/get-a-quote"
              className="btn-primary py-1.5 px-3.5 text-xs font-bold"
            >
              Quote
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-xl text-slate-200 hover:text-white bg-white/5 border border-white/10 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 max-w-sm w-full bg-[#0A0F1E] border-l border-white/10 p-6 flex flex-col justify-between overflow-y-auto z-10"
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-white/10">
                  <Logo size={36} />
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    className="p-2 rounded-lg text-slate-400 hover:text-white bg-white/5"
                  >
                    <HiX size={20} />
                  </button>
                </div>

                <div className="flex flex-col gap-1.5 py-6">
                  {primaryNavItems.map((item) => {
                    const isActive =
                      item.href === '/'
                        ? pathname === '/'
                        : pathname.startsWith(item.href);

                    if (item.isCTA) return null;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`px-4 py-3 rounded-xl text-sm font-bold flex items-center justify-between transition-all font-heading ${
                          isActive
                            ? 'bg-blue-600/20 text-white border border-blue-500/40'
                            : 'text-slate-300 hover:bg-white/5'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ArrowRight className="w-4 h-4 text-slate-500" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-4">
                {/* Mobile Social Links */}
                <div className="flex items-center justify-center gap-3">
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
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className={`w-9 h-9 rounded-lg bg-white/10 border border-white/20 text-white flex items-center justify-center transition-all ${s.color}`}
                      >
                        <IconComponent size={18} />
                      </a>
                    );
                  })}
                </div>

                <Link
                  href="/get-a-quote"
                  className="btn-primary w-full text-center py-3.5"
                >
                  <span>Request Export Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="text-center text-xs text-slate-400">
                  Direct Email: <a href={`mailto:${companyContact.email}`} className="text-blue-400 underline">{companyContact.email}</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
