/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./services/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Light Theme
        'background-light': '#f0f4f9',
        'foreground-light': '#0f172a',
        'card-light': 'rgba(255, 255, 255, 0.6)',
        'text-secondary-light': '#475569',
        'border-light': 'rgba(0, 0, 0, 0.08)',

        // Dark Theme
        'background-dark': '#020418',
        'foreground-dark': '#e2e8f0',
        'card-dark': 'rgba(10, 25, 47, 0.6)',
        'text-secondary-dark': '#94a3b8',
        'border-dark': 'rgba(255, 255, 255, 0.15)',

        'accent': {
          'light': '#0EA5E9',
          'dark': '#38BDF8'
        }
      },
      animation: {
        'aurora': 'aurora 60s infinite linear',
      },
      keyframes: {
        aurora: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      }
    },
  },
  plugins: [],
}