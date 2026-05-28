/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bronze: '#9B7B4A',
          'bronze-light': '#C9A96E',
          'bronze-dark': '#7A5F38',
          cream: '#FAF7F2',
          warm: '#F0EBE1',
          // legacy — kept so existing dark-theme pages don't break on main
          teal: '#2DD4BF',
          'teal-dark': '#0D9488',
          blue: '#3B82F6',
          'blue-dark': '#1D4ED8',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
