import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          950: '#000000',
          900: '#0a0a0a',
          800: '#1a1a1a',
        },
        secondary: {
          50: '#f5f1e8',
          100: '#ebe5d9',
        },
        accent: {
          DEFAULT: '#d4af37',
          light: '#e8c547',
          dark: '#b8941e',
        },
        support: {
          dark: '#333333',
          charcoal: '#4a4a4a',
          gray: '#808080',
          muted: '#cccccc',
        },
        success: '#2d7a3e',
        error: '#c1292e',
      },
      fontFamily: {
        arabic: ['"Noto Kufi Arabic"', '"Traditional Arabic Typesetting"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['52px', { lineHeight: '1.2' }],
        'h2': ['40px', { lineHeight: '1.2' }],
        'h3': ['28px', { lineHeight: '1.2' }],
        'body': ['16px', { lineHeight: '1.6' }],
        'small': ['14px', { lineHeight: '1.5' }],
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-in-out',
        'slide-up': 'slideUp 400ms ease-in-out',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { transform: 'translateY(20px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
      },
    },
  },
  plugins: [],
};

export default config;
