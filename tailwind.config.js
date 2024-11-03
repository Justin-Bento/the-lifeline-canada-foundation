/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
import nativewindPreset from "nativewind/preset";

export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    // Additional paths if necessary
  ],
  presets: [
    nativewindPreset,
    // Additional presets if necessary
  ],
  theme: {
    colors: {
      white: colors.gray[50],
      black: colors.gray[950],
      gray: colors.zinc,
      primary: "##9b51e0",
      secondary: "#89009b",
      accent: "#d06cc8",
      transparent: "transparent",
      current: "currentColor",
    },
  },
  plugins: [],
};
