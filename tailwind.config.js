module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-mobile": "url('./assets/hero-mobile.jpg')",
      }),
      letterSpacing: {
        "extra-wide": "0.5rem",
      },
      lineHeight: {
        extra: "3.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
