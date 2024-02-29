import type { Config } from 'tailwindcss'

const config: Config = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens : {
        '3xl' : '1720px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    animation: {
      // Standard right to left speed
      marquee: 'marquee 100s linear infinite',
      marquee2: 'marquee2 100s linear infinite',
      // Slow right to left
      marqueeSlow: 'marquee 200s linear infinite',
      marquee2Slow: 'marquee2 200s linear infinite',
      // For left to right
      marquee3: 'marquee3 100s linear infinite',
      marquee4: 'marquee4 100s linear infinite',
      // Top to bottom
      marqueeTTB: 'marquee5 100s linear infinite',
      marquee2TTB: 'marquee6 100s linear infinite',
      // Bottom to Top
      marqueeBTT: 'marquee6 100s linear infinite',
      marquee2BTT: 'marquee5 100s linear infinite',
    },
    keyframes: {
      // For right to left
      marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      marquee2: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0%)' },
      },
      // For left to right
      marquee3: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(100%)' },
      },
      marquee4: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(0%)' },
      },
    },
  },
  plugins: [],
}

export default config;
