/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bmw: {
          blue: '#1C69D4',
          'blue-dark': '#0047CC',
          'blue-light': '#4A8FE8',
          black: '#0A0A0A',
          'dark': '#111111',
          'dark-2': '#1A1A1A',
          'dark-3': '#242424',
          silver: '#C0C0C0',
          platinum: '#E8E8E8',
          white: '#F8F8F8',
        },
      },
      fontFamily: {
        display: ['Barlow Condensed', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-left': 'slideInLeft 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-blue': 'pulseBlue 2s ease-in-out infinite',
      },
      keyframes: {
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        pulseBlue: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(28, 105, 212, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(28, 105, 212, 0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}