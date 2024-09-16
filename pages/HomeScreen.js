import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.headline}>About TCL</Text>
          <Text style={styles.paragraph}>Section #1</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.headline}>National Hotlines</Text>
          <Text style={styles.paragraph}>Section #1</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.headline}>Get Help</Text>
          <Text style={styles.paragraph}>Section #1</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.headline}>Resources</Text>
          <Text style={styles.paragraph}>Section #1</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.headline}>Pattern Interrupts</Text>
          <Text style={styles.paragraph}>Section #1</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.headline}>More Resources</Text>
          <Text style={styles.paragraph}>Section #1</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    marginHorizontal: "auto",
    height: "auto",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  box: {
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: "#E6D4FF",
    borderRadius: 4,
  },
  headline: {
    fontSize: 20,
  },
  paragraph: {
    fontSize: 14,
  },
});
