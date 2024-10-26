import React from "react";
import { View, Image } from "react-native";

export default function CompanyLogo() {
  return (
    <View>
      <Image
        source={require("../assets/images/lifeline-logo-retina.png")}
        style={{ width: "100%", height: 96 }}
        resizeMode="contain" // This replaces "objectFit: 'contain'"
      />
    </View>
  );
}
