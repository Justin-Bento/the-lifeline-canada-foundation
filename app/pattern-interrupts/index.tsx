import React from "react";
import { ScrollView, View, FlatList } from "react-native";
import Headline from "@/components/Headline";
import ContentCard from "@/components/ContentCard";
import { PatternInterrupts } from "@/assets/content";
import CompanyLogo from "@/components/CompanyLogo";
import { CreateSlug } from "@/constants/utils";

export default function PatternInterruptScreen() {
  return (
    <ScrollView className="w-11/12 mx-auto max-w-[360] pt-8 flex-1 flex-col space-y-4">
      <View>
        <CompanyLogo />
        <Headline
          title="Pattern Interrupts"
          overview="Pattern Interrupts are a way to change a person’s pattern of thought. We all have behavior patterns that are habit sequences. Usually habits are useful. Auto pilot means our brains have become so efficient at doing something we can tune out our conscious minds which excels at running patterns or programs automatically. This sometimes can present a problem when trying to change your own or someone else’s habitual patterns of thought, emotion or behavior. It is useful to interrupt a pattern when stuck in a non resourceful state."
        />
      </View>
      <FlatList
        data={PatternInterrupts}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <ContentCard
            title={item.title}
            supporting={item.overview}
            href={`/pattern-interrupts/${CreateSlug(item.title)}`}
          />
        )}
        contentContainerStyle={{ paddingVertical: 8, gap: 8 }} // To add space between cards
      />
    </ScrollView>
  );
}
