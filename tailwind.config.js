/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html'],
  theme: {
    screens: {
      'xs': '475px',
      // => @media (min-width: 640px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        'heading': 'Inter',
        'para': 'Roboto',
      },
      fontSize: {
        'h1': ['3.815rem', '62px'],
        'h2': ['3.052rem', '49px'],
        'h3': ['2.441rem', '48px'],
        'h4': ['1.953rem', '42px'],
        'h5': ['1.563rem', '29px'],
        'h6': '1.250rem',
      },
      colors: {
        'background': '#1d1e2c',
        'black': '#000000',
        'white': '#ffffff',
        'primary': '#2ec4b6',
        'secondary': '',
        'tertiary': 'rgba(255, 240, 240, 0.15)',
        'clr--gray': '#d2d6dc',
      }
    },
  },
  plugins: [],
}

