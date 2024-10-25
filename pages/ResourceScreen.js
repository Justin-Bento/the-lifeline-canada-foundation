import React from "react";
import { View, Text, ScrollView } from "react-native";

export default function ResourceScreen() {
  return (
    <ScrollView className="w-11/12 mx-auto pt-6">
      <View className="space-y-2">
        <Text className="scroll-m-20 text-3xl font-semibold tracking-tight">
          Resources
        </Text>
        <Text className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          natus perferendis rerum nobis fugiat eum dolor dolorem, exercitationem
          nostrum aperiam, quos odit in, necessitatibus dolorum odio porro
          deserunt delectus qui.
        </Text>
      </View>
    </ScrollView>
  );
}
