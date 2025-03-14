// import defaultTheme from "tailwindcss/defaultTheme";
// import colors from "tailwindcss/colors";
// import { util } from "tailwindcss/lib/util";

// /** @type {import('tailwindcss').Config} */
// const config = {
//   content: ["./src/**/*.{js,jsx}"],
//   darkMode: "class",
//   theme: {
//     // rest of the code
//   },
//   plugins: [addVariablesForColors],
// };

// function addVariablesForColors({ addBase, theme }) {
//   const allColors = util.flattenColorPalette(theme("colors"));
//   const newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
//   );

//   addBase({
//     ":root": newVars,
//   });
// }

// export default config;
