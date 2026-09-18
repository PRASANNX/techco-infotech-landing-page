'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Pages', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Service', href: '/#services' },
  { name: 'Work', href: '/#portfolio' },
  { name: 'Pricing', href: '/#contact' },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0">
      <span className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#c86bff] to-[#6be0ff] flex items-center justify-center text-white text-sm font-bold leading-none shadow-[0_0_12px_rgba(200,107,255,0.6)]">
        +
      </span>
      <span className="text-[19px] font-bold tracking-tight text-white">
        Techco Infotech
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Close menu on route change
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

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300">
      <nav 
        className={`flex items-center justify-between gap-8 transition-all duration-500 rounded-full px-3 py-2.5 max-w-5xl w-full ${
          scrolled 
            ? 'bg-[#10122b]/90 backdrop-blur-xl shadow-2xl border border-white/10' 
            : 'bg-[#1a1e4a]/60 backdrop-blur-md border border-white/10 shadow-lg'
        }`}
      >
        <div className="pl-4">
          <Logo />
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[14px] font-medium transition-colors duration-200 flex items-center gap-1.5 ${
                pathname === link.href ? 'text-white' : 'text-white/75 hover:text-white'
              }`}
            >
              {link.name}
              {link.name === 'Pages' && (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-5">
          {/* Cart Icon (decorative for the reference style) */}
          <button className="text-white/70 hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </button>
          
          <Link 
            href="/#contact" 
            className="flex items-center gap-2.5 bg-white/15 hover:bg-white/25 text-white px-6 py-3 rounded-full text-[14px] font-medium transition-all"
          >
            Let&apos;s Contact
            <span className="w-6 h-6 rounded-full bg-white text-[#0b0d21] flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          className="lg:hidden w-11 h-11 rounded-full flex flex-col items-center justify-center gap-1.5 text-white bg-white/15 mr-1"
        >
          <span className={`block w-5 h-[2px] rounded-full bg-current transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
          <span className={`block w-5 h-[2px] rounded-full bg-current transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[4px] translate-x-0' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-20 left-4 right-4 bg-[#10122b] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-xl text-[15px] font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-3">
                <Link 
                  href="/#contact" 
                  className="flex items-center justify-center gap-2 bg-white/15 text-white w-full py-3.5 rounded-xl text-[15px] font-medium hover:bg-white/20 transition-colors"
                >
                  Let&apos;s Contact
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
