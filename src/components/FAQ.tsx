'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Serif, Reveal } from './ui';

const faqs = [
  {
    q: 'What makes Techco Infotech different from other agencies?',
    a: 'We combine technology and marketing under one roof \u2014 websites, apps, CRMs, automations, and growth campaigns are built as one connected system, not disconnected deliverables. That means your infrastructure actually supports your marketing.',
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
    a: 'Yes \u2014 every engagement starts with a discovery call, and we scope a plan around your objectives, budget, and timeline. From a single landing page to a full CRM plus automation build, it\u2019s tailored to you.',
  },
  {
    q: 'What services does Techco Infotech offer?',
    a: 'Website design & development, mobile app development, digital marketing & SEO, and AI & automation services \u2014 including chatbots, workflow automation with n8n, custom GPT tools, and lead management systems.',
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section id="faq" className="section-pad bg-[#fafafa]">
      <div className="container-marklab">
        <Reveal className="text-center max-w-2xl mx-auto mb-14 lg:mb-16">
          <span className="section-label">FAQ</span>
          <h2 className="h2 mt-5">
            Frequently asked <Serif>questions</Serif>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 max-w-5xl mx-auto items-start">
          {/* Left: question tabs */}
          <Reveal className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <button
                key={faq.q}
                onClick={() => setActive(i)}
                className={`text-left rounded-[16px] px-6 py-5 flex items-center justify-between gap-4 transition-all duration-300 ${
                  active === i
                    ? 'bg-[#4555fd] text-white shadow-[0_12px_30px_rgba(69,85,253,0.25)]'
                    : 'bg-[#f5f5f7] text-[#0b0d21] hover:bg-[#ececef]'
                }`}
              >
                <span className="font-medium text-[15px] leading-snug">{faq.q}</span>
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
            <div className="bg-[#fafafa] border border-[#f0f0f0] rounded-[28px] pad-card min-h-[360px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="w-12 h-12 icon-3d mb-10 shrink-0 inline-flex rounded-2xl">
                    <span className="text-base font-bold">0{active + 1}</span>
                  </span>
                  <h3 className="h4 leading-snug">{faqs[active].q}</h3>
                  <p className="text-body mt-6 leading-relaxed text-[#4e516a]">{faqs[active].a}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
