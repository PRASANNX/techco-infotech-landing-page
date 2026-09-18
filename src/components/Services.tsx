'use client';

import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Megaphone,
  Cpu,
} from 'lucide-react';
import { Serif, Reveal } from './ui';

const services = [
  {
    icon: Globe,
    tint: '',
    title: 'Web Development',
    desc: 'Tailored websites, scalable e-commerce platforms, and robust software solutions aligned with your unique business needs.',
  },
  {
    icon: Megaphone,
    tint: 'alt',
    title: 'Digital Marketing',
    desc: 'Social media and content marketing designed to amplify your brand\u2019s presence and drive meaningful engagement.',
  },
  {
    icon: Cpu,
    tint: 'cool',
    title: 'Generative AI',
    desc: 'AI-powered services that streamline operations, automate workflows, and deliver intelligent digital experiences.',
  },
  {
    icon: Smartphone,
    tint: '',
    title: 'App Development',
    desc: 'Innovative mobile and hybrid apps that enhance customer engagement across multiple platforms.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad bg-[#fafafa]">
      <div className="container-marklab">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 lg:mb-16">
          <Reveal className="max-w-xl">
            <span className="section-label">Smart services</span>
            <h2 className="h2 mt-5">
              Smart Services That Drive <Serif>Real</Serif> Impact.
            </h2>
          </Reveal>
        </div>

        {/* 2x2 card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.08 }}
              className="card-tint rounded-[20px] p-8 lg:p-10 flex flex-col gap-6 h-full cursor-default group"
            >
              <span className={`icon-3d ${service.tint} w-14 h-14 shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                <service.icon size={26} strokeWidth={1.6} />
              </span>
              <div>
                <h3 className="h4">{service.title}</h3>
                <p className="text-body mt-3 max-w-md leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
