/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primaryC: 'hsla(232, 100%, 61%, 1)',
        primaryDark: 'hsla(234, 57%, 27%, 1)',
        bgHero: 'linear-gradient(180deg, rgba(242, 249, 255, 0.12) 0%, #F2F9FF 100%)',
        secondary: 'hsla(221, 30%, 39%, 1)',
        secondaryLight: 'hsla(221, 30%, 39%, 0.5)',
        
      },
    },
  },
  plugins: [],
}
