/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'background': '#1A132F',
        'secondaryBackground': '#2B2046',
        'primaryText': '#D9D9D9',
        'buttonColor': '#9C27B0',
        'hoverColor': '#BA68C8',
        'buttonTextColor': '#FFFFFF',
        'secondary': '#41469E'
      },
    },
  },
  plugins: [],
}