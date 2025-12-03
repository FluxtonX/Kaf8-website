/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#432279',
        'primary-light': '#543785',
        'primary-dark': '#674D94',
        secondary: '#FA4293',
        accent: '#67C0FB',
        gray: {
          light: '#F3F3F3',
          bg: '#E6EFFC',
        },
        purple: {
          overlay: 'rgba(67, 34, 121, 0.8)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(142.32% 142.32% at 66.29% 147.71%, rgba(230, 239, 252, 0) 49.48%, #E6EFFC 100%)',
        'purple-gradient': 'linear-gradient(180deg, #432279 0%, #543785 100%)',
      },
      borderRadius: {
        'blob': '30% 70% 70% 30% / 30% 30% 70% 70%',
      }
    },
  },
  plugins: [],
}