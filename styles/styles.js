import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

// Get device width
const { width: screenWidth } = Dimensions.get("window");

// Colors For The User Interface
// ----------------------------------------------------
let white = "#fcfbfe";
let black = "#0c0612";
let Primary = "#9b52e0";
let Secondary = "#9b52e0";
let Accent = "#d06cc8";

const externalStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "top", // Align items to the top
    width: "100%", // Use full width
    paddingTop: 25,
    paddingHorizontal: 16,
    gap: 10,
    backgroundColor: white,
  },
  card_media: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    backgroundColor: black,
    marginBottom: 14,
  },
  main_container: {
    width: "auto",
    paddingVertical: 24,
    paddingHorizontal: 18,
  },
  flexLeftAlign: {
    flex: 1,
    gap: 20,
    alignItems: "left",
    justifyContent: "center",
    width: "100w",
  },
  box: {
    width: "100%",
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "rgba(54, 7, 100, 0.3)",
    backgroundColor: "rgb(242, 232, 255)",
  },
  button: {
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 10,
    backgroundColor: "#9b52e0",
  },
  button_text: {
    color: white,
    fontWeight: "500",
  },
});
const Layout = StyleSheet.create({
  fullWidthImage: {
    width: screenWidth - 20, // Full width of the device screen
    height: 70, // Adjust height as needed
    resizeMode: "stretch", // Ensure the image maintains aspect ratio
  },
});
const Typography = StyleSheet.create({
  // Typography
  h1: {
    fontSize: 48,
    fontWeight: "500",
    color: black,
  },
  h2: {
    fontSize: 36,
    fontWeight: "500",
    color: black,
  },
  h3: {
    fontSize: 30,
    fontWeight: "500",
    color: black,
  },
  h4: {
    fontSize: 24,
    fontWeight: "500",
    color: black,
  },
  h5: {
    fontSize: 20,
    fontWeight: "500",
    color: black,
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    color: black,
  },
  titleXL: {
    fontSize: 22,
    fontWeight: "600",
  },
  title_lg: {
    fontSize: 18,
    fontWeight: "600",
    color: black,
  },
  title_sm: {
    fontSize: 16,
    fontWeight: "600",
    color: black,
  },
  body1: {
    fontSize: 16,
    lineHeight: "24px",
    color: black,
    fontWeight: "400",
  },
  body2: {
    fontSize: 14,
    lineHeight: "18px",
    color: black,
    fontWeight: "400",
  },
});

export { externalStyleSheet, Typography };
