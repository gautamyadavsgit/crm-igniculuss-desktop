module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#02A7CC'
      },
      fontFamily: {
        NatoBold: 'Nato-sans-bold'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
