import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BottomNavigation() {
  return (
    <View style={styles.container}>
      <Text style={styles.icons}>H</Text>
      <Text style={styles.icons}>C</Text>
      <Text style={styles.icons}>G</Text>
      <Text style={styles.icons}>R</Text>
      <Text style={styles.icons}>P</Text>
      <Text style={styles.icons}>M</Text>
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
