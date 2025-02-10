/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('tailwindcss-preset-email'),
  ],
  content: [
    './components/**/*.html',
    './emails/**/*.html',
    './layouts/**/*.html',
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'crimson': ['Crimson Pro', 'serif'],
      },
      backgroundImage: {
        'hero': "url('/images/miamiView.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      width: {
        '45%': '45%',
        '90': '22.5rem',
        '96': '24rem',
        '104': '26rem',
        '112': '28rem',
        '118': '30rem',
        '120': '31.75rem',
        '128': '32rem',
        '136': '33.125rem',
        '144': '34.5rem',
        '160': '40rem',
        '176': '44rem',
      },
    }
  }
}
