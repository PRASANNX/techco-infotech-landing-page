'use client';

import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight } from 'lucide-react';
import { PillButton, Serif, Reveal } from './ui';

export default function AboutSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-marklab">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image tile with floating growth badge */}
          <Reveal className="relative mb-10 lg:mb-0">
            <div className="rounded-[24px] overflow-hidden bg-[#edf2ff] aspect-[4/3] dot-texture relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 icon-3d items-center justify-center rotate-6 rounded-full">
                  <TrendingUp size={72} strokeWidth={1.5} />
                </div>
              </div>
            </div>

            {/* Floating card (template's top-image-wrap) — inside the tile on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-7 right-4 lg:-right-6 bg-white rounded-[20px] shadow-[0_20px_50px_rgba(11,13,33,0.12)] px-6 py-5 flex items-center gap-4"
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
              <p className="text-body mt-6 max-w-lg">
                Techco Infotech combines IT solutions, digital marketing, and
                AI-driven automation to help businesses move beyond an online
                presence — to real, measurable digital infrastructure.
              </p>
              <p className="text-body mt-4 max-w-lg">
                From web applications and CRMs to n8n workflow automations and
                data-driven campaigns, everything we build is practical,
                scalable, and result-oriented.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-wrap gap-4 mt-9">
                <PillButton href="/about" variant="primary">
                  More About Us
                </PillButton>
                <PillButton href="/services" variant="secondary">
                  Our Services
                </PillButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
