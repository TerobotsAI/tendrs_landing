// Tailkit (Tailwind CSS v3 Configuration)
import plugin from 'tailwindcss/plugin'
import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

import aspectRatio from '@tailwindcss/aspect-ratio'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
  ],
  theme: {
    extend: {
      fontSize: {
        '2.5xl': ['1.75rem', '2.5rem'],
        '4.5xl': ['2.5rem', '3rem'],
        '5.5xl': ['3.5625rem', '4rem'],
      },
      colors: {
        accent: {
          DEFAULT: '#764DCE',
          50: '#E5DDF6',
          100: '#D8CDF1',
          200: '#C0ADE8',
          300: '#A78DE0',
          400: '#8F6DD7',
          500: '#764DCE',
          600: '#5A31B2',
          700: '#442586',
          800: '#2D195A',
          900: '#170D2E',
          950: '#0C0718',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        '8xl': '90rem',
        '9xl': '105rem',
        '10xl': '120rem',
      },
      zIndex: {
        1: 1,
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100,
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              textDecoration: 'none',
              '&:hover': {
                opacity: '.75',
              },
            },
            img: {
              borderRadius: defaultTheme.borderRadius.lg,
            },
          },
        },
      },
    },
  },
  plugins: [
    aspectRatio,
    forms,
    typography,
    plugin(function ({ addUtilities }) {
      const utilFormSwitch = {
        '.form-switch': {
          border: 'transparent',
          'background-color': colors.gray[300],
          'background-image':
            "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")",
          'background-position': 'left center',
          'background-repeat': 'no-repeat',
          'background-size': 'contain !important',
          'vertical-align': 'top',
          '&:checked': {
            border: 'transparent',
            'background-color': 'currentColor',
            'background-image':
              "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")",
            'background-position': 'right center',
          },
          '&:disabled, &:disabled + label': {
            opacity: '.5',
            cursor: 'not-allowed',
          },
        },
      }

      addUtilities(utilFormSwitch)
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-dotted-background'),
  ],
}
