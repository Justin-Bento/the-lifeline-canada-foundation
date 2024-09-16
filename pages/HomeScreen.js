import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.headline}>Section #1</Text>
          <Text style={styles.paragraph}>Section #1</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.headline}>Section #1</Text>
          <Text style={styles.paragraph}>Section #1</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.headline}>Section #1</Text>
          <Text style={styles.paragraph}>Section #1</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.headline}>Section #1</Text>
          <Text style={styles.paragraph}>Section #1</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.headline}>Section #1</Text>
          <Text style={styles.paragraph}>Section #1</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.headline}>Section #1</Text>
          <Text style={styles.paragraph}>Section #1</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginHorizontal: "auto",
    height: "auto",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  box: {
    width: "100%",
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: "#E6D4FF",
  },
  headline: {
    fontSize: 20,
  },
  paragraph: {
    fontSize: 14,
  },
});
