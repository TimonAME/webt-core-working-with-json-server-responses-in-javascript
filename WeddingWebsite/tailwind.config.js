/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
  ],
  screens: { 
    //standard screen sizes for responsive design 
    //remove/add for more brake points
  sm: "640px",
  md: "768px",
  //xl: "1080px",
  },
}

