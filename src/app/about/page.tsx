'use client';

import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import { PillButton, Serif, Reveal } from '@/components/ui';

const values = [
  {
    title: 'Bold work wins',
    description:
      'We challenge conventions, push creative boundaries, and build campaigns that stand out — because safe ideas don\u2019t spark real growth.',
  },
  {
    title: 'Performance over promises',
    description:
      'We don\u2019t rely on buzzwords or empty claims — every strategy is tracked, measured, and optimized for results you can actually see.',
  },
  {
    title: 'Think smart, act fast',
    description:
      'In a fast-moving digital world, we combine agile execution with intelligent planning to stay ahead of trends and your competitors.',
  },
  {
    title: 'Long-term partnerships',
    description:
      'We believe in building relationships, not just projects. Your success is our success, and we grow together through collaboration.',
  },
];

const deliverables = [
  'Corporate & Business Websites',
  'Automotive Dealership Websites',
  'Service-Based Company Websites',
  'Custom Mobile & Web Applications',
  'Business Process Automation Tools',
  'Lead Management Systems & CRMs',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="hero-banner">
        <div className="container-marklab relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto pt-44 pb-32">
            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="h1 text-white!"
            >
              We are super <Serif>growth</Serif> Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-large text-[#dcdde2]! mt-6 max-w-xl"
            >
              Techco Infotech is a full-service IT &amp; Digital Growth Partner
              delivering powerful technology solutions and result-driven
              marketing strategies for brands across industries.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-wrap gap-4 justify-center mt-9"
            >
              <PillButton href="/contact" variant="primary">
                Let&apos;s Talk
              </PillButton>
              <PillButton href="/services" variant="secondary" dark>
                Our Services
              </PillButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad bg-white">
        <div className="container-marklab grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <Reveal>
            <span className="section-label">Our story</span>
            <h2 className="h2 mt-5">
              Building strong <Serif>digital systems</Serif>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5">
            <p className="text-body">
              Techco Infotech started with a simple realization — to help
              businesses build strong digital systems, not just an online
              presence.
            </p>
            <p className="text-body">
              We saw brands with good-looking websites and active marketing,
              but weak infrastructure, unstructured leads, and low conversions.
              That gap inspired us to combine technology and marketing into one
              seamless approach.
            </p>
            <p className="text-body">
              What started with website development and digital campaigns soon
              expanded into web applications, CRMs, and custom solutions — all
              designed to support real business growth.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Counters */}
      <Stats />

      {/* Mission & Vision */}
      <section className="section-pad bg-white">
        <div className="container-marklab grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          <Reveal className="h-full">
            <div className="card p-8 h-full">
              <span className="icon-3d w-14 h-14 mb-6">
                <Target size={24} strokeWidth={1.8} />
              </span>
              <h3 className="h4">Our Mission</h3>
              <p className="text-body mt-3">
                To empower businesses by providing them with innovative digital
                solutions that drive growth, enhance customer engagement, and
                streamline operations.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="h-full">
            <div className="card p-8 h-full">
              <span className="icon-3d cool w-14 h-14 mb-6">
                <Eye size={24} strokeWidth={1.8} />
              </span>
              <h3 className="h4">Our Vision</h3>
              <p className="text-body mt-3">
                To be a global leader in digital solutions, renowned for our
                commitment to quality, innovation, and customer satisfaction.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-[#fafafa]">
        <div className="container-marklab">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="section-label">Our values</span>
            <h2 className="h2 mt-5">
              Bold values behind <Serif>every</Serif> breakthrough
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 lg:mt-14">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={(i % 2) * 0.08} className="h-full">
                <div className="card-tint rounded-[20px] p-8 h-full transition-colors duration-300">
                  <h3 className="h4">{value.title}</h3>
                  <p className="text-body mt-3">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we deliver */}
      <section className="section-pad bg-white">
        <div className="container-marklab grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <span className="section-label">What we deliver</span>
            <h2 className="h2 mt-5">
              Practical solutions for <Serif>real growth</Serif>
            </h2>
            <p className="text-body mt-5 max-w-lg">
              We deliver practical IT and digital solutions designed to solve
              real business problems and drive measurable growth.
            </p>
            <div className="mt-8">
              <PillButton href="/contact" variant="primary">
                Start a Project
              </PillButton>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-3">
            {deliverables.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 px-6 py-4 rounded-[16px] bg-[#edf2ff] font-medium text-[#0b0d21] text-[15px]"
              >
                <span className="w-2 h-2 rounded-full bg-[#4555fd] shrink-0" />
                {item}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Founders */}
      <section className="section-pad bg-[#fafafa]">
        <div className="container-marklab">
          <Reveal className="text-center max-w-xl mx-auto">
            <span className="section-label">Founders</span>
            <h2 className="h2 mt-5">
              Meet the <Serif>visionaries</Serif>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 max-w-2xl mx-auto mt-12 lg:mt-14">
            {[
              { name: 'Raunak Jashnani', role: 'Co-Founder' },
              { name: 'Yash Kakwani', role: 'Co-Founder' },
            ].map((founder, i) => (
              <Reveal key={founder.name} delay={i * 0.12}>
                <div className="card p-8 text-center">
                  <div className="w-20 h-20 rounded-full icon-3d mx-auto mb-4 text-2xl font-bold flex items-center justify-center">
                    {founder.name[0]}
                  </div>
                  <h3 className="h5 font-bold">{founder.name}</h3>
                  <p className="text-small mt-1">{founder.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
