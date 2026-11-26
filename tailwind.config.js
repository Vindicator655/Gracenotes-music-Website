/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#40E0D0',
        secondary: '#87CEEB',
        accent1: '#FFF9C4',
        accent2: '#C8E6C9',
        accent3: '#F8BBD0',
        dark: '#1A3636',
        glass: 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Source Sans Pro', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
};
