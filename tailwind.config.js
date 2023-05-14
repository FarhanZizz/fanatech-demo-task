/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#396c03",

          secondary: "#676767",

          accent: "#FF8B00",

          neutral: "#000000",

          "base-100": "#eff4ec",

          info: "#0070F3",

          success: "#21CC51",

          warning: "#FF6154",

          error: "#DE1C8D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
