module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#00081b", "900_01": "#000000" },
        gray: {
          100: "#f7f7f7",
          200: "#ebebec",
          400: "#b8babc",
          500: "#97999c",
          600: "#797a7d",
          700: "#54585a",
          800: "#4a4a4a",
          900: "#222222",
          "100_01": "#f5f5f5",
          "800_7e": "#4a4a4a7e",
          "900_a2": "#222222a2",
        },
        teal: { 100: "#9bd3dd", 700: "#00677f" },
        lime: { 700: "#b5bd00" },
        blue: { A700: "#0066ff" },
        light_blue: { 800: "#117eb8" },
        indigo: { 900: "#262262", "900_87": "#26226287", "900_a2": "#262262a2" },
        white: { A700: "#ffffff", A700_87: "#ffffff87", A700_a2: "#ffffffa2" },
        blue_gray: { 100: "#c9cacc" },
        orange: { 800: "#ea7600" },
        red: { 900: "#a6192e", A700: "#e71316" },
        deep_purple: { 500: "#664fa3", 900: "#301579" },
        gray_800_75: "#4a4a4a75",
        gray_600_75: "#797a7d75",
      },
      boxShadow: {},
      fontFamily: { helveticaneueltwg: "Helvetica Neue LT W1G", helveticaneue: "Helvetica Neue" },
      opacity: { 0.5: 0.5, 0.8: 0.8, 0.4: 0.4 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
