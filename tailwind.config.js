/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '425px',

      'laptop': '1024px',

      'desktop': '1920px',

      '4k': '2560px',
    },
    extend: {},
  },
  plugins: [],
}

