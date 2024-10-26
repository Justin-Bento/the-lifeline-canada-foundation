import React from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import { HomeScreenContentItem } from "../types";
import { HomeScreenContent } from "../assets/content";
import { Link } from "expo-router";

export default function Index() {
  return (
    <ScrollView className="wrapper center-content space-y-4">
      <Image
        source={require("../assets/images/lifeline-logo-retina.png")}
        style={{ width: "100%", height: 96 }}
        resizeMode="contain" // This replaces "objectFit: 'contain'"
      />

      <Text className="text-2xl font-medium tracking-tight line-clamp-2 text-center">
        Not until we are lost do we begin to understand ourselves - Henry T.
      </Text>
      <FlatList<HomeScreenContentItem>
        data={HomeScreenContent}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Link href={`/${item.href}`} asChild>
            <Pressable
              accessibilityLabel={item.ay13Label}
              accessibilityRole="button"
              className="w-full bg-purple-200 p-4 rounded border border-purple-400 active:bg-purple-300/30 active:opacity-75 my-1.5"
            >
              <Text className="text-xl font-semibold leading-none tracking-tight">
                {item.key}
              </Text>
              <Text className="text-sm text-gray-700">{item.overview}</Text>
            </Pressable>
          </Link>
        )}
      />
    </ScrollView>
  );
}
