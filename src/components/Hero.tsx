'use client';

import { motion } from 'framer-motion';
import { PillButton } from './ui';
import { useEffect, useState } from 'react';

const rollingWords = [
  "Visibility",
  "Sales",
  "Value",
  "Footfall",
  "Leads",
  "Growth",
  "Impact"
];

function RollingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rollingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-flex h-[1.1em] overflow-hidden align-bottom ml-3 relative">
      <motion.span
        className="flex flex-col text-left"
        animate={{ y: `-${index * (100 / rollingWords.length)}%` }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ height: `${rollingWords.length * 100}%` }}
      >
        {rollingWords.map((word) => (
          <span key={word} className="block h-full font-serif italic text-white" style={{ height: `${100 / rollingWords.length}%` }}>
            {word}.
          </span>
        ))}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  return (
    <section 
      id="hero-banner" 
      className="relative flex items-center justify-center min-h-[100svh] w-full overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 50% 50%, rgba(69, 85, 253, 0.4) 0%, transparent 60%),
          linear-gradient(180deg, #0b0d21 0%, #1a1e4a 40%, #4555fd 75%, #ffffff 100%)
        `
      }}
    >
      {/* Decorative vertical lines on the right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[20%] h-[60%] flex justify-between opacity-20 pointer-events-none mix-blend-overlay">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-[1px] h-full bg-white" />
        ))}
      </div>

      {/* Subtle sparkle/noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`
        }}
      />

      <div className="container-marklab relative z-10 w-full pt-20 pb-10">
        <div className="flex flex-col items-center justify-center max-w-6xl mx-auto text-center">
          
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-white! flex flex-col items-center justify-center"
            style={{ 
              fontSize: 'clamp(3rem, 7vw, 6rem)', 
              fontWeight: 500, 
              lineHeight: 1.1, 
              letterSpacing: '-0.03em' 
            }}
          >
            <span className="block mb-2">Marketing that actually</span>
            <span className="flex items-center justify-center flex-wrap">
              gives you more &nbsp;<RollingText />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-2xl mt-8 sm:mt-10 text-white/80! max-w-3xl font-medium tracking-wide"
          >
            All project here is designed to deliver impact—not just impressions.
          </motion.p>

          {/* CTA Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center gap-6 mt-12 sm:mt-14 relative"
          >
            {/* Hand-drawn arrow SVG pointing to CTA */}
            <div className="hidden md:block absolute -left-20 top-1/2 -translate-y-1/2 -translate-x-full opacity-60">
               <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 38C15 25 35 15 58 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M48 5L58 10L50 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <PillButton href="/#contact" variant="white" className="!px-10 !py-4 shadow-xl text-[16px]">
              Let&apos;s Contact
            </PillButton>
            
            <a href="/#contact" className="group flex items-center gap-2 text-white font-medium hover:text-white/80 transition-colors text-[16px]">
              Book a call 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
