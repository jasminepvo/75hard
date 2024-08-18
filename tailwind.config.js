/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Include the src/app directory
    "./src/components/**/*.{js,ts,jsx,tsx}", // Include the components directory
    "./src/pages/**/*.{js,ts,jsx,tsx}", // If you have any pages outside the app directory
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Forum", "serif"],
        body: ["Cormorant Garamond Medium", "serif"],
        subheading: ["Poppins Light", "sans-serif"],
      },
      colors: {
        strongTeal: "#008080",
        freshGreen: "#00C853",
        earthyBrown: "#6D4C41",
        softBeige: "#EFEFEF",
      },
    },
  },
  plugins: [],
};
