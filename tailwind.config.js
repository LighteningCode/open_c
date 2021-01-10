module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: {"max":'640px'},
      md: {"max":'768px'},
      lg: {"max":'1024px'},
      xl: {"max":'1280px'},
      '2xl': {"max":'1536px'},
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
