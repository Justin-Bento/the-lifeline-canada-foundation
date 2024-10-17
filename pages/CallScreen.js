import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { getHelp } from "../utils/charities.json";

export default function CallScreen() {
  return (
    <ScrollView className="w-11/12 mx-auto py-10">
      <View className="overflow-hidden bg-white shadow sm:rounded-lg">
        <View className="px-4 py-5 sm:p-6">
          <Text className="text-lg font-bold text-center">
            If you, or Someone you know is in Crisis, Call 911 Immediately!
          </Text>
          <Text className="text-base/7 text-center mt-2">
            The LifeLine Canada is Not a Crisis Hotline.
          </Text>
          <Image
            source={require("../assets/card_image/cbef1c0010018ea502ee11746ce1486b.png")}
            className="w-full h-52 rounded-lg mb-3.5" // Adjusted based on your style
          />
        </View>
      </View>
      {/* End of the 911 Card */}
      {getHelp.map((charity, index) => (
        <View
          key={index} // Unique key for each element
          className="overflow-hidden rounded-lg bg-white shadow-sm mt-10"
        >
          <View className="px-4 py-5 sm:p-6 w-full aspect-[16/8] bg-gray-300 flex items-center justify-center">
            <Text>Visual Media Is Here</Text>
          </View>
          <View className="bg-white px-4 py-4 sm:px-6">
            <Text className="text-xl font-semibold capitalize mb-1">
              {charity.title}
            </Text>
            <Text className="text-sm">{charity.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
