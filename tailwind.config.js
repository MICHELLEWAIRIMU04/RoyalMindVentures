/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deep Violet (Primary) — premium, bold, modern
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          400: '#a78bfa',
          500: '#7c3aed', // Main brand color – deep violet
          600: '#5b21b6',
        },
        // Amber / Gold (Accent) — warm, energetic CTA
        accent: {
          400: '#fbbf24',
          500: '#f59e0b', // Main CTA color – warm gold
          600: '#d97706',
        },
        // Neutrals
        neutral: {
          white: '#ffffff',
          'off-white': '#f8fafc',
          50: '#f1f5f9',
          100: '#e2e8f0',
          400: '#94a3b8',
          600: '#475569',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['2rem', { lineHeight: '1.3', fontWeight: '700' }],
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.75', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
}