/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#475569',
        red: '#ff1e02',
        lightRed: '#E57373'
      }
    },
  },
  plugins: [],
};
