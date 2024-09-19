import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';

// Get device width
const { width: screenWidth } = Dimensions.get('window');

export default function HomeScreen() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Image style={styles.fullWidthImage} source={require("../assets/lifeline-logo-retina.png")} placeholder={false} />
      <Text style={styles.dailyQuote}>
        Not until we are lost do we begin to understand ourselves - Henry T.
      </Text>
      <Pressable style={styles.box}>
        <Text style={styles.headline}>About TCL</Text>
        <Text style={styles.paragraph}>
          Learn About The Lifeline Canada Foundation.
        </Text>
      </Pressable>
      <Pressable style={styles.box}>
        <Text style={styles.headline}>National Hotlines</Text>
        <Text style={styles.paragraph}>
          Speak with a compassionate professional.
        </Text>
      </Pressable>
      <Pressable style={styles.box}>
        <Text style={styles.headline}>Get Help</Text>
        <Text style={styles.paragraph}>Find the support you need today.</Text>
      </Pressable>
      <Pressable style={styles.box}>
        <Text style={styles.headline}>Resources</Text>
        <Text style={styles.paragraph}>
          Unlock your power for every level of wellness.
        </Text>
      </Pressable>
      <Pressable style={styles.box}>
        <Text style={styles.headline}>Pattern Interrupts</Text>
        <Text style={styles.paragraph}>
          Rewiring your mind with something new.
        </Text>
      </Pressable>
      <Pressable style={styles.box}>
        <Text style={styles.headline}>More Resources</Text>
        <Text style={styles.paragraph}>Your toolkit for mental wellness.</Text>
      </Pressable>
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
    paddingHorizontal: 16,
    gap: 10,
    backgroundColor: '#F7F7F7',  // Light background color
  },
  box: {
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderWidth: 1,             
    borderColor: 'rgba(54, 7, 100, 0.3)',     
    backgroundColor: 'rgb(242, 232, 255)', 
  },
  headline: {
    fontSize: 16,
    fontWeight: "500", // Make headlines bold
    marginBottom: 4, // Space between headline and paragraph
    color: 'rgba(31, 41, 55, 1)',
  },
  paragraph: {
    fontSize: 14,
    color: 'rgba(31, 41, 55, 0.7)',
    fontWeight: "400"
  },
  dailyQuote: {
    fontSize: 22,
    fontStyle: 'italic',    // Italicize the quote
    marginVertical: 10, // Space above and below the quote
  },
  fullWidthImage: {
    width: screenWidth - 20, // Full width of the device screen
    height: 70,     // Adjust height as needed
    resizeMode: 'stretch',  // Ensure the image maintains aspect ratio
  },
});
