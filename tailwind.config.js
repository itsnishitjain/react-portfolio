module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        gap: {
          "1vh": "1vh",
          "2vh": "2vh",
          "3vh": "3vh",
        },
        padding: {
          "1vh": "1vh",
          "2vh": "2vh",
          "3vh": "3vh",
          "4vh": "4vh",
          "5vh": "5vh",
          "6vh": "6vh",
          "7vh": "7vh",
          "10vh": "10vh",
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require("daisyui")],
  };
  