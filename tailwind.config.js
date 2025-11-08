/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Light Theme
        'background-light': '#f0f4f9', // Lighter, cooler gray
        'foreground-light': '#0f172a', // slate-900
        'card-light': 'rgba(255, 255, 255, 0.6)',
        'text-secondary-light': '#475569', // slate-600
        'border-light': 'rgba(0, 0, 0, 0.08)',
        
        // Dark Theme (New Blue Palette)
        'background-dark': '#020418', // Midnight Blue
        'foreground-dark': '#e2e8f0', // slate-200
        'card-dark': 'rgba(10, 25, 47, 0.6)', // Dark blue with alpha
        'text-secondary-dark': '#94a3b8', // slate-400
        'border-dark': 'rgba(255, 255, 255, 0.15)',

        'accent': {
          'light': '#0EA5E9', // sky-500
          'dark': '#38BDF8'  // sky-400
        },
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'accent-glow-light': '0 0 25px rgba(14, 165, 233, 0.4)',
        'accent-glow-dark': '0 0 25px rgba(56, 189, 248, 0.3)',
      },
      animation: {
        'aurora': 'aurora 60s infinite linear',
        'shimmer': 'shimmer 1.5s infinite linear',
      },
      keyframes: {
        aurora: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        }
      }
    },
  },
  plugins: [],
}