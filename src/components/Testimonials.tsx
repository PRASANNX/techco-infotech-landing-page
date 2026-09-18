'use client';

import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Serif, Reveal } from './ui';

const testimonials = [
  {
    company: 'Wpmet',
    quote:
      'Techco Infotech transformed our digital presence with a professionally built website and a smooth lead management system. Their team understood our business requirements and delivered exactly what we needed.',
    author: 'Rahul Mehta',
    role: 'Founder, Wpmet',
  },
  {
    company: 'Infograins',
    quote:
      'One step ahead. They\u2019ve become an essential part of our growth.',
    author: 'Client Team',
    role: 'Infograins',
  },
  {
    company: 'Maa Made',
    quote:
      'Incredible results and a team that truly cares. Our leads have never looked better.',
    author: 'Client Team',
    role: 'Maa Made',
  },
  {
    company: 'Mahindra Dealer',
    quote:
      'They understood our goals and delivered beyond expectations. Highly recommend.',
    author: 'Client Team',
    role: 'Dealership Partner',
  },
];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 420, behavior: 'smooth' });
  };

  return (
    <section className="section-pad bg-white">
      <div className="container-marklab">
        <div className="flex items-end justify-between gap-8 mb-10 lg:mb-12">
          <Reveal>
            <span className="section-label">Testimonials</span>
            <h2 className="h2 mt-5">
Kind words from <Serif>clients</Serif> we've served
            </h2>
            <p className="text-body mt-4">Heartfelt feedback from happy clients.</p>
          </Reveal>

          <Reveal delay={0.1} className="hidden md:flex gap-3 shrink-0">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border border-[#e6e6e6] flex items-center justify-center text-[#0b0d21] hover:bg-[#0b0d21] hover:text-white hover:border-[#0b0d21] transition-colors"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full border border-[#e6e6e6] flex items-center justify-center text-[#0b0d21] hover:bg-[#0b0d21] hover:text-white hover:border-[#0b0d21] transition-colors"
            >
              <ArrowRight size={18} />
            </button>
          </Reveal>
        </div>

        {/* Horizontal snap carousel */}
        <Reveal delay={0.1}>
          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((t) => (
              <article
                key={t.company + t.author}
                className="snap-start shrink-0 w-[85%] sm:w-[420px] card p-8 flex flex-col justify-between min-h-[280px]"
              >
                <div>
                  {/* logo + dot separator (template pattern) */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-9 h-9 rounded-lg bg-[#edf2ff] text-[#4555fd] flex items-center justify-center font-bold shrink-0">
                      {t.company[0]}
                    </span>
                    <span className="text-lg font-bold text-[#0b0d21]">{t.company}</span>
                    <span className="w-2 h-2 rounded-full bg-[#4555fd]" />
                  </div>
                  <p className="text-large text-[#0b0d21]!">&ldquo;{t.quote}&rdquo;</p>
                </div>
                <div className="mt-8 pt-6 border-t border-[#e6e6e6]">
                  <p className="font-bold text-[#0b0d21]">{t.author}</p>
                  <p className="text-small mt-0.5">{t.role}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
