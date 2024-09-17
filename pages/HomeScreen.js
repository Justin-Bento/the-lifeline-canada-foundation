import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Image } from 'expo-image';

// Get device width
const { width: screenWidth } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.fullWidthImage} source={require("../assets/lifeline-logo-retina.png")} placeholder={false} />
      <Text style={styles.dailyQuote}>
        Not until we are lost do we begin to understand ourselves - Henry T.
      </Text>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', // Align items to the top
    width: '100%',  // Use full width
    paddingTop: 50,
    backgroundColor: '#F7F7F7',  // Light background color
  },
  box: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: "#E6D4FF",
    borderWidth: 0.5,
    marginBottom: 4
  
  },
  headline: {
    fontSize: 20,
    fontWeight: 'semibold', // Make headlines bold
    marginBottom: 4, // Space between headline and paragraph
  },
  paragraph: {
    fontSize: 14,
    color: "#3C3C43",
  },
  dailyQuote: {
    fontSize: 24,
    fontStyle: 'italic',    // Italicize the quote
    marginVertical: 20, // Space above and below the quote
  },
  fullWidthImage: {
    width: screenWidth, // Full width of the device screen
    height: 70,     // Adjust height as needed
    resizeMode: 'stretch',  // Ensure the image maintains aspect ratio
  },
});
