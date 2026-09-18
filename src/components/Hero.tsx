'use client';

import { motion } from 'framer-motion';
import { PillButton, Serif } from './ui';

export default function Hero() {
  return (
    <section id="hero-banner" className="hero-banner">
      {/* Curved line decoration bottom-right (template's line-icon) */}
      <svg
        className="absolute bottom-0 right-0 w-[340px] max-w-full opacity-25 pointer-events-none"
        viewBox="0 0 520 260"
        fill="none"
        aria-hidden
      >
        <path
          d="M0 260C120 240 200 180 260 110C320 40 420 0 520 0"
          stroke="url(#lineGrad)"
          strokeWidth="1.5"
        />
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="260" x2="520" y2="0">
            <stop stopColor="#4555fd" stopOpacity="0" />
            <stop offset="1" stopColor="#9fb6ff" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container-marklab relative z-10">
        <div className="banner-wrap flex flex-col items-center justify-center max-w-4xl mx-auto text-center px-4 pt-40 pb-28 sm:pt-48 sm:pb-32 lg:pt-52 lg:pb-36">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="h-display h-display-tight text-white!"
          >
            Digital that <Serif>moves</Serif>
            <br className="hidden sm:block" />
            <span className="whitespace-nowrap">the Needle</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-large mt-6 text-[#dcdde2]! max-w-xl"
          >
            Software development &amp; digital marketing solutions — designed to
            deliver impact, not just impressions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-wrap gap-4 justify-center mt-10"
          >
            <PillButton href="/contact" variant="primary">
              Let&apos;s Talk
            </PillButton>
            <PillButton href="/contact" variant="secondary" dark>
              Book a Call
            </PillButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
