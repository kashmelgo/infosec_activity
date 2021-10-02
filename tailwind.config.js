module.exports = {
  purge: [
    './resources/views/**/*.blade.php',
    './resources/css/**/*.css',
  ],
  theme: {
    extend: {
        fontFamily: {
            titleshadow:["Groovy Script Extrude", 'sans-serif'],
            title:["Groovy Script", 'sans-serif'],
        }
    }
  },
  variants: {},
  plugins: [
  ]
}
