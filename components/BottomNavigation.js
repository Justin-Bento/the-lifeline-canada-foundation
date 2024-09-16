import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BottomNavigation() {
  return (
    <View style={styles.container}>
      <Text style={styles.button_icons}>1</Text>
      <Text style={styles.button_icons}>2</Text>
      <Text style={styles.button_icons}>3</Text>
      <Text style={styles.button_icons}>4</Text>
      <Text style={styles.button_icons}>5</Text>
      <Text style={styles.button_icons}>6</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",  // Changed from alignContent to justifyContent
    paddingVertical: 30
  },
  button_icons: {
    padding: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    borderWidth: 1,        // Adds border width
    borderColor: 'black',  // Adds border color
    borderRadius: 4
  },
});