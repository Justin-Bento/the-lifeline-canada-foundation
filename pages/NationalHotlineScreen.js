import React from "react";
import { View, Text, ScrollView, Image, Pressable } from "react-native";
import { getHelp } from "../utils/charities.json";

function getImagePath(path) {
  return images[path] || null; // Return null if the image path doesn't exist
}

export default function NationalHotlineScreen() {
  return (
    <ScrollView className="w-11/12 mx-auto py-10">
      <View className="mb-7">
        <Text className="text-4xl font-medium text-start">
          National Hotlines
        </Text>
        <Text className="text-base font-medium text-start mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, rem
          corrupti impedit eos officia illo sit debitis blanditiis.
        </Text>
      </View>
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
          key={index}
          className="overflow-hidden rounded-lg bg-white shadow-sm mt-10"
        >
          {charity.media && (
            <View className="px-4 py-5 sm:p-6 w-full aspect-[16/8] bg-gray-300 flex items-center justify-center">
              <Image
                className="w-full h-16 object-center"
                source={charity.media} // Use the static mapping
              />
            </View>
          )}
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
