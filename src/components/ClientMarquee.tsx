'use client';

import { motion } from 'framer-motion';

const clients = [
  'Infograins',
  'Mahindra',
  'Volkswagen',
  'Maa Made',
  'Wpmet',
];

/* Clean monochrome wordmarks — muted by default, strengthen on hover */
function LogoMark({ name }: { name: string }) {
  return (
    <span className="text-lg sm:text-xl font-semibold tracking-tight text-[#0b0d21] opacity-40 hover:opacity-80 transition-opacity whitespace-nowrap">
      {name}
    </span>
  );
}

export default function ClientMarquee() {
  const row = [...clients, ...clients];

  return (
    <section className="py-10 bg-white">
      {/* Band 1: statement text — its own block with proper spacing below */}
      <div className="container-marklab">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-[17px] sm:text-[18px] text-[#0b0d21] max-w-2xl mx-auto leading-relaxed"
        >
          Be part of the 100+ businesses transforming their digital presence.
        </motion.p>
      </div>

      {/* Band 2: distinct logo banner with its own tinted background and top/bottom borders */}
      <div className="mt-7 border-y border-[#e6e6e6] bg-[#fafafa]">
        <div className="marquee-fade py-8 sm:py-9 overflow-hidden">
          <div className="animate-marquee flex w-max items-center">
            {[0, 1].map((half) => (
              <div key={half} className="flex items-center gap-12 sm:gap-16 lg:gap-[120px] pr-12 sm:pr-16 lg:pr-[120px]">
                {row.map((name, i) => (
                  <LogoMark key={`${half}-${name}-${i}`} name={name} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
