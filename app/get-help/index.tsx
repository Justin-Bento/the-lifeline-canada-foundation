import React from "react";
import { ScrollView, FlatList, View, Text } from "react-native";
import ContentCard from "@/components/ContentCard";
import { GetHelp } from "@/assets/content";

export default function GetHelpScreen() {
  return (
    <ScrollView className="w-11/12 mx-auto max-w-[360] pt-8 flex-1 flex-col space-y-4">
      <View className="space-y-2">
        <Text className="text-3xl font-medium tracking-tight line-clamp-2">
          Get Help
        </Text>
        <Text className="text-base leading-6">
          If in crisis, call 911 or the Mental Health Crisis Lines provided
          below. The LifeLine Canada Foundation is not a crisis hotline.
        </Text>
      </View>
      {/* End of Headline */}
      <View className="flex-row w-full space-x-4 justify-between">
        <View className="flex-1 items-center space-y-2">
          <View className="w-20 aspect-square bg-gray-300 rounded-full border-2 border-offset-2" />
          <Text>Phase Chat Line</Text>
        </View>
        <View className="flex-1 items-center space-y-2">
          <View className="w-20 aspect-square bg-gray-300 rounded-full border-2 border-offset-2" />
          <Text>Phase Chat Line</Text>
        </View>
        <View className="flex-1 items-center space-y-2">
          <View className="w-20 aspect-square bg-gray-300 rounded-full border-2 border-offset-2" />
          <Text>Phase Chat Line</Text>
        </View>
      </View>
      {/* End of Pressable Filters Headline */}
      <FlatList
        data={GetHelp}
        keyExtractor={(item) => item.headline}
        renderItem={({ item }) => (
          <ContentCard title={item.headline} supporting={item.overview} />
        )}
        contentContainerStyle={{ paddingVertical: 8, gap: 8 }} // To add space between cards
      />
    </ScrollView>
  );
}
