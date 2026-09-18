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
    <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#0b0d21] opacity-25 hover:opacity-70 transition-all duration-300 cursor-default whitespace-nowrap select-none">
      {name}
    </span>
  );
}

export default function ClientMarquee() {
  const row = [...clients, ...clients];

  return (
    <section className="py-14 sm:py-16 bg-white relative">
      <div className="container-marklab mb-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm sm:text-[15px] text-[#a2a3b1] uppercase tracking-[0.15em] font-medium"
        >
          Trusted by businesses building their digital future
        </motion.p>
      </div>

      {/* Logo banner */}
      <div className="border-y border-[#f0f0f0]">
        <div className="marquee-fade py-10 sm:py-12 overflow-hidden">
          <div className="animate-marquee flex w-max items-center">
            {[0, 1].map((half) => (
              <div key={half} className="flex items-center gap-16 sm:gap-20 lg:gap-28 pr-16 sm:pr-20 lg:pr-28">
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
