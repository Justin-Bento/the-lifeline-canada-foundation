import React from "react";
import { ScrollView, View, Text } from "react-native";
import Headline from "../components/Headline";

export default function DetailsScreen() {
  return (
    <ScrollView className="w-11/12 mx-auto pt-8 flex-1 flex-col space-y-4">
      <Headline
        title="Self-Care Hub"
        supporting="This app provides information about anxiety, depression and suicide. Online resources alone are no substitute for professional medical advice, diagnosis or treatment. Seek the advice of an appropriately qualified healthcare professional before making decisions about your circumstances."
      />
      <View className="bg-gray-400 w-full h-[2]"></View>
    </ScrollView>
  );
}
