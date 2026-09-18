'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PillButton, Serif, Reveal } from './ui';

const projects = [
  {
    title: 'Nurture leads with personalized email marketing automation.',
    category: 'Lead Management System',
    gradient: 'from-[#4555fd] to-[#7a5cff]',
  },
  {
    title: 'Generate demand through targeted LinkedIn ad campaigns.',
    category: 'Digital Marketing',
    gradient: 'from-[#768eff] to-[#6be0ff]',
  },
  {
    title: 'Capture leads using gated whitepapers and reports.',
    category: 'Corporate Website',
    gradient: 'from-[#0b0d21] to-[#4e516a]',
  },
  {
    title: 'Boost conversions via free trials and demos.',
    category: 'Web Application',
    gradient: 'from-[#ff8a6b] to-[#c86bff]',
  },
  {
    title: 'Expand reach through strategic industry partner programs.',
    category: 'Automation Platform',
    gradient: 'from-[#22c55e] to-[#4a7dff]',
  },
];

export default function Portfolio() {
  return (
    <section className="section-pad bg-[#fafafa]">
      <div className="container-marklab">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-20">
          {/* Sticky header — top-28 clears the fixed navbar */}
          <div className="lg:sticky lg:top-28 self-start">
            <Reveal>
              <span className="section-label">Our work</span>
              <h2 className="h2 mt-5">
                Work that <Serif>speaks</Serif> for itself
              </h2>
              <p className="text-body mt-6 max-w-md">
                We go beyond traditional marketing and development — we deliver
                value with cutting-edge, data-driven strategies and systems.
              </p>
              <div className="mt-8">
                <PillButton href="/portfolio" variant="secondary">
                  All Projects
                </PillButton>
              </div>
            </Reveal>
          </div>

          {/* Project cards */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {projects.map((project, i) => (
              <motion.a
                key={project.title}
                href="/contact"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.05 * i }}
                className="group block"
              >
                <div
                  className={`relative rounded-[24px] overflow-hidden bg-gradient-to-br ${project.gradient} h-[240px] sm:h-[280px] lg:h-[340px]`}
                >
                  {/* overlay (template's project-overlay) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  {/* dot texture for depth */}
                  <div className="absolute inset-0 dot-texture opacity-30" />

                  {/* arrow chip reveals on hover */}
                  <div className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white text-[#0b0d21] flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight size={18} />
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                    <div>
                      <span className="inline-block text-xs font-medium uppercase tracking-wider text-white/80 mb-2">
                        {project.category}
                      </span>
                      <h3 className="h4 text-white! max-w-md">{project.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
