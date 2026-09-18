'use client';

import {
  Globe,
  Smartphone,
  Megaphone,
  Cpu,
  Code2,
  Check,
} from 'lucide-react';
import TechStack from '@/components/TechStack';
import FAQ from '@/components/FAQ';
import { PillButton, Serif, Reveal } from '@/components/ui';

const services = [
  {
    icon: Globe,
    tint: '',
    title: 'Website Design & Development',
    description:
      'We build tailored websites, scalable e-commerce platforms, and robust software solutions to streamline your operations and align with your unique business needs.',
    items: [
      'Business websites',
      'eCommerce websites',
      'Landing pages',
      'Portfolio & personal brand sites',
      'Custom WordPress development',
      'API integration',
    ],
  },
  {
    icon: Smartphone,
    tint: 'alt',
    title: 'Mobile App Development',
    description:
      'We develop innovative mobile and hybrid apps that enhance customer engagement and align with your business objectives, ensuring compatibility across multiple platforms.',
    items: [
      'Android & iOS apps',
      'Cross-platform apps using React Native',
      'eCommerce, utility, and service-based apps',
      'Admin panels and dashboards',
      'App Store & Play Store deployment',
      'Performance optimization',
    ],
  },
  {
    icon: Megaphone,
    tint: 'cool',
    title: 'Digital Marketing & SEO',
    description:
      'Our digital marketing solutions amplify your brand\u2019s online presence and drive meaningful engagement through data-driven strategies.',
    items: [
      'Meta (Facebook & Instagram) Ads',
      'Google Ads',
      'Social Media Marketing & Management',
      'Influencer campaigns',
      'Email marketing',
      'Conversion optimization',
    ],
  },
  {
    icon: Cpu,
    tint: '',
    title: 'AI & Automation Services',
    description:
      'We provide advanced AI-powered services to streamline operations, automate workflows, and deliver intelligent digital experiences.',
    items: [
      'Chatbot Development (websites, WhatsApp, Instagram)',
      'AI-powered Content Generation',
      'Image Generation & Editing using AI',
      'Voice Cloning & AI Voiceovers',
      'Custom GPT-based tools',
      'AI-based lead qualification & response systems',
    ],
  },
];

const offerings = [
  {
    icon: Code2,
    title: 'Consulting Services',
    description:
      'Expert guidance tailored to your business needs. Our consulting services help you navigate challenges effectively.',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description:
      'Reach your target audience with precision. Our digital marketing strategies are designed to maximize your online presence.',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description:
      'Building responsive and user-friendly websites. Our web development solutions ensure a robust online experience.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="hero-banner">
        <div className="container-marklab relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto pt-44 pb-32">
            <h1 className="h1 text-white!">
              Smart service, <Serif>real</Serif> impact
            </h1>
            <p className="text-large text-[#dcdde2]! mt-6 max-w-xl">
              We empower brands and businesses with cutting-edge digital
              solutions tailored for today&apos;s fast-paced world — from
              impactful websites to result-driven marketing.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-9">
              <PillButton href="/contact" variant="primary">
                Let&apos;s Talk
              </PillButton>
              <PillButton href="/portfolio" variant="secondary" dark>
                See Our Work
              </PillButton>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed services — alternating split cards */}
      <section className="section-pad bg-white">
        <div className="container-marklab space-y-6">
          {services.map((service, i) => (
            <Reveal key={service.title}>
              <div className="card-tint rounded-[24px] p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 transition-colors duration-300">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className={`icon-3d ${service.tint} w-16 h-16`}>
                      <service.icon size={28} strokeWidth={1.8} />
                    </span>
                    <span className="text-sm font-bold text-[#a2a3b1]">0{i + 1}</span>
                  </div>
                  <h2 className="h3">{service.title}</h2>
                  <p className="text-body mt-4">{service.description}</p>
                </div>
                <div className="lg:pl-10 lg:border-l border-[#c2d4ff]">
                  <p className="section-label mb-5">What we offer</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-[#4555fd] text-white flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={11} strokeWidth={3} />
                        </span>
                        <span className="text-sm text-[#0b0d21] min-w-0">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <TechStack />

      {/* Premier offerings — bg must differ from TechStack (white) */}
      <section className="section-pad bg-[#edf2ff]">
        <div className="container-marklab">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="section-label">Your trusted partner</span>
            <h2 className="h2 mt-5">
              Our premier <Serif>offerings</Serif>
            </h2>
            <p className="text-body mt-4">
              Tailor your experience by choosing services that resonate with
              your needs — we specialize across fields to ensure effectiveness
              and efficiency.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 lg:mt-14">
            {offerings.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1} className="h-full">
                <div className="card p-8 h-full">
                  <span className="icon-3d w-14 h-14 mb-6">
                    <item.icon size={24} strokeWidth={1.8} />
                  </span>
                  <h3 className="h4">{item.title}</h3>
                  <p className="text-body mt-3">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="text-center mt-12">
            <PillButton href="/contact" variant="primary">
              Get Started
            </PillButton>
          </Reveal>
        </div>
      </section>

      <FAQ />
    </>
  );
}
