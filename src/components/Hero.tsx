'use client';

import { motion } from 'framer-motion';
import { PillButton, Serif } from './ui';

/* Floating orb for depth */
function FloatingOrb({
  size,
  x,
  y,
  delay,
  color,
}: {
  size: number;
  x: string;
  y: string;
  delay: number;
  color: string;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: 'blur(40px)',
      }}
      animate={{
        y: [0, -20, 0, 15, 0],
        x: [0, 10, -8, 5, 0],
        opacity: [0.4, 0.7, 0.5, 0.6, 0.4],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

export default function Hero() {
  return (
    <section id="hero-banner" className="hero-banner relative">
      {/* Animated floating orbs for depth */}
      <FloatingOrb size={300} x="10%" y="20%" delay={0} color="rgba(69,85,253,0.15)" />
      <FloatingOrb size={200} x="75%" y="30%" delay={2} color="rgba(118,142,255,0.12)" />
      <FloatingOrb size={160} x="60%" y="70%" delay={4} color="rgba(159,182,255,0.10)" />

      {/* Subtle sparkle grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Curved line decoration bottom-right */}
      <svg
        className="absolute bottom-0 right-0 w-[420px] max-w-[40%] opacity-20 pointer-events-none"
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
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto text-center px-4 pt-44 pb-32 sm:pt-52 sm:pb-36 lg:pt-56 lg:pb-40">
          {/* Subtle badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] border border-white/[0.12] backdrop-blur-sm text-white/80 text-sm font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
              Software Development & Digital Marketing
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="h-display h-display-tight text-white!"
          >
            Digital that <Serif>moves</Serif>
            <br className="hidden sm:block" />
            <span className="whitespace-nowrap">the Needle</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-large mt-6 text-[#c5c6ce]! max-w-xl leading-relaxed"
          >
            Software development &amp; digital marketing solutions — designed to
            deliver impact, not just impressions.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center mt-10"
          >
            <PillButton href="/contact" variant="primary">
              Let&apos;s Talk
            </PillButton>
            <PillButton href="/contact" variant="secondary" dark>
              Book a Call
            </PillButton>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-14 flex items-center gap-6 text-white/40 text-sm"
          >
            <span className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#4ade80]">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              50+ Projects
            </span>
            <span className="w-px h-4 bg-white/20" />
            <span className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#4ade80]">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              30+ Clients
            </span>
            <span className="w-px h-4 bg-white/20 hidden sm:block" />
            <span className="hidden sm:flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#4ade80]">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              3+ Years
            </span>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave divider for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          className="w-full h-[40px] sm:h-[60px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60V30C240 10 480 0 720 10C960 20 1200 40 1440 30V60H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
