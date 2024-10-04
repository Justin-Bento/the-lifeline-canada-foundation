import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

// Get device width
const { width: screenWidth } = Dimensions.get("window");

// Colors For The User Interface
// ----------------------------------------------------
let white = white;
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
  dailyQuote: {
    fontSize: 22,
    fontStyle: "italic", // Italicize the quote
    marginVertical: 10, // Space above and below the quote
  },
  fullWidthImage: {
    width: screenWidth - 20, // Full width of the device screen
    height: 70, // Adjust height as needed
    resizeMode: "stretch", // Ensure the image maintains aspect ratio
  },
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
  h6: {
    fontSize: 18,
    fontWeight: "500",
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

export default externalStyleSheet;
