module.exports = {
  content: [
    "./public/**/*.html", // Includes all HTML files in public/
    "./src/**/*.{js,jsx,ts,tsx}", // Includes JS/JSX/TS/TSX files in src/
  ],
  theme: {
    extend: {
      colors: {
        brand_darkblue: "#14213D",
        brand_orange: "#FCA311",
        brand_offwhite: "#E5E5E5",
        brand_green: "#4AF626",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
