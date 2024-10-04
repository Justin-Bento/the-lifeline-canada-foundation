import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import externalStyleSheet from "../styles/styles";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={externalStyleSheet.container}>
      <Image
        style={externalStyleSheet.fullWidthImage}
        source={require("../assets/lifeline-logo-retina.png")}
        placeholder={false}
      />
      <Text style={externalStyleSheet.dailyQuote}>
        Not until we are lost do we begin to understand ourselves - Henry T.
      </Text>
      <Pressable
        style={externalStyleSheet.box}
        onPress={() => navigation.navigate("AboutTCL")}
      >
        <Text style={externalStyleSheet.title}>About TLC</Text>
        <Text style={externalStyleSheet.body2}>Learn About The Lifeline Canada Foundation.</Text>
      </Pressable>
      <Pressable
        style={externalStyleSheet.box}
        onPress={() => navigation.navigate("Call")}
      >
        <Text style={externalStyleSheet.title}>National Hotlines</Text>
        <Text style={externalStyleSheet.body2}>Speak with a compassionate professional.</Text>
      </Pressable>
      <Pressable
        style={externalStyleSheet.box}
        onPress={() => navigation.navigate("GetHelp")}
      >
        <Text style={externalStyleSheet.title}>Get Help</Text>
        <Text style={externalStyleSheet.body2}>Find the support you need today.</Text>
      </Pressable>
      <Pressable
        style={externalStyleSheet.box}
        onPress={() => navigation.navigate("Resource")}
      >
        <Text style={externalStyleSheet.title}>Resources</Text>
        <Text style={externalStyleSheet.body2}>Unlock your power for every level of wellness.</Text>
      </Pressable>
      <Pressable
        style={externalStyleSheet.box}
        onPress={() => navigation.navigate("Pattern")}
      >
        <Text style={externalStyleSheet.title}>Pattern Interrupts</Text>
        <Text style={externalStyleSheet.body2}>Rewiring your mind with something new.</Text>
      </Pressable>
      <Pressable
        style={externalStyleSheet.box}
        onPress={() => navigation.navigate("Details")}
      >
        <Text style={externalStyleSheet.title}>More Resources</Text>
        <Text style={externalStyleSheet.body2}>Your toolkit for mental wellness.</Text>
      </Pressable>
    </View>
  );
}
