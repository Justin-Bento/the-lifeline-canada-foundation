import React from "react";
import { ScrollView, View, FlatList } from "react-native";
import Headline from "../components/Headline";
import ContentCard from "../components/ContentCard";
import { resources } from "../utils/content";

export default function ResourceScreen() {
  return (
    <ScrollView className="w-11/12 mx-auto max-w-[360] pt-6">
      <Headline
        title="Resources"
        supporting="This app provides information about anxiety, depression and suicide. Online resources alone are no substitute for professional medical advice, diagnosis or treatment. Seek the advice of an appropriately qualified healthcare professional before making decisions about your circumstances."
      />
      <View className="flex flex-col gap-8">
        <FlatList
          data={resources}
          keyExtractor={(item) => item.headline}
          renderItem={({ item }) => (
            <ContentCard title={item.headline} supporting={item.overview} />
          )}
        />
      </View>
    </ScrollView>
  );
}
