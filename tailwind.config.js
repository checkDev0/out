/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        microsoftLogin: '0 2px 6px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
}
