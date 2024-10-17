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
        className="w-full bg-purple-200 p-5 rounded border border-purple-400"
        onPress={() => navigation.navigate("AboutTCL")}
      >
        <Text style={Typography.title}>About TLC</Text>
        <Text style={Typography.body2}>
          Learn About The Lifeline Canada Foundation.
        </Text>
      </Pressable>

      <Pressable
        className="w-full bg-purple-200 p-5 rounded border border-purple-400"
        onPress={() => navigation.navigate("Call")}
      >
        <Text style={Typography.title}>National Hotlines</Text>
        <Text style={Typography.body2}>
          Speak with a compassionate professional.
        </Text>
      </Pressable>
      <Pressable
        className="w-full bg-purple-200 p-5 rounded border border-purple-400"
        onPress={() => navigation.navigate("GetHelp")}
      >
        <Text style={Typography.title}>Get Help</Text>
        <Text style={Typography.body2}>Find the support you need today.</Text>
      </Pressable>
      <Pressable
        className="w-full bg-purple-200 p-5 rounded border border-purple-400"
        onPress={() => navigation.navigate("Resource")}
      >
        <Text style={Typography.title}>Resources</Text>
        <Text style={Typography.body2}>
          Unlock your power for every level of wellness.
        </Text>
      </Pressable>
      <Pressable
        className="w-full bg-purple-200 p-5 rounded border border-purple-400"
        onPress={() => navigation.navigate("Pattern")}
      >
        <Text style={Typography.title}>Pattern Interrupts</Text>
        <Text style={Typography.body2}>
          Rewiring your mind with something new.
        </Text>
      </Pressable>
      <Pressable
        className="w-full bg-purple-200 p-5 rounded border border-purple-400"
        onPress={() => navigation.navigate("Details")}
      >
        <Text style={Typography.title}>More Resources</Text>
        <Text style={Typography.body2}>Your toolkit for mental wellness.</Text>
      </Pressable>
    </View>
  );
}
