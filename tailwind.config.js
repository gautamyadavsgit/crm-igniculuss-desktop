module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        16: 'repeat(16, minmax(0, 1fr))'
      },
      colors: {
        primary: '#02A7CC',
        seccondary: '#282828',
        inputBorder: '#D5D5D5'
      },
      fontFamily: {
        NatoBold: 'Nato-sans-bold'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('flowbite/plugin')],
  content: ['./node_modules/flowbite/**/*.js']
}
