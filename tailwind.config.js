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
        // Sky Blue (Primary)
        primary: {
          50: '#e6f4ff',
          100: '#bae0ff',
          400: '#40a9ff',
          500: '#1890ff', // Main brand color
          600: '#0050b3',
        },
        // Red (Accent)
        accent: {
          400: '#f87171',
          500: '#ef4444', // Main CTA color
          600: '#dc2626',
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