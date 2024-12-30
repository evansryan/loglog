module.exports = {
  content: [
    "./public/**/*.html", // Includes all HTML files in public/
    "./src/**/*.{js,jsx,ts,tsx}", // Includes JS/JSX/TS/TSX files in src/
  ],
  theme: {
    extend: {
      colors: {
        brand_cream: "#FFF5E1",
        brand_orange: "#FFA500",
        brand_green: "#228B22",
        brand_gray: "#696969",
        brand_blue: "#76D7EA",
        brand_brown: "#A0522D",
        brand_black: "#121212",
      },
      fontFamily: {
        chewy: ["Chewy"],
        poppins: ["Poppins"],
        openSans: ["Open Sans"],
      },
    },
  },
  plugins: [],
};
