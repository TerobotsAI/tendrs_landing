import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontSize: {
        '2.5xl': ['1.75rem', '2.5rem'],
        '4.5xl': ['2.5rem', '3rem'],
        '5.5xl': ['3.5625rem', '4rem']
      },
      colors: {
        accent: {
          '50': '#ecf7ff',
          '100': '#d3ecff',
          '200': '#b1deff',
          '300': '#7cccff',
          '400': '#3faeff',
          '500': '#1387ff',
          '600': '#0063ff',
          '700': '#004bff',
          '800': '#003cce',
          '900': '#0739a1',
          '950': '#0a2463',
          DEFAULT: '#0a2463',
          foreground: '#f4f8fb'
        },
        secondary: {
          '50': '#f0f9f4',
          '100': '#dbf0e4',
          '200': '#bae0cb',
          '300': '#8dc8ad',
          '400': '#5cab88',
          '500': '#419d78',
          '600': '#2a7156',
          '700': '#215b46',
          '800': '#1d4839',
          '900': '#183c2f',
          '950': '#0d211b',
          DEFAULT: '#419D78',
          foreground: '#ffffff'
        }
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      maxWidth: {
        '8xl': '90rem',
        '9xl': '105rem',
        '10xl': '120rem'
      },
      zIndex: {
        1: 1,
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              textDecoration: 'none',
              '&:hover': {
                opacity: '.75'
              }
            },
            img: {
              borderRadius: defaultTheme.borderRadius.lg
            }
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ]
}

export default tailwindConfig
