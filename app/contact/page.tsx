import React from 'react';
import type { Metadata } from 'next';
import { Mail, Phone, Globe, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { companyContact } from '@/data/navigation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us | Export Inquiries & Sourcing Desk',
  description:
    'Get in touch with the GoAmaze Global Exporters trade desk. Reach out at sales@goamazeglobal.com or +91 7021677207 for Indian turmeric sourcing, export partnerships, and product specifications.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Export Trade Desk | GoAmaze Global Exporters',
    description:
      'Connect with our Indian merchant export desk for product specifications, lab reports, pricing, and sample requests.',
    url: 'https://goamazeglobal.com/contact',
    siteName: 'GoAmaze Global Exporters',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Export Desk | GoAmaze Global Exporters',
    description:
      'Connect with our export desk for Indian turmeric sourcing inquiries.',
  },
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden pt-3 sm:pt-4 pb-14 sm:pb-20 space-y-8 sm:space-y-12">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="glow-blob w-[500px] h-[500px] bg-blue-600/10 -top-20 -left-20" />
        <div className="glow-blob w-[500px] h-[500px] bg-purple-600/10 top-1/2 -right-40" />
      </div>

      {/* Breadcrumb Navigation */}
      <div className="section-wrapper">
        <Breadcrumb items={[{ label: 'Contact Us' }]} />
      </div>

      {/* Hero Header */}
      <section className="section-wrapper">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="section-label">
            <span>Direct Trade Communication</span>
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            Contact Our <span className="gradient-text">Export Desk</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
            Have questions about product availability, destination compliance, or sample requests? Connect directly with our international export team.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="section-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="glass-card p-6 sm:p-7 space-y-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 font-heading">
                  Export Entity
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-1 font-heading">
                  {companyContact.name}
                </h2>
              </div>

              <div className="space-y-3.5 pt-4 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block font-heading">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${companyContact.email}`}
                      className="text-sm sm:text-base font-semibold text-blue-300 hover:text-white transition-colors font-body"
                    >
                      {companyContact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block font-heading">
                      Phone / WhatsApp
                    </span>
                    <a
                      href={companyContact.phoneHref}
                      className="text-sm sm:text-base font-semibold text-white hover:text-blue-300 transition-colors font-body block"
                    >
                      {companyContact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block font-heading">
                      Origin & Operations
                    </span>
                    <span className="text-sm font-semibold text-white font-body">
                      India
                    </span>
                    <p className="text-xs text-slate-400 font-body">
                      Serving international importers & distributors
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-purple-500/15 border border-purple-500/30 text-purple-300 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block font-heading">
                      Response Window
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white font-body">
                      Within 24–48 Business Hours
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/get-a-quote"
                  className="btn-primary w-full text-center py-3 text-xs font-bold"
                >
                  <span>Need an Official Quotation? Go to RFQ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Note on B2B Communication */}
            <div className="glass-card p-5 border-blue-500/30 text-xs text-slate-300 space-y-1 font-body">
              <div className="font-bold text-blue-300 flex items-center gap-1.5 font-heading">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>B2B Commercial Inquiries Only</span>
              </div>
              <p className="leading-relaxed">
                We cater to commercial importers, spice blenders, wholesalers, and institutional buyers. For sample requests, please include company name, destination port, and intended product use.
              </p>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
