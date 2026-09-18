'use client';

import { motion } from 'framer-motion';
import { PillButton, Serif } from './ui';

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
      {/* Decorative vertical lines on the right (matching the image reference) */}
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
        <div className="flex flex-col items-center justify-center max-w-5xl mx-auto text-center">
          
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-white!"
            style={{ 
              fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', 
              fontWeight: 500, 
              lineHeight: 1.05, 
              letterSpacing: '-0.04em' 
            }}
          >
            Digital that <br className="hidden sm:block" />
            <Serif>moves the</Serif> Needle
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl mt-6 sm:mt-8 text-white/80! max-w-2xl font-medium tracking-wide"
          >
            All project here is designed to deliver impact—not just impressions.
          </motion.p>

          {/* CTA Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center gap-6 mt-10 sm:mt-12 relative"
          >
            {/* Hand-drawn arrow SVG pointing to CTA */}
            <div className="hidden md:block absolute -left-20 top-1/2 -translate-y-1/2 -translate-x-full opacity-60">
               <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 38C15 25 35 15 58 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M48 5L58 10L50 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <PillButton href="/contact" variant="white" className="!px-8 !py-4 shadow-xl">
              Let&apos;s Contact
            </PillButton>
            
            <a href="/contact" className="group flex items-center gap-2 text-white font-medium hover:text-white/80 transition-colors">
              Book a call 
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
