/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-main-bg": "#0d0d0d",
        "basic-light-gray": "#c5c5c5",
        "basic-white": "#fff",
        "basic-medium-gray": "rgba(128, 128, 128, 0.5)",
        "dark-white-10": "rgba(255, 255, 255, 0.1)",
        gray: {
          "100": "#3a2e1f",
          "200": "#1e252f",
          "300": "#151515",
          "400": "rgba(24, 23, 29, 0.3)",
          "500": "rgba(24, 24, 24, 0.6)",
          "600": "rgba(255, 255, 255, 0.15)",
          "700": "rgba(255, 255, 255, 0.49)",
          "800": "rgba(0, 0, 0, 0.71)",
          "900": "rgba(37, 37, 37, 0.01)",
        },
        "basic-dark-gray": "#808080",
        burlywood: "#be9662",
        tan: "#d8b790",
        black: "#000",
        "basic-onyx": "#181818",
        darkslategray: {
          "100": "#383737",
          "200": "#353535",
        },
        dimgray: "#4d4d4d",
        "dark-white-25": "rgba(255, 255, 255, 0.25)",
      },
      spacing: {},
      fontFamily: {
        "inter-16-regular": "Inter",
      },
      borderRadius: {
        "13xl": "32px",
        "7xs-3": "5.3px",
        "4xs-8": "8.8px",
        "8xs-4": "4.4px",
      },
   keyframes: {
        moveRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(20px)' },
        },
      },
      animation: {
        moveRight: 'moveRight 1s ease-in-out infinite',
      },
    },
    fontSize: {
      base: "1rem",
      sm: "0.875rem",
      xl: "1.25rem",
      "29xl": "3rem",
      "10xl": "1.813rem",
      "19xl": "2.375rem",
      "13xl": "2rem",
      lgi: "1.188rem",
      "7xl": "1.625rem",
      "5xs": "0.5rem",
      "3xs": "0.625rem",
      "5xl": "1.5rem",
      "18xl-3": "2.331rem",
      "3xl": "1.375rem",
      "11xl": "1.875rem",
      "5xs-2": "0.45rem",
      lg: "1.125rem",
      "61xl": "5rem",
      "21xl": "2.5rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1280px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
