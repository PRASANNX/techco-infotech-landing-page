'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { Reveal } from './ui';

function RollingDigit({ digit, start }: { digit: number; start: boolean }) {
  // vertical strip of digits 0-9, slot-machine style like the template
  const [pos, setPos] = useState(0);
  const digits = Array.from({ length: 10 }, (_, i) => i);

  useEffect(() => {
    if (!start) return;
    const t = setTimeout(() => setPos(digit), 100 + digit * 60);
    return () => clearTimeout(t);
  }, [start, digit]);

  return (
    <span className="counter-mask h-[1em] leading-[1em]">
      <span
        className="counter-strip"
        style={{ transform: `translateY(-${pos * 1}em)` }}
      >
        {digits.map((d) => (
          <span key={d} className="leading-[1em]">
            {d}
          </span>
        ))}
      </span>
    </span>
  );
}

function Counter({
  value,
  suffix,
  label,
  start,
}: {
  value: string;
  suffix: string;
  label: string;
  start: boolean;
}) {
  return (
    <div className="text-center lg:text-left">
      <div
        className="h-display text-[#0b0d21]! flex items-baseline justify-center lg:justify-start"
        style={{ fontSize: 'clamp(2.75rem, 5vw, 4.5rem)' }}
      >
        <span className="counter-mask h-[1em] leading-[1em] flex">
          {value.split('').map((ch, i) => {
            const d = parseInt(ch, 10);
            return Number.isNaN(d) ? (
              <span key={i}>{ch}</span>
            ) : (
              <RollingDigit key={i} digit={d} start={start} />
            );
          })}
        </span>
        <span className="text-[#4555fd]">{suffix}</span>
      </div>
      <p className="text-body mt-3">{label}</p>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: '50', suffix: '+', label: 'Projects Delivered' },
    { value: '30', suffix: '+', label: 'Active Clients' },
    { value: '5', suffix: 'M+', label: 'Ad Reach Generated' },
    { value: '3', suffix: '+', label: 'Years Experience' },
  ];

  return (
    <section className="py-6">
      <div className="container-marklab">
        <Reveal>
          <div className="bg-[#edf2ff] rounded-[30px] px-6 py-14 lg:py-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
              {stats.map((s) => (
                <Counter key={s.label} {...s} start={inView} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
