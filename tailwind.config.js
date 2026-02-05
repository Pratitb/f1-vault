/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: `0 1px 2px rgba(0,0,0,0.05), 0 8px 16px rgba(0,0,0,0.1)`,
      },
      colors: {
        primary: '#475569',
        red: '#ff1e02',
      }
    },
  },
  plugins: [],
};
