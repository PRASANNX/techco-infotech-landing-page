'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardList, PhoneCall, Map, Rocket } from 'lucide-react';
import { Serif, Reveal } from './ui';

const steps = [
  {
    icon: ClipboardList,
    tab: 'Share your goals',
    title: 'Share your goals',
    desc: 'Begin by completing our contact form and telling us about your business goals. This first step helps us understand your needs and how we can best support your growth.',
  },
  {
    icon: PhoneCall,
    tab: 'Strategy call',
    title: 'Strategy call',
    desc: 'Our team schedules a discovery call to dive deeper into your challenges and goals, allowing us to align on the best digital strategy for your business.',
  },
  {
    icon: Map,
    tab: 'Tailored plan',
    title: 'Tailored plan',
    desc: 'Based on our discussion, we create a custom growth plan designed to meet your unique objectives, budget, and timeline \u2014 with clear steps and measurable goals.',
  },
  {
    icon: Rocket,
    tab: 'Execute & optimize',
    title: 'Execute & optimize',
    desc: 'The final step involves launching the strategy and continuously optimizing every channel so performance compounds month over month.',
  },
];

export default function Process() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section id="process" className="section-pad bg-[#fafafa]">
      <div className="container-marklab">
        <Reveal className="text-center max-w-2xl mx-auto mb-14 lg:mb-16">
          <span className="section-label">How we work</span>
          <h2 className="h2 mt-5">
            Digital Growth in <Serif>4 Simple</Serif> Steps
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-6 lg:gap-10 items-stretch">
          {/* Left: step tabs */}
          <Reveal className="flex flex-col gap-3">
            {steps.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setActive(i)}
                className={`text-left rounded-[16px] px-6 py-5 flex items-center gap-5 transition-all duration-300 ${
                  active === i
                    ? 'bg-[#0b0d21] text-white shadow-lg'
                    : 'bg-[#f5f5f7] text-[#0b0d21] hover:bg-[#ececef]'
                }`}
              >
                <span
                  className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 font-bold text-sm transition-colors ${
                    active === i ? 'bg-[#4555fd] text-white' : 'bg-white text-[#4555fd]'
                  }`}
                >
                  0{i + 1}
                </span>
                <span className="font-medium text-[15px]">{s.tab}</span>
              </button>
            ))}
          </Reveal>

          {/* Right: detail panel */}
          <Reveal delay={0.1} className="relative">
            <div className="rounded-[28px] h-full min-h-[400px] bg-[#edf2ff] pad-card flex flex-col justify-between overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col gap-10"
                >
                  <span className="w-16 h-16 rounded-[20px] bg-[#0b0d21] text-white flex items-center justify-center shrink-0">
                    <step.icon size={28} strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="h3 text-[#0b0d21]!">{step.title}</h3>
                    <p className="text-body mt-6 text-[#0b0d21]/75! max-w-md leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex gap-2 mt-10">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Go to step ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      active === i ? 'w-8 bg-[#0b0d21]' : 'w-3 bg-[#0b0d21]/20'
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
