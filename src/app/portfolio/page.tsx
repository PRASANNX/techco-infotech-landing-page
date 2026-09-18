'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';
import { PillButton, Serif, Reveal } from '@/components/ui';

const projects = [
  {
    title: 'Corporate & Business Websites',
    description:
      'Professional corporate websites that reflect brand credibility, deliver clear messaging, and generate quality business inquiries.',
    tags: ['WordPress', 'Responsive', 'SEO'],
    gradient: 'from-[#4555fd] to-[#7a5cff]',
  },
  {
    title: 'Automotive Dealership Websites',
    description:
      'Dealership-focused websites designed to showcase vehicles, highlight offers, and drive enquiries through seamless lead capture.',
    tags: ['Custom CMS', 'Lead Capture', 'Inventory'],
    gradient: 'from-[#ff8a6b] to-[#c86bff]',
  },
  {
    title: 'Service-Based Company Websites',
    description:
      'Conversion-optimized websites for service companies with clear communication, fast support, and effective lead generation.',
    tags: ['Landing Pages', 'Forms', 'Analytics'],
    gradient: 'from-[#0b0d21] to-[#4e516a]',
  },
  {
    title: 'Custom Mobile & Web Applications',
    description:
      'Custom applications tailored to specific business needs, focusing on performance, scalability, and smooth user experience.',
    tags: ['React Native', 'Node.js', 'MongoDB'],
    gradient: 'from-[#22c55e] to-[#4a7dff]',
  },
  {
    title: 'Business Process Automation Tools',
    description:
      'Automation tools that streamline internal workflows, reduce manual tasks, and improve operational efficiency.',
    tags: ['n8n', 'API Integration', 'Workflows'],
    gradient: 'from-[#768eff] to-[#6be0ff]',
  },
  {
    title: 'Lead Management Systems',
    description:
      'Intelligent lead management systems that capture, organize, and track leads efficiently to improve follow-ups and conversion.',
    tags: ['CRM', 'Automation', 'Analytics'],
    gradient: 'from-[#c86bff] to-[#4555fd]',
  },
];

const highlights = [
  'Great Design',
  'Time Saving',
  'Quick Response',
  'Best Support',
  'Real Solutions',
  'Finest Quality',
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="hero-banner">
        <div className="container-marklab relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto pt-44 pb-32">
            <h1 className="h1 text-white!">
              We have <Serif>build</Serif> more projects
            </h1>
            <p className="text-large text-[#dcdde2]! mt-6 max-w-xl">
              Data-driven strategies designed to attract, convert, and retain
              your ideal customers.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-9">
              <PillButton href="/contact" variant="primary">
                Start a Project
              </PillButton>
              <PillButton href="/services" variant="secondary" dark>
                Our Services
              </PillButton>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights strip */}
      <section className="py-14 bg-white">
        <div className="container-marklab">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {highlights.map((title, i) => (
              <Reveal key={title} delay={i * 0.06} className="h-full">
                <div className="card-tint rounded-[20px] px-4 py-5 text-center h-full transition-colors duration-300">
                  <span className="w-7 h-7 rounded-full bg-[#4555fd] text-white flex items-center justify-center mx-auto mb-3">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <p className="font-bold text-[#0b0d21] text-sm">{title}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="section-pad bg-[#fafafa]">
        <div className="container-marklab">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {projects.map((project, i) => (
              <motion.a
                key={project.title}
                href="/contact"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
                className="group block h-full"
              >
                <div className="card overflow-hidden h-full flex flex-col">
                  {/* Visual */}
                  <div
                    className={`relative aspect-[16/10] bg-gradient-to-br ${project.gradient} overflow-hidden shrink-0`}
                  >
                    <div className="absolute inset-0 dot-texture opacity-30" />
                    <div className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white text-[#0b0d21] flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="h5 font-bold group-hover:text-[#4555fd] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-small mt-2 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-[#edf2ff] text-xs font-medium text-[#0b0d21]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <Testimonials />
    </>
  );
}
