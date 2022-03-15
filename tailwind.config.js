module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    colors: {
      // Configure your color palette here
      'background': '#F8F8F8',
      'white': "#ffffff",
      'darkgrey' : '#404040',
      'maingreen': '#3AD197',
      'darkgreen':'#457A4B',
      'darkmodeLight':"#292929",
      'darkmodeDark':'#1C1B1B',
      'darkmodeLighttext':'#E5E5E5',
      'loadinglight':'#eeeeee'
    },
    extend: {
      'animation': {
        'gradient-x':'gradient-x 15s ease infinite',
        'gradient-y':'gradient-y 15s ease infinite',
       
    },
      
      boxShadow: {
      },
      // that is animation class
      animation: {
        fade: 'fadeOut 5s ease-in-out',
        gradientx :'gradient-x 15s ease infinite'
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
        gradientx :{
          '0%, 100%': {
              'background-size':'200% 200%',
              'background-position': 'left center'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'right center'
          }
      },
      }),
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
}
