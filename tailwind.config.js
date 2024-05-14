/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: '#4BBCD7',
          'primary-content': '#ddd',
          secondary: '#828DF8',
          accent: '#F471B5',
          neutral: '#3D4451',
          'neutral-focus': '#303640',
          'neutral-content': '#FFFFFF',
          'base-100': '#fff',
          'base-200': '#F3F3F3',
          'base-300': '#eee',
          'base-content': '#1F2937',
          info: '#0CA6E9',
          success: '#2BD4BD',
          warning: '#F4C152',
          error: '#FB6F84'
        }
      }
    ]
  },
  plugins: [require('daisyui'), require('autoprefixer')]
}
