const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'gray-blue-50': '#f2f7fb',
      'gray-blue-100': '#e7f0f8',
      'gray-blue-200': '#d3e2f2',
      'gray-blue-300': '#b9cfe8',
      'gray-blue-400': '#9cb6dd',
      'gray-blue-500': '#839dd1',
      'gray-blue-600': '#6a7fc1',
      'gray-blue-700': '#6374ae',
      'gray-blue-800': '#4a5989',
      'gray-blue-900': '#414e6e',
      'gray-blue-950': '#262c40',
    },
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

