// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sourceSans: ['Source Sans Pro', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      colors: {
        primary: '#FF1654',
        secondary: '#FFF5F7',
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/images/uterus.webp')",
      },
      spacing: {
        '128': '32rem',
      },
      maxWidth: {
        '7xl': '80rem',
      },
      height: {
        'video': '400px',
      },
      gridTemplateColumns: {
        'stats': 'repeat(3, minmax(0, 1fr))',
        'articles': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      zIndex: {
        'navbar': '1000',
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}