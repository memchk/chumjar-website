const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.gray
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
