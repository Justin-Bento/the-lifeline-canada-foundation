import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

// Get device width
const { width: screenWidth } = Dimensions.get("window");

// Colors For The User Interface
// ----------------------------------------------------

const colors = StyleSheet.create({
  white: "#fcfbfe",
  black: "#0c0612",
  Primary: "#9b52e0",
  Secondary: "#9b52e0",
  Accent: "#d06cc8",
});
const Layouts = StyleSheet.create({
  flexLeftAlign: {
    flex: 1,
    gap: 20,
    alignItems: "left",
    justifyContent: "center",
    width: "100w",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "top", // Align items to the top
    width: "100%", // Use full width
    paddingTop: 25,
    paddingHorizontal: 16,
    gap: 10,
    backgroundColor: colors.white,
  },
  main_container: {
    width: "auto",
    paddingVertical: 24,
    paddingHorizontal: 18,
  },
  box: {
    width: "100%",
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "rgba(54, 7, 100, 0.3)",
    backgroundColor: "rgb(242, 232, 255)",
  },
  fullWidthImage: {
    width: screenWidth - 20, // Full width of the device screen
    height: 70, // Adjust height as needed
    resizeMode: "stretch", // Ensure the image maintains aspect ratio
  },
  mediaImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 14,
  },
  cardContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    marginVertical: 8,
    height: 125, // Set the height for the card
  },
  leftContainer: {
    flex: 0.6, // 50% width
    justifyContent: "center", // Center content vertically
    paddingRight: 8, // Add some spacing between the containers
  },
  rightContainer: {
    flex: 1, // 50% width
    justifyContent: "center", // Center content vertically
    paddingLeft: 8, // Add some spacing between the containers
  },
  image: {
    width: "100%", // Full width of the right container
    height: "100%", // Full height of the right container
  },
});
const Typography = StyleSheet.create({
  // Typography
  h1: {
    fontSize: 48,
    fontWeight: "500",
    color: colors.black,
  },
  h2: {
    fontSize: 36,
    fontWeight: "500",
    color: colors.black,
  },
  h3: {
    fontSize: 30,
    fontWeight: "500",
    color: colors.black,
  },
  h4: {
    fontSize: 24,
    fontWeight: "500",
    color: colors.black,
  },
  h5: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.black,
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.black,
  },
  titleXL: {
    fontSize: 22,
    fontWeight: "600",
  },
  title_lg: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.black,
  },
  title_sm: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.black,
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

export { Typography, Layouts, colors };
