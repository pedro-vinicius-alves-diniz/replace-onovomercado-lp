/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },

      colors: {
        'primary-1': '#00022b',
        'primary-2': '#1f236f',
        'primary-3': '#6097d8',
        'secondary-1': '#E7004C',
        'gray-1': '#303030',
        'gray-2': '#1A1919',
      },

      boxShadow: {
        'hover-btn': '0 0 12px 4px rgba(255, 255, 255, 0.2)'
      }
    },
  },
  plugins: [],
}

