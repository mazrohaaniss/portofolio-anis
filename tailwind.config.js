/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['"Outfit"', 'sans-serif'],
        dancing: ['"Dancing Script"', 'cursive'],
        display: ['"Outfit"', 'sans-serif'], // We'll use a bold sans for the main titles instead of handwriting if they want clean
      },
      colors: {
        bg: {
          light: '#Fdf8f5', // Soft cream/beige
          alt: '#F4ECE6', // Slightly darker beige
        },
        text: {
          main: '#111111',
          muted: '#666666',
          light: '#999999',
        },
        primary: {
          500: '#C5A880', // Caramel / Gold
          600: '#A38760',
        },
        accent: {
          green: '#9BB098', // Soft olive green
          blue: '#829CB4', // Soft blue
          peach: '#E0B59B', // Peach/tan
        },
        border: {
          main: '#E5D9CE',
        }
      },
      animation: {
        'slide-up': 'slide-up 0.8s ease-out forwards',
        'fade-in': 'fade-in 1s ease-out forwards',
      },
      keyframes: {
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
