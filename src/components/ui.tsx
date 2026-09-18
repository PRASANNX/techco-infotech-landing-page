'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

/* ============ Double arrow-up-right (template's signature button icon) ============ */
export function DoubleArrow({ className = '' }: { className?: string }) {
  return (
    <span className={`btn-arrows ${className}`} aria-hidden>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 17L17 7M9 7h8v8" />
      </svg>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 17L17 7M9 7h8v8" />
      </svg>
    </span>
  );
}

/* ============ Pill button (Marklab primary/secondary) ============ */
type Variant = 'primary' | 'secondary' | 'white';

const variants: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  white: 'btn-white',
};

export function PillButton({
  href,
  children,
  variant = 'primary',
  size,
  dark = false,
  className = '',
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: 'sm';
  dark?: boolean;
  className?: string;
}) {
  const cls = [
    'btn',
    variants[variant],
    dark && variant === 'secondary' ? 'on-dark' : '',
    size === 'sm' ? 'btn-sm' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Link href={href} className={cls}>
      <span>{children}</span>
      <DoubleArrow />
    </Link>
  );
}

/* ============ Serif italic accent word (Instrument Serif) ============ */
export function Serif({ children }: { children: ReactNode }) {
  return <span className="font-serif-italic">{children}</span>;
}

/* ============ Scroll reveal ============ */
export function Reveal({
  children,
  delay = 0,
  y = 32,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
