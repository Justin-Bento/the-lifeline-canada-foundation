import React, { useState } from "react";
import {
  ScrollView,
  FlatList,
  Pressable,
  View,
  Text,
  Linking,
} from "react-native";
import ContentCard from "../components/ContentCard";

export default function HelpScreen() {
  return (
    <ScrollView className="w-11/12 pt-8 mx-auto">
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
      <View className="flex flex-row">
        <View className="flex flex-col items-center">
          <View className="block bg-purple-300 w-20 h-20 rounded-full"></View>
          <Text className="p-10">Phase Chat Line</Text>
        </View>
        <View className="flex flex-col items-center">
          <Text className="p-10">Phase Chat Line</Text>
        </View>
      </View>
      {/* End of Pressable Filters Headline */}
      <View className="flex flex-col gap-8">
        <FlatList
          data={names}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <ContentCard title={item.headline} supporting={item.overview} />
          )}
        />
      </View>
    </ScrollView>
  );
}

const names = [
  { headline: "Canadian Crisis Centers", overview: "Numbers for Support" },
  { headline: "United States Crisis Centers", overview: "Numbers for Support" },
  { headline: "International Crisis Centers", overview: "Numbers for Support" },
  {
    headline: "Coping with Suicidal Thoughts",
    overview: "Find ways to cope with sadness.",
  },
  {
    headline: "How can I help someone",
    overview: "Find ways to cope with sadness.",
  },
  { headline: "myths & facts", overview: "Numbers for Support" },
  { headline: "E-Counselling", overview: "Numbers for Support" },
  { headline: "Self Management", overview: "Numbers for Support" },
  { headline: "Warning Signs", overview: "Numbers for Support" },
  { headline: "Search for a Professional", overview: "Numbers for Support" },
];
