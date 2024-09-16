import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BottomNavigation() {
  return (
    <View style={styles.container}>
      <Text style={styles.icons}>1</Text>
      <Text style={styles.icons}>2</Text>
      <Text style={styles.icons}>3</Text>
      <Text style={styles.icons}>4</Text>
      <Text style={styles.icons}>5</Text>
      <Text style={styles.icons}>6</Text>
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
  icons: {
    padding: 10,
    paddingHorizontal: 14,
    fontSize: 16,
    borderWidth: 1,        // Adds border width
    borderColor: 'black',  // Adds border color
    borderRadius: 4
  },
});
