module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff", A700_7f: "#ffffff7f" },
        black: { 900: "#000000" },
        teal: { A400: "#13f2be" },
        gray: { 900: "#191919" },
      },
      boxShadow: {},
      fontFamily: { roboto: "Roboto", montserrat: "Montserrat" },
      textShadow: { ts: "0px 4px  4px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
