/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
    colors: {
      cyan: 'hsl(179, 62%, 43%)',
      bright_yellow: 'hsl(71, 73%, 54%)',
      light_gray: 'hsl(204, 43%, 93%)',
      grayish_blue: 'hsl(218, 22%, 67%)',
      white: 'hsl(0, 0%, 100%)'
    },
    fontWeight: {
      normal: '400',
      heavy: '700'
    },
    screens: {
      desktop: '700px'
    }
  },
  plugins: [],
}
