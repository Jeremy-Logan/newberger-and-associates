module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    fontFamily: {
      'serif': ['"Playfair Display"', '"ui-serif"', 'Georgia'],
      'sans': ['Montserrat', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
    '"Fira Sans"', '"Droid Sans"', '"Helvetica Neue"', 'sans-serif']
    }},

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
