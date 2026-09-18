'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Serif, Reveal } from './ui';

const faqs = [
  {
    q: 'What makes Techco Infotech different from other agencies?',
    a: 'We combine technology and marketing under one roof — websites, apps, CRMs, automations, and growth campaigns are built as one connected system, not disconnected deliverables. That means your infrastructure actually supports your marketing.',
  },
  {
    q: 'Which industries do you specialize in?',
    a: 'We work across industries including automotive dealerships, service businesses, e-commerce, and B2B companies. Our adaptable approach lets us craft solutions that fit your specific market and workflow.',
  },
  {
    q: 'How soon can I expect to see results?',
    a: 'Launch timelines for websites and apps are typically 2\u20136 weeks depending on scope. Marketing campaigns usually show measurable traction within the first 30\u201360 days, with optimization compounding from there.',
  },
  {
    q: 'Do you offer customized solutions and plans?',
    a: 'Yes — every engagement starts with a discovery call, and we scope a plan around your objectives, budget, and timeline. From a single landing page to a full CRM plus automation build, it\u2019s tailored to you.',
  },
  {
    q: 'What services does Techco Infotech offer?',
    a: 'Website design & development, mobile app development, digital marketing & SEO, and AI & automation services — including chatbots, workflow automation with n8n, custom GPT tools, and lead management systems.',
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-pad bg-[#fafafa]">
      <div className="container-marklab">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="section-label">FAQ</span>
          <h2 className="h2 mt-5">
            Frequently asked <Serif>questions</Serif>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mt-12 lg:mt-14 max-w-5xl mx-auto items-start">
          {/* Left: question tabs */}
          <Reveal className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <button
                key={faq.q}
                onClick={() => setActive(i)}
                className={`text-left rounded-[16px] px-6 py-5 flex items-center justify-between gap-4 transition-all duration-300 ${
                  active === i
                    ? 'bg-[#4555fd] text-white shadow-[0_12px_30px_rgba(69,85,253,0.3)]'
                    : 'bg-[#efeff1] text-[#0b0d21] hover:bg-[#e6e6e6]'
                }`}
              >
                <span className="font-medium text-[15px]">{faq.q}</span>
                <Plus
                  size={18}
                  className={`shrink-0 transition-transform duration-300 ${
                    active === i ? 'rotate-45' : ''
                  }`}
                />
              </button>
            ))}
          </Reveal>

          {/* Right: answer panel */}
          <Reveal delay={0.1}>
            <div className="card rounded-[24px] p-8 lg:p-10 h-full min-h-[300px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="w-10 h-10 icon-3d mb-6 shrink-0">
                    <span className="text-sm font-bold">0{active + 1}</span>
                  </span>
                  <h3 className="h4">{faqs[active].q}</h3>
                  <p className="text-body mt-4">{faqs[active].a}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
