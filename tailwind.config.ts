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
        'parralax': 'url("/images/parralax.jpg")',
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
      marqueeTTB: 'marquee5 50s linear infinite',
      marquee2TTB: 'marquee6 50s linear infinite',
      // Bottom to Top
      marqueeBTT: 'marquee7 50s linear infinite',
      marquee2BTT: 'marquee8 50s linear infinite',
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
        '100%': { transform: 'translateX(0%)' },
        '0%': { transform: 'translateX(-100%)' },
      },
      marquee4: {
        '100%': { transform: 'translateX(100%)' },
        '0%': { transform: 'translateX(0%)' },
      },
      marquee5: {
        '0%': { transform: 'translateY(0%)' },
        '100%': { transform: 'translateY(-100%)' },
      },
      marquee6: {
        '0%': { transform: 'translateY(100%)' },
        '100%': { transform: 'translateY(0%)' },
      },
      marquee7 : {
        '-100%' : { transform : 'translateY(0%)' },
        '0%' : { transform : 'translateY(-100%)' },
      },
      marquee8 : {
        '0%' : { transform : 'translateY(0%)' },
        '100%' : { transform : 'translateY(100%)' },
      }
    },
  },
  plugins: [],
}

export default config;
