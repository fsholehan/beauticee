module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        purple: {
          10: "#414880",
          15: "#091156",
          20: "#172176",
        },
        gray: {
          10: "#8B8B8B",
          15: "#CACACA",
        },
        pink: {
          10: "#FF64AE",
        },
        blue: {
          10: "#D9DDFE",
          15: "#D7DBFF",
          20: "#ABB4FF",
        },
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
