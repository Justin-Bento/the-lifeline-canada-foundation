import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function BottomNavigation() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.icons}>H</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Call')}>
        <Text style={styles.icons}>C</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('GetHelp')}>
        <Text style={styles.icons}>G</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Resource')}>
        <Text style={styles.icons}>R</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('PatternInterrupt')}>
        <Text style={styles.icons}>P</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text style={styles.icons}>M</Text>
      </TouchableOpacity>
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
