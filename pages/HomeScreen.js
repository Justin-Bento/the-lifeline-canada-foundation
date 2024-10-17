import React from "react";
import { View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View className="bg-fuchsia-50/50">
      <View className="w-11/12 mx-auto min-h-[87vh] flex items-center justify-center space-y-2">
        <Image
          className="w-full h-16 object-center"
          source={require("../assets/lifeline-logo-retina.png")}
          placeholder={false}
        />
        <Text className="text-2xl font-medium tracking-tight line-clamp-2">
          Not until we are lost do we begin to understand ourselves - Henry T.
        </Text>

        <Pressable
          className="w-full bg-purple-200 p-4 rounded border border-purple-400 active:bg-purple-300/30 active:opacity-75"
          onPress={() => navigation.navigate("AboutTCL")}
          accessibilityLabel="Learn more about The Lifeline Canada Foundation"
          accessibilityRole="button"
        >
          <Text className="text-lg font-semibold">About TLC</Text>
          <Text className="text-sm">
            Learn About The Lifeline Canada Foundation.
          </Text>
        </Pressable>

        <Pressable
          className="w-full bg-purple-200 p-4 rounded border border-purple-400 active:bg-purple-300/30 active:opacity-75"
          onPress={() => navigation.navigate("Call")}
          accessibilityLabel="Contact national hotlines for professional support"
          accessibilityRole="button"
        >
          <Text className="text-lg font-semibold">National Hotlines</Text>
          <Text className="text-sm">
            Speak with a compassionate professional.
          </Text>
        </Pressable>

        <Pressable
          className="w-full bg-purple-200 p-4 rounded border border-purple-400 active:bg-purple-300/30 active:opacity-75"
          onPress={() => navigation.navigate("GetHelp")}
          accessibilityLabel="Find the support you need today"
          accessibilityRole="button"
        >
          <Text className="text-lg font-semibold">Get Help</Text>
          <Text className="text-sm">Find the support you need today.</Text>
        </Pressable>

        <Pressable
          className="w-full bg-purple-200 p-4 rounded border border-purple-400 active:bg-purple-300/30 active:opacity-75"
          onPress={() => navigation.navigate("Resource")}
          accessibilityLabel="Explore resources for wellness"
          accessibilityRole="button"
        >
          <Text className="text-lg font-semibold">Resources</Text>
          <Text className="text-sm">
            Unlock your power for every level of wellness.
          </Text>
        </Pressable>

        <Pressable
          className="w-full bg-purple-200 p-4 rounded border border-purple-400 active:bg-purple-300/30 active:opacity-75"
          onPress={() => navigation.navigate("Pattern")}
          accessibilityLabel="Learn how to rewire your mind"
          accessibilityRole="button"
        >
          <Text className="text-lg font-semibold">Pattern Interrupts</Text>
          <Text className="text-sm">
            Rewiring your mind with something new.
          </Text>
        </Pressable>

        <Pressable
          className="w-full bg-purple-200 p-4 rounded border border-purple-400 active:bg-purple-300/30 active:opacity-75"
          onPress={() => navigation.navigate("Details")}
          accessibilityLabel="Explore additional tools for mental wellness"
          accessibilityRole="button"
        >
          <Text className="text-lg font-semibold">More Resources</Text>
          <Text className="text-sm">Your toolkit for mental wellness.</Text>
        </Pressable>
      </View>
    </View>
  );
}
