import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.box}>Section #1</Text>
      <Text style={styles.box}>Section #1</Text>
      <Text style={styles.box}>Section #1</Text>
      <Text style={styles.box}>Section #1</Text>
      <Text style={styles.box}>Section #1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    width: "90%",
    marginHorizontal: "auto",
    flex: 1, 
    flexDirection: "column",
    gap: 12,
    alignItems: "center", 
    justifyContent: "center",
  },
  box: {
    width: "100%",
    paddingVertical: 24,
    paddingHorizontal: 16,
    color: "#fff",
    borderRadius: 32,
    backgroundColor: "red",
  }
});
