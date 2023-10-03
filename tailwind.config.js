module.exports = {
  content: [
    "./content/**/*.md",
    "./content/**/*.html",
    "./layouts/**/*.html",
    "./assets/**/*.js",
    "./themes/dreamatorium/content/**/*.md",
    "./themes/dreamatorium/content/**/*.html",
    "./themes/dreamatorium/layouts/**/*.html",
    "./themes/dreamatorium/assets/**/*.js",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
}
