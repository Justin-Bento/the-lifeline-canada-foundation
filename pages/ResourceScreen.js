import React from "react";
import { ScrollView, View, FlatList } from "react-native";
import Headline from "../components/Headline";
import ContentCard from "../components/ContentCard";

export default function ResourceScreen() {
  return (
    <ScrollView className="w-11/12 mx-auto pt-6">
      <Headline
        title="Resources"
        supporting="This app provides information about anxiety, depression and suicide. Online resources alone are no substitute for professional medical advice, diagnosis or treatment. Seek the advice of an appropriately qualified healthcare professional before making decisions about your circumstances."
      />
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
  {
    headline: "Coping With Suicidal Thoughts",
    overview: "Find ways to cope with sadness",
  },
  { headline: "Search For A Professional", overview: "Numbers for Support" },
  { headline: "Online Counselling", overview: "Numbers for Support" },
  { headline: "Self Management", overview: "Numbers for Support" },
  { headline: "How Can I Help Someone?", overview: "Numbers for Support" },
  { headline: "Warning Signs", overview: "Numbers for Support" },
  { headline: "Depression", overview: "Numbers for Support" },
  { headline: "Myths & Facts", overview: "Numbers for Support" },
  { headline: "Addiction", overview: "Numbers for Support" },
  { headline: "Anxiety", overview: "Numbers for Support" },
  {
    headline: "Post Traumatic Stress Disorder",
    overview: "Numbers for Support",
  },
  { headline: "Grief", overview: "Numbers for Support" },
  { headline: "Teens & Youth", overview: "Numbers for Support" },
  { headline: "Resources For Parents", overview: "Numbers for Support" },
  { headline: "College Students", overview: "Numbers for Support" },
  { headline: "LGBTQ2+", overview: "Numbers for Support" },
  { headline: "Indigenous Issues", overview: "Numbers for Support" },
  { headline: "Seniors", overview: "Numbers for Support" },
  { headline: "Men", overview: "Numbers for Support" },
  { headline: "Veterans & Military", overview: "Numbers for Support" },
  { headline: "Refugees", overview: "Numbers for Support" },
  { headline: "Attempt Survivors", overview: "Numbers for Support" },
  { headline: "Survivors of Suicide Loss", overview: "Numbers for Support" },
  { headline: "Bereaved Support", overview: "Numbers for Support" },
  { headline: "After Suicide Loss", overview: "Numbers for Support" },
  { headline: "Educators", overview: "Numbers for Support" },
  { headline: "Health Professionals", overview: "Numbers for Support" },
  { headline: "First Responders", overview: "Numbers for Support" },
  { headline: "Care Givers", overview: "Numbers for Support" },
  { headline: "Media Professionals", overview: "Numbers for Support" },
  { headline: "Workplace Employers", overview: "Numbers for Support" },
  { headline: "Resource Organizations", overview: "Number for Support" },
];
