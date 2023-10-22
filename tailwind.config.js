/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "luxury","forest"],
  },
  plugins: [require("daisyui")],
}

