'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, ChevronLeft, ChevronRight, Maximize2, Play } from 'lucide-react';

export interface CarouselSlide {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  dotColor: string;
  badgeBg: string;
  image?: string;
  video?: string;
  mediaType?: 'image' | 'video';
  alt: string;
}

export const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: 'farm',
    title: 'Origin Farm Cultivation',
    subtitle: 'Direct sourcing from prime agricultural belts in India',
    tag: 'Origin Sourcing',
    dotColor: 'bg-emerald-400',
    badgeBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    image: '/images/carousel/turmeric-farm.jpg',
    mediaType: 'image',
    alt: 'Lush green Indian turmeric plantation and fields',
  },
  {
    id: 'harvest',
    title: 'Fresh Rhizome Selection',
    subtitle: 'Hand-graded, cleaned and sorted for optimal potency',
    tag: 'Harvest & Grading',
    dotColor: 'bg-amber-400',
    badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    image: '/images/carousel/turmeric-harvest.jpg',
    mediaType: 'image',
    alt: 'Freshly harvested turmeric roots in field basket',
  },
  {
    id: 'product',
    title: 'High-Curcumin Turmeric',
    subtitle: 'Selected whole fingers and ultra-fine golden milled powder',
    tag: 'Export Grade',
    dotColor: 'bg-[#D89B16]',
    badgeBg: 'bg-amber-500/15 text-[#F2B544] border-[#D89B16]/30',
    image: '/images/carousel/turmeric-product.jpg',
    mediaType: 'image',
    alt: 'Premium turmeric fingers and fine turmeric powder bowl',
  },
  {
    id: 'warehouse',
    title: 'Export Packaging & Warehousing',
    subtitle: 'Moisture-controlled storage, export pallets, and bulk packing',
    tag: 'Logistics Ready',
    dotColor: 'bg-blue-400',
    badgeBg: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
    image: '/images/carousel/warehouse-logistics.jpg',
    mediaType: 'image',
    alt: 'Modern export warehouse and forklift pallet handling',
  },
  {
    id: 'shipping',
    title: 'Worldwide Port Dispatch',
    subtitle: 'Full container loads and reliable ocean freight to global ports',
    tag: 'Global Dispatch',
    dotColor: 'bg-sky-400',
    badgeBg: 'bg-sky-500/10 text-sky-300 border-sky-500/20',
    image: '/images/carousel/global-shipping.jpg',
    mediaType: 'image',
    alt: 'Container cargo ship in port ready for global export',
  },
  {
    id: 'video-processing',
    title: 'Turmeric Origin & Processing',
    subtitle: 'Authentic farm harvest and high-curcumin spice processing in motion',
    tag: 'Live Video',
    dotColor: 'bg-red-400',
    badgeBg: 'bg-red-500/15 text-red-300 border-red-500/30',
    video: '/turmeric_video.mp4',
    mediaType: 'video',
    alt: 'Turmeric harvesting and processing video footage',
  },
];

export const HeroImageCarousel: React.FC = () => {
  const [selectedSlide, setSelectedSlide] = useState<CarouselSlide | null>(null);

  // We duplicate the list twice for an uninterrupted 360-degree infinite marquee loop
  const marqueeItems = [...CAROUSEL_SLIDES, ...CAROUSEL_SLIDES];

  return (
    <div className="relative w-full my-4 sm:my-6 overflow-hidden select-none carousel-container">
      {/* ── Left & Right Edge Fade Gradients ── */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 md:w-32 bg-gradient-to-r from-[#0B2A4A] via-[#0B2A4A]/80 to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 md:w-32 bg-gradient-to-l from-[#0B2A4A] via-[#0B2A4A]/80 to-transparent z-20" />

      {/* ── Top Subtle Indicator Label ── */}
      <div className="flex items-center justify-between px-3 sm:px-6 mb-3 text-xs text-slate-400 font-body">
        <div className="inline-flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#D89B16] animate-pulse" />
          <span className="font-semibold text-slate-300 tracking-wide uppercase text-[11px] font-heading">
            Our Origin Journey
          </span>
        </div>
        <div className="hidden sm:inline-flex items-center gap-1.5 text-[11px] text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
          <span>Hover to pause • Click to inspect</span>
        </div>
      </div>

      {/* ── Infinite Auto-Scrolling Track ── */}
      <div className="relative w-full overflow-hidden py-2">
        <div className="animate-marquee flex gap-4 sm:gap-6 items-center">
          {marqueeItems.map((slide, idx) => (
            <div
              key={`${slide.id}-${idx}`}
              onClick={() => setSelectedSlide(slide)}
              className="group relative flex-shrink-0 w-[270px] sm:w-[320px] md:w-[360px] h-[190px] sm:h-[220px] md:h-[235px] rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#D89B16]/60 bg-gradient-to-b from-white/[0.08] to-white/[0.02] shadow-[0_8px_25px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_35px_rgba(216,155,22,0.25)] transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Media Asset (Image or Video) */}
              {slide.mediaType === 'video' && slide.video ? (
                <video
                  src={slide.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108 pointer-events-none"
                />
              ) : slide.image ? (
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 640px) 270px, (max-width: 768px) 320px, 360px"
                  className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108"
                  priority={idx < 5}
                />
              ) : null}

              {/* Gradient Scrims for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07192C]/95 via-[#0B2A4A]/40 to-black/20 group-hover:from-[#07192C]/90 group-hover:via-[#0B2A4A]/30 transition-colors pointer-events-none" />

              {/* Top Tag & Zoom icon */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide border backdrop-blur-md shadow-sm ${slide.badgeBg}`}
                >
                  {slide.mediaType === 'video' ? (
                    <Play className="w-2.5 h-2.5 fill-current text-red-300" />
                  ) : (
                    <span className={`w-1.5 h-1.5 rounded-full ${slide.dotColor}`} />
                  )}
                  {slide.tag}
                </span>

                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1.5 rounded-full bg-black/40 backdrop-blur-md text-white/90 hover:text-white border border-white/15">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Bottom Captions */}
              <div className="absolute bottom-0 inset-x-0 p-3.5 sm:p-4 z-10 flex flex-col justify-end">
                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#F2B544] transition-colors leading-tight font-heading drop-shadow-sm">
                  {slide.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-300 line-clamp-1 mt-1 font-body">
                  {slide.subtitle}
                </p>
              </div>

              {/* Glass Accent Ring on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-[#D89B16]/50 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* ── Optional Detail Modal when clicking an image ── */}
      <AnimatePresence>
        {selectedSlide && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSlide(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-[#0B2A4A] border border-white/20 rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSlide(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Media */}
              <div className="relative w-full h-72 sm:h-96 md:h-[420px] bg-black flex items-center justify-center">
                {selectedSlide.mediaType === 'video' && selectedSlide.video ? (
                  <video
                    src={selectedSlide.video}
                    autoPlay
                    loop
                    controls
                    playsInline
                    className="w-full h-full object-contain bg-black"
                  />
                ) : selectedSlide.image ? (
                  <>
                    <Image
                      src={selectedSlide.image}
                      alt={selectedSlide.alt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A] via-transparent to-black/30 pointer-events-none" />
                  </>
                ) : null}
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 bg-[#0B2A4A]">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md ${selectedSlide.badgeBg}`}
                  >
                    <span className={`w-2 h-2 rounded-full ${selectedSlide.dotColor}`} />
                    {selectedSlide.tag}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  {selectedSlide.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-300 mt-2 font-body leading-relaxed">
                  {selectedSlide.subtitle}
                </p>
                <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-slate-400 font-body">
                    GoAmaze Global Exporters • Farm-Port-You
                  </span>
                  <button
                    onClick={() => setSelectedSlide(null)}
                    className="btn-primary text-xs !py-2 !px-5"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroImageCarousel;
