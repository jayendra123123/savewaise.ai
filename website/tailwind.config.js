/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#FAF8F5',
          cream: '#FFFDF7',
          dark: '#0F172A'
        },
        brand: {
          blue: '#1D4ED8',
          blueHover: '#1E40AF',
          purple: '#7C3AED',
          green: '#059669',
          amber: '#D97706',
          rose: '#E11D48',
          yellow: '#FACC15',
          border: '#0F172A'
        }
      },
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          'Inter',
          '-apple-system',
          'sans-serif'
        ],
        mono: [
          'JetBrains Mono',
          'monospace'
        ]
      },
      boxShadow: {
        'brutal-sm': '2px 2px 0px 0px #0F172A',
        'brutal': '4px 4px 0px 0px #0F172A',
        'brutal-lg': '6px 6px 0px 0px #0F172A',
        'brutal-xl': '8px 8px 0px 0px #0F172A',
        'brutal-white': '4px 4px 0px 0px #FFFFFF',
      }
    },
  },
  plugins: [],
}
