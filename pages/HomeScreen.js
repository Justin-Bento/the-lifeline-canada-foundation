import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Image } from 'expo-image';

  // Get device width
  const { width: screenWidth } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.fullWidthImage} source={require("../assets/lifeline-logo-retina.png")} placeholder={false} />
      </View>
      <View>
        <Text style={styles.dailyQuote}>
          Not until we are lost do we begin to understand ourselves - Henry T.
        </Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.headline}>About TCL</Text>
        <Text style={styles.paragraph}>
          Learn About The Lifeline Canada Foundation.
        </Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.headline}>National Hotlines</Text>
        <Text style={styles.paragraph}>
          Speak with a compassionate professional.
        </Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.headline}>Get Help</Text>
        <Text style={styles.paragraph}>Find the support you need today.</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.headline}>Resources</Text>
        <Text style={styles.paragraph}>
          Unlock your power for every level of wellness.
        </Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.headline}>Pattern Interrupts</Text>
        <Text style={styles.paragraph}>
          Rewiring your mind with something new.
        </Text>
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
    flex: 1,                  // Fills the available space
    alignItems: 'center',     // Centers items horizontally
    justifyContent: 'center', // Centers items vertically
    width: '95%',             // Sets width to 95% of the parent
    alignSelf: 'center',      // Centers the container itself horizontally
    gap: 8,   
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
    color: "#3C3C43",
  },
  dailyQuote: {
    fontSize: 24,
  },
  fullWidthImage: {
    width: screenWidth, // Full width of the device screen
    height: 100,        // You can set height as per your requirement
    resizeMode: 'contain', // Optional: Ensure the image covers the whole width without distortion  
  },
});
