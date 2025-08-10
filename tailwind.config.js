/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        'comic': ['Comic Sans MS', 'cursive'],
      },
      animation: {
        'pink-glow': 'pinkGlow 2s infinite alternate',
        'black-glow': 'blackGlow 2s infinite alternate',
        'glow': 'glow 2s infinite alternate',
      },
      keyframes: {
        pinkGlow: {
          '0%, 100%': {
            boxShadow: '0 0 10px #D9A299, 0 0 20px #D9A299, 0 0 10px #D9A299',
          },
          '50%': {
            boxShadow: '0 0 10px #D9A299, 0 0 10px #D9A299, 0 0 10px #D9A299',
          },
        },
        blackGlow: {
          '0%, 100%': {
            boxShadow: '0 0 10px #000000, 0 0 20px #000000, 0 0 10px #000000',
          },
          '50%': {
            boxShadow: '0 0 15px #000000, 0 0 25px #000000, 0 0 15px #000000',
          },
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 10px #D9A299, 0 0 20px #D9A299, 0 0 10px #D9A299',
          },
          '50%': {
            boxShadow: '0 0 10px #D9A299, 0 0 30px #D9A299, 0 0 10px #D9A299',
          },
        },
      },
    },
  },
  plugins: [],
}
