import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        eru: {
          // ── Backgrounds (Deep Premium Dark Surfaces)
          bg: {
            DEFAULT: '#0B1120',  // primary app background
            deep:    '#070D18',  // deepest — window background & titlebar
            alt:     '#111827',  // secondary panels, modals
          },
          // ── Surfaces (cards, panels, dropdowns)
          surface: {
            1: '#141E2E',  // primary card surface
            2: '#1B273A',  // elevated / hover
            3: '#223249',  // raised panels
            4: '#283B55',  // interactive / focused
          },
          // ── Legacy aliases (keep for backward compat)
          darkest:   '#070D18',
          card:      '#141E2E',
          cardHover: '#1B273A',

          // ── Brand Teal
          teal: {
            DEFAULT: '#14B8A6',  // primary brand teal (#14B8A6)
            bright:  '#2DD4BF',  // hover / active (#2DD4BF)
            soft:    '#99F6E4',  // secondary accents (#99F6E4)
            muted:   '#4D7A75',  // tertiary / subtle
            deep:    '#0F766E',  // dark teal container backgrounds (#0F766E)
            hover:   '#2DD4BF',  // button hover alias
            dark:    '#0F766E',  // dark alias
            glow:    'rgba(20, 184, 166, 0.22)',
          },

          // ── Text
          text: {
            primary:   '#F8FAFC',
            secondary: '#94A3B8',
            muted:     '#64748B',
            disabled:  '#475569',
          },
          // ── Legacy text alias
          muted: '#64748B',

          // ── Borders
          border: {
            DEFAULT: '#1E293B',
            subtle:  '#162032',
          },

          // ── Semantic Status
          success: '#22C55E',
          warning: '#F59E0B',
          error:   '#EF4444',
          info:    '#38BDF8',

          // ── Legacy
          cyan:    '#06B6D4',
          accent:  '#2DD4BF',
        }
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'teal-glow':    '0 0 25px rgba(22, 184, 165, 0.25)',
        'teal-glow-lg': '0 0 45px rgba(22, 184, 165, 0.35)',
        'teal-glow-sm': '0 0 12px rgba(22, 184, 165, 0.20)',
        'card-hover':   '0 8px 32px -8px rgba(22, 184, 165, 0.30), 0 0 0 1px rgba(22, 184, 165, 0.35)',
      },
      keyframes: {
        'fade-in': {
          '0%':   { opacity: '0', transform: 'translateY(-6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%':   { opacity: '0', transform: 'translateY(-12px) translateX(-50%)' },
          '100%': { opacity: '1', transform: 'translateY(0)   translateX(-50%)' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        },
        'pulse-teal': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.4' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(20, 184, 166, 0.3)' },
          '50%':      { boxShadow: '0 0 40px rgba(20, 184, 166, 0.6)' },
        },
      },
      animation: {
        'fade-in':    'fade-in 0.25s ease-out forwards',
        'slide-down': 'slide-down 0.3s ease-out forwards',
        'shimmer':    'shimmer 1.6s linear infinite',
        'pulse-teal': 'pulse-teal 2s ease-in-out infinite',
        'float':      'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
      backgroundImage: {
        'teal-gradient': 'linear-gradient(135deg, #14B8A6 0%, #2DD4BF 50%, #0F766E 100%)',
        'teal-gradient-text': 'linear-gradient(135deg, #F8FAFC 0%, #2DD4BF 60%, #14B8A6 100%)',
        'mesh-gradient': 'radial-gradient(ellipse at center, rgba(20, 184, 166, 0.15) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
};

export default config;