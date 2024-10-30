/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/**/*.js",
    "./docs/**/*.vue",
    "./docs/**/*.ts",
    "./docs/**/*.md",
  ],
  options: {
    safelist:["html",,"body", "markdown-body"],
  },
  theme: {
    extend: {},
  },
  plugins: [],
}