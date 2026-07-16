/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0fc',
          100: '#c2ddfc',
          200: '#93c4f8',
          300: '#5eaafa',
          400: '#2c8ff3',
          500: '#0a61c9', // Royal Blue
          600: '#0852ae',
          700: '#064089', // Navy
          800: '#07326a', // Midnight Blue
          900: '#05234d',
          950: '#03142e',
        },
        secondary: {
          50: '#f1f5fa',
          100: '#dfe9f3',
          200: '#c3d5e7',
          300: '#a1bed9',
          400: '#86abce',
          500: '#749dc8', // Steel Blue
          600: '#5b82ad',
          700: '#46688f',
          800: '#334e6d',
          900: '#22354b',
          950: '#111c28',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
