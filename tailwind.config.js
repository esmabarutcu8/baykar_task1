/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      rotate: {
        30: "-30deg",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Poppins fontunu buraya ekliyoruz
      },
      letterSpacing: {
        "15p": "15%", // %15'lik bir letter-spacing değeri ekleyin
      },
    },
  },
  plugins: [],
};
