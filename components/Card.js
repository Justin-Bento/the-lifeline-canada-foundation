import React from "react";
import { View, StyleSheet } from "react-native";

// Card Component for React Native
const Card = React.forwardRef(({ style, ...props }, ref) => (
  <View
    ref={ref}
    style={[styles.card, style]}
    {...props}
  />
));

Card.displayName = "Card";

// Styles for the Card component
const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ccc", // Add your preferred border color
    backgroundColor: "#fff", // Replace with your card background color
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 1 }, // Shadow offset
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2, // Required for Android shadow
    padding: 16, // Add padding if required
  },
});

export default Card;
