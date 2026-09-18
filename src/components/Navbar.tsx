'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { PillButton } from './ui';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Service', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

function Logo({ light }: { light: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0">      <span
        className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-lg transition-colors duration-300 ${
          light ? 'bg-white text-[#0b0d21]' : 'bg-[#4555fd] text-white'
        }`
      }
      >
        T
      </span>
      <span
        className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
          light ? 'text-white' : 'text-[#0b0d21]'
        }`}
      >
        Techco<span className={light ? 'text-[#9fb6ff]' : 'text-[#4555fd]'}> Infotech</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overDark, setOverDark] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      // Hero banner is dark; once past it the navbar sits on white
      const banner = document.getElementById('hero-banner');
      if (banner) {
        const rect = banner.getBoundingClientRect();
        setOverDark(rect.bottom > 80);
      } else {
        setOverDark(window.scrollY <= 60);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Close menu on route change (derived during render, not in an effect)
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    if (isOpen) setIsOpen(false);
  }

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const light = !scrolled && overDark;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-[#e6e6e6] py-2 shadow-[0_2px_20px_rgba(11,13,33,0.04)]'
          : light
            ? 'bg-[#0b0d21]/40 backdrop-blur-md py-4'
            : 'bg-transparent py-4'
      }`}
    >
      <nav className="container-marklab flex items-center justify-between gap-6 min-h-[60px] lg:min-h-[64px]">
        <Logo light={light} />

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative text-[15px] transition-colors duration-300 after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:rounded-full after:bg-[#4555fd] after:transition-all after:duration-300 ${
                pathname === link.href ? 'after:w-full' : 'after:w-0 hover:after:w-full'
              } ${
                pathname === link.href
                  ? light
                    ? 'text-white'
                    : 'text-[#4555fd]'
                  : light
                    ? 'text-[#dcdde2] hover:text-white'
                    : 'text-[#4e516a] hover:text-[#0b0d21]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <PillButton href="/contact" variant={light ? 'white' : 'primary'} size="sm">
            Send Inquiry
          </PillButton>
        </div>

        {/* Mobile toggle — color must always contrast the bar behind it */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          className={`lg:hidden w-10 h-10 rounded-full flex flex-col items-center justify-center gap-1.5 transition-colors duration-300 ${
            isOpen || light ? 'text-white' : 'text-[#0b0d21]'
          } ${isOpen ? 'bg-white/10' : ''}`}
        >
          <span className={`block w-6 h-[2px] rounded-full bg-current transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
          <span className={`block w-6 h-[2px] rounded-full bg-current transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[4px] translate-x-0' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#0b0d21] border-t border-white/10 max-h-[calc(100dvh-72px)] overflow-y-auto"
          >
            <div className="container-marklab py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base transition-colors ${
                    pathname === link.href
                      ? 'text-white bg-white/10'
                      : 'text-[#dcdde2] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-3">
                <PillButton href="/contact" variant="primary" className="w-full justify-center">
                  Send Inquiry
                </PillButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
