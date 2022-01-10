module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        purple: {
          10: "#414880",
          15: "#091156",
        },
        gray: {
          10: "#8B8B8B",
        },
        pink: {
          10: "#FF64AE",
        },
        blue: {
          10: "#D9DDFE",
        },
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
