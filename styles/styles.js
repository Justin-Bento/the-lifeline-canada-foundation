import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

// Get device width
const { width: screenWidth } = Dimensions.get("window");

// Colors For The User Interface
// ----------------------------------------------------
// Background - #fcfbfe,
// Text - #0c0612
// Primary - #9b52e0
// Secondary - #9b52e0
// Accent - #d06cc8

const externalStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "top", // Align items to the top
    width: "100%", // Use full width
    paddingTop: 25,
    paddingHorizontal: 16,
    gap: 10,
    backgroundColor: "#f9f5ff", // Light background color
  },
  box: {
    width: "100%",
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "rgba(54, 7, 100, 0.3)",
    backgroundColor: "rgb(242, 232, 255)",
  },
  headline: {
    fontSize: 16,
    fontWeight: "500", // Make headlines bold
    marginBottom: 4, // Space between headline and paragraph
    color: "rgba(31, 41, 55, 1)",
  },
  paragraph: {
    fontSize: 14,
    color: "rgba(31, 41, 55, 0.7)",
    fontWeight: "400",
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
});

export default externalStyleSheet;
