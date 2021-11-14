module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  outline: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    // extend: {
    //   backgroundImage: (theme) => ({
    //     image: "url('/leaves.png')",
    //   }),
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
