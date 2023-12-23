/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    container: {
      center: 'true',
      padding: {
        DEFAULT: '1rem',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      }
    },
    extend: {
      colors: {
        red: '#A25772',
        red_shade1:'#D17194',
        blue: '#7C93C3',
        skyblue: '#9EB8D9',
        white: '#EEF5FF',
      }
    },
    fontFamily: {
      averia: ['Averia Serif Libre', 'serif'],
      taviraj: ['Taviraj', 'serif'],
      worksans: ['Work Sans', 'sans-serif']
    }
  },
  plugins: [],
}