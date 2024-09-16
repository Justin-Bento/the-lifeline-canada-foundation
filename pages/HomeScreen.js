import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
       <View>
         <Text style={styles.dailyQuote}>Not until we are lost do we begin to understand ourselves - Henry T.</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.headline}>About TCL</Text>
          <Text style={styles.paragraph}>Learn About The Lifeline Canada Foundation.</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.headline}>National Hotlines</Text>
          <Text style={styles.paragraph}>Speak with a compassionate professional.</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.headline}>Get Help</Text>
          <Text style={styles.paragraph}>Find the support you need today.</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.headline}>Resources</Text>
          <Text style={styles.paragraph}>Unlock your power for every level of wellness.</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.headline}>Pattern Interrupts</Text>
          <Text style={styles.paragraph}>Rewiring your mind with something new.</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.headline}>More Resources</Text>
          <Text style={styles.paragraph}>Your toolkit for mental wellness.</Text>
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
    color: "#3C3C43"
  },
  dailyQuote: {
    fontSize: 24
  }
});
