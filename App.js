import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.display_title}>The LifeLine Canada Foundation</Text>
      <Text style={styles.large_body}>“Mental Health Resources at Your Fingertips</Text>
      <Button title="Continue" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  display_title: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center"
  },
  large_body: {
    marginTop: 16,
    marginBottom: 16,
    fontSize: 20,
    textAlign: "center"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
