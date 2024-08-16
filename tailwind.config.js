/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Include the src/app directory
    "./src/components/**/*.{js,ts,jsx,tsx}", // Include the components directory
    "./src/pages/**/*.{js,ts,jsx,tsx}", // If you have any pages outside the app directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
