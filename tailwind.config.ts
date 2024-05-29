import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
   
      colors:{
        fuchsia:"#931D72",
        yellow:"#F8F5F3"
        
      },
      fontSize: {
        18 : '18px'
      }
      ,
      fontFamily: {
        bold: "bold",
        light: "light",
        black: "black",
        reqular: "reqular",
        normal:"medium",
        medium: "medium",
        "extra-bold": "extra-bold",
        "extra-light": "extra-light",
      }
    },
  },
  plugins: [],
}
export default config
