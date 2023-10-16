/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#090E34",
      dark: "#1D2144",
      primary: "#394fba",
      secondary: "#FC00FF",
      yellow: "#FBB040",
      "body-color": "#959CB1",
    },
    screens: {
      xs: "460px",
      // => @media (min-width: 450px) { ... }

      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      flexBasis: {
        three: "calc(33% - 1.5rem)",
        two: "calc(50% - 1.25rem)",
      },
      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
      },
      screens: {
        "2xlCustom": { max: "1545px" },
        // => @media (max-width: 1535px) { ... }

        xlCustom: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lgCustom: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        "2mdCustom": { max: "850px" },
        // => @media (max-width: 850px) { ... }

        mdCustom: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        smCustom: { max: "639px" },
        // => @media (max-width: 639px) { ... }

        xsmCustom: { max: "520px" },
        // => @media (max-width: 639px) { ... }

        "2xsmCustom": { max: "340px" },
        // => @media (max-width: 639px) { ... }

        xsm: "340px",
        // => @media (min-width: 450px) { ... }
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Titillium: ['"Titillium Web"', "sans-serif"],
      },
      backgroundImage: {
        // "hero-bg":
        //   "linear-gradient(to right bottom, rgba(51, 55, 62, 0.2), rgba(32, 35, 42, 0.2)), url('/images/cleaner1.webp')",
        // "hero-bg": "url('/images/hero/hero-bg.png')",
        "hero-bg":
          "linear-gradient(to right bottom, rgba(51, 55, 62, 0.4), rgba(32, 35, 42, 0.4)), url('/images/hero/hero-pic.jpg')",
      },
    },
  },
  plugins: [],
};
