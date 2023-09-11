/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'personal': "url('/src/img/personal.PNG')",
        'code': "url('/src/img/code.jpg')",
      },
      fontFamily: {
        "merienda": ['Merienda', "sans-serif"]
      }
    },
  },
  plugins: [],
}

