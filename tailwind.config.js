/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'observatory': {
          '50': '#eefff9',
          '100': '#c6ffef',
          '200': '#8cffe0',
          '300': '#4bfdcf',
          '400': '#16ebbb',
          '500': '#00cea2',
          '600': '#00a686',
          '700': '#018870',
          '800': '#076858',
          '900': '#0b5649',
          '950': '#00352f',
        },      
      }
    },
  },
  // daisyui: {
  //   themes: [
  //     {
  //       light: {
  //         ...require("daisyui/src/colors/themes")["[data-theme=light]"],
  //         "shortcut": "#242933",
  //       },
  //     },
  //     {
  //       dark: {
  //         ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
  //         "shortcut": "#242933",
  //       },
  //     },
  //   ],
  // },
  plugins: [require('daisyui')],
}
