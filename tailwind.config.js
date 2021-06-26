module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'header':'Jomhuria',
         'title':'Benne',
         'bebas':'Bebas Neue'
      },
      minHeight:{
        '200':'200px'     
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: {
          light: '#85d7ff',
          DEFAULT: '#1fb6ff',
          dark: '#009eeb',
        },
        pink: {
          light: '#ff7ce5',
          DEFAULT: '#ff49db',
          dark: '#ff16d1',
        },
        gray: {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          DEFAULT: '#c0ccda',
          light: '#e0e6ed',
          lightest: '#f9fafc',
        },
        'bing': {
          '50': '#f4f4f4', 
          '100': '#e9e9e9', 
          '200': '#c8c8c8', 
          '300': '#a7a7a7', 
          '400': '#646464', 
          '500': '#222222', 
          '600': '#1f1f1f', 
          '700': '#1a1a1a', 
          '800': '#141414', 
          '900': '#111111'
      },
        'shark': {
          '50': '#f4f4f4', 
          '100': '#e9e9ea', 
          '200': '#c8c9ca', 
          '300': '#a6a8a9', 
          '400': '#646669', 
          '500': '#212529', 
          '600': '#1e2125', 
          '700': '#191c1f', 
          '800': '#141619', 
          '900': '#101214'
      },
        fantasy: {
          '50': '#fffffe', 
          '100': '#ff0000', 
          '200': '#fefdfc', 
          '300': '#fdfbf9', 
          '400': '#fcf8f5', 
          '500': '#fbf5f1', 
          '600': '#e2ddd9', 
          '700': '#bcb8b5', 
          '800': '#979391', 
          '900': '#7b7876'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
