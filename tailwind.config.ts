import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'background-01': '#0a0a0a',
        'background-02': '#000',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
      },
      screens: {
        desktop: { max: '1024px' },
        tablet: { max: '768px' },
        mobile: { max: '500px' },
      },
      maxWidth: {
        wrapper: '75rem',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
