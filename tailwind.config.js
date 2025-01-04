/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-up': 'slideUp 0.3s ease-out',
      },


      colors : {
        "main-white" : '#F2F2F2',
        'custom-purple-1': '#D45AFF',
        'custom-purple-2': '#7177FF',
        'custom-purple-3': '#9C8BFF',
      },
      backgroundColor: {
        "main-background-white" : '#F2F2F2',
      },
    },
  },
  plugins: [],
};