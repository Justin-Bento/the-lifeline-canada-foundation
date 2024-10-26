import React from "react";
import { View, Text, ScrollView, Image, FlatList } from "react-native";
import { NationalHotlines } from "@/assets/content";
import ContentCard from "@/components/ContentCard";
import CallImmediately from "@/components/CallImmediately";
import CompanyLogo from "@/components/CompanyLogo";

// function getImagePath(path: string): string | null {
//   return images[path] || null;
// }

export default function NationalHotlineScreen() {
  return (
    <ScrollView className="wrapper">
      <CompanyLogo />
      <View className="mb-7">
        <Text className="text-4xl font-medium text-start">
          National Hotlines
        </Text>
        <Text className="text-base font-medium text-start mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, rem
          corrupti impedit eos officia illo sit debitis blanditiis.
        </Text>
      </View>
      <CallImmediately />
      {/* End of the 911 Card */}
      <FlatList
        data={NationalHotlines}
        keyExtractor={(item) => item.headline}
        renderItem={({ item }) => (
          <ContentCard
            key={item.headline}
            title={item.headline}
            supporting={item.overview}
            image={`/assets/images/${item.media}`}
          />
        )}
      />
    </ScrollView>
  );
}
