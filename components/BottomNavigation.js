import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function BottomNavigation() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Ionicons name="home-outline" style={styles.icons} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Call")}>
        <Ionicons name="call-outline" style={styles.icons} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("GetHelp")}>
        <Ionicons name="heart-outline" style={styles.icons} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Resource")}>
        <Ionicons name="file-tray-stacked-outline" style={styles.icons} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Pattern")}>
        <Ionicons name="bulb-outline" style={styles.icons} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Details")}>
        <Ionicons name="library-outline" style={styles.icons} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly", // Changed from alignContent to justifyContent
    paddingVertical: 30,
  },
  icons: {
    padding: 14,
    fontSize: 16,
    borderWidth: 1, // Adds border width
    borderColor: "#7220D0", // Adds border color
    borderRadius: 4,
    color: "#7220D0"
  },
});
