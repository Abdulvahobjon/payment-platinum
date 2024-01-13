/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow:{
        "card-shadow": "20px 4px 50px 0px rgba(0, 0, 0, 0.25)",
        "card-shadow-2":"10px 4px 20px 0px rgba(0, 0, 0, 0.25);"
      }
    },
  },
  plugins: [],
}


