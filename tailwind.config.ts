import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'clean-green': '#28a745',
        'clean-green-dark': '#218838',
        'clean-brown': '#3f0a00',
        'clean-brown-dark': '#2a0700',
        'tree-green': '#2c5530',
        'tree-green-light': '#4a7c59',
      },
    },
  },
  plugins: [],
}

export default config
