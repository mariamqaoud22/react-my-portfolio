/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      colors: {
        primary: "#4A4947",
        secondary: "#B17457",
        bg: "#000000",
        text: "#ffffff",
        bg2: "#AB886D",
        bg3: "#A4907C",
      },
    },
  },
  plugins: [],
}

