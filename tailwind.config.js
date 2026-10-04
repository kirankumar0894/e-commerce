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
        background: 'var(--color-bg)',
        surface: {
          DEFAULT: 'var(--color-surface)',
          elevated: 'var(--color-surface-elevated)',
          subtle: 'var(--color-surface-subtle)',
        },
        foreground: {
          DEFAULT: 'var(--color-fg)',
          muted: 'var(--color-fg-muted)',
          subtle: 'var(--color-fg-subtle)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
          hover: 'var(--color-border-hover)',
        },
        brand: {
          50: '#FFF5F0',
          100: '#FFE9DE',
          200: '#FFCEB8',
          300: '#FFAA85',
          400: '#FF7E47',
          500: '#FF5500', // Signature Aura Orange
          600: '#E64A00',
          700: '#BF3B00',
          800: '#992F00',
          900: '#732400',
          950: '#4D1700',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      borderRadius: {
        'luxury': '1.25rem',
        'pill': '9999px',
      },
      boxShadow: {
        'glow-orange': '0 0 40px -10px rgba(255, 85, 0, 0.35)',
        'glow-orange-lg': '0 0 60px -12px rgba(255, 85, 0, 0.45)',
        'lux-sm': '0 2px 10px rgba(0, 0, 0, 0.04)',
        'lux-md': '0 8px 30px rgba(0, 0, 0, 0.08)',
        'lux-lg': '0 20px 50px rgba(0, 0, 0, 0.12)',
        'lux-dark': '0 20px 50px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
