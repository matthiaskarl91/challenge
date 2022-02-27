module.exports = {
  mode: 'jit',
  content: ['./app/**/*.tsx', './app/services/**/*.ts'],
  theme: {
    fontFamily: {
      body: ['Montserat'],
    },
    extend: {
      backgroundImage: {
        blurry: "url('/images/blurry_mobile.png')",
        blurryMD: "url('/images/blurry_desktop.png')",
      },
      colors: {
        primary: '#004F9B',
        secondary: '#009FE3',
        grayAssistant: '#808080',
        error: '#D72638',
        blackCondensed: 'rgba(0, 0, 0, 0.8)',
      },
      maxWidth: {
        '2/3': '66%',
      },
      minWidth: {
        'nav-popup': '500px',
      },
    },
  },
  plugins: [],
}
