module.exports = {
  purge: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Quicksand"]
    },
    extend: {
      width: {
        "140": "48rem"
      },
      height: {
        "128": "38rem"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
