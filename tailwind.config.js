/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          500: '#5AAC44',
          600: '#4A9E34',
        },
        blue: {
          50: '#E4F0F6',
          300: '#8BBDD9',
          500: '#0079BF',
        },
        slate: {
          600: '#5E6C84',
          700: '#3D4B66',
          800: '#172B4D',
        },
        yellow: {
          400: '#F5DD29',
          800: '#6B5900',
        },
        gray: {
          100: '#F4F5F7',
          200: '#DFE1E6',
          300: '#C1C7D0',
        },
      },
    },
  },
  plugins: [],
}