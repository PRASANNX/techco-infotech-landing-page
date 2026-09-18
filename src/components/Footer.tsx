'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Mail, MapPin, Phone, ArrowUpRight, Check } from 'lucide-react';
import { PillButton, Serif, Reveal } from './ui';

const columns = [
  {
    title: 'Main',
    links: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Web Development', href: '/services' },
      { name: 'App Development', href: '/services' },
      { name: 'Digital Marketing', href: '/services' },
      { name: 'AI & Automation', href: '/services' },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="bg-white pt-4">
      <div className="container-marklab">
        {/* CTA banner built into footer (template's footer-top-wrap) */}
        <Reveal>
          <div className="hero-banner rounded-[30px] px-6 sm:px-8 py-16 lg:py-24 text-center">
            <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
              <span className="section-label on-dark">Start building now</span>
              <h2 className="h2 text-white! mt-5">
                Ready to <Serif>see real</Serif> Results
              </h2>
              <div className="flex flex-wrap gap-4 justify-center mt-9">
                <PillButton href="/contact" variant="primary">
                  Let&apos;s Talk
                </PillButton>
                <a href="tel:+916232551312" className="btn btn-white">
                  <span>Book a Discovery Call</span>
                  <span className="btn-arrows" aria-hidden>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M9 7h8v8" />
                    </svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M9 7h8v8" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Footer grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(300px,430px)_1fr] gap-12 lg:gap-16 py-14 lg:py-16">
          {/* Left: brand + contact + newsletter */}
          <div className="flex flex-col gap-8">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-full bg-[#4555fd] text-white flex items-center justify-center font-bold text-lg">
                T
              </span>
              <span className="text-xl font-bold tracking-tight text-[#0b0d21]">
                Techco<span className="text-[#4555fd]"> Infotech</span>
              </span>
            </Link>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#4555fd] mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-[#0b0d21]">Office</p>
                  <p className="text-small">Indore, Madhya Pradesh, India</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#4555fd] mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-[#0b0d21]">Email</p>
                  <a href="mailto:Techcoinfotech@gmail.com" className="text-small hover:text-[#4555fd] transition-colors">
                    Techcoinfotech@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#4555fd] mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-[#0b0d21]">Main</p>
                  <a href="tel:+916232551312" className="text-small hover:text-[#4555fd] transition-colors block">
                    +91-6232551312
                  </a>
                  <a href="tel:+918770752740" className="text-small hover:text-[#4555fd] transition-colors block">
                    +91-8770752740
                  </a>
                </div>
              </li>
            </ul>

            {/* Newsletter (template's form-block) */}
            <div>
              <p className="font-medium text-[#0b0d21] mb-3">Newsletter for updates</p>
              {subscribed ? (
                <p className="flex items-center gap-2 text-small text-[#4555fd] font-medium">
                  <Check size={16} /> Thank you! Your submission has been received!
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubscribed(true);
                  }}
                  className="relative max-w-sm"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Subscribe to get more updates"
                    className="w-full h-12 rounded-full border border-[#e6e6e6] pl-5 pr-14 text-sm text-[#0b0d21] placeholder:text-[#a2a3b1] focus:outline-none focus:border-[#4555fd] transition-colors bg-white"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#4555fd] text-white flex items-center justify-center hover:bg-[#3543d9] transition-colors"
                  >
                    <ArrowUpRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right: link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-[#a2a3b1] text-sm mb-5">{col.title}</p>
                <ul className="space-y-3.5">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-[#0b0d21] font-medium hover:text-[#4555fd] transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <p className="text-[#a2a3b1] text-sm mb-5">Social</p>
              <ul className="space-y-3.5">
                {['LinkedIn', 'Instagram', 'Twitter'].map((s) => (
                  <li key={s}>
                    <a
                      href="#"
                      className="text-[#0b0d21] font-medium hover:text-[#4555fd] transition-colors"
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#e6e6e6] py-7 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-small">
            © {new Date().getFullYear()} Techco Infotech. All rights reserved.
          </p>
          <p className="text-small">
            Founded by <span className="font-bold text-[#0b0d21]">Raunak Jashnani</span> &{' '}
            <span className="font-bold text-[#0b0d21]">Yash Kakwani</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
