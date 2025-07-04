/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'background': '#0e0e15',
        'secondaryBackground': '#191724',
        'primaryText': '#fcfbfd',
        'buttonColor': '#6d3ca7',
        'hoverColor': '#26C6DA',
        'buttonTextColor': '#FFFFFF',
        'hoverColor': '#cb92ff'
      },
    },
  },
  plugins: [],
}