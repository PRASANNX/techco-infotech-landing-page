'use client';

import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PillButton, Serif, Reveal } from './ui';

const highlights = [
  'End-to-end digital solutions under one roof',
  'AI-powered automations & workflow integrations',
  'Data-driven strategies with measurable ROI',
];

export default function AboutSection() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-marklab">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Image tile with floating growth badge */}
          <Reveal className="relative">
            <div className="rounded-[24px] overflow-hidden bg-[#edf2ff] aspect-[4/3] dot-texture relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-28 h-28 icon-3d items-center justify-center rotate-6 rounded-full">
                  <TrendingUp size={48} strokeWidth={1.5} />
                </div>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-5 -right-2 sm:bottom-5 sm:right-5 bg-white rounded-[20px] shadow-[0_20px_50px_rgba(11,13,33,0.12)] px-6 py-5 flex items-center gap-4"
            >
              <span className="w-11 h-11 icon-3d rounded-full items-center justify-center shrink-0">
                <ArrowUpRight size={20} />
              </span>
              <div>
                <p className="font-bold text-[#0b0d21] leading-tight">Real Growth</p>
                <p className="text-small text-[#4e516a]">Systems that scale with you</p>
              </div>
            </motion.div>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal>
              <span className="section-label">Who we are</span>
              <h2 className="h2 mt-5">
                Building strong digital systems{' '}
                <Serif>for growth</Serif>
              </h2>
              <p className="text-body mt-6 max-w-lg leading-relaxed">
                Techco Infotech combines IT solutions, digital marketing, and
                AI-driven automation to help businesses move beyond an online
                presence — to real, measurable digital infrastructure.
              </p>
            </Reveal>

            {/* Highlight checklist */}
            <Reveal delay={0.1}>
              <ul className="mt-8 space-y-4">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#4555fd] mt-0.5 shrink-0" />
                    <span className="text-[15px] font-medium text-[#0b0d21]">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-4 mt-10">
                <PillButton href="/about" variant="primary">
                  More About Us
                </PillButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
