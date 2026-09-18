'use client';

import { useRef } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
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
    <section id="testimonials" className="section-pad bg-white">
      <div className="container-marklab">
        <div className="flex items-end justify-between gap-8 mb-12 lg:mb-14">
          <Reveal className="max-w-lg">
            <span className="section-label">Testimonials</span>
            <h2 className="h2 mt-5">Kind words from <Serif>clients</Serif> we&apos;ve served</h2>
          </Reveal>

          <Reveal delay={0.1} className="hidden md:flex gap-3 shrink-0">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border border-[#e6e6e6] bg-white flex items-center justify-center text-[#0b0d21] hover:bg-[#0b0d21] hover:text-white hover:border-[#0b0d21] transition-all duration-300"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full border border-[#e6e6e6] bg-white flex items-center justify-center text-[#0b0d21] hover:bg-[#0b0d21] hover:text-white hover:border-[#0b0d21] transition-all duration-300"
            >
              <ArrowRight size={18} />
            </button>
          </Reveal>
        </div>

        {/* Horizontal snap carousel */}
        <Reveal delay={0.1}>
          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((t) => (
              <article
                key={t.company + t.author}
                className="snap-start shrink-0 w-[85%] sm:w-[460px] bg-white border border-[#e6e6e6] rounded-[24px] pad-card flex flex-col justify-between min-h-[340px]"
              >
                <div>
                  {/* Company header */}
                  <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-4">
                      <span className="w-12 h-12 rounded-2xl bg-[#edf2ff] text-[#4555fd] flex items-center justify-center font-bold shrink-0 text-lg">
                        {t.company[0]}
                      </span>
                      <span className="text-xl font-bold text-[#0b0d21]">{t.company}</span>
                    </div>
                    <Quote size={28} className="text-[#4555fd] opacity-30" />
                  </div>
                  <p className="text-[18px] leading-relaxed text-[#0b0d21]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-12 pt-8 border-t border-[#f0f0f0]">
                  <p className="font-bold text-lg text-[#0b0d21]">{t.author}</p>
                  <p className="text-[15px] mt-1.5 text-[#a2a3b1]">{t.role}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
