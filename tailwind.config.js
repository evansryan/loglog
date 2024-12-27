/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        brand_cream: "#FFF5E1",
        brand_orange: "#FFA500",
        brand_green: "#228B22",
        brand_gray: "#696969",
        brand_blue: "#76D7EA",
        brand_brown: "#A0522D",
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
