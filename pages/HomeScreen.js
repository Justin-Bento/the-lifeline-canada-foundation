import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { externalStyleSheet, Typography, Layouts } from "../styles/styles";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={Layouts.container}>
      <Image
        style={Layouts.fullWidthImage}
        source={require("../assets/lifeline-logo-retina.png")}
        placeholder={false}
      />
      <Text style={Typography.titleXL}>
        Not until we are lost do we begin to understand ourselves - Henry T.
      </Text>
      <Pressable
        className="w-full bg-purple-200 p-4 rounded border border-purple-400"
        onPress={() => navigation.navigate("AboutTCL")}
      >
        <Text className="text-lg font-semibold">About TLC</Text>
        <Text className="text-sm">
          Learn About The Lifeline Canada Foundation.
        </Text>
      </Pressable>

      <Pressable
        className="w-full bg-purple-200 p-4 rounded border border-purple-400"
        onPress={() => navigation.navigate("Call")}
      >
        <Text className="text-lg font-semibold">National Hotlines</Text>
        <Text className="text-sm">
          Speak with a compassionate professional.
        </Text>
      </Pressable>
      <Pressable
        className="w-full bg-purple-200 p-4 rounded border border-purple-400"
        onPress={() => navigation.navigate("GetHelp")}
      >
        <Text className="text-lg font-semibold">Get Help</Text>
        <Text className="text-sm">Find the support you need today.</Text>
      </Pressable>
      <Pressable
        className="w-full bg-purple-200 p-4 rounded border border-purple-400"
        onPress={() => navigation.navigate("Resource")}
      >
        <Text className="text-lg font-semibold">Resources</Text>
        <Text className="text-sm">
          Unlock your power for every level of wellness.
        </Text>
      </Pressable>
      <Pressable
        className="w-full bg-purple-200 p-4 rounded border border-purple-400"
        onPress={() => navigation.navigate("Pattern")}
      >
        <Text className="text-lg font-semibold">Pattern Interrupts</Text>
        <Text className="text-sm">Rewiring your mind with something new.</Text>
      </Pressable>
      <Pressable
        className="w-full bg-purple-200 p-4 rounded border border-purple-400"
        onPress={() => navigation.navigate("Details")}
      >
        <Text className="text-lg font-semibold">More Resources</Text>
        <Text className="text-sm">Your toolkit for mental wellness.</Text>
      </Pressable>
    </View>
  );
}
