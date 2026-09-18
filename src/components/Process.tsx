'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ClipboardList, PhoneCall, Map, Rocket } from 'lucide-react';
import { Serif, Reveal } from './ui';

const steps = [
  {
    icon: ClipboardList,
    tab: 'Start your digital journey with confidence',
    title: 'Share your goals',
    desc: 'Begin by completing our contact form and telling us about your business goals. This first step helps us understand your needs and how we can best support your growth.',
  },
  {
    icon: PhoneCall,
    tab: 'Connect for a strategy call that sets direction',
    title: 'Strategy call',
    desc: 'Our team schedules a discovery call to dive deeper into your challenges and goals, allowing us to align on the best digital strategy for your business.',
  },
  {
    icon: Map,
    tab: 'Receive a tailored plan built for your success',
    title: 'Tailored plan',
    desc: 'Based on our discussion, we create a custom growth plan designed to meet your unique objectives, budget, and timeline — with clear steps and measurable goals.',
  },
  {
    icon: Rocket,
    tab: 'Execute, measure, and optimize for results',
    title: 'Execute & optimize',
    desc: 'The final step involves launching the strategy and continuously optimizing every channel so performance compounds month over month.',
  },
];

export default function Process() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section className="section-pad bg-white">
      <div className="container-marklab">
        <Reveal className="text-center max-w-2xl mx-auto">
          {/* 4.9 rated badge (template detail) */}
          <div className="inline-flex items-center gap-2 bg-[#edf2ff] rounded-full px-4 py-2 mb-6">
            <span className="flex text-[#4555fd]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
              ))}
            </span>
            <span className="text-small font-medium text-[#0b0d21]">4.9 Rated agency</span>
          </div>

          <span className="section-label">How we work</span>
          <h2 className="h2 mt-5">
            Digital Growth in <Serif>4 Simple</Serif> Steps
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-12 mt-12 lg:mt-14 items-stretch">
          {/* Left: step tabs */}
          <Reveal className="flex flex-col gap-3 h-full justify-between">
            {steps.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setActive(i)}
                className={`text-left rounded-[16px] px-6 py-5 lg:py-6 flex items-center gap-5 flex-1 transition-all duration-300 ${
                  active === i
                    ? 'bg-[#0b0d21] text-white'
                    : 'bg-[#efeff1] text-[#0b0d21] hover:bg-[#e6e6e6]'
                }`}
              >
                <span
                  className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 font-bold text-sm transition-colors ${
                    active === i ? 'bg-[#4555fd] text-white' : 'bg-white text-[#4555fd]'
                  }`}
                >
                  0{i + 1}
                </span>
                <span className="font-medium text-[15px] lg:text-base">{s.tab}</span>
              </button>
            ))}
          </Reveal>

          {/* Right: detail panel */}
          <Reveal delay={0.1} className="relative">
            <div className="rounded-[24px] h-full min-h-[380px] bg-[#edf2ff] p-8 lg:p-10 flex flex-col justify-between overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35 }}
                >
                  <span className="w-14 h-14 rounded-[16px] bg-[#0b0d21] text-white flex items-center justify-center mb-8 shrink-0">
                    <step.icon size={26} strokeWidth={1.8} />
                  </span>
                  <h3 className="h3 text-[#0b0d21]!">{step.title}</h3>
                  <p className="text-body mt-4 text-[#0b0d21]/75! max-w-md">{step.desc}</p>
                </motion.div>
              </AnimatePresence>

              <div className="flex gap-2 mt-10">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Go to step ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      active === i ? 'w-8 bg-[#0b0d21]' : 'w-3 bg-[#0b0d21]/25'
                    }`}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
