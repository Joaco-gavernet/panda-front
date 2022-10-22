/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      purple: '#3E338B',
      black: '#1E1E1E',
      white: '#F4F4F4',
    },
    extend: {
      backgroundImage: {
        hero: "url(../public/media/background-hero.svg)",
        light: "url('../public/media/background-light.svg')",
        dark: "url('../public/media/background-dark.svg')"
      },
      fontSize: {
        xl: '4rem',
        l: '2rem',
        m: '1rem',
        s: '.5rem'
      },
      fontWeight: {
        regular: '400',
        bold: '600',
        extrabold: '800'
      }
    },
  },
  plugins: [],
}
