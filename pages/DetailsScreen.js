import React from "react";
import { View, Text, Button } from "react-native";

export default function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
