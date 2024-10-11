import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const Colors = StyleSheet.create({
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
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    paddingTop: 25,
    paddingHorizontal: 16,
    gap: 10,
    backgroundColor: Colors.white,
  },
  mainContainer: {
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
    width: screenWidth - 20,
    height: 70,
    resizeMode: "stretch",
  },
  mediaImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 14,
  },
  cardContainer: {
    flexDirection: "row",
    borderRadius: 8,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    marginVertical: 8,
    height: 125,
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
});

const Typography = StyleSheet.create({
  h1: {
    fontSize: 48,
    fontWeight: "500",
    color: Colors.black,
  },
  h2: {
    fontSize: 36,
    fontWeight: "500",
    color: Colors.black,
  },
  h3: {
    fontSize: 30,
    fontWeight: "500",
    color: Colors.black,
  },
  h4: {
    fontSize: 24,
    fontWeight: "500",
    color: Colors.black,
  },
  h5: {
    fontSize: 20,
    fontWeight: "500",
    color: Colors.black,
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    color: Colors.black,
  },
  titleXL: {
    fontSize: 22,
    fontWeight: "600",
  },
  titleLG: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.black,
  },
  titleSM: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.black,
  },
  body1: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.black,
    fontWeight: "400",
  },
  body2: {
    fontSize: 14,
    lineHeight: 18,
    color: Colors.black,
    fontWeight: "400",
  },
});

const Spacing = StyleSheet.create({
  leftContainer: {
    flex: 0.6,
    justifyContent: "center",
    paddingRight: 8,
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 8,
  },
});

export { Typography, Layouts, Colors, Spacing };
