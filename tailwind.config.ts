import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a0a0f',
          50: '#f0f0f5',
          100: '#d0d0dd',
          200: '#a0a0b5',
          300: '#70708d',
          400: '#505068',
          500: '#303043',
          600: '#1e1e2e',
          700: '#16161f',
          800: '#111118',
          900: '#0a0a0f',
        },
        accent: {
          blue: '#6366f1',
          purple: '#a855f7',
          pink: '#ec4899',
          green: '#22c55e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'heading': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'subheading': ['1.5rem', { lineHeight: '1.3' }],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'accent-gradient': 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899)',
      },
    },
  },
  plugins: [],
};

export default config;
