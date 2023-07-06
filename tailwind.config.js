/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'personal': "url('/src/img/personal.PNG')"
      },
      fontFamily: {
        "merienda": ['Merienda', "sans-serif"]
      }
    },
  },
  plugins: [],
}

