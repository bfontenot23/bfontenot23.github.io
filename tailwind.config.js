/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark': '#0f0f1a',
        'card': '#1a1a2e',
        'accent-blue': '#3b82f6',
        'accent-purple': '#a855f7',
        'accent-green': '#4ecca3',
        'text-primary': '#ffffff',
        'text-secondary': '#a0a0b2',
      },
      fontFamily: {
        'space': ['"Space Grotesk"', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
