/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/pages/**/*.{js,ts,jsx,tsx}', 'src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      inset: {
        '-100': '-100%',
      },
    },
    colors: {
      primary: '#e03',
      white: '#fff',
      black: '#000',
      hover: '#be0129',
      text: '#6b6b6b',
      modal: 'rgba(0,0,0,.3)',
      light: 'rgb(240, 242, 245)',
      facebook: 'rgb(23, 120, 242)',
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [],
};
