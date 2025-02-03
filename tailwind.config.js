/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/assets/background.avif')"
      },
      screens:{
        sm1:"480px",
        sm2:"200px",
      }
    },
  },
  plugins: [],
}

// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'custom-bg': "url('/assets/background.avif')"
//       }
//     },
//   },
//   plugins: [],
// };
