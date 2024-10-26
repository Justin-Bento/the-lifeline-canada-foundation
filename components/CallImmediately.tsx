import React from "react";
import { View, Text, Image } from "react-native";

const cardImage = require(`../assets/images/cbef1c0010018ea502ee11746ce1486b.png`);

export default function CallImmediately() {
  return (
    <View className="overflow-hidden rounded-lg bg-white border border-gray-200">
      <View className="px-4 py-5 sm:p-6">
        <Text className="text-lg leading-6 mb-2 font-semibold capitalize text-center">
          If you, or Someone you know is in Crisis, Call 911 Immediately!
        </Text>
        <Text className="text-xs text-gray-500 text-center">
          The LifeLine Canada is Not a Crisis Hotline.
        </Text>
        <Image
          source={cardImage}
          resizeMode="contain"
          style={[{ width: "100%" }, { height: 180 }]}
        />
      </View>
    </View>
  );
}
