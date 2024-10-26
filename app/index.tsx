import React from "react";
import { ScrollView, FlatList, View, Text, Pressable } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Image } from "expo-image";
import { HomeScreenContent } from "../assets/content";
import { HomeScreenContentItem } from "../types";

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <ScrollView className="w-11/12 mx-auto max-w-[360] pt-4">
      <View className="space-y-2 mb-2 flex-1 justify-center items-center ">
        <Image
          className="w-full h-24"
          source={require("../assets/images/lifeline-logo-retina.png")}
          placeholder={""}
          contentFit="contain"
        />
        <Text className="text-2xl font-medium tracking-tight line-clamp-2 text-center">
          Not until we are lost do we begin to understand ourselves - Henry T.
        </Text>
      </View>
      <View className="flex flex-col gap-8">
        <FlatList<HomeScreenContentItem>
          data={HomeScreenContent}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <Pressable
              accessibilityLabel={item.ay13Label}
              accessibilityRole="button"
              onPress={() => navigation.navigate(item.href)}
              className="w-full bg-purple-200 p-4 rounded border border-purple-400 active:bg-purple-300/30 active:opacity-75 my-1.5"
            >
              <Text className="text-xl font-semibold leading-none tracking-tight">
                {item.key}
              </Text>
              <Text className="text-sm text-gray-700">{item.overview}</Text>
            </Pressable>
          )}
        />
      </View>
    </ScrollView>
  );
}
