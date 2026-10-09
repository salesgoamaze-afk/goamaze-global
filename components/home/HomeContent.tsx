'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Package,
  Globe2,
  Building2,
} from 'lucide-react';
import { CTAButton } from '@/components/common/CTAButton';
import { ValueCard } from '@/components/common/ValueCard';
import { PunchLine } from '@/components/common/PunchLine';
import { HeroImageCarousel } from '@/components/common/HeroImageCarousel';
import { TurmericHeroVisual } from '@/components/ui/TurmericHeroVisual';

export const HomeContent: React.FC = () => {
  return (
    <div className="space-y-12 sm:space-y-16 pb-16 relative overflow-hidden">
      {/* ── Ambient Glow Blobs ── */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="glow-blob w-[500px] h-[500px] bg-blue-600/15 -top-32 -left-32 glow-pulse" />
        <div className="glow-blob w-[500px] h-[500px] bg-purple-600/15 top-80 -right-40 glow-pulse" />
      </div>

      {/* 1. HERO / LANDING SECTION */}
      <section className="relative pt-0 sm:pt-1 pb-12 sm:pb-16 border-b border-white/5">
        {/* Subtle dot matrix grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        <div className="section-wrapper relative z-10 space-y-5 sm:space-y-7">
          {/* Signature Punch Line directly below Header */}
          <PunchLine size="lg" className="-mt-1 sm:-mt-2 pt-0" />

          {/* Auto-moving Hero Image Carousel */}
          <HeroImageCarousel />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center pt-2">
            {/* Left Column: Typography & CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-5 text-center lg:text-left"
            >
              <div className="section-label mb-1 inline-flex">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>GoAmaze Global • Indian Merchant Exporters</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-heading">
                Indian Turmeric.{' '}
                <span className="gradient-text">Global Quality.</span>{' '}
                Reliable Export.
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-body">
                Premium turmeric sourced directly from trusted farmers, with carefully selected Curcumin profiles for international markets. Bypass the agent brokers.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                <CTAButton href="/get-a-quote" variant="primary" size="lg" icon>
                  Get a Quote
                </CTAButton>
                <CTAButton href="/products" variant="ghost" size="lg">
                  Explore Products
                </CTAButton>
              </div>
            </motion.div>

            {/* Right Column: Visual Component */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <TurmericHeroVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION SECTION */}
      <section className="section-wrapper pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <ValueCard
            icon={ShieldCheck}
            title="Quality Focused"
            description="Quality-driven sourcing and product specifications aligned with buyer destination requirements."
            href="/quality-compliance"
          />
          <ValueCard
            icon={Building2}
            title="Reliable Sourcing"
            description="Strong relationships with verified Indian suppliers and agricultural processors."
            href="/about-us"
          />
          <ValueCard
            icon={Package}
            title="Export Ready"
            description="Professional documentation, export packaging and coordinated shipment handling."
            href="/our-process"
          />
          <ValueCard
            icon={Globe2}
            title="Global B2B"
            description="Focused on long-term relationships with international importers, blenders, and distributors."
            href="/for-importers"
          />
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
