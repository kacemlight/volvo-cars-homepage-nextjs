import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        volvo: {
          blue: '#003DA5',
          lightblue: '#0066CC',
          gray: '#F5F5F5',
          darkgray: '#333333',
        },
      },
    },
  },
  plugins: [],
}
export default config
