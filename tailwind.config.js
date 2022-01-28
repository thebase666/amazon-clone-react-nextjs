module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        amazon_blue: {//Header中背景调用 bg-amazon_blue-light
          light: "#232F3E",
          DEFAULT: "#131921",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],

}


// module.exports = {
//   mode: "jit",
//   purge: [
//     "./src/pages/**/*.{js,ts,jsx,tsx}",
//     "./src/components/**/*.{js,ts,jsx,tsx}",
//   ],
//   darkMode: false, // or 'media' or 'class'
  // theme: {
  //   extend: {
  //     colors: {
  //       amazon_blue: {
  //         light: "#232F3E",
  //         DEFAULT: "#131921",
  //       },
  //     },
  //   },
  // },
//   variants: {
//     extend: {},
//   },
//   plugins: [require("@tailwindcss/line-clamp")],
// };
